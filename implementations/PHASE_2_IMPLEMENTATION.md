# Phase 2 Implementation Guide - Page Components and Features
**Albert Nartey Portfolio Website**

## Document Information

- **Project Name**: Albert Nartey Portfolio - Phase 2 Page Components
- **Document Version**: 1.0
- **Date**: 2025-08-03
- **Author**: Benedicta Davour (UI/UX & Product Designer)
- **Status**: Ready for Implementation
- **Prerequisites**: Phase 0 and Phase 1 completed successfully

---

## 📊 Progress Tracker

### Overall Phase 2 Progress: ⬜ 0% Complete

```
Home Page          [⬜⬜⬜⬜⬜] 0%  (0/8 tasks completed)
About Me Page      [⬜⬜⬜⬜⬜] 0%  (0/12 tasks completed)
Portfolio Page     [⬜⬜⬜⬜⬜] 0%  (0/15 tasks completed)
Resume Page        [⬜⬜⬜⬜⬜] 0%  (0/14 tasks completed)
Contact Page       [⬜⬜⬜⬜⬜] 0%  (0/10 tasks completed)
Shared Components  [⬜⬜⬜⬜⬜] 0%  (0/8 tasks completed)
```

### 🎯 Phase 2 Milestones

| Page | Target Date | Status | Completion | Key Features |
|------|-------------|--------|------------|--------------|
| Home Page | Week 1 | ⏳ Pending | 0% | Hero, CTA buttons |
| About Me Page | Week 1 | ⏳ Pending | 0% | Services, contact info |
| Portfolio Page | Week 2 | ⏳ Pending | 0% | Project grid, filtering |
| Resume Page | Week 2 | ⏳ Pending | 0% | Timeline, skill bars |
| Contact Page | Week 3 | ⏳ Pending | 0% | Form, map integration |

### ⏱️ Time Tracking

| Page/Component | Estimated | Actual | Status | Priority |
|----------------|-----------|--------|--------|----------|
| **Total Phase 2** | **3-4 days** | **___ days** | ⏳ Pending | **Critical** |
| Home Page | 6 hours | ___ hours | ⏳ Pending | Critical |
| About Me Page | 8 hours | ___ hours | ⏳ Pending | Critical |
| Portfolio Page | 12 hours | ___ hours | ⏳ Pending | Critical |
| Resume Page | 10 hours | ___ hours | ⏳ Pending | High |
| Contact Page | 8 hours | ___ hours | ⏳ Pending | High |
| Shared Components | 6 hours | ___ hours | ⏳ Pending | Medium |

### 🚨 Issues & Blockers

| Issue | Priority | Status | Page | Resolution |
|-------|----------|--------|------|------------|
| _No issues currently_ | - | - | - | - |

### 📋 Asset Integration by Page

| Page | Assets Used | Status | Implementation Notes |
|------|-------------|--------|---------------------|
| **Home** | Profile image | ⏳ Pending | Large centered display |
| **About** | Profile image, service icons | ⏳ Pending | Profile + contact cards |
| **Portfolio** | 6 work samples (work1-6.png) | ⏳ Pending | Grid layout with filtering |
| **Resume** | Skills icons, timeline graphics | ⏳ Pending | Animated skill bars |
| **Contact** | Map, form icons | ⏳ Pending | Contact cards + form |

### 📄 Page-Specific Progress

#### 🏠 Home Page Progress (0/8 tasks)
- [ ] **[1h]** Hero section with large title *(Critical)*
- [ ] **[30min]** Gold "UI/UX Designer" subtitle *(Critical)*
- [ ] **[1h]** "Get In Touch" CTA button *(Critical)*
- [ ] **[1h]** Responsive layout implementation *(High)*
- [ ] **[30min]** Profile image integration *(High)*
- [ ] **[1h]** Smooth scroll animations *(Medium)*
- [ ] **[30min]** SEO meta tags *(Medium)*
- [ ] **[30min]** Accessibility testing *(High)*

#### 👤 About Me Page Progress (0/12 tasks)
- [ ] **[1h]** "About Me" header with gold accent *(Critical)*
- [ ] **[2h]** Personal introduction section *(Critical)*
- [ ] **[2h]** Contact details cards (Residence, Address, Email, Phone) *(Critical)*
- [ ] **[2h]** "What I Do" service cards *(Critical)*
- [ ] **[1h]** Custom Web Development service *(High)*
- [ ] **[1h]** Mobile App Development service *(High)*
- [ ] **[1h]** Cloud Solutions service *(High)*
- [ ] **[1h]** UI/UX Design service *(High)*
- [ ] **[30min]** Service icons integration *(Medium)*
- [ ] **[30min]** Hover effects on cards *(Medium)*
- [ ] **[30min]** Mobile responsiveness *(High)*
- [ ] **[30min]** Accessibility compliance *(High)*

#### 💼 Portfolio Page Progress (0/15 tasks)
- [ ] **[1h]** Portfolio header and title *(Critical)*
- [ ] **[2h]** Filter tabs (All, Web, Mobile, UI/UX) *(Critical)*
- [ ] **[3h]** Project grid layout system *(Critical)*
- [ ] **[2h]** Project card component *(Critical)*
- [ ] **[1h]** Work1.png integration and optimization *(High)*
- [ ] **[1h]** Work2.png integration and optimization *(High)*
- [ ] **[1h]** Work3.png integration and optimization *(High)*
- [ ] **[1h]** Work4.png integration and optimization *(High)*
- [ ] **[1h]** Work5.png integration and optimization *(High)*
- [ ] **[1h]** Work6.png integration and optimization *(High)*
- [ ] **[1h]** Filtering functionality *(High)*
- [ ] **[1h]** Hover effects with gold accents *(Medium)*
- [ ] **[30min]** Mobile project cards *(High)*
- [ ] **[30min]** Loading states *(Medium)*
- [ ] **[30min]** Error handling *(Medium)*

---

## Table of Contents

1. [Overview and Objectives](#1-overview-and-objectives)
2. [Home Page Implementation](#2-home-page-implementation)
3. [About Me Page Implementation](#3-about-me-page-implementation)
4. [Portfolio Page Implementation](#4-portfolio-page-implementation)
5. [Resume Page Implementation](#5-resume-page-implementation)
6. [Contact Page Implementation](#6-contact-page-implementation)
7. [Shared Components Library](#7-shared-components-library)
8. [Animation and Interaction Patterns](#8-animation-and-interaction-patterns)
9. [Data Management and State](#9-data-management-and-state)
10. [SEO and Meta Configuration](#10-seo-and-meta-configuration)
11. [Testing Strategy](#11-testing-strategy)
12. [Performance Optimization](#12-performance-optimization)

---

## 1. Overview and Objectives

### 1.1 Phase 2 Goals

**Primary Objectives:**
- Implement all 5 main pages with pixel-perfect design matching
- Create responsive, interactive components for each page
- Implement smooth animations and micro-interactions
- Ensure accessibility compliance across all pages
- Optimize for SEO and performance
- Create reusable component library

**Key Deliverables:**
- Home page with hero section and call-to-actions
- About Me page with services and contact info
- Portfolio page with filterable project grid
- Resume page with timeline and skill bars
- Contact page with form and map integration
- Shared UI components and utilities
- Animation system integration
- SEO optimization

### 1.2 Design System Analysis

Based on the design inspirations, key elements include:

**Visual Hierarchy:**
- Large centered titles and headings
- Gold accent color (#FFD700) for highlights
- Clean typography with Ubuntu/Montserrat fonts
- Dark theme with subtle textures
- Consistent spacing and grid alignment

**Interactive Elements:**
- Gold-outlined buttons with hover effects
- Smooth page transitions
- Filterable content sections
- Progress bars with animations
- Form validation and feedback
- Map integration

**Layout Patterns:**
- Sidebar navigation (implemented in Phase 1)
- Central content area with max-width containers
- Grid layouts for portfolios and services
- Two-column layouts for content sections
- Card-based components

---

## 2. Home Page Implementation

### 2.1 Hero Section Component

```typescript
// components/pages/Home/HeroSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heading, Text } from '@/components/ui/Typography';
import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

export const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="hero-content"
        >
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Heading as="h1" size="h1" className="hero-title">
              Albert Narh Nartey
            </Heading>
          </motion.div>

          {/* Subtitle with Gold Accent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Text size="xl" className="hero-subtitle">
              UI/UX Designer
            </Text>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Text size="lg" className="hero-description">
              Creating intuitive and beautiful digital experiences that solve 
              real problems. Passionate about user-centered design and modern 
              web technologies.
            </Text>
          </motion.div>

          {/* Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hero-actions"
          >
            <Button asChild className="cta-primary">
              <Link href="/contact">
                Get In Touch
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            
            <Button variant="outline" asChild className="cta-secondary">
              <a href="/Albert_Nartey_Resume.pdf" download>
                <Download className="mr-2" size={18} />
                Download CV
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <div className="hero-background">
          <div className="floating-shapes">
            <motion.div
              className="shape shape-1"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="shape shape-2"
              animate={{
                y: [0, 15, 0],
                rotate: [0, -3, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
```

### 2.2 Home Page Styles

```css
/* styles/pages/home.css */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 215, 0, 0.03) 0%,
    rgba(10, 10, 10, 1) 70%
  );
}

.hero-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 var(--space-6);
  text-align: center;
  position: relative;
  z-index: 2;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
}

.hero-title {
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 700;
  line-height: 1.1;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: var(--space-4);
}

.hero-subtitle {
  color: #FFD700;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  margin-bottom: var(--space-6);
}

.hero-description {
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  line-height: 1.7;
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  margin-bottom: var(--space-10);
}

.hero-actions {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
  justify-content: center;
}

.cta-primary {
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  border: none;
  color: #0A0A0A;
  font-weight: 600;
  padding: var(--space-4) var(--space-8);
  font-size: 1.1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.2);
}

.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.4);
  filter: brightness(1.1);
}

.cta-secondary {
  border: 2px solid #FFD700;
  color: #FFD700;
  background: transparent;
  font-weight: 600;
  padding: var(--space-4) var(--space-8);
  font-size: 1.1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cta-secondary:hover {
  background: #FFD700;
  color: #0A0A0A;
  transform: translateY(-1px);
}

/* Floating Background Elements */
.hero-background {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}

.floating-shapes {
  position: relative;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 165, 0, 0.05));
  filter: blur(1px);
}

.shape-1 {
  width: 200px;
  height: 200px;
  top: 20%;
  left: 10%;
}

.shape-2 {
  width: 300px;
  height: 300px;
  bottom: 20%;
  right: 10%;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .hero-section {
    min-height: calc(100vh - 64px);
    margin-top: 64px;
    padding: var(--space-8) 0;
  }
  
  .hero-container {
    padding: 0 var(--space-4);
  }
  
  .hero-actions {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
  
  .cta-primary,
  .cta-secondary {
    width: 100%;
    max-width: 280px;
  }
  
  .shape-1,
  .shape-2 {
    display: none;
  }
}
```

### 2.3 Complete Home Page

```typescript
// app/(main)/page.tsx
import { HeroSection } from '@/components/pages/Home/HeroSection';
import { ScrollToTop } from '@/components/common/ScrollToTop';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Albert Narh Nartey - UI/UX Designer & Software Engineer',
  description: 'Creating intuitive and beautiful digital experiences. UI/UX Designer and Software Engineer specializing in modern web technologies.',
  keywords: ['UI/UX Designer', 'Software Engineer', 'Web Developer', 'Ghana', 'Portfolio'],
  openGraph: {
    title: 'Albert Narh Nartey - UI/UX Designer',
    description: 'Creating intuitive and beautiful digital experiences',
    url: 'https://albertnartey.com',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ScrollToTop />
    </>
  );
}
```

---

## 3. About Me Page Implementation

### 3.1 About Content Section

```typescript
// components/pages/About/AboutContent.tsx
'use client';

import { motion } from 'framer-motion';
import { Heading, Text } from '@/components/ui/Typography';
import { FadeIn } from '@/components/animations/FadeIn';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export const AboutContent: React.FC = () => {
  return (
    <section className="about-content">
      <div className="content-container">
        <FadeIn>
          <div className="about-header">
            <Heading as="h1" size="h2" className="section-title">
              About <span className="text-primary">Me</span>
            </Heading>
          </div>
        </FadeIn>

        <div className="about-layout">
          {/* Main Description */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="about-description">
              <Text size="lg" className="intro-text">
                I'm a full-stack developer passionate about building efficient, 
                user-friendly web applications. With expertise in both frontend 
                and backend technologies, I love solving problems and turning 
                ideas into reality. Let's create something amazing together!
              </Text>
            </div>
          </ScrollReveal>

          {/* Contact Information */}
          <ScrollReveal direction="right" delay={0.4}>
            <div className="contact-info">
              <div className="info-grid">
                <div className="info-item">
                  <Text size="sm" weight="semibold" className="info-label">
                    Residence
                  </Text>
                  <Text size="base" className="info-value">
                    Ghana
                  </Text>
                </div>
                
                <div className="info-item">
                  <Text size="sm" weight="semibold" className="info-label">
                    Address
                  </Text>
                  <Text size="base" className="info-value">
                    18 Mimosa St Dansoman
                  </Text>
                </div>
                
                <div className="info-item">
                  <Text size="sm" weight="semibold" className="info-label">
                    e-mail
                  </Text>
                  <Text size="base" className="info-value">
                    albertnartey824@gmail.com
                  </Text>
                </div>
                
                <div className="info-item">
                  <Text size="sm" weight="semibold" className="info-label">
                    phone
                  </Text>
                  <Text size="base" className="info-value">
                    +233 240 298 910
                  </Text>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
```

### 3.2 Services Section

```typescript
// components/pages/About/ServicesSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Heading, Text } from '@/components/ui/Typography';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Code, Smartphone, Cloud, Palette } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const services: Service[] = [
  {
    id: 'web-dev',
    title: 'Custom Web Development',
    description: 'Providing tailored web development solutions that focus on user-centered design, seamless functionality, and high performance to create websites that meet your specific needs from concept to launch.',
    icon: Code
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    description: 'Designing and developing mobile applications for both Android and iOS platforms, ensuring a smooth and intuitive user experience with high efficiency and responsiveness.',
    icon: Smartphone
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Implementing scalable cloud infrastructure and services to optimize your business operations, improve performance, and ensure reliable data management and security.',
    icon: Cloud
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Creating beautiful, functional, and user-focused interfaces that enhance user experience while maintaining aesthetic appeal and usability standards.',
    icon: Palette
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="services-section">
      <div className="content-container">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="services-header">
            <Heading as="h2" size="h3" className="services-title">
              What I <span className="text-primary">Do</span>
            </Heading>
          </div>
        </ScrollReveal>

        <div className="services-grid">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.id}
              direction="up"
              delay={0.3 + index * 0.1}
            >
              <motion.div
                className="service-card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="service-icon">
                  <service.icon size={40} />
                </div>
                <div className="service-content">
                  <Heading as="h3" size="h6" className="service-title">
                    {service.title}
                  </Heading>
                  <Text size="sm" className="service-description">
                    {service.description}
                  </Text>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
```

### 3.3 About Page Styles

```css
/* styles/pages/about.css */
.about-content {
  padding: var(--space-16) 0 var(--space-8);
}

.about-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.section-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  margin-bottom: var(--space-4);
}

.about-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-12);
  align-items: start;
}

.about-description {
  padding-right: var(--space-8);
}

.intro-text {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  font-size: 1.125rem;
}

.contact-info {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: var(--space-6);
}

.info-grid {
  display: grid;
  gap: var(--space-4);
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.info-label {
  color: #FFD700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.info-value {
  color: rgba(255, 255, 255, 0.8);
}

/* Services Section */
.services-section {
  padding: var(--space-16) 0;
  background: rgba(255, 255, 255, 0.01);
}

.services-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.services-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-8);
}

.service-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: var(--space-8);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.service-card:hover {
  border-color: rgba(255, 215, 0, 0.3);
  background: rgba(255, 215, 0, 0.03);
  box-shadow: 0 8px 32px rgba(255, 215, 0, 0.1);
}

.service-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #FFD700, #FFA500);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-6);
  color: #0A0A0A;
}

.service-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.service-title {
  color: #FFFFFF;
  font-weight: 600;
  margin-bottom: var(--space-2);
}

.service-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .about-layout {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
  
  .about-description {
    padding-right: 0;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
  
  .service-card {
    padding: var(--space-6);
  }
}
```

---

## 4. Portfolio Page Implementation

### 4.1 Portfolio Filter Component

```typescript
// components/pages/Portfolio/PortfolioFilter.tsx
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/Typography';

export type FilterCategory = 'all' | 'web' | 'mobile' | 'ui-ux';

interface FilterOption {
  id: FilterCategory;
  label: string;
}

const filterOptions: FilterOption[] = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'ui-ux', label: 'UI/UX' }
];

interface PortfolioFilterProps {
  activeFilter: FilterCategory;
  onFilterChange: (filter: FilterCategory) => void;
}

export const PortfolioFilter: React.FC<PortfolioFilterProps> = ({
  activeFilter,
  onFilterChange
}) => {
  return (
    <div className="portfolio-filter">
      <div className="filter-tabs">
        {filterOptions.map((option) => (
          <motion.div key={option.id}>
            <Button
              variant={activeFilter === option.id ? 'default' : 'ghost'}
              className={`filter-tab ${activeFilter === option.id ? 'active' : ''}`}
              onClick={() => onFilterChange(option.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Text size="sm" weight="medium">
                {option.label}
              </Text>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
```

### 4.2 Project Card Component

```typescript
// components/pages/Portfolio/ProjectCard.tsx
'use client';

import { motion } from 'framer-motion';
import { Heading, Text } from '@/components/ui/Typography';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'mobile' | 'ui-ux';
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -8 }}
      className={`project-card ${project.category}`}
    >
      <div className="project-image">
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={300}
          className="card-image"
        />
        <div className="project-overlay">
          <div className="project-actions">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="action-button"
                aria-label="View live project"
              >
                <ExternalLink size={20} />
              </Link>
            )}
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="action-button"
                aria-label="View source code"
              >
                <Github size={20} />
              </Link>
            )}
          </div>
        </div>
      </div>
      
      <div className="project-content">
        <Heading as="h3" size="h6" className="project-title">
          {project.title}
        </Heading>
        <Text size="sm" className="project-description">
          {project.description}
        </Text>
        <div className="project-technologies">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
```

### 4.3 Portfolio Grid Component

```typescript
// components/pages/Portfolio/PortfolioGrid.tsx
'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioFilter, FilterCategory } from './PortfolioFilter';
import { ProjectCard, Project } from './ProjectCard';
import { Heading } from '@/components/ui/Typography';

// Sample projects data
const projects: Project[] = [
  {
    id: '1',
    title: 'Moodify: Music App Landing Page',
    description: 'A modern music streaming app landing page with interactive elements and smooth animations.',
    category: 'web',
    image: '/images/projects/moodify.jpg',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://moodify-demo.com',
    githubUrl: 'https://github.com/albertnartey/moodify'
  },
  {
    id: '2',
    title: 'OB-Lab: Marketing Platform',
    description: 'Comprehensive marketing platform with analytics dashboard and campaign management.',
    category: 'web',
    image: '/images/projects/ob-lab.jpg',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Chart.js'],
    liveUrl: 'https://ob-lab-demo.com',
    githubUrl: 'https://github.com/albertnartey/ob-lab'
  },
  {
    id: '3',
    title: 'Dream-Nest: Talent Nurturing',
    description: 'Platform connecting talents with opportunities and mentorship programs.',
    category: 'web',
    image: '/images/projects/dream-nest.jpg',
    technologies: ['React', 'TypeScript', 'PostgreSQL', 'Express'],
    liveUrl: 'https://dream-nest-demo.com'
  },
  {
    id: '4',
    title: 'Food Delivery Mobile App',
    description: 'Cross-platform food delivery app with real-time tracking and payment integration.',
    category: 'mobile',
    image: '/images/projects/food-app.jpg',
    technologies: ['React Native', 'Firebase', 'Stripe API', 'Maps API'],
    githubUrl: 'https://github.com/albertnartey/food-delivery'
  },
  {
    id: '5',
    title: 'Personal Portfolio Website',
    description: 'Professional portfolio website showcasing personal brand and achievements.',
    category: 'mobile',
    image: '/images/projects/portfolio-mobile.jpg',
    technologies: ['React Native', 'Expo', 'AsyncStorage'],
    githubUrl: 'https://github.com/albertnartey/portfolio-mobile'
  },
  {
    id: '6',
    title: 'Travel Booking App',
    description: 'Mobile app for booking flights and hotels with intuitive user interface.',
    category: 'mobile',
    image: '/images/projects/travel-app.jpg',
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST API'],
    githubUrl: 'https://github.com/albertnartey/travel-booking'
  }
];

export const PortfolioGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects;
    }
    return projects.filter(project => project.category === activeFilter);
  }, [activeFilter]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="portfolio-grid-section">
      <div className="content-container">
        <div className="portfolio-header">
          <Heading as="h1" size="h2" className="section-title">
            Portfolio
          </Heading>
          <PortfolioFilter
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="projects-grid"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="empty-state"
          >
            <Text size="lg" color="muted">
              No projects found in this category.
            </Text>
          </motion.div>
        )}
      </div>
    </section>
  );
};
```

### 4.4 Portfolio Page Styles

```css
/* styles/pages/portfolio.css */
.portfolio-grid-section {
  padding: var(--space-16) 0;
}

.portfolio-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.section-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  margin-bottom: var(--space-8);
}

/* Filter Component */
.portfolio-filter {
  margin-bottom: var(--space-12);
}

.filter-tabs {
  display: flex;
  justify-content: center;
  gap: var(--space-2);
  flex-wrap: wrap;
}

.filter-tab {
  padding: var(--space-3) var(--space-6);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: transparent;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
}

.filter-tab:hover {
  border-color: rgba(255, 215, 0, 0.5);
  color: #FFD700;
  background: rgba(255, 215, 0, 0.05);
}

.filter-tab.active {
  background: linear-gradient(135deg, #FFD700, #FFA500);
  color: #0A0A0A;
  border-color: #FFD700;
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--space-8);
}

/* Project Card */
.project-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.project-card:hover {
  border-color: rgba(255, 215, 0, 0.3);
  box-shadow: 0 12px 40px rgba(255, 215, 0, 0.15);
}

.project-image {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .card-image {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-actions {
  display: flex;
  gap: var(--space-4);
}

.action-button {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #FFD700, #FFA500);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0A0A0A;
  text-decoration: none;
  transition: all 0.3s ease;
}

.action-button:hover {
  transform: scale(1.1);
  filter: brightness(1.1);
}

.project-content {
  padding: var(--space-6);
}

.project-title {
  color: #FFFFFF;
  font-weight: 600;
  margin-bottom: var(--space-3);
}

.project-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: var(--space-4);
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.tech-tag {
  padding: var(--space-1) var(--space-3);
  background: rgba(255, 215, 0, 0.1);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 20px;
  font-size: 0.75rem;
  color: #FFD700;
  font-weight: 500;
}

/* Mobile Category Styling */
.project-card.mobile .project-image {
  aspect-ratio: 9/16;
  max-width: 300px;
  margin: 0 auto;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: var(--space-16) 0;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
  
  .filter-tabs {
    justify-content: center;
    gap: var(--space-1);
  }
  
  .filter-tab {
    padding: var(--space-2) var(--space-4);
    font-size: 0.875rem;
  }
  
  .project-content {
    padding: var(--space-4);
  }
}
```

---

## 5. Resume Page Implementation

### 5.1 Education Timeline Component

```typescript
// components/pages/Resume/EducationTimeline.tsx
'use client';

import { motion } from 'framer-motion';
import { Heading, Text } from '@/components/ui/Typography';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

interface EducationItem {
  id: string;
  period: string;
  institution: string;
  degree: string;
  description: string;
}

const educationData: EducationItem[] = [
  {
    id: '1',
    period: '2017 - 2021',
    institution: 'University of Ghana',
    degree: 'BSc Computer Science',
    description: 'Focused on software development, data structures, algorithms, and web technologies. Participated in various projects, gaining hands-on experience with full-stack development.'
  },
  {
    id: '2',
    period: 'Sep 2024 - Nov 2024',
    institution: 'Meltwater Entrepreneurial School of Technology (MEST)',
    degree: 'Web Development',
    description: 'Completed an intensive program focused on web development fundamentals, building responsive applications, and modern JavaScript frameworks. Developed projects individually and in teams, enhancing skills in front-end and back-end development.'
  }
];

export const EducationTimeline: React.FC = () => {
  return (
    <section className="education-section">
      <div className="timeline-container">
        <ScrollReveal direction="up">
          <Heading as="h2" size="h3" className="timeline-title">
            Education
          </Heading>
        </ScrollReveal>

        <div className="timeline">
          {educationData.map((item, index) => (
            <ScrollReveal
              key={item.id}
              direction="left"
              delay={0.2 + index * 0.2}
            >
              <motion.div
                className="timeline-item"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="timeline-marker">
                  <div className="marker-dot" />
                  <div className="marker-line" />
                </div>
                
                <div className="timeline-content">
                  <div className="timeline-period">
                    <Text size="sm" weight="semibold" className="period-text">
                      {item.period}
                    </Text>
                    <Text size="sm" className="institution-text">
                      {item.institution}
                    </Text>
                  </div>
                  
                  <div className="timeline-details">
                    <Heading as="h3" size="h6" className="degree-title">
                      {item.degree}
                    </Heading>
                    <Text size="sm" className="degree-description">
                      {item.description}
                    </Text>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
```

### 5.2 Skills Section Component

```typescript
// components/pages/Resume/SkillsSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Heading, Text } from '@/components/ui/Typography';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface Skill {
  name: string;
  percentage: number;
  category: 'programming' | 'frameworks' | 'other';
}

const skillsData: Skill[] = [
  // Programming Languages
  { name: 'JavaScript', percentage: 95, category: 'programming' },
  { name: 'Python', percentage: 70, category: 'programming' },
  { name: 'Java', percentage: 70, category: 'programming' },
  
  // Development Frameworks
  { name: 'React', percentage: 95, category: 'frameworks' },
  { name: 'Next.js', percentage: 80, category: 'frameworks' },
  { name: 'React Native', percentage: 70, category: 'frameworks' },
  { name: 'Vue', percentage: 65, category: 'frameworks' },
  
  // Other Skills
  { name: 'UI/UX Design', percentage: 85, category: 'other' },
  { name: 'Node.js', percentage: 80, category: 'other' },
  { name: 'MongoDB', percentage: 75, category: 'other' },
  { name: 'Git/GitHub', percentage: 90, category: 'other' }
];

interface SkillBarProps {
  skill: Skill;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setAnimatedPercentage(skill.percentage);
      }, index * 100);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, skill.percentage, index]);

  return (
    <motion.div
      ref={ref}
      className="skill-item"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="skill-header">
        <Text size="sm" weight="medium" className="skill-name">
          {skill.name}
        </Text>
        <Text size="sm" className="skill-percentage">
          {animatedPercentage}%
        </Text>
      </div>
      
      <div className="skill-bar">
        <motion.div
          className="skill-progress"
          initial={{ width: 0 }}
          animate={{ width: `${animatedPercentage}%` }}
          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
};

export const SkillsSection: React.FC = () => {
  const programmingSkills = skillsData.filter(skill => skill.category === 'programming');
  const frameworkSkills = skillsData.filter(skill => skill.category === 'frameworks');
  const otherSkills = skillsData.filter(skill => skill.category === 'other');

  const SkillCategory = ({ title, skills, delay = 0 }: { 
    title: string; 
    skills: Skill[]; 
    delay?: number;
  }) => (
    <ScrollReveal direction="up" delay={delay}>
      <div className="skill-category">
        <Heading as="h3" size="h5" className="category-title">
          {title}
        </Heading>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );

  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="skills-grid">
          <SkillCategory 
            title="Programming Languages" 
            skills={programmingSkills} 
            delay={0.2}
          />
          <SkillCategory 
            title="Development Frameworks" 
            skills={frameworkSkills} 
            delay={0.4}
          />
          <SkillCategory 
            title="Other Skills" 
            skills={otherSkills} 
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};
```

### 5.3 Experience Section Component

```typescript
// components/pages/Resume/ExperienceSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Heading, Text } from '@/components/ui/Typography';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  position: string;
  description: string;
  achievements: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: '1',
    period: '2023 - Present',
    company: 'Freelance',
    position: 'Full-Stack Developer',
    description: 'Working with various clients to build custom web applications and mobile solutions.',
    achievements: [
      'Developed 15+ responsive websites using React and Next.js',
      'Built cross-platform mobile apps with React Native',
      'Implemented cloud-based solutions using AWS and Firebase',
      'Improved client website performance by 40% on average'
    ]
  },
  {
    id: '2',
    period: '2022 - 2023',
    company: 'TechStart Ghana',
    position: 'Frontend Developer',
    description: 'Focused on creating user-friendly interfaces for web applications in the fintech sector.',
    achievements: [
      'Led frontend development for 3 major projects',
      'Collaborated with design team to implement pixel-perfect UIs',
      'Reduced page load times by 35% through optimization',
      'Mentored 2 junior developers'
    ]
  }
];

export const ExperienceSection: React.FC = () => {
  return (
    <section className="experience-section">
      <div className="experience-container">
        <ScrollReveal direction="up">
          <Heading as="h2" size="h3" className="section-title">
            Experience
          </Heading>
        </ScrollReveal>

        <div className="experience-timeline">
          {experienceData.map((item, index) => (
            <ScrollReveal
              key={item.id}
              direction="right"
              delay={0.2 + index * 0.2}
            >
              <motion.div
                className="experience-item"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="experience-header">
                  <div className="experience-period">
                    <Text size="sm" weight="semibold" className="period-badge">
                      {item.period}
                    </Text>
                  </div>
                  <div className="experience-details">
                    <Heading as="h3" size="h6" className="position-title">
                      {item.position}
                    </Heading>
                    <Text size="sm" className="company-name">
                      {item.company}
                    </Text>
                  </div>
                </div>
                
                <div className="experience-content">
                  <Text size="sm" className="job-description">
                    {item.description}
                  </Text>
                  
                  <ul className="achievements-list">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx} className="achievement-item">
                        <Text size="sm">{achievement}</Text>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
```

### 5.4 Resume Page Styles

```css
/* styles/pages/resume.css */
.resume-page {
  padding: var(--space-16) 0;
}

.resume-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.page-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  margin-bottom: var(--space-4);
}

/* Education Timeline */
.education-section {
  margin-bottom: var(--space-16);
}

.timeline-container {
  max-width: 800px;
  margin: 0 auto;
}

.timeline-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: var(--space-8);
  color: #FFFFFF;
}

.timeline {
  position: relative;
  padding-left: var(--space-8);
}

.timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, #FFD700, #FFA500);
}

.timeline-item {
  position: relative;
  margin-bottom: var(--space-8);
  padding-left: var(--space-8);
}

.timeline-marker {
  position: absolute;
  left: -28px;
  top: 0;
}

.marker-dot {
  width: 16px;
  height: 16px;
  background: linear-gradient(135deg, #FFD700, #FFA500);
  border-radius: 50%;
  border: 3px solid #0A0A0A;
  position: relative;
  z-index: 2;
}

.timeline-content {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: var(--space-6);
  align-items: start;
}

.timeline-period {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.period-text {
  color: #FFD700;
  font-weight: 600;
}

.institution-text {
  color: rgba(255, 255, 255, 0.6);
}

.timeline-details {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: var(--space-6);
}

.degree-title {
  color: #FFFFFF;
  font-weight: 600;
  margin-bottom: var(--space-3);
}

.degree-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

/* Skills Section */
.skills-section {
  margin-bottom: var(--space-16);
}

.skills-container {
  max-width: 1000px;
  margin: 0 auto;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-8);
}

.skill-category {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: var(--space-6);
}

.category-title {
  color: #FFFFFF;
  font-weight: 600;
  margin-bottom: var(--space-6);
  text-align: center;
}

.category-title:first-child {
  color: #FFD700;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skill-name {
  color: rgba(255, 255, 255, 0.9);
}

.skill-percentage {
  color: #FFD700;
  font-weight: 600;
}

.skill-bar {
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #FFD700, #FFA500);
  border-radius: 3px;
  position: relative;
}

.skill-progress::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 30px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3));
  animation: shimmer 2s infinite ease-in-out;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* Experience Section */
.experience-section {
  margin-bottom: var(--space-16);
}

.experience-container {
  max-width: 900px;
  margin: 0 auto;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: var(--space-8);
  color: #FFFFFF;
  text-align: center;
}

.experience-timeline {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.experience-item {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: var(--space-6);
  transition: all 0.3s ease;
}

.experience-item:hover {
  border-color: rgba(255, 215, 0, 0.3);
  box-shadow: 0 8px 32px rgba(255, 215, 0, 0.1);
}

.experience-header {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-6);
  align-items: start;
  margin-bottom: var(--space-4);
}

.period-badge {
  background: linear-gradient(135deg, #FFD700, #FFA500);
  color: #0A0A0A;
  padding: var(--space-2) var(--space-4);
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  white-space: nowrap;
}

.position-title {
  color: #FFFFFF;
  font-weight: 600;
  margin-bottom: var(--space-1);
}

.company-name {
  color: rgba(255, 255, 255, 0.6);
}

.experience-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.job-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

.achievements-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.achievement-item {
  position: relative;
  padding-left: var(--space-6);
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
}

.achievement-item::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #FFD700;
  font-weight: bold;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .timeline-content {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
  
  .timeline-period {
    order: 2;
  }
  
  .timeline-details {
    order: 1;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
  
  .experience-header {
    grid-template-columns: 1fr;
    gap: var(--space-3);
  }
  
  .timeline {
    padding-left: var(--space-6);
  }
  
  .timeline::before {
    left: 15px;
  }
  
  .timeline-marker {
    left: -23px;
  }
}
```

---

## 6. Contact Page Implementation

### 6.1 Contact Information Cards

```typescript
// components/pages/Contact/ContactInfo.tsx
'use client';

import { motion } from 'framer-motion';
import { Heading, Text } from '@/components/ui/Typography';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

interface ContactItem {
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  value: string;
  link?: string;
}

const contactData: ContactItem[] = [
  {
    id: 'location',
    icon: MapPin,
    title: 'Location',
    value: 'Dansoman, Accra'
  },
  {
    id: 'phone',
    icon: Phone,
    title: 'Phone',
    value: '+233 240 298 910',
    link: 'tel:+233240298910'
  },
  {
    id: 'email',
    icon: Mail,
    title: 'Email',
    value: 'albertnartey824@gmail.com',
    link: 'mailto:albertnartey824@gmail.com'
  },
  {
    id: 'availability',
    icon: CheckCircle,
    title: 'Freelance',
    value: 'Available'
  }
];

export const ContactInfo: React.FC = () => {
  return (
    <section className="contact-info-section">
      <div className="contact-cards-grid">
        {contactData.map((item, index) => (
          <ScrollReveal
            key={item.id}
            direction="up"
            delay={0.2 + index * 0.1}
          >
            <motion.div
              className="contact-card"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="contact-icon">
                <item.icon size={32} />
              </div>
              
              <div className="contact-content">
                <Text size="sm" weight="medium" className="contact-title">
                  {item.title}
                </Text>
                {item.link ? (
                  <a href={item.link} className="contact-link">
                    <Text size="base" weight="semibold">
                      {item.value}
                    </Text>
                  </a>
                ) : (
                  <Text size="base" weight="semibold" className="contact-value">
                    {item.value}
                  </Text>
                )}
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};
```

### 6.2 Contact Form Component

```typescript
// components/pages/Contact/ContactForm.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Heading, Text } from '@/components/ui/Typography';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('sending');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      
      setStatus('success');
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="contact-form-section">
      <div className="form-container">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="form-header">
            <Heading as="h2" size="h3" className="form-title">
              How Can I <span className="text-primary">Help You?</span>
            </Heading>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.4}>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <Input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`form-input ${errors.fullName ? 'error' : ''}`}
                  aria-invalid={!!errors.fullName}
                />
                {errors.fullName && (
                  <Text size="sm" className="error-message">
                    {errors.fullName}
                  </Text>
                )}
              </div>

              <div className="form-group">
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <Text size="sm" className="error-message">
                    {errors.email}
                  </Text>
                )}
              </div>
            </div>

            <div className="form-group">
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className={`form-input ${errors.subject ? 'error' : ''}`}
                aria-invalid={!!errors.subject}
              />
              {errors.subject && (
                <Text size="sm" className="error-message">
                  {errors.subject}
                </Text>
              )}
            </div>

            <div className="form-group">
              <Textarea
                name="message"
                placeholder="Message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className={`form-textarea ${errors.message ? 'error' : ''}`}
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <Text size="sm" className="error-message">
                  {errors.message}
                </Text>
              )}
            </div>

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="status-message success"
              >
                <CheckCircle size={20} />
                <Text size="sm">Message sent successfully! I'll get back to you soon.</Text>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="status-message error"
              >
                <AlertCircle size={20} />
                <Text size="sm">Failed to send message. Please try again.</Text>
              </motion.div>
            )}

            <Button
              type="submit"
              className="submit-button"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="loading-spinner"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} className="mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};
```

### 6.3 Map Integration Component

```typescript
// components/pages/Contact/MapSection.tsx
'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export const MapSection: React.FC = () => {
  return (
    <section className="map-section">
      <ScrollReveal direction="up" delay={0.2}>
        <div className="map-container">
          <motion.div
            className="map-wrapper"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.736401186979!2d-0.23664268568423!3d5.605975733176235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a7a2d9b5555%3A0x5a7e8f5b8a7c1234!2sDansoman%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Albert Nartey Location - Dansoman, Accra"
              className="location-map"
            />
            
            <div className="map-overlay">
              <div className="location-badge">
                <span className="location-text">📍 Dansoman, Accra</span>
              </div>
            </div>
          </motion.div>
        </div>
      </ScrollReveal>
    </section>
  );
};
```

### 6.4 Contact Page Styles

```css
/* styles/pages/contact.css */
.contact-page {
  padding: var(--space-16) 0;
}

.contact-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.page-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  margin-bottom: var(--space-4);
}

/* Contact Info Cards */
.contact-info-section {
  margin-bottom: var(--space-16);
}

.contact-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-6);
  max-width: 1000px;
  margin: 0 auto;
}

.contact-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: var(--space-6);
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.contact-card:hover {
  border-color: rgba(255, 215, 0, 0.3);
  background: rgba(255, 215, 0, 0.03);
  box-shadow: 0 8px 32px rgba(255, 215, 0, 0.15);
}

.contact-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #FFD700, #FFA500);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-4);
  color: #0A0A0A;
}

.contact-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.contact-title {
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.contact-value {
  color: #FFFFFF;
}

.contact-link {
  text-decoration: none;
  color: #FFD700;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #FFA500;
}

/* Contact Form */
.contact-form-section {
  margin-bottom: var(--space-16);
}

.form-container {
  max-width: 800px;
  margin: 0 auto;
}

.form-header {
  text-align: center;
  margin-bottom: var(--space-8);
}

.form-title {
  font-size: 2rem;
  font-weight: 700;
  color: #FFFFFF;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.form-input,
.form-textarea {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: var(--space-4);
  color: #FFFFFF;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: var(--font-montserrat);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #FFD700;
  background: rgba(255, 215, 0, 0.05);
  box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.1);
}

.form-input.error,
.form-textarea.error {
  border-color: #EF4444;
  background: rgba(239, 68, 68, 0.05);
}

.error-message {
  color: #EF4444;
  font-size: 0.875rem;
}

.status-message {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4);
  border-radius: 8px;
  font-size: 0.875rem;
}

.status-message.success {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: #10B981;
}

.status-message.error {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #EF4444;
}

.submit-button {
  background: linear-gradient(135deg, #FFD700, #FFA500);
  border: none;
  color: #0A0A0A;
  font-weight: 600;
  padding: var(--space-4) var(--space-8);
  font-size: 1.1rem;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  align-self: flex-start;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.4);
  filter: brightness(1.1);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.loading-spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(10, 10, 10, 0.3);
  border-top: 2px solid #0A0A0A;
  border-radius: 50%;
}

/* Map Section */
.map-section {
  margin-bottom: var(--space-8);
}

.map-container {
  max-width: 1000px;
  margin: 0 auto;
}

.map-wrapper {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.location-map {
  width: 100%;
  height: 400px;
  filter: grayscale(30%) contrast(1.1);
}

.map-overlay {
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  pointer-events: none;
}

.location-badge {
  background: rgba(255, 215, 0, 0.95);
  color: #0A0A0A;
  padding: var(--space-3) var(--space-4);
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.875rem;
  backdrop-filter: blur(10px);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .contact-cards-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-4);
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
  
  .contact-card {
    padding: var(--space-4);
  }
  
  .contact-icon {
    width: 60px;
    height: 60px;
    margin-bottom: var(--space-3);
  }
  
  .submit-button {
    width: 100%;
  }
  
  .location-map {
    height: 300px;
  }
}

@media (max-width: 480px) {
  .contact-cards-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## 7. Shared Components Library

### 7.1 ScrollToTop Component

```typescript
// components/common/ScrollToTop/index.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="scroll-to-top"
        >
          <Button
            onClick={scrollToTop}
            className="scroll-button"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
```

### 7.2 Page Loading Component

```typescript
// components/common/PageLoader/index.tsx
'use client';

import { motion } from 'framer-motion';

export const PageLoader: React.FC = () => {
  return (
    <div className="page-loader">
      <div className="loader-content">
        <motion.div
          className="loader-logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="logo-text">AN</span>
        </motion.div>
        
        <motion.div
          className="loader-progress"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
        
        <motion.p
          className="loader-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
};
```

### 7.3 Error Boundary Component

```typescript
// components/common/ErrorBoundary/index.tsx
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Heading, Text } from '@/components/ui/Typography';
import { RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; reset: () => void }>;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return (
        <FallbackComponent
          error={this.state.error}
          reset={() => this.setState({ hasError: false, error: undefined })}
        />
      );
    }

    return this.props.children;
  }
}

const DefaultErrorFallback: React.FC<{ error?: Error; reset: () => void }> = ({
  error,
  reset
}) => {
  return (
    <div className="error-fallback">
      <div className="error-content">
        <Heading as="h1" size="h3" className="error-title">
          Oops! Something went wrong
        </Heading>
        
        <Text size="lg" className="error-description">
          We encountered an unexpected error. Please try refreshing the page or go back to the homepage.
        </Text>
        
        {process.env.NODE_ENV === 'development' && error && (
          <details className="error-details">
            <summary>Error Details (Development Only)</summary>
            <pre className="error-stack">{error.stack}</pre>
          </details>
        )}
        
        <div className="error-actions">
          <Button onClick={reset} className="retry-button">
            <RefreshCw size={18} className="mr-2" />
            Try Again
          </Button>
          
          <Button variant="outline" asChild className="home-button">
            <Link href="/">
              <Home size={18} className="mr-2" />
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
```

---

## 8. Animation and Interaction Patterns

### 8.1 Page Transition System

```typescript
// lib/page-transitions.ts
import { Variants } from 'framer-motion';

export const pageTransitionVariants: Variants = {
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

export const slideVariants: Variants = {
  initial: (direction: 'left' | 'right') => ({
    x: direction === 'left' ? -100 : 100,
    opacity: 0
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: (direction: 'left' | 'right') => ({
    x: direction === 'left' ? 100 : -100,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  })
};
```

### 8.2 Hover Effect Utilities

```typescript
// lib/hover-effects.ts
import { MotionProps } from 'framer-motion';

export const cardHoverEffect: MotionProps = {
  whileHover: {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
  },
  whileTap: {
    scale: 0.98,
    transition: { duration: 0.1 }
  }
};

export const buttonHoverEffect: MotionProps = {
  whileHover: {
    scale: 1.05,
    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
  },
  whileTap: {
    scale: 0.95,
    transition: { duration: 0.1 }
  }
};

export const iconHoverEffect: MotionProps = {
  whileHover: {
    rotate: 360,
    scale: 1.2,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
  }
};
```

---

## 9. Data Management and State

### 9.1 Portfolio Data Structure

```typescript
// data/portfolio.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: 'web' | 'mobile' | 'ui-ux';
  image: string;
  images?: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  completedDate: string;
  client?: string;
  duration?: string;
}

export const portfolioData: Project[] = [
  {
    id: 'moodify-landing',
    title: 'Moodify: Music App Landing Page',
    description: 'A modern music streaming app landing page with interactive elements and smooth animations.',
    longDescription: 'Moodify is a comprehensive music streaming platform landing page designed with modern UI/UX principles. The project features interactive animations, responsive design, and optimized performance. Built with React and Next.js, it showcases the latest web technologies and design trends.',
    category: 'web',
    image: '/images/projects/moodify-main.jpg',
    images: [
      '/images/projects/moodify-hero.jpg',
      '/images/projects/moodify-features.jpg',
      '/images/projects/moodify-mobile.jpg'
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    liveUrl: 'https://moodify-demo.com',
    githubUrl: 'https://github.com/albertnartey/moodify',
    featured: true,
    completedDate: '2024-01-15',
    client: 'Personal Project',
    duration: '3 weeks'
  },
  // Add more projects here...
];

export const getProjectsByCategory = (category: 'all' | 'web' | 'mobile' | 'ui-ux'): Project[] => {
  if (category === 'all') {
    return portfolioData;
  }
  return portfolioData.filter(project => project.category === category);
};

export const getFeaturedProjects = (): Project[] => {
  return portfolioData.filter(project => project.featured);
};

export const getProjectById = (id: string): Project | undefined => {
  return portfolioData.find(project => project.id === id);
};
```

### 9.2 Resume Data Structure

```typescript
// data/resume.ts
export interface Education {
  id: string;
  period: string;
  institution: string;
  degree: string;
  description: string;
  gpa?: string;
  achievements?: string[];
}

export interface Experience {
  id: string;
  period: string;
  company: string;
  position: string;
  description: string;
  achievements: string[];
  technologies?: string[];
}

export interface Skill {
  name: string;
  percentage: number;
  category: 'programming' | 'frameworks' | 'tools' | 'other';
}

export const educationData: Education[] = [
  {
    id: 'university-ghana',
    period: '2017 - 2021',
    institution: 'University of Ghana',
    degree: 'BSc Computer Science',
    description: 'Focused on software development, data structures, algorithms, and web technologies. Participated in various projects, gaining hands-on experience with full-stack development.',
    gpa: '3.7/4.0',
    achievements: [
      'Dean\'s List for 3 consecutive semesters',
      'Led final year project on AI-powered web application',
      'Active member of Computer Science Students Association'
    ]
  },
  {
    id: 'mest-program',
    period: 'Sep 2024 - Nov 2024',
    institution: 'Meltwater Entrepreneurial School of Technology (MEST)',
    degree: 'Web Development',
    description: 'Completed an intensive program focused on web development fundamentals, building responsive applications, and modern JavaScript frameworks.',
    achievements: [
      'Completed 5 full-stack projects',
      'Collaborated with international teams',
      'Mentored junior participants'
    ]
  }
];

export const experienceData: Experience[] = [
  {
    id: 'freelance-current',
    period: '2023 - Present',
    company: 'Freelance',
    position: 'Full-Stack Developer',
    description: 'Working with various clients to build custom web applications and mobile solutions.',
    achievements: [
      'Developed 15+ responsive websites using React and Next.js',
      'Built cross-platform mobile apps with React Native',
      'Implemented cloud-based solutions using AWS and Firebase',
      'Improved client website performance by 40% on average',
      'Maintained 98% client satisfaction rate'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'AWS', 'React Native']
  },
  {
    id: 'techstart-ghana',
    period: '2022 - 2023',
    company: 'TechStart Ghana',
    position: 'Frontend Developer',
    description: 'Focused on creating user-friendly interfaces for web applications in the fintech sector.',
    achievements: [
      'Led frontend development for 3 major projects',
      'Collaborated with design team to implement pixel-perfect UIs',
      'Reduced page load times by 35% through optimization',
      'Mentored 2 junior developers',
      'Implemented comprehensive testing strategies'
    ],
    technologies: ['Vue.js', 'TypeScript', 'Sass', 'Jest', 'Cypress']
  }
];

export const skillsData: Skill[] = [
  // Programming Languages
  { name: 'JavaScript', percentage: 95, category: 'programming' },
  { name: 'TypeScript', percentage: 90, category: 'programming' },
  { name: 'Python', percentage: 70, category: 'programming' },
  { name: 'Java', percentage: 70, category: 'programming' },
  
  // Frameworks
  { name: 'React', percentage: 95, category: 'frameworks' },
  { name: 'Next.js', percentage: 80, category: 'frameworks' },
  { name: 'React Native', percentage: 70, category: 'frameworks' },
  { name: 'Vue.js', percentage: 65, category: 'frameworks' },
  
  // Tools & Other
  { name: 'Node.js', percentage: 85, category: 'tools' },
  { name: 'MongoDB', percentage: 75, category: 'tools' },
  { name: 'PostgreSQL', percentage: 70, category: 'tools' },
  { name: 'AWS', percentage: 65, category: 'tools' },
  { name: 'Git/GitHub', percentage: 90, category: 'tools' },
  { name: 'Docker', percentage: 60, category: 'tools' },
  
  // Other Skills
  { name: 'UI/UX Design', percentage: 85, category: 'other' },
  { name: 'Figma', percentage: 80, category: 'other' },
  { name: 'SEO', percentage: 75, category: 'other' }
];
```

---

## 10. SEO and Meta Configuration

### 10.1 SEO Utility Functions

```typescript
// lib/seo.ts
import { Metadata } from 'next';

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export const generateMetadata = (config: SEOConfig): Metadata => {
  const {
    title,
    description,
    keywords = [],
    image = '/images/og-default.jpg',
    url = 'https://albertnartey.com',
    type = 'website'
  } = config;

  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'Albert Narh Nartey' }],
    creator: 'Albert Narh Nartey',
    publisher: 'Albert Narh Nartey',
    
    openGraph: {
      type,
      title,
      description,
      url,
      siteName: 'Albert Narh Nartey Portfolio',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
      locale: 'en_US',
    },
    
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@albertnartey',
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
  };
};

// Page-specific SEO configurations
export const seoConfigs = {
  home: {
    title: 'Albert Narh Nartey - UI/UX Designer & Software Engineer',
    description: 'Creating intuitive and beautiful digital experiences. UI/UX Designer and Software Engineer specializing in modern web technologies and user-centered design.',
    keywords: ['UI/UX Designer', 'Software Engineer', 'Web Developer', 'React', 'Next.js', 'Ghana', 'Portfolio'],
  },
  
  about: {
    title: 'About Me - Albert Narh Nartey',
    description: 'Learn more about Albert Narh Nartey, a passionate full-stack developer with expertise in web and mobile app development, cloud solutions, and UI/UX design.',
    keywords: ['About Albert Nartey', 'Full-stack Developer', 'Web Development', 'Mobile App Development', 'Cloud Solutions'],
  },
  
  portfolio: {
    title: 'Portfolio - Albert Narh Nartey',
    description: 'Explore my portfolio of web applications, mobile apps, and UI/UX design projects. See how I create user-centered digital solutions.',
    keywords: ['Portfolio', 'Web Projects', 'Mobile Apps', 'UI/UX Design', 'React Projects', 'Next.js'],
  },
  
  resume: {
    title: 'Resume - Albert Narh Nartey',
    description: 'View Albert Narh Nartey\'s professional resume including education, experience, and technical skills in software development and design.',
    keywords: ['Resume', 'CV', 'Experience', 'Education', 'Skills', 'Software Engineer', 'UI/UX Designer'],
  },
  
  contact: {
    title: 'Contact - Albert Narh Nartey',
    description: 'Get in touch with Albert Narh Nartey for web development, mobile app development, or UI/UX design projects. Let\'s create something amazing together.',
    keywords: ['Contact', 'Hire', 'Freelance', 'Web Development Services', 'UI/UX Design Services'],
  },
};

// Structured Data
export const generatePersonSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Albert Narh Nartey',
    jobTitle: 'UI/UX Designer & Software Engineer',
    description: 'UI/UX Designer and Software Engineer specializing in modern web technologies',
    url: 'https://albertnartey.com',
    image: 'https://albertnartey.com/images/profile-photo.jpg',
    email: 'albertnartey824@gmail.com',
    telephone: '+233240298910',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dansoman',
      addressRegion: 'Accra',
      addressCountry: 'Ghana'
    },
    sameAs: [
      'https://linkedin.com/in/albertnartey',
      'https://github.com/albertnartey',
      'https://twitter.com/albertnartey'
    ],
    knowsAbout: [
      'Web Development',
      'Mobile App Development',
      'UI/UX Design',
      'React',
      'Next.js',
      'JavaScript',
      'TypeScript'
    ]
  };
};
```

### 10.2 Sitemap Generation

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://albertnartey.com';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}
```

---

## 11. Testing Strategy

### 11.1 Component Testing Framework

```typescript
// __tests__/setup/test-utils.tsx
import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { MotionConfig } from 'framer-motion';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="dark">
      <MotionConfig reducedMotion="always">
        {children}
      </MotionConfig>
    </ThemeProvider>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
```

### 11.2 Page Component Tests

```typescript
// __tests__/pages/HomePage.test.tsx
import { render, screen } from '../setup/test-utils';
import HomePage from '@/app/(main)/page';

describe('HomePage', () => {
  it('renders hero section with correct content', () => {
    render(<HomePage />);
    
    expect(screen.getByRole('heading', { name: /albert narh nartey/i })).toBeInTheDocument();
    expect(screen.getByText(/ui\/ux designer/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /get in touch/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /download cv/i })).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<HomePage />);
    
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    
    const buttons = screen.getAllByRole('link');
    buttons.forEach(button => {
      expect(button).toHaveAttribute('href');
    });
  });
});
```

### 11.3 Integration Tests

```typescript
// __tests__/integration/ContactForm.test.tsx
import { render, screen, fireEvent, waitFor } from '../setup/test-utils';
import { ContactForm } from '@/components/pages/Contact/ContactForm';

describe('ContactForm Integration', () => {
  it('validates form fields and shows errors', async () => {
    render(<ContactForm />);
    
    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/full name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/subject is required/i)).toBeInTheDocument();
      expect(screen.getByText(/message is required/i)).toBeInTheDocument();
    });
  });

  it('submits form with valid data', async () => {
    render(<ContactForm />);
    
    fireEvent.change(screen.getByPlaceholderText(/full name/i), {
      target: { value: 'John Doe' }
    });
    fireEvent.change(screen.getByPlaceholderText(/email address/i), {
      target: { value: 'john@example.com' }
    });
    fireEvent.change(screen.getByPlaceholderText(/subject/i), {
      target: { value: 'Test Subject' }
    });
    fireEvent.change(screen.getByPlaceholderText(/message/i), {
      target: { value: 'This is a test message with enough characters.' }
    });
    
    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/sending/i)).toBeInTheDocument();
    });
  });
});
```

---

## 12. Performance Optimization

### 12.1 Image Optimization Configuration

```typescript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['albertnartey.com'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Enable compression
  compress: true,
  
  // PWA Configuration
  experimental: {
    appDir: true,
  },
  
  // Bundle analyzer
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (process.env.ANALYZE === 'true') {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
        })
      );
    }
    
    return config;
  },
};

module.exports = nextConfig;
```

### 12.2 Code Splitting and Lazy Loading

```typescript
// components/LazyComponents.tsx
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

// Lazy load heavy components
export const LazyPortfolioGrid = dynamic(
  () => import('@/components/pages/Portfolio/PortfolioGrid').then(mod => ({ default: mod.PortfolioGrid })),
  {
    loading: () => <div className="loading-skeleton">Loading portfolio...</div>,
    ssr: false
  }
);

export const LazyContactForm = dynamic(
  () => import('@/components/pages/Contact/ContactForm').then(mod => ({ default: mod.ContactForm })),
  {
    loading: () => <div className="loading-skeleton">Loading contact form...</div>
  }
);

export const LazyMapSection = dynamic(
  () => import('@/components/pages/Contact/MapSection').then(mod => ({ default: mod.MapSection })),
  {
    loading: () => <div className="loading-skeleton map-skeleton">Loading map...</div>,
    ssr: false
  }
);

// HOC for lazy loading with error boundary
export const withLazyLoading = <T extends object>(
  Component: ComponentType<T>,
  fallback?: ComponentType
) => {
  return dynamic(() => Promise.resolve(Component), {
    loading: fallback || (() => <div className="loading-skeleton">Loading...</div>)
  });
};
```

### 12.3 Performance Monitoring

```typescript
// lib/performance.ts
export const trackWebVitals = (metric: any) => {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vitals:', metric);
  }
  
  // Send to analytics in production
  if (process.env.NODE_ENV === 'production') {
    // Example: Send to Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', metric.name, {
        event_category: 'Web Vitals',
        value: Math.round(metric.value),
        event_label: metric.id,
        non_interaction: true,
      });
    }
  }
};

// Performance budget warnings
export const checkPerformanceBudget = () => {
  if (typeof window !== 'undefined') {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    const metrics = {
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
      firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
    };
    
    // Warn if metrics exceed budget
    if (metrics.domContentLoaded > 1500) {
      console.warn('DOM Content Loaded exceeds budget: ', metrics.domContentLoaded);
    }
    
    if (metrics.firstContentfulPaint > 2000) {
      console.warn('First Contentful Paint exceeds budget: ', metrics.firstContentfulPaint);
    }
    
    return metrics;
  }
};
```

---

## Implementation Timeline and Success Criteria

### Phase 2 Implementation Schedule

**Week 1: Home and About Pages**
- Day 1-2: Home page hero section and animations
- Day 3-4: About page content and services section
- Day 5: Testing and responsive optimization

**Week 2: Portfolio and Resume Pages**
- Day 1-3: Portfolio grid, filtering, and project cards
- Day 4-5: Resume timeline, skills, and experience sections

**Week 3: Contact Page and Integration**
- Day 1-2: Contact form with validation
- Day 3: Map integration and contact info cards
- Day 4-5: Form submission handling and testing

**Week 4: Polish and Optimization**
- Day 1-2: Performance optimization and code splitting
- Day 3: SEO implementation and meta tags
- Day 4-5: Final testing, accessibility audit, and deployment

### Success Criteria

**Functionality:**
- [ ] All 5 pages render correctly on all devices
- [ ] Navigation works seamlessly between pages
- [ ] Contact form validates and submits properly
- [ ] Portfolio filter system works correctly
- [ ] All animations are smooth and performant

**Performance:**
- [ ] Lighthouse Performance score > 90
- [ ] First Contentful Paint < 2 seconds
- [ ] Largest Contentful Paint < 3 seconds
- [ ] Cumulative Layout Shift < 0.1

**Accessibility:**
- [ ] Lighthouse Accessibility score > 95
- [ ] All interactive elements are keyboard accessible
- [ ] Screen reader compatibility confirmed
- [ ] Color contrast ratios meet WCAG AA standards

**SEO:**
- [ ] Lighthouse SEO score > 90
- [ ] Meta tags properly configured for all pages
- [ ] Structured data implemented
- [ ] Sitemap generated and submitted

**Browser Compatibility:**
- [ ] Chrome (latest 2 versions)
- [ ] Firefox (latest 2 versions)
- [ ] Safari (latest 2 versions)
- [ ] Edge (latest 2 versions)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

---

This comprehensive Phase 2 implementation document provides everything needed to build all page components and features for the Albert Nartey portfolio website. The modular approach ensures maintainability while the focus on performance and accessibility guarantees a professional, user-friendly experience across all devices and platforms.