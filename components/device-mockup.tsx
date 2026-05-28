'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

/* ─────────────────────────────────────────────
   MacBook mockup with animated AI interface
   Rendered entirely in SVG + Tailwind
─────────────────────────────────────────────── */
export function DeviceMockup({ className }: { className?: string }) {
  return (
    <div className={cn('relative', className)}>
      {/* Glow behind device */}
      <div
        className="absolute inset-0 blur-3xl rounded-full opacity-40 animate-glow-pulse"
        style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.6) 0%, transparent 70%)' }}
      />

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        {/* MacBook lid (screen) */}
        <div className="relative mx-auto" style={{ width: '100%', maxWidth: 520 }}>
          {/* Screen housing */}
          <div
            className="relative rounded-[18px] overflow-hidden border border-white/10"
            style={{
              background: 'linear-gradient(145deg, #1c1c1e 0%, #111114 100%)',
              boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 40px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)',
              aspectRatio: '16/10',
            }}
          >
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#111114] rounded-b-xl z-10 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#1c1c1e] ring-1 ring-white/5" />
            </div>

            {/* Screen content */}
            <div className="absolute inset-[1px] rounded-[17px] overflow-hidden">
              <ScreenContent />
            </div>
          </div>

          {/* Hinge */}
          <div
            className="mx-2 h-1.5 rounded-b-sm"
            style={{ background: 'linear-gradient(to bottom, #2a2a2e, #1a1a1d)' }}
          />

          {/* Base / keyboard */}
          <div
            className="rounded-[10px] overflow-hidden border border-white/[0.06]"
            style={{
              background: 'linear-gradient(165deg, #2a2a2e 0%, #1c1c1f 100%)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
              height: 48,
            }}
          >
            {/* Keyboard rows */}
            <div className="px-6 pt-3 flex flex-col gap-[3px]">
              {[12, 11, 11, 10].map((keys, row) => (
                <div key={row} className="flex gap-[3px] justify-center">
                  {Array.from({ length: keys }).map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 max-w-[24px] h-[5px] rounded-[2px] bg-black/40"
                      style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)' }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Trackpad */}
          <div className="mt-1 mx-auto w-24 h-8 rounded-lg bg-black/30 border border-white/[0.05]" />
        </div>
      </motion.div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   Animated screen content — AI interface
─────────────────────────────────────────────── */
function ScreenContent() {
  return (
    <div
      className="w-full h-full"
      style={{ background: 'linear-gradient(135deg, #0c0c14 0%, #080810 100%)' }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'linear-gradient(rgba(99,102,241,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-4 py-2 border-b border-white/5">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-24 h-4 rounded-full bg-white/5" />
          <div className="px-3 py-0.5 rounded-full bg-volta-500/20 border border-volta-500/30">
            <span className="text-[8px] text-volta-300 font-medium">LeverageOS ●</span>
          </div>
        </div>
        <div className="w-16 h-3 rounded bg-white/5" />
      </div>

      {/* Main content area */}
      <div className="relative z-10 flex h-full pt-2">
        {/* Sidebar */}
        <div className="w-1/4 border-r border-white/5 px-2 py-2 flex flex-col gap-1">
          {['Chat', 'Research', 'Write', 'Analyze', 'Create'].map((item, i) => (
            <div
              key={item}
              className={cn(
                'px-2 py-1 rounded-md text-[8px] font-medium',
                i === 0 ? 'bg-volta-500/20 text-volta-300' : 'text-white/30'
              )}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Chat area */}
        <div className="flex-1 px-3 py-2 flex flex-col gap-2">
          <AnimatedMessage
            role="user"
            text="Write a marketing email for our Q4 sale"
            delay={0}
          />
          <AnimatedMessage
            role="ai"
            text="Subject: Your biggest savings of the year start now →"
            subtext="Here's a high-converting email with 3 subject line variations..."
            delay={0.3}
          />
          {/* Typing indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            className="flex items-center gap-1 ml-2"
          >
            <div className="w-4 h-4 rounded-full bg-volta-500/20 flex items-center justify-center">
              <span className="text-[5px] text-volta-300">AI</span>
            </div>
            <div className="flex gap-0.5">
              {[0, 0.15, 0.3].map((d, i) => (
                <motion.div
                  key={i}
                  className="w-1 h-1 rounded-full bg-volta-400/60"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: d }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-volta-500/10 to-transparent" />
    </div>
  )
}

function AnimatedMessage({
  role,
  text,
  subtext,
  delay,
}: {
  role: 'user' | 'ai'
  text: string
  subtext?: string
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={cn('flex gap-1.5 items-start', role === 'user' && 'justify-end')}
    >
      {role === 'ai' && (
        <div className="w-4 h-4 rounded-full bg-volta-500/30 flex-shrink-0 mt-0.5 flex items-center justify-center">
          <span className="text-[5px] text-volta-300 font-bold">AI</span>
        </div>
      )}
      <div
        className={cn(
          'rounded-lg px-2.5 py-1.5 max-w-[80%]',
          role === 'user'
            ? 'bg-volta-500/20 border border-volta-500/30'
            : 'bg-white/5 border border-white/8'
        )}
      >
        <p className="text-[8px] text-white/80 leading-relaxed">{text}</p>
        {subtext && <p className="text-[7px] text-white/40 mt-0.5">{subtext}</p>}
      </div>
    </motion.div>
  )
}
