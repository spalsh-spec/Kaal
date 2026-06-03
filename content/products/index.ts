import type { Product } from '@/types/product'
import { leverageOs } from './leverage_os'
import { aiPhoneStaff } from './ai_phone_staff'
import { reviewResponseSystem } from './review_response_system'

// ──────────────────────────────────────────────────────────────────────────
// Product registry. Add a new product by importing its config and adding it
// to PRODUCTS. The homepage renders DEFAULT_PRODUCT; /products/[slug] renders
// any product by its slug.
// ──────────────────────────────────────────────────────────────────────────

export const PRODUCTS: Product[] = [
  leverageOs,
  aiPhoneStaff,
  reviewResponseSystem,
]

/** The product shown on the homepage ("/"). */
export const DEFAULT_PRODUCT: Product = leverageOs

export function getAllProducts(): Product[] {
  return PRODUCTS
}

export function getAllProductSlugs(): string[] {
  return PRODUCTS.map((p) => p.identity.slug)
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.identity.slug === slug)
}

export { leverageOs }
