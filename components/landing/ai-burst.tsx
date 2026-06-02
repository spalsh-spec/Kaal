'use client'

import { motion } from 'framer-motion'
import { Sparkles, Bot, PenTool, BarChart3, Mail, ImageIcon, Code2, Mic } from 'lucide-react'

// Creative concept: AI apps "bursting" out of a laptop screen like an
// explosion of creativity. Pure CSS/motion — no image asset needed.
// Icons live in an UNCLIPPED layer above the laptop so they escape the
// screen edges (the burst) instead of being cut off.
const APPS = [
  { Icon: Sparkles,  x: -132, y: -104, d: 0.0, bg: 'linear-gradient(135deg,#f59e0b,#fb7185)' },
  { Icon: Code2,     x: -18,  y: -150, d: 0.6, bg: 'linear-gradient(135deg,#0038B8,#001a57)' },
  { Icon: Bot,       x: 138,  y: -110, d: 0.1, bg: 'linear-gradient(135deg,#0038B8,#4d84f5)' },
  { Icon: PenTool,   x: -180, y: 18,   d: 0.2, bg: 'linear-gradient(135deg,#8b5cf6,#6366f1)' },
  { Icon: BarChart3, x: 182,  y: 28,   d: 0.3, bg: 'linear-gradient(135deg,#10b981,#059669)' },
  { Icon: Mail,      x: -108, y: 138,  d: 0.4, bg: 'linear-gradient(135deg,#06b6d4,#0ea5e9)' },
  { Icon: Mic,       x: 36,   y: 158,  d: 0.7, bg: 'linear-gradient(135deg,#f59e0b,#ef4444)' },
  { Icon: ImageIcon, x: 150,  y: 132,  d: 0.5, bg: 'linear-gradient(135deg,#f43f5e,#ec4899)' },
]

export function AiBurst() {
  return (
    <div className="relative grid place-items-center w-full h-full">
      {/* warm sun glow */}
      <div className="absolute w-[60%] aspect-square rounded-full blur-3xl opacity-70 pointer-events-none"
           style={{ background: 'radial-gradient(circle,rgba(245,158,11,.45),rgba(0,56,184,.16) 55%,transparent 72%)' }} />

      {/* Laptop + burst — wrapper is NOT clipped */}
      <div className="relative scale-[.6] sm:scale-[.78] md:scale-90 lg:scale-100">
        <div className="relative w-[360px]">
          {/* screen (clips only its own contents) */}
          <div className="relative h-[226px] rounded-xl border border-white/15 overflow-hidden shadow-2xl"
               style={{ backgroundImage: 'radial-gradient(120% 120% at 0% 0%, #0038B8 0%, #001a57 55%, #0a0f2c 100%)' }}>
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />
            <div className="absolute inset-0 grid place-items-center">
              <span className="text-white/90 font-display text-2xl tracking-tight">Leverage OS</span>
            </div>
          </div>
          {/* base */}
          <div className="mx-auto h-3 w-[440px] -ml-[40px] rounded-b-xl bg-gradient-to-b from-slate-300 to-slate-400" />
        </div>

        {/* Icons burst layer — centred on the laptop, overflow visible */}
        <div className="pointer-events-none absolute left-1/2 top-1/2">
          {APPS.map(({ Icon, x, y, d, bg }, i) => (
            <motion.div
              key={i}
              className="absolute grid place-items-center w-12 h-12 rounded-[11px] text-white shadow-xl"
              style={{ background: bg, marginLeft: -24, marginTop: -24 }}
              initial={{ x: 0, y: 0, scale: 0.2, opacity: 0 }}
              animate={{ x: [0, x], y: [0, y], scale: [0.2, 1], opacity: [0, 1, 1] }}
              transition={{ duration: 1.7, delay: d, repeat: Infinity, repeatDelay: 1.5, ease: 'easeOut' }}
            >
              <Icon className="w-6 h-6" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
