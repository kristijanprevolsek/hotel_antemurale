// Zajednički tipovi za sve objekte. Novi objekt = novi site.config.ts, bez promjene koda.

export type Lang = 'hr' | 'en' | 'de' | 'it' | 'ko' | 'zh';

/** Tekst po jezicima. Engleski je obavezan jer služi kao rezerva. */
export type Localized = Partial<Record<Lang, string>> & { en: string };

/** Ikone koje predložak zna prikazati (Lucide). Popis je u apps/web/src/icons.ts. */
export const iconNames = [
  'parking', 'restaurant', 'coffee', 'bar', 'sauna', 'hot-tub', 'garden', 'trees',
  'kids', 'archery', 'bike', 'wifi', 'mountain', 'walk', 'fireplace', 'breakfast',
  'guests', 'bed', 'bath', 'snowflake', 'safe', 'terrace', 'tv', 'pets',
] as const;
export type IconName = (typeof iconNames)[number];

/** Pogodnost objekta. Kratki oblik je samo tekst, dugi dodaje ikonu i isticanje u naslovnom dijelu. */
export type Amenity = Localized | { label: Localized; icon?: IconName; highlight?: boolean };

export const amenityLabel = (a: Amenity): Localized => ('label' in a ? a.label : a) as Localized;
export const amenityIcon = (a: Amenity): IconName | undefined => ('label' in a ? a.icon : undefined);

export interface Room {
  id: string;
  name: Localized;
  description: Localized;
  /** Izostavi dok nije potvrđeno; tada se ne prikazuje */
  maxGuests?: number;
  sizeM2?: number;
  features: Localized[];
  images: string[];
  /** Cijena od, u EUR po noći */
  priceFrom?: number;
  /** Kuća u kojoj je jedinica (House.id), za integralne hotele s više zgrada */
  houseId?: string;
}

/** Zgrada integralnog hotela. Sobe se na stranici grupiraju po kućama. */
export interface House {
  id: string;
  name: Localized;
  description?: Localized;
  address?: string;
  image?: string;
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
  image?: string;
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
      /** Tekst na primarnoj boji. Zadano: surface. */
      onPrimary?: string;
    };
    colorsDark?: Partial<SiteConfig['theme']['colors']>;
    fonts: { heading: string; body: string; googleFontsUrl?: string };
  };
  /** Bez slike naslovni dio crta ilustraciju krajolika u bojama teme. */
  hero: {
    title: Localized;
    subtitle: Localized;
    /** Kratka oznaka iznad naslova, npr. mjesto */
    eyebrow?: Localized;
    image?: string;
    imageAlt?: Localized;
  };
  landmark?: Landmark;
  amenities: Amenity[];
  rooms: Room[];
  /** Ako postoji, odjeljak Smještaj prikazuje kuće redom, svaku sa svojim sobama */
  houses?: House[];
  restaurant?: Restaurant;
  booking: BookingConfig;
  assistant?: { enabled: boolean; knowledge: Localized };
}

export const defineSite = (config: SiteConfig): SiteConfig => config;

export const t = (value: Localized, lang: Lang): string => value[lang] ?? value.en;
