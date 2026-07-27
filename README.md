# smatthewcohen.com

Single-page personal site for Smatthew Cohen. IngeniumVector credibility anchor. Build key `BO-SMC-WEBSITE-V1`.

> Name: always **Smatthew Cohen**, one word. Never "S Matthew", "SMatthew", or any split-name capitalization. Applies to copy, meta, schema, alt text, and the repo name (`IngeniumVector/SmatthewCohen`).

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

## Status: BUILT with real copy, pending deploy
Copy is written and honest (SM ungated the copy pass, MSG-1645): every proof figure is
sourced from work already in production, client work is anonymized, no invented numbers.
Build is clean (astro check 0/0/0), em-dash + banned-vocab clean, single h1, Person + WebSite
schema, apex canonical.

Still pending from SM before deploy:
1. Portrait image (the hero shows a marked `[PORTRAIT]` frame until then)
2. Real LinkedIn + GitHub profile URLs (footer placeholders point to `#`)
3. Analytics: confirm self-hosted cookieless Umami website id for this domain
4. Cloudflare account state + deploy access (apex/www + Pages project)

## Develop
```
npm install
npm run dev      # local preview
npm run build    # astro check + static build to dist/
```

## Deploy
Cloudflare Pages, build command `npm run build`, output `dist/`. Ships via the COD safe-commit
gateway with post-push HTTP live-verify (BO-DEC-064). Not the content queue.

### www to apex canonical (dashboard, not repo)
Cloudflare Pages `_redirects` cannot do a cross-host www to apex 301 (absolute URLs are
rejected at deploy). Set it at the zone level instead, in the Cloudflare dashboard for
`smatthewcohen.com`:

1. Rules > Redirect Rules > Create rule.
   - When incoming requests match: Hostname equals `www.smatthewcohen.com`
   - Then: Static redirect to `https://smatthewcohen.com` + concatenate the path, status 301,
     preserve query string.
2. Keep the apex (`smatthewcohen.com`) as the Pages custom domain. The redirect rule handles
   www, so www does not need to be a Pages custom domain.

Until that rule exists, `www.` returns a Cloudflare error (522) because the Pages project only
serves the apex. The apex itself is fully live. `rel=canonical` already points every page at the
apex, so search engines get the canonical signal regardless.
