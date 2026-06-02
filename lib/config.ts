// ──────────────────────────────
// HeliosOS — Configurator pricing model
// ──────────────────────────────
// All prices are in CENTS (formatPrice divides by 100).
//
// MARGIN MODEL — the base price already nets the target margin:
//   • Base price ............ $5,000  (entry "Normal" config)
//   • Target net per sale ... $4,000
//   • Implied landed cost ... ~$1,000 (laptop + setup labour)
// Every option below is priced well above its marginal cost,
// so any upgrade only pushes net margin ABOVE $4,000.
// → To re-tune the whole model, edit BASE_PRICE_CENTS or PRICING_MODEL.
// ──────────────────────────────

export const BASE_PRICE_CENTS = 500000 // $5,000

export const PRICING_MODEL = {
  basePriceCents: BASE_PRICE_CENTS,   // $5,000 floor
  assumedLandedCostCents: 100000,     // ~$1,000  ← EDIT to your real landed cost
  targetNetMarginCents: 400000,       // $4,000 target net per sale
} as const

export const PERFORMANCE_OPTIONS = [
  {
    id: 'normal',
    name: 'Normal',
    badge: 'Included',
    blurb: 'M3-class. Whisper-quiet, all-day battery, runs your full AI stack with ease.',
    specs: ['Apple M3', '16GB RAM', '512GB SSD', '18-hr battery'],
    deltaCents: 0,
  },
  {
    id: 'pro',
    name: 'Pro',
    badge: 'Recommended',
    blurb: 'M3 Pro-class. Runs multiple AI agents at once without breaking a sweat.',
    specs: ['Apple M3 Pro', '18GB RAM', '512GB SSD', '18-hr battery'],
    deltaCents: 150000, // +$1,500
  },
  {
    id: 'max',
    name: 'Max',
    badge: 'Power User',
    blurb: 'M3 Max-class. Local models, video generation, everything — simultaneously.',
    specs: ['Apple M3 Max', '36GB RAM', '1TB SSD', '22-hr battery'],
    deltaCents: 300000, // +$3,000
  },
] as const

export const COLOR_OPTIONS = [
  { id: 'midnight',    name: 'Midnight',    swatch: '#0b1020', glow: 'rgba(180,130,70,0.42)',  deltaCents: 0 },
  { id: 'silver',      name: 'Silver',      swatch: '#d9dbe0', glow: 'rgba(210,190,150,0.42)', deltaCents: 0 },
  { id: 'space-black', name: 'Space Black', swatch: '#1b1b20', glow: 'rgba(232,130,30,0.48)',  deltaCents: 15000 }, // +$150
  { id: 'starlight',   name: 'Starlight',   swatch: '#efe9da', glow: 'rgba(240,200,140,0.46)', deltaCents: 15000 }, // +$150
] as const

export const SETUP_OPTIONS = [
  {
    id: 'standard',
    name: 'Standard',
    badge: 'Included',
    blurb: 'Pre-loaded, authenticated, ready on day one. Your full profession AI stack.',
    deltaCents: 0,
  },
  {
    id: 'pro',
    name: 'Pro Bundle',
    badge: 'Most Popular',
    blurb: 'Everything in Standard + a personal AI coach and monthly Leverage consulting.',
    deltaCents: 120000, // +$1,200
  },
] as const
