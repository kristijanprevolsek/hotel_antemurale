import type { BookingAdapter, InquirySender } from '../types';

/** Bez provjere dostupnosti: svaki zahtjev ide recepciji kao upit. Početna faza. */
export class InquiryAdapter implements BookingAdapter {
  readonly supportsLiveAvailability = false;
  constructor(private send: InquirySender) {}

  async getAvailability() {
    return [];
  }

  async createBooking(req: Parameters<InquirySender>[0]) {
    await this.send(req);
    return { status: 'inquiry_sent' as const };
  }
}
