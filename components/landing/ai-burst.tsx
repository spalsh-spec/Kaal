'use client'

import { motion } from 'framer-motion'
import { Sparkles, Bot, PenTool, BarChart3, Mail, ImageIcon, Code2, Mic } from 'lucide-react'

// Creative concept: AI apps "bursting" out of a laptop screen like
// an explosion of creativity. Pure CSS/motion — no image asset needed.
const APPS = [
  { Icon: Sparkles,  x: -150, y: -110, d: 0.0, bg: 'linear-gradient(135deg,#f59e0b,#fb7185)' },
  { Icon: Bot,       x: 150,  y: -120, d: 0.1, bg: 'linear-gradient(135deg,#0038B8,#4d84f5)' },
  { Icon: PenTool,   x: -210, y: 10,   d: 0.2, bg: 'linear-gradient(135deg,#8b5cf6,#6366f1)' },
  { Icon: BarChart3, x: 210,  y: 20,   d: 0.3, bg: 'linear-gradient(135deg,#10b981,#059669)' },
  { Icon: Mail,      x: -120, y: 120,  d: 0.4, bg: 'linear-gradient(135deg,#06b6d4,#0ea5e9)' },
  { Icon: ImageIcon, x: 120,  y: 130,  d: 0.5, bg: 'linear-gradient(135deg,#f43f5e,#ec4899)' },
  { Icon: Code2,     x: -30,  y: -160, d: 0.6, bg: 'linear-gradient(135deg,#0038B8,#001a57)' },
  { Icon: Mic,       x: 40,   y: 165,  d: 0.7, bg: 'linear-gradient(135deg,#f59e0b,#ef4444)' },
]

export function AiBurst() {
  return (
    <div className="relative w-full h-full grid place-items-center overflow-hidden">
      {/* warm radial sun glow */}
      <div className="absolute w-[70%] aspect-square rounded-full blur-3xl opacity-70"
           style={{ background: 'radial-gradient(circle,rgba(245,158,11,.45),rgba(0,56,184,.18) 55%,transparent 72%)' }} />

      {/* Laptop */}
      <div className="relative z-10 scale-[.62] sm:scale-90 md:scale-100">
        <div className="relative w-[360px]">
          {/* screen */}
          <div className="relative h-[230px] rounded-xl border border-white/15 helios-panel shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />
            <div className="absolute inset-0 grid place-items-center">
              <span className="text-white/90 font-display text-2xl tracking-tight">Leverage OS</span>
            </div>
            {/* App icons bursting out */}
            {APPS.map(({ Icon, x, y, d, bg }, i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 grid place-items-center w-12 h-12 rounded-[10px] text-white shadow-xl"
                style={{ background: bg }}
                initial={{ x: -24, y: -24, scale: 0.2, opacity: 0 }}
                animate={{ x: [-24, x], y: [-24, y], scale: [0.2, 1], opacity: [0, 1, 1] }}
                transition={{ duration: 1.6, delay: d, repeat: Infinity, repeatDelay: 1.4, ease: 'easeOut' }}
              >
                <Icon className="w-6 h-6" />
              </motion.div>
            ))}
          </div>
          {/* base */}
          <div className="mx-auto h-3 w-[420px] -ml-[30px] rounded-b-xl bg-gradient-to-b from-slate-300 to-slate-400" />
        </div>
      </div>
    </div>
  )
}
