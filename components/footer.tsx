'use client'

import Link from 'next/link'
import { Sun } from 'lucide-react'
import { BRAND } from '@/lib/landing-data'

const ORDER_HREF = '/devices#configurator'

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-screen-xl px-5 sm:px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-semibold text-lg">
              <span className="grid place-items-center w-7 h-7 rounded-[5px] text-white"
                    style={{ backgroundImage: 'linear-gradient(135deg,#f59e0b,#fb7185)' }}>
                <Sun className="w-4 h-4" />
              </span>
              Kaal<span className="text-volta-600">.Ai</span>
            </div>
            <p className="text-base text-muted-foreground max-w-xs text-balance">
              {BRAND.slogan} The AI-native MacBook, pre-loaded for your profession.
            </p>
            <Link href={ORDER_HREF} className="btn-box-gold px-5 py-2 text-sm mt-1 inline-flex">Order Now</Link>
          </div>

          <FooterCol title="Kaal" links={[
            { label: 'Overview', href: '/#hero' },
            { label: 'Devices', href: '/devices' },
            { label: 'Trims', href: '/#trims' },
            { label: 'For Your Field', href: '/for-your-field' },
          ]} />

          <FooterCol title="Support" links={[
            { label: 'Support & Setup', href: '/support' },
            { label: 'How It Works', href: '/how-it-works' },
            { label: 'Help Centre', href: '/support' },
          ]} />

          <FooterCol title="Company" links={[
            { label: 'About', href: '/about' },
            { label: 'Privacy', href: '/privacy' },
            { label: 'Terms', href: '/terms' },
          ]} />
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Kaal.Ai. All rights reserved.</span>
          <span className="italic">Open the lid — you&apos;re already ahead.</span>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="text-base text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
