import Link from 'next/link'

const MODELS = [
  {
    name: 'LeverageOS Normal',
    tagline: 'Light. Fast. Ready.',
    description: 'The everyday AI laptop for professionals who move fast. Configured for your field, ready on day one.',
    price: 'From $5,000',
    accent: 'from-blue-500/20 to-indigo-500/10',
  },
  {
    name: 'LeverageOS Pro',
    tagline: 'Power without limits.',
    description: 'Built for deep work. Runs multiple AI agents at once without breaking a sweat.',
    price: 'From $6,500',
    accent: 'from-violet-500/20 to-purple-500/10',
  },
  {
    name: 'LeverageOS Max',
    tagline: 'No compromises.',
    description: 'The most powerful LeverageOS ever made. Local models, video generation, everything — at once.',
    price: 'From $8,000',
    accent: 'from-emerald-500/20 to-teal-500/10',
  },
]

export function Models() {
  return (
    <section className="bg-black">
      {MODELS.map((model) => (
        <div
          key={model.name}
          className="relative h-screen flex flex-col items-center justify-end pb-24 text-center border-t border-white/5"
        >
          {/* Ambient gradient */}
          <div className={`absolute inset-0 bg-gradient-to-b ${model.accent} opacity-30`} />

          {/* Visual placeholder — swap for a real product photo later */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[520px] h-[300px] max-w-[88vw] rounded-xl border border-white/8 bg-white/[0.03] backdrop-blur-sm" />
          </div>

          {/* Bottom info */}
          <div className="relative z-10 flex flex-col items-center gap-5">
            <div>
              <h2 className="text-4xl font-semibold text-white tracking-tight">{model.name}</h2>
              <p className="mt-1 text-base text-white/60">{model.tagline}</p>
            </div>
            <p className="text-sm text-white/50 max-w-sm">{model.description}</p>
            <div className="flex items-center gap-4">
              <Link
                href="/devices#configurator"
                className="px-10 py-2.5 rounded bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
              >
                Order — {model.price}
              </Link>
              <Link
                href="/devices#configurator"
                className="px-10 py-2.5 rounded bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors border border-white/20"
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
