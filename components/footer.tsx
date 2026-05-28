import Link from 'next/link'

const LINKS = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Support', href: '/support' },
  { label: 'Careers', href: '/about' },
]

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 px-6 py-8">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/40">&copy; {new Date().getFullYear()} LeverageOS, Inc.</p>
        <div className="flex items-center gap-6">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-xs text-white/40 hover:text-white/70 transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
