# hotel-platform

Jedan kod, više smještajnih objekata. Svaki objekt je mapa u `sites/`.

## Pokretanje

```bash
pnpm install
pnpm dev                          # Antemurale (zadano)
HP_SITE=antemurale pnpm build     # rezultat u apps/web/dist/antemurale
```

## Struktura

```
apps/web          Astro predložak (stranice, komponente, tekstovi sučelja)
packages/core     Tipovi: SiteConfig, Room, Localized...
packages/booking  Zajedničko sučelje za rezervacije + adapteri
                  (inquiry, ical, erecepcija)
sites/<objekt>    site.config.ts + public/ (slike, favicon)
```

## Novi objekt

1. Kopiraj `sites/antemurale` u `sites/novi-objekt`
2. Popuni `site.config.ts` (ime, boje, fontovi, sobe, jezici)
3. Stavi fotografije u `public/` i upiši putanje u `rooms[].images`
4. `HP_SITE=novi-objekt pnpm dev`

Kod se ne mijenja. Ako objekt treba nešto čega nema, dodaj to kao
opcionalno polje u `SiteConfig` da ga mogu koristiti i ostali.

## Dizajn

Izgled se prilagođava objektu samo kroz `site.config.ts`:

- `theme.colors` / `theme.colorsDark`: šest boja (bg, surface, text, muted, primary, accent).
  Ostali tonovi (linije, blage pozadine ikona) računaju se iz njih. `onPrimary` je
  opcionalan ako tekst na primarnoj boji treba biti drugačiji od `surface`.
- `theme.fonts`: font naslova i teksta.
- `hero.image`: fotografija naslovnog dijela. Bez nje se crta ilustracija krajolika
  (brda, šuma, slap, jezero) u bojama teme, pa i objekt bez fotografija izgleda dovršeno.
- `hero.eyebrow`: kratka oznaka iznad naslova (npr. mjesto).
- `amenities`: tekst ili `{ label, icon, highlight }`. Ikone su iz Lucide skupa
  (popis u `packages/core`, `iconNames`); `highlight: true` stavlja pogodnost u traku
  ispod naslovnog dijela (najviše 4).
- `restaurant.image`: fotografija restorana (opcionalno).

Na mobitelu se pri skrolanju pojavljuje donja traka s gumbima za poziv i upit.
Tamna tema prati postavku uređaja. Animacije se isključuju uz `prefers-reduced-motion`.

## Rezervacije

- `inquiry`: upit recepciji (trenutno, preko e-maila gosta)
- `ical`: čita zauzeće iz iCal feeda, rezervacija i dalje kao upit
- `erecepcija`: čeka API dokumentaciju od Centra MCS

## Sljedeći koraci

- [ ] Popuniti TODO u `sites/antemurale/site.config.ts` (e-mail, sobe, cijene, domena)
- [ ] Fotografije
- [ ] Odgovor Centra MCS -> implementirati `ERecepcijaAdapter`
- [ ] Hosting s serverless funkcijom (Cloudflare) i `POST /api/inquiry`
- [ ] Stranica vodiča za Plitvice
- [ ] AI asistent
