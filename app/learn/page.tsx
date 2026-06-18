'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Play, Clock, BookOpen, Users, Rocket, TrendingUp, Scale, Stethoscope, LineChart, Clapperboard, Briefcase, Sparkles, MessageCircle } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const CATEGORIES = ['All', 'Getting Started', 'Marketing', 'Legal', 'Healthcare', 'Finance', 'Creative', 'Executive', 'Advanced']

// Per-category icon + gradient tint for premium video thumbnails.
const CAT_THUMB: Record<string, { icon: LucideIcon; grad: string }> = {
  'Getting Started': { icon: Rocket, grad: 'from-volta-600/30 to-volta-900/40' },
  'Marketing': { icon: TrendingUp, grad: 'from-violet-500/30 to-purple-900/40' },
  'Legal': { icon: Scale, grad: 'from-blue-500/30 to-indigo-900/40' },
  'Healthcare': { icon: Stethoscope, grad: 'from-cyan-500/30 to-sky-900/40' },
  'Finance': { icon: LineChart, grad: 'from-emerald-500/30 to-teal-900/40' },
  'Creative': { icon: Clapperboard, grad: 'from-rose-500/30 to-orange-900/40' },
  'Executive': { icon: Briefcase, grad: 'from-amber-500/30 to-yellow-900/40' },
  'Advanced': { icon: Sparkles, grad: 'from-fuchsia-500/30 to-violet-900/40' },
}

const VIDEOS = [
  {
    title: 'Your First Day with Kaal',
    description: 'A complete orientation to your new device. What\'s installed, where everything lives, and how to get your first AI win in under 30 minutes.',
    duration: '18 min',
    level: 'Beginner',
    category: 'Getting Started',
    views: '12.4K',
    thumb: '🚀',
  },
  {
    title: 'How to Talk to AI Like a Pro',
    description: 'The single biggest skill that separates great AI users from beginners: how to write prompts that get exactly what you want, every time.',
    duration: '22 min',
    level: 'Beginner',
    category: 'Getting Started',
    views: '9.8K',
    thumb: '💬',
  },
  {
    title: 'Marketing: Full Content Calendar in 90 Minutes',
    description: 'Watch a complete month of content planned, written, and formatted — from scratch — in real time. Includes every prompt used.',
    duration: '34 min',
    level: 'Intermediate',
    category: 'Marketing',
    views: '7.2K',
    thumb: '📈',
  },
  {
    title: 'Legal: Contract Review Workflow',
    description: 'Step-by-step guide to using AI for contract analysis. Includes the exact prompts for spotting risk, summarizing terms, and flagging unusual clauses.',
    duration: '28 min',
    level: 'Intermediate',
    category: 'Legal',
    views: '5.1K',
    thumb: '⚖️',
  },
  {
    title: 'Healthcare: SOAP Notes in Under 3 Minutes',
    description: 'The complete clinical documentation workflow. Voice-to-note, structured SOAP format, EHR-ready output. Works for GPs, specialists, and allied health.',
    duration: '19 min',
    level: 'Beginner',
    category: 'Healthcare',
    views: '6.7K',
    thumb: '🩺',
  },
  {
    title: 'Executive: Inbox Zero in 25 Minutes',
    description: 'The AI email triage system used by CEOs and founders to get to inbox zero every day. Categorise, draft, and send — without reading every message.',
    duration: '26 min',
    level: 'Intermediate',
    category: 'Executive',
    views: '8.3K',
    thumb: '📧',
  },
  {
    title: 'Building AI Agents (No Code)',
    description: 'What agents are, why they\'re different from ChatGPT, and how to build your first automated agent — without writing a single line of code.',
    duration: '41 min',
    level: 'Advanced',
    category: 'Advanced',
    views: '4.9K',
    thumb: '🤖',
  },
  {
    title: 'Finance: Earnings Summary Automation',
    description: 'Watch a complete earnings call transcript go from audio to formatted analyst summary in 12 minutes. The exact workflow, with all prompts shown.',
    duration: '31 min',
    level: 'Intermediate',
    category: 'Finance',
    views: '3.8K',
    thumb: '💹',
  },
  {
    title: 'Creative: Full YouTube Video in 5 Hours',
    description: 'Idea to uploaded. Script → thumbnail → title → description → edit-ready clips. The complete creator workflow using ElevenLabs, Midjourney, and Claude.',
    duration: '52 min',
    level: 'Intermediate',
    category: 'Creative',
    views: '11.2K',
    thumb: '🎬',
  },
  {
    title: 'Midjourney Masterclass for Non-Designers',
    description: 'How to create professional-grade images without any design background. Prompt patterns, style guides, and the 10 templates that work every time.',
    duration: '38 min',
    level: 'Beginner',
    category: 'Creative',
    views: '15.6K',
    thumb: '🎨',
  },
  {
    title: 'Perplexity: Research That Rivals Analysts',
    description: 'Deep research on any topic in minutes. Competitive analysis, market research, due diligence — how to get analyst-grade research using Perplexity Pro.',
    duration: '24 min',
    level: 'Intermediate',
    category: 'Getting Started',
    views: '6.4K',
    thumb: '🔍',
  },
  {
    title: 'Understanding Your Monthly Stack Update',
    description: 'What happens during a stack update, how to install new tools, what\'s changing in AI this month, and how to update your workflows for new capabilities.',
    duration: '16 min',
    level: 'Beginner',
    category: 'Getting Started',
    views: '4.1K',
    thumb: '🔄',
  },
]

const LEVEL_COLORS: Record<string, string> = {
  'Beginner': 'text-emerge-400',
  'Intermediate': 'text-amber-400',
  'Advanced': 'text-red-400',
}

export default function LearnPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filtered = activeCategory === 'All' ? VIDEOS : VIDEOS.filter(v => v.category === activeCategory)

  return (
    <div className="min-h-screen bg-background">
      <Nav />

      {/* Hero */}
      <section className="kaal-panel text-white">
        <div className="pt-36 pb-24 text-center max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
            <Badge variant="volta">Video Library</Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-normal tracking-tight text-white">
              Learn from the best.
              <br />
              <span className="font-display italic gradient-text">Apply immediately.</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
              Every tutorial built around real workflows. Watch once, apply forever.
              No theory — just the exact steps.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: Play, value: '40+ hours', label: 'of tutorials (Pro)' },
            { icon: BookOpen, value: '6 modules', label: 'core curriculum (Standard)' },
            { icon: Users, value: '2,400+', label: 'active learners' },
          ].map(s => {
            const Icon = s.icon
            return (
              <div key={s.label} className="glass rounded-xl p-5 text-center">
                <Icon className="h-5 w-5 text-volta-400 mx-auto mb-2" />
                <p className="text-xl font-bold">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Filter */}
      <section className="max-w-6xl mx-auto px-6 pb-6">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'rounded-full border px-4 py-1.5 text-sm transition-all',
                activeCategory === cat
                  ? 'border-volta-500 bg-volta-500/10 text-volta-300'
                  : 'border-border/50 text-muted-foreground hover:border-border hover:text-foreground'
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Video grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((video, i) => {
            const thumb = CAT_THUMB[video.category] ?? CAT_THUMB['Getting Started']
            const ThumbIcon = thumb.icon
            return (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl overflow-hidden group cursor-pointer hover:-translate-y-1 transition-transform"
            >
              {/* Thumbnail */}
              <div className={cn('aspect-video bg-gradient-to-br flex items-center justify-center relative', thumb.grad)}>
                <ThumbIcon className="h-12 w-12 text-white/90" strokeWidth={1.75} />
                <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider text-white/70">{video.category}</span>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur flex items-center justify-center ring-1 ring-white/30">
                    <Play className="h-6 w-6 text-white ml-1" />
                  </div>
                </div>
                <Badge variant="secondary" className="absolute bottom-3 right-3 text-[10px]">
                  <Clock className="h-2.5 w-2.5 mr-1" />{video.duration}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className={cn('text-xs font-semibold', LEVEL_COLORS[video.level])}>{video.level}</span>
                  <span className="text-muted-foreground/40">·</span>
                  <span className="text-xs text-muted-foreground">{video.views} views</span>
                </div>
                <h3 className="text-sm font-semibold mb-1 group-hover:text-volta-300 transition-colors line-clamp-2">{video.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{video.description}</p>
              </div>
            </motion.div>
            )
          })}
        </div>

        {/* Pro upsell */}
        <div className="mt-10 rounded-2xl border border-volta-500/30 bg-volta-500/5 p-8 text-center">
          <p className="text-xs text-volta-400 uppercase tracking-wider mb-2">Pro Bundle</p>
          <h3 className="text-2xl font-semibold mb-2">40+ hours of advanced tutorials</h3>
          <p className="text-muted-foreground text-sm mb-5 max-w-xl mx-auto">
            The Standard tier includes 6 core modules. Pro Bundle unlocks the complete library:
            every profession deep-dive, every advanced workflow, and all future tutorials.
          </p>
          <Button asChild variant="volta" size="lg">
            <Link href="/devices#configurator">Upgrade to Pro Bundle <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* Community */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-2xl p-8">
            <div className="w-12 h-12 mb-4 rounded-xl bg-volta-500/10 border border-volta-500/20 flex items-center justify-center">
              <MessageCircle className="h-6 w-6 text-volta-600" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community Forum</h3>
            <p className="text-sm text-muted-foreground mb-4">
              2,400+ professionals sharing prompts, workflows, and wins. The fastest way to level up is learning from people doing the same job as you.
            </p>
            <Button asChild variant="white-outline" size="sm">
              <Link href="/support">Join the Community <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="glass rounded-2xl p-8">
            <div className="w-12 h-12 mb-4 rounded-xl bg-volta-500/10 border border-volta-500/20 flex items-center justify-center">
              <Users className="h-6 w-6 text-volta-600" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Monthly Live Q&amp;A</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Every month, our specialists host a live Q&amp;A session. Ask anything — about your workflow, a specific tool, or where AI is headed next.
            </p>
            <Button asChild variant="white-outline" size="sm">
              <Link href="/support">Register for next session <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
