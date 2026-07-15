// @ts-check
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

const picomatchShim = fileURLToPath(new URL('./src/shims/picomatch.mjs', import.meta.url));

// https://astro.build/config
export default defineConfig({
  // Deployed as a Cloudflare Worker (this account has no Pages) — see DEPLOY.md.
  // TODO: replace with a custom domain if/when Willy buys one.
  site: 'https://willy.wcwwong.workers.dev',
  integrations: [sitemap()],
  vite: {
    resolve: {
      alias: [
        { find: 'picomatch', replacement: picomatchShim }
      ]
    },
    plugins: [tailwindcss()]
  }
});
