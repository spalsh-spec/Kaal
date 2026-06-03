'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, MessageCircle, BookOpen, Video, Zap } from 'lucide-react'

const SUPPORT_CHANNELS = [
  {
    icon: MessageCircle,
    title: 'Live Chat Support',
    description: 'Chat with a real human (not a bot) Monday–Friday 8am–8pm EST. Average response time: 4 minutes.',
    badge: 'Fastest',
    color: 'text-volta-400',
    bg: 'bg-volta-500/10',
    cta: 'Start a chat',
    href: '#chat',
  },
  {
    icon: BookOpen,
    title: 'Help Centre',
    description: '300+ articles covering every tool, every workflow, and every question we\'ve ever been asked.',
    badge: 'Self-serve',
    color: 'text-emerge-400',
    bg: 'bg-emerge-500/10',
    cta: 'Browse articles',
    href: '#help',
  },
  {
    icon: Video,
    title: 'Video Library',
    description: 'Step-by-step tutorials for every tool and workflow. Watch, pause, rewind. Available 24/7.',
    badge: 'Always on',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    cta: 'Watch tutorials',
    href: '/learn',
  },
  {
    icon: Zap,
    title: 'AI Consulting',
    description: '1:1 sessions with an AI specialist for your profession. Book when you need expert help.',
    badge: 'Premium',
    color: 'text-sky-400',
    bg: 'bg-sky-500/10',
    cta: 'Book a session',
    href: '/consulting',
  },
]

const COMMON_QUESTIONS = [
  { q: 'How do I install a new tool that\'s not in my stack?', href: '#' },
  { q: 'How do I update my AI stack to the latest version?', href: '#' },
  { q: 'My device arrived — what do I do first?', href: '#' },
  { q: 'Can I use HeliosOS on an existing laptop?', href: '#' },
  { q: 'How do I cancel or postpone my order?', href: '#' },
  { q: 'What\'s included in a Stack Update?', href: '#' },
  { q: 'How do I get a refund?', href: '#' },
  { q: 'Is my data private?', href: '#' },
]

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      {/* Hero */}
      <section className="helios-panel text-white">
        <div className="pt-36 pb-24 text-center max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
            <Badge variant="volta">Support</Badge>
            <h1 className="text-5xl md:text-6xl font-display font-normal tracking-tight text-white">
              We&apos;ve got you.
              <br />
              <span className="font-display italic gradient-text">Always.</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
              Real humans. Fast responses. Plain English.
              We don&apos;t do support tickets — we do conversations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Channels */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid sm:grid-cols-2 gap-5">
          {SUPPORT_CHANNELS.map((ch, i) => {
            const Icon = ch.icon
            return (
              <motion.div
                key={ch.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 flex flex-col gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl ${ch.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`h-5 w-5 ${ch.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-semibold">{ch.title}</h3>
                      <Badge variant="secondary" className="text-[10px]">{ch.badge}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{ch.description}</p>
                  </div>
                </div>
                <Button asChild variant="white-outline" size="sm" className="self-start">
                  <Link href={ch.href}>{ch.cta} <ArrowRight className="h-3.5 w-3.5" /></Link>
                </Button>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Common questions */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-semibold text-center mb-8">Common questions</h2>
        <div className="space-y-2">
          {COMMON_QUESTIONS.map(q => (
            <Link
              key={q.q}
              href={q.href}
              className="flex items-center justify-between glass rounded-xl p-4 hover:border-volta-500/30 transition-all group"
            >
              <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">{q.q}</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-volta-400 transition-colors flex-shrink-0 ml-3" />
            </Link>
          ))}
        </div>
      </section>

      {/* Community */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="rounded-2xl border border-border/40 bg-card/30 p-10">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">🌐</div>
            <h2 className="text-2xl font-semibold mb-2">HeliosOS Community</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              2,400+ professionals sharing prompts, discoveries, and workflow wins.
              The fastest way to level up is learning from people in your field.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { label: 'Active members', value: '2,400+' },
              { label: 'Messages per week', value: '4,800+' },
              { label: 'Professions represented', value: '8 fields' },
            ].map(s => (
              <div key={s.label} className="glass rounded-xl p-4 text-center">
                <p className="text-xl font-bold text-volta-300">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="volta" size="lg">
              <Link href="#community">Join the Community <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SLA for Pro */}
      <section className="max-w-3xl mx-auto px-6 pb-32 text-center">
        <div className="glass rounded-2xl p-8">
          <Badge variant="volta" className="mb-4">Pro Bundle</Badge>
          <h3 className="text-xl font-semibold mb-2">Priority support: 4-hour response</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Pro Bundle customers get a dedicated support lane. When you reach out,
            a specialist with knowledge of your profession and stack responds within 4 hours — guaranteed.
          </p>
          <Button asChild variant="volta" size="sm">
            <Link href="/devices#configurator">Upgrade to Pro Bundle <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
