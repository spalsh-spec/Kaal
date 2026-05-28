import Link from 'next/link'

const MODELS = [
  {
    name: 'LeverageOS Air',
    tagline: 'Light. Fast. Ready.',
    description: 'The everyday AI laptop for professionals who move fast. Configured for your field.',
    price: 'From $1,899',
    href: '/devices/air',
    accent: 'from-blue-500/20 to-indigo-500/10',
  },
  {
    name: 'LeverageOS Pro',
    tagline: 'Power without limits.',
    description: 'Built for deep work. More RAM, more cores, and a curated AI stack that never slows down.',
    price: 'From $2,499',
    href: '/devices/pro',
    accent: 'from-violet-500/20 to-purple-500/10',
  },
  {
    name: 'LeverageOS Max',
    tagline: 'No compromises.',
    description: 'The most powerful LeverageOS ever made. For those who demand everything from their AI stack.',
    price: 'From $3,299',
    href: '/devices/max',
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
          <div
            className={`absolute inset-0 bg-gradient-to-b ${model.accent} opacity-30`}
          />

          {/* Visual placeholder — replace with real product image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[520px] h-[300px] rounded-xl border border-white/8 bg-white/[0.03] backdrop-blur-sm" />
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
                href={model.href}
                className="px-10 py-2.5 rounded bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
              >
                Order — {model.price}
              </Link>
              <Link
                href={model.href + '#specs'}
                className="px-10 py-2.5 rounded bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors border border-white/20"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
