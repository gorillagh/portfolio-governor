# Phase 1 Implementation Guide - Core Infrastructure and Layout
**Albert Nartey Portfolio Website**

## Document Information

- **Project Name**: Albert Nartey Portfolio - Phase 1 Core Infrastructure
- **Document Version**: 1.0
- **Date**: 2025-08-03
- **Author**: Benedicta Davour (UI/UX & Product Designer)
- **Status**: Ready for Implementation
- **Prerequisites**: Phase 0 completed successfully

---

## 📊 Progress Tracker

### Overall Phase 1 Progress: ⬜ 0% Complete

```
Layout System      [⬜⬜⬜⬜⬜] 0%  (0/15 tasks completed)
Sidebar Component  [⬜⬜⬜⬜⬜] 0%  (0/12 tasks completed)
Navigation System  [⬜⬜⬜⬜⬜] 0%  (0/10 tasks completed)
Typography Setup   [⬜⬜⬜⬜⬜] 0%  (0/8 tasks completed)
Animation System   [⬜⬜⬜⬜⬜] 0%  (0/10 tasks completed)
Responsive Design  [⬜⬜⬜⬜⬜] 0%  (0/12 tasks completed)
```

### 🎯 Phase 1 Milestones

| Milestone | Target Date | Status | Completion | Dependencies |
|-----------|-------------|--------|------------|--------------|
| Layout System | Day 2 | ⏳ Pending | 0% | Phase 0 complete |
| Sidebar Component | Day 3 | ⏳ Pending | 0% | Layout System |
| Navigation System | Day 4 | ⏳ Pending | 0% | Sidebar Component |
| Typography & Animations | Day 5 | ⏳ Pending | 0% | Navigation System |
| Responsive Testing | Day 6 | ⏳ Pending | 0% | All above |

### ⏱️ Time Tracking

| Component | Estimated | Actual | Status | Variance |
|-----------|-----------|--------|--------|----------|
| **Total Phase 1** | **3-4 days** | **___ days** | ⏳ Pending | **___ days** |
| Layout System | 8 hours | ___ hours | ⏳ Pending | ___ hours |
| Sidebar Component | 12 hours | ___ hours | ⏳ Pending | ___ hours |
| Navigation System | 8 hours | ___ hours | ⏳ Pending | ___ hours |
| Typography Setup | 4 hours | ___ hours | ⏳ Pending | ___ hours |
| Animation System | 6 hours | ___ hours | ⏳ Pending | ___ hours |
| Responsive Design | 10 hours | ___ hours | ⏳ Pending | ___ hours |

### 🚨 Issues & Blockers

| Issue | Priority | Status | Assigned | Resolution |
|-------|----------|--------|----------|------------|
| _No issues currently_ | - | - | - | - |

### 📋 Asset Integration Status

| Asset Type | Usage in Phase 1 | Status | Implementation |
|------------|-------------------|--------|----------------|
| Profile Image | Sidebar profile section | ⏳ Pending | Circular crop, gold border |
| Client Logos | Navigation branding | ⏳ Pending | Small logo in sidebar |
| Social Icons | Social links section | ⏳ Pending | Lucide React icons |

### 🎨 Design System Progress

| Element | Status | Completion | Notes |
|---------|--------|------------|-------|
| Color Palette | ⏳ Pending | 0% | Gold (#FFD700) + Dark theme |
| Typography | ⏳ Pending | 0% | Ubuntu + Montserrat fonts |
| Spacing System | ⏳ Pending | 0% | 4px base unit system |
| Component Library | ⏳ Pending | 0% | shadcn/ui components |
| Animation Presets | ⏳ Pending | 0% | Framer Motion variants |

---

## Table of Contents

1. [Overview and Objectives](#1-overview-and-objectives)
2. [Component Architecture](#2-component-architecture)
3. [Layout System Implementation](#3-layout-system-implementation)
4. [Sidebar Navigation Component](#4-sidebar-navigation-component)
5. [Main Content Area Layout](#5-main-content-area-layout)
6. [Typography System](#6-typography-system)
7. [Animation System](#7-animation-system)
8. [Responsive Design Strategy](#8-responsive-design-strategy)
9. [Accessibility Implementation](#9-accessibility-implementation)
10. [Dark/Light Mode System](#10-darklight-mode-system)
11. [Implementation Code Examples](#11-implementation-code-examples)
12. [Testing and Validation](#12-testing-and-validation)

---

## 1. Overview and Objectives

### 1.1 Phase 1 Goals

**Primary Objectives:**
- Implement responsive sidebar navigation system
- Create flexible main content layout structure
- Establish typography hierarchy and spacing system
- Set up animation framework with Framer Motion
- Ensure full accessibility compliance (WCAG 2.1 AA)
- Implement mobile-first responsive approach

**Key Deliverables:**
- Functional sidebar with profile section
- Icon-based navigation with smooth transitions
- Responsive grid system for main content
- Typography components (Ubuntu + Montserrat)
- Animation utilities and presets
- Dark/light mode toggle infrastructure

### 1.2 Design System Foundation

**Color Palette:**
```typescript
// Primary Colors
const colors = {
  // Dark Theme (Default)
  background: '#0A0A0A',      // Main background
  surface: '#1A1A1A',        // Card/component backgrounds
  border: '#2A2A2A',         // Borders and dividers
  
  // Gold Accents
  primary: '#FFD700',        // Primary gold
  secondary: '#FFA500',      // Accent gold
  primaryHover: '#FFE55C',   // Hover states
  
  // Text Colors
  textPrimary: '#FFFFFF',    // Primary text
  textSecondary: '#B0B0B0',  // Secondary text
  textMuted: '#808080',      // Muted text
  
  // Status Colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6'
}
```

**Typography Scale:**
```typescript
const typography = {
  fontFamily: {
    heading: ['Ubuntu', 'system-ui', 'sans-serif'],
    body: ['Montserrat', 'system-ui', 'sans-serif'],
    mono: ['Fira Code', 'Monaco', 'monospace']
  },
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem'  // 60px
  }
}
```

---

## 2. Component Architecture

### 2.1 Component Hierarchy

```
app/
├── layout.tsx (Root Layout)
├── page.tsx (Home Page)
└── (main)/
    ├── layout.tsx (Main Layout with Sidebar)
    ├── about/page.tsx
    ├── resume/page.tsx
    ├── portfolio/page.tsx
    └── contact/page.tsx

components/
├── layout/
│   ├── Sidebar/
│   │   ├── index.tsx
│   │   ├── ProfileSection.tsx
│   │   ├── NavigationMenu.tsx
│   │   ├── SocialLinks.tsx
│   │   └── styles.module.css
│   ├── Header/
│   │   ├── index.tsx
│   │   ├── MobileMenuToggle.tsx
│   │   └── ThemeToggle.tsx
│   └── MainContent/
│       ├── index.tsx
│       └── PageTransition.tsx
├── ui/ (shadcn/ui components)
├── common/
│   ├── Button/
│   ├── IconButton/
│   ├── Avatar/
│   └── Logo/
└── animations/
    ├── PageTransition.tsx
    ├── FadeIn.tsx
    ├── SlideIn.tsx
    └── ScrollReveal.tsx
```

### 2.2 Component Responsibilities

**Sidebar Component:**
- Profile image with gold border
- Name and title display
- Icon-based navigation menu
- Social media links
- Download CV button
- Copyright notice
- Mobile menu state management

**MainContent Component:**
- Content area layout
- Page transition animations
- Scroll restoration
- Loading states

**Header Component (Mobile):**
- Hamburger menu toggle
- Theme toggle button
- Breadcrumb navigation (optional)

---

## 3. Layout System Implementation

### 3.1 CSS Grid Architecture

**Desktop Layout (≥1024px):**
```css
.layout-container {
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-rows: 1fr;
  min-height: 100vh;
  background: #0A0A0A;
}

.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 280px;
  height: 100vh;
  background: linear-gradient(135deg, #1A1A1A 0%, #0F0F0F 100%);
  border-right: 1px solid #2A2A2A;
  z-index: 100;
}

.main-content {
  margin-left: 280px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
```

**Tablet Layout (768px - 1023px):**
```css
@media (max-width: 1023px) {
  .layout-container {
    grid-template-columns: 240px 1fr;
  }
  
  .sidebar {
    width: 240px;
    transform: translateX(-100%);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .sidebar.open {
    transform: translateX(0);
  }
  
  .main-content {
    margin-left: 0;
  }
}
```

**Mobile Layout (<768px):**
```css
@media (max-width: 767px) {
  .layout-container {
    grid-template-columns: 1fr;
  }
  
  .sidebar {
    width: 100%;
    max-width: 320px;
    transform: translateX(-100%);
    backdrop-filter: blur(10px);
    background: rgba(26, 26, 26, 0.95);
  }
  
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 90;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
  
  .overlay.visible {
    opacity: 1;
    visibility: visible;
  }
}
```

### 3.2 Spacing System

```css
:root {
  /* Spacing Scale (based on 4px grid) */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  
  /* Content Spacing */
  --content-padding: var(--space-6);
  --section-spacing: var(--space-16);
  --component-spacing: var(--space-8);
}
```

---

## 4. Sidebar Navigation Component

### 4.1 ProfileSection Component

```typescript
// components/layout/Sidebar/ProfileSection.tsx
interface ProfileSectionProps {
  name: string;
  title: string;
  avatarUrl: string;
  className?: string;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({
  name,
  title,
  avatarUrl,
  className
}) => {
  return (
    <div className={cn("profile-section", className)}>
      <div className="avatar-container">
        <img
          src={avatarUrl}
          alt={`${name} profile`}
          className="avatar-image"
          loading="eager"
        />
        <div className="avatar-border" />
      </div>
      <div className="profile-info">
        <h1 className="profile-name">{name}</h1>
        <p className="profile-title">{title}</p>
      </div>
    </div>
  );
};
```

**ProfileSection Styles:**
```css
.profile-section {
  padding: var(--space-8) var(--space-6);
  text-align: center;
  border-bottom: 1px solid #2A2A2A;
}

.avatar-container {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto var(--space-6);
}

.avatar-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  z-index: 2;
}

.avatar-border {
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  z-index: 1;
}

.profile-name {
  font-family: var(--font-ubuntu);
  font-size: var(--text-xl);
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: var(--space-2);
  line-height: 1.2;
}

.profile-title {
  font-family: var(--font-montserrat);
  font-size: var(--text-sm);
  color: #B0B0B0;
  font-weight: 400;
  letter-spacing: 0.5px;
}
```

### 4.2 NavigationMenu Component

```typescript
// components/layout/Sidebar/NavigationMenu.tsx
import { Home, User, FileText, Briefcase, Mail } from 'lucide-react';

interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', href: '/', icon: Home },
  { id: 'about', label: 'About Me', href: '/about', icon: User },
  { id: 'resume', label: 'Resume', href: '/resume', icon: FileText },
  { id: 'portfolio', label: 'Portfolio', href: '/portfolio', icon: Briefcase },
  { id: 'contact', label: 'Contact', href: '/contact', icon: Mail },
];

interface NavigationMenuProps {
  currentPath: string;
  onItemClick?: (href: string) => void;
  className?: string;
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({
  currentPath,
  onItemClick,
  className
}) => {
  return (
    <nav className={cn("navigation-menu", className)} role="navigation">
      <ul className="nav-list">
        {navigationItems.map((item) => (
          <li key={item.id} className="nav-item">
            <Link
              href={item.href}
              className={cn(
                "nav-link",
                currentPath === item.href && "active"
              )}
              onClick={() => onItemClick?.(item.href)}
              aria-current={currentPath === item.href ? 'page' : undefined}
            >
              <item.icon size={20} className="nav-icon" aria-hidden="true" />
              <span className="nav-label">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
```

**NavigationMenu Styles:**
```css
.navigation-menu {
  padding: var(--space-4) 0;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin-bottom: var(--space-1);
}

.nav-link {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-6);
  color: #B0B0B0;
  text-decoration: none;
  font-family: var(--font-montserrat);
  font-size: var(--text-sm);
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 0;
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  transform: scaleY(0);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link:hover,
.nav-link:focus {
  color: #FFD700;
  background: rgba(255, 215, 0, 0.05);
  outline: none;
}

.nav-link:hover::before,
.nav-link:focus::before {
  transform: scaleY(1);
}

.nav-link.active {
  color: #FFD700;
  background: rgba(255, 215, 0, 0.1);
}

.nav-link.active::before {
  transform: scaleY(1);
}

.nav-icon {
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.nav-link:hover .nav-icon {
  transform: scale(1.1);
}

.nav-label {
  font-weight: 500;
  letter-spacing: 0.025em;
}
```

### 4.3 SocialLinks Component

```typescript
// components/layout/Sidebar/SocialLinks.tsx
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const socialLinks: SocialLink[] = [
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:albert@example.com',
    icon: Mail
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/albertnartey',
    icon: Linkedin
  },
  {
    id: 'twitter',
    label: 'Twitter',
    href: 'https://twitter.com/albertnartey',
    icon: Twitter
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/albertnartey',
    icon: Github
  }
];

export const SocialLinks: React.FC = () => {
  return (
    <div className="social-links">
      <div className="social-grid">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className="social-link"
            aria-label={link.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <link.icon size={18} className="social-icon" />
          </a>
        ))}
      </div>
    </div>
  );
};
```

**SocialLinks Styles:**
```css
.social-links {
  padding: var(--space-6);
  border-bottom: 1px solid #2A2A2A;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-3);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 1px solid #2A2A2A;
  border-radius: 8px;
  color: #B0B0B0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: transparent;
}

.social-link:hover,
.social-link:focus {
  color: #FFD700;
  border-color: #FFD700;
  background: rgba(255, 215, 0, 0.05);
  transform: translateY(-2px);
  outline: none;
}

.social-icon {
  transition: transform 0.3s ease;
}

.social-link:hover .social-icon {
  transform: scale(1.1);
}
```

### 4.4 Complete Sidebar Component

```typescript
// components/layout/Sidebar/index.tsx
'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { ProfileSection } from './ProfileSection';
import { NavigationMenu } from './NavigationMenu';
import { SocialLinks } from './SocialLinks';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  className
}) => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={cn(
          "overlay",
          isOpen && "visible"
        )}
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Sidebar */}
      <aside
        className={cn(
          "sidebar",
          isOpen && "open",
          className
        )}
        role="complementary"
        aria-label="Main navigation"
      >
        {/* Mobile Close Button */}
        <button
          className="close-button"
          onClick={onClose}
          aria-label="Close navigation menu"
        >
          <X size={24} />
        </button>

        {/* Profile Section */}
        <ProfileSection
          name="Albert Narh Nartey"
          title="Software Engineer"
          avatarUrl="/images/profile-photo.jpg"
        />

        {/* Navigation Menu */}
        <NavigationMenu
          currentPath={pathname}
          onItemClick={onClose}
        />

        {/* Social Links */}
        <SocialLinks />

        {/* Download CV Button */}
        <div className="cv-section">
          <Button
            variant="outline"
            className="cv-button"
            asChild
          >
            <a
              href="/Albert_Nartey_Resume.pdf"
              download
              className="cv-link"
            >
              Download CV
            </a>
          </Button>
        </div>

        {/* Copyright */}
        <div className="copyright">
          <p>© 2024 All rights reserved.</p>
        </div>
      </aside>
    </>
  );
};
```

**Additional Sidebar Styles:**
```css
.close-button {
  display: none;
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  color: #B0B0B0;
  cursor: pointer;
  z-index: 10;
  transition: color 0.3s ease;
}

.close-button:hover {
  color: #FFD700;
}

@media (max-width: 1023px) {
  .close-button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.cv-section {
  padding: var(--space-6);
  border-bottom: 1px solid #2A2A2A;
}

.cv-button {
  width: 100%;
  border-color: #FFD700;
  color: #FFD700;
  background: transparent;
  font-weight: 500;
  transition: all 0.3s ease;
}

.cv-button:hover {
  background: #FFD700;
  color: #0A0A0A;
}

.cv-link {
  display: block;
  width: 100%;
  text-decoration: none;
  color: inherit;
}

.copyright {
  margin-top: auto;
  padding: var(--space-6);
  text-align: center;
  border-top: 1px solid #2A2A2A;
}

.copyright p {
  font-family: var(--font-montserrat);
  font-size: var(--text-xs);
  color: #808080;
  margin: 0;
}
```

---

## 5. Main Content Area Layout

### 5.1 MainContent Component

```typescript
// components/layout/MainContent/index.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface MainContentProps {
  children: React.ReactNode;
  className?: string;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 1.02
  }
};

const pageTransition = {
  type: "tween",
  ease: [0.4, 0, 0.2, 1],
  duration: 0.4
};

export const MainContent: React.FC<MainContentProps> = ({
  children,
  className
}) => {
  const pathname = usePathname();

  return (
    <main className={cn("main-content", className)} role="main">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="page-container"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </main>
  );
};
```

**MainContent Styles:**
```css
.main-content {
  flex: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
}

.page-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
}

/* Content spacing utilities */
.content-section {
  padding: var(--section-spacing) var(--content-padding);
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.content-header {
  margin-bottom: var(--space-16);
  text-align: center;
}

.content-title {
  font-family: var(--font-ubuntu);
  font-size: var(--text-4xl);
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: var(--space-4);
  line-height: 1.2;
}

.content-subtitle {
  font-family: var(--font-montserrat);
  font-size: var(--text-lg);
  color: #B0B0B0;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .content-section {
    padding: var(--space-12) var(--space-4);
  }
  
  .content-title {
    font-size: var(--text-3xl);
  }
  
  .content-subtitle {
    font-size: var(--text-base);
  }
}
```

### 5.2 Layout Component Integration

```typescript
// app/(main)/layout.tsx
'use client';

import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { MainContent } from '@/components/layout/MainContent';
import { MobileHeader } from '@/components/layout/Header/MobileHeader';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="layout-container">
      {/* Mobile Header */}
      {isMobile && (
        <MobileHeader
          onMenuToggle={toggleSidebar}
          menuOpen={sidebarOpen}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={closeSidebar}
      />

      {/* Main Content */}
      <MainContent>
        {children}
      </MainContent>
    </div>
  );
}
```

---

## 6. Typography System

### 6.1 Typography Components

```typescript
// components/ui/Typography/index.tsx
import { cva, type VariantProps } from 'class-variance-authority';

const headingVariants = cva(
  "font-ubuntu font-bold text-white leading-tight tracking-tight",
  {
    variants: {
      size: {
        h1: "text-5xl md:text-6xl",
        h2: "text-4xl md:text-5xl",
        h3: "text-3xl md:text-4xl",
        h4: "text-2xl md:text-3xl",
        h5: "text-xl md:text-2xl",
        h6: "text-lg md:text-xl"
      },
      color: {
        default: "text-white",
        primary: "text-primary",
        secondary: "text-secondary",
        muted: "text-muted"
      }
    },
    defaultVariants: {
      size: "h1",
      color: "default"
    }
  }
);

const textVariants = cva(
  "font-montserrat leading-relaxed",
  {
    variants: {
      size: {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl"
      },
      color: {
        default: "text-white",
        secondary: "text-secondary-foreground",
        muted: "text-muted-foreground"
      },
      weight: {
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold"
      }
    },
    defaultVariants: {
      size: "base",
      color: "default",
      weight: "normal"
    }
  }
);

interface HeadingProps extends VariantProps<typeof headingVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
}

interface TextProps extends VariantProps<typeof textVariants> {
  as?: 'p' | 'span' | 'div';
  children: React.ReactNode;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  as: Component = 'h1',
  size,
  color,
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={cn(headingVariants({ size, color, className }))}
      {...props}
    >
      {children}
    </Component>
  );
};

export const Text: React.FC<TextProps> = ({
  as: Component = 'p',
  size,
  color,
  weight,
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={cn(textVariants({ size, color, weight, className }))}
      {...props}
    >
      {children}
    </Component>
  );
};
```

### 6.2 Font Loading Optimization

```typescript
// app/layout.tsx
import { Ubuntu, Montserrat } from 'next/font/google';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
  display: 'swap',
  preload: true
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
  preload: true
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${ubuntu.variable} ${montserrat.variable}`}>
      <body className="font-montserrat">
        {children}
      </body>
    </html>
  );
}
```

---

## 7. Animation System

### 7.1 Framer Motion Setup

```typescript
// lib/animations.ts
import { Variants } from 'framer-motion';

// Page transitions
export const pageTransitions: Variants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

// Fade in animations
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

// Stagger animations for lists
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1
    }
  }
};

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

// Slide animations
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 50
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

// Scale animations
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

// Custom easing functions
export const easing = {
  easeInOut: [0.4, 0, 0.2, 1],
  easeOut: [0, 0, 0.2, 1],
  easeIn: [0.4, 0, 1, 1],
  spring: {
    type: "spring",
    damping: 30,
    stiffness: 300
  }
} as const;
```

### 7.2 Animation Components

```typescript
// components/animations/FadeIn.tsx
'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  className
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeIn}
      transition={{ ...fadeIn.visible.transition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
```

```typescript
// components/animations/ScrollReveal.tsx
'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
```

---

## 8. Responsive Design Strategy

### 8.1 Breakpoint System

```css
:root {
  /* Breakpoints */
  --breakpoint-xs: 480px;
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}

/* Mobile First Media Queries */
@media (min-width: 480px) { /* xs */ }
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

### 8.2 Container System

```css
.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--space-4);
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
    padding: 0 var(--space-6);
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
    padding: 0 var(--space-8);
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}
```

### 8.3 Mobile Header Component

```typescript
// components/layout/Header/MobileHeader.tsx
'use client';

import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';

interface MobileHeaderProps {
  onMenuToggle: () => void;
  menuOpen: boolean;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({
  onMenuToggle,
  menuOpen
}) => {
  return (
    <header className="mobile-header">
      <div className="header-content">
        <Button
          variant="ghost"
          size="sm"
          onClick={onMenuToggle}
          className="menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
        
        <div className="header-title">
          <h1>Albert Nartey</h1>
        </div>
        
        <ThemeToggle />
      </div>
    </header>
  );
};
```

**MobileHeader Styles:**
```css
.mobile-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #2A2A2A;
  z-index: 200;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 var(--space-4);
}

.menu-toggle {
  color: #FFD700;
  border: none;
  background: transparent;
}

.header-title h1 {
  font-family: var(--font-ubuntu);
  font-size: var(--text-lg);
  font-weight: 600;
  color: #FFFFFF;
  margin: 0;
}

@media (min-width: 1024px) {
  .mobile-header {
    display: none;
  }
}
```

---

## 9. Accessibility Implementation

### 9.1 ARIA Labels and Semantic HTML

```typescript
// components/layout/Sidebar/NavigationMenu.tsx (Enhanced)
export const NavigationMenu: React.FC<NavigationMenuProps> = ({
  currentPath,
  onItemClick,
  className
}) => {
  return (
    <nav 
      className={cn("navigation-menu", className)} 
      role="navigation"
      aria-label="Main navigation"
    >
      <ul className="nav-list" role="list">
        {navigationItems.map((item) => (
          <li key={item.id} className="nav-item" role="listitem">
            <Link
              href={item.href}
              className={cn(
                "nav-link",
                currentPath === item.href && "active"
              )}
              onClick={() => onItemClick?.(item.href)}
              aria-current={currentPath === item.href ? 'page' : undefined}
              aria-describedby={`nav-desc-${item.id}`}
            >
              <item.icon 
                size={20} 
                className="nav-icon" 
                aria-hidden="true" 
              />
              <span className="nav-label">{item.label}</span>
              <span 
                id={`nav-desc-${item.id}`}
                className="sr-only"
              >
                Navigate to {item.label} page
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
```

### 9.2 Screen Reader Support

```css
/* Screen reader only content */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

### 9.3 Focus Management

```css
/* Focus styles */
*:focus {
  outline: 2px solid #FFD700;
  outline-offset: 2px;
}

.nav-link:focus {
  outline: 2px solid #FFD700;
  outline-offset: -2px;
  background: rgba(255, 215, 0, 0.1);
}

/* Skip link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #FFD700;
  color: #0A0A0A;
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
  z-index: 1000;
  transition: top 0.3s;
}

.skip-link:focus {
  top: 6px;
}
```

### 9.4 Keyboard Navigation

```typescript
// components/layout/Sidebar/index.tsx (Enhanced with keyboard support)
export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  className
}) => {
  const sidebarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      // Trap focus within sidebar
      if (e.key === 'Tab') {
        const focusableElements = sidebarRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements && focusableElements.length > 0) {
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }

      // Close on Escape
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <aside
      ref={sidebarRef}
      className={cn("sidebar", isOpen && "open", className)}
      role="complementary"
      aria-label="Main navigation"
      aria-hidden={!isOpen}
    >
      {/* Sidebar content */}
    </aside>
  );
};
```

---

## 10. Dark/Light Mode System

### 10.1 Theme Provider Setup

```typescript
// contexts/ThemeContext.tsx
'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  actualTheme: 'dark' | 'light';
};

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
  actualTheme: 'dark',
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'dark',
  storageKey = 'portfolio-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [actualTheme, setActualTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    const stored = localStorage.getItem(storageKey) as Theme;
    
    if (stored) {
      setTheme(stored);
    }

    const updateTheme = (theme: Theme) => {
      let resolvedTheme: 'dark' | 'light' = 'dark';

      if (theme === 'system') {
        resolvedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';
      } else {
        resolvedTheme = theme;
      }

      setActualTheme(resolvedTheme);
      root.classList.remove('light', 'dark');
      root.classList.add(resolvedTheme);
    };

    updateTheme(theme);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        updateTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme, storageKey]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
    actualTheme,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
```

### 10.2 Theme Toggle Component

```typescript
// components/layout/Header/ThemeToggle.tsx
'use client';

import { Moon, Sun, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, setTheme, actualTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="theme-toggle"
          aria-label="Toggle theme"
        >
          {actualTheme === 'dark' ? (
            <Moon size={20} />
          ) : (
            <Sun size={20} />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="theme-menu">
        <DropdownMenuItem 
          onClick={() => setTheme('light')}
          className={theme === 'light' ? 'active' : ''}
        >
          <Sun size={16} className="mr-2" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme('dark')}
          className={theme === 'dark' ? 'active' : ''}
        >
          <Moon size={16} className="mr-2" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme('system')}
          className={theme === 'system' ? 'active' : ''}
        >
          <Monitor size={16} className="mr-2" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

### 10.3 CSS Variables for Theme Support

```css
/* app/globals.css */
:root {
  /* Dark theme (default) */
  --background: 10 10 10;
  --foreground: 255 255 255;
  --surface: 26 26 26;
  --border: 42 42 42;
  --primary: 255 215 0;
  --secondary: 255 165 0;
  --muted: 128 128 128;
}

.light {
  --background: 255 255 255;
  --foreground: 10 10 10;
  --surface: 248 250 252;
  --border: 229 231 235;
  --primary: 255 215 0;
  --secondary: 255 165 0;
  --muted: 107 114 126;
}

/* Apply theme colors */
.sidebar {
  background: rgb(var(--surface));
  border-color: rgb(var(--border));
  color: rgb(var(--foreground));
}

.main-content {
  background: rgb(var(--background));
  color: rgb(var(--foreground));
}

.nav-link {
  color: rgb(var(--muted));
}

.nav-link:hover,
.nav-link.active {
  color: rgb(var(--primary));
}
```

---

## 11. Implementation Code Examples

### 11.1 Complete Main Layout Implementation

```typescript
// app/(main)/layout.tsx
'use client';

import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { MainContent } from '@/components/layout/MainContent';
import { MobileHeader } from '@/components/layout/Header/MobileHeader';
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      
      // Auto-close sidebar on desktop
      if (!mobile) {
        setSidebarOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="layout-container">
        {/* Skip to main content link */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Mobile Header */}
        {isMobile && (
          <MobileHeader
            onMenuToggle={toggleSidebar}
            menuOpen={sidebarOpen}
          />
        )}

        {/* Sidebar Navigation */}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={closeSidebar}
        />

        {/* Main Content Area */}
        <MainContent>
          <div id="main-content">
            {children}
          </div>
        </MainContent>
      </div>
    </ThemeProvider>
  );
}
```

### 11.2 Homepage Implementation Example

```typescript
// app/(main)/page.tsx
import { FadeIn } from '@/components/animations/FadeIn';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Heading, Text } from '@/components/ui/Typography';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="content-container">
          <FadeIn>
            <div className="hero-content">
              <Heading as="h1" size="h1" className="hero-title">
                Albert Narh Nartey
              </Heading>
              <Text size="xl" color="secondary" className="hero-subtitle">
                UI/UX Designer
              </Text>
              <Text size="lg" className="hero-description">
                Creating exceptional digital experiences through thoughtful design 
                and innovative solutions that bridge creativity with functionality.
              </Text>
              <div className="hero-actions">
                <Button asChild className="cta-primary">
                  <Link href="/contact">Get In Touch</Link>
                </Button>
                <Button variant="outline" asChild className="cta-secondary">
                  <Link href="/portfolio">View Work</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quick Stats Section */}
      <ScrollReveal direction="up" delay={0.2}>
        <section className="stats-section">
          <div className="content-container">
            <div className="stats-grid">
              <div className="stat-item">
                <Heading as="h3" size="h3" color="primary">5+</Heading>
                <Text color="secondary">Years Experience</Text>
              </div>
              <div className="stat-item">
                <Heading as="h3" size="h3" color="primary">50+</Heading>
                <Text color="secondary">Projects Completed</Text>
              </div>
              <div className="stat-item">
                <Heading as="h3" size="h3" color="primary">25+</Heading>
                <Text color="secondary">Happy Clients</Text>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
```

### 11.3 Global Styles Configuration

```css
/* app/globals.css */
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&family=Montserrat:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-montserrat), system-ui, sans-serif;
  background: rgb(var(--background));
  color: rgb(var(--foreground));
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Layout Styles */
.layout-container {
  display: grid;
  grid-template-columns: 280px 1fr;
  min-height: 100vh;
}

@media (max-width: 1023px) {
  .layout-container {
    grid-template-columns: 1fr;
  }
  
  body.sidebar-open {
    overflow: hidden;
  }
}

/* Content Sections */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--space-16) var(--space-6);
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  margin-bottom: var(--space-6);
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  margin-bottom: var(--space-8);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.hero-description {
  margin-bottom: var(--space-12);
  color: rgb(var(--muted));
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: var(--space-4);
  justify-content: center;
  flex-wrap: wrap;
}

.stats-section {
  padding: var(--space-16) var(--space-6);
  background: rgb(var(--surface));
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-8);
  max-width: 800px;
  margin: 0 auto;
}

.stat-item {
  text-align: center;
}

/* Button Styles */
.cta-primary {
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  color: #0A0A0A;
  border: none;
  font-weight: 600;
  padding: var(--space-4) var(--space-8);
  transition: all 0.3s ease;
}

.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
}

.cta-secondary {
  border-color: rgb(var(--primary));
  color: rgb(var(--primary));
  padding: var(--space-4) var(--space-8);
  font-weight: 600;
}

.cta-secondary:hover {
  background: rgb(var(--primary));
  color: #0A0A0A;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    padding: var(--space-12) var(--space-4);
    min-height: calc(100vh - 64px);
    margin-top: 64px;
  }
  
  .hero-title {
    font-size: var(--text-4xl);
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-primary,
  .cta-secondary {
    width: 100%;
    max-width: 280px;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
}

/* Utility Classes */
.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-6);
}

@media (max-width: 768px) {
  .content-container {
    padding: 0 var(--space-4);
  }
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgb(var(--surface));
}

::-webkit-scrollbar-thumb {
  background: rgb(var(--primary));
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(var(--secondary));
}
```

---

## 12. Testing and Validation

### 12.1 Component Testing Strategy

```typescript
// __tests__/components/Sidebar.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Sidebar } from '@/components/layout/Sidebar';
import { ThemeProvider } from '@/contexts/ThemeContext';

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider defaultTheme="dark">
      {component}
    </ThemeProvider>
  );
};

describe('Sidebar Component', () => {
  it('renders navigation items correctly', () => {
    renderWithTheme(
      <Sidebar isOpen={true} onClose={jest.fn()} />
    );
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText('Resume')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    renderWithTheme(
      <Sidebar isOpen={true} onClose={onClose} />
    );
    
    const closeButton = screen.getByLabelText('Close navigation menu');
    fireEvent.click(closeButton);
    
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('closes on Escape key press', async () => {
    const onClose = jest.fn();
    renderWithTheme(
      <Sidebar isOpen={true} onClose={onClose} />
    );
    
    fireEvent.keyDown(document, { key: 'Escape' });
    
    await waitFor(() => {
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  it('traps focus within sidebar when open', () => {
    renderWithTheme(
      <Sidebar isOpen={true} onClose={jest.fn()} />
    );
    
    const focusableElements = screen.getAllByRole('link');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    firstElement.focus();
    fireEvent.keyDown(firstElement, { key: 'Tab', shiftKey: true });
    
    expect(lastElement).toHaveFocus();
  });
});
```

### 12.2 Accessibility Testing

```typescript
// __tests__/accessibility/Sidebar.a11y.test.tsx
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Sidebar } from '@/components/layout/Sidebar';
import { ThemeProvider } from '@/contexts/ThemeContext';

expect.extend(toHaveNoViolations);

describe('Sidebar Accessibility', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(
      <ThemeProvider defaultTheme="dark">
        <Sidebar isOpen={true} onClose={jest.fn()} />
      </ThemeProvider>
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has proper ARIA labels', () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <Sidebar isOpen={true} onClose={jest.fn()} />
      </ThemeProvider>
    );
    
    expect(screen.getByRole('complementary')).toHaveAttribute(
      'aria-label',
      'Main navigation'
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
```

### 12.3 Responsive Testing Checklist

```markdown
## Responsive Testing Checklist

### Mobile (320px - 767px)
- [ ] Sidebar opens as full-width overlay
- [ ] Mobile header displays correctly
- [ ] Touch targets are minimum 44px
- [ ] Text remains readable at all sizes
- [ ] Images scale appropriately
- [ ] Navigation is thumb-friendly

### Tablet (768px - 1023px)
- [ ] Sidebar toggles correctly
- [ ] Content reflows appropriately
- [ ] Touch and mouse interactions work
- [ ] Landscape and portrait orientations
- [ ] iPad Pro compatibility

### Desktop (1024px+)
- [ ] Fixed sidebar displays correctly
- [ ] Content area uses remaining space
- [ ] Hover states work properly
- [ ] Keyboard navigation functions
- [ ] High DPI display compatibility

### Cross-Browser Testing
- [ ] Chrome (latest 2 versions)
- [ ] Firefox (latest 2 versions)
- [ ] Safari (latest 2 versions)
- [ ] Edge (latest 2 versions)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)
```

### 12.4 Performance Testing

```typescript
// __tests__/performance/Layout.perf.test.tsx
import { render } from '@testing-library/react';
import { measurePerformance } from '@/utils/testing';
import { MainLayout } from '@/app/(main)/layout';

describe('Layout Performance', () => {
  it('renders within performance budget', async () => {
    const startTime = performance.now();
    
    render(
      <MainLayout>
        <div>Test content</div>
      </MainLayout>
    );
    
    const endTime = performance.now();
    const renderTime = endTime - startTime;
    
    // Should render in under 16ms (60fps)
    expect(renderTime).toBeLessThan(16);
  });

  it('animations do not cause layout thrashing', () => {
    // Test animation performance
    const performanceEntries = performance.getEntriesByType('measure');
    const layoutThrashing = performanceEntries.filter(
      entry => entry.name.includes('layout')
    );
    
    expect(layoutThrashing.length).toBeLessThan(5);
  });
});
```

---

## Implementation Timeline

### Day 1-2: Core Infrastructure
- Set up component architecture
- Implement Sidebar component with all sub-components
- Create layout system with CSS Grid
- Set up typography system
- Configure theme system

### Day 3: Responsive Design
- Implement mobile header
- Add responsive breakpoints
- Test across all device sizes
- Optimize touch interactions

### Day 4: Animations & Polish
- Integrate Framer Motion
- Add page transitions
- Implement scroll animations
- Performance optimization

### Day 5: Testing & Accessibility
- Write comprehensive tests
- Accessibility audit and fixes
- Cross-browser testing
- Performance validation

---

## Success Criteria

- [ ] Sidebar navigation works flawlessly on all devices
- [ ] All animations are smooth (60fps)
- [ ] Accessibility score of 95+ in Lighthouse
- [ ] Performance score of 90+ in Lighthouse
- [ ] Cross-browser compatibility confirmed
- [ ] Responsive design works from 320px to 2560px
- [ ] Typography system is fully implemented
- [ ] Dark/light mode toggle functions correctly
- [ ] Focus management works properly
- [ ] All components have proper TypeScript types

---

This comprehensive Phase 1 implementation guide provides everything needed to build a robust, accessible, and performant core infrastructure for the Albert Nartey portfolio website. The modular component architecture ensures maintainability while the responsive design approach guarantees optimal user experience across all devices.