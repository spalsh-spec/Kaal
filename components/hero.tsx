'use client'

import Link from 'next/link'
import { DeviceMockup } from '@/components/device-mockup'

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-background px-6 pt-28 pb-20">
      {/* Warm saffron ambient light */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[640px] h-[640px] max-w-[92vw] rounded-full opacity-40 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(232,150,60,0.55) 0%, rgba(232,150,60,0.12) 50%, transparent 70%)' }}
        />
      </div>

      {/* Product visual */}
      <div className="relative z-10 w-full max-w-[540px]">
        <DeviceMockup />
      </div>

      {/* Slogan + CTAs */}
      <div className="relative z-10 mt-10 flex flex-col items-center gap-5">
        <div className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.28em] text-volta-600 font-medium">AI, with intent</p>
          <h1 className="text-5xl sm:text-6xl font-display font-normal text-foreground tracking-tight leading-tight">
            Outwork the <span className="italic gradient-text">world.</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
            AI superpowers, delivered. Pre-loaded for your field, ready on day one. From $5,000.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/devices#configurator"
            className="px-10 py-2.5 rounded-lg bg-volta-500 text-white text-sm font-medium hover:bg-volta-600 transition-colors shadow-sm shadow-volta-500/25"
          >
            Order Now
          </Link>
          <Link
            href="/how-it-works"
            className="px-10 py-2.5 rounded-lg bg-transparent text-foreground text-sm font-medium hover:bg-muted transition-colors border border-border"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
