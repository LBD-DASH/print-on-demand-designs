# Playbook

## Add one design concept page
1. Create `src/content/collections/<slug>.md`. Copy an existing file; keep the frontmatter valid (title 10-70 chars, description 50-160, palette of 2-4 hex colours, motif one of sun/waves/peaks/grid, products, at least 2 faq).
2. Original artwork only. If a new motif is needed, add a branch to `src/components/Art.astro` and to the `motif` enum in `src/content.config.ts`. Never use trademarks, characters, celebrities or copied art.
3. No prices, stats, reviews or sales claims. Label as concept until Kevin approves a real product.
4. `npm run build`; then `rg "—" dist` must return nothing; check for "passive income" and "guaranteed".
5. Push source only (never `node_modules/` or `dist/`) to `main` (commit `Add concept: <slug>`). Actions deploys. Confirm with `curl -I https://lbd-dash.github.io/print-on-demand-designs/collections/<slug>/` returns 200.

## Add a sourced guide page
Only state facts found on a cited page, with a "Last checked <date>" line and links. Unverifiable means omit. Provider links come from `partners.json` via `getPartner()`. Never invent affiliate IDs.

## Next pages, in priority order
1. Pending Kevin: real brand name, then sweep the site for "Open Ink Studio".
2. Collection concepts: typographic quote-free word marks (original words), botanical line art, retro-geometric stickers, poster size guide concept.
3. Guide: sourced "Choosing between print-on-demand providers" (needs verified, dated facts).
4. Guide: sourced "File and artwork requirements" per provider docs.
5. Real Request a quote flow once Kevin approves a contact path.
6. Shop pages, only after provider, marketplace account and pricing decisions.
