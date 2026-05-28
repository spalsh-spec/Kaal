'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronDown } from 'lucide-react'

const NAV_LINKS = [
  {
    label: 'Devices',
    href: '/devices',
    children: [
      { label: 'MacBook Air Setup', href: '/devices#air', desc: 'Starting at $1,799' },
      { label: 'MacBook Pro Setup', href: '/devices#pro', desc: 'Starting at $2,399' },
      { label: 'Windows Device', href: '/devices#windows', desc: 'Starting at $1,599' },
      { label: 'Configure Yours', href: '/devices#configurator', desc: 'Custom profession stack' },
    ],
  },
  {
    label: 'For Your Field',
    href: '/for-your-field',
    children: [
      { label: 'Marketing Pro', href: '/for-your-field#marketing', desc: '10× content output' },
      { label: 'Legal Professional', href: '/for-your-field#lawyer', desc: 'Draft faster, bill more' },
      { label: 'Medical Professional', href: '/for-your-field#doctor', desc: 'Less admin, more care' },
      { label: 'Content Creator', href: '/for-your-field#creator', desc: 'Daily publishing, effortlessly' },
      { label: 'Executive & Founder', href: '/for-your-field#executive', desc: 'Decisions at warp speed' },
      { label: 'Student', href: '/for-your-field#student', desc: 'Graduate with an edge' },
    ],
  },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Learn', href: '/learn' },
  { label: 'Consulting', href: '/consulting' },
  { label: 'About', href: '/about' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/60 py-3'
          : 'py-5 bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-volta-400 to-volta-600 flex items-center justify-center shadow-lg shadow-volta-500/30 group-hover:shadow-volta-500/50 transition-shadow">
            <span className="text-white font-bold text-sm">L</span>
          </div>
          <span className="font-semibold text-[15px] tracking-tight">LeverageOS</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 px-3 py-1.5 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              >
                {link.label}
                {link.children && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
              </Link>

              {/* Dropdown */}
              {link.children && openDropdown === link.label && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="glass rounded-xl p-2 w-64 shadow-2xl shadow-black/50">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors group"
                      >
                        <span className="text-sm font-medium text-foreground group-hover:text-volta-300 transition-colors">
                          {child.label}
                        </span>
                        <span className="text-xs text-muted-foreground mt-0.5">
                          {child.desc}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5"
          >
            Sign in
          </Link>
          <Button asChild variant="volta" size="sm">
            <Link href="/devices#configurator">Build Your Device</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="py-2.5 px-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2 border-t border-border mt-2">
              <Button asChild variant="volta" size="lg" className="w-full">
                <Link href="/devices#configurator">Build Your Device</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
