'use client'

import { motion } from 'framer-motion'
import { BRAND_STACK, BrandLogo, type Brand } from '@/components/landing/brand-logos'

// Apps shown on the laptop screen (the simple "it's all already here" launchpad)
const SCREEN_APPS: Brand[] = BRAND_STACK.slice(0, 8)
// Real logos that float beside the photoreal laptop (desktop), each labelled
const POP = [
  { brand: BRAND_STACK[0], left: '7%',  top: '32%' },  // Claude  upper-left
  { brand: BRAND_STACK[1], left: '10%', top: '66%' },  // Gemini  lower-left
  { brand: BRAND_STACK[5], left: '93%', top: '32%' },  // GitHub  upper-right
  { brand: BRAND_STACK[7], left: '90%', top: '66%' },  // Figma   lower-right
]

// Glossy real app-icon tile (like a real macOS/iOS app icon).
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
    <div className="relative w-full select-none">
      <motion.div
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="relative w-full"
      >
        {/* Photoreal laptop (generated, hosted in /public/hero). 16:9. */}
        <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
          <img src="/hero/macbook.png" alt="HeliosOS — the AI-native laptop"
               className="absolute inset-0 w-full h-full object-contain pointer-events-none"
               style={{
                 maskImage: 'radial-gradient(ellipse 70% 80% at 50% 48%, #000 52%, transparent 88%)',
                 WebkitMaskImage: 'radial-gradient(ellipse 70% 80% at 50% 48%, #000 52%, transparent 88%)',
               } as React.CSSProperties} />

          {/* Launchpad composited onto the screen (scales with the device via cqw) */}
          <div className="absolute" style={{ left: '31.4%', top: '26%', width: '37.2%', height: '40.5%', containerType: 'inline-size' as React.CSSProperties['containerType'] }}>
            <Launchpad />
          </div>

          {/* Real-logo tiles floating beside the laptop — desktop only, labelled */}
          {POP.map(({ brand, left, top }, i) => (
            <motion.div
              key={i}
              className="hidden md:flex absolute z-20 flex-col items-center"
              style={{ left, top, transform: 'translate(-50%,-50%)' }}
              initial={{ opacity: 0, scale: 0.85, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: [8, -4, 8] }}
              transition={{
                opacity: { duration: 0.9, delay: i * 0.25 },
                scale: { duration: 0.9, delay: i * 0.25, ease: [0.22, 0.61, 0.36, 1] },
                y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.25 },
              }}
            >
              <AppTile icon={brand.icon} tile={60} size={32} />
              <span className="mt-2 text-white text-[12px] font-semibold drop-shadow">{brand.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Mobile caption — names the apps in plain text where the on-screen grid is tiny */}
      <p className="md:hidden -mt-2 text-center text-[13px] text-white/75 font-medium px-6">
        Pre-installed: Claude · Gemini · Perplexity · GitHub · Notion · Figma &amp; more
      </p>
    </div>
  )
}

// The laptop screen — a simple, named launchpad for non-technical people.
// Font sizes use cqw so they scale with the device on every screen.
function Launchpad() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden">
      <div className="flex items-center justify-between" style={{ padding: '3cqw 4cqw 2cqw' }}>
        <span className="font-semibold text-white/90" style={{ fontSize: '4cqw' }}>HeliosOS</span>
        <span className="flex items-center text-white/55" style={{ fontSize: '3.4cqw', gap: '1.5cqw' }}>
          <span className="rounded-full bg-emerald-400" style={{ width: '2cqw', height: '2cqw' }} /> Ready
        </span>
      </div>
      <div className="text-center" style={{ paddingInline: '4cqw' }}>
        <p className="font-semibold text-white" style={{ fontSize: '5.4cqw' }}>Your AI apps — already set up.</p>
        <p className="text-white/55" style={{ fontSize: '3.4cqw' }}>Just open the lid and start. No installing. No logins.</p>
      </div>
      <div className="grid grid-cols-4 content-start" style={{ padding: '3cqw 4cqw', columnGap: '2cqw', rowGap: '2cqw' }}>
        {SCREEN_APPS.map((b) => (
          <div key={b.name} className="flex flex-col items-center" style={{ gap: '1.2cqw' }}>
            <span className="grid place-items-center bg-white shrink-0"
                  style={{ width: '11cqw', height: '11cqw', borderRadius: '3cqw', boxShadow: '0 1cqw 2cqw -1cqw rgba(0,0,0,.5)' }}>
              <svg viewBox="0 0 24 24" fill={`#${b.icon.hex}`} style={{ width: '6.6cqw', height: '6.6cqw' }}>
                <path d={b.icon.path} />
              </svg>
            </span>
            <span className="font-medium text-white/80 leading-none text-center" style={{ fontSize: '2.9cqw' }}>{b.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
