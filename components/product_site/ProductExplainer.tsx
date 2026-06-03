'use client'

// "Built for your profession." panel — target-user chips. Identical to original.

import { Heading, PanelCtas, resolveLucide } from './_shared'
import type { ExplainerConfig, OrderConfig } from '@/types/product'

export function ProductExplainer({ data, order, orderLabel }: { data: ExplainerConfig; order: OrderConfig; orderLabel: string }) {
  return (
    <section id="profession" className="panel snap-panel sun-panel">
      <Heading dark eyebrow={data.eyebrow} title={data.title} subtitle={data.subtitle} />
      <div className="relative z-10 flex-1 flex items-center w-full">
        <div className="px-5 w-full max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {data.chips.map((c) => {
              const Icon = resolveLucide(c.icon)
              return (
                <span
                  key={c.label}
                  className="inline-flex items-center gap-2 pl-3.5 pr-4 py-2.5 rounded-full bg-white/15 border border-white/30 text-white text-sm font-semibold backdrop-blur shadow-sm transition-colors duration-300 hover:bg-white/25"
                >
                  <Icon className="w-4 h-4 shrink-0" strokeWidth={2.25} /> {c.label}
                </span>
              )
            })}
          </div>
        </div>
      </div>
      <PanelCtas dark order={order} primaryText={orderLabel} secondary={data.secondary_button} />
    </section>
  )
}
