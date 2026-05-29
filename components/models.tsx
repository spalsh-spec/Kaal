import Link from 'next/link'
import { DeviceMockup } from '@/components/device-mockup'

export function Models() {
  return (
    <section className="bg-background border-t border-border">
      <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden">
        {/* Warm saffron glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-[640px] h-[640px] max-w-[92vw] rounded-full opacity-30 blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(232,150,60,0.5) 0%, transparent 70%)' }}
          />
        </div>

        {/* The one device */}
        <div className="relative z-10 w-full max-w-[520px]">
          <DeviceMockup />
        </div>

        <div className="relative z-10 mt-10 flex flex-col items-center gap-5">
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.28em] text-volta-600 font-medium">One device. Fully loaded.</p>
            <h2 className="text-4xl sm:text-5xl font-display font-normal text-foreground tracking-tight">
              The LeverageOS MacBook
            </h2>
            <p className="mt-1 text-base text-muted-foreground max-w-md mx-auto">
              Apple silicon, pre-loaded with the AI stack for your field. Choose Normal, Pro, or Max &mdash; configured and ready on day one.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/devices#configurator"
              className="px-10 py-2.5 rounded-lg bg-volta-500 text-white text-sm font-medium hover:bg-volta-600 transition-colors shadow-sm shadow-volta-500/25"
            >
              Order &mdash; From $5,000
            </Link>
            <Link
              href="/devices#configurator"
              className="px-10 py-2.5 rounded-lg bg-transparent text-foreground text-sm font-medium hover:bg-muted transition-colors border border-border"
            >
              Configure
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
