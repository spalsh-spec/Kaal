import Link from 'next/link'

const MODELS = [
  {
    name: 'LeverageOS Normal',
    tagline: 'Light. Fast. Ready.',
    description: 'The everyday AI laptop for professionals who move fast. Configured for your field, ready on day one.',
    price: 'From $5,000',
    accent: 'from-volta-400/15 to-volta-200/5',
  },
  {
    name: 'LeverageOS Pro',
    tagline: 'Power without limits.',
    description: 'Built for deep work. Runs multiple AI agents at once without breaking a sweat.',
    price: 'From $6,500',
    accent: 'from-amber-400/15 to-orange-300/5',
  },
  {
    name: 'LeverageOS Max',
    tagline: 'No compromises.',
    description: 'The most powerful LeverageOS ever made. Local models, video generation, everything — at once.',
    price: 'From $8,000',
    accent: 'from-volta-500/15 to-rose-300/5',
  },
]

export function Models() {
  return (
    <section className="bg-background">
      {MODELS.map((model) => (
        <div
          key={model.name}
          className="relative h-screen flex flex-col items-center justify-end pb-24 text-center border-t border-border"
        >
          {/* Warm ambient gradient */}
          <div className={`absolute inset-0 bg-gradient-to-b ${model.accent} opacity-70`} />

          {/* Product visual placeholder — swap for a real photo later */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[520px] h-[300px] max-w-[88vw] rounded-2xl border border-border bg-card shadow-[0_30px_80px_rgba(180,120,50,0.12)]" />
          </div>

          {/* Bottom info */}
          <div className="relative z-10 flex flex-col items-center gap-5">
            <div>
              <h2 className="text-4xl font-display font-normal text-foreground tracking-tight">{model.name}</h2>
              <p className="mt-1 text-base text-muted-foreground">{model.tagline}</p>
            </div>
            <p className="text-sm text-muted-foreground/80 max-w-sm">{model.description}</p>
            <div className="flex items-center gap-4">
              <Link
                href="/devices#configurator"
                className="px-10 py-2.5 rounded-lg bg-volta-500 text-white text-sm font-medium hover:bg-volta-600 transition-colors shadow-sm shadow-volta-500/25"
              >
                Order — {model.price}
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
      ))}
    </section>
  )
}
