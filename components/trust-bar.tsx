'use client'

import { ECOSYSTEM_TOOLS } from '@/lib/data'

export function TrustBar() {
  const tools = [...ECOSYSTEM_TOOLS, ...ECOSYSTEM_TOOLS] // duplicate for infinite scroll

  return (
    <section className="py-10 border-y border-border/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-5 text-center">
        <p className="text-xs text-muted-foreground tracking-widest uppercase">
          Pre-loaded with the world&apos;s best AI tools
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          className="flex items-center gap-8"
          style={{ animation: 'marquee 30s linear infinite', width: 'max-content' }}
        >
          {tools.map((tool, i) => (
            <div
              key={`${tool.name}-${i}`}
              className="flex items-center gap-2.5 py-2 px-4 rounded-xl bg-muted/30 border border-border/30 hover:border-border/60 hover:bg-muted/60 transition-all cursor-default select-none whitespace-nowrap"
            >
              <span className="text-lg leading-none text-muted-foreground">{tool.logo}</span>
              <span className="text-sm font-medium text-muted-foreground">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
