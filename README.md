# smatthewcohen.com

Single-page personal site for Smatthew Cohen. IngeniumVector credibility anchor. Build key `BO-SMC-WEBSITE-V1`.

## Stack
- Astro (static output), deployed on Cloudflare Pages.
- No JS framework, no client runtime beyond optional analytics.
- Design system in `src/styles/global.css`: one accent (deep petrol), monospace proof numbers, AA contrast, light/dark aware, responsive.

## Structure
- `src/pages/index.astro` - the single page, assembling the six sections.
- `src/components/` - Hero, WhatIDo, ProofCards, About, CTA, Footer.
- `src/pages/blog/index.astro` - empty Phase 2 scaffold (noindex).
- `public/_redirects` - www to apex canonical (mirrors AJB).
- `public/_headers` - baseline security + asset caching.

## Status: SCAFFOLD (placeholder copy)
All human copy is marked with a dashed `.ph` placeholder chip and reads like `[POSITIONING LINE]`.
The copy pass and deploy wait on SM inputs:
1. Positioning line
2. 3-4 real wins + numbers (and anonymization preference)
3. Portrait image
4. CTA tool (booking link or email)
5. Analytics: confirm self-hosted cookieless Umami (default) + website id
6. Cloudflare account state + deploy access (apex/www + Pages project)

## Develop
```
npm install
npm run dev      # local preview
npm run build    # astro check + static build to dist/
```

## Deploy
Cloudflare Pages, build command `npm run build`, output `dist/`. Ships via the COD safe-commit
gateway with post-push HTTP live-verify (BO-DEC-064). Not the content queue.
