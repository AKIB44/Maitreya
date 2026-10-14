import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { format } from 'date-fns';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarIcon, Minus, Plus, CheckCircle2, Loader2, PartyPopper, CreditCard } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Dialog,
    DialogContent,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import {
    fetchRoomTypes,
    submitBookingIntake,
    createPaymentOrder,
    verifyPayment,
    loadRazorpayScript,
    type RoomType,
} from '@/lib/bookingApi';
import { toast } from 'sonner';

interface StayInfo {
    checkIn: Date;
    checkOut: Date;
    guests: number;
    roomTypeName: string | null;
}

const toIsoDate = (date: Date) => format(date, 'yyyy-MM-dd');

const Booking = () => {
    useEffect(() => {
        document.title = 'Book Your Stay - Maitreya Beach Resort';
    }, []);

    const [checkIn, setCheckIn] = useState<Date | undefined>();
    const [checkOut, setCheckOut] = useState<Date | undefined>();
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);
    const [roomTypeId, setRoomTypeId] = useState<string>('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [notes, setNotes] = useState('');
    const [website, setWebsite] = useState(''); // honeypot
    const [formError, setFormError] = useState<string | null>(null);
    const [confirmation, setConfirmation] = useState<{
        requestId: string;
        message: string;
    } & StayInfo | null>(null);

    const [pendingPayment, setPendingPayment] = useState<{
        bookingId: string;
        amount: number;
        currency: string;
    } & StayInfo | null>(null);
    const [isStartingPayment, setIsStartingPayment] = useState(false);
    const [paymentError, setPaymentError] = useState<string | null>(null);

    const { data: roomTypes, isLoading: roomTypesLoading, isError: roomTypesError } = useQuery<RoomType[]>({
        queryKey: ['room-types'],
        queryFn: fetchRoomTypes,
    });

    const startPayment = async (bookingId: string, amount: number, currency: string, stayInfo: StayInfo) => {
        setPaymentError(null);
        setIsStartingPayment(true);
        try {
            await loadRazorpayScript();
            const order = await createPaymentOrder(bookingId);
            setIsStartingPayment(false);

            const rzp = new window.Razorpay({
                key: order.key_id,
                amount: Math.round(order.amount * 100),
                currency: order.currency,
                name: 'Maitreya Beach Resort',
                description: 'Booking advance payment',
                order_id: order.order_id,
                prefill: {
                    name: name.trim(),
                    contact: phone.trim(),
                    email: email.trim() || undefined,
                },
                theme: { color: '#D4AF37' },
                handler: async (response: { razorpay_order_id: string; razorpay_payment_id: string; razorpay_signature: string }) => {
                    try {
                        const result = await verifyPayment(bookingId, {
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                        });
                        setConfirmation({ requestId: bookingId, message: result.message, ...stayInfo });
                        setPendingPayment(null);
                        setPaymentError(null);
                    } catch (err) {
                        const msg = err instanceof Error ? err.message : 'Payment verification failed';
                        setPaymentError(`Payment was received but we couldn't confirm it automatically (${msg}). Our team will verify and confirm your booking shortly.`);
                        toast.error('Payment verification needs a manual check — we\'ll follow up shortly.');
                    }
                },
                modal: {
                    ondismiss: () => {
                        setPaymentError('Payment was not completed. Your request is saved — you can retry payment below whenever you\'re ready.');
                    },
                },
            });
            rzp.on?.('payment.failed', (resp: { error?: { description?: string } }) => {
                setPaymentError(resp?.error?.description || 'Payment failed. Please try again.');
            });
            rzp.open();
        } catch (err) {
            setIsStartingPayment(false);
            setPaymentError(err instanceof Error ? err.message : 'Could not start payment right now');
        }
    };

    const bookingMutation = useMutation({
        mutationFn: submitBookingIntake,
        onSuccess: (data) => {
            setFormError(null);
            const stayInfo: StayInfo = {
                checkIn: checkIn!,
                checkOut: checkOut!,
                guests: adults + children,
                roomTypeName: roomTypes?.find((rt) => rt.id === roomTypeId)?.name ?? null,
            };
            if (data.payment_required) {
                setPendingPayment({
                    bookingId: data.request_id,
                    amount: data.advance_amount,
                    currency: data.currency,
                    ...stayInfo,
                });
                startPayment(data.request_id, data.advance_amount, data.currency, stayInfo);
            } else {
                setConfirmation({ requestId: data.request_id, message: data.message, ...stayInfo });
            }
        },
        onError: (err: Error) => {
            setFormError(err.message);
            toast.error(err.message || 'Something went wrong. Please try again.');
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormError(null);

        if (!checkIn || !checkOut) {
            setFormError('Please select your check-in and check-out dates.');
            return;
        }
        if (checkOut <= checkIn) {
            setFormError('Check-out date must be after check-in date.');
            return;
        }
        if (!name.trim() || !phone.trim()) {
            setFormError('Please enter your name and phone number.');
            return;
        }

        bookingMutation.mutate({
            name: name.trim(),
            phone: phone.trim(),
            email: email.trim() || undefined,
            check_in_date: toIsoDate(checkIn),
            check_out_date: toIsoDate(checkOut),
            room_type_id: roomTypeId || undefined,
            adults,
            children,
            notes: notes.trim() || undefined,
            website,
        });
    };

    const resetForm = () => {
        setCheckIn(undefined);
        setCheckOut(undefined);
        setAdults(2);
        setChildren(0);
        setRoomTypeId('');
        setName('');
        setPhone('');
        setEmail('');
        setNotes('');
    };

    const closeConfirmation = () => {
        setConfirmation(null);
        resetForm();
    };

    const cancelPendingPayment = () => {
        setPendingPayment(null);
        setPaymentError(null);
        resetForm();
    };

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 pt-24 bg-resort-cream">
                <section className="py-16">
                    <div className="resort-container">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            className="text-center max-w-3xl mx-auto mb-12"
                        >
                            <h2 className="text-sm uppercase tracking-widest text-resort-gold mb-2">Reserve Your Stay</h2>
                            <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-resort-dark">
                                Check Availability &amp; Request Your Booking
                            </h3>
                            <p className="text-resort-dark/80">
                                Tell us your travel dates and preferences, then pay a small advance to confirm your
                                booking instantly — no waiting for a callback.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
                            viewport={{ once: true }}
                            className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-6 md:p-10"
                        >
                            {pendingPayment ? (
                                <div className="text-center py-10">
                                    <div className="mx-auto mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-resort-gold/10">
                                        <CreditCard className="text-resort-gold" size={32} />
                                    </div>
                                    <h4 className="font-playfair text-2xl font-bold text-resort-dark mb-3">
                                        Complete Your Advance Payment
                                    </h4>
                                    <p className="text-resort-dark/80 mb-1">
                                        Pay <span className="font-semibold">₹{pendingPayment.amount.toLocaleString('en-IN')}</span> now to confirm your booking instantly.
                                    </p>
                                    <p className="text-xs text-resort-dark/50 mb-6">
                                        Reference ID: <span className="font-mono">{pendingPayment.bookingId}</span>
                                    </p>

                                    {paymentError && (
                                        <p className="text-sm text-red-600 mb-4 max-w-sm mx-auto">{paymentError}</p>
                                    )}

                                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                        <Button
                                            variant="outline"
                                            onClick={cancelPendingPayment}
                                            className="border-resort-gold text-resort-gold hover:bg-resort-gold/10"
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            onClick={() => startPayment(pendingPayment.bookingId, pendingPayment.amount, pendingPayment.currency, pendingPayment)}
                                            disabled={isStartingPayment}
                                            className="bg-resort-gold hover:bg-resort-gold/90 text-white"
                                        >
                                            {isStartingPayment ? (
                                                <>
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                    Starting…
                                                </>
                                            ) : (
                                                'Pay Advance Now'
                                            )}
                                        </Button>
                                    </div>
                                </div>
                            ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                    {/* Honeypot field — hidden from real users */}
                                    <input
                                        type="text"
                                        name="website"
                                        value={website}
                                        onChange={(e) => setWebsite(e.target.value)}
                                        className="hidden"
                                        tabIndex={-1}
                                        autoComplete="off"
                                    />

                                    {/* Stay Period */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <Label className="mb-2 block text-resort-dark">Check-in</Label>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        type="button"
                                                        variant="outline"
                                                        className={cn(
                                                            'w-full justify-start text-left font-normal',
                                                            !checkIn && 'text-muted-foreground'
                                                        )}
                                                    >
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {checkIn ? format(checkIn, 'PPP') : 'Select date'}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0 bg-white z-50" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={checkIn}
                                                        onSelect={(date) => {
                                                            setCheckIn(date);
                                                            if (checkOut && date && checkOut <= date) {
                                                                setCheckOut(undefined);
                                                            }
                                                        }}
                                                        disabled={(date) => date < today}
                                                        initialFocus
                                                        className="pointer-events-auto"
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </div>

                                        <div>
                                            <Label className="mb-2 block text-resort-dark">Check-out</Label>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        type="button"
                                                        variant="outline"
                                                        disabled={!checkIn}
                                                        className={cn(
                                                            'w-full justify-start text-left font-normal',
                                                            !checkOut && 'text-muted-foreground'
                                                        )}
                                                    >
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {checkOut ? format(checkOut, 'PPP') : 'Select date'}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0 bg-white z-50" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={checkOut}
                                                        onSelect={setCheckOut}
                                                        disabled={(date) => !checkIn || date <= checkIn}
                                                        initialFocus
                                                        className="pointer-events-auto"
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                    </div>

                                    {/* Guests */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <Label className="mb-2 block text-resort-dark">Adults</Label>
                                            <div className="flex items-center gap-4 border rounded-md px-4 py-2">
                                                <button
                                                    type="button"
                                                    onClick={() => setAdults((n) => Math.max(1, n - 1))}
                                                    className="text-resort-gold hover:text-resort-dark transition-colors"
                                                    aria-label="Decrease adults"
                                                >
                                                    <Minus size={18} />
                                                </button>
                                                <span className="flex-1 text-center">{adults}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => setAdults((n) => Math.min(10, n + 1))}
                                                    className="text-resort-gold hover:text-resort-dark transition-colors"
                                                    aria-label="Increase adults"
                                                >
                                                    <Plus size={18} />
                                                </button>
                                            </div>
                                        </div>

                                        <div>
                                            <Label className="mb-2 block text-resort-dark">Children</Label>
                                            <div className="flex items-center gap-4 border rounded-md px-4 py-2">
                                                <button
                                                    type="button"
                                                    onClick={() => setChildren((n) => Math.max(0, n - 1))}
                                                    className="text-resort-gold hover:text-resort-dark transition-colors"
                                                    aria-label="Decrease children"
                                                >
                                                    <Minus size={18} />
                                                </button>
                                                <span className="flex-1 text-center">{children}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => setChildren((n) => Math.min(10, n + 1))}
                                                    className="text-resort-gold hover:text-resort-dark transition-colors"
                                                    aria-label="Increase children"
                                                >
                                                    <Plus size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Room Type */}
                                    <div>
                                        <Label className="mb-2 block text-resort-dark">Room Type</Label>
                                        <Select value={roomTypeId} onValueChange={setRoomTypeId}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue
                                                    placeholder={
                                                        roomTypesLoading
                                                            ? 'Loading room types…'
                                                            : roomTypesError
                                                                ? 'Could not load room types'
                                                                : 'Any available room type'
                                                    }
                                                />
                                            </SelectTrigger>
                                            <SelectContent className="bg-white z-50">
                                                {roomTypes?.map((rt) => (
                                                    <SelectItem key={rt.id} value={rt.id}>
                                                        {rt.name} — ₹{rt.base_rate} / night (up to {rt.max_occupancy} guests)
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {roomTypesError && (
                                            <p className="text-sm text-red-500 mt-1">
                                                Couldn't load room types right now — you can still submit a request and we'll match you to the best available room.
                                            </p>
                                        )}
                                    </div>

                                    {/* Contact Details */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="name" className="mb-2 block text-resort-dark">Full Name *</Label>
                                            <Input
                                                id="name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Your full name"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="phone" className="mb-2 block text-resort-dark">Phone Number *</Label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                placeholder="+91 9XXXXXXXXX"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="email" className="mb-2 block text-resort-dark">Email (optional)</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="you@example.com"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="notes" className="mb-2 block text-resort-dark">Special Requests (optional)</Label>
                                        <Textarea
                                            id="notes"
                                            value={notes}
                                            onChange={(e) => setNotes(e.target.value)}
                                            placeholder="AC room, early check-in, sea view, etc."
                                            rows={3}
                                        />
                                    </div>

                                    {formError && (
                                        <p className="text-sm text-red-600">{formError}</p>
                                    )}

                                    <Button
                                        type="submit"
                                        disabled={bookingMutation.isPending}
                                        className="w-full bg-resort-gold hover:bg-resort-gold/90 text-white py-6 text-base"
                                    >
                                        {bookingMutation.isPending ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Submitting…
                                            </>
                                        ) : (
                                            'Request Booking & Pay Advance'
                                        )}
                                    </Button>

                                    <p className="text-xs text-center text-resort-dark/50">
                                        An advance payment is required to confirm your booking instantly — you'll be
                                        taken to a secure Razorpay checkout right after this step.
                                    </p>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </section>
            </main>

            <Dialog open={!!confirmation} onOpenChange={(open) => { if (!open) closeConfirmation(); }}>
                <DialogContent className="sm:max-w-md bg-white text-center">
                    <AnimatePresence>
                        {confirmation && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                                className="py-6"
                            >
                                <motion.div
                                    initial={{ scale: 0, rotate: -15 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ delay: 0.15, type: 'spring', stiffness: 260, damping: 18 }}
                                    className="mx-auto mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-resort-gold/10"
                                >
                                    <CheckCircle2 className="text-resort-gold" size={40} />
                                </motion.div>

                                <h4 className="font-playfair text-2xl font-bold text-resort-dark mb-2 flex items-center justify-center gap-2">
                                    Booking Confirmed <PartyPopper className="text-resort-gold" size={22} />
                                </h4>
                                <p className="text-resort-dark/80 mb-4">{confirmation.message}</p>

                                <div className="bg-resort-cream rounded-lg p-4 mb-4 text-left text-sm space-y-1">
                                    <p>
                                        <span className="text-resort-dark/60">Stay:</span>{' '}
                                        <span className="font-medium text-resort-dark">
                                            {format(confirmation.checkIn, 'd MMM yyyy')} → {format(confirmation.checkOut, 'd MMM yyyy')}
                                        </span>
                                    </p>
                                    <p>
                                        <span className="text-resort-dark/60">Guests:</span>{' '}
                                        <span className="font-medium text-resort-dark">{confirmation.guests}</span>
                                    </p>
                                    {confirmation.roomTypeName && (
                                        <p>
                                            <span className="text-resort-dark/60">Room Type:</span>{' '}
                                            <span className="font-medium text-resort-dark">{confirmation.roomTypeName}</span>
                                        </p>
                                    )}
                                </div>

                                <p className="text-xs text-resort-dark/50 mb-6">
                                    Reference ID: <span className="font-mono">{confirmation.requestId}</span>
                                </p>

                                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                    <Button
                                        onClick={closeConfirmation}
                                        variant="outline"
                                        className="border-resort-gold text-resort-gold hover:bg-resort-gold/10"
                                    >
                                        Make Another Request
                                    </Button>
                                    <Button
                                        onClick={closeConfirmation}
                                        className="bg-resort-gold hover:bg-resort-gold/90 text-white"
                                    >
                                        Done
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </DialogContent>
            </Dialog>

            <Footer />
        </div>
    );
};

export default Booking;
