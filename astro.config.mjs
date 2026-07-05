// @ts-check
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

const picomatchShim = fileURLToPath(new URL('./src/shims/picomatch.mjs', import.meta.url));

// https://astro.build/config
export default defineConfig({
  // TODO: replace with final domain
  site: 'https://personal-site.pages.dev',
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
