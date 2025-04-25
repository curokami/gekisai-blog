// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import { fileURLToPath } from 'url';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

const tailwindIntegration = tailwind({
  applyBaseStyles: false, // baseスタイル（reset等）を無効化
});

export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), react(), tailwind()],

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