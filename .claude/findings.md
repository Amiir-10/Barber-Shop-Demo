# Findings

## Architecture
- Single-page marketing site (Next.js 14 App Router, static export)
- All content driven from `data/content.json` -- no CMS
- Components split into `components/layout/` (Navbar, Footer) and `components/sections/` (Hero, About, Services, Gallery, Booking, Contact)
- `app/page.tsx` composes all sections, `app/layout.tsx` handles fonts/metadata/JSON-LD

## Key Files
- `app/layout.tsx` -- root layout, Playfair Display + Inter fonts, metadata, JSON-LD (HairSalon schema)
- `app/page.tsx` -- imports and renders all section components
- `tailwind.config.ts` -- brand color tokens (dark, charcoal, gold, gold-light, cream, white), font family vars
- `data/content.json` -- all editable content (shop info, hero, about, services, gallery, booking)
- `next.config.mjs` -- image remotePatterns for unsplash + cloudinary (.mjs because Next.js 14 doesn't support .ts config)
- `next-sitemap.config.js` -- sitemap generation targeting eldoctorbarber.vercel.app

## Decisions Made
- pnpm over npm (user choice, PRD preference)
- React 18 (not 19) for Next.js 14 peer dependency compatibility
- Tailwind v3 (not v4) for Next.js 14 compatibility
- ESLint 8 (not 10) for eslint-config-next compatibility
- `next.config.mjs` instead of `.ts` (Next.js 14 doesn't support TS config natively)
- content.json expanded with hero, about, booking sections beyond PRD minimum

## Patterns to Follow
- All component content from content.json -- no hardcoded strings
- Tailwind classes only, no inline styles (except Framer Motion style prop)
- TypeScript strict mode, no `any` types
- All images via `next/image` with explicit width/height/alt
- WhatsApp deep links from content.json phone number, never hardcoded
- Framer Motion gated by `useReducedMotion()`

## Blockers / Open Questions
- User needs to push Phase 0 to GitHub before proceeding
- Design preferences (templates, animations, visual style) not yet decided -- must ask before Phase 1
- UI/UX Pro Max skill is installed -- will use for design guidance in Phase 1+
