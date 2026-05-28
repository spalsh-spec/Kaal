import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://leverageos.com'),
  title: {
    default: 'LeverageOS — AI Superpowers, Delivered.',
    template: '%s | LeverageOS',
  },
  description:
    'The world first AI-native laptop. Pre-loaded, pre-optimized, ready to work for you on day one.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://leverageos.com',
    siteName: 'LeverageOS',
    title: 'LeverageOS — AI Superpowers, Delivered.',
    description: 'Pre-loaded AI on premium hardware. For everyone.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LeverageOS — AI Superpowers, Delivered.',
    creator: '@leverageos',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen bg-black text-white font-sans">
        {children}
      </body>
    </html>
  )
}
