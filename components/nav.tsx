'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Sun } from 'lucide-react'
import { openOrder } from '@/lib/order-bus'

// Minimal nav per brief: Home · Leverage OS · Examples · Support · Order
const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Leverage OS', href: '/#product' },
  { label: 'Examples', href: '/#examples' },
  { label: 'Support', href: '/#support' },
] as const

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/85 backdrop-blur-md border-b border-border/60' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-screen-xl px-5 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo — top left. Replace <Sun/> with /public/logo.svg when you have one. */}
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-[17px]">
          <span className="grid place-items-center w-7 h-7 rounded-[5px] text-white"
                style={{ backgroundImage: 'linear-gradient(135deg,#f59e0b,#fb7185)' }}>
            <Sun className="w-4 h-4" />
          </span>
          <span className="text-foreground">Helios<span className="text-volta-600">.Ai</span></span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              {l.label}
            </Link>
          ))}
          <button onClick={openOrder} className="btn-box-primary text-sm px-5 py-2">
            Order
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2 -mr-2 text-foreground" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden border-b border-border/60 bg-background/95 backdrop-blur-md transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 py-4 flex flex-col gap-1">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="py-2.5 text-base text-foreground/90 hover:text-foreground">
              {l.label}
            </Link>
          ))}
          <button onClick={() => { setOpen(false); openOrder() }} className="btn-box-primary mt-2 py-3 text-base w-full">
            Order Now
          </button>
        </div>
      </div>
    </header>
  )
}
