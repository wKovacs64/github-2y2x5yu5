// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    experimentalStaticHeaders: true,
  }),
  experimental: {
    csp: true,
  },
  image: {
    responsiveStyles: true,
    layout: 'constrained',
  }
});
