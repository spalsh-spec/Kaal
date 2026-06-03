'use client'

// "Set up in 3 simple steps." panel — numbered cards. Identical to the original.

import { Heading, PanelCtas, resolveLucide } from './_shared'
import type { HowItWorksConfig, OrderConfig } from '@/types/product'

export function HowItWorks({ data, order, orderLabel }: { data: HowItWorksConfig; order: OrderConfig; orderLabel: string }) {
  return (
    <section id="how" className="panel snap-panel bg-background">
      <Heading dark={false} eyebrow={data.eyebrow} title={data.title} subtitle={data.subtitle} />
      <div className="relative z-10 w-full flex-1 flex items-center justify-center px-5 py-6">
        <div className="grid gap-5 md:grid-cols-3 max-w-5xl w-full">
          {data.steps.map((s, i) => {
            const Icon = resolveLucide(s.icon)
            return (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-7 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <span
                    className="grid place-items-center w-11 h-11 rounded-full text-white text-lg font-bold"
                    style={{ backgroundImage: 'linear-gradient(135deg,#0038B8,#4d84f5)' }}
                  >
                    {i + 1}
                  </span>
                  <Icon className="w-6 h-6 text-volta-600" />
                </div>
                <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-base text-muted-foreground">{s.body}</p>
              </div>
            )
          })}
        </div>
      </div>
      <PanelCtas dark={false} order={order} primaryText={orderLabel} secondary={data.secondary_button} />
    </section>
  )
}
