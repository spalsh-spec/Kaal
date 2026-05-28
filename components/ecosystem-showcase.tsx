'use client'

import { motion } from 'framer-motion'
import { ECOSYSTEM_TOOLS } from '@/lib/data'
import { Badge } from '@/components/ui/badge'

const CATEGORIES = ['All', 'Core AI', 'Research', 'Creative', 'Productivity', 'Business'] as const
type Category = typeof CATEGORIES[number]

export function EcosystemShowcase() {
  return (
    <section className="section-pad bg-muted/10 border-y border-border/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs text-volta-400 tracking-widest uppercase font-medium mb-4">The Ecosystem</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-normal tracking-tight mb-4">
            Every tool. Ready on day one.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            We don&apos;t just install software. We authenticate, configure, and optimize
            every single tool for the way you work.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {ECOSYSTEM_TOOLS.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -2 }}
              className="glass rounded-xl p-4 group cursor-default"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-xl">
                  {tool.logo}
                </div>
                <Badge variant="volta" className="text-[10px] py-0">
                  {tool.category}
                </Badge>
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1 group-hover:text-volta-300 transition-colors">
                {tool.name}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{tool.description}</p>

              <div className="mt-3 flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerge-400" />
                <span className="text-[10px] text-emerge-400 font-medium">Pre-configured</span>
              </div>
            </motion.div>
          ))}

          {/* Placeholder — "More each month" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: ECOSYSTEM_TOOLS.length * 0.05 }}
            className="rounded-xl border-2 border-dashed border-border/40 p-4 flex flex-col items-center justify-center text-center"
          >
            <div className="w-10 h-10 rounded-lg bg-volta-500/10 flex items-center justify-center text-2xl mb-3">
              +
            </div>
            <p className="text-sm font-medium text-muted-foreground">New tools monthly</p>
            <p className="text-xs text-muted-foreground mt-1">Stack Updates arrive automatically</p>
          </motion.div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          12 tools at launch · Growing every month with your Stack Update ·{' '}
          <span className="text-volta-400">Always current, never outdated</span>
        </p>
      </div>
    </section>
  )
}
