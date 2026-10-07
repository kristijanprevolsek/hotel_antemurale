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
    image: '/images/hero.webp',
    imageAlt: {
      hr: 'Vrt i terasa ispred kuće hotela Antemurale',
      en: 'Garden and terrace in front of a Hotel Antemurale house',
      de: 'Garten und Terrasse vor einem Haus des Hotels Antemurale',
    },
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
      image: '/images/nove-kuce.webp',
      name: { hr: 'Nove kuće', en: 'New houses', de: 'Neue Häuser' },
      description: {
        hr: 'Dvokrevetne sobe i dvije sobe s vlastitom saunom u novim kućama hotela.',
        en: 'Double rooms and two rooms with a private sauna in the hotel’s new houses.',
        de: 'Doppelzimmer und zwei Zimmer mit eigener Sauna in den neuen Häusern des Hotels.',
      },
    },
    {
      id: 'studio',
      image: '/images/studio.webp',
      name: { hr: 'Studio apartman', en: 'Studio apartment', de: 'Studio-Apartment' },
      description: {
        hr: 'Zaseban studio apartman u vlastitoj kućici.',
        en: 'A separate studio apartment in its own small house.',
        de: 'Ein separates Studio-Apartment in einem eigenen kleinen Haus.',
      },
    },
    {
      id: 'danica',
      image: '/images/danica.webp',
      name: { hr: 'Pansion Danica', en: 'Pansion Danica', de: 'Pension Danica' },
      description: {
        hr: 'Stara kuća hotela Antemurale s dvokrevetnim i trokrevetnim sobama.',
        en: 'The old house of Hotel Antemurale, with double and triple rooms.',
        de: 'Das alte Haus des Hotels Antemurale mit Doppel- und Dreibettzimmern.',
      },
    },
  ],

  // TODO: kvadrature i cijene
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
      images: [
        '/images/nove-kuce-dvokrevetna-1.webp',
        '/images/nove-kuce-dvokrevetna-2.webp',
        '/images/nove-kuce-dvokrevetna-kupaonica.webp',
      ],
    },
    {
      id: 'sauna',
      houseId: 'nove-kuce',
      name: { hr: 'Soba s vlastitom saunom', en: 'Room with private sauna', de: 'Zimmer mit eigener Sauna' },
      description: {
        hr: 'Dvije sobe u prizemlju, svaka s vlastitom saunom. Za opuštanje nakon cijelog dana hodanja po parku.',
        en: 'Two ground-floor rooms, each with its own sauna. For unwinding after a full day of walking in the park.',
        de: 'Zwei Zimmer im Erdgeschoss, jedes mit eigener Sauna. Zum Entspannen nach einem langen Tag im Park.',
      },
      features: [
        { hr: 'Privatna sauna', en: 'Private sauna', de: 'Private Sauna' },
        { hr: 'Prizemlje', en: 'Ground floor', de: 'Erdgeschoss' },
      ],
      images: ['/images/sauna-soba-1.webp', '/images/sauna.webp', '/images/sauna-soba-2.webp'],
    },
    {
      id: 'studio',
      houseId: 'studio',
      name: { hr: 'Studio apartman', en: 'Studio apartment', de: 'Studio-Apartment' },
      description: {
        hr: 'Studio s kuhinjom i galerijom za spavanje.',
        en: 'A studio with a kitchen and a sleeping loft.',
        de: 'Ein Studio mit Küche und Schlafgalerie.',
      },
      features: [
        { hr: 'Kuhinja', en: 'Kitchen', de: 'Küche' },
        { hr: 'Galerija', en: 'Sleeping loft', de: 'Schlafgalerie' },
      ],
      images: ['/images/studio-1.webp', '/images/studio-2.webp', '/images/studio-terasa.webp'],
    },
    {
      id: 'danica-double',
      houseId: 'danica',
      name: { hr: 'Dvokrevetna soba', en: 'Double room', de: 'Doppelzimmer' },
      description: {
        hr: 'Dvokrevetna soba u Pansionu Danica.',
        en: 'A double room in Pansion Danica.',
        de: 'Ein Doppelzimmer in der Pension Danica.',
      },
      maxGuests: 2,
      features: [],
      images: ['/images/danica-dvokrevetna.webp'],
    },
    {
      id: 'danica-triple',
      houseId: 'danica',
      name: { hr: 'Trokrevetna soba', en: 'Triple room', de: 'Dreibettzimmer' },
      description: {
        hr: 'Trokrevetna soba u Pansionu Danica.',
        en: 'A triple room in Pansion Danica.',
        de: 'Ein Dreibettzimmer in der Pension Danica.',
      },
      maxGuests: 3,
      features: [],
      images: ['/images/danica-trokrevetna.webp'],
    },
    {
      id: 'danica-terrace',
      houseId: 'danica',
      name: { hr: 'Dvokrevetna soba s terasom', en: 'Double room with terrace', de: 'Doppelzimmer mit Terrasse' },
      description: {
        hr: 'Tri ljepše uređene dvokrevetne sobe s terasom.',
        en: 'Three more refined double rooms with a terrace.',
        de: 'Drei schöner eingerichtete Doppelzimmer mit Terrasse.',
      },
      maxGuests: 2,
      features: [{ hr: 'Terasa', en: 'Terrace', de: 'Terrasse' }],
      images: ['/images/danica-terasa-soba.webp', '/images/danica-terasa.webp'],
    },
  ],

  gallery: [
    { src: '/images/jacuzzi.webp', wide: true, alt: { hr: 'Jacuzzi na otvorenom i roštilj u vrtu', en: 'Outdoor jacuzzi and barbecue in the garden', de: 'Whirlpool im Freien und Grill im Garten' } },
    { src: '/images/aktivnosti.webp', wide: true, alt: { hr: 'Boćalište i streljana na livadi', en: 'Bocce court and archery range on the meadow', de: 'Bocciabahn und Bogenschießplatz auf der Wiese' } },
    { src: '/images/vecer-terasa.webp', wide: true, alt: { hr: 'Terasa navečer', en: 'The terrace in the evening', de: 'Die Terrasse am Abend' } },
    { src: '/images/zima.webp', wide: true, alt: { hr: 'Pansion Danica zimi', en: 'Pansion Danica in winter', de: 'Pension Danica im Winter' } },
  ],

  restaurant: {
    title: { hr: 'Restoran', en: 'Restaurant', de: 'Restaurant' },
    description: {
      hr: 'Lička i domaća kuhinja, terasa i vatra na otvorenom. Restoran je otvoren i za goste koji ne spavaju kod nas.',
      en: 'Local Lika cooking, a terrace and an outdoor fireplace. The restaurant is open to visitors who are not staying with us.',
      de: 'Regionale Küche aus der Lika, Terrasse und Feuerstelle im Freien. Das Restaurant ist auch für Besucher geöffnet, die nicht bei uns übernachten.',
    },
    openToPublic: true,
    image: '/images/restoran.webp',
    gallery: [
      { src: '/images/restoran-2.webp', wide: true, alt: { hr: 'Postavljeni stolovi u restoranu', en: 'Tables set in the restaurant', de: 'Gedeckte Tische im Restaurant' } },
      { src: '/images/hrana-plata.webp', alt: { hr: 'Plata domaćih delicija', en: 'Platter of local delicacies', de: 'Platte mit regionalen Spezialitäten' } },
      { src: '/images/jelo.webp', alt: { hr: 'Jelo iz restorana', en: 'A dish from the restaurant', de: 'Ein Gericht aus dem Restaurant' } },
      { src: '/images/hrana-riba.webp', alt: { hr: 'Riba s povrćem', en: 'Fish with vegetables', de: 'Fisch mit Gemüse' } },
      { src: '/images/hrana-narezak.webp', wide: true, alt: { hr: 'Narezak i sirevi', en: 'Cold cuts and cheese', de: 'Aufschnitt und Käse' } },
      { src: '/images/dorucak.webp', alt: { hr: 'Doručak', en: 'Breakfast', de: 'Frühstück' } },
      { src: '/images/hrana-povrce.webp', alt: { hr: 'Svježe povrće', en: 'Fresh vegetables', de: 'Frisches Gemüse' } },
      { src: '/images/hrana-kotlic.webp', alt: { hr: 'Kuhanje u kotliću na otvorenom', en: 'Cooking in a pot over an open fire', de: 'Kochen im Kessel über offenem Feuer' } },
      { src: '/images/restoran-3.webp', wide: true, alt: { hr: 'Restoran', en: 'The restaurant', de: 'Das Restaurant' } },
      { src: '/images/bar.webp', alt: { hr: 'Bar s pogledom na terasu', en: 'Bar overlooking the terrace', de: 'Bar mit Blick auf die Terrasse' } },
      { src: '/images/restoran-bar.webp', alt: { hr: 'Blagovaonica i bar', en: 'Dining room and bar', de: 'Speisesaal und Bar' } },
      { src: '/images/restoran-stol.webp', wide: true, alt: { hr: 'Stol postavljen za večeru', en: 'A table set for dinner', de: 'Ein für das Abendessen gedeckter Tisch' } },
    ],
    hours: undefined, // TODO: radno vrijeme
  },

  // Dok Centar MCS ne odgovori, rezervacije idu kao upit recepciji.
  booking: { provider: 'inquiry' },

  assistant: {
    enabled: false, // uključujemo u fazi 5
    knowledge: { en: '' },
  },
});
