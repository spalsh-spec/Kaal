'use client'

// Hero panel. One slide = the current static hero (identical output).
// Supports a built-in visual component (the photoreal MacBook), an image, or a
// video; and an optional multi-slide crossfade when more than one slide exists.

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AiLaptop } from '@/components/landing/ai-laptop'
import { Heading, PanelCtas, ChevronDown } from './_shared'
import { scrollToId } from '@/lib/order-bus'
import type { HeroConfig, HeroSlide, OrderConfig } from '@/types/product'

// Registry of built-in hero visuals (the fixed, premium components).
function HeroVisual({ slide }: { slide: HeroSlide }) {
  if (slide.slide_type === 'component') {
    // Only one registered component today; extend here as more are added.
    return <AiLaptop />
  }
  if (slide.slide_type === 'video') {
    return (
      <video
        className="w-full rounded-2xl shadow-2xl object-cover"
        src={slide.video_path}
        poster={slide.poster_path}
        autoPlay
        muted
        loop
        playsInline
        aria-label={slide.alt_text}
      />
    )
  }
  // image
  return (
    <img
      src={slide.image_path}
      alt={slide.alt_text || ''}
      className="w-full rounded-2xl shadow-2xl object-contain"
    />
  )
}

export function HeroSlideshow({ hero, order }: { hero: HeroConfig; order: OrderConfig }) {
  const slides = hero.hero_slides?.length ? hero.hero_slides : [{ slide_type: 'component', component_id: 'ai-laptop' } as HeroSlide]
  const [index, setIndex] = useState(0)
  const multi = slides.length > 1

  useEffect(() => {
    if (!multi) return
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000)
    return () => clearInterval(t)
  }, [multi, slides.length])

  return (
    <section id="hero" className="panel snap-panel helios-panel">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <Heading dark eyebrow={hero.eyebrow} title={hero.hero_title} subtitle={hero.hero_subtitle} />

      <div className="relative z-10 w-full flex-1 flex items-center justify-center px-5 pb-2 pointer-events-none">
        <div className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl">
          {multi ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <HeroVisual slide={slides[index]} />
              </motion.div>
            </AnimatePresence>
          ) : (
            <HeroVisual slide={slides[0]} />
          )}
        </div>
      </div>

      {multi && (
        <div className="relative z-10 flex gap-2 justify-center pb-2 pointer-events-auto">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-white' : 'w-2 bg-white/40'}`}
            />
          ))}
        </div>
      )}

      <PanelCtas
        dark
        order={order}
        primaryText={hero.primary_button.text}
        secondary={hero.secondary_button}
        note={hero.note}
      />

      {hero.scroll_indicator_to && (
        <button
          onClick={() => scrollToId(hero.scroll_indicator_to!)}
          aria-label="Scroll"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors z-10"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      )}
    </section>
  )
}
