// Main Layout for Albert Nartey Portfolio
// Phase 2: Enhanced Layout with Mobile Optimizations

import Link from 'next/link'
import { LayoutProvider } from '@/contexts/LayoutContext'
import { Sidebar } from '@/components/layout/Sidebar'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/features/ScrollToTop'
import { cn } from '@/lib/utils'

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <LayoutProvider>
      <div className="min-h-screen bg-background">
        {/* Skip to main content link for accessibility */}
        <Link
          href="#main-content"
          className="skip-link sr-only focus:not-sr-only"
          tabIndex={1}
        >
          Skip to main content
        </Link>

        <div className="flex">
          {/* Sidebar Navigation */}
          <Sidebar />
          
          {/* Main Content Area */}
          <div className="flex-1 flex flex-col min-h-screen">
            {/* Header */}
            <Header />
            
            {/* Page Content */}
            <main 
              className={cn(
                "flex-1 px-4 py-6 lg:px-6 lg:py-8",
                "transition-all duration-300 ease-in-out"
              )}
              role="main"
              id="main-content"
              tabIndex={-1}
            >
              {children}
            </main>
            
            {/* Footer */}
            <Footer />
          </div>
        </div>

        {/* Screen reader announcements */}
        <div
          id="screen-reader-announcements"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        />

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </LayoutProvider>
  )
}