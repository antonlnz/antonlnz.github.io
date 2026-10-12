import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";
import { shortLinks } from "./src/data/short-links";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    sourcemap: false,
  },
  
  site: process.env.SITE || 'https://antonlnz.com',
  integrations: [
    sitemap({
      // Short links are redirects to external sites, not pages to index
      filter: (page) => !(new URL(page).pathname.replaceAll('/', '') in shortLinks),
    }),
  ]
});