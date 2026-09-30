import type { BookingAdapter, BookingRequest, DateRange, InquirySender } from '../types';
import { overlaps } from '../types';

const toIso = (d: string) => `${d.slice(0, 4)}-${d.slice(4, 6)}-${d.slice(6, 8)}`;

/** Čita zauzete termine iz iCal feeda (npr. Booking.com export kalendara). */
export function parseIcal(text: string): DateRange[] {
  const unfolded = text.replace(/\r?\n[ \t]/g, '');
  return unfolded
    .split('BEGIN:VEVENT')
    .slice(1)
    .flatMap((block) => {
      const start = block.match(/DTSTART[^:]*:(\d{8})/)?.[1];
      const end = block.match(/DTEND[^:]*:(\d{8})/)?.[1];
      return start && end ? [{ from: toIso(start), to: toIso(end) }] : [];
    });
}

/**
 * Dostupnost iz iCal-a, rezervacija i dalje kao upit.
 * iCal je samo za čitanje i kasni (Booking osvježava svakih nekoliko sati),
 * zato ovdje nikad ne potvrđujemo rezervaciju automatski.
 */
export class ICalAdapter implements BookingAdapter {
  readonly supportsLiveAvailability = true;

  constructor(
    private feeds: Record<string, string>,
    private send: InquirySender,
  ) {}

  async getAvailability(range: DateRange, roomIds: string[]) {
    return Promise.all(
      roomIds.map(async (roomId) => {
        const url = this.feeds[roomId];
        if (!url) return { roomId, available: false, blocked: [] };
        const res = await fetch(url);
        if (!res.ok) throw new Error(`iCal za sobu ${roomId}: HTTP ${res.status}`);
        const blocked = parseIcal(await res.text());
        return { roomId, available: !blocked.some((b) => overlaps(b, range)), blocked };
      }),
    );
  }

  async createBooking(req: BookingRequest) {
    await this.send(req);
    return { status: 'inquiry_sent' as const };
  }
}
