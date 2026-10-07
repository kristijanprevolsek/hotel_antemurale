import type { BookingAdapter, BookingRequest, DateRange } from '../types';

/**
 * Adapter za eRecepciju (Centar MCS).
 *
 * TODO: popuniti kad Centar MCS pošalje API dokumentaciju. Pitati:
 *  - endpoint za dostupnost po sobi i datumu
 *  - endpoint za kreiranje rezervacije (i vraća li broj rezervacije)
 *  - autentikacija (API ključ, OAuth, IP whitelist?)
 *  - šalje li se dostupnost automatski prema Bookingu nakon naše rezervacije
 *  - mapiranje naših roomId na njihove šifre smještajnih jedinica
 */
export class ERecepcijaAdapter implements BookingAdapter {
  readonly supportsLiveAvailability = true;

  constructor(
    private apiUrl: string,
    private propertyId: string,
    private apiKey: string,
  ) {}

  async getAvailability(_range: DateRange, _roomIds: string[]): Promise<never> {
    throw new Error('ERecepcijaAdapter.getAvailability još nije implementiran');
  }

  async createBooking(_req: BookingRequest): Promise<never> {
    throw new Error('ERecepcijaAdapter.createBooking još nije implementiran');
  }
}
