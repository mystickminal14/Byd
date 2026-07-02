# BYD Nepal — Premium Experience

A cinematic, single-page-app experience for the official BYD lineup in Nepal
(distributed by Cimex Inc.), built as a sister project to the Ford Nepal site —
same engine, completely different "Deep Ocean" design language.

## Stack

- **Vite + React 19 + TypeScript**
- **TanStack Router** — `/`, `/models`, `/models/:slug`, `/technology`, `/pricing`, `/about`, `/contact`, `/test-drive`
- **Tailwind CSS 4** — custom "Deep Ocean" theme (abyss surfaces, aqua→electric aurora accents, pearl light sections)
- **GSAP + ScrollTrigger + Lenis** — one shared RAF clock for buttery scroll & reveals
- **framer-motion** — micro-interactions, mega-menu, lightbox

## Content

All six Nepal models with real published specs, prices and official imagery
mirrored from byd.com/np: **ATTO 1, ATTO 2, ATTO 3, DOLPHIN, SEALION 7, M6**.

- `public/assets/<model>/` — official byd.com/np imagery (desktop set)
- `public/assets/atto3/adas/` — official ADAS 3D demo videos (ACC/AEB/LDW/RCTA)
- `public/assets/about/brand-film.mp4` — official BYD brand film (About hero)
- `public/pdfs/` — official Nepal brochures for all six models
- Official YouTube films embedded per model (lite-embed, loads on click)

## Highlights vs. the Ford build

- Interactive lineup explorer (hover-driven stage) instead of static cards
- Animated stat counters, aurora gradient type, glass mega-menu
- **ADAS Theatre** — real BYD safety animations, tabbed, auto-play on scroll
- **EMI Studio** — live monthly-payment calculator per variant
- Autoplaying official brand film hero on the About page
- Gallery lightbox with keyboard-free prev/next

## Run

```bash
npm install
npm run dev       # dev server
npm run build     # typecheck + production build
npm run preview   # serve dist on :3001
```

Prices are the published Nepal list at build time — confirm with the showroom.
# Byd
