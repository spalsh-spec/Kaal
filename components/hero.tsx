'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DeviceMockup } from '@/components/device-mockup'
import { WaitlistForm } from '@/components/waitlist-form'
import { ArrowRight, Zap } from 'lucide-react'

const FADE_UP = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Extra ambient orbs */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.5) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.5) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-8 items-center py-20">
        {/* Left — Copy */}
        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start"
        >
          {/* Badge */}
          <motion.div variants={FADE_UP}>
            <Badge variant="volta" className="mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-volta-400 animate-pulse" />
              Now shipping — Gen 1
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={FADE_UP}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-[82px] font-display font-normal leading-[1.0] tracking-tight mb-6"
          >
            AI superpowers,{' '}
            <span className="font-display italic">delivered.</span>
            <br />
            <span
              className="bg-gradient-to-r from-volta-300 via-volta-400 to-emerge-400 bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: 'text' }}
            >
              No setup.<br />No intimidation.
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={FADE_UP}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-[460px]"
          >
            The world&apos;s first AI-native laptop. Pre-loaded with the best AI tools for{' '}
            <em className="text-foreground font-medium not-italic">your exact profession</em> —
            ready to use the moment you open the box.
          </motion.p>

          {/* Trust line */}
          <motion.div variants={FADE_UP} className="flex items-center gap-3 mb-8">
            <div className="flex -space-x-2">
              {['SC', 'JT', 'MP', 'RV'].map((init, i) => (
                <div
                  key={init}
                  className="w-8 h-8 rounded-full border-2 border-background flex items-center justify-center text-xs font-bold text-white"
                  style={{
                    background: ['#6366f1', '#10b981', '#f59e0b', '#ef4444'][i],
                    zIndex: 4 - i,
                  }}
                >
                  {init}
                </div>
              ))}
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="text-foreground font-medium">2,400+</span> professionals already on waitlist
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-8">
            <Button asChild variant="volta" size="xl" className="group">
              <Link href="/devices#configurator">
                Build Your Device
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="white-outline" size="xl">
              <Link href="/how-it-works">See How It Works</Link>
            </Button>
          </motion.div>

          {/* Micro trust */}
          <motion.div
            variants={FADE_UP}
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground"
          >
            <span className="flex items-center gap-1">
              <Zap className="h-3 w-3 text-volta-400" />
              Ships in 2–4 weeks
            </span>
            <span className="flex items-center gap-1">
              <Zap className="h-3 w-3 text-emerge-400" />
              Updated monthly
            </span>
            <span className="flex items-center gap-1">
              <Zap className="h-3 w-3 text-amber-400" />
              No technical knowledge required
            </span>
          </motion.div>
        </motion.div>

        {/* Right — Device */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center"
        >
          <DeviceMockup className="w-full" />

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute top-8 -right-4 glass rounded-xl px-3 py-2 shadow-xl"
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-emerge-500/20 flex items-center justify-center">
                <span className="text-emerge-400 text-xs">✓</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">Stack Updated</p>
                <p className="text-[10px] text-muted-foreground">12 tools, 3 new agents</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-16 -left-4 glass rounded-xl px-3 py-2 shadow-xl"
          >
            <div className="flex items-center gap-2">
              <div className="text-lg">⚡</div>
              <div>
                <p className="text-xs font-semibold text-foreground">15 hrs saved</p>
                <p className="text-[10px] text-muted-foreground">This week alone</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll nudge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ scaleY: [1, 0.5, 1], transformOrigin: 'top' }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-muted-foreground/60 to-transparent"
        />
      </motion.div>
    </section>
  )
}
