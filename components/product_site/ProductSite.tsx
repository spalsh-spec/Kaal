'use client'

// ProductSite — the reusable product website skeleton. Renders the fixed panel
// composition, driven entirely by a Product config. Sections render only when
// present AND enabled, so a product can show as many or as few as it needs.
//
// Canonical order matches the current Helios.Ai homepage exactly:
//   Hero → HowItWorks → ProductExplainer → StackGrid → PlanCards → SocialProof
//   → [SupportModules] → [PyramidImages] → [VideoShowcase]
//   → [OrderFlow if inline] → FooterCTA

import type { Product } from '@/types/product'
import { HeroSlideshow } from './HeroSlideshow'
import { HowItWorks } from './HowItWorks'
import { ProductExplainer } from './ProductExplainer'
import { StackGrid } from './StackGrid'
import { PlanCards } from './PlanCards'
import { SocialProof } from './SocialProof'
import { SupportModules } from './SupportModules'
import { PyramidImages } from './PyramidImages'
import { VideoShowcase } from './VideoShowcase'
import { OrderFlow } from './OrderFlow'
import { FooterCTA } from './FooterCTA'

export function ProductSite({ product }: { product: Product }) {
  const { order } = product
  // The gold "Order" button label follows the hero's primary CTA text.
  const orderLabel = product.hero.primary_button.text || 'Order Now'

  return (
    <>
      <HeroSlideshow hero={product.hero} order={order} />

      {product.howItWorks?.enabled && (
        <HowItWorks data={product.howItWorks} order={order} orderLabel={orderLabel} />
      )}

      {product.explainer?.enabled && (
        <ProductExplainer data={product.explainer} order={order} orderLabel={orderLabel} />
      )}

      {product.stack?.enabled && (
        <StackGrid data={product.stack} order={order} orderLabel={orderLabel} />
      )}

      {product.plans?.enabled && (
        <PlanCards data={product.plans} order={order} orderLabel={orderLabel} />
      )}

      {product.proof?.enabled && (
        <SocialProof data={product.proof} order={order} orderLabel={orderLabel} />
      )}

      {product.supportModules?.enabled && (
        <SupportModules data={product.supportModules} order={order} orderLabel={orderLabel} />
      )}

      {product.pyramid?.enabled && <PyramidImages data={product.pyramid} />}

      {product.videoShowcase?.enabled && (
        <VideoShowcase data={product.videoShowcase} order={order} orderLabel={orderLabel} />
      )}

      {order.mode === 'inline' && <OrderFlow product={product} />}

      {product.footerCta?.enabled && <FooterCTA data={product.footerCta} order={order} />}
    </>
  )
}

export default ProductSite
