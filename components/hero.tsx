'use client'

import Link from 'next/link'

export function Hero() {
  return (
    <section
      className="relative h-screen flex flex-col items-center justify-end pb-24 text-center overflow-hidden bg-black"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60" />

      {/* Abstract ambient light */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.6) 0%, rgba(99,102,241,0.1) 50%, transparent 70%)' }}
        />
      </div>

      {/* Laptop silhouette placeholder — centered */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[560px] h-[320px] rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center">
          <div className="w-[480px] h-[260px] rounded-lg bg-gradient-to-br from-white/5 to-white/[0.02] flex items-center justify-center">
            <span className="text-white/20 text-sm font-mono">LeverageOS Gen 1</span>
          </div>
        </div>
      </div>

      {/* Bottom text — Tesla style */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight leading-tight">LeverageOS Gen 1</h1>
          <p className="mt-2 text-base text-white/70">AI superpowers, delivered. Starting at $1,899.</p>
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
