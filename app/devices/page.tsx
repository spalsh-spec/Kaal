'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DeviceMockup } from '@/components/device-mockup'
import { WaitlistForm } from '@/components/waitlist-form'
import { BASE_PRICE_CENTS, PERFORMANCE_OPTIONS, COLOR_OPTIONS, SETUP_OPTIONS } from '@/lib/config'
import { formatPrice, cn } from '@/lib/utils'
import { ArrowRight, Check } from 'lucide-react'

export default function DevicesPage() {
  const [perfId, setPerfId] = useState('pro')
  const [colorId, setColorId] = useState('space-black')
  const [setupId, setSetupId] = useState('pro')

  const perf = PERFORMANCE_OPTIONS.find((p) => p.id === perfId)!
  const color = COLOR_OPTIONS.find((c) => c.id === colorId)!
  const setup = SETUP_OPTIONS.find((s) => s.id === setupId)!

  const total = BASE_PRICE_CENTS + perf.deltaCents + color.deltaCents + setup.deltaCents

  return (
    <div className="min-h-screen bg-background pb-24">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative min-h-[88vh] flex flex-col items-center justify-center text-center overflow-hidden px-6 pt-28 pb-16">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-[680px] h-[680px] max-w-[92vw] rounded-full blur-3xl opacity-60 transition-all duration-700"
            style={{ background: `radial-gradient(circle, ${color.glow} 0%, transparent 70%)` }}
          />
        </div>

        <div className="relative z-10 w-full max-w-[540px] mx-auto">
          <DeviceMockup />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 mt-10 space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-display font-normal tracking-tight">
            Outwork the <span className="italic gradient-text">world.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            The AI-native laptop, pre-loaded for your field. Configured, authenticated,
            ready on day one — you just open the lid.
          </p>
          <p className="text-sm text-muted-foreground/70">From {formatPrice(BASE_PRICE_CENTS)}</p>
          <div className="flex items-center justify-center gap-3 pt-2">
            <Button asChild variant="volta" size="lg">
              <Link href="#configurator">Configure <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="white-outline" size="lg">
              <Link href="#order">Order Now</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* ── CONFIGURATOR ── */}
      <section id="configurator" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <Badge variant="volta">Make it yours</Badge>
          <h2 className="mt-4 text-3xl md:text-5xl font-display font-normal tracking-tight">
            One laptop. Built around you.
          </h2>
          <p className="mt-3 text-muted-foreground">Zero setup. Total leverage.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Visual */}
          <div className="lg:sticky lg:top-28">
            <div className="relative rounded-3xl border border-border/40 bg-card/30 p-8 overflow-hidden">
              <div
                className="absolute inset-0 blur-3xl opacity-50 transition-all duration-700"
                style={{ background: `radial-gradient(ellipse at center, ${color.glow} 0%, transparent 70%)` }}
              />
              <div className="relative z-10">
                <DeviceMockup />
              </div>
            </div>
            <div className="mt-5 flex items-center justify-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full border border-white/20" style={{ background: color.swatch }} />
                {color.name}
              </span>
              <span aria-hidden>·</span>
              <span>{perf.name}</span>
              <span aria-hidden>·</span>
              <span>{setup.name}</span>
            </div>
          </div>

          {/* Options */}
          <div className="space-y-10">
            <fieldset>
              <legend className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">Performance</legend>
              <div className="space-y-3">
                {PERFORMANCE_OPTIONS.map((opt) => (
                  <OptionCard
                    key={opt.id}
                    selected={perfId === opt.id}
                    onClick={() => setPerfId(opt.id)}
                    title={opt.name}
                    badge={opt.badge}
                    blurb={opt.blurb}
                    specs={opt.specs}
                    delta={opt.deltaCents}
                  />
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">Colour</legend>
              <div className="flex flex-wrap gap-3">
                {COLOR_OPTIONS.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setColorId(c.id)}
                    className={cn(
                      'flex flex-col items-center gap-2 rounded-2xl border p-3 transition-all w-[92px]',
                      colorId === c.id ? 'border-volta-500 bg-volta-500/5' : 'border-border/50 hover:border-border'
                    )}
                  >
                    <span className="w-9 h-9 rounded-full border border-white/15" style={{ background: c.swatch }} />
                    <span className="text-[11px] text-muted-foreground">{c.name}</span>
                    <span className="text-[10px] text-muted-foreground/60">{c.deltaCents > 0 ? `+${formatPrice(c.deltaCents)}` : 'Included'}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">Setup</legend>
              <div className="space-y-3">
                {SETUP_OPTIONS.map((opt) => (
                  <OptionCard
                    key={opt.id}
                    selected={setupId === opt.id}
                    onClick={() => setSetupId(opt.id)}
                    title={opt.name}
                    badge={opt.badge}
                    blurb={opt.blurb}
                    delta={opt.deltaCents}
                  />
                ))}
                <Link href="/consulting" className="block text-center text-xs text-muted-foreground hover:text-foreground underline-offset-4 hover:underline pt-1">
                  Buying 5+? Talk to sales about Team / Enterprise →
                </Link>
              </div>
            </fieldset>
          </div>
        </div>
      </section>

      {/* ── ORDER / RESERVE ── */}
      <section id="order" className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-normal tracking-tight">
          Open the box. <span className="italic gradient-text">Outwork everyone.</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Reserve your {perf.name} in {color.name} — {formatPrice(total)}. Ships in 5 days, fully
          configured. 30-day returns, no questions.
        </p>
        <div className="mt-6 max-w-md mx-auto">
          <WaitlistForm cta="Buy Now" placeholder="Email to reserve yours" />
        </div>
        <div className="mt-5 flex items-center justify-center gap-5 text-[11px] text-muted-foreground/60">
          <span>🔒 Secure</span>
          <span>↩ 30-day returns</span>
          <span>⚡ Ships in 5 days</span>
        </div>
      </section>

      <Footer />

      {/* ── STICKY BUY-NOW BAR ── */}
      <div className="fixed bottom-0 inset-x-0 z-40 border-t border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground truncate">{perf.name} · {color.name} · {setup.name}</p>
            <AnimatePresence mode="wait">
              <motion.p
                key={total}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                className="text-lg font-bold leading-tight"
              >
                {formatPrice(total)}
              </motion.p>
            </AnimatePresence>
          </div>
          <Button asChild variant="volta" size="lg" className="shrink-0">
            <Link href="#order">Buy Now <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

function OptionCard({
  selected,
  onClick,
  title,
  badge,
  blurb,
  specs,
  delta,
}: {
  selected: boolean
  onClick: () => void
  title: string
  badge?: string
  blurb: string
  specs?: readonly string[]
  delta: number
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full text-left rounded-2xl border p-5 transition-all',
        selected ? 'border-volta-500 bg-volta-500/5 shadow-lg shadow-volta-500/10' : 'border-border/50 bg-card/30 hover:border-border'
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-sm">{title}</h3>
            {badge && <Badge variant="secondary" className="text-[10px]">{badge}</Badge>}
          </div>
          <p className="text-xs text-muted-foreground">{blurb}</p>
          {specs && (
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
              {specs.map((s) => (
                <span key={s} className="text-[11px] text-muted-foreground/80">{s}</span>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col items-end gap-2 shrink-0">
          <span className={cn('w-5 h-5 rounded-full border-2 flex items-center justify-center', selected ? 'border-volta-500 bg-volta-500' : 'border-border')}>
            {selected && <Check className="h-3 w-3 text-white" />}
          </span>
          <span className="text-xs font-semibold text-muted-foreground">
            {delta === 0 ? 'Included' : `+${formatPrice(delta)}`}
          </span>
        </div>
      </div>
    </button>
  )
}
