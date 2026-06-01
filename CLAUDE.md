# Inargy — landing page

Marketing/landing site for Inargy, a clean-energy startup democratising solar power
across Africa (homes + businesses, Naira pricing, 0%-interest plans). Single-page React
app, no router. Built with Vite 8 + React 19 + Tailwind v4 + HeroUI.

## Running the app

```bash
npm install      # required: the committed vite ^8.x can install incomplete — see gotcha
npm run dev      # Vite dev server
npm run build    # production build
npm run lint     # eslint (must pass before commit)
```

**Gotchas (learned the hard way):**
- **Port:** this app serves on **http://localhost:5174**. Port **5173 is a different
  project** (`../wsie`, a meal-planning app) — don't confuse them. Always check
  `document.title` is "Inargy — …" before assuming you're on the right app.
- **Broken vite install:** a fresh `npm run dev` can fail with
  `ERR_MODULE_NOT_FOUND … vite/dist/node/chunks/node.js`. Fix: `rm -rf node_modules/vite && npm install vite`.

## Architecture

- Entry: `src/main.jsx` → `src/App.jsx`. App composes sections top-to-bottom:
  Navbar → Hero → Stats → TrustBar → About → Features → Pricing → Testimonials → FAQ →
  CtaBanner → Contact → Footer.
- Below-the-fold sections are **lazy-loaded** (`React.lazy` + `Suspense`) and only mount
  when scrolled near. When scripting/QA, step-scroll the page to trigger mounts before
  querying `#pricing`, `#testimonials`, etc.
- **Scroll-reveal:** `src/hooks/useScrollReveal.js` (IntersectionObserver) toggles
  `opacity-0 translate-y-*` → `opacity-100 translate-y-0`. A full-page screenshot taken
  before scrolling shows empty sections — that's the reveal not yet fired, not missing
  content. To capture the full page, scroll through first or force
  `.opacity-0 { opacity:1 }`.
- Shared bits: `src/config.js` (CONTACT, WHATSAPP_URL, FAQS), `src/components/SectionLabel.jsx`
  (the section eyebrow), `src/assets/logo.jsx`.

## Design system

Tokens live in `src/index.css` (`@theme inline`):
- **Colors:** `--color-slate-green #0A2E25` (primary dark), `--color-slate-dark #071F1A`,
  `--color-volt #D4ED31` (bright accent, dark bgs only), `--color-volt-dim #6f8a0a`
  (accessible accent for light bgs — passes AA on white), `--color-muted #627062` /
  `--color-muted-dark #4A5A4A` (body text), `--color-surface #F8FAF8`.
- **Type:** headings use `--font-display` (Space Grotesk); body is Inter. Both loaded in
  `index.html`. Headings get `text-wrap: balance`, body `text-wrap: pretty`.
- **Section eyebrows:** use `<SectionLabel>` (rule + tracked label), not ad-hoc pill badges.
  Pass `dark` on slate-green sections.

## Conventions (hold the line — a /design-review pass enforced these)

- **Contrast:** all text must pass WCAG AA (4.5:1 body, 3:1 large). Volt is too light for
  text on white — use `volt-dim` for accents on light backgrounds.
- **Focus:** keyboard focus is a branded `:focus-visible` double ring (volt + slate-green)
  in `index.css`. Don't add `outline: none` without a replacement.
- **Touch targets:** interactive controls ≥44px (text links ≥24px).
- **No AI-slop:** no emoji as design elements (use lucide icons), no symmetric icon-square
  feature grids, no generic centered-pill section headers. Keep it editorial.
- Prefer CSS/Tailwind class changes; HeroUI components for buttons/cards/chips.

## Skill routing

When the user's request matches an available skill, invoke it via the Skill tool. When in doubt, invoke the skill.

Key routing rules:
- Product ideas/brainstorming → invoke /office-hours
- Strategy/scope → invoke /plan-ceo-review
- Architecture → invoke /plan-eng-review
- Design system/plan review → invoke /design-consultation or /plan-design-review
- Full review pipeline → invoke /autoplan
- Bugs/errors → invoke /investigate
- QA/testing site behavior → invoke /qa or /qa-only
- Code review/diff check → invoke /review
- Visual polish → invoke /design-review
- Ship/deploy/PR → invoke /ship or /land-and-deploy
- Save progress → invoke /context-save
- Resume context → invoke /context-restore
