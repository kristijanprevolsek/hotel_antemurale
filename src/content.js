// ===== Sav tekst stranice na hrvatskom (hr) i engleskom (en) =====
// Kontakt podaci i adresa zajednički su za oba jezika.

export const CONTACT = {
  address: "Rastovača 13",
  place: "53231 Plitvička Jezera, Hrvatska",
  phone: "+385 00 000 0000",
  phoneHref: "tel:+385000000000",
  email: "info@hotel-antemurale.hr",
  instagram: "#",
  facebook: "#"
};

// Upit za karte – Google sam pronalazi točnu lokaciju adrese
export const MAP_QUERY = "Rastovača 13, Plitvička Jezera, Hrvatska";

// Cijene su zajedničke za oba jezika
const PRICES = [90, 120, 160];

export const content = {
  hr: {
    logoSub: "integralni hotel",
    nav: {
      about: "O nama",
      rooms: "Smještaj",
      houses: "Naše kuće",
      services: "Usluge",
      gallery: "Galerija",
      location: "Lokacija",
      book: "Rezervirajte"
    },
    hero: {
      eyebrow: "Integralni hotel · Plitvička jezera",
      title: "Cijelo selo je vaš hotel",
      lead: "Sobe i apartmani u obnovljenim tradicijskim kućama sela Rastovača, na samom rubu Nacionalnog parka Plitvička jezera – povezani jednom recepcijom i hotelskom uslugom.",
      cta1: "Pošaljite upit",
      cta2: "Pogledajte smještaj"
    },
    about: {
      eyebrow: "O nama",
      title: "Hotel koji živi sa selom",
      p: [
        "Hotel Antemurale je integralni hotel – umjesto jedne velike zgrade, naše sobe i apartmani smješteni su u nekoliko obnovljenih kuća u selu Rastovača. Boravite u mirnom, autentičnom ambijentu, okruženi šumom i livadama, a i dalje uživate u svim pogodnostima hotela.",
        "Središnja recepcija brine o vašem dolasku, ključevima, doručku, čišćenju i svim željama – od savjeta za obilazak jezera do organizacije izleta po Lici."
      ],
      highlights: [
        { title: "Uz Nacionalni park", text: "Do ulaza u park Plitvička jezera stižete u nekoliko minuta." },
        { title: "Hotelska usluga", text: "Recepcija, doručak, dnevno čišćenje i prijenos prtljage." },
        { title: "Održivi turizam", text: "Obnavljamo postojeće kuće i čuvamo život u tradicijskom selu." }
      ]
    },
    rooms: {
      eyebrow: "Smještaj",
      title: "Sobe i apartmani",
      lead: "Svaka jedinica je jedinstvena – prilagođena arhitekturi kuće u kojoj se nalazi.",
      from: "od",
      night: "noć",
      items: [
        { title: "Dvokrevetna soba", meta: "2 osobe · 18–22 m²", text: "Udobna soba s bračnim ili odvojenim krevetima, vlastitom kupaonicom i pogledom na zelenilo." },
        { title: "Superior soba", meta: "2–3 osobe · 25–30 m²", text: "Prostranija soba s dnevnim kutkom, drvenim detaljima i pogledom na šumu i livade." },
        { title: "Apartman", meta: "2–4 osobe · 40–55 m²", text: "Zasebna spavaća soba, dnevni boravak i čajna kuhinja – idealno za obitelji i duže boravke." }
      ],
      amenities: ["Klima uređaj", "Besplatan Wi-Fi", "Smart TV", "Minibar", "Sef", "Sušilo za kosu", "Kozmetika", "Aparat za kavu"]
    },
    houses: {
      eyebrow: "Naše kuće",
      title: "Jedan hotel, više kuća",
      lead: "Sve kuće udaljene su samo nekoliko minuta hoda od recepcije.",
      addr: "Adresa",
      items: [
        { num: "R", title: "Recepcija i doručak", text: "Središnja točka hotela: prijava, ključevi, informacije i doručak.", address: "Rastovača 13" },
        { num: "1", title: "Kuća uz šumu", text: "4 dvokrevetne sobe · 1 min hoda od recepcije", address: "Rastovača" },
        { num: "2", title: "Kuća s pogledom", text: "3 superior sobe · 3 min hoda od recepcije", address: "Rastovača" },
        { num: "3", title: "Kuća s vrtom", text: "2 apartmana · 4 min hoda od recepcije", address: "Rastovača" }
      ]
    },
    services: {
      eyebrow: "Usluge",
      title: "Sve što očekujete od hotela",
      items: [
        { icon: "☕", title: "Doručak", text: "Domaći doručak s ličkim namirnicama svako jutro." },
        { icon: "🛎", title: "Recepcija", text: "Osoblje na raspolaganju za prijavu, savjete i pomoć." },
        { icon: "🧳", title: "Prijenos prtljage", text: "Vašu prtljagu dostavljamo do sobe." },
        { icon: "🧹", title: "Dnevno čišćenje", text: "Uredne sobe i svježi ručnici svaki dan." },
        { icon: "🥾", title: "Izleti", text: "Savjeti za obilazak jezera, pješačke staze i izleti po Lici." },
        { icon: "🅿", title: "Parking", text: "Parkiralište za goste u blizini kuća." }
      ]
    },
    gallery: {
      eyebrow: "Galerija",
      title: "Doživite atmosferu",
      photo: "Fotografija"
    },
    location: {
      eyebrow: "Lokacija",
      title: "Na rubu Nacionalnog parka",
      text: "Hotel se nalazi u selu Rastovača, neposredno uz Ulaz 1 Nacionalnog parka Plitvička jezera i pogled na Veliki slap. Recepcija je na adresi Rastovača 13.",
      directions: "Upute za dolazak",
      mapTitle: "Karta – Hotel Antemurale, Rastovača 13",
      distances: [
        { label: "NP Plitvička jezera – Ulaz 1", value: "cca 1 km" },
        { label: "Zagreb", value: "cca 130 km" },
        { label: "Zadar", value: "cca 120 km" },
        { label: "Zračna luka Zadar", value: "cca 130 km" }
      ]
    },
    booking: {
      eyebrow: "Rezervacija",
      title: "Pošaljite upit",
      text: "Ispunite obrazac i javit ćemo vam se s ponudom u najkraćem roku. Za izravnu rezervaciju možete nas i nazvati.",
      phone: "Telefon",
      email: "E-pošta",
      reception: "Recepcija",
      hours: "svaki dan 07:00 – 23:00",
      form: {
        name: "Ime i prezime",
        email: "E-pošta",
        arrival: "Dolazak",
        departure: "Odlazak",
        guests: "Broj gostiju",
        type: "Vrsta smještaja",
        message: "Poruka",
        submit: "Pošalji upit",
        note: "Slanjem obrasca otvara se vaš program za e-poštu s pripremljenom porukom.",
        subject: "Upit za smještaj",
        errRequired: "Molimo ispunite sva obavezna polja.",
        errEmail: "Molimo unesite ispravnu e-adresu.",
        errDates: "Datum odlaska mora biti nakon datuma dolaska."
      }
    },
    footer: {
      tag: "Autentičan boravak uz Plitvička jezera.",
      contact: "Kontakt",
      follow: "Pratite nas",
      rights: "Sva prava pridržana."
    },
    menu: "Izbornik"
  },

  en: {
    logoSub: "integrated hotel",
    nav: {
      about: "About",
      rooms: "Rooms",
      houses: "Our houses",
      services: "Services",
      gallery: "Gallery",
      location: "Location",
      book: "Book now"
    },
    hero: {
      eyebrow: "Integrated hotel · Plitvice Lakes",
      title: "The whole village is your hotel",
      lead: "Rooms and apartments in restored traditional houses in the village of Rastovača, right at the edge of Plitvice Lakes National Park – connected by one reception and full hotel service.",
      cta1: "Send an inquiry",
      cta2: "View rooms"
    },
    about: {
      eyebrow: "About us",
      title: "A hotel that lives with the village",
      p: [
        "Hotel Antemurale is an integrated hotel – instead of one large building, our rooms and apartments are spread across several restored houses in the village of Rastovača. You stay in a quiet, authentic setting surrounded by forests and meadows, while still enjoying every comfort of a hotel.",
        "Our central reception takes care of your arrival, keys, breakfast, housekeeping and any wish you may have – from tips for visiting the lakes to organising excursions around Lika."
      ],
      highlights: [
        { title: "Next to the National Park", text: "The Plitvice Lakes park entrance is just minutes away." },
        { title: "Hotel service", text: "Reception, breakfast, daily housekeeping and luggage transfer." },
        { title: "Sustainable tourism", text: "We restore existing houses and keep a traditional village alive." }
      ]
    },
    rooms: {
      eyebrow: "Accommodation",
      title: "Rooms and apartments",
      lead: "Every unit is unique – shaped by the architecture of the house it is in.",
      from: "from",
      night: "night",
      items: [
        { title: "Double room", meta: "2 guests · 18–22 m²", text: "A cosy room with a double or twin beds, private bathroom and a view of the greenery." },
        { title: "Superior room", meta: "2–3 guests · 25–30 m²", text: "A more spacious room with a seating area, wooden details and views of forests and meadows." },
        { title: "Apartment", meta: "2–4 guests · 40–55 m²", text: "Separate bedroom, living room and kitchenette – ideal for families and longer stays." }
      ],
      amenities: ["Air conditioning", "Free Wi-Fi", "Smart TV", "Minibar", "Safe", "Hair dryer", "Toiletries", "Coffee machine"]
    },
    houses: {
      eyebrow: "Our houses",
      title: "One hotel, several houses",
      lead: "All houses are just a few minutes' walk from the reception.",
      addr: "Address",
      items: [
        { num: "R", title: "Reception & breakfast", text: "The heart of the hotel: check-in, keys, information and breakfast.", address: "Rastovača 13" },
        { num: "1", title: "Forest house", text: "4 double rooms · 1 min walk from reception", address: "Rastovača" },
        { num: "2", title: "House with a view", text: "3 superior rooms · 3 min walk from reception", address: "Rastovača" },
        { num: "3", title: "Garden house", text: "2 apartments · 4 min walk from reception", address: "Rastovača" }
      ]
    },
    services: {
      eyebrow: "Services",
      title: "Everything you expect from a hotel",
      items: [
        { icon: "☕", title: "Breakfast", text: "A homemade breakfast with local Lika produce every morning." },
        { icon: "🛎", title: "Reception", text: "Our staff are here for check-in, advice and help." },
        { icon: "🧳", title: "Luggage transfer", text: "We bring your luggage to your room." },
        { icon: "🧹", title: "Daily housekeeping", text: "Tidy rooms and fresh towels every day." },
        { icon: "🥾", title: "Excursions", text: "Tips for visiting the lakes, hiking trails and trips around Lika." },
        { icon: "🅿", title: "Parking", text: "Guest parking close to the houses." }
      ]
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Feel the atmosphere",
      photo: "Photo"
    },
    location: {
      eyebrow: "Location",
      title: "At the edge of the National Park",
      text: "The hotel is in the village of Rastovača, right next to Entrance 1 of Plitvice Lakes National Park and the Great Waterfall viewpoint. Reception is at Rastovača 13.",
      directions: "Get directions",
      mapTitle: "Map – Hotel Antemurale, Rastovača 13",
      distances: [
        { label: "Plitvice Lakes NP – Entrance 1", value: "approx. 1 km" },
        { label: "Zagreb", value: "approx. 130 km" },
        { label: "Zadar", value: "approx. 120 km" },
        { label: "Zadar Airport", value: "approx. 130 km" }
      ]
    },
    booking: {
      eyebrow: "Booking",
      title: "Send an inquiry",
      text: "Fill in the form and we will get back to you with an offer as soon as possible. You can also call us to book directly.",
      phone: "Phone",
      email: "Email",
      reception: "Reception",
      hours: "daily 07:00 – 23:00",
      form: {
        name: "Full name",
        email: "Email",
        arrival: "Arrival",
        departure: "Departure",
        guests: "Guests",
        type: "Room type",
        message: "Message",
        submit: "Send inquiry",
        note: "Submitting the form opens your email app with a prepared message.",
        subject: "Accommodation inquiry",
        errRequired: "Please fill in all required fields.",
        errEmail: "Please enter a valid email address.",
        errDates: "Departure date must be after the arrival date."
      }
    },
    footer: {
      tag: "An authentic stay by the Plitvice Lakes.",
      contact: "Contact",
      follow: "Follow us",
      rights: "All rights reserved."
    },
    menu: "Menu"
  }
};

content.hr.rooms.items.forEach((r, i) => { r.price = PRICES[i]; });
content.en.rooms.items.forEach((r, i) => { r.price = PRICES[i]; });
