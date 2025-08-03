# Phase 0 Implementation Guide - Albert Nartey Portfolio

## Document Information

- **Project Name**: Albert Nartey Portfolio - Phase 0 Setup
- **Document Version**: 1.0
- **Date**: 2025-08-03
- **Author**: Albert Nartey
- **Status**: Ready for Implementation
- **Environment**: Windows 11
- **Package Manager**: pnpm

---

## 📊 Progress Tracker

### Overall Phase 0 Progress: ⬜ 0% Complete

```
Project Setup      [⬜⬜⬜⬜⬜] 0%  (0/20 tasks completed)
Environment Config [⬜⬜⬜⬜⬜] 0%  (0/15 tasks completed)
Design System      [⬜⬜⬜⬜⬜] 0%  (0/12 tasks completed)
Asset Integration  [⬜⬜⬜⬜⬜] 0%  (0/8 tasks completed)
Initial Deployment [⬜⬜⬜⬜⬜] 0%  (0/10 tasks completed)
```

### 🎯 Phase 0 Milestones

| Milestone | Target Date | Status | Completion |
|-----------|-------------|--------|------------|
| Environment Setup | Day 1 | ⏳ Pending | 0% |
| Project Initialization | Day 1 | ⏳ Pending | 0% |
| Design System Config | Day 1 | ⏳ Pending | 0% |
| Asset Integration | Day 1 | ⏳ Pending | 0% |
| Initial Deployment | Day 1 | ⏳ Pending | 0% |

### ⏱️ Time Tracking

| Section | Estimated | Actual | Variance |
|---------|-----------|--------|----------|
| **Total Phase 0** | **3 hours** | **___ hours** | **___ hours** |
| Environment Setup | 30 min | ___ min | ___ min |
| Project Init | 45 min | ___ min | ___ min |
| Design System | 60 min | ___ min | ___ min |
| Asset Setup | 30 min | ___ min | ___ min |
| Deployment | 45 min | ___ min | ___ min |

### 🚨 Issues & Blockers

| Issue | Priority | Status | Resolution |
|-------|----------|--------|------------|
| _No issues currently_ | - | - | - |

### 📋 Asset Integration Status

| Asset Type | Location | Status | Notes |
|------------|----------|--------|-------|
| Profile Image | `assets/profile.jpg` | ⏳ Pending | For sidebar profile |
| Portfolio Images | `assets/images/portfolio/` | ⏳ Pending | 6 work samples available |
| Client Logos | `assets/images/logos/` | ⏳ Pending | IBM, MEST, others |
| Testimonial Photos | `assets/images/testimonials/` | ⏳ Pending | 3 testimonial images |

---

## Table of Contents

1. [Quick Start Checklist](#1-quick-start-checklist)
2. [Environment Setup](#2-environment-setup)
3. [Project Initialization](#3-project-initialization)
4. [Design System Configuration](#4-design-system-configuration)
5. [Development Tools Setup](#5-development-tools-setup)
6. [Initial Deployment](#6-initial-deployment)
7. [Domain & DNS Configuration](#7-domain--dns-configuration)
8. [Environment Variables](#8-environment-variables)
9. [Project Structure](#9-project-structure)
10. [Basic Components Implementation](#10-basic-components-implementation)
11. [SEO & Meta Tags Setup](#11-seo--meta-tags-setup)
12. [Testing & Validation](#12-testing--validation)
13. [Next Steps](#13-next-steps)

---

## 1. Quick Start Checklist

### Immediate Actions (Complete Today)

#### 1.1 Account Setup (30 minutes) - Progress: 0/5 ⬜⬜⬜⬜⬜
- [ ] **[5min]** Create GitHub repository: `portfolio` *(Priority: Critical)*
- [ ] **[5min]** Sign up for Vercel account (vercel.com) *(Priority: Critical)*
- [ ] **[10min]** Register domain: `albertnartey.com` *(Priority: Critical)*
- [ ] **[5min]** Create Resend account (resend.com) for email functionality *(Priority: High)*
- [ ] **[5min]** Backup email address ready for testing *(Priority: Medium)*

#### 1.2 Development Environment (15 minutes) - Progress: 0/7 ⬜⬜⬜⬜⬜⬜⬜
- [ ] **[2min]** Node.js 18+ installed (check: `node --version`) *(Priority: Critical)*
- [ ] **[3min]** pnpm installed globally (`npm install -g pnpm`) *(Priority: Critical)*
- [ ] **[10min]** VS Code with extensions: *(Priority: High)*
  - [ ] Tailwind CSS IntelliSense
  - [ ] TypeScript Hero  
  - [ ] Prettier - Code formatter
  - [ ] ESLint

#### 1.3 Project Creation (45 minutes) - Progress: 0/8 ⬜⬜⬜⬜⬜⬜⬜⬜
- [ ] **[10min]** Initialize Next.js project with TypeScript *(Priority: Critical)*
- [ ] **[15min]** Configure shadcn/ui components *(Priority: Critical)*
- [ ] **[10min]** Setup Git repository and initial commit *(Priority: Critical)*
- [ ] **[10min]** Deploy to Vercel with domain connection *(Priority: Critical)*
- [ ] **[5min]** Verify deployment and domain access *(Priority: High)*
- [ ] **[5min]** Setup development environment variables *(Priority: High)*
- [ ] **[5min]** Configure asset folders and import profile image *(Priority: Medium)*
- [ ] **[5min]** Test local development server *(Priority: Medium)*

### 📝 Progress Notes
**Section 1.1:** _Add notes about account setup progress here_
**Section 1.2:** _Add notes about environment setup progress here_  
**Section 1.3:** _Add notes about project creation progress here_

---

## 2. Environment Setup

### 2.1 System Requirements

**Windows 11 Environment:**
```bash
# Verify Node.js version (18.17+ required)
node --version

# Install pnpm globally if not already installed
npm install -g pnpm

# Verify pnpm installation
pnpm --version
```

**Required VS Code Extensions:**
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

### 2.2 Git Configuration

```bash
# Configure Git (if not already done)
git config --global user.name "Albert Nartey"
git config --global user.email "your-email@domain.com"
git config --global init.defaultBranch main
```

---

## 3. Project Initialization

### 3.1 Create Next.js Project

**Open Windows Terminal/PowerShell and run:**

```bash
# Navigate to your desktop
cd C:\Users\babyn\OneDrive\Desktop

# Create Next.js project with all required configurations
npx create-next-app@latest portfolio \
  --typescript \
  --tailwind \
  --app \
  --src-dir=false \
  --import-alias="@/*" \
  --use-pnpm

# Navigate to project directory
cd portfolio
```

### 3.2 Initialize shadcn/ui

```bash
# Initialize shadcn/ui with default configuration
pnpm dlx shadcn@latest init -d

# Install priority components for Phase 0
pnpm dlx shadcn@latest add button card form input navigation-menu sheet dialog
```

### 3.3 Install Additional Dependencies

```bash
# Essential packages for Phase 0
pnpm add lucide-react resend @vercel/analytics

# Development dependencies
pnpm add -D @tailwindcss/typography prettier prettier-plugin-tailwindcss eslint-config-prettier
```

### 3.4 Git Repository Setup

```bash
# Initialize git repository
git init
git branch -M main

# Create GitHub repository (replace with your username)
# Go to GitHub.com and create new repository named "portfolio"

# Add remote origin (replace [your-username] with actual username)
git remote add origin https://github.com/[your-username]/portfolio.git

# Initial commit
git add .
git commit -m "Initial project setup with Next.js, TypeScript, and shadcn/ui"
git push -u origin main
```

---

## 4. Design System Configuration

### 4.1 Gold Color Palette Configuration

Update `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#FFD700", // Primary gold
          foreground: "#0A0A0A",
          50: "#FFFEF7",
          100: "#FFFACD",
          200: "#FFF68F",
          300: "#FFE55C",
          400: "#FFD700",
          500: "#FFC107",
          600: "#FFB300",
          700: "#FF8F00",
          800: "#FF6F00",
          900: "#E65100",
        },
        secondary: {
          DEFAULT: "#FFA500", // Accent gold
          foreground: "#0A0A0A",
          50: "#FFF8E1",
          100: "#FFECB3",
          200: "#FFE082",
          300: "#FFD54F",
          400: "#FFCA28",
          500: "#FFA500",
          600: "#FF9800",
          700: "#FF8F00",
          800: "#FF6F00",
          900: "#E65100",
        },
        dark: {
          DEFAULT: "#0A0A0A", // Dark background
          foreground: "#FFD700",
        },
        card: {
          DEFAULT: "#1A1A1A", // Card background
          foreground: "#FFD700",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Fira Code', 'Monaco', 'monospace'],
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config

export default config
```

### 4.2 CSS Variables Setup

Update `app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Merriweather:wght@300;400;700;900&family=Fira+Code:wght@300;400;500;600;700&display=swap');

@layer base {
  :root {
    /* Dark mode as default */
    --background: 10 10 10; /* #0A0A0A */
    --foreground: 51 218 255; /* Gold text */
    --card: 26 26 26; /* #1A1A1A */
    --card-foreground: 51 218 255;
    --popover: 26 26 26;
    --popover-foreground: 51 218 255;
    --primary: 51 218 255; /* #FFD700 */
    --primary-foreground: 10 10 10;
    --secondary: 255 165 0; /* #FFA500 */
    --secondary-foreground: 10 10 10;
    --muted: 38 38 38;
    --muted-foreground: 163 163 163;
    --accent: 38 38 38;
    --accent-foreground: 51 218 255;
    --destructive: 239 68 68;
    --destructive-foreground: 248 250 252;
    --border: 38 38 38;
    --input: 38 38 38;
    --ring: 51 218 255;
    --radius: 0.5rem;
  }

  .light {
    --background: 255 255 255;
    --foreground: 10 10 10;
    --card: 255 255 255;
    --card-foreground: 10 10 10;
    --popover: 255 255 255;
    --popover-foreground: 10 10 10;
    --primary: 51 218 255;
    --primary-foreground: 255 255 255;
    --secondary: 245 245 245;
    --secondary-foreground: 10 10 10;
    --muted: 245 245 245;
    --muted-foreground: 107 114 126;
    --accent: 245 245 245;
    --accent-foreground: 10 10 10;
    --destructive: 239 68 68;
    --destructive-foreground: 248 250 252;
    --border: 229 231 235;
    --input: 229 231 235;
    --ring: 59 130 246;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    @apply dark; /* Default to dark mode */
  }
}

/* Custom scrollbar for dark theme */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
  background: #ffd700;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #ffa500;
}
```

---

## 5. Development Tools Setup

### 5.1 ESLint Configuration

Create `.eslintrc.json`:

```json
{
  "extends": [
    "next/core-web-vitals",
    "prettier"
  ],
  "rules": {
    "prefer-const": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "no-console": "warn"
  }
}
```

### 5.2 Prettier Configuration

Create `.prettierrc`:

```json
{
  "semi": false,
  "trailingComma": "es5",
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false,
  "printWidth": 80,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### 5.3 VS Code Workspace Settings

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

---

## 6. Initial Deployment

### 6.1 Vercel Deployment Setup

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel (opens browser for authentication)
vercel login

# Deploy project (run from project root)
vercel --prod

# Follow the interactive prompts:
# ? Set up and deploy "C:\Users\babyn\OneDrive\Desktop\portfolio"? [Y/n] Y
# ? Which scope do you want to deploy to? [Your Account]
# ? Link to existing project? [y/N] N
# ? What's your project's name? portfolio
# ? In which directory is your code located? ./
```

**Expected Output:**
```
✅  Production: https://portfolio-[random].vercel.app [copied to clipboard] [2s]
📝  Deployed to production. Run `vercel --prod` to overwrite later.
💡  To change the domain or build command, go to https://vercel.com/[username]/portfolio/settings
```

### 6.2 Custom Domain Configuration

In Vercel Dashboard:
1. Go to your project settings
2. Navigate to "Domains" tab
3. Add your domain: `albertnartey.com`
4. Add www subdomain: `www.albertnartey.com`
5. Configure DNS records as instructed by Vercel

---

## 7. Domain & DNS Configuration

### 7.1 DNS Records Setup

Configure these DNS records with your domain registrar:

```
Type    Name    Value                           TTL
A       @       76.76.19.61                     3600
A       www     76.76.19.61                     3600
CNAME   www     cname.vercel-dns.com            3600
```

**Note**: Replace IP addresses with current Vercel IPs from their documentation.

### 7.2 SSL Certificate

Vercel automatically provisions SSL certificates. Verify HTTPS is working:
- https://albertnartey.com
- https://www.albertnartey.com

---

## 8. Environment Variables

### 8.1 Development Environment

Create `.env.local`:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://albertnartey.com
NEXT_PUBLIC_SITE_NAME="Albert Nartey Portfolio"

# Email Configuration (Resend)
RESEND_API_KEY=your_resend_api_key_here
RESEND_FROM_EMAIL=hello@albertnartey.com

# Analytics
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id

# Development
NODE_ENV=development
```

### 8.2 Production Environment Variables

In Vercel Dashboard → Settings → Environment Variables:

```bash
# Production Variables
NEXT_PUBLIC_SITE_URL=https://albertnartey.com
RESEND_API_KEY=[your-production-resend-key]
RESEND_FROM_EMAIL=hello@albertnartey.com
NODE_ENV=production
```

### 8.3 Environment Variables Validation

Create `lib/env.ts`:

```typescript
const requiredEnvVars = {
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
} as const

// Validate environment variables
Object.entries(requiredEnvVars).forEach(([key, value]) => {
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`)
  }
})

export const env = requiredEnvVars
```

---

## 9. Project Structure

### 9.1 Directory Structure

```
portfolio/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── projects/
│   │   ├── page.tsx            # Projects listing
│   │   └── [slug]/
│   │       └── page.tsx        # Individual project
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   └── api/
│       └── contact/
│           └── route.ts        # Contact form API
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── layout/
│   │   ├── header.tsx          # Site header
│   │   ├── footer.tsx          # Site footer
│   │   └── navigation.tsx      # Navigation menu
│   ├── sections/
│   │   ├── hero.tsx            # Hero section
│   │   ├── projects.tsx        # Projects section
│   │   └── testimonials.tsx    # Testimonials
│   └── forms/
│       └── contact-form.tsx    # Contact form
├── lib/
│   ├── utils.ts                # Utility functions
│   ├── env.ts                  # Environment validation
│   └── constants.ts            # App constants
├── public/
│   ├── images/                 # Static images
│   ├── resume.pdf              # Downloadable resume
│   └── favicon.ico             # Site favicon
├── types/
│   └── index.ts                # TypeScript definitions
└── data/
    ├── projects.ts             # Project data
    └── testimonials.ts         # Testimonials data
```

### 9.2 Create Directory Structure

```bash
# Create directory structure
mkdir -p components/{ui,layout,sections,forms}
mkdir -p lib types data public/images
mkdir -p app/{about,projects/{[slug]},contact,api/contact}

# Create empty files to maintain structure
touch types/index.ts
touch data/projects.ts
touch data/testimonials.ts
touch lib/constants.ts
```

---

## 10. Basic Components Implementation

### 10.1 Root Layout

Update `app/layout.tsx`:

```typescript
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
```

### 10.2 Homepage Implementation

Update `app/page.tsx`:

```typescript
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
          Albert Nartey
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Software Architect & AI Consultant
        </p>
        <p className="text-lg text-foreground mb-12 max-w-2xl mx-auto">
          Experienced software architect specializing in React, Next.js, and AI/ML solutions. 
          Delivering scalable, high-performance applications that drive business growth.
        </p>
        
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card 1 */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-primary">E-Commerce Platform</CardTitle>
              <CardDescription>
                Full-stack Next.js application with real-time inventory management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">Next.js</span>
                <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">TypeScript</span>
                <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">Stripe</span>
              </div>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </CardContent>
          </Card>

          {/* Project Card 2 */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-primary">AI Analytics Dashboard</CardTitle>
              <CardDescription>
                Machine learning-powered analytics platform with predictive insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">Python</span>
                <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">TensorFlow</span>
                <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">React</span>
              </div>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </CardContent>
          </Card>

          {/* Project Card 3 */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-primary">Mobile Banking App</CardTitle>
              <CardDescription>
                Secure Flutter application with biometric authentication
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">Flutter</span>
                <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">Firebase</span>
                <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">Dart</span>
              </div>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-card/50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your next project and how I can help you achieve your goals.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">Start a Project</Link>
          </Button>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Albert Nartey. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
```

### 10.3 Contact Form API Route

Create `app/api/contact/route.ts`:

```typescript
import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message, honeypot } = body

    // Basic spam protection
    if (honeypot) {
      return NextResponse.json(
        { error: 'Spam detected' },
        { status: 400 }
      )
    }

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'hello@albertnartey.com',
      to: ['your-email@domain.com'], // Replace with your email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message. I\'ll get back to you soon!' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
```

---

## 11. SEO & Meta Tags Setup

### 11.1 Sitemap Generation

Create `app/sitemap.ts`:

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://albertnartey.com'

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
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
```

### 11.2 Robots.txt

Create `app/robots.ts`:

```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://albertnartey.com/sitemap.xml',
  }
}
```

### 11.3 Favicon and Icons

Add these files to the `public` directory:
- `favicon.ico` (32x32)
- `apple-touch-icon.png` (180x180)
- `icon.png` (512x512)
- `og-image.jpg` (1200x630)
- `twitter-image.jpg` (1200x630)

---

## 12. Testing & Validation

### 12.1 Development Testing

```bash
# Start development server
pnpm dev

# Open in browser
# http://localhost:3000

# Test responsive design at different breakpoints:
# - Mobile: 320px, 375px, 425px
# - Tablet: 768px, 1024px
# - Desktop: 1440px, 1920px
```

### 12.2 Build Testing

```bash
# Test production build
pnpm build
pnpm start

# Check for build errors
# Verify all pages load correctly
# Test contact form functionality
```

### 12.3 Lighthouse Audit

```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit on local development
lighthouse http://localhost:3000 --view

# Run audit on production
lighthouse https://albertnartey.com --view

# Target scores:
# Performance: 90+
# Accessibility: 95+
# Best Practices: 95+
# SEO: 95+
```

### 12.4 Manual Testing Checklist

- [ ] Homepage loads correctly
- [ ] Navigation works on all screen sizes
- [ ] Contact form validates input
- [ ] Contact form sends emails successfully
- [ ] All links work correctly
- [ ] Images load and display properly
- [ ] Typography renders correctly
- [ ] Color contrast meets accessibility standards
- [ ] Site works without JavaScript
- [ ] Meta tags appear correctly in browser

---

## 13. Next Steps

### 13.1 Immediate Tasks (Week 1)

1. **Content Creation**:
   - Write 2-3 project descriptions
   - Update resume for web format
   - Gather project screenshots
   - Create professional headshot

2. **Additional Pages**:
   - Create About page (`app/about/page.tsx`)
   - Create Projects listing page (`app/projects/page.tsx`)
   - Create Contact page (`app/contact/page.tsx`)

3. **Enhanced Components**:
   - Header with navigation
   - Footer with social links
   - Contact form component
   - Project card component

### 13.2 Week 2 Enhancements

1. **Dynamic Content**:
   - Set up project data structure
   - Create individual project pages
   - Add testimonials section

2. **Functionality**:
   - Email form integration
   - Resume download
   - Project filtering

3. **Performance**:
   - Image optimization
   - Bundle size optimization
   - Caching strategies

### 13.3 Week 3-4 Polish

1. **Advanced Features**:
   - Animations with Framer Motion
   - Dark/light mode toggle
   - Advanced SEO optimization

2. **Analytics & Monitoring**:
   - Google Analytics setup
   - Error monitoring
   - Performance tracking

---

## 🖼️ Asset Integration Guide

### Available Assets Overview

Your `assets` folder contains the following resources that will be integrated during Phase 0:

#### Profile Assets
- **Profile Image**: `assets/profile.jpg` - Professional headshot for sidebar
- **Usage**: Sidebar profile section, about page hero

#### Portfolio Work Samples  
- **Location**: `assets/images/portfolio/`
- **Files**: `work1.png` to `work6.png` (6 project images)
- **Usage**: Project gallery, featured projects section

#### Client Logos & Branding
- **Location**: `assets/images/logos/`
- **Available**: IBM, MEST, client logos (PNG/SVG formats)
- **Usage**: Testimonials section, client showcase

#### Testimonial Photos
- **Location**: `assets/images/testimonials/`  
- **Files**: `testimonial-1.jpg` to `testimonial-3.jpg`
- **Usage**: Testimonials carousel, social proof section

### Asset Integration Checklist

#### Phase 0 Asset Tasks - Progress: 0/8 ⬜⬜⬜⬜⬜⬜⬜⬜

- [ ] **[5min]** Create `public/images` folder structure *(Priority: High)*
- [ ] **[10min]** Copy and optimize profile image for web *(Priority: Critical)*
- [ ] **[15min]** Process portfolio images (resize, WebP conversion) *(Priority: High)*
- [ ] **[10min]** Setup client logos with proper naming *(Priority: Medium)*
- [ ] **[10min]** Optimize testimonial photos *(Priority: Medium)*
- [ ] **[5min]** Create image manifest/index file *(Priority: Low)*
- [ ] **[5min]** Test image imports in components *(Priority: High)*
- [ ] **[5min]** Verify image accessibility (alt tags) *(Priority: High)*

### Asset Optimization Commands

```bash
# Create proper folder structure
mkdir -p public/images/{profile,portfolio,logos,testimonials}

# Copy assets from source to public directory
cp assets/profile.jpg public/images/profile/
cp assets/images/portfolio/* public/images/portfolio/
cp assets/images/logos/* public/images/logos/
cp assets/images/testimonials/* public/images/testimonials/

# Install image optimization tools (optional)
pnpm add sharp @next/bundle-analyzer
```

### Asset Configuration

#### Image Component Setup
```typescript
// lib/assets.ts
export const ASSETS = {
  profile: '/images/profile/profile.jpg',
  portfolio: {
    work1: '/images/portfolio/work1.png',
    work2: '/images/portfolio/work2.png',
    work3: '/images/portfolio/work3.png',
    work4: '/images/portfolio/work4.png',
    work5: '/images/portfolio/work5.png',
    work6: '/images/portfolio/work6.png',
  },
  logos: {
    ibm: '/images/logos/ibm.jpeg',
    mest: '/images/logos/mest.png',
    // Add other logos as needed
  },
  testimonials: {
    testimonial1: '/images/testimonials/testimonial-1.jpg',
    testimonial2: '/images/testimonials/testimonial-2.jpg',
    testimonial3: '/images/testimonials/testimonial-3.jpg',
  }
} as const;
```

#### Next.js Image Optimization
```typescript
// next.config.js additions
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}
```

---

## Implementation Commands Summary

**Complete Phase 0 Setup:**

```bash
# 1. Create project
cd C:\Users\babyn\OneDrive\Desktop
npx create-next-app@latest portfolio --typescript --tailwind --app --src-dir=false --import-alias="@/*" --use-pnpm
cd portfolio

# 2. Setup shadcn/ui
pnpm dlx shadcn@latest init -d
pnpm dlx shadcn@latest add button card form input navigation-menu sheet dialog

# 3. Install dependencies
pnpm add lucide-react resend @vercel/analytics
pnpm add -D @tailwindcss/typography prettier prettier-plugin-tailwindcss eslint-config-prettier

# 4. Setup Git
git init
git branch -M main
git remote add origin https://github.com/[your-username]/portfolio.git

# 5. Initial commit and deploy
git add .
git commit -m "Initial project setup with Next.js, TypeScript, and shadcn/ui"
git push -u origin main

# 6. Deploy to Vercel
npm install -g vercel
vercel login
vercel --prod

# 7. Start development
pnpm dev
```

---

**Document Status**: Ready for Implementation  
**Next Action**: Run the implementation commands above to set up your Phase 0 portfolio foundation.

This comprehensive setup provides a solid foundation for your portfolio with modern tooling, proper SEO, and a scalable architecture. The gold color theme and dark mode default are configured, and you're ready to begin development immediately.