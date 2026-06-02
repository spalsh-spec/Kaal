// ───────────────────────────────────────────────
// Helios.Ai — Leverage OS landing content (data only)
// Australian English. Simple, premium, non-technical.
// ───────────────────────────────────────────────

export const BRAND = {
  company: 'Helios.Ai',
  product: 'Leverage OS',
  slogan: 'We believe everyone can be a rising star.',
  secondary: [
    'Updated every week, so you are never left behind.',
    'Like your own personal Jarvis.',
    'Your AI stack, operating as one system.',
  ],
} as const

// ── Hero slideshow ───────────────────────────────
// kind: 'visual' = built-in AI-burst graphic (no asset needed)
//       'image'  = replace src with your own
//       'flow'   = built-in flowchart visual
//       'video'  = video placeholder with play overlay
export type Slide = {
  id: string
  kind: 'visual' | 'image' | 'flow' | 'video'
  eyebrow: string
  title: string
  subtitle: string
  // For image/video slides, drop your asset at this path (see /public/placeholders)
  src?: string
}

export const SLIDES: Slide[] = [
  {
    id: 'burst',
    kind: 'visual',
    eyebrow: 'Helios.Ai',
    title: 'Everyone can be a rising star.',
    subtitle:
      'Leverage OS is your AI-powered operating layer — build, organise and automate your work, every single week.',
  },
  {
    id: 'flow',
    kind: 'flow',
    eyebrow: 'One system',
    title: 'Your whole AI stack, working as one.',
    subtitle: 'From a rough idea to finished work — Leverage OS connects the tools and does the heavy lifting.',
  },
  {
    id: 'walkthrough',
    kind: 'video',
    eyebrow: 'See it move',
    title: 'Like your own personal Jarvis.',
    subtitle: 'A two-minute look at how Leverage OS plans, builds and improves your work for you.',
    src: '/placeholders/video-walkthrough.svg',
  },
  {
    id: 'cinematic',
    kind: 'image',
    eyebrow: 'Updated weekly',
    title: 'Never left behind.',
    subtitle: 'New tools, new workflows, new wins land in your system every week — automatically.',
    src: '/placeholders/hero-cinematic.svg',
  },
]

// ── Pyramid images (1 main + 2 half) ─────────────
export const PYRAMID = {
  main: {
    src: '/placeholders/pyramid-main.svg',
    caption: 'Your AI tools, organised in one calm place.',
  },
  left: {
    src: '/placeholders/pyramid-left.svg',
    caption: 'Automate the busywork. Keep the credit.',
  },
  right: {
    src: '/placeholders/pyramid-right.svg',
    caption: 'Improve a little more, every week.',
  },
} as const

// ── Product explanation (non-technical) ──────────
export const EXPLAIN = [
  { icon: 'Layers', title: 'All your AI, in one place', body: 'Every tool you need, organised and ready — no tabs, no chaos, no setup.' },
  { icon: 'CalendarClock', title: 'Upgraded every week', body: 'Your system quietly gets better in the background, so your work does too.' },
  { icon: 'Cpu', title: 'Your personal AI operating system', body: 'One layer that plans, builds and manages — it works the way you think.' },
  { icon: 'Rocket', title: 'Build, automate, sell, manage', body: 'A practical way to get real work done faster, from idea to result.' },
  { icon: 'Sparkles', title: 'Made for results, not complexity', body: 'No technical skills required. You bring the goal; Leverage OS handles the how.' },
] as const

// ── Flow diagram ─────────────────────────────────
export const FLOW = [
  { icon: 'Lightbulb', label: 'Your idea', sub: 'Tell it what you want' },
  { icon: 'BrainCircuit', label: 'AI planning', sub: 'It maps the steps' },
  { icon: 'Plug', label: 'Tools connect', sub: 'The right apps link up' },
  { icon: 'Hammer', label: 'Work gets built', sub: 'Drafts, assets, output' },
  { icon: 'TrendingUp', label: 'Improves weekly', sub: 'Better every update' },
] as const

// ── Plans (ONLY Normal & Pro) ────────────────────
export type Plan = {
  id: 'normal' | 'pro'
  name: string
  for: string
  price: string
  cadence: string
  highlight: boolean
  features: string[]
}

export const PLANS: Plan[] = [
  {
    id: 'normal',
    name: 'Normal',
    for: 'For individuals and small operators who want a ready-to-use AI system.',
    price: '$49',
    cadence: 'per month',
    highlight: false,
    features: [
      'Your full AI stack, set up for you',
      'Organised in one simple system',
      'Weekly tool updates included',
      'Step-by-step videos and guides',
      'Email support',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    for: 'For founders and businesses who want deeper automation, live examples and weekly upgrades.',
    price: '$149',
    cadence: 'per month',
    highlight: true,
    features: [
      'Everything in Normal, plus:',
      'Deeper automation and custom workflows',
      'Live examples of a company being built',
      'Priority tech support',
      'Weekly upgrade sessions',
      '“Buy and forget” managed setup',
    ],
  },
]

// ── Support modules (informational + selectable) ─
export const SUPPORT_MODULES = [
  { id: 'flowchart', icon: 'GitBranch', title: 'Flowchart', body: 'See exactly how your work flows from idea to result.' },
  { id: 'tech', icon: 'LifeBuoy', title: 'Tech Support', body: 'Real people on hand when you need a hand.' },
  { id: 'buyforget', icon: 'PackageCheck', title: 'Buy and Forget', body: 'We set it up and keep it running. You just use it.' },
  { id: 'ready', icon: 'Power', title: 'Ready to Use', body: 'Switch on and go — no setup, no fuss.' },
  { id: 'live', icon: 'Radio', title: 'Live Company Build', body: 'Watch a real company built in real time, step by step.' },
  { id: 'ads', icon: 'Clapperboard', title: 'Super Ads', body: 'Premium ads with smooth, Apple-style transitions.' },
  { id: 'media', icon: 'Images', title: 'Videos & Images', body: 'A growing library of walkthroughs and visual guides.' },
] as const

// ── Support levels (order flow stage 3) ──────────
export const SUPPORT_LEVELS = [
  { id: 'ready', name: 'Ready to Use', body: 'Pre-built and switched on for you. Start in minutes.' },
  { id: 'tech', name: 'Tech Support', body: 'Priority help and onboarding from a real specialist.' },
  { id: 'buyforget', name: 'Buy and Forget', body: 'Fully managed — we run and upgrade it for you.' },
] as const

// ── Billing cadences (order flow stage 2) ────────
export const CADENCES = [
  { id: 'monthly', name: 'Monthly', body: 'Flexible. Cancel anytime.', note: '' },
  { id: 'annual', name: 'Annual', body: 'Two months free.', note: 'Save ~17%' },
] as const

// ── Video + image showcase ───────────────────────
export const VIDEOS = [
  { id: 'walkthrough', title: 'Product walkthrough', src: '/placeholders/video-walkthrough.svg' },
  { id: 'realbuild', title: 'Real company build', src: '/placeholders/video-realbuild.svg' },
  { id: 'superads', title: 'Super Ads demo', src: '/placeholders/video-superads.svg' },
  { id: 'support', title: 'Support walkthrough', src: '/placeholders/video-support.svg' },
] as const

// ── Visual sections (chips/anchors) ──────────────
export const VISUAL_SECTIONS = [
  'AI Stack', 'AI-Powered Workflow', 'AI OS', 'Live Company Build', 'Weekly Updates', 'Support & Setup',
] as const
