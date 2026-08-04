# Medbilling RCM — Next.js

**Stack:** Next.js 16 (App Router) · React 19 · Tailwind CSS v4

## Brand Tokens (globals.css)

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#1a214f` | Authority Navy — headings, hero bg |
| `--color-secondary` | `#528532` | Recovery Green — data, progress |
| `--color-action` | `#3f6e24` | Button Green — CTAs |
| `--color-accent` | `#d49b28` | Signal Gold — highlights |
| `--color-paper` | `#fffdfa` | Page background |
| `--color-ivory` | `#f7f5ef` | Alternate section bg |
| `--color-ink` | `#20253d` | Body text |
| `--color-muted` | `#6a6d77` | Secondary text |

## Fonts

- **Headings:** Poppins 500 / 600 / 700 → `var(--font-poppins)`
- **Body:** Montserrat 400 / 500 / 600 / 700 → `var(--font-montserrat)`

## Dev

```bash
npm run dev    # http://localhost:3000
npm run build  # production build
npm run lint
```
