import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? 'https://leverageos.com'),
  title: {
    default: 'LeverageOS — AI Superpowers, Delivered.',
    template: '%s | LeverageOS',
  },
  description:
    'The world\'s first AI-native laptop experience. Pre-loaded, pre-optimized, ready to work for you on day one. No coding required.',
  keywords: [
    'AI laptop',
    'AI computer',
    'pre-configured AI',
    'AI tools for non-developers',
    'AI productivity',
    'Claude AI',
    'Cursor AI',
    'Perplexity',
    'AI for professionals',
    'LeverageOS',
  ],
  authors: [{ name: 'LeverageOS', url: 'https://leverageos.com' }],
  creator: 'LeverageOS',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://leverageos.com',
    siteName: 'LeverageOS',
    title: 'LeverageOS — AI Superpowers, Delivered.',
    description:
      'Pre-loaded AI on premium hardware. For marketers, lawyers, doctors, creators, students — anyone who wants results without the technical learning curve.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'LeverageOS' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LeverageOS — AI Superpowers, Delivered.',
    description: 'Pre-loaded AI on premium hardware. No setup. No intimidation. Just results.',
    images: ['/og.png'],
    creator: '@leverageos',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#050507' },
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <style>{`
          :root { --font-instrument-serif: 'Instrument Serif', Georgia, serif; }
        `}</style>
      </head>
      <body className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                color: 'hsl(var(--foreground))',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
