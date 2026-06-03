'use client'

// "Normal. Pro. Max." trims/plans panel. Identical to the original for 3 plans;
// gracefully centres for 2 plans. The featured plan gets the blue ring + lift.

import { Check } from 'lucide-react'
import { Heading, PanelCtas } from './_shared'
import { formatPrice } from '@/lib/utils'
import type { PlansConfig, Plan, OrderConfig } from '@/types/product'

function priceText(p: Plan): string {
  if (p.price_label) return p.price_label
  if (typeof p.delta_cents === 'number') return p.delta_cents === 0 ? 'Included' : `+${formatPrice(p.delta_cents)}`
  return ''
}

export function PlanCards({ data, order, orderLabel }: { data: PlansConfig; order: OrderConfig; orderLabel: string }) {
  const featuredBadge = data.featured_badge ?? 'Recommended'
  const two = data.items.length === 2
  return (
    <section id="trims" className="panel snap-panel bg-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <Heading dark={false} eyebrow={data.eyebrow} title={data.title} subtitle={data.subtitle} />
      <div className={`relative z-10 mt-10 px-5 w-full ${two ? 'max-w-3xl' : 'max-w-5xl'}`}>
        <div className={`grid gap-4 ${two ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
          {data.items.map((opt) => {
            const featured = opt.badge === featuredBadge
            return (
              <div
                key={opt.id}
                className={`rounded-2xl p-6 text-left transition-transform duration-300 ${
                  featured
                    ? 'border-2 border-volta-500 bg-card ring-4 ring-volta-500/15 shadow-xl md:scale-[1.04] relative z-10'
                    : 'border border-border bg-card shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold">{opt.name}</h3>
                  {opt.badge && (
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-[5px] ${featured ? 'bg-volta-600 text-white' : 'bg-secondary text-secondary-foreground'}`}>
                      {opt.badge}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-base text-muted-foreground">{opt.one_line_description}</p>
                {opt.best_for && <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-volta-600">Best for {opt.best_for}</p>}
                <ul className="mt-4 space-y-1.5">
                  {opt.features.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm font-medium">
                      <Check className="w-4 h-4 text-volta-600 shrink-0" /> {s}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-lg font-semibold text-volta-700">{priceText(opt)}</p>
              </div>
            )
          })}
        </div>
      </div>
      <PanelCtas dark={false} order={order} primaryText={orderLabel} secondary={data.secondary_button} />
    </section>
  )
}
