
# Portfolio — Roberto Vilela

Static portfolio site. No build step, no package manager, no tests.

## Commands

No dev server, linter, formatter, or test commands exist. Open any `.html` in a browser to preview.  
For local preview: `busybox httpd -f -p 9090 &`

## Architecture

- **Tailwind** loaded via CDN: `<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries">`
- **Tailwind config** is a browser-side JS object in `tailwind.config.js` (not a Node config file; uses `tailwind.config = {...}`)
- **Custom CSS** in `global.css` — referenced as `global.css?v=2` on index.html but **without** the cache buster on `dexafit-wellness-hub.html`
- **Color system**: custom dark-theme tokens in `tailwind.config.js` (`surface`, `primary`, `on-surface-variant`, etc.) — do NOT use standard Tailwind color names
- **Animations**: CSS keyframe "ping-pong" glow effects (classes `auto-glow-1` through `-7`, `bm-glow-1` through `-7`)
- **Lightbox**: vanilla `<dialog>` element + JS, only on `dexafit-wellness-hub.html`
- **Portfolio categories (4)**: Active Systems & Client Work (green), Case Studies & Technical Validations (yellow), Research & Frameworks (purple), Internal Systems (cyan)
- **Card convention**: Cards without a dedicated page show "Case study coming soon" as an outline button in the section color. Linked cards show a filled action button in the section color (e.g., purple button in Research, cyan button in Internal Systems). Skill/stack tags inside cards use matching section badge colors.
- **Audio demo**: inline JS `new Audio(src).play()` — no external player

## Files

| File | Purpose |
|------|---------|
| `index.html` | Main portfolio (1017 lines) — 4-category Portfolio section, Builder Map evidence grid, Summary Footer Bar |
| `voice-rmv.html` | Voice-RMV case study (945 lines) — sections 01-10, dictation feature v0.1.3 |
| `memory-bank-rmv.html` | Memory Bank case study (947 lines) — governance, project memory |
| `dexafit-wellness-hub.html` | DexaFit case study (866 lines) |
| `global.css` | Custom styles, animations, glassmorphism (600 lines) |
| `tailwind.config.js` | Tailwind design tokens (98 lines) |
| `assets/profile/` | Profile photo + mockups |
| `assets/cases/dexafit/` | DexaFit case study screenshots |
| `assets/voice/` | Voice-RMV screenshots + demo MP3s (EN, PT-BR) |
| `assets/voice/workflow/` | Workflow diagram assets |

## Gotchas

- **Email placeholder** `roberto.vilela.ma@gmail.com` appears on forms — replace before publishing
- All images use Google-hosted URLs (`lh3.googleusercontent.com`) or local paths under `assets/`
- `dexafit-wellness-hub.html` links `global.css` without `?v=2` cache buster (unlike index.html)
- Tailwind is CDN-only — no purge/tree-shaking available; all utility classes are shipped to the browser
- Audio demo files live in `assets/voice/` with full Portuguese/English filenames — JS uses `encodeURIComponent()` to load them
- Server (`busybox httpd`) is not persistent across shell sessions — restart if needed
