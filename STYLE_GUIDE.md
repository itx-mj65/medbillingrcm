# Medbilling RCM — Design System Style Guide
## Brand Book v1.0 · August 2026 · Single Source of Truth

> **Rule:** Every page — present and future — MUST use only the tokens and utility
> classes defined here. Never hardcode font-family, font-size, line-height,
> letter-spacing, color, or spacing values in page CSS.

---

## 1. Colors (brand book p.9 + p.20)

All defined in `globals.css :root`. Use the CSS custom property, never the hex directly.

| Token | Hex | Use |
|---|---|---|
| `--color-primary` | `#1a214f` | Authority Navy — headings, large fields |
| `--color-secondary` | `#528532` | Recovery Green — progress, support, data |
| `--color-action` | `#3f6e24` | Dark green — button labels & links on white bg |
| `--color-accent` | `#d49b28` | Signal Gold — accent, focus, highlight |
| `--color-paper` | `#fffdfa` | Page background |
| `--color-ivory` | `#f7f5ef` | Alt background, card bg |
| `--color-ink` | `#20253d` | Body text |
| `--color-muted` | `#6a6d77` | Muted / secondary text |
| `--color-line` | `#dcd6c8` | Dividers, borders |
| `--color-navy-deep` | `#111735` | Hero / deep background |

**Dark surface text tokens** (use these on navy/green/ink backgrounds):

| Token | Value | Use |
|---|---|---|
| `--text-on-dark` | `#ffffff` | Primary text on dark bg |
| `--text-on-dark-sub` | `rgba(255,255,255,.8)` | Secondary text on dark |
| `--text-on-dark-muted` | `rgba(255,255,255,.55)` | Muted text on dark |
| `--text-on-dark-faint` | `rgba(255,255,255,.35)` | Very faint on dark |
| `--text-on-green` | `rgba(255,255,255,.88)` | Text on green section |

**Brand book rule:** NEVER use gold (`--color-accent`) as text on white.  
Use `--color-action` (#3f6e24) for all links and button labels on white backgrounds.

**Recommended color balance (brand book p.9):**  
65% neutrals | 25% navy | 8% green | 2% gold

---

## 2. Typography (brand book p.11–12)

### Fonts
- **Headings:** `--font-heading` = Poppins (weights: 500, 600, 700)
- **Body:** `--font-body` = Montserrat (weights: 400, 500, 600, 700)
- Load via `next/font/google` in `layout.js`. No external CSS imports.

### Type Scale (exact brand book p.12)

| Token | Desktop | Mobile | Line-height token | Use |
|---|---|---|---|---|
| `--fs-display` | 64px (4rem) | 42px (2.625rem) | `--lh-display` 1.06 | Hero display |
| `--fs-h1` | 52px (3.25rem) | 36px (2.25rem) | `--lh-heading` 1.08 | Page H1 |
| `--fs-h2` | 40px (2.5rem) | 30px (1.875rem) | `--lh-subhead` 1.12 | Section H2 |
| `--fs-h3` | 24px (1.5rem) | 22px (1.375rem) | `--lh-h3` 1.3 | Card / sub-section H3 |
| `--fs-lead` | 18px (1.125rem) | — | `--lh-body` 1.6 | Intro paragraphs |
| `--fs-body` | 16px (1rem) | — | `--lh-body` 1.6 | Standard body text |
| `--fs-sm` | 14px (0.875rem) | — | — | Labels, captions |
| `--fs-xs` | 12px (0.75rem) | — | — | Eyebrows, badges |
| `--fs-2xs` | 11px (0.6875rem) | — | — | Fine print |

**Brand book body rule:** 16–18px, 1.6 line-height, max-width ~68 characters, sentence case.

### Letter-spacing tokens
| Token | Value | Use |
|---|---|---|
| `--ls-heading` | `-.04em` | All H1, H2 — tight |
| `--ls-eyebrow` | `.14em` | ALL CAPS labels |
| `--ls-badge` | `.1em` | Small caps badges |

### Font weights (Poppins/Montserrat)
- H1, H2: `font-weight: 700`
- H3: `font-weight: 600`
- Eyebrows: `font-weight: 800`
- Body: `font-weight: 400`
- Supporting text: `font-weight: 500`
- Controls, labels, nav: `font-weight: 600–700`

---

## 3. Layout (brand book p.15)

| Token | Value | Use |
|---|---|---|
| `--max` | `1180px` | Content max-width |
| `--sec-desktop` | `clamp(7rem, 8vw, 9rem)` | Section vertical padding 112–144px |
| `--sec-tablet` | `clamp(5.5rem, 6vw, 6.5rem)` | Section padding 88–104px |
| `--sec-mobile` | `clamp(4rem, 5vw, 5rem)` | Section padding 64–80px |
| `--sec-gap` | `max(24px, calc((100vw - 1180px) / 2))` | Horizontal centering gap |
| `--space-section` | `clamp(7rem, 8vw, 9rem)` | Alias for --sec-desktop |

**Grid:** 12 columns | max-width 1180px | 24px gutters

### Border radius
| Token | Value | Use |
|---|---|---|
| `--radius-card` | `16px` | All cards |
| `--radius-media` | `22px` | Media / images (18–26px range) |
| `--radius-btn` | `8px` | Buttons |
| `--radius-pill` | `999px` | Tags, pills, fully-round |

**Rule:** Keep one radius family per component.

---

## 4. Motion (brand book p.18)

| Type | Duration | Use |
|---|---|---|
| Micro | 150–220ms | Hover states, small transitions |
| Component | 250–350ms | Card reveals, accordion |
| Workflow | 450–900ms | Diagram sequences, multi-step |

**Easing:** `cubic-bezier(.2,.8,.2,1)` always  
**Reveal:** opacity 0→1 + translateY(14px)→0  
**Required:** Always add `prefers-reduced-motion` override

---

## 5. Global Utility Classes (ready to use on any page)

### Section wrappers
```jsx
<section className="gs-sec gs-navy">   {/* navy bg, auto text colors */}
<section className="gs-sec gs-green">  {/* green bg */}
<section className="gs-sec gs-ivory">  {/* ivory bg */}
<section className="gs-sec gs-white">  {/* white bg */}
<section className="gs-sec gs-ink">    {/* ink/dark bg */}
```

### Typography
```jsx
<p className="gs-eyebrow">Label</p>             {/* gold-line + caps */}
<h1 className="gs-h1">Page Title</h1>           {/* 52px, Poppins 700 */}
<h2 className="gs-h2">Section Heading</h2>      {/* 40px, Poppins 700 */}
<h3 className="gs-h3">Card Title</h3>           {/* 24px, Poppins 600 */}
<p className="gs-lead">Lead paragraph.</p>      {/* 18px, 1.6 lh */}
<p className="gs-p">Body text.</p>             {/* 16px, 1.6 lh */}
<span className="gs-meta">Label text</span>    {/* 14px */}
<span className="gs-fine">Fine print</span>    {/* 11px */}
```

On dark sections (`.gs-navy`, `.gs-green`, `.gs-ink`), text colors adjust automatically — no extra classes needed.

### Buttons
```jsx
<a className="gs-btn">Primary CTA</a>           {/* green bg, white text */}
<a className="gs-btn gs-btn--gold">Gold CTA</a> {/* gold bg, ink text — hero use */}
<a className="gs-btn gs-btn--ghost">Ghost</a>   {/* transparent, on dark bg */}
```

### Proof strip
```jsx
<div className="gs-proof-strip">
  <div className="gs-proof-grid wrap">
    <div className="gs-proof-item">97% clean claim rate</div>
    <div className="gs-proof-item">14-day onboarding</div>
    <div className="gs-proof-item">No setup fees</div>
    <div className="gs-proof-item">All 50 states</div>
  </div>
</div>
```

### Outcome cards
```jsx
<div className="gs-oc">
  <span className="gs-oc-badge">Primary Care</span>
  <div className="gs-oc-metric">18.2% → 61%</div>
  <div className="gs-oc-lbl">Collection rate on identical charges</div>
</div>
```

### Reveal animation
```jsx
<section className="gs-reveal">  {/* fades in as user scrolls */}
```
JS must call `element.classList.add('gs-in')` to trigger.

---

## 6. New Page Checklist

When building a new service/specialty/content page:

**CSS:**
- [ ] Create `app/your-route/page.css` with ALL rules scoped under `.your-page { ... }`
- [ ] Import only in `app/your-route/layout.js` (never in a global layout)
- [ ] Never define `font-family`, `font-size`, `line-height`, or color hex values — use tokens
- [ ] Use `--fs-h1`, `--fs-h2`, `--fs-h3`, `--fs-body`, `--fs-xs` etc. for sizes
- [ ] Use `--lh-heading`, `--lh-subhead`, `--lh-body` for line-heights
- [ ] Use `--ls-heading` for heading letter-spacing
- [ ] Use `--color-primary`, `--color-action`, `--text-on-dark` etc. for colors
- [ ] Use `--sec-desktop`, `--sec-gap` for section padding
- [ ] Use `--radius-card` (16px), `--radius-pill` (999px), `--radius-btn` (8px)

**HTML:**
- [ ] Wrap ALL page content in `<div className="your-page">` for CSS scope isolation
- [ ] Use `gs-*` utility classes where applicable before writing custom CSS
- [ ] H1 uses `var(--fs-h1)`, weight 700, Poppins
- [ ] H2 uses `var(--fs-h2)`, weight 700, Poppins
- [ ] H3 uses `var(--fs-h3)`, weight 600, Poppins
- [ ] Body uses `var(--fs-body)`, weight 400, Montserrat, lh 1.6
- [ ] Eyebrows: `var(--fs-xs)`, weight 800, uppercase, `--ls-eyebrow`
- [ ] Gold NEVER as text on white background

**Section backgrounds (use in sequence):**
```
Hero: --color-navy-deep (#111735)
Proof strip: --color-secondary (green)
Section 1: white
Section 2: --color-ivory
Section 3: --color-navy-deep
Section 4: white
Section 5: --color-ivory
CTA/Assessment: --color-secondary (green)
```

**Layout.js metadata template:**
```js
export const metadata = {
  title: 'Page Title | Service | Medbilling RCM',
  description: '154-char description.',
  alternates: { canonical: 'https://medbillingrcm.com/your-route/' },
};
```

---

## 7. What NOT to do (common mistakes)

```css
/* ❌ WRONG — hardcoded values */
.my-heading { font-size: 2.5rem; line-height: 1.1; color: #1a214f; }
.my-body    { font-size: 1rem; line-height: 1.7; }
.my-gold    { color: #d49b28; }  /* gold as text on white — brand book violation */

/* ✅ RIGHT — tokens */
.my-heading { font-size: var(--fs-h2); line-height: var(--lh-subhead); color: var(--color-primary); }
.my-body    { font-size: var(--fs-body); line-height: var(--lh-body); }
/* For text on white: use var(--color-action) — never gold */
```

```css
/* ❌ WRONG — section padding hardcoded */
.my-section { padding: 112px 24px; }

/* ✅ RIGHT — responsive tokens */
.my-section { padding: var(--sec-desktop) var(--sec-gap); }

/* ✅ With tablet/mobile breakpoints */
@media (max-width: 900px) { .my-section { padding: var(--sec-tablet) var(--sec-gap); } }
@media (max-width: 560px) { .my-section { padding: var(--sec-mobile) var(--sec-gap); } }
```

```css
/* ❌ WRONG — unscoped CSS in page file (will bleed to other pages via Next.js global bundle) */
.hero { background: navy; }

/* ✅ RIGHT — scoped to page wrapper */
.my-page .hero { background: var(--color-navy-deep); }
```

---

*Last updated: August 2026. Source: Brand Book v1.0, Identity Standards.*
