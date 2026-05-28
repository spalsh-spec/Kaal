'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { PROFESSIONS, PRICING_TIERS } from '@/lib/data'
import { formatPrice } from '@/lib/utils'
import { CheckCircle2, ArrowRight, Cpu, HardDrive, Wifi, Battery, Star, ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'

const HARDWARE_OPTIONS = [
  {
    id: 'air-m3',
    name: 'MacBook Air M3',
    chip: 'Apple M3',
    ram: '16GB',
    storage: '512GB SSD',
    display: '15.3" Liquid Retina',
    battery: '18 hours',
    weight: '1.51 kg',
    colors: ['Midnight', 'Starlight', 'Space Gray', 'Silver'],
    price: 0,
    badge: 'Included',
    popular: false,
    description: 'Whisper-quiet, all-day battery, perfect for the professional always on the move.',
  },
  {
    id: 'pro-m3',
    name: 'MacBook Pro M3 Pro',
    chip: 'Apple M3 Pro',
    ram: '18GB',
    storage: '512GB SSD',
    display: '14" Liquid Retina XDR',
    battery: '18 hours',
    weight: '1.60 kg',
    colors: ['Space Black', 'Silver'],
    price: 60000,
    badge: 'Recommended',
    popular: true,
    description: 'Pro-level performance for demanding workflows. Runs multiple AI agents simultaneously without breaking a sweat.',
  },
  {
    id: 'pro-m3-max',
    name: 'MacBook Pro M3 Max',
    chip: 'Apple M3 Max',
    ram: '36GB',
    storage: '1TB SSD',
    display: '16" Liquid Retina XDR',
    battery: '22 hours',
    weight: '2.14 kg',
    colors: ['Space Black', 'Silver'],
    price: 160000,
    badge: 'Power User',
    popular: false,
    description: 'Unlimited headroom. Run local AI models, video generation, and every tool simultaneously.',
  },
  {
    id: 'windows-pro',
    name: 'Windows Pro Laptop',
    chip: 'Intel Core Ultra 7',
    ram: '32GB',
    storage: '1TB SSD',
    display: '15.6" OLED 3K',
    battery: '12 hours',
    weight: '1.72 kg',
    colors: ['Graphite', 'Silver'],
    price: -20000,
    badge: 'Windows Option',
    popular: false,
    description: 'For Windows power users. All the same AI tools, configured for the Microsoft ecosystem.',
  },
]

const FAQS = [
  {
    q: 'Is this just a regular laptop with apps installed?',
    a: 'Not quite. Yes, the hardware is a premium Apple or Windows device. But LeverageOS is our proprietary configuration: custom workflows, authenticated accounts, AI agents that talk to each other, and a custom onboarding sequence specific to your profession. You\'re not buying apps — you\'re buying a system.',
  },
  {
    q: 'What if a tool I want isn\'t on my stack?',
    a: 'Every device ships with 8–15 pre-configured tools for your field. You can add any tool you want on top — there\'s no restriction. Your stack update subscription also adds new tools monthly as the AI landscape evolves.',
  },
  {
    q: 'Do I need any technical knowledge?',
    a: 'Zero. That\'s the entire point. If you can use Netflix, you can use LeverageOS. The onboarding call walks you through each tool in plain English. Most customers are doing meaningful AI work within their first hour.',
  },
  {
    q: 'What\'s the return policy?',
    a: '30 days, no questions asked. If you open the device and it doesn\'t change how you work, ship it back and we\'ll refund everything including shipping. We\'ve had fewer than 3% returns.',
  },
  {
    q: 'Can I use my existing software?',
    a: 'Absolutely. LeverageOS sits alongside your existing apps. Your email, browser, Microsoft Office, Slack — it all works normally. We add AI superpowers; we don\'t replace what\'s already working.',
  },
  {
    q: 'What are Stack Updates?',
    a: 'AI moves fast. Every month, our team tests new tools, workflows, and agents. The ones that pass our bar get pushed to your device — either automatically or with one click. You\'re always running the best available stack.',
  },
]

export default function DevicesPage() {
  const [selectedHardware, setSelectedHardware] = useState('pro-m3')
  const [selectedProfession, setSelectedProfession] = useState('marketing')
  const [selectedTier, setSelectedTier] = useState('pro')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const hardware = HARDWARE_OPTIONS.find(h => h.id === selectedHardware)!
  const profession = PROFESSIONS.find(p => p.id === selectedProfession)!
  const tier = PRICING_TIERS.find(t => t.id === selectedTier)!
  const basePrice = tier.priceOnce ?? 0
  const finalPrice = basePrice + (hardware?.price ?? 0)

  return (
    <div className="min-h-screen bg-background">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-16 text-center max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
          <Badge variant="volta">Configure Yours</Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-normal tracking-tight">
            Build your perfect
            <br />
            <span className="font-display italic gradient-text">AI device.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your hardware, tell us your field, pick your tier.
            We configure everything. You just open the box.
          </p>
        </motion.div>
      </section>

      {/* ── Configurator ── */}
      <section className="max-w-7xl mx-auto px-6 pb-24" id="configurator">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left: Config steps */}
          <div className="lg:col-span-2 space-y-8">

            {/* Step 1: Hardware */}
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">
                Step 1 — Choose Your Hardware
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {HARDWARE_OPTIONS.map(hw => (
                  <button
                    key={hw.id}
                    onClick={() => setSelectedHardware(hw.id)}
                    className={cn(
                      'text-left rounded-2xl border p-5 transition-all',
                      selectedHardware === hw.id
                        ? 'border-volta-500 bg-volta-500/5 shadow-lg shadow-volta-500/10'
                        : 'border-border/50 bg-card/30 hover:border-border'
                    )}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <Badge variant={hw.popular ? 'volta' : 'secondary'} className="text-[10px] mb-2">{hw.badge}</Badge>
                        <h3 className="font-semibold text-sm">{hw.name}</h3>
                      </div>
                      <div className={cn(
                        'w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1',
                        selectedHardware === hw.id ? 'border-volta-500 bg-volta-500' : 'border-border'
                      )}>
                        {selectedHardware === hw.id && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">{hw.description}</p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {[
                        { icon: Cpu, label: hw.chip },
                        { icon: HardDrive, label: hw.ram + ' RAM' },
                        { icon: HardDrive, label: hw.storage },
                        { icon: Battery, label: hw.battery },
                      ].map(({ icon: Icon, label }) => (
                        <div key={label} className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Icon className="h-3 w-3" />
                          <span>{label}</span>
                        </div>
                      ))}
                    </div>
                    {hw.price !== 0 && (
                      <p className={cn('text-xs font-semibold mt-3', hw.price > 0 ? 'text-muted-foreground' : 'text-emerge-400')}>
                        {hw.price > 0 ? `+${formatPrice(hw.price)}` : `${formatPrice(hw.price)}`} vs Standard
                      </p>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Profession */}
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">
                Step 2 — Your Profession
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {PROFESSIONS.map(p => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedProfession(p.id)}
                    className={cn(
                      'rounded-xl border px-3 py-2.5 text-xs font-medium transition-all text-left',
                      selectedProfession === p.id
                        ? 'border-volta-500 bg-volta-500/10 text-volta-300'
                        : 'border-border/50 bg-card/30 text-muted-foreground hover:border-border hover:text-foreground'
                    )}
                  >
                    <span className="block text-lg mb-1">{p.emoji}</span>
                    {p.label.replace(' Professional', '').replace(' & Founder', '')}
                  </button>
                ))}
              </div>

              {/* Profession detail */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProfession}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mt-4 rounded-2xl border border-border/40 p-5 bg-card/30"
                >
                  <p className="text-sm font-semibold mb-3 text-foreground">{profession.tagline}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Your AI stack includes</p>
                      <ul className="space-y-1">
                        {profession.tools.map(t => (
                          <li key={t} className="text-xs text-foreground/80 flex items-center gap-1.5">
                            <span className="text-volta-400">◆</span> {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">What you&apos;ll do on Day 1</p>
                      <ul className="space-y-1">
                        {profession.wins.map(w => (
                          <li key={w} className="text-xs text-emerge-400 flex items-start gap-1.5">
                            <CheckCircle2 className="h-3 w-3 mt-0.5 flex-shrink-0" /> {w}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Step 3: Tier */}
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">
                Step 3 — Choose Your Tier
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {PRICING_TIERS.map(t => (
                  <button
                    key={t.id}
                    onClick={() => t.priceOnce && setSelectedTier(t.id)}
                    disabled={!t.priceOnce}
                    className={cn(
                      'text-left rounded-2xl border p-4 transition-all',
                      selectedTier === t.id
                        ? 'border-volta-500 bg-volta-500/5 shadow-lg shadow-volta-500/10'
                        : 'border-border/50 bg-card/30 hover:border-border',
                      !t.priceOnce && 'opacity-60 cursor-default'
                    )}
                  >
                    {t.popular && <Badge variant="volta" className="text-[10px] mb-2">Most Popular</Badge>}
                    <h3 className="font-semibold text-sm mb-1">{t.name}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{t.tagline}</p>
                    <p className="text-base font-bold">
                      {t.priceOnce ? formatPrice(t.priceOnce) : 'Custom'}
                      {t.priceOnce && <span className="text-xs font-normal text-muted-foreground ml-1">one time</span>}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Order summary */}
          <div className="lg:sticky lg:top-24 self-start">
            <motion.div
              layout
              className="rounded-2xl border border-volta-500/40 bg-card p-6 shadow-2xl shadow-volta-500/5"
            >
              <h3 className="text-sm font-semibold mb-4">Your Configuration</h3>

              <div className="space-y-3 text-sm mb-5">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Device</span>
                  <span className="font-medium text-right max-w-[160px]">{hardware.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Profession</span>
                  <span className="font-medium">{profession.emoji} {profession.label.split(' ')[0]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tier</span>
                  <span className="font-medium">{tier.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">AI Stack</span>
                  <span className="font-medium text-emerge-400">{profession.tools.length} tools included</span>
                </div>
              </div>

              <div className="border-t border-border pt-4 mb-5">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-muted-foreground">Total</span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={finalPrice}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="text-2xl font-bold"
                    >
                      {tier.priceOnce ? formatPrice(finalPrice) : 'Custom'}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <p className="text-xs text-muted-foreground mt-1">One-time. No monthly fee for the device.</p>
              </div>

              {/* Includes summary */}
              <div className="space-y-1.5 mb-5">
                {tier.includes.slice(0, 5).map(item => (
                  <div key={item} className="flex items-start gap-2 text-xs">
                    <CheckCircle2 className="h-3.5 w-3.5 text-volta-400 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
                {tier.includes.length > 5 && (
                  <p className="text-xs text-muted-foreground pl-5">+{tier.includes.length - 5} more inclusions</p>
                )}
              </div>

              <Button
                asChild
                variant={tier.priceOnce ? 'volta' : 'white-outline'}
                size="lg"
                className="w-full"
              >
                <Link href={tier.id === 'team' ? '/consulting' : '#order'}>
                  {tier.id === 'team' ? 'Talk to Sales' : `Order ${tier.name}`}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <div className="flex items-center justify-center gap-4 mt-4">
                {['🔒 Secure', '↩ 30-day returns', '⚡ Ships in 5 days'].map(t => (
                  <span key={t} className="text-[10px] text-muted-foreground/60">{t}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Color chooser (visual, no logic) ── */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-6 text-center">
          Available Colors
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {hardware.colors.map(color => {
            const colorMap: Record<string, string> = {
              'Midnight': 'bg-slate-900 border-slate-700',
              'Starlight': 'bg-yellow-50 border-yellow-200',
              'Space Gray': 'bg-gray-500 border-gray-400',
              'Silver': 'bg-gray-200 border-gray-300',
              'Space Black': 'bg-zinc-900 border-zinc-700',
              'Graphite': 'bg-zinc-600 border-zinc-500',
            }
            return (
              <div key={color} className="flex items-center gap-2">
                <div className={cn('w-6 h-6 rounded-full border-2', colorMap[color] || 'bg-gray-400 border-gray-300')} />
                <span className="text-sm text-muted-foreground">{color}</span>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Tech specs ── */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-display font-normal tracking-tight text-center mb-10">
          Every detail considered.
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { label: 'Setup time', value: 'Zero minutes', detail: 'Everything configured before it ships' },
            { label: 'Boot-to-AI time', value: '< 8 seconds', detail: 'Open the lid, start working' },
            { label: 'AI tools pre-installed', value: '8–15 tools', detail: 'Curated for your profession' },
            { label: 'Stack update frequency', value: 'Monthly', detail: 'New tools as they emerge' },
            { label: 'Battery (Pro M3)', value: '18+ hours', detail: 'Full work day with room to spare' },
            { label: 'Privacy', value: 'On-device', detail: 'No data leaves without your consent' },
            { label: 'Warranty', value: '1+1 year', detail: 'Apple warranty + LeverageOS extension' },
            { label: 'Return window', value: '30 days', detail: 'Unconditional, no questions' },
          ].map(spec => (
            <div key={spec.label} className="glass rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">{spec.label}</p>
                <p className="text-sm font-semibold">{spec.value}</p>
              </div>
              <p className="text-xs text-muted-foreground text-right max-w-[140px]">{spec.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-display font-normal tracking-tight text-center mb-10">
          Common questions.
        </h2>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="glass rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-sm font-medium pr-4">{faq.q}</span>
                {openFaq === i ? <ChevronUp className="h-4 w-4 text-muted-foreground flex-shrink-0" /> : <ChevronDown className="h-4 w-4 text-muted-foreground flex-shrink-0" />}
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* ── Reviews strip ── */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="rounded-2xl bg-card/40 border border-border/30 p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex gap-0.5 mb-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}</div>
              <p className="text-2xl font-bold">4.9 / 5</p>
              <p className="text-sm text-muted-foreground">Based on 312 verified reviews</p>
            </div>
            <div className="grid grid-cols-3 gap-6 text-center">
              {[
                { label: 'Would recommend', value: '97%' },
                { label: 'Return rate', value: '< 3%' },
                { label: 'First-week AI wins', value: '94%' },
              ].map(s => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-volta-300">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
            <Button asChild variant="volta" size="lg">
              <Link href="#configurator">
                Build Yours Now <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
