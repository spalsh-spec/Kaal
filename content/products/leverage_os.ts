import type { Product } from '@/types/product'

// ──────────────────────────────────────────────────────────────────────────
// Leverage OS (HeliosOS) — the MASTER TEMPLATE.
// This config encodes the EXACT content of the current Helios.Ai homepage.
// Editing these strings/arrays changes the site; the visual system is fixed.
//
// Note: the slug is "leverage_os" per the product brief; the displayed product
// name is "HeliosOS" (the live brand). Both are intentional.
// ──────────────────────────────────────────────────────────────────────────

export const leverageOs: Product = {
  identity: {
    product_name: 'HeliosOS',
    company_name: 'Helios.Ai',
    slug: 'leverage_os',
    short_tagline: 'The AI-native MacBook.',
    main_slogan: 'we believe everyone can be a rising star.',
    secondary_slogans: [
      "Open the lid — you're already ahead.",
      'One purchase. A lifetime of leverage.',
    ],
    category: 'AI Hardware',
    target_user: "Professionals who aren't 'tech people'",
    simple_explanation:
      'A MacBook pre-loaded and configured with the exact AI tools for your profession — ready the moment you open the lid.',
  },

  hero: {
    eyebrow: 'HeliosOS',
    hero_title: 'The AI-native MacBook.',
    hero_subtitle: "Open the lid — you're already ahead. Pre-loaded for your profession. From $5,000.",
    hero_slides: [
      { slide_type: 'component', component_id: 'ai-laptop', alt_text: 'HeliosOS MacBook with pre-installed AI apps' },
    ],
    primary_button: { text: 'Order Now', order: true },
    secondary_button: { text: 'Learn More', scrollTo: 'how' },
    note: '✓ 30-day money-back returns · ✓ Ships in 5 days',
    scroll_indicator_to: 'profession',
  },

  howItWorks: {
    enabled: true,
    eyebrow: 'How it works',
    title: 'Set up in 3 simple steps.',
    subtitle: 'No tech skills. No setup. You just open it and go.',
    steps: [
      { title: 'Tell us your job', body: 'Marketing, law, medicine, finance — we load the exact AI tools for your work.', icon: 'target' },
      { title: 'We set it all up', body: 'Installed, authenticated and tested. It arrives ready — nothing for you to configure.', icon: 'package-check' },
      { title: 'Open the lid', body: 'You’re already ahead on day one — a real win in your first hour.', icon: 'rocket' },
    ],
    secondary_button: { text: 'See full process', href: '/how-it-works' },
  },

  explainer: {
    enabled: true,
    eyebrow: 'Pre-loaded for you',
    title: 'Built for your profession.',
    subtitle: 'Marketing, law, medicine, finance and more — the exact AI stack for your work, ready on day one.',
    chips: [
      { label: 'Marketing Professional', icon: 'trending-up' },
      { label: 'Legal Professional', icon: 'scale' },
      { label: 'University Student', icon: 'graduation-cap' },
      { label: 'Content Creator', icon: 'clapperboard' },
      { label: 'Executive & Founder', icon: 'rocket' },
      { label: 'Medical Professional', icon: 'stethoscope' },
      { label: 'Real Estate Agent', icon: 'home' },
      { label: 'Finance Professional', icon: 'line-chart' },
    ],
    secondary_button: { text: 'Explore Fields', href: '/for-your-field' },
  },

  stack: {
    enabled: true,
    eyebrow: 'Zero setup',
    title: 'Your entire AI stack. As one.',
    subtitle: 'The best AI tools — pre-installed, authenticated, and updated every week.',
    items: [
      { brand: 'claude', name: 'Claude', desc: 'Reasoning & writing' },
      { brand: 'gemini', name: 'Gemini', desc: 'Multimodal AI' },
      { brand: 'perplexity', name: 'Perplexity', desc: 'AI research' },
      { brand: 'huggingface', name: 'Hugging Face', desc: 'Open models' },
      { brand: 'elevenlabs', name: 'ElevenLabs', desc: 'AI voice' },
      { brand: 'github', name: 'GitHub', desc: 'Code & Copilot' },
      { brand: 'notion', name: 'Notion', desc: 'Docs & AI' },
      { brand: 'figma', name: 'Figma', desc: 'Design' },
      { brand: 'grammarly', name: 'Grammarly', desc: 'Writing AI' },
      { brand: 'hubspot', name: 'HubSpot', desc: 'CRM & marketing' },
      { brand: 'zapier', name: 'Zapier', desc: 'Automation' },
      { brand: 'replit', name: 'Replit', desc: 'Build with AI' },
    ],
    secondary_button: { text: 'How It Works', href: '/how-it-works' },
  },

  plans: {
    enabled: true,
    eyebrow: 'Choose your power',
    title: 'Normal. Pro. Max.',
    subtitle: 'Three trims of one machine. Every HeliosOS MacBook starts at $5,000.',
    featured_badge: 'Recommended',
    items: [
      {
        id: 'normal', name: 'Normal', badge: 'Included',
        one_line_description: 'M3-class. Whisper-quiet, all-day battery, runs your full AI stack with ease.',
        features: ['Apple M3', '16GB RAM', '512GB SSD', '18-hr battery'],
        delta_cents: 0,
      },
      {
        id: 'pro', name: 'Pro', badge: 'Recommended',
        one_line_description: 'M3 Pro-class. Runs multiple AI agents at once without breaking a sweat.',
        features: ['Apple M3 Pro', '18GB RAM', '512GB SSD', '18-hr battery'],
        delta_cents: 150000,
      },
      {
        id: 'max', name: 'Max', badge: 'Power User',
        one_line_description: 'M3 Max-class. Local models, video generation, everything — simultaneously.',
        features: ['Apple M3 Max', '36GB RAM', '1TB SSD', '22-hr battery'],
        delta_cents: 300000,
      },
    ],
    secondary_button: { text: 'Compare & Configure', href: '/devices#configurator' },
  },

  proof: {
    enabled: true,
    eyebrow: 'Real people, real results',
    title: 'Made for people who aren’t “tech people.”',
    subtitle: 'A lawyer, a doctor, an estate agent — none of them coders. All of them ahead now.',
    trust: [
      { label: '4.9 average rating', icon: 'star' },
      { label: '2,400+ professionals', icon: 'users' },
      { label: '30-day returns', icon: 'rotate-ccw' },
      { label: 'Day-1 onboarding call', icon: 'headphones' },
    ],
    testimonials: [
      {
        name: 'James Thornton', role: 'Partner, Thornton & Associates (Law)', avatar: 'JT',
        gradient: 'from-blue-400 to-indigo-600',
        text: "I'm 58 and I've never considered myself a tech person. The setup was literally plug in and go. Two months in, I draft contracts in half the time. My associates are jealous.",
        result: '12 hours of billing saved weekly',
      },
      {
        name: 'Dr. Priya Sharma', role: 'GP, Central Health Clinic', avatar: 'PS',
        gradient: 'from-cyan-400 to-sky-600',
        text: 'Documentation used to follow me home every night. Now my notes are done before I leave the office. I’ve reclaimed my evenings.',
        result: '2 hrs/day given back to life',
      },
      {
        name: 'Rodrigo Vasquez', role: 'Real Estate Agent, Miami', avatar: 'RV',
        gradient: 'from-amber-400 to-orange-500',
        text: "My listing descriptions used to take me 45 minutes each. Now they take 4 minutes and they're incredible. I've closed 3 extra deals this quarter.",
        result: '$41K extra in commissions',
      },
    ],
    secondary_button: { text: 'How It Works', href: '/how-it-works' },
  },

  // Optional sections — OFF for Leverage OS so its homepage stays identical.
  supportModules: { enabled: false, eyebrow: '', title: '', subtitle: '', modules: [], secondary_button: { text: '' } },
  pyramid: { enabled: false, main_image: '', pyramid_left_image: '', pyramid_right_image: '' },
  videoShowcase: { enabled: false, items: [] },

  footerCta: {
    enabled: true,
    eyebrow: 'Order now',
    title: 'One purchase. A lifetime of leverage.',
    subtitle: 'From $5,000. Hardware included — no monthly fee for the device.',
    note: '✓ 30-day money-back returns · ✓ Ships in 5 days · ✓ Day-1 onboarding call',
    primary_button: { text: 'Order Now', order: true },
    secondary_button: { text: 'Talk to Sales', href: '/consulting' },
  },

  order: {
    mode: 'configurator',
    configurator_href: '/devices#configurator',
    submit_label: 'Order Now',
  },

  seo: {
    meta_title: 'HeliosOS — The AI-native MacBook',
    meta_description:
      'HeliosOS is a MacBook pre-loaded with the exact AI tools for your profession — ready the moment you open the lid. From $5,000.',
    open_graph_image: '/hero/macbook.png',
  },
}

export default leverageOs
