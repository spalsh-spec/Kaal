import Link from 'next/link'

const FOOTER_LINKS = {
  Product: [
    { label: 'Devices', href: '/devices' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'Configure Yours', href: '/devices#configurator' },
    { label: 'Stack Updates', href: '/how-it-works#updates' },
  ],
  'For Your Field': [
    { label: 'Marketing', href: '/for-your-field#marketing' },
    { label: 'Legal', href: '/for-your-field#lawyer' },
    { label: 'Medical', href: '/for-your-field#doctor' },
    { label: 'Creators', href: '/for-your-field#creator' },
    { label: 'Students', href: '/for-your-field#student' },
    { label: 'All Professions', href: '/for-your-field' },
  ],
  Learn: [
    { label: 'Video Library', href: '/learn' },
    { label: 'Consulting', href: '/consulting' },
    { label: 'Community', href: '/support' },
    { label: 'Blog', href: '/blog' },
    { label: 'Changelog', href: '/changelog' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Manifesto', href: '/about#manifesto' },
    { label: 'Careers', href: '/about#careers' },
    { label: 'Press', href: '/about#press' },
    { label: 'Support', href: '/support' },
  ],
}

const ECOSYSTEM = ['Claude', 'Cursor', 'Perplexity', 'Midjourney', 'ElevenLabs', 'NotebookLM', 'ChatGPT', 'Runway']

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 group mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-volta-400 to-volta-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="font-semibold text-[15px] tracking-tight">LeverageOS</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-[240px]">
              AI superpowers, delivered. The world&apos;s first AI-native laptop experience.
              Built for humans, not developers.
            </p>
            <div className="flex gap-3">
              {['𝕏', '▶', 'in', '⬡'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-xs text-muted-foreground hover:bg-volta-500/20 hover:text-volta-300 transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Ecosystem bar */}
        <div className="py-6 border-y border-border/30 mb-6">
          <p className="text-xs text-muted-foreground/50 uppercase tracking-widest mb-3">
            Powered by
          </p>
          <div className="flex flex-wrap gap-2">
            {ECOSYSTEM.map((tool) => (
              <span
                key={tool}
                className="text-xs text-muted-foreground px-2.5 py-1 rounded-full bg-muted/30 border border-border/30"
              >
                {tool}
              </span>
            ))}
            <span className="text-xs text-muted-foreground px-2.5 py-1 rounded-full bg-muted/30 border border-border/30">
              + more monthly
            </span>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} LeverageOS, Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              ['Privacy Policy', '/privacy'],
              ['Terms of Service', '/terms'],
              ['Warranty', '/terms#warranty'],
              ['Accessibility', '/accessibility'],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
