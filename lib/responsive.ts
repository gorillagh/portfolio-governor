// Responsive Design Utilities for Albert Nartey Portfolio
// Phase 1: Breakpoint Management and Testing

import { BREAKPOINTS } from '@/constants/layout'

// Breakpoint detection hook
export function useBreakpoint() {
  if (typeof window === 'undefined') {
    return 'desktop' // Default for SSR
  }

  const width = window.innerWidth
  
  if (width < 768) return 'mobile'
  if (width < 1024) return 'tablet'
  return 'desktop'
}

// Media query utilities
export const mediaQueries = {
  mobile: `(max-width: ${parseInt(BREAKPOINTS.tablet) - 1}px)`,
  tablet: `(min-width: ${BREAKPOINTS.tablet}) and (max-width: ${parseInt(BREAKPOINTS.desktop) - 1}px)`,
  desktop: `(min-width: ${BREAKPOINTS.desktop})`,
  'desktop-lg': `(min-width: ${BREAKPOINTS['desktop-lg']})`
}

// Responsive layout configuration
export const responsiveConfig = {
  sidebar: {
    mobile: {
      width: '280px',
      position: 'fixed' as const,
      overlay: true,
      collapsible: true
    },
    tablet: {
      width: '280px',
      position: 'fixed' as const,
      overlay: true,
      collapsible: true
    },
    desktop: {
      width: '320px',
      position: 'relative' as const,
      overlay: false,
      collapsible: false
    }
  },
  content: {
    mobile: {
      padding: '1rem',
      maxWidth: '100%'
    },
    tablet: {
      padding: '1.5rem',
      maxWidth: '100%'
    },
    desktop: {
      padding: '2rem',
      maxWidth: 'none'
    }
  }
}

// Touch device detection
export function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false
  
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

// Viewport height utilities (for mobile browser address bar handling)
export function setViewportHeight(): void {
  if (typeof window === 'undefined') return
  
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

// Responsive font scaling
export function getResponsiveFontSize(baseSize: number, breakpoint: string): string {
  const scalingFactors = {
    mobile: 0.875,   // 87.5% of base
    tablet: 0.9375,  // 93.75% of base
    desktop: 1,      // 100% of base
    'desktop-lg': 1.125 // 112.5% of base
  }
  
  const factor = scalingFactors[breakpoint as keyof typeof scalingFactors] || 1
  return `${baseSize * factor}rem`
}

// Layout testing utilities for development
export const layoutTests = {
  // Test sidebar behavior across breakpoints
  testSidebarResponsiveness: () => {
    console.log('Testing sidebar responsiveness...')
    
    Object.entries(mediaQueries).forEach(([breakpoint, query]) => {
      const mediaQuery = window.matchMedia(query)
      console.log(`${breakpoint}: ${mediaQuery.matches ? 'ACTIVE' : 'inactive'}`)
    })
  },
  
  // Test touch interactions
  testTouchInteractions: () => {
    console.log('Touch device:', isTouchDevice())
    console.log('Max touch points:', navigator.maxTouchPoints)
  },
  
  // Test accessibility features
  testAccessibility: () => {
    console.log('Accessibility features:')
    console.log('- Prefers reduced motion:', window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    console.log('- Prefers high contrast:', window.matchMedia('(prefers-contrast: high)').matches)
    console.log('- Color scheme preference:', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  }
}

// Performance monitoring for layout shifts
export function monitorLayoutShifts(): void {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return
  
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
        console.log('Layout shift detected:', (entry as any).value)
      }
    }
  })
  
  try {
    observer.observe({ type: 'layout-shift', buffered: true })
  } catch (e) {
    console.log('Layout shift monitoring not supported')
  }
}