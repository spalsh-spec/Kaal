'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const BEFORE = [
  'Hours lost learning tools that weren\'t built for you',
  'Authentication failures on day one',
  'Watching YouTube tutorials for three days straight',
  'Asking IT to install "one more thing"',
  'Giving up before seeing any results',
]

const AFTER = [
  'Open box → working in 15 minutes',
  'Every tool signed in and tested before it ships',
  'Tutorial videos taught in plain, human English',
  'Updates arrive automatically, forever',
  'Real results in your first session',
]

export function ProblemSolution() {
  return (
    <section className="section-pad max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-xs text-volta-400 tracking-widest uppercase font-medium mb-4">The Gap We Closed</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-normal tracking-tight mb-6">
          AI tools were built for developers.
          <br />
          <span className="font-display italic text-muted-foreground">We built this for everyone else.</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          97% of AI value is being captured by &lt;3% of people who know how to set it up.
          That ends with LeverageOS.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Before */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-red-500/15 bg-red-500/5 p-8"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
              <span className="text-red-400 text-sm font-bold">✕</span>
            </div>
            <h3 className="text-lg font-semibold text-red-300">Before LeverageOS</h3>
          </div>
          <ul className="space-y-3">
            {BEFORE.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 text-sm text-red-300/70"
              >
                <span className="mt-1 text-red-500/50 shrink-0">—</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* After */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-emerge-500/20 bg-emerge-500/5 p-8 relative overflow-hidden"
        >
          <div
            className="absolute top-0 right-0 w-32 h-32 blur-2xl opacity-20"
            style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.8) 0%, transparent 70%)' }}
          />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-emerge-500/20 flex items-center justify-center">
                <span className="text-emerge-400 text-sm font-bold">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-emerge-300">With LeverageOS</h3>
            </div>
            <ul className="space-y-3">
              {AFTER.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.2 }}
                  className="flex items-start gap-3 text-sm text-emerge-300/80"
                >
                  <span className="mt-0.5 text-emerge-400 shrink-0">✓</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Stat callout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-12 rounded-2xl gradient-border p-8 text-center"
      >
        <p className="text-4xl md:text-5xl font-display font-normal text-foreground mb-3">
          <span className="gradient-text">15 hours</span> saved per week.
        </p>
        <p className="text-muted-foreground">
          Average time reclaimed by LeverageOS users in their first 30 days — across all professions.
        </p>
      </motion.div>
    </section>
  )
}
