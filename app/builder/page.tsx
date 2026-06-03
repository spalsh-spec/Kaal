'use client'

// Local product builder. NOT exposed unless NEXT_PUBLIC_SHOW_BUILDER === 'true'.
// Paste/edit a product config as JSON, see a live preview rendered with the same
// ProductSite component, check for missing required fields, and copy the result.
// No database — copy the JSON into a new file under content/products/.

import { useMemo, useState } from 'react'
import { PRODUCTS } from '@/content/products'
import { ProductSite } from '@/components/product_site/ProductSite'
import { REQUIRED_PRODUCT_FIELDS, type Product } from '@/types/product'

const SHOW = process.env.NEXT_PUBLIC_SHOW_BUILDER === 'true'

function getPath(obj: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object') return (acc as Record<string, unknown>)[key]
    return undefined
  }, obj)
}

function isMissing(v: unknown): boolean {
  if (v === undefined || v === null || v === '') return true
  if (Array.isArray(v) && v.length === 0) return true
  return false
}

export default function BuilderPage() {
  const [text, setText] = useState(() => JSON.stringify(PRODUCTS[0], null, 2))
  const [copied, setCopied] = useState(false)

  const { product, error } = useMemo(() => {
    try {
      return { product: JSON.parse(text) as Product, error: null as string | null }
    } catch (e) {
      return { product: null, error: (e as Error).message }
    }
  }, [text])

  const missing = useMemo(() => {
    if (!product) return []
    return REQUIRED_PRODUCT_FIELDS.filter((f) => isMissing(getPath(product, f)))
  }, [product])

  if (!SHOW) {
    return (
      <div className="min-h-screen grid place-items-center bg-background text-foreground px-6 text-center">
        <div className="max-w-md">
          <h1 className="text-2xl font-bold">Builder unavailable</h1>
          <p className="mt-2 text-muted-foreground">
            The product builder is disabled. Set <code className="px-1 rounded bg-secondary">NEXT_PUBLIC_SHOW_BUILDER=true</code> in your
            local environment to enable it. It is never exposed in production by default.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="grid lg:grid-cols-2 gap-0 h-screen">
        {/* Editor */}
        <div className="flex flex-col border-r border-border overflow-hidden">
          <div className="p-4 border-b border-border flex flex-wrap items-center gap-2">
            <h1 className="text-lg font-bold mr-auto">Product Builder</h1>
            {PRODUCTS.map((p) => (
              <button
                key={p.identity.slug}
                onClick={() => setText(JSON.stringify(p, null, 2))}
                className="text-xs font-semibold px-2.5 py-1 rounded-md border border-border hover:bg-secondary"
              >
                Load {p.identity.slug}
              </button>
            ))}
            <button
              onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1500) }}
              className="text-xs font-semibold px-2.5 py-1 rounded-md bg-volta-600 text-white hover:bg-volta-700"
            >
              {copied ? 'Copied!' : 'Copy JSON'}
            </button>
          </div>

          <div className="px-4 py-2 border-b border-border text-xs">
            {error ? (
              <span className="text-red-600 font-semibold">JSON error: {error}</span>
            ) : missing.length ? (
              <span className="text-amber-600 font-semibold">Missing required: {missing.join(', ')}</span>
            ) : (
              <span className="text-emerald-600 font-semibold">✓ Valid — all required fields present</span>
            )}
          </div>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            spellCheck={false}
            className="flex-1 w-full p-4 font-mono text-xs leading-relaxed bg-slate-950 text-slate-100 resize-none outline-none"
          />
        </div>

        {/* Live preview */}
        <div className="overflow-auto bg-background">
          {product ? (
            <ProductSite product={product} />
          ) : (
            <div className="p-8 text-muted-foreground">Fix the JSON to see a preview.</div>
          )}
        </div>
      </div>
    </div>
  )
}
