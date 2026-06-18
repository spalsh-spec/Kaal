'use client'

// Hero panel — Tesla-style full-screen slideshow.
//
// Any multi-slide hero gets the Tesla full-bleed layout:
//   component slide → AiLaptop centred on black bg, fades in/out
//   image slide     → photo fills the whole viewport, crossfades
//
// Single-slide fallback keeps the original contained layout.

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AiLaptop } from '@/components/landing/ai-laptop'
import { Heading, PanelCtas, SmartCta, ChevronDown } from './_shared'
import { scrollToId } from '@/lib/order-bus'
import type { HeroConfig, HeroSlide, OrderConfig } from '@/types/product'

// Fallback single-slide visual (component or video only — image handled inline)
function HeroVisual({ slide }: { slide: HeroSlide }) {
  if (slide.slide_type === 'component') return <AiLaptop />
  if (slide.slide_type === 'video') {
    return (
      <video
        className="w-full rounded-2xl shadow-2xl object-cover"
        src={slide.video_path}
        poster={slide.poster_path}
        autoPlay muted loop playsInline
        aria-label={slide.alt_text}
      />
    )
  }
  return (
    <img
      src={slide.image_path}
      alt={slide.alt_text || ''}
      className="w-full rounded-2xl shadow-2xl object-contain"
    />
  )
}

export function HeroSlideshow({ hero, order }: { hero: HeroConfig; order: OrderConfig }) {
  const slides = hero.hero_slides?.length
    ? hero.hero_slides
    : [{ slide_type: 'component', component_id: 'ai-laptop' } as HeroSlide]

  const [index, setIndex] = useState(0)
  const multi = slides.length > 1

  useEffect(() => {
    if (!multi) return
    const t = setInterval(() => setIndex(i => (i + 1) % slides.length), 7000)
    return () => clearInterval(t)
  }, [multi, slides.length])

  // ── Tesla full-bleed layout (any multi-slide hero) ────────────────────
  if (multi) {
    const current = slides[index]

    return (
      <section id="hero" className="panel snap-panel bg-black">

        {/* Layer 0: full-bleed photo backgrounds — image slides only */}
        {slides.map((slide, i) =>
          slide.slide_type === 'image' ? (
            <motion.img
              key={slide.image_path || i}
              src={slide.image_path}
              alt={slide.alt_text || ''}
              animate={{ opacity: i === index ? 1 : 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
              style={{ zIndex: 0 }}
            />
          ) : null
        )}

        {/* Layer 1: AiLaptop component — centred, fades in when active */}
        <AnimatePresence>
          {current.slide_type === 'component' && (
            <motion.div
              key="component-slide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.0, ease: 'easeInOut' }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none px-5"
              style={{ zIndex: 1 }}
            >
              <div className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl">
                <AiLaptop />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Layer 2: gradient — dark top & bottom, transparent middle */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 2,
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.04) 38%, rgba(0,0,0,0.04) 58%, rgba(0,0,0,0.68) 100%)',
          }}
        />

        {/* Heading — top of panel */}
        <Heading dark eyebrow={hero.eyebrow} title={hero.hero_title} subtitle={hero.hero_subtitle} />

        {/* Bottom bar: progress dots + CTAs */}
        <div
          className="mt-auto w-full px-5 flex flex-col items-center gap-4 relative"
          style={{ zIndex: 10, paddingBottom: 'clamp(2.5rem, 7vh, 5rem)' }}
        >
          {/* Slim Tesla-style dots */}
          <div className="flex items-center gap-[6px]">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-[3px] rounded-full transition-all duration-500 ${
                  i === index ? 'w-8 bg-white' : 'w-[6px] bg-white/35'
                }`}
              />
            ))}
          </div>

          {/* CTA row */}
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <SmartCta
              cta={{ text: hero.primary_button.text, order: true }}
              order={order}
              className="tbtn tbtn-gold"
            />
            <SmartCta
              cta={hero.secondary_button}
              order={order}
              className="tbtn tbtn-ghost"
            />
          </div>

          {hero.note && (
            <p className="text-sm font-medium text-white/70">{hero.note}</p>
          )}
        </div>

        {/* Scroll chevron */}
        {hero.scroll_indicator_to && (
          <button
            onClick={() => scrollToId(hero.scroll_indicator_to!)}
            aria-label="Scroll"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors"
            style={{ zIndex: 10 }}
          >
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </button>
        )}
      </section>
    )
  }

  // ── Single-slide fallback (original contained layout) ─────────────────
  return (
    <section id="hero" className="panel snap-panel kaal-panel">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <Heading dark eyebrow={hero.eyebrow} title={hero.hero_title} subtitle={hero.hero_subtitle} />
      <div className="relative z-10 w-full flex-1 flex items-center justify-center px-5 pb-2 pointer-events-none">
        <div className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl">
          <HeroVisual slide={slides[0]} />
        </div>
      </div>
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
