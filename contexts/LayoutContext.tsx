'use client'

// Layout Context for Albert Nartey Portfolio
// Phase 1: Sidebar and Layout State Management

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Breakpoint } from '@/types'

interface LayoutContextType {
  // Sidebar State
  isSidebarOpen: boolean
  toggleSidebar: () => void
  closeSidebar: () => void
  openSidebar: () => void
  
  // Responsive State
  currentBreakpoint: Breakpoint
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  
  // Layout State
  isCollapsed: boolean
  setIsCollapsed: (collapsed: boolean) => void
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined)

// Custom hook to get breakpoint
function useBreakpoint(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('desktop')

  useEffect(() => {
    const checkBreakpoint = () => {
      const width = window.innerWidth
      if (width < 768) {
        setBreakpoint('mobile')
      } else if (width < 1024) {
        setBreakpoint('tablet')
      } else {
        setBreakpoint('desktop')
      }
    }

    // Initial check
    checkBreakpoint()

    // Listen for resize events
    window.addEventListener('resize', checkBreakpoint)
    return () => window.removeEventListener('resize', checkBreakpoint)
  }, [])

  return breakpoint
}

interface LayoutProviderProps {
  children: ReactNode
}

export function LayoutProvider({ children }: LayoutProviderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const currentBreakpoint = useBreakpoint()

  // Responsive flags
  const isMobile = currentBreakpoint === 'mobile'
  const isTablet = currentBreakpoint === 'tablet'
  const isDesktop = currentBreakpoint === 'desktop'

  // Auto-close sidebar on mobile when screen size changes
  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(false)
    }
  }, [isMobile])

  // Close sidebar when clicking outside on mobile/tablet
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (
        isSidebarOpen &&
        (isMobile || isTablet) &&
        !target.closest('[data-sidebar]') &&
        !target.closest('[data-sidebar-toggle]')
      ) {
        setIsSidebarOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isSidebarOpen, isMobile, isTablet])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isSidebarOpen) {
        setIsSidebarOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isSidebarOpen])

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev)
  const closeSidebar = () => setIsSidebarOpen(false)
  const openSidebar = () => setIsSidebarOpen(true)

  const contextValue: LayoutContextType = {
    isSidebarOpen,
    toggleSidebar,
    closeSidebar,
    openSidebar,
    currentBreakpoint,
    isMobile,
    isTablet,
    isDesktop,
    isCollapsed,
    setIsCollapsed
  }

  return (
    <LayoutContext.Provider value={contextValue}>
      {children}
    </LayoutContext.Provider>
  )
}

export function useLayout() {
  const context = useContext(LayoutContext)
  if (context === undefined) {
    throw new Error('useLayout must be used within a LayoutProvider')
  }
  return context
}