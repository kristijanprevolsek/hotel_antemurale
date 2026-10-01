/** Datumi su YYYY-MM-DD, `to` je dan odlaska (ne računa se kao noćenje). */
export interface DateRange {
  from: string;
  to: string;
}

export interface RoomAvailability {
  roomId: string;
  available: boolean;
  blocked: DateRange[];
}

export interface BookingRequest {
  roomId: string;
  from: string;
  to: string;
  guests: number;
  name: string;
  email: string;
  phone?: string;
  message?: string;
  lang: string;
}

export interface BookingResult {
  status: 'confirmed' | 'pending' | 'inquiry_sent';
  reference?: string;
}

/** Zajedničko sučelje. Web razgovara samo s ovim, nikad direktno s PMS-om. */
export interface BookingAdapter {
  readonly supportsLiveAvailability: boolean;
  getAvailability(range: DateRange, roomIds: string[]): Promise<RoomAvailability[]>;
  createBooking(req: BookingRequest): Promise<BookingResult>;
}

/** Slanje upita recepciji (e-mail, Slack...). Implementira aplikacija, ne adapter. */
export type InquirySender = (req: BookingRequest) => Promise<void>;

export const overlaps = (a: DateRange, b: DateRange): boolean =>
  a.from < b.to && b.from < a.to;
