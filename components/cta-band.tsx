'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { WaitlistForm } from '@/components/waitlist-form'
import { ArrowRight } from 'lucide-react'

export function CtaBand() {
  return (
    <section className="section-pad relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-volta-950/30 to-background" />
      <div
        className="absolute inset-0 blur-3xl opacity-30"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99,102,241,0.4) 0%, transparent 60%)',
        }}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-xs text-volta-400 tracking-widest uppercase font-medium">
            Join 2,400+ professionals
          </p>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-normal tracking-tight">
            The future of work
            <br />
            <span className="font-display italic gradient-text">starts here.</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Join the waitlist. Get early access pricing. Be the first person in
            your field to operate at 10× capacity.
          </p>

          <WaitlistForm
            className="max-w-md mx-auto"
            placeholder="your@email.com"
            cta="Get Early Access"
          />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="volta" size="xl">
              <Link href="/devices#configurator">
                Build Your Device Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="xl">
              <Link href="/consulting">Talk to a human first →</Link>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            No spam. No pressure. Just a heads-up when it&apos;s ready to ship.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
