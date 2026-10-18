# ROOT FRONTIER — Semantic SEO Content Factory

## October 18, 2026 release
- **20 independent problem clusters** with fully authored EN and RU dossiers (**40 topical URLs**)
- **160 search-intent hypotheses**, not measured keyword demand
- Five browseable content areas: Enterprise AI & Operations, Capital / M&A, Human & Knowledge, Technology & Resilience, and Industry Architecture
- Typed semantic graph at `/problems/graph.json` with related-problem links, architecture paths, symptom hypotheses, capabilities and acceptance metrics
- Every article connects to `/audit/?problem=<slug>` and existing Audit → Blueprint
- Suggested flag lists are presented for **explicit human selection**; impact and budget estimates remain voluntary client-side inputs
- Individual architecture modules and their maturity status are in `/project-lab/`

## Routine
- Canonical source `seo-factory/seed.json`; regenerate static content with `node seo-factory/run.mjs` (Node 20+)
- Update the embedded `const sourceMap` in `audit/index.html` from `seo-factory/audit-source-map.json` on adding issues (see sync script)
- Check links, semantic graph node/edge integrity, translation quality and substantive difference between problem dossiers
- Do not translate bulk pages to other locales until local search intent is examined and text is reviewed
- Submit updated sitemap in Search Console; monitor indexing, qualified Audit visits, Blueprint starts and paid deals

## Evidence discipline
All causes and solutions are research hypotheses until validated on authorized client evidence. Do not use case-study claims without rights or proof. Financial benefit estimates and budgets are visitor-supplied signals, never confirmed ROI or contracts. Do not attempt to monetize index volume alone.
