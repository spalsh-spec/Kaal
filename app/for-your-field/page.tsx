'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { PROFESSIONS } from '@/lib/data'
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

const PROFESSION_DETAILS: Record<string, {
  headline: string
  subheadline: string
  pain: string
  promise: string
  workflows: { name: string; before: string; after: string }[]
  quote: string
  quoteName: string
  quoteRole: string
}> = {
  marketing: {
    headline: 'Marketing at 10× speed.',
    subheadline: 'Everything from strategy to copy to visuals — in hours, not weeks.',
    pain: 'You\'re expected to produce more content, run more campaigns, and prove more ROI — with the same team size. The tools exist to do this. You just don\'t have time to learn them all.',
    promise: 'HeliosOS comes pre-loaded with every AI tool a marketing professional needs, configured to work together. From brief to published in the time it used to take to write a brief.',
    workflows: [
      { name: 'Monthly content calendar', before: '3 days', after: '90 minutes' },
      { name: 'Campaign copy (5 variants)', before: '4 hours', after: '20 minutes' },
      { name: 'Competitor analysis', before: '1 week', after: '2 hours' },
      { name: 'Social media graphics (10 images)', before: '2 days', after: '30 minutes' },
      { name: 'Email sequence (5 emails)', before: '1 day', after: '45 minutes' },
    ],
    quote: 'My team thinks I hired a full agency. I just have HeliosOS.',
    quoteName: 'Sarah Chen',
    quoteRole: 'Marketing Director, Fintech startup',
  },
  lawyer: {
    headline: 'Legal work that used to take days. Now hours.',
    subheadline: 'Research, drafting, review — all accelerated without sacrificing precision.',
    pain: 'Billable hours are being squeezed. Clients expect faster turnaround and lower bills. You\'re competing with legal tech startups that hired AI engineers. You don\'t need to hire engineers — you need HeliosOS.',
    promise: 'Pre-configured with legal-grade AI tools. Document review, contract drafting, case research, citation checking — all set up and ready. No learning curve. Just open the device and work.',
    workflows: [
      { name: 'Contract review (30 pages)', before: '3 hours', after: '25 minutes' },
      { name: 'Case research memo', before: '1 day', after: '2 hours' },
      { name: 'NDA first draft', before: '45 minutes', after: '8 minutes' },
      { name: '200-page filing summary', before: '6 hours', after: '30 minutes' },
      { name: 'Deposition outline', before: '3 hours', after: '40 minutes' },
    ],
    quote: 'I\'m 58 and I\'ve never considered myself a tech person. I draft contracts in half the time now.',
    quoteName: 'James Thornton',
    quoteRole: 'Partner, Thornton & Associates',
  },
  doctor: {
    headline: 'Medicine. Not paperwork.',
    subheadline: 'Reclaim the hours you\'re losing to documentation.',
    pain: 'You became a doctor to help patients. Instead you spend 2–4 hours per day on clinical documentation. Burnout is at record highs. AI can solve this — but no one has made it accessible to a busy clinician.',
    promise: 'HeliosOS for Medical Professionals is built specifically for clinicians. SOAP notes before you leave the room. Drug interaction checks in seconds. Literature reviews in minutes. Fully HIPAA-compatible workflows.',
    workflows: [
      { name: 'SOAP note per patient', before: '12 minutes', after: '2 minutes' },
      { name: 'Discharge summary', before: '20 minutes', after: '4 minutes' },
      { name: 'Drug interaction check', before: '5 minutes', after: '15 seconds' },
      { name: 'Referral letter', before: '15 minutes', after: '3 minutes' },
      { name: 'Literature review', before: '2 days', after: '1 hour' },
    ],
    quote: 'Documentation used to follow me home every night. Now my notes are done before I leave the office.',
    quoteName: 'Dr. Priya Sharma',
    quoteRole: 'GP, Central Health Clinic',
  },
  student: {
    headline: 'Study smarter. Graduate ahead.',
    subheadline: 'The AI advantage your classmates don\'t know about yet.',
    pain: 'University hasn\'t changed how it teaches you — but the working world has already changed what it expects of you. The students who graduate ahead are the ones who learned to leverage AI. That starts now.',
    promise: 'HeliosOS for Students gives you research superpowers, writing acceleration, and study tools that adapt to how you actually learn. Straight As aren\'t about working harder — they\'re about working with the right tools.',
    workflows: [
      { name: '2000-word essay (researched)', before: '2 days', after: '4 hours' },
      { name: 'Literature review (20 papers)', before: '1 week', after: '3 hours' },
      { name: 'Study guide from lecture notes', before: '2 hours', after: '15 minutes' },
      { name: 'Problem set walkthrough', before: '3 hours (tutoring)', after: '30 minutes' },
      { name: 'Citation + bibliography', before: '45 minutes', after: '3 minutes' },
    ],
    quote: 'My classmates are still googling things. My GPA went from 3.2 to 3.8 in one semester.',
    quoteName: 'Maya Patel',
    quoteRole: 'Pre-med Student, University of Michigan',
  },
  creator: {
    headline: 'Ideas to published. Daily.',
    subheadline: 'Script. Thumbnail. Upload. Repeat.',
    pain: 'The algorithm rewards consistency. But consistency requires an output level that burns creators out. The biggest channels have teams. You don\'t have a team — but you can have a system that works like one.',
    promise: 'HeliosOS for Creators combines scripting AI, thumbnail generation, YouTube SEO, voiceover tools, and video editing AI into one configured system. 4× the output. The same you.',
    workflows: [
      { name: 'Full video from idea to upload', before: '2 days', after: '5 hours' },
      { name: 'Script (10-minute video)', before: '3 hours', after: '25 minutes' },
      { name: 'Thumbnail (3 options)', before: '2 hours (designer)', after: '8 minutes' },
      { name: 'Title + description + tags', before: '30 minutes', after: '4 minutes' },
      { name: '30 days of content ideas', before: '1 week', after: '20 minutes' },
    ],
    quote: 'I went from posting once a week to posting 4 times. My channel doubled in 6 months.',
    quoteName: 'Alex Kim',
    quoteRole: 'YouTube Creator, 280K subscribers',
  },
  executive: {
    headline: 'Decisions faster. Delegation easier.',
    subheadline: 'Run the company. Let AI run the admin.',
    pain: 'You\'re in back-to-back meetings, drowning in email, and expected to have a clear strategic view — simultaneously. The most successful founders and executives use AI to reclaim 2–3 hours per day.',
    promise: 'HeliosOS for Executives is configured for the way leaders actually work: email triage, meeting prep and summaries, board decks, market intelligence, and strategic research — all on one device, ready to go.',
    workflows: [
      { name: 'Email inbox to zero', before: '2 hours', after: '25 minutes' },
      { name: 'Board deck (15 slides)', before: '3 days', after: '6 hours' },
      { name: 'Market intelligence brief', before: '1 week', after: '3 hours' },
      { name: 'Meeting pre-brief', before: '30 minutes', after: '5 minutes' },
      { name: 'Weekly CEO update email', before: '1 hour', after: '12 minutes' },
    ],
    quote: 'I reclaimed 15 hours a week. I use them for deep work that actually moves the needle.',
    quoteName: 'Marcus Reid',
    quoteRole: 'CEO, Series B SaaS startup',
  },
  realestate: {
    headline: 'More listings. More closings. Less effort.',
    subheadline: 'The AI tools that top agents use — preconfigured for you.',
    pain: 'The top 10% of agents close 80% of deals. They\'re not smarter. They\'re faster and more consistent. AI is their secret weapon. Now it\'s yours.',
    promise: 'Listing copy that converts, CRM follow-ups that run on autopilot, market reports your clients actually read, and negotiation prep that gives you an edge. All pre-loaded and ready.',
    workflows: [
      { name: 'Listing description', before: '45 minutes', after: '4 minutes' },
      { name: 'CMA report for client', before: '2 hours', after: '20 minutes' },
      { name: 'Follow-up sequence (10 leads)', before: '2 hours', after: '15 minutes' },
      { name: 'Neighbourhood market report', before: '1 day', after: '45 minutes' },
      { name: 'Offer letter + negotiation brief', before: '1 hour', after: '12 minutes' },
    ],
    quote: 'I\'ve closed 3 extra deals this quarter. The listing copy alone is worth the price of the device.',
    quoteName: 'Rodrigo Vasquez',
    quoteRole: 'Real Estate Agent, Miami',
  },
  finance: {
    headline: 'Analysis in hours. Not days.',
    subheadline: 'AI-powered financial work. Without the technical setup.',
    pain: 'Clients want faster analysis. Regulators want more documentation. Markets move 24/7. The analysts outperforming you aren\'t working harder — they\'ve automated the grunt work.',
    promise: 'HeliosOS for Finance pre-installs Excel AI, report generation agents, earnings summary tools, and market research automation. Monthly reports in an hour. Risk analysis without the grind.',
    workflows: [
      { name: 'Monthly financial report', before: '1 week', after: '4 hours' },
      { name: 'Earnings call summary', before: '2 hours', after: '15 minutes' },
      { name: 'Risk assessment brief', before: '3 days', after: '6 hours' },
      { name: 'Client investment memo', before: '1 day', after: '3 hours' },
      { name: 'Excel model (30-tab)', before: '2 days', after: '6 hours' },
    ],
    quote: 'My junior analysts thought I had a team working overnight. It was just HeliosOS.',
    quoteName: 'David Park',
    quoteRole: 'Portfolio Manager, Family Office',
  },
}

export default function ForYourFieldPage() {
  const [active, setActive] = useState('marketing')
  const profession = PROFESSIONS.find(p => p.id === active)!
  const detail = PROFESSION_DETAILS[active]

  return (
    <div className="min-h-screen bg-background">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-16 text-center max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
          <Badge variant="volta">For Your Field</Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-normal tracking-tight">
            Built for your work.
            <br />
            <span className="font-display italic gradient-text">Not everyone else&apos;s.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every profession gets a different device. Different tools, different workflows,
            different results. Choose yours below.
          </p>
        </motion.div>
      </section>

      {/* Profession selector */}
      <section className="max-w-6xl mx-auto px-6 pb-6">
        <div className="flex flex-wrap justify-center gap-3">
          {PROFESSIONS.map(p => (
            <button
              key={p.id}
              id={p.id}
              onClick={() => setActive(p.id)}
              className={cn(
                'flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all',
                active === p.id
                  ? 'border-volta-500 bg-volta-500/10 text-volta-300'
                  : 'border-border/50 bg-card/30 text-muted-foreground hover:border-border hover:text-foreground'
              )}
            >
              <span>{p.emoji}</span>
              <span>{p.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Profession detail */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >
            {/* Headline */}
            <div className={cn('rounded-2xl p-10 mb-6 bg-gradient-to-br', profession.color, 'border', profession.border)}>
              <div className="text-5xl mb-4">{profession.emoji}</div>
              <h2 className="text-3xl md:text-4xl font-display font-normal tracking-tight mb-2">{detail.headline}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">{detail.subheadline}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Pain */}
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                    <span className="text-red-400 text-xs">!</span>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">The Problem</p>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">{detail.pain}</p>
              </div>

              {/* Promise */}
              <div className="glass rounded-2xl p-6 border-emerge-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-emerge-500/20 flex items-center justify-center">
                    <Zap className="h-3 w-3 text-emerge-400" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">HeliosOS Fix</p>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">{detail.promise}</p>
              </div>
            </div>

            {/* Workflow comparison */}
            <div className="glass rounded-2xl p-6 mb-6">
              <h3 className="text-sm font-semibold mb-5 text-foreground">Time saved per workflow</h3>
              <div className="space-y-4">
                {detail.workflows.map(wf => (
                  <div key={wf.name} className="grid grid-cols-3 gap-4 items-center">
                    <span className="text-sm text-foreground/80">{wf.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-red-400 line-through">{wf.before}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerge-400" />
                      <span className="text-xs text-emerge-400 font-semibold">{wf.after}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools included */}
            <div className="glass rounded-2xl p-6 mb-6">
              <h3 className="text-sm font-semibold mb-4">Your AI stack includes</h3>
              <div className="flex flex-wrap gap-2">
                {profession.tools.map(t => (
                  <span key={t} className="text-xs bg-muted/40 border border-border/40 rounded-full px-3 py-1.5 text-foreground/80">
                    <span className="text-volta-400 mr-1">◆</span>{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="rounded-2xl border border-volta-500/20 bg-volta-500/5 p-6 mb-8">
              <p className="text-lg text-foreground/90 italic mb-4">&ldquo;{detail.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className={cn('w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold bg-gradient-to-br', profession.color.replace('/20', '').replace('/10', ''))}>
                  {detail.quoteName.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-semibold">{detail.quoteName}</p>
                  <p className="text-xs text-muted-foreground">{detail.quoteRole}</p>
                </div>
                <div className="flex gap-0.5 ml-auto">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="volta" size="lg">
                <Link href="/devices#configurator">
                  Get Your {profession.label} Device <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href="/consulting">Book a free discovery call →</Link>
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* All professions grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-display font-normal tracking-tight text-center mb-10">
          Every profession. One platform.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROFESSIONS.map(p => (
            <button
              key={p.id}
              onClick={() => {
                setActive(p.id)
                window.scrollTo({ top: 400, behavior: 'smooth' })
              }}
              className={cn(
                'text-left rounded-2xl border p-5 transition-all hover:-translate-y-1',
                'bg-gradient-to-br border-border/40 hover:border-border',
                p.color
              )}
            >
              <span className="text-3xl block mb-3">{p.emoji}</span>
              <h3 className="text-sm font-semibold mb-1">{p.label}</h3>
              <p className="text-xs text-muted-foreground">{p.tagline}</p>
            </button>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
