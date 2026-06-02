// ─────────────────────────────────────────────
// HeliosOS — Static Data
// ─────────────────────────────────────────────

export const PROFESSIONS = [
  {
    id: 'marketing',
    label: 'Marketing Professional',
    emoji: '📈',
    tagline: 'Campaigns, copy, and content — at 10× speed.',
    tools: ['Claude for strategy', 'Perplexity for research', 'Midjourney for visuals', 'HubSpot AI agent', 'Canva AI'],
    wins: ['Write a month of social content in 2 hours', 'Generate A/B test copy instantly', 'Competitive intelligence on autopilot'],
    color: 'from-violet-500/20 to-purple-600/10',
    border: 'border-violet-500/20',
  },
  {
    id: 'lawyer',
    label: 'Legal Professional',
    emoji: '⚖️',
    tagline: 'Research, drafting, and review — in minutes.',
    tools: ['Claude for document analysis', 'Perplexity Legal', 'Contract review agent', 'Case research agent', 'Citation checker'],
    wins: ['Draft contracts 5× faster', 'Summarize 200-page filings instantly', 'Spot risks humans miss'],
    color: 'from-blue-500/20 to-indigo-600/10',
    border: 'border-blue-500/20',
  },
  {
    id: 'student',
    label: 'University Student',
    emoji: '🎓',
    tagline: 'Study smarter. Graduate ahead.',
    tools: ['Claude for essay writing', 'Perplexity for research', 'NotebookLM', 'Anki AI', 'Citation manager agent'],
    wins: ['Research papers in half the time', 'Understand any concept instantly', 'Build projects that stand out'],
    color: 'from-emerald-500/20 to-teal-600/10',
    border: 'border-emerald-500/20',
  },
  {
    id: 'creator',
    label: 'Content Creator',
    emoji: '🎬',
    tagline: 'Ideas to published. Daily.',
    tools: ['Claude for scripts', 'Midjourney for thumbnails', 'ElevenLabs voice AI', 'YouTube SEO agent', 'Video editor AI'],
    wins: ['Script, thumbnail, and description in 20 min', 'Never run out of video ideas', 'Grow your channel algorithmically'],
    color: 'from-rose-500/20 to-orange-600/10',
    border: 'border-rose-500/20',
  },
  {
    id: 'executive',
    label: 'Executive & Founder',
    emoji: '🚀',
    tagline: 'Decisions faster. Delegation easier.',
    tools: ['Claude for strategy', 'Perplexity Pro', 'Email AI agent', 'Meeting summary agent', 'Board deck AI'],
    wins: ['Zero inbox in 30 minutes', 'Board decks drafted overnight', 'Market intelligence on demand'],
    color: 'from-amber-500/20 to-yellow-600/10',
    border: 'border-amber-500/20',
  },
  {
    id: 'doctor',
    label: 'Medical Professional',
    emoji: '🩺',
    tagline: 'More time caring. Less time documenting.',
    tools: ['Claude for clinical notes', 'Medical research agent', 'Billing code assistant', 'Patient summary agent', 'Continuing education AI'],
    wins: ['SOAP notes written before you leave the room', 'Drug interactions checked instantly', 'Literature reviews in minutes'],
    color: 'from-cyan-500/20 to-sky-600/10',
    border: 'border-cyan-500/20',
  },
  {
    id: 'realestate',
    label: 'Real Estate Agent',
    emoji: '🏡',
    tagline: 'Listings, leads, and closings — amplified.',
    tools: ['Claude for listing copy', 'Perplexity for market data', 'CRM AI agent', 'Email outreach agent', 'Negotiation prep AI'],
    wins: ['Perfect listing in 10 minutes', 'Follow up with 100 leads automatically', 'Market reports clients actually read'],
    color: 'from-green-500/20 to-lime-600/10',
    border: 'border-green-500/20',
  },
  {
    id: 'finance',
    label: 'Finance Professional',
    emoji: '💹',
    tagline: 'Analysis, reports, and models — automated.',
    tools: ['Claude for analysis', 'Perplexity finance', 'Excel AI agent', 'Report generation agent', 'Market research AI'],
    wins: ['Monthly reports in 1 hour', 'Earnings summaries in real time', 'Risk analysis without the grunt work'],
    color: 'from-slate-500/20 to-zinc-600/10',
    border: 'border-slate-500/20',
  },
] as const

export type Profession = typeof PROFESSIONS[number]

// ─────────────────────────────────────────────
export const ECOSYSTEM_TOOLS = [
  { name: 'Claude', description: 'World\'s most capable AI assistant', category: 'Core AI', logo: '◆' },
  { name: 'Cursor', description: 'AI code editor (even for non-coders)', category: 'Productivity', logo: '⊡' },
  { name: 'Perplexity', description: 'AI-powered research engine', category: 'Research', logo: '◎' },
  { name: 'Midjourney', description: 'Photorealistic image generation', category: 'Creative', logo: '✦' },
  { name: 'ElevenLabs', description: 'Hyper-realistic AI voice', category: 'Creative', logo: '♫' },
  { name: 'NotebookLM', description: 'AI that reads your documents', category: 'Research', logo: '◉' },
  { name: 'ChatGPT', description: 'OpenAI\'s flagship assistant', category: 'Core AI', logo: '⬡' },
  { name: 'Runway', description: 'AI video generation & editing', category: 'Creative', logo: '▶' },
  { name: 'Replit', description: 'Build anything with AI', category: 'Productivity', logo: '⚡' },
  { name: 'HubSpot AI', description: 'CRM and marketing automation', category: 'Business', logo: '◈' },
  { name: 'Otter.ai', description: 'AI meeting notes & summaries', category: 'Productivity', logo: '◐' },
  { name: 'Canva AI', description: 'Design anything, instantly', category: 'Creative', logo: '⬟' },
] as const

// ─────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    name: 'Sarah Chen',
    role: 'Marketing Director, Fintech startup',
    avatar: 'SC',
    gradient: 'from-violet-400 to-purple-600',
    text: 'I used to spend 3 days producing our monthly content calendar. Now I do it in 90 minutes — and it\'s better. My team thinks I hired a full agency.',
    result: '15 hours saved per week',
  },
  {
    name: 'James Thornton',
    role: 'Partner, Thornton & Associates (Law)',
    avatar: 'JT',
    gradient: 'from-blue-400 to-indigo-600',
    text: 'I\'m 58 and I\'ve never considered myself a tech person. The setup was literally plug in and go. Two months in, I draft contracts in half the time. My associates are jealous.',
    result: '12 hours of billing saved weekly',
  },
  {
    name: 'Maya Patel',
    role: 'Pre-med Student, University of Michigan',
    avatar: 'MP',
    gradient: 'from-emerald-400 to-teal-600',
    text: 'My classmates are still googling things. I ask my AI and get a structured, cited answer in 30 seconds. My GPA went from 3.2 to 3.8 in one semester.',
    result: 'Top 5% of graduating class',
  },
  {
    name: 'Rodrigo Vasquez',
    role: 'Real Estate Agent, Miami',
    avatar: 'RV',
    gradient: 'from-amber-400 to-orange-500',
    text: 'My listing descriptions used to take me 45 minutes each. Now they take 4 minutes and they\'re incredible. I\'ve closed 3 extra deals this quarter.',
    result: '$41K extra in commissions',
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'GP, Central Health Clinic',
    avatar: 'PS',
    gradient: 'from-cyan-400 to-sky-600',
    text: 'Documentation used to follow me home every night. Now my notes are done before I leave the office. I\'ve reclaimed my evenings.',
    result: '2 hrs/day given back to life',
  },
  {
    name: 'Alex Kim',
    role: 'YouTube Creator, 280K subscribers',
    avatar: 'AK',
    gradient: 'from-rose-400 to-pink-600',
    text: 'I went from posting once a week to posting 4 times. My watch time is up 180%. The AI handles scripting, thumbnails, descriptions — I just bring the ideas.',
    result: '3× content output, channel 2× growth',
  },
] as const

// ─────────────────────────────────────────────
export const PRICING_TIERS = [
  {
    id: 'standard',
    name: 'Standard',
    tagline: 'Your AI-powered MacBook, ready on day one.',
    priceMonthly: null,
    priceOnce: 500000, // $5,000
    includes: [
      'HeliosOS MacBook (Normal trim) — your choice of colour',
      'HeliosOS pre-installed & configured',
      'Your profession\'s full AI tool stack',
      'Authenticated & ready — no setup',
      '6 starter tutorial videos',
      '1 onboarding call with an AI specialist',
      '3 months of Stack Updates included',
      'HeliosOS community access',
      '1-year hardware warranty extension',
    ],
    addons: ['Pro trim: +$1,500', 'Max trim: +$3,000', 'Premium colour: +$150'],
    cta: 'Order Standard',
    popular: false,
    color: 'border-border',
  },
  {
    id: 'pro',
    name: 'Pro Bundle',
    tagline: 'Everything in Standard, plus a personal AI coach.',
    priceMonthly: null,
    priceOnce: 620000, // $6,200 = $5,000 base + $1,200 setup upgrade
    includes: [
      'HeliosOS MacBook — your choice of trim & colour',
      'Everything in Standard, plus:',
      '6 months of Stack Updates',
      '3 months of Leverage Consulting (1 session/month)',
      'Priority support — 4-hour response',
      'Advanced AI agent library',
      'Custom workflow buildout for your role',
      'Full video library (40+ hours)',
      'Referral program ($200 per referral)',
    ],
    addons: ['Add 6 more consulting months: +$599'],
    cta: 'Order Pro Bundle',
    popular: true,
    color: 'border-volta-500',
  },
  {
    id: 'team',
    name: 'Team / Enterprise',
    tagline: 'Deploy AI superpowers across your entire organization.',
    priceMonthly: null,
    priceOnce: null,
    includes: [
      'Volume pricing (5+ devices)',
      'Custom profession profiles built for your team',
      'Dedicated onboarding specialist',
      'Quarterly strategy sessions',
      'SSO + MDM integration',
      'Custom AI agent development',
      'SLA-backed support',
      'Unlimited Stack Updates',
    ],
    addons: [],
    cta: 'Talk to Sales',
    popular: false,
    color: 'border-emerge-500/40',
  },
] as const

// ─────────────────────────────────────────────
export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Choose Your MacBook',
    description: 'Pick your trim — Normal, Pro, or Max. All configured identically. All arrive perfect.',
    icon: '💻',
  },
  {
    step: '02',
    title: 'Tell Us Your Field',
    description: 'Marketing? Law? Medicine? Finance? We load the exact AI tools that matter to your work — and nothing you don\'t need.',
    icon: '🎯',
  },
  {
    step: '03',
    title: 'We Build Your Stack',
    description: 'Our team pre-loads, pre-configures, and authenticates everything. Every agent, plugin, and workflow is ready before it ships.',
    icon: '⚡',
  },
  {
    step: '04',
    title: 'Start Winning',
    description: 'Open the box and open your device. Tutorial videos walk you through each tool in plain English. Your first AI win: Day 1.',
    icon: '🚀',
  },
] as const

// ─────────────────────────────────────────────
export const CONSULTING_PACKAGES = [
  {
    name: 'Quick Win Session',
    duration: '60 min',
    price: 29900,
    description: 'Single focused session. Pick one workflow, transform it completely.',
    includes: ['Deep dive into one specific task', 'Custom AI workflow built live', 'Recording + written steps provided', 'Follow-up Slack access for 7 days'],
  },
  {
    name: 'Monthly Accelerator',
    duration: '3 sessions/month',
    price: 59900,
    description: 'Ongoing partnership. New wins every month.',
    includes: ['3 × 60-min sessions per month', 'Slack access throughout the month', 'Custom agent builds', 'Monthly leverage report'],
  },
  {
    name: 'Full Transformation',
    duration: '6 months',
    price: 299900,
    description: 'Completely rebuild how you work. 10× guaranteed or money back.',
    includes: ['2 sessions per month for 6 months', 'Full workflow audit and rebuild', 'Dedicated AI specialist', 'Custom agent development', '10× guarantee (yes, really)'],
  },
] as const
