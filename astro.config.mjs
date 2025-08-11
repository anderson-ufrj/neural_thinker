// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  site: 'https://neural-thinker.vercel.app',
  vite: {
    plugins: [tailwindcss()]
  },
  redirects: {
    '/': '/pt'
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});