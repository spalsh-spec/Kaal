#!/usr/bin/env node
// ──────────────────────────────────────────────────────────────────────────
// Create a new product config from the Leverage OS master template.
//
//   node scripts/create_product_template.mjs "My Product" my_product
//   node scripts/create_product_template.mjs            (interactive)
//
// It clones content/products/leverage_os.ts, replaces ONLY the obvious fields
// (export name, product_name, slug, placeholder image paths), and writes a new
// file. It NEVER modifies leverage_os.ts. Edit the copy afterwards.
// ──────────────────────────────────────────────────────────────────────────

import { readFile, writeFile, access } from 'node:fs/promises'
import { constants } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { createInterface } from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PRODUCTS_DIR = join(__dirname, '..', 'content', 'products')
const TEMPLATE = join(PRODUCTS_DIR, 'leverage_os.ts')

function toCamel(slug) {
  return slug
    .split(/[_-]+/)
    .map((part, i) => (i === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)))
    .join('')
}

function slugify(s) {
  return s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '')
}

async function exists(p) {
  try { await access(p, constants.F_OK); return true } catch { return false }
}

async function main() {
  let [, , nameArg, slugArg] = process.argv

  if (!nameArg || !slugArg) {
    const rl = createInterface({ input, output })
    nameArg = nameArg || (await rl.question('Product name (e.g. "AI Phone Staff"): ')).trim()
    slugArg = slugArg || (await rl.question(`Slug [${slugify(nameArg)}]: `)).trim()
    rl.close()
  }

  const name = nameArg
  const slug = slugify(slugArg || name)
  if (!name || !slug) {
    console.error('✗ Need a product name and slug.')
    process.exit(1)
  }

  const camel = toCamel(slug)
  const target = join(PRODUCTS_DIR, `${slug}.ts`)

  if (slug === 'leverage_os') {
    console.error('✗ Refusing to overwrite the master template (leverage_os).')
    process.exit(1)
  }
  if (await exists(target)) {
    console.error(`✗ ${slug}.ts already exists. Choose another slug or edit it directly.`)
    process.exit(1)
  }

  let src = await readFile(TEMPLATE, 'utf8')

  // Replace ONLY the obvious fields. Copy stays Leverage OS text — edit after.
  src = src
    .replace(/export const leverageOs: Product/, `export const ${camel}: Product`)
    .replace(/export default leverageOs/, `export default ${camel}`)
    .replace(/product_name: 'Kaal'/, `product_name: ${JSON.stringify(name)}`)
    .replace(/slug: 'leverage_os'/, `slug: ${JSON.stringify(slug)}`)
    .replace(/\/hero\/macbook\.png/g, `/placeholders/${slug}-hero.png`)

  const header =
`// GENERATED from the Leverage OS master template by scripts/create_product_template.mjs.
// TODO: edit the copy, plans, stack, proof and images for "${name}".
// Placeholder hero image: /public/placeholders/${slug}-hero.png (add this file).
`

  await writeFile(target, header + '\n' + src, 'utf8')

  console.log(`\n✓ Created content/products/${slug}.ts (export: ${camel})\n`)
  console.log('Next steps:')
  console.log(`  1. Register it in content/products/index.ts:`)
  console.log(`       import { ${camel} } from './${slug}'`)
  console.log(`       // add ${camel} to the PRODUCTS array`)
  console.log(`  2. Add a hero image at: public/placeholders/${slug}-hero.png`)
  console.log(`  3. Edit the copy/plans/stack/proof in content/products/${slug}.ts`)
  console.log(`  4. Preview at:  /products/${slug}`)
  console.log(`  5. (optional) Tune live in the builder:  NEXT_PUBLIC_SHOW_BUILDER=true npm run dev  →  /builder\n`)
}

main().catch((e) => { console.error(e); process.exit(1) })
