'use client'

// Final CTA band — "One purchase. A lifetime of leverage." Identical to original.
// Owns id="order" in configurator mode (anchor only). In inline mode the
// OrderFlow owns id="order", so this band uses id="final-cta".

import { motion } from 'framer-motion'
import { fade, SmartCta } from './_shared'
import type { FooterCtaConfig, OrderConfig } from '@/types/product'

export function FooterCTA({ data, order }: { data: FooterCtaConfig; order: OrderConfig }) {
  const id = order.mode === 'configurator' ? 'order' : 'final-cta'
  return (
    <section id={id} className="panel snap-panel kaal-panel">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="m-auto flex flex-col items-center text-center px-5 z-10">
        <motion.div {...fade} className="max-w-2xl">
          <p className="text-xs sm:text-sm uppercase tracking-[0.26em] font-semibold text-amber-300">{data.eyebrow}</p>
          <h2 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white text-balance">
            {data.title}
          </h2>
          <p className="mt-4 text-lg sm:text-xl font-medium text-white/85 text-balance">{data.subtitle}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <SmartCta cta={data.primary_button} order={order} className="tbtn tbtn-gold" />
            <SmartCta cta={data.secondary_button} order={order} className="tbtn tbtn-ghost" />
          </div>
          {data.note && <p className="mt-5 text-sm font-medium text-white/75">{data.note}</p>}
        </motion.div>
      </div>
    </section>
  )
}
