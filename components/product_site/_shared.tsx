'use client'

// Shared building blocks for the reusable product site. These hold the FIXED
// visual system (motion timing, heading rhythm, Tesla-style CTA buttons) and
// the icon registries that turn JSON-safe string keys into real icons.

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight, Check, ChevronDown, Target, PackageCheck, Rocket, TrendingUp,
  Scale, GraduationCap, Clapperboard, Stethoscope, Home, LineChart, Star, Users,
  RotateCcw, Headphones, Quote, Briefcase, Sparkles, MessageCircle, Zap, Shield,
  Cpu, Wrench, PlayCircle, Megaphone, Image as ImageIcon, GitBranch, Bot, Phone,
  Mail, Clock, BookOpen,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import {
  siClaude, siGooglegemini, siPerplexity, siHuggingface, siElevenlabs, siGithub,
  siNotion, siFigma, siGrammarly, siHubspot, siZapier, siReplit,
} from 'simple-icons'
import { BrandLogo } from '@/components/landing/brand-logos'
import { scrollToId } from '@/lib/order-bus'
import type { CtaConfig, OrderConfig } from '@/types/product'

// ── Motion: Apple-paced, deliberate ease-out reveal (unchanged from original) ──
export const fade = {
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.0, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] as const },
}

// ── Lucide registry: string key → icon ──
const LUCIDE: Record<string, LucideIcon> = {
  target: Target, 'package-check': PackageCheck, rocket: Rocket,
  'trending-up': TrendingUp, scale: Scale, 'graduation-cap': GraduationCap,
  clapperboard: Clapperboard, stethoscope: Stethoscope, home: Home,
  'line-chart': LineChart, star: Star, users: Users, 'rotate-ccw': RotateCcw,
  headphones: Headphones, quote: Quote, briefcase: Briefcase, sparkles: Sparkles,
  'message-circle': MessageCircle, zap: Zap, shield: Shield, cpu: Cpu,
  wrench: Wrench, 'play-circle': PlayCircle, megaphone: Megaphone,
  image: ImageIcon, 'git-branch': GitBranch, bot: Bot, phone: Phone, mail: Mail,
  clock: Clock, 'book-open': BookOpen, check: Check,
}

export function resolveLucide(key?: string): LucideIcon {
  return (key && LUCIDE[key]) || Rocket
}

// ── Brand registry: string key → simple-icon mark ──
const BRAND = {
  claude: siClaude, gemini: siGooglegemini, perplexity: siPerplexity,
  huggingface: siHuggingface, elevenlabs: siElevenlabs, github: siGithub,
  notion: siNotion, figma: siFigma, grammarly: siGrammarly, hubspot: siHubspot,
  zapier: siZapier, replit: siReplit,
} as const

/** A white app-tile holding a brand mark, or a monogram fallback so non-AI
 *  products still get a clean tile. Visual is identical to the original stack. */
export function BrandMark({ brand, name, size = 24 }: { brand?: string; name: string; size?: number }) {
  const icon = brand ? (BRAND as Record<string, { title: string; hex: string; path: string }>)[brand] : undefined
  return (
    <span className="grid place-items-center w-11 h-11 rounded-[12px] bg-white shadow-md">
      {icon ? (
        <BrandLogo icon={icon} size={size} />
      ) : (
        <span className="text-base font-bold text-slate-800">{name.slice(0, 1)}</span>
      )}
    </span>
  )
}

// ── Order target resolution ──
/** Where the product's Order action points. configurator → its route;
 *  inline → the in-page #order section. */
export function orderHref(order: OrderConfig): string {
  if (order.mode === 'configurator') return order.configurator_href || '/devices#configurator'
  return '#order'
}

// ── Section heading (identical rhythm to the original Heading) ──
export function Heading({ dark, eyebrow, title, subtitle }: { dark: boolean; eyebrow: string; title: string; subtitle: string }) {
  return (
    <motion.div {...fade} className="panel-top px-5 max-w-3xl mx-auto">
      <p className={`text-xs sm:text-sm uppercase tracking-[0.26em] font-semibold ${dark ? 'text-amber-300' : 'text-volta-600'}`}>{eyebrow}</p>
      <h2 className={`mt-2 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance ${dark ? 'text-white' : 'text-foreground'}`}>{title}</h2>
      <p className={`mt-3 text-base sm:text-lg font-medium text-balance ${dark ? 'text-white/85' : 'text-muted-foreground'}`}>{subtitle}</p>
    </motion.div>
  )
}

/** A single CTA resolved from config: order action, in-page scroll, or route. */
export function SmartCta({ cta, order, className }: { cta: CtaConfig; order: OrderConfig; className: string }) {
  // Order action
  if (cta.order) {
    const href = orderHref(order)
    if (href.startsWith('#')) {
      return <button onClick={() => scrollToId(href.slice(1))} className={className}>{cta.text} <ArrowRight className="w-4 h-4" /></button>
    }
    return <Link href={href} className={className}>{cta.text} <ArrowRight className="w-4 h-4" /></Link>
  }
  // In-page smooth scroll
  if (cta.scrollTo) {
    return <button onClick={() => scrollToId(cta.scrollTo!)} className={className}>{cta.text}</button>
  }
  // Plain route
  return <Link href={cta.href || '#'} className={className}>{cta.text}</Link>
}

/** The two-CTA row at the bottom of a panel (Tesla style). Primary = the gold
 *  Order action; secondary = the configured secondary button. */
export function PanelCtas({
  dark, order, primaryText, secondary, note,
}: {
  dark: boolean
  order: OrderConfig
  primaryText: string
  secondary: CtaConfig
  note?: string
}) {
  const ghost = dark ? 'tbtn tbtn-ghost' : 'tbtn tbtn-ghost-dark'
  return (
    <div className="panel-cta px-5">
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <SmartCta cta={{ text: primaryText, order: true }} order={order} className="tbtn tbtn-gold" />
          <SmartCta cta={secondary} order={order} className={ghost} />
        </div>
        {note && <p className={`text-sm font-medium ${dark ? 'text-white/70' : 'text-muted-foreground'}`}>{note}</p>}
      </div>
    </div>
  )
}

export { ChevronDown }
