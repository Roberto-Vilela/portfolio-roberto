# Portfolio — Roberto Vilela

A static portfolio website showcasing Roberto Vilela's work as an **AI Workflow Systems & Operations Architect**. No build step, no package manager, no tests.

---

## Project Overview

**Purpose:** Personal portfolio demonstrating expertise in AI-assisted operations, workflow design, and process optimization for service businesses.

**Architecture:** Pure static HTML/CSS portfolio using Tailwind CSS via CDN. No npm, no webpack, no build pipeline.

**Key Technologies:**
- **HTML5** - Semantic markup with Tailwind utility classes
- **Tailwind CSS (v3.4)** - Loaded via CDN, configured with custom color system
- **Google Fonts** - Outfit (headings), Inter (body), Material Symbols Outlined (icons)
- **Vanilla JavaScript** - Lightbox implementation on case study pages

**Design System:**
- **Theme:** Dark mode only (`class="dark"`)
- **Primary Color:** `#9bcbff` (cyan) with gradient accents
- **Background:** Deep navy `#0b1326`
- **Typography:** Outfit for headings, Inter for body text

---

## Building and Running

**No build commands required.** This is a pure static site.

### Preview
```bash
# Open the main portfolio file in any web browser
open /mnt/projetos/Portifolio/portfolio-roberto/index.html
```

### Development
```bash
# Direct browser access (no dev server configured)
xdg-open index.html  # Linux
open index.html      # macOS
start index.html     # Windows
```

---

## Files

| File | Purpose | Lines |
|------|---------|-------|
| `index.html` | Main portfolio homepage | 871 |
| `dexafit-wellness-hub.html` | Case study page | 866 |
| `global.css` | Custom styles, animations, glassmorphism | ~350 |
| `tailwind.config.js` | Tailwind design tokens (browser-side) | ~80 |

### Assets
- **`assets/profile/`** - Profile photo, dashboard mockups
- **`assets/cases/dexafit/`** - Case study screenshots

---

## Design System

### Colors (Custom Dark Theme)

| Token | Value | Usage |
|-------|-------|-------|
| `surface` | `#0b1326` | Background |
| `primary` | `#9bcbff` | Accent color |
| `on-surface` | `#dae2fd` | Text |
| `on-surface-variant` | `#bfc7d3` | Secondary text |
| `ai-flow-start` | `#4FACFE` | Gradient start |
| `ai-flow-end` | `#00F2FE` | Gradient end |
| `tertiary` | `#ffba38` | Gold accent |
| `error` | `#ffb4ab` | Warning/error |

### Typography Scale

| Class | Font Family | Size |
|-------|-------------|------|
| `font-display-lg` | Outfit | 64px / 72px |
| `font-headline-lg` | Outfit | 40px / 48px |
| `font-headline-md` | Outfit | 24px / 32px |
| `font-body-lg` | Inter | 18px / 28px |
| `font-body-md` | Inter | 16px / 24px |
| `font-label-md` | Inter | 14px / 20px |
| `font-code-sm` | Inter | 13px / 18px |

### Custom CSS Classes

**Glassmorphism:**
```css
.glass-card {
  background: rgba(23, 31, 51, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
```

**Animations:**
- `auto-glow-N` (N=1..7) - Ping-pong cyan glow effects
- `bm-glow-N` (N=1..7) - Builder map glow effects (gold for step 5)
- `animated-ray` - Animated gradient ray
- `animate-float` - Floating animation

---

## Tailwind Configuration

**Location:** `tailwind.config.js`

**Important Notes:**
- Uses **browser-side config**: `tailwind.config = {...}` (not Node.js)
- Loads Tailwind via CDN: `<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries">`
- **No purge/tree-shaking** — all utility classes are shipped to browser
- Custom spacing tokens: `margin-mobile`, `margin-desktop`, `unit` (4px)
- Custom max-width: `1280px`

---

## Custom CSS (`global.css`)

### Key Features
- **Hero gradients** and overlay effects
- **Dashboard mosaic** card styles for case study screenshots
- **Lightbox** implementation for image viewing
- **Toolproof panel** layout for workflows
- **Keyframe animations** for glows, rays, floating elements

### Animation Patterns
```css
/* Ping-pong glow effects (8s infinite) */
.auto-glow-1 { animation: ag1 8s infinite ease-in-out; }

/* Builder map glow effects */
.bm-glow-5 { animation: bm5 8s infinite ease-in-out; } /* Gold for step 5 */

/* Animated gradient ray */
.animated-ray {
  background: linear-gradient(90deg, transparent 0%, rgba(79, 172, 254, 0.8) 50%, transparent 100%);
  animation: ray-move 8s infinite ease-in-out;
}
```

---

## Portfolio Structure

### Main Page (`index.html`)

**Sections:**
1. **Hero** - Introduction, tags, metrics, CTAs
2. **AI Operations Builder Map** - 5-stage workflow, 7-step execution process, evidence grid
3. **What I Build** - AI-assisted operations, workflow design, client experience
4. **Who I Help** - Service businesses, immigration teams, health & wellness, small AI-teams
5. **Transformation** - Before/after comparison
6. **Testimonials** - Client quotes
7. **Process** - 7-step workflow
8. **About** - Personal bio
9. **Footer** - Copyright, links

### Case Study Page (`dexafit-wellness-hub.html`)

**Sections:**
1. **Project Hero** - Title, subtitle, action buttons
2. **Case Snapshot** - Problem, solution, business value
3. **Business Context** - From diagnostic data to customer action
4. **Problem Diagnosis** - User, business, operational problems
5. **Strategic Hypothesis** - 90-day retention loop
6. **Target Audience** - Athletes, executives, biohackers
7. **My Contribution** - Strategy, design, AI systems, experience
8. **Discovery** - Company review, research, AI governance

---

## Gotchas

### Email Placeholder
- **`roberto.vilela.ma@gmail.com`** appears 4 times across both files
- **Replace before publishing** with real email or remove

### Cache Busters
- `index.html` uses: `global.css?v=3`
- `dexafit-wellness-hub.html` uses: `global.css?v=2` (missing the cache buster)
- Inconsistent across files — fix for consistency

### Image Hosting
- All images use **Google-hosted URLs** (`lh3.googleusercontent.com`) or local paths under `assets/`
- Case study images are hosted on Google Photos/Drive

### Tailwind CDN Limitations
- No purge — all utility classes are shipped
- No tree-shaking — dead code still loads
- Container queries enabled via plugin

---

## AGENTS.md (Current)

```markdown
# Portfolio — Roberto Vilela

Static portfolio site. No build step, no package manager, no tests.

## Commands

No dev server, linter, formatter, or test commands exist. Open `index.html` in a browser to preview.

## Architecture

- **Tailwind** loaded via CDN: `<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries">`
- **Tailwind config** is a browser-side JS object in `tailwind.config.js` (not a Node config file; uses `tailwind.config = {...}`)
- **Custom CSS** in `global.css` — referenced as `global.css?v=3` on index.html but **without** the cache buster on `dexafit-wellness-hub.html`
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
- Tailwind is CDN-only — no purge/tree-shaking available; all utility classes are shipped to browser
```

---

## Recommendations for Improvement

### 1. Add a `.gitignore`
```
node_modules/
npm-debug.log
.env
```

### 2. Standardize Cache Busters
- Add `?v=3` to `dexafit-wellness-hub.html` for consistency

### 3. Replace Email Placeholder
- Update `roberto.vilela.ma@gmail.com` with real email or remove

### 4. Consider Static Site Generator
- For better SEO, performance, and deployment options (e.g., Hugo, Jekyll, or Next.js)

### 5. Add Responsive Meta Tags
- Add Open Graph tags for social sharing
- Add Twitter Card meta tags

---

## Deployment

**Direct upload to hosting:**
- Upload all files to GitHub Pages, Netlify, or Vercel
- No build step required — just push files to repository

**GitHub Pages:**
```bash
# In GitHub repository settings → Pages
# Source: main branch
# HTTPS: https://[username].github.com/[repo]/
```
