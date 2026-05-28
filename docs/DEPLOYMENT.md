# LeverageOS — Deployment Guide

## Stack Overview

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Runtime | Node.js 20 |
| Styling | Tailwind CSS 3.4 + custom tokens |
| Components | shadcn/ui pattern (CVA + Radix) |
| Animations | Framer Motion 11 |
| Icons | Lucide React |
| Fonts | Geist Sans (local) + Instrument Serif (Google) |
| Theming | next-themes (dark default) |
| Notifications | Sonner |
| Payments | Stripe |
| Database | Supabase (PostgreSQL) |
| Email | Resend |
| Deployment | Vercel |

---

## Prerequisites

- Node.js 20+
- npm 10+ (or pnpm / yarn)
- Git
- A Vercel account
- A Supabase project (for waitlist / orders)
- A Stripe account (for payments)
- A Resend account (for transactional email)

---

## Local Development

### 1. Clone and install

```bash
git clone https://github.com/[your-org]/leverageos.git
cd leverageos
npm install
```

### 2. Environment variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Fill in all required values:

```env
# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://[project].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...

# Resend
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=team@leverageos.com
```

### 3. Run dev server

```bash
npm run dev
```

Visit http://localhost:3000

---

## Supabase Setup

### Create tables

```sql
-- Waitlist
create table waitlist (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  created_at timestamptz default now(),
  profession text,
  source text
);

-- Orders (stub for Stripe integration)
create table orders (
  id uuid primary key default gen_random_uuid(),
  stripe_session_id text unique,
  email text not null,
  hardware_id text,
  profession_id text,
  tier_id text,
  amount_cents integer,
  status text default 'pending',
  created_at timestamptz default now()
);
```

### RLS policies

```sql
-- Waitlist: allow insert from anon (public)
alter table waitlist enable row level security;
create policy "allow_public_insert" on waitlist for insert with check (true);

-- Orders: only service role
alter table orders enable row level security;
```

---

## Stripe Setup

### Products

Create products in Stripe Dashboard:

| Product | Price | Metadata |
|---|---|---|
| LeverageOS Standard | $1,799 | tier: standard |
| LeverageOS Pro Bundle | $2,799 | tier: pro |
| Quick Win Consulting | $299 | type: consulting |
| Monthly Accelerator | $599/month | type: consulting_subscription |
| Full Transformation | $2,999 | type: consulting |

### Webhook

Register webhook endpoint: `https://leverageos.com/api/stripe/webhook`

Events to subscribe:
- `checkout.session.completed`
- `payment_intent.succeeded`
- `payment_intent.payment_failed`

---

## Resend Setup

### Domain

Add and verify `leverageos.com` as a sending domain in Resend.

### Email templates

Create the following templates (or use `app/api/email/` route handlers):

- `welcome-waitlist` — triggered on waitlist signup
- `order-confirmation` — triggered on `checkout.session.completed`
- `shipping-confirmation` — triggered manually or via webhook
- `stack-update` — triggered monthly via cron

---

## Vercel Deployment

### 1. Connect repository

In Vercel dashboard:
1. New Project → Import Git Repository
2. Select `leverageos` repo
3. Framework: Next.js (auto-detected)
4. Build command: `npm run build` (default)
5. Output directory: `.next` (default)

### 2. Environment variables

Add all env vars from `.env.example` with production values:

```
NEXT_PUBLIC_SITE_URL=https://leverageos.com
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
[etc.]
```

### 3. Domain

- Add `leverageos.com` as custom domain
- Add `www.leverageos.com` → redirect to apex

### 4. Deploy

Push to `main` → triggers automatic deployment.

---

## Cron Jobs (Vercel Cron)

Add to `vercel.json`:

```json
{
  "crons": [
    {
      "path": "/api/cron/stack-update-email",
      "schedule": "0 9 1 * *"
    }
  ]
}
```

This triggers the monthly Stack Update notification email on the 1st of each month at 9am UTC.

---

## Build Commands

| Command | What it does |
|---|---|
| `npm run dev` | Start development server (port 3000) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint check |
| `npm run typecheck` | TypeScript check (no emit) |

---

## Monitoring

- **Vercel Analytics:** Built-in, enabled by default
- **Vercel Logs:** Real-time function logs in dashboard
- **Sentry:** Add `@sentry/nextjs` for error tracking (optional, recommended for production)

---

## Common Issues

**Fonts not loading:** Check `app/layout.tsx` Instrument Serif link tag — requires Google Fonts network access.

**Framer Motion hydration error:** All motion components must be inside `'use client'` components.

**Tailwind classes not applying:** Run `npm run build` — dev server sometimes misses JIT classes. Check `tailwind.config.ts` content paths.

**Stripe webhook not firing locally:** Use Stripe CLI: `stripe listen --forward-to localhost:3000/api/stripe/webhook`
