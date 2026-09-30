import type { SiteConfig } from '@hp/core';

const configs = import.meta.glob<{ default: SiteConfig }>('../../../sites/*/site.config.ts', {
  eager: true,
});

const id = import.meta.env.HP_SITE_ID as string;
const entry = Object.entries(configs).find(([path]) => path.includes(`/sites/${id}/`));

if (!entry) {
  const available = Object.keys(configs).map((p) => p.split('/sites/')[1]?.split('/')[0]);
  throw new Error(`Nepoznat objekt "${id}". Dostupni: ${available.join(', ')}`);
}

export const site: SiteConfig = entry[1].default;
