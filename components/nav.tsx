'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, Sun } from 'lucide-react'

// Minimal Tesla-style nav. Order routes to the configurator.
const LINKS = [
  { label: 'HeliosOS', href: '/#hero' },
  { label: 'Devices', href: '/devices' },
  { label: 'Fields', href: '/for-your-field' },
  { label: 'Support', href: '/support' },
] as const

const ORDER_HREF = '/devices#configurator'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Light text over the dark hero (homepage + /devices), at the top, not scrolled.
  const light = (pathname === '/' || pathname === '/devices') && !scrolled && !open

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/85 backdrop-blur-md border-b border-border/60' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-screen-2xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-[17px]">
          <span className="grid place-items-center w-7 h-7 rounded-[5px] text-white"
                style={{ backgroundImage: 'linear-gradient(135deg,#f59e0b,#fb7185)' }}>
            <Sun className="w-4 h-4" />
          </span>
          <span className={light ? 'text-white' : 'text-foreground'}>Helios<span className={light ? 'text-amber-300' : 'text-volta-600'}>.Ai</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href}
                  className={`text-sm font-medium transition-colors duration-300 ${light ? 'text-white/80 hover:text-white' : 'text-muted-foreground hover:text-foreground'}`}>
              {l.label}
            </Link>
          ))}
          <Link href={ORDER_HREF} className="btn-box-primary text-sm px-5 py-2">Order</Link>
        </div>

        <button className={`md:hidden p-2 -mr-2 ${light ? 'text-white' : 'text-foreground'}`} aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden border-b border-border/60 bg-background/95 backdrop-blur-md transition-[max-height,opacity] duration-500 ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 py-4 flex flex-col gap-1">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="py-2.5 text-base font-medium text-foreground/90 hover:text-foreground">
              {l.label}
            </Link>
          ))}
          <Link href={ORDER_HREF} onClick={() => setOpen(false)} className="btn-box-primary mt-2 py-3 text-base w-full">
            Order Now
          </Link>
        </div>
      </div>
    </header>
  )
}
