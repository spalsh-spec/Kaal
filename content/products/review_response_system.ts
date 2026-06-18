import type { Product } from '@/types/product'

// ──────────────────────────────────────────────────────────────────────────
// SAMPLE product — second proof of reuse. Same skeleton, different content.
// Demonstrates the inline order flow and monogram stack tiles. Light copy.
// ──────────────────────────────────────────────────────────────────────────

export const reviewResponseSystem: Product = {
  identity: {
    product_name: 'Review Response System',
    company_name: 'Kaal.Ai',
    slug: 'review_response_system',
    short_tagline: 'Every review, answered on brand.',
    main_slogan: 'Turn reviews into reputation.',
    secondary_slogans: ['Reply to every review in your voice.', 'Protect your rating on autopilot.'],
    category: 'AI Reputation',
    target_user: 'Local businesses drowning in reviews',
    simple_explanation:
      'An AI that drafts on-brand replies to every Google and Yelp review, flags the ones that need a human, and keeps your rating climbing.',
  },

  hero: {
    eyebrow: 'Review Response System',
    hero_title: 'Every review, answered on brand.',
    hero_subtitle: 'AI drafts a reply to every review in your voice. You approve. Your rating climbs. From $99/mo.',
    hero_slides: [
      { slide_type: 'image', image_path: '/hero/macbook.png', alt_text: 'Review Response dashboard (placeholder)' },
    ],
    primary_button: { text: 'Start Free Trial', order: true },
    secondary_button: { text: 'See how it works', scrollTo: 'how' },
    note: '✓ 14-day free trial · ✓ No card required',
    scroll_indicator_to: 'how',
  },

  howItWorks: {
    enabled: true,
    eyebrow: 'How it works',
    title: 'Set up in 3 simple steps.',
    subtitle: 'Connect once. Approve replies. Watch your rating rise.',
    steps: [
      { title: 'Connect your profiles', body: 'Google, Yelp, Facebook — link them in two clicks.', icon: 'git-branch' },
      { title: 'We learn your voice', body: 'Paste a few past replies; the AI matches your tone exactly.', icon: 'message-circle' },
      { title: 'Approve and post', body: 'Every new review gets a draft reply. Tap approve — or auto-post.', icon: 'check' },
    ],
    secondary_button: { text: 'See examples', href: '/' },
  },

  explainer: {
    enabled: true,
    eyebrow: 'Built for your business',
    title: 'Made for review-heavy businesses.',
    subtitle: 'Restaurants, clinics, hotels, multi-location brands — replies that sound like you, at scale.',
    chips: [
      { label: 'Restaurants', icon: 'clock' },
      { label: 'Clinics', icon: 'stethoscope' },
      { label: 'Hotels', icon: 'home' },
      { label: 'Retail', icon: 'trending-up' },
      { label: 'Multi-location', icon: 'briefcase' },
      { label: 'Agencies', icon: 'megaphone' },
    ],
    secondary_button: { text: 'Learn more', href: '/' },
  },

  stack: {
    enabled: true,
    eyebrow: 'Connects everywhere',
    title: 'Every review platform. One inbox.',
    subtitle: 'All your reviews, drafted and answered from a single place.',
    items: [
      { name: 'Google', desc: 'Business Profile' },
      { name: 'Yelp', desc: 'Reviews & tips' },
      { name: 'Facebook', desc: 'Page reviews' },
      { name: 'TripAdvisor', desc: 'Travel reviews' },
      { name: 'Trustpilot', desc: 'Verified reviews' },
      { name: 'Slack', desc: 'Escalation alerts' },
    ],
    secondary_button: { text: 'How it works', href: '/' },
  },

  plans: {
    enabled: true,
    eyebrow: 'Simple pricing',
    title: 'Normal. Pro.',
    subtitle: 'One location or fifty — pick your scale.',
    featured_badge: 'Recommended',
    items: [
      {
        id: 'normal', name: 'Normal', badge: 'Included',
        one_line_description: 'Everything one location needs to never miss a review.',
        best_for: 'Single location',
        features: ['1 location', 'AI-drafted replies', 'Approve & post', 'Weekly rating report'],
        price_label: '$99/mo',
      },
      {
        id: 'pro', name: 'Pro', badge: 'Recommended',
        one_line_description: 'Multiple locations, auto-posting, and sentiment alerts.',
        best_for: 'Multi-location brands',
        features: ['Up to 25 locations', 'Auto-post mode', 'Negative-review alerts', 'Brand voice profiles'],
        price_label: '$299/mo',
      },
    ],
    secondary_button: { text: 'Compare plans', href: '/' },
  },

  proof: {
    enabled: true,
    eyebrow: 'Real businesses, real results',
    title: 'Ratings go up when every review gets a reply.',
    subtitle: 'Owners who stopped letting reviews pile up.',
    trust: [
      { label: '4.9 average rating', icon: 'star' },
      { label: '900+ locations', icon: 'users' },
      { label: '14-day free trial', icon: 'clock' },
      { label: 'Cancel anytime', icon: 'rotate-ccw' },
    ],
    testimonials: [
      {
        name: 'Sofia Reyes', role: 'Owner, Casa Reyes (Restaurant)', avatar: 'SR',
        gradient: 'from-amber-400 to-orange-500',
        text: 'We went from replying to maybe one review a month to every single one. Our Google rating went from 4.2 to 4.6.',
        result: '4.2 → 4.6 stars in 3 months',
      },
      {
        name: 'Tom Becker', role: 'Ops Lead, BrightSmile Dental', avatar: 'TB',
        gradient: 'from-cyan-400 to-sky-600',
        text: 'Across nine clinics, replies used to be nobody’s job. Now they’re all handled in my voice and I just approve.',
        result: '9 clinics, 100% reply rate',
      },
    ],
    secondary_button: { text: 'How it works', href: '/' },
  },

  supportModules: { enabled: false, eyebrow: '', title: '', subtitle: '', modules: [], secondary_button: { text: '' } },
  pyramid: { enabled: false, main_image: '', pyramid_left_image: '', pyramid_right_image: '' },
  videoShowcase: { enabled: false, items: [] },

  footerCta: {
    enabled: true,
    eyebrow: 'Start free',
    title: 'Turn reviews into reputation.',
    subtitle: 'From $99/mo. 14-day free trial. No card required.',
    note: '✓ No setup fee · ✓ Cancel anytime · ✓ Live in minutes',
    primary_button: { text: 'Start Free Trial', order: true },
    secondary_button: { text: 'Talk to Sales', href: '/' },
  },

  order: {
    mode: 'inline',
    submit_label: 'Start free trial',
    submit_note: 'No card required — we’ll email you to connect your profiles.',
    support_options: [
      { id: 'self', name: 'Self serve', blurb: 'Connect your profiles and go.', price_label: 'Included' },
      { id: 'concierge', name: 'Concierge onboarding', blurb: 'We connect everything and tune your brand voice.', price_label: '+$99 one-off' },
    ],
  },

  seo: {
    meta_title: 'Review Response System — Every review, answered on brand',
    meta_description:
      'AI drafts on-brand replies to every Google and Yelp review, flags the ones that need a human, and keeps your rating climbing. From $99/mo.',
    open_graph_image: '/hero/macbook.png',
  },
}

export default reviewResponseSystem
