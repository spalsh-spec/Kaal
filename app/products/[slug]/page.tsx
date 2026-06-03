import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { ProductSite } from '@/components/product_site/ProductSite'
import { getProductBySlug, getAllProductSlugs } from '@/content/products'

// Pre-render every known product at build time.
export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return { title: 'Product not found' }
  const { seo } = product
  return {
    title: seo.meta_title,
    description: seo.meta_description,
    openGraph: {
      title: seo.meta_title,
      description: seo.meta_description,
      images: seo.open_graph_image ? [{ url: seo.open_graph_image }] : undefined,
    },
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  return (
    <div className="no-x-overflow">
      <Nav />
      <main>
        <ProductSite product={product} />
      </main>
      <Footer />
    </div>
  )
}
