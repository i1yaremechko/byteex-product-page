# Byteex – Product Page

A responsive eCommerce product landing page built from the provided Figma design (mobile and desktop frames).

**Live demo:** https://byteex-product-page-theta.vercel.app/

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · CSS Modules · `next/image` · `next/font`

---

## Features

- Nine page sections: announcement bar, hero with press logos, product benefits with a thumbnail carousel, founder story, "How it works" cards, customer photo strip with a reviews carousel, FAQ accordion, green-impact banner and a final collection block.
- Pixel-matched mobile (428px) and desktop (1465px) layouts, taken from the Figma frames.
- Mobile carousels with scroll-snap, swipe, arrows and pagination dots; the announcement bar rotates messages on mobile and shows all of them on desktop.
- Accessible by default: semantic landmarks and headings, labelled controls, native `<details>` accordion, visible focus states, `prefers-reduced-motion` respected.
- Performance: optimized and responsive images via `next/image`, locally hosted variable fonts, mostly server components (client code only where there is interaction).

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
npm start        # serve the production build
```

## Project structure

```
src/
  app/              layout, page, global design tokens (globals.css), local fonts
  components/       one folder per section: Component.tsx + Component.module.css
    ui/             small reusable pieces (CtaButton, StarRating, CarouselArrow)
  content/          typed page content, one module per section
  assets/           optimized images, icons and logos
```

Each section is a presentational component that receives its data as props. The page (`src/app/page.tsx`) only composes the sections and hands them content from `src/content`. This keeps markup separate from data, so the content source can be swapped without touching the components.

## Design decisions

**Design tokens.** Colors, shadows and radii live as CSS custom properties in `src/app/globals.css`.

**Responsive strategy.**

- Below 1024px the layout is fluid and capped by the widths of the 428px mobile frame.
- From 1024px the layout follows the 1465px desktop canvas. Every desktop size is written as `calc(N * var(--px))`, where `--px` is one design pixel (`min(100cqw, 1465px) / 1465`). The page therefore shrinks proportionally with the window and stops growing, staying centred, above 1465px. Small texts have a minimum size so they stay readable.
- Sections with full-bleed backgrounds stay full width and position their content with `--edge`, the free space on each side of the canvas.

**Collages.** The photo collages (hero, founder, FAQ, final block) are built from individual photos with absolutely positioned frames in percentages, not flattened images, so every photo can be replaced independently.

**Accessibility.** Decorative images have empty `alt`, content images have descriptive `alt`, carousels expose labelled buttons and `aria-current`, and the FAQ uses native `<details name="faq">`.

## Notes

- **Fonts.** The design uses Sofia Pro and Suisse Int'l, which are commercial. Nunito Sans and Inter are used as stand-ins (`src/app/fonts`); replace the two files to use the real fonts.
- **Content.** Text and images follow the design, including its placeholder copy (lorem ipsum, "Jane, S.").
- **Content source.** Content currently lives in typed modules in `src/content`. See the section below for the headless CMS.

## Headless CMS

<!-- Update this section once the CMS is connected. -->

The page content is described by the types in `src/content` and is designed to be fetched from a headless CMS. After the integration this section will document the schema, the environment variables (`.env.example`) and how to run the studio.

## Deployment

The project deploys to [Vercel](https://vercel.com) without extra configuration:

1. Import the GitHub repository in Vercel.
2. Keep the detected Next.js preset.
3. Add the environment variables (once the CMS is connected) and deploy.