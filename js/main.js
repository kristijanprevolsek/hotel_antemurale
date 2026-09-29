/* ===== Hotel Antemurale – skripte ===== */

// E-adresa na koju stižu upiti iz obrasca
const BOOKING_EMAIL = "info@hotel-antemurale.hr";

// Engleski prijevodi. Hrvatski tekst čita se izravno iz index.html.
const EN = {
  "logo.sub": "integrated hotel",
  "nav.about": "About",
  "nav.rooms": "Rooms",
  "nav.houses": "Our houses",
  "nav.services": "Services",
  "nav.gallery": "Gallery",
  "nav.location": "Location",
  "nav.book": "Book now",

  "hero.eyebrow": "An integrated hotel in the old town",
  "hero.title": "The whole old town is your hotel",
  "hero.lead": "Rooms and apartments in carefully restored stone houses, connected by one reception and full hotel service.",
  "hero.cta1": "Send an inquiry",
  "hero.cta2": "View rooms",

  "about.eyebrow": "About us",
  "about.title": "A hotel that lives with the town",
  "about.p1": "Hotel Antemurale is an integrated hotel – instead of a single building, our rooms and apartments are spread across several restored historic houses in the old town. You stay among the locals, in an authentic setting, while still enjoying every comfort of a hotel.",
  "about.p2": "Our central reception takes care of your arrival, keys, breakfast, housekeeping and any wish you may have – from restaurant tips to organising excursions.",
  "about.h1.t": "Authentic stay",
  "about.h1.d": "Stone houses, wooden beams and views over the old town rooftops.",
  "about.h2.t": "Hotel service",
  "about.h2.d": "Reception, breakfast, daily housekeeping and luggage transfer.",
  "about.h3.t": "Sustainable tourism",
  "about.h3.d": "We restore existing buildings and keep the historic centre alive.",

  "rooms.eyebrow": "Accommodation",
  "rooms.title": "Rooms and apartments",
  "rooms.lead": "Every unit is unique – shaped by the architecture of the house it is in.",
  "rooms.r1.t": "Double room",
  "rooms.r1.m": "2 guests · 18–22 m²",
  "rooms.r1.d": "A cosy room with a double or twin beds, private bathroom and a view of the stone streets.",
  "rooms.r2.t": "Superior room",
  "rooms.r2.m": "2–3 guests · 25–30 m²",
  "rooms.r2.d": "A more spacious room with a seating area, original stone walls and a view of the sea or the square.",
  "rooms.r3.t": "Apartment",
  "rooms.r3.m": "2–4 guests · 40–55 m²",
  "rooms.r3.d": "Separate bedroom, living room and kitchenette – ideal for families and longer stays.",
  "rooms.from": "from",
  "rooms.night": "night",
  "am.1": "Air conditioning",
  "am.2": "Free Wi-Fi",
  "am.3": "Smart TV",
  "am.4": "Minibar",
  "am.5": "Safe",
  "am.6": "Hair dryer",
  "am.7": "Toiletries",
  "am.8": "Coffee machine",

  "houses.eyebrow": "Our houses",
  "houses.title": "One hotel, several addresses",
  "houses.lead": "All houses are just a few minutes' walk from the reception.",
  "houses.addr": "Address",
  "houses.rec.t": "Reception & breakfast",
  "houses.rec.d": "The heart of the hotel: check-in, keys, information and breakfast.",
  "houses.h1.t": "House on the square",
  "houses.h1.d": "4 double rooms · 1 min walk from reception",
  "houses.h2.t": "House by the walls",
  "houses.h2.d": "3 superior rooms · 3 min walk from reception",
  "houses.h3.t": "House with a garden",
  "houses.h3.d": "2 apartments · 4 min walk from reception",

  "services.eyebrow": "Services",
  "services.title": "Everything you expect from a hotel",
  "sv.1.t": "Breakfast",
  "sv.1.d": "A fresh homemade breakfast with local produce every morning.",
  "sv.2.t": "Reception",
  "sv.2.d": "Our staff are here for check-in, advice and help.",
  "sv.3.t": "Luggage transfer",
  "sv.3.d": "We bring your luggage to your room.",
  "sv.4.t": "Daily housekeeping",
  "sv.4.d": "Tidy rooms and fresh towels every day.",
  "sv.5.t": "Transfers & excursions",
  "sv.5.d": "We arrange transfers, excursions and guided tours.",
  "sv.6.t": "Parking",
  "sv.6.d": "Parking near the old town (extra charge).",

  "gallery.eyebrow": "Gallery",
  "gallery.title": "Feel the atmosphere",

  "loc.eyebrow": "Location",
  "loc.title": "In the heart of the historic centre",
  "loc.p": "Our reception is in the pedestrian zone of the old town. You can leave your car at the nearby car park and our staff will help you with your luggage.",
  "loc.d1": "Beach",
  "loc.d2": "Bus station",
  "loc.d3": "Ferry port",
  "loc.d4": "Airport",

  "book.eyebrow": "Booking",
  "book.title": "Send an inquiry",
  "book.p": "Fill in the form and we will get back to you with an offer as soon as possible. You can also call us to book directly.",
  "c.phone": "Phone",
  "c.email": "Email",
  "c.reception": "Reception",
  "c.hours": "daily 07:00 – 23:00",
  "f.name": "Full name",
  "f.email": "Email",
  "f.arrival": "Arrival",
  "f.departure": "Departure",
  "f.guests": "Guests",
  "f.type": "Room type",
  "f.msg": "Message",
  "f.submit": "Send inquiry",
  "f.note": "Submitting the form opens your email app with a prepared message.",

  "footer.tag": "An authentic stay in the heart of the old town.",
  "footer.contact": "Contact",
  "footer.follow": "Follow us",
  "footer.rights": "All rights reserved."
};

const MESSAGES = {
  hr: {
    required: "Molimo ispunite sva obavezna polja.",
    email: "Molimo unesite ispravnu e-adresu.",
    dates: "Datum odlaska mora biti nakon datuma dolaska.",
    subject: "Upit za smještaj",
    labels: ["Ime i prezime", "E-pošta", "Dolazak", "Odlazak", "Broj gostiju", "Vrsta smještaja", "Poruka"]
  },
  en: {
    required: "Please fill in all required fields.",
    email: "Please enter a valid email address.",
    dates: "Departure date must be after the arrival date.",
    subject: "Accommodation inquiry",
    labels: ["Name", "Email", "Arrival", "Departure", "Guests", "Room type", "Message"]
  }
};

let currentLang = "hr";

/* ----- Jezik ----- */
const i18nEls = document.querySelectorAll("[data-i18n]");
i18nEls.forEach(el => { el.dataset.hr = el.textContent; });

function setLang(lang) {
  currentLang = lang === "en" ? "en" : "hr";
  i18nEls.forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = currentLang === "en" && EN[key] ? EN[key] : el.dataset.hr;
  });
  document.documentElement.lang = currentLang;
  document.querySelectorAll(".lang-switch button").forEach(b =>
    b.classList.toggle("active", b.dataset.lang === currentLang));
  try { localStorage.setItem("lang", currentLang); } catch (e) { /* ignore */ }
}

document.querySelectorAll(".lang-switch button").forEach(btn =>
  btn.addEventListener("click", () => setLang(btn.dataset.lang)));

let savedLang = null;
try { savedLang = localStorage.getItem("lang"); } catch (e) { /* ignore */ }
if (savedLang) setLang(savedLang);
else if (!(navigator.language || "").toLowerCase().startsWith("hr")) setLang("en");

/* ----- Zaglavlje i mobilni izbornik ----- */
const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("main-nav");

function onScroll() { header.classList.toggle("scrolled", window.scrollY > 40); }
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

function closeMenu() {
  nav.classList.remove("open");
  header.classList.remove("menu-open");
  toggle.setAttribute("aria-expanded", "false");
}
toggle.addEventListener("click", () => {
  const open = !nav.classList.contains("open");
  nav.classList.toggle("open", open);
  header.classList.toggle("menu-open", open);
  toggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));

/* ----- Animacija pojavljivanja ----- */
const revealTargets = document.querySelectorAll(".section-head, .card, .house, .service, .highlights li, .gallery > *, .booking-form");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach(el => { el.classList.add("reveal"); io.observe(el); });
}

/* ----- Obrazac za upit ----- */
const form = document.getElementById("booking-form");
const errorBox = document.getElementById("form-error");
const arrival = form.elements.arrival;
const departure = form.elements.departure;

const today = new Date().toISOString().split("T")[0];
arrival.min = today;
departure.min = today;
arrival.addEventListener("change", () => {
  departure.min = arrival.value || today;
  if (departure.value && departure.value <= arrival.value) departure.value = "";
});

function showError(msg) {
  errorBox.textContent = msg;
  errorBox.hidden = false;
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const t = MESSAGES[currentLang];
  errorBox.hidden = true;

  let valid = true;
  form.querySelectorAll("[required]").forEach(input => {
    const empty = !input.value.trim();
    input.classList.toggle("invalid", empty);
    if (empty) valid = false;
  });
  if (!valid) return showError(t.required);

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.elements.email.value.trim())) {
    form.elements.email.classList.add("invalid");
    return showError(t.email);
  }
  if (departure.value <= arrival.value) {
    departure.classList.add("invalid");
    return showError(t.dates);
  }

  const f = form.elements;
  const values = [f.name.value, f.email.value, f.arrival.value, f.departure.value, f.guests.value, f.type.value, f.message.value];
  const body = t.labels.map((label, i) => `${label}: ${values[i].trim()}`).join("\n");
  const subject = `${t.subject} – ${f.arrival.value} / ${f.departure.value}`;

  window.location.href = `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

/* ----- Godina u podnožju ----- */
document.getElementById("year").textContent = new Date().getFullYear();
