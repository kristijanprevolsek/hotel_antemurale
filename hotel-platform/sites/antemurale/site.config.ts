import { defineSite } from '@hp/core';

// Podaci označeni s TODO su pretpostavke ili nedostaju. Provjeri s recepcijom.
export default defineSite({
  id: 'antemurale',
  name: 'Antemurale',
  domain: 'antemurale.hr', // TODO: stvarna domena
  languages: ['hr', 'en', 'de'],
  defaultLang: 'en',

  contact: {
    phone: '+385 98 218 430',
    email: undefined, // TODO: e-mail recepcije
    address: 'Rastovača 13, 53231 Plitvička Jezera',
    mapsUrl: 'https://maps.google.com/?q=Integralni+hotel+Antemurale',
  },

  theme: {
    // Vapnenac, smreka i tirkiz jezera
    colors: {
      bg: '#EDF0EB',
      surface: '#FFFFFF',
      text: '#16302A',
      muted: '#56675F',
      primary: '#1C7872',
      accent: '#A8782F',
    },
    colorsDark: {
      bg: '#0F1F1B',
      surface: '#172B26',
      text: '#E6EEE9',
      muted: '#9DB0A7',
      primary: '#5CC2B8',
      accent: '#D9A95C',
    },
    fonts: {
      heading: "'Newsreader', Georgia, serif",
      body: "'Figtree', system-ui, sans-serif",
      googleFontsUrl:
        'https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600&family=Newsreader:opsz,wght@6..72,400;6..72,600&display=swap',
    },
  },

  hero: {
    eyebrow: { hr: 'Rastovača · Plitvička Jezera', en: 'Rastovača · Plitvice Lakes', de: 'Rastovača · Plitvicer Seen' },
    title: {
      hr: 'Pješice do Plitvičkih jezera',
      en: 'Walk to the Plitvice Lakes',
      de: 'Zu Fuß zu den Plitvicer Seen',
    },
    subtitle: {
      hr: 'Sobe, restoran s domaćom kuhinjom i sauna u Rastovači. Auto ostavite kod nas, a do parka stignete za osam minuta.',
      en: 'Rooms, a restaurant with local food and a sauna in Rastovača. Leave your car with us and reach the park in eight minutes on foot.',
      de: 'Zimmer, ein Restaurant mit regionaler Küche und eine Sauna in Rastovača. Ihr Auto bleibt bei uns, zum Park sind es acht Minuten zu Fuß.',
    },
  },

  landmark: {
    name: { hr: 'Ulaz 1', en: 'Entrance 1', de: 'Eingang 1' },
    walkMinutes: 8,
    distanceM: 600,
  },

  // highlight: prikazuje se u traci ispod naslovnog dijela (najviše 4)
  amenities: [
    { icon: 'parking', highlight: true, label: { hr: 'Besplatan parking', en: 'Free parking', de: 'Kostenloses Parken' } },
    { icon: 'restaurant', highlight: true, label: { hr: 'Restoran i bar', en: 'Restaurant and bar', de: 'Restaurant und Bar' } },
    { icon: 'sauna', highlight: true, label: { hr: 'Sauna i jacuzzi na otvorenom', en: 'Sauna and outdoor jacuzzi', de: 'Sauna und Whirlpool im Freien' } },
    { icon: 'breakfast', highlight: true, label: { hr: 'Doručak na bazi švedskog stola', en: 'Buffet breakfast', de: 'Frühstücksbuffet' } },
    { icon: 'archery', label: { hr: 'Streličarstvo, boćanje i ljuljačka', en: 'Archery, bocce and a swing', de: 'Bogenschießen, Boccia und Schaukel' } },
    { icon: 'garden', label: { hr: 'Terasa i vrt', en: 'Terrace and garden', de: 'Terrasse und Garten' } },
    { icon: 'fireplace', label: { hr: 'Vanjski kamin', en: 'Outdoor fireplace', de: 'Kamin im Freien' } },
  ],

  // Kuće integralnog hotela, redom kako se prikazuju u odjeljku Smještaj.
  // TODO: opisi, adrese i fotografije (image) svake kuće
  houses: [
    {
      id: 'nove-kuce',
      name: { hr: 'Nove kuće', en: 'New houses', de: 'Neue Häuser' },
      description: {
        hr: 'Dvokrevetne sobe u novim kućama hotela.',
        en: 'Double rooms in the hotel’s new houses.',
        de: 'Doppelzimmer in den neuen Häusern des Hotels.',
      },
    },
    {
      id: 'studio',
      name: { hr: 'Studio apartman', en: 'Studio apartment', de: 'Studio-Apartment' },
      description: {
        hr: 'Zaseban studio apartman.',
        en: 'A separate studio apartment.',
        de: 'Ein separates Studio-Apartment.',
      },
    },
    {
      id: 'danica',
      name: { hr: 'Pansion Danica', en: 'Pansion Danica', de: 'Pension Danica' },
      description: {
        hr: 'Stara kuća hotela Antemurale.',
        en: 'The old house of Hotel Antemurale.',
        de: 'Das alte Haus des Hotels Antemurale.',
      },
    },
  ],

  // TODO: stvarne sobe, kvadrature, cijene i fotografije.
  // Obiteljska soba i soba sa saunom nemaju houseId dok ne potvrdimo u kojoj su kući,
  // pa se prikazuju pod "Ostale sobe".
  rooms: [
    {
      id: 'double',
      houseId: 'nove-kuce',
      name: { hr: 'Dvokrevetna soba', en: 'Double room', de: 'Doppelzimmer' },
      description: {
        hr: 'Klimatizirana soba s pogledom na vrt i vlastitom kupaonicom.',
        en: 'Air-conditioned room with garden view and private bathroom.',
        de: 'Klimatisiertes Zimmer mit Gartenblick und eigenem Bad.',
      },
      maxGuests: 2,
      features: [
        { hr: 'Klima', en: 'Air conditioning', de: 'Klimaanlage' },
        { hr: 'Sef', en: 'Safe', de: 'Safe' },
      ],
      images: [],
    },
    {
      id: 'family',
      name: { hr: 'Obiteljska soba', en: 'Family room', de: 'Familienzimmer' },
      description: {
        hr: 'Prostrana soba za obitelji, blizu vrta.',
        en: 'A spacious room for families, close to the garden.',
        de: 'Geräumiges Zimmer für Familien, nahe dem Garten.',
      },
      maxGuests: 4,
      features: [
        { hr: 'Klima', en: 'Air conditioning', de: 'Klimaanlage' },
        { hr: 'Terasa', en: 'Patio', de: 'Terrasse' },
      ],
      images: [],
    },
    {
      id: 'sauna',
      name: { hr: 'Soba s vlastitom saunom', en: 'Room with private sauna', de: 'Zimmer mit eigener Sauna' },
      description: {
        hr: 'Za opuštanje nakon cijelog dana hodanja po parku.',
        en: 'For unwinding after a full day of walking in the park.',
        de: 'Zum Entspannen nach einem langen Tag im Park.',
      },
      maxGuests: 2,
      features: [
        { hr: 'Privatna sauna', en: 'Private sauna', de: 'Private Sauna' },
        { hr: 'Klima', en: 'Air conditioning', de: 'Klimaanlage' },
      ],
      images: [],
    },
  ],

  restaurant: {
    title: { hr: 'Restoran', en: 'Restaurant', de: 'Restaurant' },
    description: {
      hr: 'Lička i domaća kuhinja, terasa i vatra na otvorenom. Restoran je otvoren i za goste koji ne spavaju kod nas.',
      en: 'Local Lika cooking, a terrace and an outdoor fireplace. The restaurant is open to visitors who are not staying with us.',
      de: 'Regionale Küche aus der Lika, Terrasse und Feuerstelle im Freien. Das Restaurant ist auch für Besucher geöffnet, die nicht bei uns übernachten.',
    },
    openToPublic: true,
    hours: undefined, // TODO: radno vrijeme
  },

  // Dok Centar MCS ne odgovori, rezervacije idu kao upit recepciji.
  booking: { provider: 'inquiry' },

  assistant: {
    enabled: false, // uključujemo u fazi 5
    knowledge: { en: '' },
  },
});
