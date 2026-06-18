'use client'

import { motion } from 'framer-motion'
import { RefreshCw, Shield, Zap, Users } from 'lucide-react'

const PROMISES = [
  {
    icon: RefreshCw,
    title: 'Monthly Stack Updates',
    description:
      'AI moves fast. We track every breakthrough. Every month, your device gets new tools, updated agents, and better workflows — automatically or with one click.',
    color: 'text-volta-400',
    bg: 'bg-volta-500/10',
  },
  {
    icon: Shield,
    title: 'You\'re Never Left Behind',
    description:
      'The biggest fear of non-developers: falling behind. With Kaal, that\'s structurally impossible. We stay current so you stay current.',
    color: 'text-emerge-400',
    bg: 'bg-emerge-500/10',
  },
  {
    icon: Zap,
    title: 'Expert-Curated, Always',
    description:
      'We test every tool before it reaches your device. No half-baked betas. No tools that look cool but waste your time. Just what works.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
  },
  {
    icon: Users,
    title: 'Community Intelligence',
    description:
      'Every Kaal user discovers new workflows. The best ones get added to your stack. Collective intelligence, personal results.',
    color: 'text-sky-400',
    bg: 'bg-sky-500/10',
  },
]

export function UpdatePromise() {
  return (
    <section className="section-pad max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-xs text-volta-400 tracking-widest uppercase font-medium mb-4">The Promise</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-normal tracking-tight mb-4">
          Your device gets smarter
          <br />
          <span className="font-display italic text-muted-foreground">every single month.</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          The device you receive today is just the beginning. Most tech depreciates.
          Kaal appreciates.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {PROMISES.map((p, i) => {
          const Icon = p.icon
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:border-white/20 transition-all"
            >
              <div className={`w-10 h-10 rounded-lg ${p.bg} flex items-center justify-center mb-4`}>
                <Icon className={`h-5 w-5 ${p.color}`} />
              </div>
              <h3 className="text-sm font-semibold mb-2 text-foreground">{p.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.description}</p>
            </motion.div>
          )
        })}
      </div>

      {/* Update timeline visual */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 rounded-2xl border border-border/40 p-8 bg-card/30"
      >
        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6 text-center">What a Stack Update looks like</p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { month: 'Month 1', label: 'Launch Stack', items: ['Claude 3.7', 'Cursor 0.45', 'Perplexity Pro', '+ 9 more'] },
            { month: 'Month 3', label: 'Update 2.0', items: ['Claude 4.0 ✦ NEW', 'Cursor agents ✦ NEW', 'Gemini integration', '+ 4 new tools'] },
            { month: 'Month 6', label: 'Update 4.0', items: ['Kimi K2 local ✦ NEW', 'Voice agents ✦ NEW', 'Custom workflows', '+ 7 new tools'] },
          ].map((u) => (
            <div key={u.month} className="text-center">
              <div className="text-xs text-muted-foreground mb-1">{u.month}</div>
              <div className="glass rounded-xl p-4">
                <p className="text-sm font-semibold text-volta-300 mb-2">{u.label}</p>
                <ul className="space-y-1">
                  {u.items.map((item) => (
                    <li key={item} className="text-xs text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
