'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, ArrowRight } from 'lucide-react'
import { SLIDES, type Slide } from '@/lib/landing-data'
import { openOrder, scrollToId } from '@/lib/order-bus'
import { AiBurst } from '@/components/landing/ai-burst'

const AUTOPLAY_MS = 6000

export function HeroSlideshow() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const n = SLIDES.length

  const go = useCallback((d: number) => setI((p) => (p + d + n) % n), [n])

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setI((p) => (p + 1) % n), AUTOPLAY_MS)
    return () => clearInterval(t)
  }, [paused, n])

  const slide = SLIDES[i]

  return (
    <section
      id="top"
      className="relative w-full pt-16 no-x-overflow"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Full-width cinematic stage */}
      <div className="relative w-full cinematic bg-slate-950">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <SlideMedia slide={slide} />
          </motion.div>
        </AnimatePresence>

        {/* Readability gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/40" />

        {/* Overlay content */}
        <div className="absolute inset-0 flex items-end sm:items-center">
          <div className="mx-auto w-full max-w-screen-xl px-5 sm:px-6 pb-10 sm:pb-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id + '-copy'}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="max-w-2xl"
              >
                <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-amber-300 font-medium">
                  {slide.eyebrow}
                </p>
                <h1 className="mt-3 text-3xl sm:text-5xl md:text-6xl font-display text-white tracking-tight leading-[1.05] text-balance">
                  {slide.title}
                </h1>
                <p className="mt-4 text-base sm:text-lg text-white/85 max-w-xl text-balance">
                  {slide.subtitle}
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <button onClick={openOrder} className="btn-box-gold px-7 sm:px-9 py-3 text-sm sm:text-base">
                    Order Now <ArrowRight className="w-4 h-4" />
                  </button>
                  <button onClick={() => scrollToId('product')}
                          className="btn-box px-7 sm:px-9 py-3 text-sm sm:text-base text-white border border-white/40 hover:bg-white/10">
                    Learn More
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Arrows */}
        <button aria-label="Previous" onClick={() => go(-1)}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-[6px] bg-white/15 hover:bg-white/30 text-white backdrop-blur transition-all duration-200 active:scale-90">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button aria-label="Next" onClick={() => go(1)}
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-[6px] bg-white/15 hover:bg-white/30 text-white backdrop-blur transition-all duration-200 active:scale-90">
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {SLIDES.map((s, idx) => (
            <button key={s.id} aria-label={`Slide ${idx + 1}`} onClick={() => setI(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === i ? 'w-7 bg-amber-400' : 'w-2.5 bg-white/50 hover:bg-white/80'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Renders the right media for each slide kind.
function SlideMedia({ slide }: { slide: Slide }) {
  if (slide.kind === 'visual') {
    return <div className="absolute inset-0 helios-panel"><AiBurst /></div>
  }
  if (slide.kind === 'flow') {
    return <div className="absolute inset-0 helios-panel grid place-items-center"><FlowMini /></div>
  }
  if (slide.kind === 'video') {
    return (
      <div className="absolute inset-0">
        {/* REPLACE: drop your looping video/poster here (see {slide.src}) */}
        <img src={slide.src} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 grid place-items-center">
          <span className="grid place-items-center w-16 h-16 rounded-full bg-white/90 text-volta-700 shadow-2xl">
            <Play className="w-7 h-7 translate-x-0.5" />
          </span>
        </div>
      </div>
    )
  }
  // image
  return <img src={slide.src} alt="" className="absolute inset-0 w-full h-full object-cover" />
}

// Tiny inline flowchart for the 'flow' hero slide.
function FlowMini() {
  const steps = ['Your idea', 'AI plans', 'Tools connect', 'Work built', 'Improves weekly']
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 px-6">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center gap-3">
          <div className="px-4 py-2.5 rounded-[6px] bg-white/10 border border-white/20 text-white text-sm font-medium backdrop-blur">
            {s}
          </div>
          {i < steps.length - 1 && <ArrowRight className="w-4 h-4 text-amber-300" />}
        </div>
      ))}
    </div>
  )
}
