'use client'

// OPTIONAL video showcase — grid of video/poster cards. Off for Leverage OS;
// renders only when enabled and items are provided.

import { PlayCircle } from 'lucide-react'
import { Heading, PanelCtas } from './_shared'
import type { VideoShowcaseConfig, OrderConfig } from '@/types/product'

export function VideoShowcase({ data, order, orderLabel }: { data: VideoShowcaseConfig; order: OrderConfig; orderLabel: string }) {
  if (!data.enabled || !data.items.length) return null
  return (
    <section id="videos" className="panel snap-panel bg-slate-950">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <Heading dark eyebrow={data.eyebrow || ''} title={data.title || ''} subtitle={data.subtitle || ''} />
      <div className="relative z-10 w-full flex-1 flex items-center justify-center px-5 py-6">
        <div className="grid gap-4 md:grid-cols-3 max-w-5xl w-full">
          {data.items.map((v) => (
            <div key={v.title} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="aspect-video relative bg-gradient-to-br from-volta-900/40 to-slate-900 flex items-center justify-center">
                {v.poster ? (
                  <img src={v.poster} alt={v.title} className="absolute inset-0 w-full h-full object-cover" />
                ) : null}
                {v.video ? (
                  <video src={v.video} poster={v.poster} className="absolute inset-0 w-full h-full object-cover" controls playsInline />
                ) : (
                  <PlayCircle className="w-12 h-12 text-white/80 relative z-10" />
                )}
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-white">{v.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      {data.secondary_button && (
        <PanelCtas dark order={order} primaryText={orderLabel} secondary={data.secondary_button} />
      )}
    </section>
  )
}
