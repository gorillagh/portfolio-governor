import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}