// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import { fileURLToPath } from 'url';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), react()],

  vite: {
    server: {
      port: 4321, 
    },

    resolve: {
      alias: {
        '@components': './src/components', 
      },
    },

    plugins: [tailwindcss()],
  },
});