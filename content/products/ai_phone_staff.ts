import type { Product } from '@/types/product'

// ──────────────────────────────────────────────────────────────────────────
// SAMPLE product — proves the template reuses cleanly for a different product.
// Same skeleton, different content. Intentionally light copy.
// Demonstrates: an IMAGE hero (swap image_path), monogram stack tiles (no
// brand icons), two plans, and the INLINE order flow (no bespoke configurator).
// Swap the placeholder image paths for real assets under /public.
// ──────────────────────────────────────────────────────────────────────────

export const aiPhoneStaff: Product = {
  identity: {
    product_name: 'AI Phone Staff',
    company_name: 'Kaal.Ai',
    slug: 'ai_phone_staff',
    short_tagline: 'Your phone, answered. Always.',
    main_slogan: 'Never miss a customer again.',
    secondary_slogans: ['A receptionist that never sleeps.', 'Books jobs while you work.'],
    category: 'AI Voice Agent',
    target_user: 'Small business owners who miss calls',
    simple_explanation:
      'An AI receptionist that answers every call, books appointments, and texts you the details — so you never lose a customer to voicemail.',
  },

  hero: {
    eyebrow: 'AI Phone Staff',
    hero_title: 'Your phone, answered. Always.',
    hero_subtitle: 'An AI receptionist that books jobs, answers questions and texts you the details — 24/7. From $199/mo.',
    hero_slides: [
      // Placeholder image — swap image_path for a real product shot.
      { slide_type: 'image', image_path: '/hero/macbook.png', alt_text: 'AI Phone Staff dashboard (placeholder)' },
    ],
    primary_button: { text: 'Get Started', order: true },
    secondary_button: { text: 'Hear a Demo', scrollTo: 'how' },
    note: '✓ Cancel anytime · ✓ Live in 24 hours',
    scroll_indicator_to: 'how',
  },

  howItWorks: {
    enabled: true,
    eyebrow: 'How it works',
    title: 'Live in 3 simple steps.',
    subtitle: 'No hardware. No engineers. Just forward your line.',
    steps: [
      { title: 'Tell us your business', body: 'Hours, services, prices, FAQs — we train your agent on what matters.', icon: 'phone' },
      { title: 'We build your agent', body: 'A natural-sounding voice that answers, books and routes — configured for you.', icon: 'bot' },
      { title: 'Forward your number', body: 'Point your line at the agent. Every call answered from minute one.', icon: 'rocket' },
    ],
    secondary_button: { text: 'See examples', href: '/' },
  },

  explainer: {
    enabled: true,
    eyebrow: 'Built for your trade',
    title: 'Made for the work you do.',
    subtitle: 'Trades, clinics, salons, agencies — the agent speaks your business and books the way you book.',
    chips: [
      { label: 'Plumbers & Trades', icon: 'wrench' },
      { label: 'Dental & Clinics', icon: 'stethoscope' },
      { label: 'Salons & Spas', icon: 'sparkles' },
      { label: 'Real Estate', icon: 'home' },
      { label: 'Agencies', icon: 'briefcase' },
      { label: 'Restaurants', icon: 'clock' },
    ],
    secondary_button: { text: 'Learn more', href: '/' },
  },

  stack: {
    enabled: true,
    eyebrow: 'Works with your tools',
    title: 'Plugs into what you already use.',
    subtitle: 'Bookings, texts and notes flow straight into your existing systems.',
    items: [
      { name: 'Calendar', desc: 'Books appointments' },
      { name: 'SMS', desc: 'Texts you details' },
      { name: 'CRM', desc: 'Logs every lead' },
      { name: 'Email', desc: 'Sends confirmations' },
      { name: 'Maps', desc: 'Shares directions' },
      { name: 'Payments', desc: 'Takes deposits' },
    ],
    secondary_button: { text: 'How it works', href: '/' },
  },

  plans: {
    enabled: true,
    eyebrow: 'Simple pricing',
    title: 'Normal. Pro.',
    subtitle: 'Start small. Upgrade when the calls roll in.',
    featured_badge: 'Recommended',
    items: [
      {
        id: 'normal', name: 'Normal', badge: 'Included',
        one_line_description: 'Everything one busy line needs to stop missing customers.',
        best_for: 'Solo operators',
        features: ['1 phone line', 'Answers & books 24/7', 'Text-you summaries', 'Calendar sync'],
        price_label: '$199/mo',
      },
      {
        id: 'pro', name: 'Pro', badge: 'Recommended',
        one_line_description: 'Multiple lines, deeper integrations, and live call transfers.',
        best_for: 'Growing teams',
        features: ['Up to 5 lines', 'CRM + payments', 'Live call transfer', 'Priority support'],
        price_label: '$399/mo',
      },
    ],
    secondary_button: { text: 'Compare plans', href: '/' },
  },

  proof: {
    enabled: true,
    eyebrow: 'Real businesses, real results',
    title: 'It pays for itself in one saved job.',
    subtitle: 'Owners who stopped losing customers to voicemail.',
    trust: [
      { label: '4.8 average rating', icon: 'star' },
      { label: '1,100+ businesses', icon: 'users' },
      { label: 'Live in 24 hours', icon: 'clock' },
      { label: 'Cancel anytime', icon: 'rotate-ccw' },
    ],
    testimonials: [
      {
        name: 'Dave Miller', role: 'Owner, Miller Plumbing', avatar: 'DM',
        gradient: 'from-blue-400 to-indigo-600',
        text: 'I was losing two or three jobs a week to voicemail. Now every call gets answered and booked. Paid for itself the first week.',
        result: '~$3K/mo in recovered jobs',
      },
      {
        name: 'Lena Cruz', role: 'Manager, Glow Salon', avatar: 'LC',
        gradient: 'from-rose-400 to-pink-600',
        text: 'Clients book themselves now, even after hours. My front desk finally has breathing room.',
        result: '30% more after-hours bookings',
      },
    ],
    secondary_button: { text: 'How it works', href: '/' },
  },

  supportModules: { enabled: false, eyebrow: '', title: '', subtitle: '', modules: [], secondary_button: { text: '' } },
  pyramid: { enabled: false, main_image: '', pyramid_left_image: '', pyramid_right_image: '' },
  videoShowcase: { enabled: false, items: [] },

  footerCta: {
    enabled: true,
    eyebrow: 'Get started',
    title: 'Stop sending customers to voicemail.',
    subtitle: 'From $199/mo. Live in 24 hours. Cancel anytime.',
    note: '✓ No hardware · ✓ No contracts · ✓ 24-hour setup',
    primary_button: { text: 'Get Started', order: true },
    secondary_button: { text: 'Talk to Sales', href: '/' },
  },

  order: {
    mode: 'inline',
    submit_label: 'Submit interest',
    submit_note: 'No payment yet — we’ll email you to confirm setup.',
    support_options: [
      { id: 'self', name: 'Self setup', blurb: 'We send a guide; you forward your line.', price_label: 'Included' },
      { id: 'done', name: 'Done-for-you', blurb: 'We configure everything and go live for you.', price_label: '+$149 one-off' },
    ],
  },

  seo: {
    meta_title: 'AI Phone Staff — Your phone, answered. Always.',
    meta_description:
      'An AI receptionist that answers every call, books appointments and texts you the details. Never miss a customer again. From $199/mo.',
    open_graph_image: '/hero/macbook.png',
  },
}

export default aiPhoneStaff
