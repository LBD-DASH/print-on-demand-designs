# Open Ink Studio (working name)

Static Astro site for an original print-on-demand design brand (T-shirts, mugs, posters, stickers). Concept previews only: no shop, prices or checkout yet.

Live: https://lbd-dash.github.io/print-on-demand-designs/

```bash
npm ci
npm run dev     # http://localhost:4321/print-on-demand-designs/
npm run build   # outputs dist/
```

- `src/content/collections/<slug>.md`: one design concept per file (schema in `src/content.config.ts`, validated at build)
- `src/data/partners.json`: only place outbound provider links live; `affiliateUrl` stays empty until a program approves
- `.github/workflows/deploy.yml`: builds and deploys to GitHub Pages on push to `main`

Rules: original artwork only, no invented prices, stats or reviews, no em dashes. See PLAYBOOK.md and STATUS.md.
