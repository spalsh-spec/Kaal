'use client'

import { motion } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/data'
import { cn } from '@/lib/utils'

export function Testimonials() {
  return (
    <section className="section-pad bg-muted/10 border-y border-border/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs text-volta-400 tracking-widest uppercase font-medium mb-4">Real People. Real Results.</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-normal tracking-tight mb-4">
            They were exactly like you.
          </h2>
          <p className="text-lg text-muted-foreground">
            Non-technical. Busy. Skeptical that AI could actually change their work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6 flex flex-col gap-4 hover:border-white/20 transition-all group"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <span key={s} className="text-amber-400 text-sm">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-foreground/80 leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Result badge */}
              <div className="px-3 py-1.5 rounded-lg bg-emerge-500/10 border border-emerge-500/20 self-start">
                <span className="text-xs font-semibold text-emerge-400">{t.result}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-border/50">
                <div
                  className={cn(
                    'w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 bg-gradient-to-br',
                    t.gradient
                  )}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
