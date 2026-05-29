'use client'

import Link from 'next/link'
import { DeviceMockup } from '@/components/device-mockup'

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-black px-6 pt-28 pb-20">
      {/* Ambient light */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[600px] max-w-[92vw] rounded-full opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.6) 0%, rgba(99,102,241,0.1) 50%, transparent 70%)' }}
        />
      </div>

      {/* Product visual */}
      <div className="relative z-10 w-full max-w-[540px]">
        <DeviceMockup />
      </div>

      {/* Slogan + CTAs */}
      <div className="relative z-10 mt-10 flex flex-col items-center gap-5">
        <div>
          <h1 className="text-5xl sm:text-6xl font-display font-normal text-white tracking-tight leading-tight">
            Outwork the <span className="italic gradient-text">world.</span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-white/70">
            AI superpowers, delivered. Pre-loaded for your field, ready on day one. From $5,000.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/devices#configurator"
            className="px-10 py-2.5 rounded bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
          >
            Order Now
          </Link>
          <Link
            href="/how-it-works"
            className="px-10 py-2.5 rounded bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors border border-white/20"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
