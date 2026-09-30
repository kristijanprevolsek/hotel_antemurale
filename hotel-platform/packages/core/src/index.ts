// Zajednički tipovi za sve objekte. Novi objekt = novi site.config.ts, bez promjene koda.

export type Lang = 'hr' | 'en' | 'de' | 'it' | 'ko' | 'zh';

/** Tekst po jezicima. Engleski je obavezan jer služi kao rezerva. */
export type Localized = Partial<Record<Lang, string>> & { en: string };

export interface Room {
  id: string;
  name: Localized;
  description: Localized;
  maxGuests: number;
  sizeM2?: number;
  features: Localized[];
  images: string[];
  /** Cijena od, u EUR po noći */
  priceFrom?: number;
}

/** Glavna znamenitost do koje se ide pješice (park, plaža, stari grad...) */
export interface Landmark {
  name: Localized;
  walkMinutes: number;
  distanceM: number;
}

export interface Restaurant {
  title: Localized;
  description: Localized;
  openToPublic: boolean;
  hours?: Localized;
}

export type BookingConfig =
  | { provider: 'inquiry' }
  | { provider: 'ical'; feeds: Record<string, string> } // roomId -> iCal URL
  | { provider: 'erecepcija'; apiUrl: string; propertyId: string };

export interface SiteConfig {
  id: string;
  name: string;
  domain: string;
  languages: Lang[];
  defaultLang: Lang;
  contact: {
    phone: string;
    email?: string;
    address: string;
    mapsUrl?: string;
  };
  theme: {
    colors: {
      bg: string;
      surface: string;
      text: string;
      muted: string;
      primary: string;
      accent: string;
    };
    colorsDark?: Partial<SiteConfig['theme']['colors']>;
    fonts: { heading: string; body: string; googleFontsUrl?: string };
  };
  hero: { title: Localized; subtitle: Localized; image?: string };
  landmark?: Landmark;
  amenities: Localized[];
  rooms: Room[];
  restaurant?: Restaurant;
  booking: BookingConfig;
  assistant?: { enabled: boolean; knowledge: Localized };
}

export const defineSite = (config: SiteConfig): SiteConfig => config;

export const t = (value: Localized, lang: Lang): string => value[lang] ?? value.en;
