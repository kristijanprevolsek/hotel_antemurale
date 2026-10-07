import type { BookingConfig } from '@hp/core';
import type { BookingAdapter, InquirySender } from './types';
import { InquiryAdapter } from './adapters/inquiry';
import { ICalAdapter } from './adapters/ical';
import { ERecepcijaAdapter } from './adapters/erecepcija';

export * from './types';
export { parseIcal } from './adapters/ical';

interface Deps {
  sendInquiry: InquirySender;
  secrets?: { erecepcijaApiKey?: string };
}

/** Jedino mjesto koje zna koji sustav koristi koji objekt. */
export function createBookingAdapter(config: BookingConfig, deps: Deps): BookingAdapter {
  switch (config.provider) {
    case 'inquiry':
      return new InquiryAdapter(deps.sendInquiry);
    case 'ical':
      return new ICalAdapter(config.feeds, deps.sendInquiry);
    case 'erecepcija': {
      const key = deps.secrets?.erecepcijaApiKey;
      if (!key) throw new Error('Nedostaje ERECEPCIJA_API_KEY');
      return new ERecepcijaAdapter(config.apiUrl, config.propertyId, key);
    }
  }
}
