import Link from 'next/link'

const LINKS = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Support', href: '/support' },
  { label: 'Careers', href: '/about' },
]

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border px-6 py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-7">
        {/* Signature line */}
        <div className="flex flex-col items-center gap-1.5 text-center">
          <span className="h-px w-12 bg-gradient-to-r from-transparent via-volta-500 to-transparent" />
          <p className="text-[11px] tracking-wide text-muted-foreground">
            Knowledge bestows humility. Built to give you leverage.
          </p>
        </div>

        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} LeverageOS, Inc.</p>
          <div className="flex items-center gap-6">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
