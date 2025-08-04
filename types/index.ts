// Navigation and Layout Types for Albert Nartey Portfolio
// Phase 1: Core Infrastructure Types

export interface NavigationItem {
  id: string
  label: string
  href: string
  icon: string
  description?: string
  isActive?: boolean
  isExternal?: boolean
}

export interface SocialLink {
  id: string
  label: string
  href: string
  icon: string
  platform: string
}

export interface ProfileInfo {
  name: string
  title: string
  bio: string
  avatar: string
  location?: string
  availability?: string
}

export interface BreadcrumbItem {
  label: string
  href?: string
  isActive?: boolean
}

export interface LayoutProps {
  children: React.ReactNode
  className?: string
}

export interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
  profile: ProfileInfo
  navigationItems: NavigationItem[]
  socialLinks: SocialLink[]
  className?: string
}

export interface HeaderProps {
  onMenuToggle: () => void
  breadcrumbs?: BreadcrumbItem[]
  title?: string
  className?: string
}

export interface FooterProps {
  className?: string
  showSocial?: boolean
}

// Animation and Motion Types
export interface MotionConfig {
  initial: Record<string, any>
  animate: Record<string, any>
  exit?: Record<string, any>
  transition?: Record<string, any>
}

export interface SidebarMotionConfig {
  sidebar: MotionConfig
  overlay: MotionConfig
  menuItems: MotionConfig
}

// Responsive Design Types
export type Breakpoint = 'mobile' | 'tablet' | 'desktop'

export interface ResponsiveConfig {
  mobile: {
    sidebarWidth: number
    collapsedWidth: number
    showOverlay: boolean
  }
  tablet: {
    sidebarWidth: number
    collapsedWidth: number
    showOverlay: boolean
  }
  desktop: {
    sidebarWidth: number
    collapsedWidth: number
    showOverlay: boolean
  }
}

// Theme and Styling Types
export interface ThemeColors {
  primary: string
  secondary: string
  background: string
  card: string
  text: string
  muted: string
  accent: string
}

export interface LayoutConfig {
  responsive: ResponsiveConfig
  motion: SidebarMotionConfig
  theme: ThemeColors
}