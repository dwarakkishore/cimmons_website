# Farno — Call Center & BPO Landing Page

A pixel-faithful recreation of the Farno *home-five* WordPress theme, rebuilt from
scratch as a modern **Next.js 14 + TypeScript + Tailwind CSS** app. Fully static,
self-contained (all assets local), and responsive.

Reference: https://themes.hibootstrap.com/farno/home-five/

## Stack & design tokens

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Manrope (body) + Sora (display headings) via `next/font`
- **Accent:** `#FF6162` (coral-red) · dark sections `#0B0B0B` · warm bg `#FEF1E9`
- All 41 images downloaded locally to `public/assets/img/`

## Run

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm run start   # production
```

## Structure

```
app/
  layout.tsx        # fonts + metadata
  page.tsx          # section composition
  globals.css       # Tailwind + component classes (buttons, eyebrows)
components/
  Header.tsx        # sticky nav + mobile menu
  Hero.tsx          # headline, CTA, stats
  Partners.tsx      # client logo strip
  About.tsx  Services.tsx  Experience.tsx
  Industries.tsx  CaseStudies.tsx  Technology.tsx
  Pricing.tsx  Faq.tsx  Blog.tsx  Cta.tsx  Footer.tsx
public/assets/img/  # all images
```

## Notes

Sections, copy, layout, colors and typography mirror the original home-five page.
The heading font on the live theme is a licensed "Clash Display"; the theme's own
home-five CSS uses **Sora** (`--hfFont`) for its display type, so Sora (Google
Fonts) is used here for an accurate, freely-licensable match.
