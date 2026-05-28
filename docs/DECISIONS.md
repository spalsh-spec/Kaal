# LeverageOS — Key Architecture & Product Decisions

---

## D-001: Next.js 15 App Router over Pages Router

**Decision:** Use App Router exclusively. No `/pages` directory.

**Why:** RSC reduces client bundle size significantly for marketing pages. Streaming SSR improves perceived performance on hero sections. Nested layouts enable the persistent Nav without re-renders.

**Trade-off:** App Router has stricter `'use client'` discipline. All interactive components (anything with useState, Framer Motion) must be explicitly client-side.

---

## D-002: Single `lib/data.ts` for all copy and data

**Decision:** All product data (professions, pricing, testimonials, etc.) lives in one file with TypeScript const assertions.

**Why:** Marketing copy changes frequently. Centralising it avoids hunting through 15 component files. Type safety ensures data shape changes propagate to components at compile time.

**Trade-off:** Large single file. Acceptable for this scale; would split by domain at >500 lines.

---

## D-003: CSS variables (HSL) for theming, not Tailwind only

**Decision:** All semantic colours defined as CSS custom properties in `globals.css`, then consumed by Tailwind via `hsl(var(--volta-500))`.

**Why:** Enables dark/light mode switching without class duplication. Consistent with shadcn/ui pattern.

**Trade-off:** Two levels of indirection (CSS var → Tailwind config → class). Worth it for theme flexibility.

---

## D-004: No CMS in v1

**Decision:** All content is hardcoded in `lib/data.ts` and page files. No Sanity, Contentful, etc.

**Why:** Adds deployment complexity and cost at early stage. Content doesn't change often enough to justify it yet. Engineers can edit `lib/data.ts` faster than a non-technical editor could use a CMS.

**Revisit when:** Marketing team needs to update copy independently of dev deploys.

---

## D-005: Framer Motion for all animations (no CSS-only)

**Decision:** Use Framer Motion for all interaction and entrance animations. CSS only for decorative effects (glow-pulse, marquee, float).

**Why:** Framer Motion's `viewport={{ once: true }}` handles scroll-triggered animations cleanly. `AnimatePresence` for tab switching and route transitions is significantly simpler than CSS alone.

**Trade-off:** Bundle size (~30KB gzipped). Acceptable for a marketing site where animation quality is a core differentiator.

---

## D-006: CVA (Class Variance Authority) for component variants

**Decision:** All component variants (Button, Badge) defined with CVA.

**Why:** Type-safe variants. Eliminates conditional class string construction. Consistent with shadcn/ui pattern for future component additions.

**Trade-off:** Learning curve for contributors unfamiliar with CVA.

---

## D-007: Stripe for payments, Supabase for data — no custom auth in v1

**Decision:** No custom authentication flow. Payment via Stripe Checkout. Order data stored in Supabase via webhook.

**Why:** Custom auth is a significant surface area for security bugs. At this stage, orders are fulfilled manually — no customer portal needed. Stripe handles all PCI compliance.

**Revisit when:** Customer portal, order tracking, or Stack Update delivery requires authenticated sessions.

---

## D-008: Resend over Mailchimp/SendGrid for transactional email

**Decision:** Resend for all transactional email.

**Why:** React Email templates work natively with Next.js. Superior DX vs. HTML templates in legacy ESPs. Domain reputation is clean.

**Trade-off:** Less marketing tooling than Mailchimp. For newsletters and sequences, may integrate a dedicated ESP later.

---

## D-009: Vercel deployment over self-hosted

**Decision:** Deploy on Vercel.

**Why:** Zero-config Next.js deployment. Edge network for asset serving. Automatic preview deployments for every PR. Built-in analytics.

**Cost at scale:** Monitor Vercel costs above 1M requests/month; consider self-hosting at Series A.

---

## D-010: One dark theme, no light mode toggle in v1

**Decision:** Dark mode only. `defaultTheme="dark"` in ThemeProvider.

**Why:** Brand identity is dark (Tesla-style). Dark mode is preferred by the professional audience. Light mode adds design QA burden without clear user demand.

**Revisit when:** User research shows preference or accessibility requirement for light mode.
