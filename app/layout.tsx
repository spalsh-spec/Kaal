import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://helios.ai'),
  title: {
    default: 'Helios.Ai — HeliosOS, your AI operating layer',
    template: '%s | Helios.Ai',
  },
  description:
    'HeliosOS is an AI-powered operating layer for founders, students, creators and small businesses. Build, organise, automate and improve your work — every week. We believe everyone can be a rising star.',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://helios.ai',
    siteName: 'Helios.Ai',
    title: 'Helios.Ai — HeliosOS',
    description: 'Your AI stack, operating as one system. Updated every week, so you are never left behind.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Helios.Ai — HeliosOS',
    creator: '@helios_ai',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen bg-background text-foreground font-sans">
        {/* Saffron heritage hairline */}
        <div
          aria-hidden
          className="pointer-events-none fixed top-0 inset-x-0 h-[3px] z-[60] bg-gradient-to-r from-volta-600 via-volta-400 to-volta-600"
        />
        {children}
      </body>
    </html>
  )
}
