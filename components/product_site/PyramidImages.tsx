'use client'

// OPTIONAL pyramid image layout — one large image on top, two below. Off for
// Leverage OS; renders only when enabled and images are provided.

import { Heading } from './_shared'
import type { PyramidConfig } from '@/types/product'

export function PyramidImages({ data }: { data: PyramidConfig }) {
  if (!data.enabled || !data.main_image) return null
  const cap = data.image_captions || {}
  return (
    <section id="gallery" className="panel snap-panel bg-background">
      {(data.title || data.eyebrow) && (
        <Heading dark={false} eyebrow={data.eyebrow || ''} title={data.title || ''} subtitle={data.subtitle || ''} />
      )}
      <div className="relative z-10 w-full flex-1 flex items-center justify-center px-5 py-6">
        <div className="w-full max-w-5xl flex flex-col gap-4">
          <figure className="w-full">
            <img src={data.main_image} alt={data.alt_text || cap.main || ''} className="w-full rounded-2xl border border-border shadow-md object-cover" />
            {cap.main && <figcaption className="mt-2 text-center text-sm text-muted-foreground">{cap.main}</figcaption>}
          </figure>
          <div className="grid gap-4 sm:grid-cols-2">
            <figure>
              <img src={data.pyramid_left_image} alt={cap.left || ''} className="w-full rounded-2xl border border-border shadow-sm object-cover" />
              {cap.left && <figcaption className="mt-2 text-center text-sm text-muted-foreground">{cap.left}</figcaption>}
            </figure>
            <figure>
              <img src={data.pyramid_right_image} alt={cap.right || ''} className="w-full rounded-2xl border border-border shadow-sm object-cover" />
              {cap.right && <figcaption className="mt-2 text-center text-sm text-muted-foreground">{cap.right}</figcaption>}
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
