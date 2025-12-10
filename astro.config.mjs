import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    sourcemap: false,
  },
  
  site: process.env.SITE || 'https://antonlnz.github.io',
  integrations: [sitemap()]
});