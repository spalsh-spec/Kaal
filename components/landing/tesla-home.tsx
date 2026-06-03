'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Check, Star, Users, RotateCcw, Headphones, Quote, Target, PackageCheck, Rocket, TrendingUp, Scale, GraduationCap, Clapperboard, Stethoscope, Home, LineChart } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { AiLaptop } from '@/components/landing/ai-laptop'
import { PROFESSIONS, TESTIMONIALS } from '@/lib/data'
import { BRAND_STACK, BrandLogo } from '@/components/landing/brand-logos'
import { BASE_PRICE_CENTS, PERFORMANCE_OPTIONS } from '@/lib/config'
import { formatPrice } from '@/lib/utils'
import { scrollToId } from '@/lib/order-bus'

const ORDER_HREF = '/devices#configurator'

// Apple-paced: slower, deliberate ease-out reveal.
const fade = {
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.0, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] as const },
}

// Two centred CTAs, Tesla style. dark = panel has a dark background.
function Ctas({
  dark, secondaryLabel, secondaryHref, onSecondary, note,
}: {
  dark: boolean; secondaryLabel: string; secondaryHref?: string; onSecondary?: () => void; note?: string
}) {
  const ghost = dark ? 'tbtn tbtn-ghost' : 'tbtn tbtn-ghost-dark'
  return (
    <div className="panel-cta px-5">
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Link href={ORDER_HREF} className="tbtn tbtn-gold">Order Now <ArrowRight className="w-4 h-4" /></Link>
          {secondaryHref ? (
            <Link href={secondaryHref} className={ghost}>{secondaryLabel}</Link>
          ) : (
            <button onClick={onSecondary} className={ghost}>{secondaryLabel}</button>
          )}
        </div>
        {note && <p className={`text-sm font-medium ${dark ? 'text-white/70' : 'text-muted-foreground'}`}>{note}</p>}
      </div>
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
      <ThreeSteps />
      <Profession />
      <Stack />
      <Trims />
      <Proof />
      <OrderPanel />
    </>
  )
}

// ── Panel 1 — Hero ───────────────────────────────
function Hero() {
  return (
    <section id="hero" className="panel snap-panel helios-panel">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <Heading dark eyebrow="HeliosOS"
        title="The AI-native MacBook."
        subtitle={`Open the lid — you're already ahead. Pre-loaded for your profession. From ${formatPrice(BASE_PRICE_CENTS)}.`} />
      {/* Realistic MacBook with named launchpad + popping, labelled app tiles */}
      <div className="relative z-10 w-full flex-1 flex items-center justify-center px-5 pb-2 pointer-events-none">
        <div className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl"><AiLaptop /></div>
      </div>
      <Ctas dark secondaryLabel="Learn More" onSecondary={() => scrollToId('how')}
        note="✓ 30-day money-back returns · ✓ Ships in 5 days" />
      <button onClick={() => scrollToId('profession')} aria-label="Scroll"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors z-10">
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  )
}

// ── Panel 2 — Profession ─────────────────────────
const PRO_ICONS: Record<string, LucideIcon> = {
  marketing: TrendingUp,
  lawyer: Scale,
  student: GraduationCap,
  creator: Clapperboard,
  executive: Rocket,
  doctor: Stethoscope,
  realestate: Home,
  finance: LineChart,
}

function Profession() {
  return (
    <section id="profession" className="panel snap-panel sun-panel">
      <Heading dark eyebrow="Pre-loaded for you"
        title="Built for your profession."
        subtitle="Marketing, law, medicine, finance and more — the exact AI stack for your work, ready on day one." />
      <div className="relative z-10 flex-1 flex items-center w-full">
        <div className="px-5 w-full max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {PROFESSIONS.map((p) => {
              const Icon = PRO_ICONS[p.id] ?? Rocket
              return (
                <span key={p.id} className="inline-flex items-center gap-2 pl-3.5 pr-4 py-2.5 rounded-full bg-white/15 border border-white/30 text-white text-sm font-semibold backdrop-blur shadow-sm transition-colors duration-300 hover:bg-white/25">
                  <Icon className="w-4 h-4 shrink-0" strokeWidth={2.25} /> {p.label}
                </span>
              )
            })}
          </div>
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
          {BRAND_STACK.map((b) => (
            <div key={b.name} className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-4 text-center backdrop-blur transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5">
              <span className="grid place-items-center w-11 h-11 rounded-[12px] bg-white shadow-md">
                <BrandLogo icon={b.icon} size={24} />
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white leading-tight">{b.name}</span>
              <span className="hidden sm:block text-[10px] text-white/55 leading-tight">{b.desc}</span>
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
        subtitle={`Three trims of one machine. Every HeliosOS MacBook starts at ${formatPrice(BASE_PRICE_CENTS)}.`} />
      <div className="relative z-10 mt-10 px-5 w-full max-w-5xl">
        <div className="grid gap-4 md:grid-cols-3">
          {PERFORMANCE_OPTIONS.map((opt) => {
            const featured = opt.badge === 'Recommended'
            return (
            <div key={opt.id} className={`rounded-2xl p-6 text-left transition-transform duration-300 ${featured ? 'border-2 border-volta-500 bg-card ring-4 ring-volta-500/15 shadow-xl md:scale-[1.04] relative z-10' : 'border border-border bg-card shadow-sm'}`}>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold">{opt.name}</h3>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-[5px] ${featured ? 'bg-volta-600 text-white' : 'bg-secondary text-secondary-foreground'}`}>{opt.badge}</span>
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
            )
          })}
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
            <Link href={ORDER_HREF} className="tbtn tbtn-gold">Order Now <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/consulting" className="tbtn tbtn-ghost">Talk to Sales</Link>
          </div>
          <p className="mt-5 text-sm font-medium text-white/75">✓ 30-day money-back returns · ✓ Ships in 5 days · ✓ Day-1 onboarding call</p>
        </motion.div>
      </div>
    </section>
  )
}

// ── Social proof — built for risk-averse, non-technical buyers ──
function Proof() {
  const picks = TESTIMONIALS.filter((t) =>
    ['James Thornton', 'Dr. Priya Sharma', 'Rodrigo Vasquez'].includes(t.name))
  const trust = [
    { icon: Star, label: '4.9 average rating' },
    { icon: Users, label: '2,400+ professionals' },
    { icon: RotateCcw, label: '30-day returns' },
    { icon: Headphones, label: 'Day-1 onboarding call' },
  ]
  return (
    <section id="proof" className="panel snap-panel bg-secondary/40 border-y border-border">
      <Heading dark={false} eyebrow="Real people, real results"
        title={'Made for people who aren’t “tech people.”'}
        subtitle="A lawyer, a doctor, an estate agent — none of them coders. All of them ahead now." />

      <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center px-5 gap-8 py-6">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {trust.map((t) => (
            <span key={t.label} className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/80">
              <t.icon className="w-4 h-4 text-volta-600" /> {t.label}
            </span>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-3 max-w-5xl w-full">
          {picks.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border bg-card p-6 text-left flex flex-col shadow-sm">
              <Quote className="w-6 h-6 text-volta-500/40" />
              <blockquote className="mt-2 text-base font-medium text-foreground/90 flex-1 leading-relaxed">{`“${t.text}”`}</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span className={`grid place-items-center w-10 h-10 rounded-full text-white text-sm font-semibold bg-gradient-to-br ${t.gradient}`}>{t.avatar}</span>
                <span>
                  <span className="block text-sm font-semibold">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
              <span className="mt-3 self-start text-xs font-semibold px-2.5 py-1 rounded-[5px] bg-volta-50 text-volta-700">{t.result}</span>
            </figure>
          ))}
        </div>
      </div>

      <Ctas dark={false} secondaryLabel="How It Works" secondaryHref="/how-it-works" />
    </section>
  )
}

// ── How it works in 3 steps — the whole model in 10 seconds ──
function ThreeSteps() {
  const steps = [
    { n: '1', icon: Target, title: 'Tell us your job', body: 'Marketing, law, medicine, finance — we load the exact AI tools for your work.' },
    { n: '2', icon: PackageCheck, title: 'We set it all up', body: 'Installed, authenticated and tested. It arrives ready — nothing for you to configure.' },
    { n: '3', icon: Rocket, title: 'Open the lid', body: 'You’re already ahead on day one — a real win in your first hour.' },
  ]
  return (
    <section id="how" className="panel snap-panel bg-background">
      <Heading dark={false} eyebrow="How it works"
        title="Set up in 3 simple steps." subtitle="No tech skills. No setup. You just open it and go." />
      <div className="relative z-10 w-full flex-1 flex items-center justify-center px-5 py-6">
        <div className="grid gap-5 md:grid-cols-3 max-w-5xl w-full">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card p-7 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="grid place-items-center w-11 h-11 rounded-full text-white text-lg font-bold"
                      style={{ backgroundImage: 'linear-gradient(135deg,#0038B8,#4d84f5)' }}>{s.n}</span>
                <s.icon className="w-6 h-6 text-volta-600" />
              </div>
              <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-base text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
      <Ctas dark={false} secondaryLabel="See full process" secondaryHref="/how-it-works" />
    </section>
  )
}
