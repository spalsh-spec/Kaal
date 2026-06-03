'use client'

// Reusable, self-contained staged order flow: plan → support → review → submit.
// Used when order.mode === 'inline' (products without a bespoke configurator).
// Submit is a placeholder (no payment) — it shows a confirmation state.

import { useState } from 'react'
import { Check, ArrowRight, ArrowLeft, PartyPopper } from 'lucide-react'
import { Heading } from './_shared'
import { formatPrice } from '@/lib/utils'
import type { Product, Plan } from '@/types/product'

function priceText(p: Plan): string {
  if (p.price_label) return p.price_label
  if (typeof p.delta_cents === 'number') return p.delta_cents === 0 ? 'Included' : `+${formatPrice(p.delta_cents)}`
  return ''
}

const STEPS = ['Plan', 'Support', 'Review'] as const

export function OrderFlow({ product }: { product: Product }) {
  const plans = product.plans?.items ?? []
  const supports = product.order.support_options ?? []
  const [step, setStep] = useState(0)
  const [planId, setPlanId] = useState(plans[0]?.id ?? '')
  const [supportId, setSupportId] = useState(supports[0]?.id ?? '')
  const [done, setDone] = useState(false)

  const plan = plans.find((p) => p.id === planId)
  const support = supports.find((s) => s.id === supportId)

  const card = (selected: boolean) =>
    `text-left rounded-2xl p-5 border transition-all w-full ${
      selected ? 'border-2 border-volta-500 ring-4 ring-volta-500/15 bg-card shadow-md' : 'border-border bg-card hover:border-volta-500/50'
    }`

  return (
    <section id="order" className="panel snap-panel bg-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <Heading dark={false} eyebrow="Order" title={`Get ${product.identity.product_name}`} subtitle="A few quick choices — no payment yet." />

      <div className="relative z-10 w-full flex-1 flex items-center justify-center px-5 py-6">
        <div className="w-full max-w-3xl">
          {done ? (
            <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-sm">
              <span className="grid place-items-center w-14 h-14 mx-auto rounded-full bg-volta-500/10 border border-volta-500/20">
                <PartyPopper className="w-7 h-7 text-volta-600" />
              </span>
              <h3 className="mt-4 text-2xl font-bold">You’re on the list.</h3>
              <p className="mt-2 text-muted-foreground">
                {product.order.submit_note || 'Thanks — we’ll be in touch shortly.'}
              </p>
              <p className="mt-4 text-sm font-medium">
                {plan?.name} {support ? `· ${support.name}` : ''}
              </p>
              <button onClick={() => { setDone(false); setStep(0) }} className="tbtn tbtn-ghost-dark mt-6">Start over</button>
            </div>
          ) : (
            <>
              {/* Step indicator */}
              <div className="flex items-center justify-center gap-2 mb-6">
                {STEPS.map((label, i) => (
                  <div key={label} className="flex items-center gap-2">
                    <span className={`grid place-items-center w-7 h-7 rounded-full text-xs font-bold ${i <= step ? 'bg-volta-600 text-white' : 'bg-secondary text-secondary-foreground'}`}>{i + 1}</span>
                    <span className={`text-sm font-semibold ${i === step ? 'text-foreground' : 'text-muted-foreground'}`}>{label}</span>
                    {i < STEPS.length - 1 && <span className="w-6 h-px bg-border" />}
                  </div>
                ))}
              </div>

              {step === 0 && (
                <div className="grid gap-3 sm:grid-cols-2">
                  {plans.map((p) => (
                    <button key={p.id} onClick={() => setPlanId(p.id)} className={card(p.id === planId)}>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold">{p.name}</span>
                        <span className="text-sm font-semibold text-volta-700">{priceText(p)}</span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{p.one_line_description}</p>
                    </button>
                  ))}
                </div>
              )}

              {step === 1 && (
                <div className="grid gap-3 sm:grid-cols-2">
                  {supports.length === 0 && <p className="text-muted-foreground">No add-ons — continue to review.</p>}
                  {supports.map((s) => (
                    <button key={s.id} onClick={() => setSupportId(s.id)} className={card(s.id === supportId)}>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold">{s.name}</span>
                        {s.price_label && <span className="text-sm font-semibold text-volta-700">{s.price_label}</span>}
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{s.blurb}</p>
                    </button>
                  ))}
                </div>
              )}

              {step === 2 && (
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-4">Review your selection</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Product</span>
                      <span className="text-sm font-semibold">{product.identity.product_name}</span>
                    </li>
                    {plan && (
                      <li className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Plan</span>
                        <span className="text-sm font-semibold">{plan.name} · {priceText(plan)}</span>
                      </li>
                    )}
                    {support && (
                      <li className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Support</span>
                        <span className="text-sm font-semibold">{support.name}{support.price_label ? ` · ${support.price_label}` : ''}</span>
                      </li>
                    )}
                  </ul>
                  <ul className="mt-5 space-y-1.5">
                    {plan?.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm font-medium"><Check className="w-4 h-4 text-volta-600 shrink-0" /> {f}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Nav */}
              <div className="mt-6 flex items-center justify-between">
                <button
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  className={`tbtn tbtn-ghost-dark ${step === 0 ? 'invisible' : ''}`}
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                {step < STEPS.length - 1 ? (
                  <button onClick={() => setStep((s) => s + 1)} className="tbtn tbtn-gold">Continue <ArrowRight className="w-4 h-4" /></button>
                ) : (
                  <button onClick={() => setDone(true)} className="tbtn tbtn-gold">{product.order.submit_label || 'Submit'} <ArrowRight className="w-4 h-4" /></button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
