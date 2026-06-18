// The homepage is now the reusable ProductSite, driven by the Leverage OS
// (Kaal) product config. The panel implementations live under
// components/product_site/ and are parameterised by content — the visual system
// is unchanged. Editing content/products/leverage_os.ts changes this page.

import { ProductSite } from '@/components/product_site/ProductSite'
import { leverageOs } from '@/content/products/leverage_os'

export function TeslaHome() {
  return <ProductSite product={leverageOs} />
}

export default TeslaHome
