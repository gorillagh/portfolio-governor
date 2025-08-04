import type { Metadata } from 'next'
import { Ubuntu, Montserrat } from 'next/font/google'
import { AnalyticsProvider } from '@/components/analytics/AnalyticsProvider'
import './globals.css'

// Font configurations matching the design system
const ubuntu = Ubuntu({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
  display: 'swap'
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap'
})

export const metadata: Metadata = {
  title: {
    default: 'Albert Nartey - Software Architect & AI Consultant',
    template: '%s | Albert Nartey'
  },
  description: 'Experienced Software Architect specializing in React, Next.js, and AI/ML solutions. Available for consulting and development projects.',
  keywords: ['Software Architect', 'AI Consultant', 'React Developer', 'Next.js', 'TypeScript', 'Ghana'],
  authors: [{ name: 'Albert Nartey' }],
  creator: 'Albert Nartey',
  openGraph: {
    title: 'Albert Nartey - Software Architect & AI Consultant',
    description: 'Experienced Software Architect specializing in React, Next.js, and AI/ML solutions.',
    url: 'https://albertnartey.com',
    siteName: 'Albert Nartey Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Albert Nartey - Software Architect'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Albert Nartey - Software Architect',
    description: 'Software Architect & AI Consultant',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${ubuntu.variable} ${montserrat.variable} font-sans antialiased`}>
        <AnalyticsProvider>
          {children}
        </AnalyticsProvider>
      </body>
    </html>
  )
}