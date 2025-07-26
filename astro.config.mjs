// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@wkovacs64/astro-vercel-static-headers';

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    experimentalStaticHeaders: true,
  }),
  experimental: {
    csp: true,
  },
});
