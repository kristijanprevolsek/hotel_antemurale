# Hotel Antemurale – web stranica

Web stranica integralnog hotela Antemurale (Rastovača 13, Plitvička Jezera),
napravljena u **Reactu** s alatom **Vite**. Stranica je dvojezična (HR / EN).

## Pokretanje

Potreban je [Node.js](https://nodejs.org/) 20 ili noviji.

```bash
npm install      # jednom, instalira pakete
npm run dev      # razvojni poslužitelj na http://localhost:5173
npm run build    # gotova stranica za objavu u mapi dist/
npm run preview  # pregled gotove (build) verzije
```

## Struktura

```
index.html              – HTML ljuska (naslov, opis za Google)
src/content.js          – SAV TEKST stranice (HR i EN), kontakt, cijene, adresa za kartu
src/components/         – React komponente, jedna po sekciji
src/i18n.jsx            – odabir jezika (pamti se u pregledniku)
src/index.css           – izgled
public/                 – favicon i fotografije (public/images/)
```

Sekcije: Početna · O nama · Smještaj · Naše kuće · Usluge · Galerija · Lokacija (s kartom) · Rezervacija · Podnožje

## Karta

Sekcija *Lokacija* prikazuje Google kartu za adresu **Rastovača 13, Plitvička Jezera**
(konstanta `MAP_QUERY` u `src/content.js`) i gumb *Upute za dolazak* koji otvara
navigaciju u Google Maps. Za kartu nije potreban API ključ.

## Što treba zamijeniti pravim podacima

Većina podataka nalazi se u `src/content.js`:

- [ ] **Kontakt** (`CONTACT`): telefon, e-pošta, poštanski broj, Instagram, Facebook
- [ ] **Cijene** (`PRICES`), vrste soba i kvadrature
- [ ] **Kuće**: nazivi, broj jedinica i adrese
- [ ] **Udaljenosti** do Zagreba i Zadra u sekciji *Lokacija* (približne vrijednosti – provjerite ih)
- [ ] **Fotografije**:
  - stavite ih u `public/images/`
  - galerija: popis `PHOTOS` u `src/components/Gallery.jsx`
  - sobe: `src/components/Rooms.jsx` (komentar pokazuje kako)
  - naslovna: u `src/index.css` (`.hero`) postavite `background: url("/images/hero.jpg") center / cover;`

Pri svakoj promjeni teksta ažurirajte i hrvatsku (`hr`) i englesku (`en`) verziju.

## Obrazac za upit

Obrazac provjerava podatke i otvara gostov program za e-poštu s pripremljenom porukom
(`mailto:`), pa ne treba poslužitelj. Za slanje izravno sa stranice može se povezati
Formspree, Netlify Forms ili vaš sustav za rezervacije.

## Objava

- **GitHub Pages**: priložen je workflow `.github/workflows/deploy.yml` koji pri svakom
  pushu na granu `main` izgradi i objavi stranicu. U repozitoriju uključite
  *Settings → Pages → Source: GitHub Actions*.
- **Netlify / Cloudflare Pages / Vercel**: build naredba `npm run build`, izlazna mapa `dist`.
- **Klasični hosting**: pokrenite `npm run build` i prenesite sadržaj mape `dist/`.
