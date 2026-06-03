'use client'

// "Your entire AI stack. As one." panel — the included-tools grid. Identical to
// the original. Items with a brand key show the official mark; items without
// show a clean monogram tile (so non-AI products look right too).

import { Heading, PanelCtas, BrandMark } from './_shared'
import type { StackConfig, OrderConfig } from '@/types/product'

export function StackGrid({ data, order, orderLabel }: { data: StackConfig; order: OrderConfig; orderLabel: string }) {
  return (
    <section id="stack" className="panel snap-panel bg-slate-950">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <Heading dark eyebrow={data.eyebrow} title={data.title} subtitle={data.subtitle} />
      <div className="relative z-10 mt-10 px-5 w-full max-w-4xl">
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {data.items.map((b) => (
            <div
              key={b.name}
              className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-4 text-center backdrop-blur transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5"
            >
              <BrandMark brand={b.brand} name={b.name} size={24} />
              <span className="text-xs sm:text-sm font-semibold text-white leading-tight">{b.name}</span>
              <span className="hidden sm:block text-[10px] text-white/55 leading-tight">{b.desc}</span>
            </div>
          ))}
        </div>
      </div>
      <PanelCtas dark order={order} primaryText={orderLabel} secondary={data.secondary_button} />
    </section>
  )
}
