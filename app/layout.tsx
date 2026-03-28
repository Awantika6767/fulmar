import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { ScrollProgress } from '@/components/scroll-progress'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fulmar Marine Services | Engine Specialists & Marine Solutions',
  description: 'Independent marine engine specialists providing mechanical repair, spare parts supply, ship stores, and automation services worldwide. 24/7 emergency support.',
  keywords: ['marine services', 'engine repair', 'spare parts', 'ship stores', 'marine automation', 'turbocharger', 'crankshaft'],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1f35',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body className="font-sans antialiased bg-slate-950 min-h-screen w-full">
        <ScrollProgress />
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
