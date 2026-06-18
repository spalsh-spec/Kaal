# Product Builder — reusable product website system

This repo's marketing site is now a **reusable product-site builder**. One fixed
visual skeleton renders any product from a content config. The current Kaal.Ai
homepage is the **master template** (`leverage_os`) and still looks exactly the same.

> **Core rule:** the visual system is fixed in code; the content lives in configs.
> You build new product sites by editing config files — never the layout.

---

## How the template system works

```
types/product.ts                      ← the Product schema (content shape)
content/products/
  ├─ leverage_os.ts                    ← MASTER TEMPLATE (Kaal) = current homepage
  ├─ ai_phone_staff.ts                 ← sample product
  ├─ review_response_system.ts         ← sample product
  └─ index.ts                          ← registry + getProductBySlug()
components/product_site/
  ├─ ProductSite.tsx                   ← composes the panels from a config
  ├─ _shared.tsx                       ← fixed visuals: motion, headings, gold CTAs, icon registry
  ├─ HeroSlideshow.tsx                 ← hero (component / image / video; multi-slide)
  ├─ HowItWorks.tsx                    ← "Set up in 3 simple steps"
  ├─ ProductExplainer.tsx              ← "Built for your profession" (target-user chips)
  ├─ StackGrid.tsx                     ← "Your entire AI stack" (tool/integration grid)
  ├─ PlanCards.tsx                     ← Normal / Pro / Max plans
  ├─ SocialProof.tsx                   ← trust row + testimonials
  ├─ SupportModules.tsx                ← OPTIONAL named-modules grid (off by default)
  ├─ PyramidImages.tsx                 ← OPTIONAL pyramid gallery (off by default)
  ├─ VideoShowcase.tsx                 ← OPTIONAL video grid (off by default)
  ├─ OrderFlow.tsx                     ← inline staged order flow (plan → support → review → submit)
  └─ FooterCTA.tsx                     ← final call-to-action band
app/
  ├─ page.tsx                          ← homepage → renders ProductSite with leverage_os
  ├─ products/[slug]/page.tsx          ← dynamic product pages (/products/<slug>)
  └─ builder/page.tsx                  ← local builder (env-gated)
scripts/create_product_template.mjs    ← scaffold a new product config
```

`ProductSite` renders panels in a **fixed canonical order**, each shown only when
present **and** `enabled` in the config:

```
Hero → HowItWorks → ProductExplainer → StackGrid → PlanCards → SocialProof
→ [SupportModules] → [PyramidImages] → [VideoShowcase] → [OrderFlow if inline] → FooterCTA
```

Icons are referenced by **string keys** (e.g. `"rocket"`, `"claude"`) so configs
stay plain JSON — that's what makes the builder's copy/paste work. Keys resolve
in `components/product_site/_shared.tsx` (`LUCIDE` for line icons, `BRAND` for
brand marks). Add new keys there if you need an icon that isn't mapped yet.

---

## Where to add a new product

**Fast path (script):**

```bash
npm run create:product "My Product" my_product
# → creates content/products/my_product.ts (cloned from the template)
```

Then register it in `content/products/index.ts`:

```ts
import { myProduct } from './my_product'
export const PRODUCTS: Product[] = [leverageOs, aiPhoneStaff, reviewResponseSystem, myProduct]
```

**Manual path:** copy any file in `content/products/`, rename the `export const`,
set a unique `identity.slug`, edit the content, and register it in `index.ts`.

Preview at **`/products/my_product`**.

---

## How to add images

1. Drop files in `public/` (e.g. `public/placeholders/my_product-hero.png`).
2. Reference them by path (no `/public` prefix):
   - Hero image: `hero.hero_slides[].image_path: '/placeholders/my_product-hero.png'`
   - Pyramid: `pyramid.main_image / pyramid_left_image / pyramid_right_image`
   - Support module: `module.image`
   - OG image: `seo.open_graph_image`

Swapping an image = changing a path string. **No layout code changes.**

## How to add videos

- Hero video slide: `{ slide_type: 'video', video_path: '/media/demo.mp4', poster_path: '/media/demo.jpg' }`
- Video showcase: set `videoShowcase.enabled = true` and add `items: [{ title, poster, video }]`
- Support module video: `module.video`

## How to change plan copy

Edit `plans.items` in the product config. Each plan supports:
`name`, `badge`, `one_line_description`, `best_for`, `features[]`, and a price via
`price_label` (e.g. `"$199/mo"`) **or** `delta_cents` (e.g. `150000` → `+$1,500`).
The card matching `plans.featured_badge` (default `"Recommended"`) gets the
highlighted ring + lift. Two or three plans both render cleanly.

---

## How to enable the builder page

The builder is **off by default** and never exposed in production unless you opt in.

```bash
NEXT_PUBLIC_SHOW_BUILDER=true npm run dev
# open http://localhost:3000/builder
```

In the builder you can: load any existing product, paste/edit its JSON, see a
**live preview** rendered with the real `ProductSite`, get a **missing-field**
warning, and **copy the JSON**. Paste that JSON into a new
`content/products/<slug>.ts` (wrap it as `export const <camel>: Product = { ... }`)
and register it in `index.ts`.

## How to preview a product

- Homepage (master template): `/`
- Any product: `/products/<slug>` — e.g. `/products/ai_phone_staff`
- Live builder preview: `/builder` (with the env var above)

## How to deploy without exposing the builder

Do **not** set `NEXT_PUBLIC_SHOW_BUILDER` in your production environment (Vercel
project settings → Environment Variables). Without it the `/builder` route shows
a plain "unavailable" message. The route still exists but renders nothing useful.

---

## Create a new product in under 10 minutes

1. `npm run create:product "My Product" my_product`
2. Register it in `content/products/index.ts` (one import + add to `PRODUCTS`).
3. Add a hero image at `public/placeholders/my_product-hero.png`.
4. Edit copy: identity, hero, plans, stack, proof in `content/products/my_product.ts`.
5. Choose order mode: `order.mode = 'inline'` (built-in staged flow) or
   `'configurator'` with a `configurator_href`.
6. Run `npm run dev` and open `/products/my_product`. Done.

---

## Order flow modes

- **`configurator`** — Order buttons link to a bespoke route. Leverage OS uses
  `/devices#configurator` (its premium device builder). Set `configurator_href`.
- **`inline`** — `ProductSite` renders the reusable `OrderFlow` (plan → support →
  review → submit) as the `#order` section. Submit is a placeholder (no payment);
  it shows a confirmation. Configure `order.support_options`, `submit_label`,
  `submit_note`. Both samples use this mode.

---

## Notes & limitations

- **Paths**: the project uses a root-level layout (`@/*` → repo root), so the
  brief's suggested `src/...` paths map to root: `types/`, `content/products/`,
  `components/product_site/`, `app/products/[slug]/`, `app/builder/`, `scripts/`.
- **Slug vs name**: the master product's slug is `leverage_os` (per the brief)
  while its displayed name is `Kaal` (the live brand). Both are intentional.
- **Optional sections** (`supportModules`, `pyramid`, `videoShowcase`) are **off**
  for Leverage OS so the homepage is byte-identical; enable them per product.
- **Bespoke pages** (`/devices`, `/for-your-field`, `/learn`, `/support`,
  `/about`, `/consulting`, `/how-it-works`) are Leverage-OS-specific and are **not**
  part of the reusable `ProductSite`. New products get the single-page
  `ProductSite` experience (including the inline order flow). Wiring per-product
  bespoke sub-pages would be a follow-up.
- The builder validates JSON + required fields and previews live, but does not
  persist to disk (copy/paste into a config file) and does not type-check the
  pasted JSON against the schema beyond required-field presence.
- The inline order flow does not take payment; it's an interest/checkout
  placeholder by design.
