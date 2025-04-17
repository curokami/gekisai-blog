// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import { fileURLToPath } from 'url';

export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap()],

  vite: {
    server: {
      port: 4321, 
    },
    resolve: {
      alias: {
        '@components': './src/components', 
      },
    },
  },
});