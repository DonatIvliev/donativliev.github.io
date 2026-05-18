
# Portfolio Master Redesign Plan

Full restructure of the site into a consulting/LinkedIn-style portfolio positioning Donat for Fall 2026 / Winter 2027 internships. Below is the concrete build plan.

## 1. Design system (src/index.css + tailwind.config.ts)
- Replace HSL tokens with new navy palette:
  - `--background` #F6F8FA, `--foreground` #172033, `--muted-foreground` #5F6B7A
  - `--primary` #0B2545 (deep navy), `--primary-foreground` #FFFFFF
  - `--accent` #2F7DF6 (electric blue), `--accent-foreground` #FFFFFF
  - `--secondary` #E8EEF6, `--border` #D8E0EA
  - Custom: `--navy-deep` #071A33, `--navy-pro` #1E4F80, `--blue-gray` #64808D, `--blue-gray-light` #88A2AB, `--accent-yellow` #F4DA30
  - `--gradient-navy`, `--gradient-subtle`, `--gradient-glow`
- Remove unused Lora + Space Mono imports; keep Inter only.
- Remove dark-mode tokens (no toggle).

## 2. SEO + metadata
- `index.html`: new title, description, canonical, OG tags, JSON-LD Person schema, inline SVG favicon with "DI" monogram (replace `data:,` icon).
- Update README.

## 3. Routing (src/App.tsx)
- Add `/experience` route → new page.
- Keep `/`, `/portfolio`, `/studying`, `/contact`.

## 4. Shared data (new src/data/)
- `siteConfig.ts`, `navigation.ts`, `metrics.ts`, `experiences.ts`, `projects.ts`, `skills.ts`, `leadership.ts` — drive cards from data.

## 5. Reusable components (new/updated src/components/)
- `Navbar` — add Experience, Studying, Contact links; DI monogram; mobile menu; active state.
- `Footer` — add nav links column, role line, GitHub link.
- `SectionHeader`, `MetricCard`, `ProofMetricStrip`, `CapabilityCard`, `ExperienceCard`, `ProjectCaseStudyCard`, `LeadershipCard`, `SkillPill`, `TimelineStep`, `QuoteBlock`, `ContactCard`, `CTAButton`, `AnimatedSection` (exists), `PageTransitionWrapper`.
- Add `framer-motion` (install) for restrained fade-up + stagger reveals.

## 6. Home page (src/pages/Index.tsx + components)
Sections in order:
1. `Hero` — rewrite with new headline ("Product-minded executor with an Agile delivery backbone"), eyebrow, subtitle, support paragraph, role + availability chips, 4 CTAs (Portfolio, Experience, Resume, Contact), badge row, 6 proof metrics, navy gradient bg with subtle grid.
2. `ProofMetricStrip` — 6 metrics with proof lines.
3. `CurrentRoleBridge` — premium horizontal feature card for The BRIDGE.
4. `WhatIDo` — rewrite to 5 value-creation cards (Product & BA, Emerging Tech, Execution, Data/Finance, Communication) each with proof + tags.
5. `OperatingSystem` — keep as dark navy timeline (Diagnose→Improve), refine copy + quote.
6. `FeaturedProjects` — rewrite to 4 cards (Smaked dominant, SafePlan, Igluva, BRIDGE) with role, category, problem, what I did, tags, evidence.
7. `LeadershipPreview` — 4 cards (BRIDGE, FLIP, MTA, ECLIPSE).
8. `Capabilities` (rename to Skills) — grouped skill pills (Product/Delivery, Emerging Tech/Research, Data/Business, Technical, Communication).
9. `ContactCTA` — rewrite with Fall 2026 / Winter 2027 framing + 4 CTAs.
10. `Footer`.

## 7. Experience page (new src/pages/Experience.tsx)
- Top metric strip, then stacked `ExperienceCard`s: BRIDGE, FLIP, MTA, SAVI Finance, UTSC Ambassador. Each: role, org, context, bullets, skill tags.

## 8. Portfolio page (src/pages/Portfolio.tsx)
- Filter chips (All / Product / Agile / BA / Emerging Tech / Data / Leadership).
- Case-study cards in order: Smaked, SafePlan, BRIDGE, Igluva, optional Power BI dashboard, ECLIPSE. Each expanded: problem, role, what I did, tools, evidence, tags.

## 9. Studying page (src/pages/Studying.tsx)
- Recognition strip, then 5 sections (BRIDGE feature, FLIP, MTA, ECLIPSE 1st place with tasteful yellow accent, UTSC Ambassador). Optional small Duolingo card.

## 10. Contact page (src/pages/Contact.tsx)
- Subtitle with Fall 2026 / Winter 2027 framing.
- 4 contact cards (Email, LinkedIn, GitHub, Resume), location + role + availability info.
- Simple mailto-based form (Name / Email / Message → opens mail client).

## 11. Accessibility + perf
- Semantic landmarks, single H1 per page, alt text, focus states, `prefers-reduced-motion` guard in motion variants.
- Lazy-load below-fold images, remove unused fonts/tokens.

## Technical Details
- Stack stays: React + Vite + TS + Tailwind + React Router + shadcn. Add: `framer-motion`.
- GH Pages SPA already handled via `public/404.html` + `index.html` redirect script — leave intact.
- `public/resume.pdf` — keep link; if missing, the user already controls the file (do not fabricate).
- Headshot reuse: `src/assets/headshot.jpg`.
- No backend. Contact form = mailto fallback.
- Color usage: yellow (#F4DA30) only on ECLIPSE 1st place badge accents.

## Out of scope (won't do)
- Real Figma assets, new photography, real Power BI dashboard screenshots — placeholders/icons where evidence images are unavailable.
- Backend contact form integration (mailto only).
- Per-route `react-helmet-async` (single sitewide head is sufficient for this scope).

Proceeding to implementation on approval.
