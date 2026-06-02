'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const STEPS = [
  {
    step: '01',
    title: 'Configure Online',
    subtitle: '5 minutes',
    description: 'Choose your hardware, select your profession, pick your tier. Our configurator builds your exact specification in real time — no back and forth, no sales calls required.',
    detail: [
      'MacBook Air M3, Pro M3, or Windows option',
      'Profession-specific AI stack selection',
      'Standard or Pro Bundle pricing',
      'Estimated ship date confirmed instantly',
    ],
    visual: 'configurator',
  },
  {
    step: '02',
    title: 'We Build Your Device',
    subtitle: '3–5 business days',
    description: 'Our team takes your order and goes to work. We source the hardware, pre-install your AI stack, configure every tool, authenticate your accounts, and test the entire setup — before it ships.',
    detail: [
      'Hardware sourced, inspected, and prepared',
      'HeliosOS configuration layer installed',
      'All 8–15 tools installed and authenticated',
      'Custom profession workflows programmed',
      'Full QA test run by an AI specialist',
      'Device wiped and reset to pristine state',
    ],
    visual: 'build',
  },
  {
    step: '03',
    title: 'Shipped to Your Door',
    subtitle: 'Express delivery',
    description: 'Arrives in premium packaging. Inside: your configured device, a printed setup card, and access to your onboarding video library. No cables to connect, no software to install.',
    detail: [
      'Insured express shipping included',
      'Premium protective packaging',
      'Printed quick-start card in the box',
      'Access email to video library sent automatically',
    ],
    visual: 'ship',
  },
  {
    step: '04',
    title: 'Onboarding Call',
    subtitle: 'Day 1 or 2',
    description: 'Your 60-minute onboarding session with an AI specialist. They walk through every tool, build your first custom workflow live, and answer every question. Plain English. No jargon.',
    detail: [
      'Live 1:1 with a certified AI specialist',
      'Tour of your full AI stack',
      'First custom workflow built together',
      'Q&A — ask anything, nothing is too basic',
      'Recording sent for later reference',
    ],
    visual: 'call',
  },
  {
    step: '05',
    title: 'Your First AI Win',
    subtitle: 'Day 1',
    description: '94% of HeliosOS customers achieve a meaningful result within their first 8 hours. A task that used to take an afternoon now takes 15 minutes. You feel it the first day.',
    detail: [
      'Tutorial library: 6 core modules (Standard) or 40+ hours (Pro)',
      'Practice prompts and templates included',
      'Community of 2,400+ professionals to learn from',
      'Monthly group Q&A calls',
    ],
    visual: 'win',
  },
  {
    step: '06',
    title: 'Monthly Stack Updates',
    subtitle: 'Every month, forever',
    description: 'AI moves fast. Every month, our team researches new tools, tests them in real workflows, and pushes the best ones to your device. You\'re always running the best available stack — automatically.',
    detail: [
      'New tools tested and curated by our team',
      'Automatic update or one-click install',
      'Changelog with video walkthroughs',
      'Old tools retired when better ones emerge',
    ],
    visual: 'update',
  },
]

const TIMELINE_ITEMS = [
  { day: 'Day 0', label: 'You order online', color: 'text-volta-400' },
  { day: 'Days 1–5', label: 'We build your device', color: 'text-amber-400' },
  { day: 'Day 6', label: 'Shipped express', color: 'text-sky-400' },
  { day: 'Day 7', label: 'Arrives at your door', color: 'text-emerge-400' },
  { day: 'Day 7–8', label: 'Onboarding call', color: 'text-purple-400' },
  { day: 'Day 8', label: 'First AI win 🚀', color: 'text-rose-400' },
]

const COMPARISON = [
  { aspect: 'Setup time', before: '20–40 hours finding/installing/configuring', after: 'Zero. Ships ready.' },
  { aspect: 'Learning curve', before: 'Months of trial and error', after: '60-min onboarding + video library' },
  { aspect: 'Staying current', before: 'Impossible — news moves too fast', after: 'Monthly updates, curated for you' },
  { aspect: 'Tool selection', before: 'Overwhelmed by 10,000+ AI tools', after: '8–15 curated for your profession' },
  { aspect: 'Cost', before: '$50–200+/month in random subscriptions', after: 'One price, everything included' },
  { aspect: 'Results', before: 'Vague ROI, mostly experiments', after: 'Specific wins Day 1' },
]

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-16 text-center max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
          <Badge variant="volta">The Process</Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-normal tracking-tight">
            Simple by design.
            <br />
            <span className="font-display italic gradient-text">Powerful in practice.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From order to first AI win in 8 days. Here&apos;s exactly what happens — no surprises.
          </p>
        </motion.div>
      </section>

      {/* Timeline strip */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="rounded-2xl border border-border/40 bg-card/30 p-6 overflow-x-auto">
          <div className="flex items-center min-w-[600px]">
            {TIMELINE_ITEMS.map((item, i) => (
              <div key={item.day} className="flex items-center flex-1">
                <div className="text-center flex-1">
                  <div className={`text-xs font-bold mb-1 ${item.color}`}>{item.day}</div>
                  <div className="w-3 h-3 rounded-full bg-current mx-auto mb-1" style={{ color: item.color.replace('text-', '') }} />
                  <div className={`w-3 h-3 rounded-full mx-auto mb-1 ${item.color}`} />
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </div>
                {i < TIMELINE_ITEMS.length - 1 && (
                  <div className="h-px bg-border flex-1 mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="max-w-5xl mx-auto px-6 pb-24" id="updates">
        <div className="space-y-12">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
            >
              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl font-display font-normal text-volta-500/30">{step.step}</span>
                  <div>
                    <h2 className="text-xl font-semibold">{step.title}</h2>
                    <Badge variant="secondary" className="text-[10px] mt-1">{step.subtitle}</Badge>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.detail.map(d => (
                    <li key={d} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-emerge-400 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual card */}
              <div className="glass rounded-2xl p-8 aspect-video flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="text-6xl">
                    {step.visual === 'configurator' ? '⚙️' :
                     step.visual === 'build' ? '🔧' :
                     step.visual === 'ship' ? '📦' :
                     step.visual === 'call' ? '🎯' :
                     step.visual === 'win' ? '🚀' : '🔄'}
                  </div>
                  <p className="text-sm text-muted-foreground">{step.title}</p>
                  <p className="text-xs text-volta-400">{step.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Before / After */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-normal tracking-tight mb-3">
            Before vs. after HeliosOS
          </h2>
          <p className="text-muted-foreground">The difference is structural, not just a new app.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-1 rounded-2xl overflow-hidden border border-border/40">
          <div className="bg-red-500/5 border-r border-border/40 p-1">
            <div className="bg-red-500/10 rounded-xl p-3 mb-1">
              <p className="text-xs font-semibold text-red-400 uppercase tracking-wider text-center">Before</p>
            </div>
            <div className="space-y-1 p-2">
              {COMPARISON.map(c => (
                <div key={c.aspect} className="p-3 rounded-lg">
                  <p className="text-xs text-muted-foreground/60 mb-0.5">{c.aspect}</p>
                  <p className="text-sm text-red-300/80">{c.before}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-emerge-500/5 p-1">
            <div className="bg-emerge-500/10 rounded-xl p-3 mb-1">
              <p className="text-xs font-semibold text-emerge-400 uppercase tracking-wider text-center">After HeliosOS</p>
            </div>
            <div className="space-y-1 p-2">
              {COMPARISON.map(c => (
                <div key={c.aspect} className="p-3 rounded-lg">
                  <p className="text-xs text-muted-foreground/60 mb-0.5">{c.aspect}</p>
                  <p className="text-sm text-emerge-300">{c.after}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-32 text-center">
        <h2 className="text-4xl font-display font-normal tracking-tight mb-4">
          Ready to start your 8-day journey?
        </h2>
        <p className="text-muted-foreground mb-8">Configure your device in 5 minutes. We handle the rest.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="volta" size="xl">
            <Link href="/devices#configurator">Build My Device <ArrowRight className="h-5 w-5" /></Link>
          </Button>
          <Button asChild variant="ghost" size="xl">
            <Link href="/consulting">Talk to a specialist first →</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
