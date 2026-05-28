# LeverageOS — Claude Code Context

You are working on **LeverageOS** — a Tesla-style dark marketing site for AI-preloaded laptops targeting professional verticals. The site is fully built and running. Your job is to extend, fix, or deploy it. Read this file completely before touching any code.

---

## Identity
- Product: Premium laptops pre-loaded with curated AI toolstacks per profession. Zero setup. Monthly updates.
- Stack tagline: "Tesla of AI Computers"
- 8 verticals: Marketing · Legal · Medical · Student · Creator · Executive · Real Estate · Finance
- 3 tiers: Standard ($1,799) · Pro Bundle ($2,799) · Enterprise (custom)
- Always address the user as **Parth**

---

## Commands
```bash
npm run dev         # Turbopack dev server → localhost:3000
npm run build       # Production build
npm run typecheck   # tsc --noEmit
npm run lint        # ESLint
```

---

## Stack
```
Next.js 15        App Router only — no /pages dir
TypeScript        Strict mode, @/ alias maps to root
Tailwind CSS 3.4  + CSS custom properties (HSL tokens)
Framer Motion 11  All entrance/interaction animations
shadcn/ui pattern CVA + Radix UI primitives
Lucide React      Icons
next-themes       Dark default, no light toggle
Sonner            Toast notifications
Stripe            Checkout (no custom auth in v1)
Supabase          PostgreSQL — waitlist + orders tables
Resend            Transactional email
Vercel            Deployment target
```

---

## File Map
```
app/
  globals.css              CSS vars, .glass, .gradient-text, @property --angle border
  layout.tsx               Root layout, ThemeProvider, Toaster, SEO metadata
  page.tsx                 Homepage — composes all section components
  about/page.tsx           Manifesto, team (4), values (4), stats, #press #careers anchors
  changelog/page.tsx       SERVER component — 4 versioned releases, typed badge system
  consulting/page.tsx      3 packages, 4 specialists, 4-step process, 10× guarantee
  devices/page.tsx         ★ CONFIGURATOR — hardware × profession × tier → live price
  for-your-field/page.tsx  8 profession deep-dives, before/after workflow times
  how-it-works/page.tsx    6-step timeline, Day 0–8 delivery strip, before/after grid
  learn/page.tsx           12 videos, 9 category filters, useState
  privacy/page.tsx         SERVER component — 11 policy sections, export const metadata
  support/page.tsx         4 channels, 8 FAQ links, priority upsell
  terms/page.tsx           SERVER component — 13 sections, #warranty anchor

components/
  ui/button.tsx            CVA variants: volta | white-outline | ghost
  ui/badge.tsx             CVA variants: volta | emerge | live
  nav.tsx                  Sticky glass nav, mobile drawer, Menu/X toggle
  hero.tsx                 Full-bleed hero, inline waitlist form
  device-mockup.tsx        Animated SVG laptop mockup
  trust-bar.tsx            CSS marquee logo strip (ECOSYSTEM_TOOLS)
  problem-solution.tsx     Before/after split layout
  how-it-works.tsx         4-step cards (homepage version)
  professions.tsx          8-tab switcher (PROFESSIONS data)
  ecosystem-showcase.tsx   12 tool cards (ECOSYSTEM_TOOLS data)
  pricing.tsx              3-tier cards (PRICING_TIERS data)
  testimonials.tsx         6 quote cards (TESTIMONIALS data)
  update-promise.tsx       Monthly stack update section
  cta-band.tsx             Bottom CTA
  footer.tsx               Full footer with nav groups + anchor links
  theme-provider.tsx       next-themes wrapper ('use client')
  waitlist-form.tsx        Email capture → POST /api/waitlist

lib/
  data.ts                  Single source of truth for ALL copy + structured data
  utils.ts                 cn() · formatPrice()

docs/
  DECISIONS.md             D-001–D-010 architecture decision records
  DEPLOYMENT.md            Full Vercel + Supabase + Stripe + Resend setup guide
  business-plan.md         Y1–Y3 financials, unit economics, $3M seed ask
  pitch-deck.md            12 slides + speaker notes + 7 appendix slides
  email-sequences.md       5 sequences: waitlist · onboarding · updates · re-engage · upsell
  sales-copy.md            Full copy for all 8 verticals + Meta/YouTube/LinkedIn ad formulas
  launch-plan.md           T-60 to launch timeline, $48K budget → $660K projected return
```

---

## Data Exports (`lib/data.ts`)
```typescript
PROFESSIONS          // 8 × { id, name, icon, headline, pain, promise, tools[], color }
ECOSYSTEM_TOOLS      // 12 × { name, description, category, icon }
TESTIMONIALS         // 6 × { name, role, company, quote, result, profession }
PRICING_TIERS        // 3 × { id, name, priceOnce, priceMonthly, includes[], popular }
HOW_IT_WORKS_STEPS   // 4 × { step, title, description, icon }
CONSULTING_PACKAGES  // 3 × { name, duration, price, description, includes[], cta }
```

---

## Design Tokens
```
volta-500  = #6366f1  (indigo primary)
emerge-400 = #34d399  (emerald accent)

CSS vars (all HSL, dark mode default):
--background --foreground --card --primary --muted --border --ring --radius

Utility classes:
.glass           bg-white/5 backdrop-blur-xl border border-white/10
.gradient-text   indigo→violet→emerald bg-clip-text text-transparent
.section-pad     py-24 md:py-32 lg:py-40
.gradient-border animated conic-gradient via @property --angle (6s infinite)
```

---

## Rules — read before every edit

### 1. `'use client'` placement
Every file using `useState`, `useEffect`, `useRef`, or any Framer Motion component MUST have `'use client'` as the **very first line**. Server components (`changelog`, `privacy`, `terms`) must NOT have it and use `export const metadata` instead.

### 2. `@import` in globals.css
`@import url(...)` MUST be the **first line** of `globals.css` — before `@tailwind base`. Turbopack expands `@tailwind base` to ~2,000 lines at compile time; any `@import` after it breaks the CSS spec and crashes the build.

### 3. Data mutations
Never hardcode copy or structured data inside component files. All changes go into `lib/data.ts`. Components read from there.

### 4. No API keys in source
Stripe, Supabase, and Resend credentials live in `.env.local` only. See `.env.example` for the full list. Never commit secrets.

### 5. Preserve the dark aesthetic
Dark-only (#050507 background). No light mode. No pastels. Volta indigo + emerge emerald on dark = the brand.

### 6. Small diffs
Edit existing files. Only create new files when building genuinely new routes or components. Don't rewrite working code.

### 7. Pricing in cents
`formatPrice(179900)` → `"$1,799"`. Hardware prices are deltas in cents (e.g. `+60000` for Pro M3 Max vs. standard). Configurator: `finalPrice = tier.priceOnce + hardware.price`.

---

## Framer Motion cheatsheet
```tsx
// Standard scroll entrance
<motion.div
  initial={{ opacity: 0, y: 32 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
/>

// Staggered children
<motion.div variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>

// Tab/content swap
<AnimatePresence mode="wait">
  <motion.div key={activeId}
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
  />
</AnimatePresence>

// Animated price counter
<motion.span key={price}
  initial={{ opacity: 0, y: -8 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 8 }}
/>
```

---

## Environment Variables
```env
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
RESEND_API_KEY=
RESEND_FROM_EMAIL=
```

---

## Build Status

| Area | Status |
|---|---|
| Marketing site (12 routes) | ✅ Built, compiled, running |
| All components (15 files) | ✅ Complete |
| Business documents (7 docs) | ✅ Complete |
| Dev server localhost:3000 | ✅ Live |
| `/api/waitlist` POST route | ❌ Not built |
| `/api/stripe/webhook` route | ❌ Not built |
| Supabase schema migration | ❌ Not run (SQL in DEPLOYMENT.md) |
| Stripe products in dashboard | ❌ Not created |
| Vercel deployment | ❌ Not connected |

---

## Next Tasks (priority order)
1. **`app/api/waitlist/route.ts`** — POST handler: validate email → insert into Supabase `waitlist` table → trigger Resend email W1 (welcome sequence)
2. **`app/api/stripe/webhook/route.ts`** — handle `checkout.session.completed` → insert into `orders` table → trigger Resend order confirmation email P1
3. **Run Supabase migration** — SQL schema in `docs/DEPLOYMENT.md` (waitlist + orders tables + RLS policies)
4. **Create Stripe products** — 5 products listed in `docs/DEPLOYMENT.md`, register webhook endpoint
5. **Deploy to Vercel** — connect repo, set env vars, add `leverageos.com` custom domain, add `vercel.json` cron for monthly stack update email
