'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PROFESSIONS } from '@/lib/data'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Professions() {
  const [active, setActive] = useState<string>(PROFESSIONS[0].id)
  const activeProfession = PROFESSIONS.find((p) => p.id === active)!

  return (
    <section className="section-pad max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-xs text-volta-400 tracking-widest uppercase font-medium mb-4">Built for Your World</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-normal tracking-tight mb-4">
          Every profession. Every stack. <br />
          <span className="font-display italic text-muted-foreground">Exactly right.</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          We don&apos;t ship a generic AI device. We ship{' '}
          <em className="not-italic text-foreground font-medium">your</em> AI device.
        </p>
      </div>

      <div className="grid lg:grid-cols-[280px_1fr] gap-6">
        {/* Profession selector */}
        <div className="flex flex-col gap-2">
          {PROFESSIONS.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200',
                active === p.id
                  ? 'bg-volta-500/15 border border-volta-500/30 text-foreground'
                  : 'hover:bg-muted/50 border border-transparent text-muted-foreground hover:text-foreground'
              )}
            >
              <span className="text-xl">{p.emoji}</span>
              <span className="text-sm font-medium">{p.label}</span>
              {active === p.id && (
                <ArrowRight className="ml-auto h-4 w-4 text-volta-400 shrink-0" />
              )}
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className={cn(
              'rounded-2xl border p-8 bg-gradient-to-br relative overflow-hidden',
              activeProfession.color,
              activeProfession.border
            )}
          >
            <div className="absolute top-0 right-0 text-[120px] opacity-5 leading-none select-none pointer-events-none">
              {activeProfession.emoji}
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{activeProfession.emoji}</span>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{activeProfession.label}</h3>
                  <p className="text-muted-foreground text-sm">{activeProfession.tagline}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                {/* Tools included */}
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Included in your stack</p>
                  <ul className="space-y-2">
                    {activeProfession.tools.map((tool) => (
                      <li key={tool} className="flex items-center gap-2 text-sm text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-volta-400 flex-shrink-0" />
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Wins */}
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">What you&apos;ll achieve</p>
                  <ul className="space-y-2">
                    {activeProfession.wins.map((win) => (
                      <li key={win} className="flex items-center gap-2 text-sm text-foreground/80">
                        <span className="text-emerge-400">✓</span>
                        {win}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                  Pre-configured. Pre-authenticated. Ready when you are.
                </p>
                <Button asChild variant="volta" size="default">
                  <Link href={`/for-your-field#${active}`}>
                    See full stack
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
