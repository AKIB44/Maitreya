import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { CalendarIcon, Minus, Plus, CheckCircle2, Loader2 } from 'lucide-react';
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
import { cn } from '@/lib/utils';
import { fetchRoomTypes, submitBookingIntake, type RoomType } from '@/lib/bookingApi';
import { toast } from 'sonner';

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
    const [successMessage, setSuccessMessage] = useState<{ requestId: string; message: string } | null>(null);

    const { data: roomTypes, isLoading: roomTypesLoading, isError: roomTypesError } = useQuery<RoomType[]>({
        queryKey: ['room-types'],
        queryFn: fetchRoomTypes,
    });

    const bookingMutation = useMutation({
        mutationFn: submitBookingIntake,
        onSuccess: (data) => {
            setSuccessMessage({ requestId: data.request_id, message: data.message });
            setFormError(null);
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
        setSuccessMessage(null);
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
                                Tell us your travel dates and preferences. Our front desk will confirm your booking
                                over phone or WhatsApp shortly after you submit this request.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
                            viewport={{ once: true }}
                            className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-6 md:p-10"
                        >
                            {successMessage ? (
                                <div className="text-center py-10">
                                    <CheckCircle2 className="mx-auto text-resort-gold mb-4" size={56} />
                                    <h4 className="font-playfair text-2xl font-bold text-resort-dark mb-3">
                                        Request Received!
                                    </h4>
                                    <p className="text-resort-dark/80 mb-2">{successMessage.message}</p>
                                    <p className="text-sm text-resort-dark/60 mb-6">
                                        Reference ID: <span className="font-mono">{successMessage.requestId}</span>
                                    </p>
                                    <Button onClick={resetForm} variant="outline" className="border-resort-gold text-resort-gold hover:bg-resort-gold/10">
                                        Make Another Request
                                    </Button>
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
                                            'Request Booking'
                                        )}
                                    </Button>

                                    <p className="text-xs text-center text-resort-dark/50">
                                        This sends a booking request to our front desk — we'll confirm availability and
                                        reach out via phone or WhatsApp. No payment is required now.
                                    </p>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Booking;
