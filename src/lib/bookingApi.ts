// In production, /v1/* is reverse-proxied on this same origin to the HMS backend
// (see nginx config), so requests stay same-origin and need no CORS allowlisting.
// For local dev without that proxy, set VITE_BOOKING_API_BASE_URL to the backend's
// own URL (e.g. http://localhost:4001).
const API_BASE_URL = (import.meta.env.VITE_BOOKING_API_BASE_URL || '').replace(/\/$/, '');

export interface RoomType {
    id: string;
    name: string;
    description: string | null;
    base_rate: string | number;
    max_occupancy: number;
    amenities: string[];
}

export interface BookingIntakePayload {
    name: string;
    phone: string;
    email?: string;
    check_in_date: string; // YYYY-MM-DD
    check_out_date: string; // YYYY-MM-DD
    room_type_id?: string;
    adults?: number;
    children?: number;
    notes?: string;
    website?: string; // honeypot, must stay empty
}

export interface BookingIntakeResponse {
    ok: boolean;
    request_id: string;
    status: string;
    message: string;
    total_amount: number;
    advance_amount: number;
    advance_percent: number;
    nights: number;
    currency: string;
    payment_required: boolean;
}

export interface PaymentOrderResponse {
    order_id: string;
    amount: number;
    currency: string;
    key_id: string;
    booking_id: string;
}

export interface PaymentVerifyPayload {
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;
}

export interface PaymentVerifyResponse {
    ok: boolean;
    status: string;
    message: string;
}

async function parseErrorMessage(res: Response): Promise<string> {
    try {
        const body = await res.json();
        if (body?.error) return body.error;
    } catch {
        // response wasn't JSON — fall through to generic message
    }
    return `Request failed (${res.status})`;
}

export async function fetchRoomTypes(): Promise<RoomType[]> {
    const res = await fetch(`${API_BASE_URL}/v1/public/room-types`);
    if (!res.ok) {
        throw new Error(await parseErrorMessage(res));
    }
    const data = await res.json();
    return data.room_types ?? [];
}

export async function submitBookingIntake(payload: BookingIntakePayload): Promise<BookingIntakeResponse> {
    const res = await fetch(`${API_BASE_URL}/v1/public/booking-intake`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });
    if (!res.ok) {
        throw new Error(await parseErrorMessage(res));
    }
    return res.json();
}

export async function createPaymentOrder(bookingId: string): Promise<PaymentOrderResponse> {
    const res = await fetch(`${API_BASE_URL}/v1/public/bookings/${bookingId}/payment-order`, {
        method: 'POST',
    });
    if (!res.ok) {
        throw new Error(await parseErrorMessage(res));
    }
    return res.json();
}

export async function verifyPayment(bookingId: string, payload: PaymentVerifyPayload): Promise<PaymentVerifyResponse> {
    const res = await fetch(`${API_BASE_URL}/v1/public/bookings/${bookingId}/payment-verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });
    if (!res.ok) {
        throw new Error(await parseErrorMessage(res));
    }
    return res.json();
}

/** Lazily loads Razorpay's Checkout script once and caches the promise. */
let razorpayScriptPromise: Promise<void> | null = null;
export function loadRazorpayScript(): Promise<void> {
    if (window.Razorpay) return Promise.resolve();
    if (razorpayScriptPromise) return razorpayScriptPromise;
    razorpayScriptPromise = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => {
            razorpayScriptPromise = null;
            reject(new Error('Could not load the payment form — check your connection and try again.'));
        };
        document.body.appendChild(script);
    });
    return razorpayScriptPromise;
}

declare global {
    interface Window {
        Razorpay: new (options: Record<string, unknown>) => {
            open: () => void;
            on?: (event: string, handler: (response: unknown) => void) => void;
        };
    }
}
