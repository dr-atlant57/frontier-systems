# ROOT FRONTIER SYSTEMS — SITE ARCHITECTURE AUDIT
**Review:** 10 November 2026 · Branch `feature/for-visionaries-2026-11-10` · PR #15

## 1. Initial defect: fragmented site orientation
The original `main` repository contained **86 HTML pages**, with multiple independent layouts and menus:
- Home: a dense 12-link navigation; local navigation disappears when following links.
- Ideas on Demand: local Fields / Results / Pricing / Programs / Start navigation.
- System Programs and Frontier Programs: only commercial product links.
- Solutions, Research, Cases and Human Systems: smaller legacy navigation sets.
- Problem Atlas: independent navigation on every dossier.
- Special projects, registry, NEMT demo and design variants: different local shells, some without comparable site navigation.

**Root cause:** page-specific navigation was repeatedly implemented as if it were the complete site map.

## 2. Architecture decision
Use one global orientation layer and a separate section navigation.

Global layer:
- Persistent ROOT FRONTIER SYSTEMS identity.
- Seven primary pathways: Home, Ideas, Solutions, Visionaries, Cases, Research, Contact.
- A consistent `All Sections` site map covering commercial, research, visionaries and system architectures.
- A common global footer with the same master map and a verified contact email.
- Page-local navigation remains available for section context (such as Fields, Formats, Pricing).
- Shared implementation: `rfs-global-shell.js` and `rfs-global-shell.css`.
- The historical duplicate full-site footers are visually superseded; local editorial footers are retained where they contain page-specific information.
- EN/RU is synchronized with the common runtime and language controls wherever those controls expose a language event or an identifiable switch.

## 3. Growth opportunities addressed
### Case depth and search visibility
- Eight distinct architecture cases now each have an EN and RU page under `/cases/<slug>/` and `/cases/ru/<slug>/`.
- Every page includes problem, system architecture, components, validation questions, next-stage path and potential partner roles.
- The home case cards keep the quick modal overview but also link to a case page; the modal links to the full brief.
- `/cases/` lists all eight rather than three isolated cards.
- These are **architecture briefs / conceptual case documents**. They are a foundation for deeper externally referenced technical whitepapers, not a claim of completed deployments.

### Lead capture and qualification
- `/diagnostic/` and `/diagnostic/ru/`: four-step diagnostic.
- Segments existing problem / goal / idea / vision, scale, value-at-stake, role, resources and contact.
- Routes toward commercial architecture or frontier collaboration.
- This GitHub Pages-only version prepares a message through `mailto:` and provides clipboard copy. **It does not claim a server-side submission or store contact data.**

### Honest social proof
- `/evidence/` and `/evidence/ru/` show a verifiable public inventory: 20 Problem Atlas topics, eight case architecture briefs, one NEMT synthetic demonstration.
- These are public *work outputs*, not verified customer outcomes or financial return claims.
- A framework for future anonymized outcome reporting specifies baselines, scope, methodology, attribution, client authorization and confidentiality.

## 4. Search and discovery
- New bilingual pages have canonical URLs and EN/RU hreflang.
- Legacy pages lacking canonical declarations were updated. Redundant design previews and technical template/redirect pages have appropriate noindex treatments.
- `sitemap.xml` includes the new Visionaries, cases, diagnostic and evidence URLs.
- Existing `robots.txt` continues to allow indexing and references the sitemap.
- Static internal-link review of **122 HTML pages** reported no unresolved local files.
- The static quality gate `scripts/audit-site.mjs` is added with a pull-request workflow to reduce regressions.

## 5. Status and remaining human review
The working branch is **not the live website**. GitHub Pages continues to use `main` until PR #15 is merged.

Programmatic checks completed:
- Complete repository file inventory.
- Static relative and absolute internal links.
- Common navigation component included in all HTML files.
- JavaScript syntax of key shared and interactive scripts.
- Case route existence and SEO metadata.
- Sitemap URL-to-file resolution.

Before merge, carry out a browser/device review for:
1. Desktop navigation width and the visual hierarchy between global and local menus.
2. Smartphone portrait/landscape layout, sticky headers, mega-menu scrolling and click targets.
3. Existing page-local language controls, especially 001/002/003, Ideas and Programs.
4. Modal accessibility and the deep-case links.
5. Diagnostic next/back, required fields, clipboard and `mailto:` with a real email client.
6. Preserved pricing, case rendering, old project navigation and contact pathways.

## 6. Publishing boundary
Do not merge PR #15 into `main` until these visual and functional checks are accepted. Keep product economics and original project files intact except for navigation/SEO/cross-links. Do not expose private client outcomes or invention details without authorization.
