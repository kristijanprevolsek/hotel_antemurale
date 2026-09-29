# Hotel Antemurale – web stranica

Statička web stranica (HTML, CSS, JavaScript) za integralni hotel Antemurale.
Nema build koraka ni ovisnosti – dovoljno je otvoriti `index.html` u pregledniku.

## Struktura

```
index.html        – sav sadržaj stranice (na hrvatskom)
css/style.css     – izgled
js/main.js        – izbornik, HR/EN prijevod, obrazac za upit
images/           – fotografije i favicon
```

## Sekcije

Početna (hero) · O nama · Smještaj · Naše kuće · Usluge · Galerija · Lokacija · Rezervacija (obrazac za upit) · Podnožje

Stranica je dvojezična (HR / EN). Hrvatski tekst nalazi se u `index.html`,
a engleski u objektu `EN` u `js/main.js` – ključ `data-i18n` povezuje ih.

## Što treba zamijeniti pravim podacima

- [ ] **Kontakt**: telefon, e-pošta i adresa (`index.html` – sekcija *Rezervacija* i podnožje)
- [ ] **E-pošta za upite**: konstanta `BOOKING_EMAIL` u `js/main.js`
- [ ] **Kuće**: nazivi, adrese i broj jedinica (sekcija *Naše kuće*)
- [ ] **Smještaj**: vrste soba, kvadrature i cijene
- [ ] **Udaljenosti** u sekciji *Lokacija*
- [ ] **Karta**: `src` iframea u sekciji *Lokacija* (Google Maps → Podijeli → Ugradi kartu)
- [ ] **Fotografije**:
  - hero: u `css/style.css` (`.hero`) otkomentirajte `background: url("../images/hero.jpg") ...`
  - sobe: zamijenite `<div class="card-img ph ...">` s `<img class="card-img" src="images/soba.jpg" alt="...">`
  - galerija: zamijenite `<div class="ph ...">` s `<img src="images/..." alt="..." loading="lazy">`
- [ ] **Društvene mreže**: linkovi na Instagram / Facebook u podnožju
- [ ] Nakon promjene hrvatskog teksta ažurirajte i engleski prijevod u `js/main.js`

## Obrazac za upit

Obrazac provjerava podatke i otvara gostov program za e-poštu s pripremljenom porukom
(`mailto:`), pa ne treba poslužitelj. Za slanje izravno s stranice može se koristiti
servis poput Formspree ili Netlify Forms, ili povezati booking engine (npr. rezervacijski
sustav vašeg channel managera).

## Objava

Najjednostavnije besplatno: **GitHub Pages** – u postavkama repozitorija
*Settings → Pages* odaberite granu i korijenski direktorij. Radi i na Netlify,
Cloudflare Pages ili bilo kojem web hostingu (samo prenesite datoteke).
