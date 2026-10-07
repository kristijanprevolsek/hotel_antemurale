import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';

// Koji objekt gradimo: HP_SITE=antemurale pnpm build
const siteId = process.env.HP_SITE ?? 'antemurale';
const repoRoot = fileURLToPath(new URL('../../', import.meta.url));

export default defineConfig({
  outDir: `./dist/${siteId}`,
  publicDir: `${repoRoot}sites/${siteId}/public`,
  vite: {
    define: { 'import.meta.env.HP_SITE_ID': JSON.stringify(siteId) },
    server: { fs: { allow: [repoRoot] } },
  },
});
