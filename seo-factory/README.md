# ROOT FRONTIER — Semantic Problem Intelligence Factory
Updated: 2026-10-18.

## Current assets
- 10 unique problem clusters, each with EN/RU static research pages (20 topical URLs)
- 80 unverified search-intent hypotheses, reciprocal localized links and sitemap
- Audit handoff: selected topic slug -> human-confirmed red flags -> client estimated impact/budget -> Architecture Blueprint
- Project Lab selectable 12-capability portfolio
- **Typed semantic graph:** `/problems/graph.json` generated from editorial `seo-factory/seed.json`. Nodes include problem, symptom, hypothesized cause, architecture alternative, metric, capability, proposed deliverable and unvalidated search intent.
- Explicit typed, editorially reviewed relations between problems; used to render contextual related pages instead of arbitrary neighbors.

## Generate
`node seo-factory/run.mjs` (Node 20+), then commit generated files. The generator is deterministic for the same seed.

## Editorial and safety gates
Only public, nonconfidential general hypotheses are in this graph. The graph is **not** a validated causal model or a statement about a particular enterprise. Every root-cause hypothesis needs evidence from authorized sources and experiments before client-specific use. Do not conflate query hypotheses with measured keyword volume, budget ranges with purchase commitments, or a prototype with ROI.

Before producing other languages, research the localized search intent and conduct expert review. Search indexing and qualified leads need monitoring after deployment.
