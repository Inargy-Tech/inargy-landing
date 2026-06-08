# Handoff — Inargy landing

_Last updated: 2026-05-30_

## Current state

- **Branch:** `design-review-20260530` (13 commits ahead of `main`, tree clean, lint green).
- **Not merged. No PR opened yet.** ← the one open action item.
- App runs on **http://localhost:5174** (`npm run dev`). See CLAUDE.md for the 5173-vs-5174
  and broken-vite gotchas.

## What happened this session

Ran `/design-review` on the live page. Found 11 design issues and fixed all of them, each
as an atomic `style(design): FINDING-NNN` commit, verified with before/after screenshots.

| # | Fix | Files |
|---|-----|-------|
| F001 | Volt accent headings on white were 1.75:1 → darkened `--color-volt-dim` to `#6f8a0a` (AA) | index.css |
| F002 | Mobile menu let hero bleed through → full-height overlay | Navbar.jsx |
| F003 | Features section was the AI-slop icon-square grid → editorial redesign | Features.jsx |
| F004 | Pricing price labels under AA → `text-muted-dark` | Pricing.jsx |
| F005 | Orange tier pill 4.17:1 → darkened Imole accent to `#8A4A1C` | Pricing.jsx |
| F006 | Generic Inter display type → Space Grotesk for headings | index.html, index.css |
| F007 | Inconsistent focus → branded `:focus-visible` double ring | index.css |
| F008 | Sub-44px touch targets → bumped CTAs/links | Navbar.jsx, Contact.jsx |
| F009 | Typography polish: `text-wrap` balance/pretty, `tabular-nums` | index.css, Pricing/Stats |
| F010 | Six identical pill eyebrows → shared `SectionLabel` signature | SectionLabel.jsx + 6 sections |
| F011 | ⚡ emoji in Powers badge → lucide `Zap` icon | Pricing.jsx |

Plus a `chore` commit repairing the broken vite install (`^8.0.3` → `^8.0.14`).

**Result:** Design score B+ → **A**; AI Slop B → **A**. No console errors, all text passes AA.

Full audit report + screenshots:
`~/.gstack/projects/Inargy-Tech-inargy-landing/designs/design-audit-20260530/`

## Next steps / open items

1. **Open a PR** for `design-review-20260530` → `main` (or run `/ship`).
2. Optional, intentionally **not** changed (judgment calls, not bugs):
   - Contact list still uses icon-in-square treatment (conventional, not slop).
   - Section order is the standard landing rhythm — fine for this page.

## Gotchas for the next session

- Wrong-app trap: confirm `document.title` starts with "Inargy" — `localhost:5173` is a
  different project (`../wsie`).
- If `npm run dev` throws `ERR_MODULE_NOT_FOUND` on vite: `rm -rf node_modules/vite && npm install vite`.
- Lazy + scroll-reveal: step-scroll before querying/screenshotting lower sections.
