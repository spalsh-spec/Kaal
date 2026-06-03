'use client'

// OPTIONAL named-modules grid (Flowchart, Tech Support, Buy & Forget, Ready to
// Use, Live Examples, Super Ads, Videos & Images). Off for Leverage OS; renders
// only when enabled. Uses the same card visual language as the rest of the site.

import { Heading, PanelCtas, resolveLucide } from './_shared'
import type { SupportModulesConfig, OrderConfig } from '@/types/product'

export function SupportModules({ data, order, orderLabel }: { data: SupportModulesConfig; order: OrderConfig; orderLabel: string }) {
  const modules = data.modules.filter((m) => m.enabled)
  if (!modules.length) return null
  return (
    <section id="modules" className="panel snap-panel bg-background">
      <Heading dark={false} eyebrow={data.eyebrow} title={data.title} subtitle={data.subtitle} />
      <div className="relative z-10 w-full flex-1 flex items-center justify-center px-5 py-6">
        <div className="grid gap-5 md:grid-cols-3 max-w-5xl w-full">
          {modules.map((m) => {
            const Icon = resolveLucide(m.icon)
            return (
              <div key={m.key} className="rounded-2xl border border-border bg-card p-7 text-left">
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-volta-500/10 border border-volta-500/20">
                  <Icon className="w-6 h-6 text-volta-600" strokeWidth={2} />
                </span>
                <h3 className="mt-4 text-xl font-bold">{m.title}</h3>
                <p className="mt-2 text-base text-muted-foreground">{m.description}</p>
                {m.image && <img src={m.image} alt={m.title} className="mt-4 w-full rounded-xl border border-border object-cover" />}
                {m.video && <video src={m.video} className="mt-4 w-full rounded-xl border border-border" muted loop playsInline controls />}
              </div>
            )
          })}
        </div>
      </div>
      <PanelCtas dark={false} order={order} primaryText={orderLabel} secondary={data.secondary_button} />
    </section>
  )
}
