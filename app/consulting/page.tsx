'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CONSULTING_PACKAGES } from '@/lib/data'
import { formatPrice } from '@/lib/utils'
import { CheckCircle2, ArrowRight, Calendar, Clock, Zap, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

const SPECIALISTS = [
  {
    name: 'Aiden Park',
    role: 'AI Workflow Architect',
    specialty: 'Marketing & GTM',
    sessions: 312,
    avatar: 'AP',
    gradient: 'from-violet-400 to-purple-600',
  },
  {
    name: 'Leila Hassan',
    role: 'AI Integration Specialist',
    specialty: 'Legal & Finance',
    sessions: 278,
    avatar: 'LH',
    gradient: 'from-blue-400 to-indigo-600',
  },
  {
    name: 'Marcus Chen',
    role: 'AI Productivity Expert',
    specialty: 'Executive & Operations',
    sessions: 445,
    avatar: 'MC',
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    name: 'Dr. Nia Roberts',
    role: 'Clinical AI Consultant',
    specialty: 'Healthcare & Medical',
    sessions: 190,
    avatar: 'NR',
    gradient: 'from-cyan-400 to-sky-600',
  },
]

const PROCESS_STEPS = [
  {
    icon: Calendar,
    title: 'Book',
    description: 'Choose a package, pick a time. You get a confirmation instantly with a pre-session questionnaire.',
  },
  {
    icon: Clock,
    title: 'Prepare',
    description: 'Fill out the short form: your current workflow, biggest pain points, goals. 10 minutes, max.',
  },
  {
    icon: Zap,
    title: 'Transform',
    description: 'Your specialist comes in with a plan. Live session — not a demo. We build your actual workflows.',
  },
  {
    icon: Users,
    title: 'Follow up',
    description: 'Get the recording, written steps, and Slack access. Keep winning long after the session.',
  },
]

export default function ConsultingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-16 text-center max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
          <Badge variant="volta">AI Consulting</Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-normal tracking-tight">
            Your personal
            <br />
            <span className="font-display italic gradient-text">AI specialist.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Work 1:1 with a certified LeverageOS specialist. They know your profession,
            your device, and exactly how to turn AI into results for your specific situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button asChild variant="volta" size="xl">
              <Link href="#packages">See packages <ArrowRight className="h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="ghost" size="xl">
              <Link href="#specialists">Meet your specialists →</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Trust bar */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '1,200+', label: 'Sessions completed' },
            { value: '4.97', label: 'Average rating' },
            { value: '94%', label: 'Book a 2nd session' },
            { value: '10×', label: 'Guarantee (Full Transform)' },
          ].map(s => (
            <div key={s.label} className="glass rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-volta-300">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="max-w-6xl mx-auto px-6 pb-24" id="packages">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-normal tracking-tight mb-3">
            Choose your engagement
          </h2>
          <p className="text-muted-foreground">From a single focused session to a full 6-month transformation.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {CONSULTING_PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className={cn(
                'rounded-2xl border p-8 flex flex-col gap-5',
                i === 2 ? 'border-volta-500/50 bg-card shadow-2xl shadow-volta-500/10 relative' : 'bg-card/50'
              )}
            >
              {i === 2 && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <Badge variant="volta" className="px-4 py-1">Most Impactful</Badge>
                </div>
              )}

              <div>
                <Badge variant="secondary" className="mb-3">{pkg.duration}</Badge>
                <h3 className="text-xl font-semibold mb-1">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground">{pkg.description}</p>
              </div>

              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{formatPrice(pkg.price)}</span>
                  {i === 1 && <span className="text-sm text-muted-foreground">/month</span>}
                </div>
                {i === 2 && (
                  <p className="text-xs text-emerge-400 mt-1">10× guarantee — results or full refund</p>
                )}
              </div>

              <ul className="flex flex-col gap-2 flex-1">
                {pkg.includes.map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className={cn('h-4 w-4 mt-0.5 shrink-0', i === 2 ? 'text-volta-400' : 'text-emerge-400')} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={i === 2 ? 'volta' : 'white-outline'}
                size="lg"
                className="w-full"
              >
                <Link href="#book">
                  Book {pkg.name.split(' ')[0]} Session <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          All consulting sessions include a recording. LeverageOS device not required (but sessions are 3× more valuable with one).
        </p>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-normal tracking-tight mb-3">How a session works</h2>
          <p className="text-muted-foreground">No fluff. No slides. Just results.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-5">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-5 text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-volta-500/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-5 w-5 text-volta-400" />
                </div>
                <div className="text-xs font-bold text-volta-400 mb-2">Step {i + 1}</div>
                <h3 className="text-sm font-semibold mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Specialists */}
      <section className="max-w-5xl mx-auto px-6 pb-24" id="specialists">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-normal tracking-tight mb-3">Meet your specialists</h2>
          <p className="text-muted-foreground">Every specialist is a domain expert first, AI technologist second.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SPECIALISTS.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-5 text-center"
            >
              <div className={cn(
                'w-16 h-16 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-4 bg-gradient-to-br',
                s.gradient
              )}>
                {s.avatar}
              </div>
              <h3 className="text-sm font-semibold">{s.name}</h3>
              <p className="text-xs text-muted-foreground mb-1">{s.role}</p>
              <Badge variant="secondary" className="text-[10px] mb-3">{s.specialty}</Badge>
              <p className="text-xs text-volta-400">{s.sessions} sessions completed</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The 10× guarantee */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="rounded-2xl border border-emerge-500/30 bg-emerge-500/5 p-10 text-center">
          <div className="text-5xl mb-4">💯</div>
          <h2 className="text-3xl font-display font-normal tracking-tight mb-3">The 10× Guarantee</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            The Full Transformation package comes with a simple promise: at the end of 6 months,
            if you can&apos;t point to at least 10× the value you paid in time saved, revenue added,
            or stress reduced — we refund every cent.
          </p>
          <p className="text-xs text-muted-foreground">
            We&apos;ve offered this guarantee since day one. We&apos;ve never been asked for a refund.
          </p>
        </div>
      </section>

      {/* Book section */}
      <section className="max-w-3xl mx-auto px-6 pb-32 text-center" id="book">
        <h2 className="text-4xl font-display font-normal tracking-tight mb-4">
          Ready to transform how you work?
        </h2>
        <p className="text-muted-foreground mb-8">
          Book a free 20-minute discovery call first.
          No commitment — just a chance to find out if consulting is right for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="volta" size="xl">
            <Link href="#book">Book Free Discovery Call <ArrowRight className="h-5 w-5" /></Link>
          </Button>
          <Button asChild variant="ghost" size="xl">
            <Link href="#packages">View all packages →</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
