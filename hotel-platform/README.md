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
