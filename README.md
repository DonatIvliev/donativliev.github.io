# Donat Ivliev Portfolio

A consulting-style personal portfolio for **Donat Ivliev** — BBA Management & IT student at the University of Toronto Scarborough and Emerging Technology Assistant at The BRIDGE — built to position for Fall 2026 and Winter 2027 internships in product, consulting, business analysis, Agile delivery, emerging technology, and technology strategy.

**Live site:** https://donativliev.github.io

## Tech Stack

- React 18 + Vite + TypeScript
- Tailwind CSS + shadcn/ui
- Framer Motion (animations)
- Lucide React (icons)
- React Router
- Deployed on GitHub Pages

## Features

- Responsive, accessible design with semantic HTML
- Animated section reveals (respects `prefers-reduced-motion`)
- Five pages: Home, Experience, Portfolio, Studying, Contact
- Filtered project case studies
- Proof-driven metric strips and capability cards
- Operating System timeline
- SPA routing on GitHub Pages (via `404.html` redirect)
- SEO metadata + JSON-LD Person schema
- SVG monogram favicon

## Development

```bash
npm install --legacy-peer-deps
npm run dev      # local dev server
npm run build    # production build
npm run preview  # preview production build
```

## Deployment

Pushes to `main` trigger the workflow in `.github/workflows/deploy.yml` which publishes the `dist/` output to GitHub Pages.

## Structure

```
src/
  components/    Reusable UI (Hero, Navbar, Footer, sections…)
  pages/         Route pages (Index, Experience, Portfolio, Studying, Contact)
  data/site.ts   Single source of truth for content (metrics, projects, experiences, skills, leadership)
  hooks/         useScrollAnimation
  index.css      Design tokens (HSL palette, gradients, shadows)
```
