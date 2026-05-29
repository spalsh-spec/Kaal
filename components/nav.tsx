'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/60' : 'bg-transparent'}`}
    >
      <nav className="max-w-screen-xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-foreground font-semibold text-sm tracking-wide">
          Leverage<span className="text-volta-600">OS</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Devices', href: '/devices' },
            { label: 'For Your Field', href: '/for-your-field' },
            { label: 'How It Works', href: '/how-it-works' },
            { label: 'About', href: '/about' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
        <Link href="/devices#configurator" className="text-sm text-white bg-volta-500 hover:bg-volta-600 px-4 py-1.5 rounded-lg transition-colors shadow-sm shadow-volta-500/20">
          Order Now
        </Link>
      </nav>
    </header>
  )
}
