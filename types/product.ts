// ──────────────────────────────────────────────────────────────────────────
// Product schema — the single source of truth for one product's CONTENT.
//
// The VISUAL SYSTEM (panel backgrounds, button styles, spacing, animation,
// responsive scaling, the photoreal hero device) is FIXED and lives in the
// components under components/product_site/. Only the content below changes
// per product. Configs are plain, JSON-serialisable objects (icons are string
// KEYS, not React components) so they can be pasted/copied in the builder.
//
// Map to the existing Kaal.Ai homepage panels:
//   hero          → Hero panel (HeroSlideshow)
//   howItWorks    → "Set up in 3 simple steps" panel (HowItWorks)
//   explainer     → "Built for your profession" panel (ProductExplainer)
//   stack         → "Your entire AI stack. As one." panel (SupportModules)
//   plans         → "Normal. Pro. Max." trims panel (PlanCards)
//   proof         → social-proof panel (SocialProof)
//   footerCta     → "One purchase. A lifetime of leverage." panel (FooterCTA)
//   pyramid       → OPTIONAL extra section (PyramidImages) — off by default
//   videoShowcase → OPTIONAL extra section (VideoShowcase) — off by default
//   supportModules→ OPTIONAL named-modules grid — off by default
//   order         → order flow behaviour (configurator link OR inline staged flow)
// ──────────────────────────────────────────────────────────────────────────

/** A button whose label is content; target is either a route href, an in-page
 *  scroll target, or the product's order action. */
export interface CtaConfig {
  text: string
  /** Route or anchor, e.g. "/how-it-works" or "/devices#configurator". */
  href?: string
  /** In-page element id to smooth-scroll to, e.g. "how" or "profession". */
  scrollTo?: string
  /** Use the product's configured order action (configurator or inline flow). */
  order?: boolean
}

/** Hero visual: a built-in component (e.g. the photoreal MacBook), an image,
 *  or a video. Multiple slides are supported; one slide = the current static hero. */
export interface HeroSlide {
  slide_type: 'component' | 'image' | 'video'
  /** For slide_type 'component' — a registered visual id, e.g. "ai-laptop". */
  component_id?: string
  /** For 'image' — path under /public, e.g. "/hero/macbook.png". */
  image_path?: string
  /** For 'video' — path under /public, e.g. "/hero/demo.mp4". */
  video_path?: string
  /** For 'video' — optional poster image path. */
  poster_path?: string
  alt_text?: string
  /** Optional flowchart payload, reserved for component slides that draw one. */
  flowchart_data?: unknown
}

export interface HeroConfig {
  eyebrow: string            // hero_title's kicker, e.g. "Kaal"
  hero_title: string
  hero_subtitle: string
  hero_slides: HeroSlide[]   // 1 slide = current static hero
  primary_button: CtaConfig  // hero_title primary action (Order)
  secondary_button: CtaConfig
  /** Small reassurance line under the buttons, e.g. money-back / shipping. */
  note?: string
  /** Id to smooth-scroll to from the bouncing chevron. */
  scroll_indicator_to?: string
}

export interface Step {
  title: string
  body: string
  icon?: string // lucide key, e.g. "target" | "package-check" | "rocket"
}

export interface HowItWorksConfig {
  enabled: boolean
  eyebrow: string
  title: string
  subtitle: string
  steps: Step[]
  secondary_button: CtaConfig
}

export interface Chip {
  label: string
  icon?: string // lucide key
}

/** "Built for your profession." — who the product is for. */
export interface ExplainerConfig {
  enabled: boolean
  eyebrow: string
  title: string
  subtitle: string          // simple_explanation lives here
  chips: Chip[]             // target_user options
  secondary_button: CtaConfig
}

export interface StackItem {
  name: string
  desc: string
  /** Brand icon key (simple-icons), e.g. "claude" | "github". If omitted, a
   *  monogram tile is shown — so non-AI products still look right. */
  brand?: string
}

/** "Your entire AI stack. As one." — what's included / ready to use. */
export interface StackConfig {
  enabled: boolean
  eyebrow: string
  title: string
  subtitle: string
  items: StackItem[]
  secondary_button: CtaConfig
}

/** A plan / trim card. Supports the requested Normal/Pro shape AND the current
 *  Normal/Pro/Max trims (just add a third item). */
export interface Plan {
  id: string
  name: string
  badge?: string                 // e.g. "Included" | "Recommended" | "Power User"
  one_line_description: string   // shown as the card blurb
  best_for?: string
  features: string[]
  /** Either a ready-made label ("Included", "+$1,500") OR a cents delta that
   *  the card formats. Provide price_label OR delta_cents. */
  price_label?: string
  delta_cents?: number
  cta_text?: string
}

export interface PlansConfig {
  enabled: boolean
  eyebrow: string
  title: string
  subtitle: string
  /** Badge value that marks the visually-featured card (ring + scale). */
  featured_badge?: string
  items: Plan[]
  secondary_button: CtaConfig
}

export interface TrustItem {
  label: string
  icon?: string // lucide key
}

export interface Testimonial {
  name: string
  role: string
  avatar: string                 // initials
  gradient: string               // tailwind gradient classes, e.g. "from-blue-400 to-indigo-600"
  text: string
  result: string
}

export interface ProofConfig {
  enabled: boolean
  eyebrow: string
  title: string
  subtitle: string
  trust: TrustItem[]
  testimonials: Testimonial[]
  secondary_button: CtaConfig
}

/** The seven named support modules (Flowchart, Tech Support, Buy & Forget,
 *  Ready to Use, Live Examples, Super Ads, Videos & Images). Optional grid —
 *  off for Leverage OS (its homepage doesn't show it), available to others. */
export interface SupportModule {
  key: string
  title: string
  description: string
  icon?: string        // lucide key
  image?: string       // path under /public
  video?: string       // path under /public
  enabled: boolean
}

export interface SupportModulesConfig {
  enabled: boolean
  eyebrow: string
  title: string
  subtitle: string
  modules: SupportModule[]
  secondary_button: CtaConfig
}

/** Pyramid image layout — optional extra section. Off by default. */
export interface PyramidConfig {
  enabled: boolean
  eyebrow?: string
  title?: string
  subtitle?: string
  main_image: string
  pyramid_left_image: string
  pyramid_right_image: string
  image_captions?: { main?: string; left?: string; right?: string }
  alt_text?: string
}

export interface VideoItem {
  title: string
  poster?: string
  video?: string
}

/** Video showcase — optional extra section. Off by default. */
export interface VideoShowcaseConfig {
  enabled: boolean
  eyebrow?: string
  title?: string
  subtitle?: string
  items: VideoItem[]
  secondary_button?: CtaConfig
}

/** Final CTA band — "One purchase. A lifetime of leverage." */
export interface FooterCtaConfig {
  enabled: boolean
  eyebrow: string
  title: string
  subtitle: string
  note?: string
  primary_button: CtaConfig
  secondary_button: CtaConfig
}

/** Order flow. Two modes:
 *  - "configurator": the order action links to a bespoke configurator route
 *    (Leverage OS uses /devices#configurator — its premium device builder).
 *  - "inline": render the reusable staged OrderFlow (product → plan → support
 *    → review → submit) right on the product page. Used by products that don't
 *    have a bespoke configurator. */
export interface OrderConfig {
  mode: 'configurator' | 'inline'
  /** For "configurator" mode — where the Order buttons point. */
  configurator_href?: string
  /** For "inline" mode — the support options offered in the staged flow. */
  support_options?: { id: string; name: string; blurb: string; price_label?: string }[]
  submit_label?: string
  /** A short note shown on the inline review step. */
  submit_note?: string
}

export interface SeoConfig {
  meta_title: string
  meta_description: string
  open_graph_image?: string
}

export interface ProductIdentity {
  product_name: string
  company_name: string
  slug: string
  short_tagline: string
  main_slogan: string
  secondary_slogans: string[]
  category: string
  target_user: string
  simple_explanation: string
}

/** The full product. Optional sections may be omitted entirely; ProductSite
 *  renders a section only when present AND enabled. */
export interface Product {
  identity: ProductIdentity
  hero: HeroConfig
  howItWorks?: HowItWorksConfig
  explainer?: ExplainerConfig
  stack?: StackConfig
  plans?: PlansConfig
  proof?: ProofConfig
  supportModules?: SupportModulesConfig
  pyramid?: PyramidConfig
  videoShowcase?: VideoShowcaseConfig
  footerCta?: FooterCtaConfig
  order: OrderConfig
  seo: SeoConfig
}

/** Fields the builder treats as required for a usable product. */
export const REQUIRED_PRODUCT_FIELDS = [
  'identity.product_name',
  'identity.company_name',
  'identity.slug',
  'hero.hero_title',
  'hero.hero_subtitle',
  'hero.hero_slides',
  'seo.meta_title',
  'seo.meta_description',
  'order.mode',
] as const
