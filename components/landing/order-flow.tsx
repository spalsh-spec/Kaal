'use client'

import { useEffect, useState, useCallback } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, ArrowLeft, Check, Loader2, PartyPopper } from 'lucide-react'
import { PLANS, CADENCES, SUPPORT_LEVELS } from '@/lib/landing-data'
import { OPEN_ORDER_EVENT } from '@/lib/order-bus'

const STEPS = ['Product', 'Plan', 'Support', 'Review', 'Done'] as const

export function OrderFlow() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(0)
  const [product, setProduct] = useState<'normal' | 'pro'>('pro')
  const [cadence, setCadence] = useState<'monthly' | 'annual'>('annual')
  const [support, setSupport] = useState<string>('ready')
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  // Open via global event, or via ?order=1 when arriving from another page.
  useEffect(() => {
    const onOpen = () => { setOpen(true) }
    window.addEventListener(OPEN_ORDER_EVENT, onOpen)
    const params = new URLSearchParams(window.location.search)
    if (params.get('order') === '1') {
      setOpen(true)
      params.delete('order')
      const qs = params.toString()
      window.history.replaceState({}, '', window.location.pathname + (qs ? `?${qs}` : ''))
    }
    return () => window.removeEventListener(OPEN_ORDER_EVENT, onOpen)
  }, [])

  // Reset shortly after closing so re-open starts clean.
  useEffect(() => {
    if (open) return
    const t = setTimeout(() => { setStep(0); setSubmitting(false); setDone(false) }, 250)
    return () => clearTimeout(t)
  }, [open])

  const next = useCallback(() => setStep((s) => Math.min(s + 1, STEPS.length - 1)), [])
  const back = useCallback(() => setStep((s) => Math.max(s - 1, 0)), [])

  const submit = useCallback(() => {
    setSubmitting(true)
    // Processing micro-animation, then success placeholder.
    // TODO(checkout): wire to Stripe / waitlist endpoint here.
    setTimeout(() => { setSubmitting(false); setDone(true); setStep(4) }, 1600)
  }, [])

  const plan = PLANS.find((p) => p.id === product)!

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[80] bg-black/55 backdrop-blur-sm data-[state=open]:animate-[fade-in_.25s_ease]" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-[90] w-[calc(100vw-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-background shadow-2xl focus:outline-none"
          aria-describedby={undefined}
        >
          {/* Header + stepper */}
          <div className="flex items-center justify-between px-6 pt-5">
            <Dialog.Title className="font-display text-xl tracking-tight">Order Leverage OS</Dialog.Title>
            <Dialog.Close className="p-1.5 rounded-[5px] hover:bg-muted transition-colors" aria-label="Close">
              <X className="w-5 h-5" />
            </Dialog.Close>
          </div>
          <Stepper step={step} />

          <div className="px-6 pb-6 min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.32, ease: [0.2, 0.7, 0.2, 1] }}
              >
                {step === 0 && (
                  <Stage title="Choose your product" hint="The two Leverage OS editions.">
                    {PLANS.map((p) => (
                      <Selectable key={p.id} selected={product === p.id} onClick={() => setProduct(p.id)}
                        title={p.name} body={p.for} right={`${p.price}/mo`} />
                    ))}
                  </Stage>
                )}
                {step === 1 && (
                  <Stage title="Choose your plan" hint="How you’d like to pay.">
                    {CADENCES.map((c) => (
                      <Selectable key={c.id} selected={cadence === c.id} onClick={() => setCadence(c.id as 'monthly' | 'annual')}
                        title={c.name} body={c.body} right={c.note} />
                    ))}
                  </Stage>
                )}
                {step === 2 && (
                  <Stage title="Choose support level" hint="How hands-on you want us to be.">
                    {SUPPORT_LEVELS.map((s) => (
                      <Selectable key={s.id} selected={support === s.id} onClick={() => setSupport(s.id)}
                        title={s.name} body={s.body} />
                    ))}
                  </Stage>
                )}
                {step === 3 && (
                  <Review product={plan.name} price={plan.price} cadence={cadence}
                          support={SUPPORT_LEVELS.find((s) => s.id === support)?.name ?? ''} />
                )}
                {step === 4 && <DoneStage />}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer controls */}
          {step < 4 && (
            <div className="flex items-center justify-between gap-3 px-6 py-4 border-t border-border">
              <button onClick={back} disabled={step === 0}
                className="btn-box-outline px-5 py-2.5 text-sm disabled:opacity-40 disabled:pointer-events-none">
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              {step < 3 ? (
                <button onClick={next} className="btn-box-primary px-7 py-2.5 text-sm">
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button onClick={submit} disabled={submitting} className="btn-box-gold px-7 py-2.5 text-sm min-w-[180px]">
                  {submitting ? <Processing /> : <>Submit interest <ArrowRight className="w-4 h-4" /></>}
                </button>
              )}
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

// ── Sub-components ───────────────────────────────
function Stepper({ step }: { step: number }) {
  return (
    <div className="px-6 pt-4 pb-2">
      <div className="flex items-center gap-2">
        {STEPS.map((label, i) => (
          <div key={label} className="flex items-center gap-2 flex-1 last:flex-none">
            <div className={`flex items-center gap-2 ${i <= step ? 'text-volta-700' : 'text-muted-foreground'}`}>
              <span className={`grid place-items-center w-6 h-6 rounded-[5px] text-xs font-semibold transition-colors duration-300 ${
                i < step ? 'bg-volta-600 text-white' : i === step ? 'bg-volta-100 text-volta-700 ring-1 ring-volta-500' : 'bg-muted'
              }`}>
                {i < step ? <Check className="w-3.5 h-3.5" /> : i + 1}
              </span>
              <span className="hidden sm:block text-xs font-medium">{label}</span>
            </div>
            {i < STEPS.length - 1 && (
              <span className={`flex-1 h-px transition-colors duration-300 ${i < step ? 'bg-volta-500' : 'bg-border'}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function Stage({ title, hint, children }: { title: string; hint: string; children: React.ReactNode }) {
  return (
    <div className="pt-2">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{hint}</p>
      <div className="mt-4 grid gap-3">{children}</div>
    </div>
  )
}

function Selectable({ selected, onClick, title, body, right }:
  { selected: boolean; onClick: () => void; title: string; body: string; right?: string }) {
  return (
    <button onClick={onClick} data-selected={selected}
      className="select-card text-left rounded-xl border border-border bg-card p-4 flex items-start gap-3">
      <span className={`mt-0.5 grid place-items-center w-5 h-5 rounded-full border-2 shrink-0 transition-colors duration-200 ${
        selected ? 'border-volta-600 bg-volta-600 text-white' : 'border-border'
      }`}>
        {selected && <Check className="w-3 h-3" />}
      </span>
      <span className="flex-1">
        <span className="flex items-center justify-between gap-2">
          <span className="font-semibold">{title}</span>
          {right && <span className="text-sm text-volta-700 font-medium">{right}</span>}
        </span>
        <span className="block text-sm text-muted-foreground mt-0.5">{body}</span>
      </span>
    </button>
  )
}

function Review({ product, price, cadence, support }:
  { product: string; price: string; cadence: string; support: string }) {
  const rows = [
    ['Product', `Leverage OS — ${product}`],
    ['Price', `${price} / month`],
    ['Plan', cadence === 'annual' ? 'Annual (two months free)' : 'Monthly'],
    ['Support', support],
  ]
  return (
    <div className="pt-2">
      <h3 className="text-lg font-semibold">Review your order</h3>
      <p className="text-sm text-muted-foreground">Check it over, then submit your interest.</p>
      <div className="mt-4 rounded-xl border border-border divide-y divide-border overflow-hidden">
        {rows.map(([k, v]) => (
          <div key={k} className="flex items-center justify-between px-4 py-3">
            <span className="text-sm text-muted-foreground">{k}</span>
            <span className="text-sm font-medium text-right">{v}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        No payment taken now — this registers your interest. Checkout is a placeholder for the demo.
      </p>
    </div>
  )
}

function Processing() {
  return (
    <span className="flex items-center gap-2">
      <Loader2 className="w-4 h-4 animate-spin" /> Processing…
    </span>
  )
}

function DoneStage() {
  return (
    <div className="pt-8 pb-4 text-center">
      <motion.span initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 220, damping: 16 }}
        className="inline-grid place-items-center w-16 h-16 rounded-full text-white mb-4"
        style={{ backgroundImage: 'linear-gradient(135deg,#f59e0b,#fb7185)' }}>
        <PartyPopper className="w-8 h-8" />
      </motion.span>
      <h3 className="text-2xl font-display tracking-tight">You’re on the list, Parth.</h3>
      <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
        Thanks for your interest in Leverage OS. We’ll be in touch shortly — your rising-star era starts now.
      </p>
      <Dialog.Close className="btn-box-primary mt-6 px-7 py-2.5 text-sm">Done</Dialog.Close>
    </div>
  )
}
