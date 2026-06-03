'use client'

// Social-proof panel — trust row + testimonial cards. Identical to the original
// for 3 testimonials; gracefully centres for 2.

import { Quote } from 'lucide-react'
import { Heading, PanelCtas, resolveLucide } from './_shared'
import type { ProofConfig, OrderConfig } from '@/types/product'

export function SocialProof({ data, order, orderLabel }: { data: ProofConfig; order: OrderConfig; orderLabel: string }) {
  const two = data.testimonials.length === 2
  return (
    <section id="proof" className="panel snap-panel bg-secondary/40 border-y border-border">
      <Heading dark={false} eyebrow={data.eyebrow} title={data.title} subtitle={data.subtitle} />

      <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center px-5 gap-8 py-6">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {data.trust.map((t) => {
            const Icon = resolveLucide(t.icon)
            return (
              <span key={t.label} className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/80">
                <Icon className="w-4 h-4 text-volta-600" /> {t.label}
              </span>
            )
          })}
        </div>

        <div className={`grid gap-4 w-full ${two ? 'md:grid-cols-2 max-w-3xl' : 'md:grid-cols-3 max-w-5xl'}`}>
          {data.testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border bg-card p-6 text-left flex flex-col shadow-sm">
              <Quote className="w-6 h-6 text-volta-500/40" />
              <blockquote className="mt-2 text-base font-medium text-foreground/90 flex-1 leading-relaxed">{`“${t.text}”`}</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span className={`grid place-items-center w-10 h-10 rounded-full text-white text-sm font-semibold bg-gradient-to-br ${t.gradient}`}>{t.avatar}</span>
                <span>
                  <span className="block text-sm font-semibold">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
              <span className="mt-3 self-start text-xs font-semibold px-2.5 py-1 rounded-[5px] bg-volta-50 text-volta-700">{t.result}</span>
            </figure>
          ))}
        </div>
      </div>

      <PanelCtas dark={false} order={order} primaryText={orderLabel} secondary={data.secondary_button} />
    </section>
  )
}
