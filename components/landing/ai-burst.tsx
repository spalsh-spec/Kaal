'use client'

import { motion } from 'framer-motion'
import { BRAND_STACK, BrandLogo } from '@/components/landing/brand-logos'

// Real company logos bursting out of the laptop — an explosion of the
// integrated AI stack. White app-tiles in brand colour for recognition.
const POS = [
  { x: -132, y: -104, d: 0.0 },
  { x: -18,  y: -150, d: 0.5 },
  { x: 138,  y: -110, d: 0.15 },
  { x: -180, y: 18,   d: 0.25 },
  { x: 182,  y: 28,   d: 0.35 },
  { x: -108, y: 138,  d: 0.45 },
  { x: 36,   y: 158,  d: 0.6 },
  { x: 150,  y: 132,  d: 0.55 },
]
const APPS = BRAND_STACK.slice(0, POS.length).map((b, i) => ({ ...POS[i], icon: b.icon }))

export function AiBurst() {
  return (
    <div className="relative grid place-items-center w-full h-full">
      <div className="absolute w-[60%] aspect-square rounded-full blur-3xl opacity-70 pointer-events-none"
           style={{ background: 'radial-gradient(circle,rgba(245,158,11,.45),rgba(0,56,184,.16) 55%,transparent 72%)' }} />

      <div className="relative scale-[.6] sm:scale-[.78] md:scale-90 lg:scale-100">
        <div className="relative w-[360px]">
          <div className="relative h-[226px] rounded-xl border border-white/15 overflow-hidden shadow-2xl"
               style={{ backgroundImage: 'radial-gradient(120% 120% at 0% 0%, #0038B8 0%, #001a57 55%, #0a0f2c 100%)' }}>
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />
            <div className="absolute inset-0 grid place-items-center">
              <span className="text-white/90 font-display text-2xl tracking-tight">HeliosOS</span>
            </div>
          </div>
          <div className="mx-auto h-3 w-[440px] -ml-[40px] rounded-b-xl bg-gradient-to-b from-slate-300 to-slate-400" />
        </div>

        {/* Real-logo tiles burst out — slower, Apple-paced */}
        <div className="pointer-events-none absolute left-1/2 top-1/2">
          {APPS.map(({ icon, x, y, d }, i) => (
            <motion.div
              key={i}
              className="absolute grid place-items-center w-12 h-12 rounded-[12px] bg-white shadow-xl"
              style={{ marginLeft: -24, marginTop: -24 }}
              initial={{ x: 0, y: 0, scale: 0.2, opacity: 0 }}
              animate={{ x: [0, x], y: [0, y], scale: [0.2, 1], opacity: [0, 1, 1] }}
              transition={{ duration: 2.6, delay: d, repeat: Infinity, repeatDelay: 2.4, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <BrandLogo icon={icon} size={26} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
