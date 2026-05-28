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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}
    >
      <nav className="max-w-screen-xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-white font-semibold text-sm tracking-wide">
          LeverageOS
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Devices', href: '/devices' },
            { label: 'For Your Field', href: '/for-your-field' },
            { label: 'How It Works', href: '/how-it-works' },
            { label: 'About', href: '/about' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="text-white/80 hover:text-white text-sm transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
        <Link href="/devices#configurator" className="text-sm text-white bg-white/10 hover:bg-white/20 px-4 py-1.5 rounded transition-colors border border-white/20">
          Order Now
        </Link>
      </nav>
    </header>
  )
}
