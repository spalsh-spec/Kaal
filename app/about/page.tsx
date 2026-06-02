'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'

const TEAM = [
  { name: 'Jordan Wei', role: 'Co-founder & CEO', background: 'Former Apple product lead. Saw the gap between AI\'s promise and people\'s reality.', avatar: 'JW', gradient: 'from-volta-400 to-indigo-600' },
  { name: 'Priya Nair', role: 'Co-founder & CTO', background: 'ML engineer. Built AI systems that didn\'t need engineers to run them.', avatar: 'PN', gradient: 'from-emerge-400 to-teal-600' },
  { name: 'Sam Okonkwo', role: 'Head of Product', background: 'Product at Notion and Linear. Obsessed with zero-friction UX.', avatar: 'SO', gradient: 'from-amber-400 to-orange-500' },
  { name: 'Lea Fischer', role: 'Head of AI Curation', background: 'Researches and vets every tool before it touches a customer device.', avatar: 'LF', gradient: 'from-blue-400 to-cyan-500' },
]

const VALUES = [
  {
    title: 'Complexity is the enemy.',
    body: 'AI is genuinely transformative. But most people can\'t access it because the setup is too hard. We build the bridge. The simpler the experience, the more powerful the result.',
  },
  {
    title: 'Specialisation beats generalisation.',
    body: 'A generic AI tool gives you generic results. We build for specific professions, specific workflows, specific wins. That\'s why our customers outperform people using off-the-shelf AI.',
  },
  {
    title: 'Updates are the product.',
    body: 'The hardware depreciates. The stack appreciates. Monthly updates are not a feature — they\'re the entire model. Your HeliosOS device should be more valuable in 12 months than the day it shipped.',
  },
  {
    title: 'We succeed when you do.',
    body: 'We don\'t sell subscriptions and hide behind an FAQ. If our customers don\'t achieve real results, we fail. Our 10× guarantee isn\'t a gimmick — it\'s how we stay honest with ourselves.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 text-center max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
          <Badge variant="volta">Our Story</Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-normal tracking-tight">
            AI for humans.
            <br />
            <span className="font-display italic gradient-text">Not developers.</span>
          </h1>
        </motion.div>
      </section>

      {/* Manifesto */}
      <section className="max-w-3xl mx-auto px-6 pb-24" id="manifesto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-invert max-w-none"
        >
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>
              We started HeliosOS because we were watching something unfair happen.
            </p>
            <p>
              AI was transforming the work of people who could code. Developers were automating away weeks of work. Startups were running with half the headcount. Early adopters were achieving results that looked impossible to the people next to them.
            </p>
            <p>
              But the non-developer — the lawyer, the doctor, the marketing director, the real estate agent — was being left behind. Not because they were less intelligent, or less motivated. Just because nobody built the bridge.
            </p>
            <p>
              Learning AI from scratch takes 200+ hours. The tools change every week. The setup is genuinely hard. And the people who need AI most are the ones with the least time to figure it out.
            </p>
            <p className="text-volta-300 font-medium text-xl">
              We built HeliosOS to close that gap permanently.
            </p>
            <p>
              Not a course. Not a subscription. Not a productivity hack. A device — properly configured, maintained, and updated — that puts world-class AI capability in the hands of anyone who opens it.
            </p>
            <p>
              The doctor shouldn&apos;t have to learn prompt engineering to write better notes. The lawyer shouldn&apos;t have to configure an API to review contracts faster. The creator shouldn&apos;t have to build a tech stack to publish four videos a week.
            </p>
            <p>
              They just need a device that works.
            </p>
            <p className="text-foreground/60 italic">
              — Jordan & Priya, Founders
            </p>
          </div>
        </motion.div>
      </section>

      {/* Values */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-display font-normal tracking-tight text-center mb-10">
          What we believe
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-base font-semibold mb-2 text-volta-300">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-display font-normal tracking-tight text-center mb-10">
          The team
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-4 bg-gradient-to-br ${member.gradient}`}>
                {member.avatar}
              </div>
              <h3 className="text-sm font-semibold">{member.name}</h3>
              <p className="text-xs text-volta-400 mb-3">{member.role}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{member.background}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Numbers */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="rounded-2xl border border-border/40 bg-card/30 p-10">
          <h2 className="text-2xl font-semibold text-center mb-8">HeliosOS by the numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '2,400+', label: 'Professionals using HeliosOS' },
              { value: '8', label: 'Profession verticals covered' },
              { value: '40+', label: 'AI tools in the ecosystem' },
              { value: '< 3%', label: 'Return rate' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold text-volta-300 mb-1">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="max-w-5xl mx-auto px-6 pb-24" id="press">
        <h2 className="text-3xl font-display font-normal tracking-tight text-center mb-10">
          Press & media
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { outlet: 'TechCrunch', quote: '"HeliosOS makes a genuine case for being the first truly non-developer AI computer."', date: 'January 2025' },
            { outlet: 'The Verge', quote: '"The hardware is premium. The concept is new. The execution is surprisingly seamless."', date: 'February 2025' },
            { outlet: 'Fast Company', quote: '"What Apple did for smartphones, HeliosOS is trying to do for AI. It\'s ambitious. It might work."', date: 'March 2025' },
          ].map(p => (
            <div key={p.outlet} className="glass rounded-2xl p-6">
              <p className="text-xs font-bold text-volta-400 mb-3">{p.outlet}</p>
              <p className="text-sm text-foreground/80 italic mb-3">{p.quote}</p>
              <p className="text-xs text-muted-foreground">{p.date}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-6">
          For press enquiries: <a href="mailto:press@leverageos.com" className="text-volta-400 hover:underline">press@leverageos.com</a>
        </p>
      </section>

      {/* Careers */}
      <section className="max-w-4xl mx-auto px-6 pb-32 text-center" id="careers">
        <h2 className="text-3xl font-display font-normal tracking-tight mb-4">
          Join the mission
        </h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          We&apos;re a small team building something genuinely new. If you believe AI should be
          accessible to everyone — not just the technically literate — we want to talk.
        </p>
        <Button asChild variant="volta" size="lg">
          <Link href="mailto:careers@leverageos.com">
            View open roles <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </section>

      <Footer />
    </div>
  )
}
