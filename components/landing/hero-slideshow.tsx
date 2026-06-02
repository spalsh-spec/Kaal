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
      <div className="relative w-full bg-slate-950 min-h-[80svh] sm:min-h-0 sm:aspect-[21/9]">
        {/* Media */}
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

        {/* Readability scrims: darker on the left (where text sits) + bottom */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

        {/* Copy — constrained to the left column so it never sits under the visual */}
        <div className="absolute inset-0 flex items-end md:items-center">
          <div className="mx-auto w-full max-w-screen-xl px-5 sm:px-6 pb-20 md:pb-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id + '-copy'}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.55, delay: 0.12 }}
                className="max-w-[34rem] lg:max-w-xl"
              >
                <p className="text-xs sm:text-sm uppercase tracking-[0.26em] text-amber-300 font-medium">
                  {slide.eyebrow}
                </p>
                <h1 className="mt-3 text-[2rem] leading-[1.08] sm:text-5xl lg:text-6xl font-display text-white tracking-tight text-balance">
                  {slide.title}
                </h1>
                <p className="mt-4 text-base sm:text-lg text-white/85 text-balance">
                  {slide.subtitle}
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <button onClick={openOrder} className="btn-box-gold px-7 sm:px-9 py-3 text-sm sm:text-base">
                    Order Now <ArrowRight className="w-4 h-4" />
                  </button>
                  <button onClick={() => scrollToId('product')}
                          className="btn-box px-7 sm:px-9 py-3 text-sm sm:text-base text-white border border-white/45 hover:bg-white/10">
                    Learn More
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots — bottom centre */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          {SLIDES.map((s, idx) => (
            <button key={s.id} aria-label={`Slide ${idx + 1}`} onClick={() => setI(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === i ? 'w-7 bg-amber-400' : 'w-2.5 bg-white/50 hover:bg-white/80'}`} />
          ))}
        </div>

        {/* Prev / Next — bottom-right cluster, clear of the text */}
        <div className="absolute bottom-3 right-4 sm:right-6 flex items-center gap-2 z-10">
          <button aria-label="Previous" onClick={() => go(-1)}
                  className="grid place-items-center w-10 h-10 rounded-[6px] bg-white/15 hover:bg-white/30 text-white backdrop-blur transition-all duration-200 active:scale-90">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button aria-label="Next" onClick={() => go(1)}
                  className="grid place-items-center w-10 h-10 rounded-[6px] bg-white/15 hover:bg-white/30 text-white backdrop-blur transition-all duration-200 active:scale-90">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

// Media per slide kind. Visual/flow are right-biased on desktop so the
// left-column copy never overlaps them; image/video are full-bleed cover.
function SlideMedia({ slide }: { slide: Slide }) {
  if (slide.kind === 'visual') {
    return (
      <div className="absolute inset-0 helios-panel">
        {/* Rich graphic from tablet up; mobile stays a clean gradient (no collision with copy) */}
        <div className="absolute inset-0 hidden md:flex items-center justify-end pr-[3%]">
          <div className="w-[54%] lg:w-[50%] h-full"><AiBurst /></div>
        </div>
      </div>
    )
  }
  if (slide.kind === 'flow') {
    return (
      <div className="absolute inset-0 helios-panel">
        <div className="absolute inset-0 hidden md:flex items-center justify-end pr-[4%]">
          <div className="w-[52%]"><FlowMini /></div>
        </div>
      </div>
    )
  }
  if (slide.kind === 'video') {
    // Clean cinematic gradient (no labelled placeholder under the copy).
    // REPLACE: drop your looping video / poster at {slide.src} and render it here.
    return (
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(120deg,#001a57 0%,#0038B8 55%,#0a0f2c 100%)' }} />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute inset-0 hidden md:flex items-center justify-end pr-[12%]">
          <span className="grid place-items-center w-16 h-16 rounded-full bg-white/90 text-volta-700 shadow-2xl">
            <Play className="w-7 h-7 translate-x-0.5" />
          </span>
        </div>
      </div>
    )
  }
  // image — REPLACE: drop your cinematic image at {slide.src} and render it here.
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(120deg,#0038B8 0%,#4d84f5 45%,#f59e0b 135%)' }} />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
    </div>
  )
}

function FlowMini() {
  const steps = ['Your idea', 'AI plans', 'Tools connect', 'Work built', 'Improves weekly']
  return (
    <div className="flex flex-col items-center gap-2.5 px-6">
      {steps.map((s, i) => (
        <div key={s} className="flex flex-col items-center gap-2.5">
          <div className="px-5 py-2.5 rounded-[6px] bg-white/12 border border-white/20 text-white text-sm font-medium backdrop-blur whitespace-nowrap">
            {s}
          </div>
          {i < steps.length - 1 && <ArrowRight className="w-4 h-4 text-amber-300 rotate-90" />}
        </div>
      ))}
    </div>
  )
}
