import type { IconName } from '@hp/core';

// Lucide ikone (ISC licenca) kao SVG tekst. Novu ikonu dodaj ovdje i u iconNames u @hp/core.
import parking from 'lucide-static/icons/square-parking.svg?raw';
import restaurant from 'lucide-static/icons/utensils.svg?raw';
import coffee from 'lucide-static/icons/coffee.svg?raw';
import bar from 'lucide-static/icons/wine.svg?raw';
import sauna from 'lucide-static/icons/thermometer-sun.svg?raw';
import hotTub from 'lucide-static/icons/waves.svg?raw';
import garden from 'lucide-static/icons/leaf.svg?raw';
import trees from 'lucide-static/icons/trees.svg?raw';
import kids from 'lucide-static/icons/baby.svg?raw';
import archery from 'lucide-static/icons/target.svg?raw';
import bike from 'lucide-static/icons/bike.svg?raw';
import wifi from 'lucide-static/icons/wifi.svg?raw';
import mountain from 'lucide-static/icons/mountain.svg?raw';
import walk from 'lucide-static/icons/footprints.svg?raw';
import fireplace from 'lucide-static/icons/flame-kindling.svg?raw';
import breakfast from 'lucide-static/icons/croissant.svg?raw';
import guests from 'lucide-static/icons/users.svg?raw';
import bed from 'lucide-static/icons/bed-double.svg?raw';
import bath from 'lucide-static/icons/bath.svg?raw';
import snowflake from 'lucide-static/icons/snowflake.svg?raw';
import safe from 'lucide-static/icons/vault.svg?raw';
import terrace from 'lucide-static/icons/sun.svg?raw';
import tv from 'lucide-static/icons/tv.svg?raw';
import pets from 'lucide-static/icons/paw-print.svg?raw';
// Ikone sučelja
import phone from 'lucide-static/icons/phone.svg?raw';
import mapPin from 'lucide-static/icons/map-pin.svg?raw';
import mail from 'lucide-static/icons/mail.svg?raw';
import arrowRight from 'lucide-static/icons/arrow-right.svg?raw';
import menu from 'lucide-static/icons/menu.svg?raw';
import close from 'lucide-static/icons/x.svg?raw';
import clock from 'lucide-static/icons/clock.svg?raw';
import check from 'lucide-static/icons/check.svg?raw';

const content: Record<IconName, string> = {
  parking, restaurant, coffee, bar, sauna, 'hot-tub': hotTub, garden, trees, kids, archery,
  bike, wifi, mountain, walk, fireplace, breakfast, guests, bed, bath, snowflake, safe,
  terrace, tv, pets,
};
const ui = { phone, 'map-pin': mapPin, mail, 'arrow-right': arrowRight, menu, close, clock, check };

export type AnyIcon = IconName | keyof typeof ui;

const all: Record<AnyIcon, string> = { ...content, ...ui };

/** SVG bez licencnog komentara i fiksne veličine; veličinu i boju određuje CSS (1em, currentColor). */
export const iconSvg = (name: AnyIcon): string =>
  all[name]
    .replace(/<!--[\s\S]*?-->/, '')
    .replace(/\s(width|height)="24"/g, '')
    .replace(/class="[^"]*"/, 'class="icon" aria-hidden="true" focusable="false"')
    .trim();
