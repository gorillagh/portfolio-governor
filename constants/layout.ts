// Layout Constants for Albert Nartey Portfolio
// Phase 1: Core Infrastructure Configuration

import { NavigationItem, SocialLink, ProfileInfo, ResponsiveConfig, SidebarMotionConfig, LayoutConfig } from '@/types'

// Navigation Configuration
export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
    icon: 'Home',
    description: 'Welcome & Overview'
  },
  {
    id: 'about',
    label: 'About',
    href: '/about',
    icon: 'User',
    description: 'My Story & Experience'
  },
  {
    id: 'projects',
    label: 'Projects',
    href: '/projects',
    icon: 'FolderOpen',
    description: 'Portfolio & Case Studies'
  },
  {
    id: 'skills',
    label: 'Skills',
    href: '/skills',
    icon: 'Code',
    description: 'Technical Expertise'
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '/contact',
    icon: 'Mail',
    description: 'Get In Touch'
  }
]

// Social Media Links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/albertnartey',
    icon: 'Linkedin',
    platform: 'LinkedIn'
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/albertnartey',
    icon: 'Github',
    platform: 'GitHub'
  },
  {
    id: 'twitter',
    label: 'Twitter',
    href: 'https://twitter.com/albertnartey',
    icon: 'Twitter',
    platform: 'Twitter'
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:albert@albertnartey.com',
    icon: 'Mail',
    platform: 'Email'
  }
]

// Profile Information
export const PROFILE_INFO: ProfileInfo = {
  name: 'Albert Nartey',
  title: 'Software Architect & AI Consultant',
  bio: 'Passionate about building scalable solutions that transform businesses through innovative technology.',
  avatar: '/assets/images/profile.jpg',
  location: 'Ghana',
  availability: 'Available for consulting'
}

// Responsive Layout Configuration
export const RESPONSIVE_CONFIG: ResponsiveConfig = {
  mobile: {
    sidebarWidth: 280,
    collapsedWidth: 0,
    showOverlay: true
  },
  tablet: {
    sidebarWidth: 280,
    collapsedWidth: 80,
    showOverlay: true
  },
  desktop: {
    sidebarWidth: 320,
    collapsedWidth: 80,
    showOverlay: false
  }
}

// Animation Configuration
export const SIDEBAR_MOTION_CONFIG: SidebarMotionConfig = {
  sidebar: {
    initial: { x: -320 },
    animate: { x: 0 },
    exit: { x: -320 },
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30
    }
  },
  overlay: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: {
      duration: 0.2
    }
  },
  menuItems: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  }
}

// Complete Layout Configuration
export const LAYOUT_CONFIG: LayoutConfig = {
  responsive: RESPONSIVE_CONFIG,
  motion: SIDEBAR_MOTION_CONFIG,
  theme: {
    primary: '#FFC300',
    secondary: '#FFD700',
    background: '#121212',
    card: '#1E1E1E',
    text: '#FFC300',
    muted: '#666666',
    accent: '#FFC300'
  }
}

// Layout Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  mobile: '0px',
  tablet: '768px',
  desktop: '1024px',
  'desktop-lg': '1280px'
} as const

// Z-Index Layers
export const Z_INDEX = {
  sidebar: 40,
  overlay: 35,
  header: 30,
  dropdown: 50,
  modal: 60,
  toast: 70
} as const