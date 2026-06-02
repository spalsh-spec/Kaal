'use client'

import { motion } from 'framer-motion'
import { BRAND_STACK, BrandLogo, type Brand } from '@/components/landing/brand-logos'

// Apps shown on the laptop screen (the simple, everyday "it's all already here" launchpad)
const SCREEN_APPS: Brand[] = BRAND_STACK.slice(0, 8)
// A few that float BESIDE the laptop (desktop only), each clearly labelled
const POP = [
  { brand: BRAND_STACK[0], x: -300, y: -64, d: 0.0 }, // Claude  upper-left
  { brand: BRAND_STACK[1], x: -332, y: 76,  d: 0.6 }, // Gemini  lower-left
  { brand: BRAND_STACK[5], x: 300,  y: -64, d: 0.3 }, // GitHub  upper-right
  { brand: BRAND_STACK[7], x: 332,  y: 76,  d: 0.9 }, // Figma   lower-right
]

// A realistic, glossy app-icon tile (like a real macOS/iOS app icon).
function AppTile({ icon, size = 30, tile = 56 }: { icon: Brand['icon']; size?: number; tile?: number }) {
  return (
    <span
      className="grid place-items-center shrink-0"
      style={{
        width: tile, height: tile, borderRadius: tile * 0.26,
        background: 'linear-gradient(160deg,#ffffff 0%,#eef1f5 100%)',
        boxShadow: '0 6px 14px -4px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.9), inset 0 0 0 1px rgba(15,23,42,.06)',
      }}
    >
      <BrandLogo icon={icon} size={size} />
    </span>
  )
}

export function AiLaptop() {
  return (
    <div className="relative grid place-items-center w-full select-none">
      {/* ambient sun glow */}
      <div className="absolute w-[62%] aspect-square rounded-full blur-3xl opacity-60 pointer-events-none"
           style={{ background: 'radial-gradient(circle,rgba(245,158,11,.4),rgba(0,56,184,.16) 55%,transparent 72%)' }} />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="relative w-[340px] sm:w-[440px] md:w-[500px]"
      >
        {/* Apps popping out above the lid — labelled */}
        {POP.map(({ brand, x, y, d }, i) => (
          <motion.div
            key={i}
            className="hidden md:flex absolute left-1/2 top-1/2 z-20 flex-col items-center"
            style={{ marginLeft: -30, marginTop: -30 }}
            initial={{ x, y, opacity: 0, scale: 0.85 }}
            animate={{ x, y: [y, y - 12, y], opacity: 1, scale: 1 }}
            transition={{
              y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: d },
              opacity: { duration: 0.9, delay: d },
              scale: { duration: 0.9, delay: d, ease: [0.22, 0.61, 0.36, 1] },
            }}
          >
            <AppTile icon={brand.icon} tile={60} size={32} />
            <span className="mt-2 text-white text-[12px] font-semibold drop-shadow">{brand.name}</span>
          </motion.div>
        ))}

        {/* ── MacBook lid (screen) ── */}
        <div className="relative rounded-[20px] p-[11px] shadow-2xl"
             style={{ background: 'linear-gradient(155deg,#54585f 0%,#34373c 28%,#1c1e22 64%,#0c0d10 100%)',
                      boxShadow: '0 52px 96px -34px rgba(0,0,0,.82), inset 0 1.5px 0 rgba(255,255,255,.22), inset 0 0 0 1px rgba(255,255,255,.06), inset 0 -2px 6px rgba(0,0,0,.5)' }}>
          {/* notch */}
          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-16 h-[14px] rounded-b-[8px] bg-[#0e0f12] z-20 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#23252a] ring-1 ring-white/10" />
          </div>
          {/* screen */}
          <div className="relative rounded-[10px] overflow-hidden aspect-[16/10]"
               style={{ background: 'linear-gradient(160deg,#0a1430 0%,#0a0f24 55%,#070a18 100%)' }}>
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            {/* glass reflection + subtle vignette */}
            <div className="absolute inset-0 pointer-events-none"
                 style={{ background: 'linear-gradient(118deg,rgba(255,255,255,.16) 0%,rgba(255,255,255,.04) 24%,rgba(255,255,255,0) 46%), radial-gradient(130% 100% at 50% -10%, transparent 58%, rgba(0,0,0,.4) 100%)' }} />
            <Launchpad />
          </div>
        </div>

        {/* ── hinge + aluminium base ── */}
        <div className="mx-auto h-[6px] w-[101%] -ml-[0.5%] rounded-b-[4px]"
             style={{ background: 'linear-gradient(to bottom,#2b2d31,#15161a)' }} />
        <div className="relative mx-auto w-[112%] -ml-[6%] h-[15px] rounded-b-[13px]"
             style={{ background: 'linear-gradient(to bottom,#eef0f3 0%,#cdd1d7 26%,#a4a8b0 62%,#6c7077 100%)',
                      boxShadow: '0 28px 46px -18px rgba(0,0,0,.68), inset 0 1.5px 0 rgba(255,255,255,.85), inset 0 -1px 2px rgba(0,0,0,.25)' }}>
          {/* front lip cutout */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[6px] rounded-b-[7px]"
               style={{ background: 'linear-gradient(to bottom,#aeb2ba,#888d95)' }} />
        </div>
        {/* contact shadow */}
        <div className="mx-auto mt-2 h-6 w-[82%] rounded-[50%] blur-2xl opacity-55"
             style={{ background: 'radial-gradient(ellipse,rgba(0,0,0,.7),transparent 70%)' }} />
      </motion.div>
    </div>
  )
}

// The laptop screen — a simple "everything's already here" launchpad for
// non-technical people: a one-line explainer + named app icons.
function Launchpad() {
  return (
    <div className="relative z-10 w-full h-full flex flex-col">
      {/* menu bar */}
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/10">
        <span className="text-[9px] font-semibold text-white/85">HeliosOS</span>
        <span className="flex items-center gap-1 text-[8px] text-white/45">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Ready
        </span>
      </div>

      {/* friendly explainer */}
      <div className="px-3 pt-2 text-center">
        <p className="text-[11px] sm:text-xs font-semibold text-white">Your AI apps — already set up.</p>
        <p className="text-[8px] sm:text-[9px] text-white/55">Just open the lid and start. No installing. No logins.</p>
      </div>

      {/* named app grid */}
      <div className="flex-1 grid grid-cols-4 gap-x-2 gap-y-1.5 px-3 pt-2 content-start">
        {SCREEN_APPS.map((b) => (
          <div key={b.name} className="flex flex-col items-center gap-1">
            <AppTile icon={b.icon} tile={30} size={17} />
            <span className="text-[7.5px] sm:text-[8px] font-medium text-white/80 leading-none text-center">{b.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
