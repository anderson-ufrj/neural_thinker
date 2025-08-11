// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  site: 'https://neural-thinker.vercel.app',
  redirects: {
    '/': '/pt'
  },
  integrations: [tailwind()],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});