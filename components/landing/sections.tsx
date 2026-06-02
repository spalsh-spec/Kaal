'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Layers, CalendarClock, Cpu, Rocket, Sparkles,
  Lightbulb, BrainCircuit, Plug, Hammer, TrendingUp,
  GitBranch, LifeBuoy, PackageCheck, Power, Radio, Clapperboard, Images,
  ArrowRight, Play, Check,
} from 'lucide-react'
import {
  BRAND, PYRAMID, EXPLAIN, FLOW, PLANS, SUPPORT_MODULES, VIDEOS,
} from '@/lib/landing-data'
import { openOrder, scrollToId } from '@/lib/order-bus'

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Layers, CalendarClock, Cpu, Rocket, Sparkles,
  Lightbulb, BrainCircuit, Plug, Hammer, TrendingUp,
  GitBranch, LifeBuoy, PackageCheck, Power, Radio, Clapperboard, Images,
}

// Mount-based reveal: content always ends visible (no dependency on a
// scroll observer firing) — robust against fast scrolls / timing.
const reveal = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.2, 0.7, 0.2, 1] as const },
}

const Wrap = ({ id, className = '', children }: { id?: string; className?: string; children: React.ReactNode }) => (
  <section id={id} className={`mx-auto max-w-screen-xl px-5 sm:px-6 ${className}`}>{children}</section>
)

// ── 3. Main CTA band ─────────────────────────────
export function PrimaryCta() {
  return (
    <Wrap className="py-16 sm:py-20 text-center">
      <motion.div {...reveal}>
        <h2 className="text-3xl sm:text-5xl font-display tracking-tight leading-tight text-balance">
          Helios.Ai — <span className="helios-text">we believe everyone can be a rising star.</span>
        </h2>
        <p className="mt-4 text-lg sm:text-xl font-medium text-muted-foreground max-w-2xl mx-auto text-balance">
          {BRAND.product} is an AI-powered operating layer for founders, students, creators and small
          businesses. Build, organise, automate and improve your work — every week, no tech skills needed.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button onClick={openOrder} className="btn-box-primary px-9 py-3.5 text-base">
            Order Now <ArrowRight className="w-4 h-4" />
          </button>
          <button onClick={() => scrollToId('product')} className="btn-box-outline px-9 py-3.5 text-base">
            Learn More
          </button>
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
          {BRAND.secondary.map((s) => (
            <span key={s} className="text-xs sm:text-sm px-3 py-1.5 rounded-[5px] bg-secondary text-secondary-foreground border border-border">
              {s}
            </span>
          ))}
        </div>
      </motion.div>
    </Wrap>
  )
}

// ── 4. Pyramid image layout ──────────────────────
export function Pyramid() {
  return (
    <Wrap className="py-6 sm:py-10">
      <motion.figure {...reveal} className="group relative overflow-hidden rounded-xl border border-border">
        {/* REPLACE: {PYRAMID.main.src} — large cinematic hero image */}
        <img src={PYRAMID.main.src} alt="" className="w-full cinematic object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
        <figcaption className="absolute bottom-0 inset-x-0 p-5 sm:p-7 bg-gradient-to-t from-black/70 to-transparent text-white text-lg sm:text-2xl font-display">
          {PYRAMID.main.caption}
        </figcaption>
      </motion.figure>

      {/* two half-width images → pyramid; stack on mobile */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {[PYRAMID.left, PYRAMID.right].map((p, idx) => (
          <motion.figure key={p.src} {...reveal} transition={{ ...reveal.transition, delay: idx * 0.08 }}
            className="group relative overflow-hidden rounded-xl border border-border">
            {/* REPLACE: {p.src} — half-width supporting image */}
            <img src={p.src} alt="" className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
            <figcaption className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-black/65 to-transparent text-white text-base sm:text-lg font-medium">
              {p.caption}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Wrap>
  )
}

// ── 5. Product explanation (non-technical) ───────
export function ProductExplainer() {
  return (
    <Wrap id="product" className="py-20 sm:py-28">
      <motion.div {...reveal} className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.22em] text-volta-600 font-medium">What is Leverage OS</p>
        <h2 className="mt-3 text-3xl sm:text-5xl font-display tracking-tight leading-tight text-balance">
          Your personal AI operating system.
        </h2>
        <p className="mt-4 text-xl text-muted-foreground text-balance">
          Think of it as your own Jarvis: all your AI tools in one place, getting smarter every week,
          quietly doing the hard parts so you can focus on the work that matters.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {EXPLAIN.map((e, idx) => {
          const Icon = ICONS[e.icon] ?? Sparkles
          return (
            <motion.div key={e.title} {...reveal} transition={{ ...reveal.transition, delay: idx * 0.06 }}
              className="rounded-xl border border-border bg-card p-6 hover:border-volta-500/50 transition-colors duration-200">
              <span className="grid place-items-center w-11 h-11 rounded-[8px] text-white mb-4"
                    style={{ backgroundImage: 'linear-gradient(135deg,#0038B8,#4d84f5)' }}>
                <Icon className="w-5 h-5" />
              </span>
              <h3 className="font-semibold text-xl">{e.title}</h3>
              <p className="mt-1.5 text-base text-muted-foreground">{e.body}</p>
            </motion.div>
          )
        })}
      </div>
    </Wrap>
  )
}

// ── AI-Powered Workflow / flow diagram ───────────
export function FlowDiagram() {
  return (
    <div id="workflow" className="sun-panel">
      <Wrap className="py-20 sm:py-24">
        <motion.div {...reveal} className="text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.22em] text-white/80 font-medium">AI-powered workflow</p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-display tracking-tight text-white text-balance">
            From idea to result — automatically.
          </h2>
        </motion.div>
        <div className="mt-12 flex flex-col md:flex-row items-stretch justify-center gap-3">
          {FLOW.map((f, idx) => {
            const Icon = ICONS[f.icon] ?? Sparkles
            return (
              <div key={f.label} className="flex flex-col md:flex-row items-center gap-3 flex-1">
                <motion.div {...reveal} transition={{ ...reveal.transition, delay: idx * 0.08 }}
                  className="w-full text-center rounded-xl bg-white/95 border border-white/40 p-5 shadow-xl">
                  <span className="inline-grid place-items-center w-11 h-11 rounded-[8px] text-volta-700 bg-volta-50 mb-3">
                    <Icon className="w-5 h-5" />
                  </span>
                  <div className="font-semibold">{f.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{f.sub}</div>
                </motion.div>
                {idx < FLOW.length - 1 && <ArrowRight className="w-5 h-5 text-white shrink-0 rotate-90 md:rotate-0" />}
              </div>
            )
          })}
        </div>
      </Wrap>
    </div>
  )
}

// ── 6. Plans — ONLY Normal & Pro ─────────────────
export function Plans() {
  const [selected, setSelected] = useState<'normal' | 'pro'>('pro')
  return (
    <Wrap id="plans" className="py-20 sm:py-28">
      <motion.div {...reveal} className="text-center max-w-2xl mx-auto">
        <p className="text-sm uppercase tracking-[0.22em] text-volta-600 font-medium">Simple plans</p>
        <h2 className="mt-3 text-3xl sm:text-5xl font-display tracking-tight text-balance">Choose your level.</h2>
        <p className="mt-4 text-lg text-muted-foreground">Two clear options. Switch or upgrade any time.</p>
      </motion.div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 max-w-4xl mx-auto">
        {PLANS.map((plan) => (
          <motion.div key={plan.id} {...reveal} role="button" tabIndex={0}
            data-selected={selected === plan.id}
            onClick={() => setSelected(plan.id)}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelected(plan.id)}
            className="select-card relative rounded-2xl border border-border bg-card p-7 cursor-pointer">
            {plan.highlight && (
              <span className="absolute -top-3 left-7 text-[11px] font-semibold px-2.5 py-1 rounded-[5px] text-[#1a1205]"
                    style={{ backgroundImage: 'linear-gradient(135deg,#fcbf3a,#f59e0b)' }}>
                Most popular
              </span>
            )}
            <div className="flex items-baseline justify-between">
              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <div className="text-right">
                <div className="text-2xl font-display">{plan.price}</div>
                <div className="text-xs text-muted-foreground">{plan.cadence}</div>
              </div>
            </div>
            <p className="mt-2 text-base text-muted-foreground">{plan.for}</p>
            <ul className="mt-5 space-y-2.5">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-base">
                  <Check className="w-4 h-4 text-volta-600 mt-0.5 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <button onClick={(e) => { e.stopPropagation(); openOrder() }}
              className={`mt-6 w-full py-3 text-base ${plan.highlight ? 'btn-box-gold' : 'btn-box-primary'}`}>
              Order Now
            </button>
          </motion.div>
        ))}
      </div>
    </Wrap>
  )
}

// ── 7. Support modules ───────────────────────────
export function SupportModules() {
  return (
    <div id="support" className="bg-secondary/40 border-y border-border">
      <Wrap className="py-20 sm:py-28">
        <motion.div {...reveal} className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.22em] text-volta-600 font-medium">Support &amp; setup</p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-display tracking-tight text-balance">
            We set it up. You just use it.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-balance">
            Everything you need to get going and stay ahead — bundled in, ready to go.
          </p>
        </motion.div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SUPPORT_MODULES.map((m, idx) => {
            const Icon = ICONS[m.icon] ?? Sparkles
            return (
              <motion.div key={m.id} {...reveal} transition={{ ...reveal.transition, delay: idx * 0.05 }}
                className="rounded-xl border border-border bg-card p-6 hover:-translate-y-0.5 hover:border-volta-500/50 transition-all duration-200">
                <span className="grid place-items-center w-11 h-11 rounded-[8px] text-white mb-4"
                      style={{ backgroundImage: 'linear-gradient(135deg,#f59e0b,#fb7185)' }}>
                  <Icon className="w-5 h-5" />
                </span>
                <h3 className="font-semibold text-xl">{m.title}</h3>
                <p className="mt-1.5 text-base text-muted-foreground">{m.body}</p>
              </motion.div>
            )
          })}
        </div>
      </Wrap>
    </div>
  )
}

// ── 8. Live company build ────────────────────────
export function LiveExamples() {
  return (
    <Wrap id="examples" className="py-20 sm:py-28">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <motion.div {...reveal}>
          <p className="text-sm uppercase tracking-[0.22em] text-volta-600 font-medium">Live company build</p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-display tracking-tight text-balance">
            Watch a real business get built.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-balance">
            See Leverage OS plan, build and launch a company in real time — the same way it works for you.
          </p>
          <ul className="mt-6 space-y-3">
            {['A real idea, built step by step', 'Tools connecting automatically', 'New progress every week'].map((t) => (
              <li key={t} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-volta-600 mt-1 shrink-0" /><span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <button onClick={openOrder} className="btn-box-primary px-7 py-3">Order Now</button>
            <button onClick={() => scrollToId('videos')} className="btn-box-outline px-7 py-3">Learn More</button>
          </div>
        </motion.div>
        <motion.div {...reveal} className="relative rounded-xl overflow-hidden border border-border">
          {/* REPLACE: live build video/poster → /placeholders/video-realbuild.svg */}
          <img src="/placeholders/video-realbuild.svg" alt="" className="w-full aspect-video object-cover" />
          <div className="absolute inset-0 grid place-items-center bg-black/10">
            <span className="grid place-items-center w-16 h-16 rounded-full bg-white/90 text-volta-700 shadow-2xl">
              <Play className="w-7 h-7 translate-x-0.5" />
            </span>
          </div>
        </motion.div>
      </div>
    </Wrap>
  )
}

// ── 9. Video & image showcase ────────────────────
export function VideoShowcase() {
  return (
    <div id="videos" className="bg-slate-950">
      <Wrap className="py-20 sm:py-24">
        <motion.div {...reveal} className="text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.22em] text-amber-300 font-medium">See it in action</p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-display tracking-tight text-white text-balance">
            Videos &amp; walkthroughs.
          </h2>
        </motion.div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {VIDEOS.map((v, idx) => (
            <motion.button key={v.id} {...reveal} transition={{ ...reveal.transition, delay: idx * 0.06 }}
              className="group relative rounded-xl overflow-hidden border border-white/10 text-left">
              {/* REPLACE: {v.src} — video poster / clip */}
              <img src={v.src} alt={v.title} className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="grid place-items-center w-14 h-14 rounded-full bg-white/90 text-volta-700 shadow-xl transition-transform duration-200 group-hover:scale-110">
                  <Play className="w-6 h-6 translate-x-0.5" />
                </span>
              </div>
              <span className="absolute bottom-3 left-4 text-white font-medium">{v.title}</span>
            </motion.button>
          ))}
        </div>
      </Wrap>
    </div>
  )
}

// ── 10. Final order CTA ──────────────────────────
export function FinalCta() {
  return (
    <div id="updates" className="helios-panel">
      <Wrap className="py-24 sm:py-32 text-center">
        <motion.div {...reveal}>
          <h2 className="text-3xl sm:text-6xl font-display tracking-tight text-white leading-[1.05] text-balance">
            Become a rising star.
          </h2>
          <p className="mt-5 text-lg text-white/80 max-w-xl mx-auto text-balance">
            Updated every week, so you are never left behind. Your AI stack, operating as one system.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <button onClick={openOrder} className="btn-box-gold px-10 py-4 text-base">
              Order Now <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={() => scrollToId('product')}
                    className="btn-box px-10 py-4 text-base text-white border border-white/40 hover:bg-white/10">
              Learn More
            </button>
          </div>
        </motion.div>
      </Wrap>
    </div>
  )
}
