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
