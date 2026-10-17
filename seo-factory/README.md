# ROOT FRONTIER — Semantic Problem Intelligence Factory

**Status:** first usable EN/RU tranche, October 17, 2026. No claim of Google indexation, organic traffic or keyword demand validation.

## What is built
- 5 independently framed enterprise problem dossiers in English and Russian (10 pages)
- 2 locale-specific problem indexes and 1 language chooser
- Canonical and reciprocal hreflang references; direct crawlable HTML without runtime content translation
- Every dossier: 3 symptoms, 3 suspected root causes, 3 architecture alternatives, 3 discovery questions, 3 validation metrics
- Links from every dossier to the existing `/audit/`, the portfolio and contact
- `sitemap.xml`, `robots.txt` and 40 **unvalidated** intent hypotheses in CSV
- Main navigation and Project Lab links

## Production workflow
1. Confirm source evidence and a distinct buyer intent; merge duplicate problem nodes.
2. Add a distinct architecture dossier in `seo-factory/seed.json`; review EN/RU with native-domain editors.
3. `node seo-factory/run.mjs` (Node 20+). Commit the generated HTML and sitemap.
4. Verify metadata, accessibility, page quality, correct language, mobile layout and all CTAs.
5. Deploy through the existing GitHub Pages workflow; submit sitemap to Google Search Console after deployment.
6. Inspect indexed pages, queries, qualified audit starts, audit completions, Blueprint transitions, contacts, contracts and revenue.
7. Translate a dossier to other languages only after localized search intent and editorial QA. **Do not create locale URL placeholders.**

## Editorial gates
A public problem page needs a concrete buyer role, a nontrivial root-cause model, alternatives with trade-offs, measurable acceptance criteria, author/reviewer, evidence or transparent hypothesis status, and a relevant action. Do not claim financial benefits without baseline and verification. No customer logos or case claims without permission. Respect contracts and data rights.

## Current limitations
- Keywords are qualitative research hypotheses, NOT measured frequency/competition.
- The existing Audit currently displays a Russian questionnaire. Links are functional but EN localization is pending.
- A visitor's selection cannot yet prepopulate audit flags; do not imply that it does.
- Expanded locale list requires separately researched, human-reviewed content.
- The current first tranche does not constitute a global knowledge graph or autonomous factory yet.

## Search references
- Google multilingual URLs/hreflang: https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
- Google scaled content policies: https://developers.google.com/search/docs/essentials/spam-policies
- Google AI search guidance: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide

**Commercial objective:** qualified paid architecture discovery (not raw page count).
