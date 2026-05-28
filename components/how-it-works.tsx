'use client'

import { motion } from 'framer-motion'
import { HOW_IT_WORKS_STEPS } from '@/lib/data'

export function HowItWorks() {
  return (
    <section className="section-pad bg-muted/20 border-y border-border/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs text-volta-400 tracking-widest uppercase font-medium mb-4">The Process</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-normal tracking-tight mb-4">
            From order to operating.
          </h2>
          <p className="text-lg text-muted-foreground">Four steps. Two to four weeks. Then: everything changes.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {HOW_IT_WORKS_STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative flex flex-col items-center text-center p-6"
            >
              {/* Step number circle */}
              <div className="relative mb-6 z-10">
                <div className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center shadow-xl shadow-black/20">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-volta-500 flex items-center justify-center">
                  <span className="text-[9px] font-bold text-white">{i + 1}</span>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-3 text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
