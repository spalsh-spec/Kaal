'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { PRICING_TIERS } from '@/lib/data'
import { formatPrice } from '@/lib/utils'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Pricing() {
  return (
    <section className="section-pad max-w-7xl mx-auto px-6" id="pricing">
      <div className="text-center mb-16">
        <p className="text-xs text-volta-400 tracking-widest uppercase font-medium mb-4">Simple Pricing</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-normal tracking-tight mb-4">
          One purchase. A lifetime of leverage.
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          No subscription for the device. Stack Updates are included for 3–6 months.
          Pay once, use forever.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 items-start">
        {PRICING_TIERS.map((tier, i) => (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className={cn(
              'relative rounded-2xl border p-8 flex flex-col gap-6',
              tier.popular
                ? 'bg-card border-volta-500/50 shadow-2xl shadow-volta-500/10'
                : 'bg-card/50'
            )}
          >
            {tier.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <Badge variant="volta" className="px-4 py-1 text-xs font-semibold shadow-lg">
                  Most Popular
                </Badge>
              </div>
            )}

            {/* Header */}
            <div>
              <h3 className="text-xl font-semibold mb-1">{tier.name}</h3>
              <p className="text-sm text-muted-foreground">{tier.tagline}</p>
            </div>

            {/* Price */}
            <div>
              {tier.priceOnce ? (
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight">
                      {formatPrice(tier.priceOnce)}
                    </span>
                    <span className="text-muted-foreground text-sm">one time</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Hardware included. No monthly fee for the device.
                  </p>
                </div>
              ) : (
                <div>
                  <span className="text-3xl font-bold text-foreground">Custom</span>
                  <p className="text-xs text-muted-foreground mt-1">Volume & enterprise pricing available</p>
                </div>
              )}
            </div>

            {/* Features */}
            <ul className="flex flex-col gap-2.5 flex-1">
              {tier.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2
                    className={cn(
                      'h-4 w-4 mt-0.5 shrink-0',
                      tier.popular ? 'text-volta-400' : 'text-emerge-400'
                    )}
                  />
                  <span className={item.startsWith('Everything') ? 'text-muted-foreground italic' : ''}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Add-ons */}
            {tier.addons.length > 0 && (
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Add-ons</p>
                <ul className="space-y-1">
                  {tier.addons.map((a) => (
                    <li key={a} className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <span className="text-muted-foreground/40">+</span> {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA */}
            <Button
              asChild
              variant={tier.popular ? 'volta' : 'white-outline'}
              size="lg"
              className="w-full"
            >
              <Link href={tier.id === 'team' ? '/consulting' : '/devices#configurator'}>
                {tier.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-sm text-muted-foreground mt-8">
        All devices include full hardware warranty. Free returns within 30 days if you don&apos;t love it.
      </p>
    </section>
  )
}
