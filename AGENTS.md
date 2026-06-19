
# Portfolio — Roberto Vilela

Static portfolio site. No build step, no package manager, no tests.

## Commands

No dev server, linter, formatter, or test commands exist. Open `index.html` in a browser to preview.

## Architecture

- **Tailwind** loaded via CDN: `<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries">`
- **Tailwind config** is a browser-side JS object in `tailwind.config.js` (not a Node config file; uses `tailwind.config = {...}`)
- **Custom CSS** in `global.css` — referenced as `global.css?v=2` on index.html but **without** the cache buster on `dexafit-wellness-hub.html`
- **Color system**: custom dark-theme tokens in `tailwind.config.js` (`surface`, `primary`, `on-surface-variant`, etc.) — do NOT use standard Tailwind color names
- **Animations**: CSS keyframe "ping-pong" glow effects (classes `auto-glow-1` through `-7`, `bm-glow-1` through `-7`)
- **Lightbox**: vanilla `<dialog>` element + JS, only on `dexafit-wellness-hub.html`

## Files

| File | Purpose |
|------|---------|
| `index.html` | Main portfolio (728 lines) |
| `dexafit-wellness-hub.html` | Case study page (863 lines) |
| `global.css` | Custom styles, animations, glassmorphism |
| `tailwind.config.js` | Tailwind design tokens |
| `assets/profile/` | Profile photo + mockups |
| `assets/cases/dexafit/` | Case study screenshots |

## Gotchas

- **Email placeholder** `roberto.vilela.ma@gmail.com` appears 4 times across both files — replace before publishing
- All images use Google-hosted URLs (`lh3.googleusercontent.com`) or local paths under `assets/`
- `dexafit-wellness-hub.html` links `global.css` without `?v=2` cache buster (unlike index.html)
- Tailwind is CDN-only — no purge/tree-shaking available; all utility classes are shipped to the browser
