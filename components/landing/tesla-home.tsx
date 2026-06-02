'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Check } from 'lucide-react'
import { AiBurst } from '@/components/landing/ai-burst'
import { PROFESSIONS, ECOSYSTEM_TOOLS } from '@/lib/data'
import { BASE_PRICE_CENTS, PERFORMANCE_OPTIONS } from '@/lib/config'
import { formatPrice } from '@/lib/utils'
import { scrollToId } from '@/lib/order-bus'

const ORDER_HREF = '/devices#configurator'

const fade = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] as const },
}

// Two centred CTAs, Tesla style. dark = panel has a dark background.
function Ctas({
  dark, secondaryLabel, secondaryHref, onSecondary,
}: {
  dark: boolean; secondaryLabel: string; secondaryHref?: string; onSecondary?: () => void
}) {
  const primary = dark ? 'tbtn tbtn-primary' : 'tbtn tbtn-primary-dark'
  const ghost = dark ? 'tbtn tbtn-ghost' : 'tbtn tbtn-ghost-dark'
  return (
    <div className="panel-cta px-5">
      <Link href={ORDER_HREF} className={primary}>Order Now <ArrowRight className="w-4 h-4" /></Link>
      {secondaryHref ? (
        <Link href={secondaryHref} className={ghost}>{secondaryLabel}</Link>
      ) : (
        <button onClick={onSecondary} className={ghost}>{secondaryLabel}</button>
      )}
    </div>
  )
}

function Heading({ dark, eyebrow, title, subtitle }: { dark: boolean; eyebrow: string; title: string; subtitle: string }) {
  return (
    <motion.div {...fade} className="panel-top px-5 max-w-3xl mx-auto">
      <p className={`text-xs sm:text-sm uppercase tracking-[0.26em] font-semibold ${dark ? 'text-amber-300' : 'text-volta-600'}`}>{eyebrow}</p>
      <h2 className={`mt-2 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance ${dark ? 'text-white' : 'text-foreground'}`}>{title}</h2>
      <p className={`mt-3 text-base sm:text-lg font-medium text-balance ${dark ? 'text-white/85' : 'text-muted-foreground'}`}>{subtitle}</p>
    </motion.div>
  )
}

export function TeslaHome() {
  return (
    <>
      <Hero />
      <Profession />
      <Stack />
      <Trims />
      <OrderPanel />
    </>
  )
}

// ── Panel 1 — Hero ───────────────────────────────
function Hero() {
  return (
    <section id="hero" className="panel snap-panel helios-panel">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <Heading dark eyebrow="Leverage OS"
        title="The AI-native MacBook."
        subtitle={`Open the lid — you're already ahead. Pre-loaded for your profession. From ${formatPrice(BASE_PRICE_CENTS)}.`} />
      {/* Product visual fills the middle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-3xl h-1/2 mt-24"><AiBurst /></div>
      </div>
      <Ctas dark secondaryLabel="Learn More" onSecondary={() => scrollToId('profession')} />
      <button onClick={() => scrollToId('profession')} aria-label="Scroll"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors z-10">
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  )
}

// ── Panel 2 — Profession ─────────────────────────
function Profession() {
  return (
    <section id="profession" className="panel snap-panel sun-panel">
      <Heading dark eyebrow="Pre-loaded for you"
        title="Built for your profession."
        subtitle="Marketing, law, medicine, finance and more — the exact AI stack for your work, ready on day one." />
      <div className="relative z-10 mt-10 px-5 w-full max-w-3xl">
        <div className="flex flex-wrap justify-center gap-2.5">
          {PROFESSIONS.map((p) => (
            <span key={p.id} className="px-4 py-2 rounded-[6px] bg-white/15 border border-white/25 text-white text-sm font-medium backdrop-blur">
              {p.emoji} {p.label}
            </span>
          ))}
        </div>
      </div>
      <Ctas dark secondaryLabel="Explore Fields" secondaryHref="/for-your-field" />
    </section>
  )
}

// ── Panel 3 — AI stack ───────────────────────────
function Stack() {
  return (
    <section id="stack" className="panel snap-panel bg-slate-950">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <Heading dark eyebrow="Zero setup"
        title="Your entire AI stack. As one."
        subtitle="The best AI tools — pre-installed, authenticated, and updated every week." />
      <div className="relative z-10 mt-10 px-5 w-full max-w-4xl">
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {ECOSYSTEM_TOOLS.map((t) => (
            <div key={t.name} className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-4 text-center backdrop-blur">
              <span className="text-2xl text-amber-300">{t.logo}</span>
              <span className="text-xs sm:text-sm font-semibold text-white leading-tight">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
      <Ctas dark secondaryLabel="How It Works" secondaryHref="/how-it-works" />
    </section>
  )
}

// ── Panel 4 — Trims (from config) ────────────────
function Trims() {
  return (
    <section id="trims" className="panel snap-panel bg-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <Heading dark={false} eyebrow="Choose your power"
        title="Normal. Pro. Max."
        subtitle={`Three trims of one machine. Every LeverageOS MacBook starts at ${formatPrice(BASE_PRICE_CENTS)}.`} />
      <div className="relative z-10 mt-10 px-5 w-full max-w-5xl">
        <div className="grid gap-4 md:grid-cols-3">
          {PERFORMANCE_OPTIONS.map((opt) => (
            <div key={opt.id} className="rounded-2xl border border-border bg-card p-6 text-left shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold">{opt.name}</h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-[5px] bg-secondary text-secondary-foreground">{opt.badge}</span>
              </div>
              <p className="mt-2 text-base text-muted-foreground">{opt.blurb}</p>
              <ul className="mt-4 space-y-1.5">
                {opt.specs.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm font-medium">
                    <Check className="w-4 h-4 text-volta-600 shrink-0" /> {s}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-lg font-semibold text-volta-700">
                {opt.deltaCents === 0 ? 'Included' : `+${formatPrice(opt.deltaCents)}`}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Ctas dark={false} secondaryLabel="Compare & Configure" secondaryHref="/devices#configurator" />
    </section>
  )
}

// ── Panel 5 — Order ──────────────────────────────
function OrderPanel() {
  return (
    <section id="order" className="panel snap-panel helios-panel">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="m-auto flex flex-col items-center text-center px-5 z-10">
        <motion.div {...fade} className="max-w-2xl">
          <p className="text-xs sm:text-sm uppercase tracking-[0.26em] font-semibold text-amber-300">Order now</p>
          <h2 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white text-balance">
            One purchase. A lifetime of leverage.
          </h2>
          <p className="mt-4 text-lg sm:text-xl font-medium text-white/85 text-balance">
            From {formatPrice(BASE_PRICE_CENTS)}. Hardware included — no monthly fee for the device.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link href={ORDER_HREF} className="tbtn tbtn-primary">Order Now <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/consulting" className="tbtn tbtn-ghost">Talk to Sales</Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
