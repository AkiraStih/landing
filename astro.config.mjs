// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Montserrat',
      cssVariable: '--font-montserrat',
      weights: [400, 600, 700],
    },
     {
      provider: fontProviders.google(),
      name: 'Yuyu',
      cssVariable: '--font-yuyu',
      weights: [400, 600, 700],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});