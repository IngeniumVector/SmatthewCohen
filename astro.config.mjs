import { defineConfig } from 'astro/config';

// smatthewcohen.com v1 (BO-SMC-WEBSITE-V1). Static single-page site on Cloudflare Pages.
// Mirrors the AJB config: canonical apex host, static output, always-trailing-slash.
export default defineConfig({
  site: 'https://smatthewcohen.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    assets: '_astro'
  },
  vite: {
    build: {
      cssMinify: true,
      minify: true
    }
  }
});
