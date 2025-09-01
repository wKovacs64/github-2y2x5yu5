// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwind()],
  },
  adapter: vercel({
    experimentalStaticHeaders: true,
  }),
  experimental: {
    csp: true,
  },
});
