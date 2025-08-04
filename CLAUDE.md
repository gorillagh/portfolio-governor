# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Albert Nartey Portfolio** - A modern, high-performance portfolio website built with Next.js 15, featuring dark theme with gold accents, Firebase integration, and comprehensive testing.

- **Tech Stack**: Next.js 15, TypeScript, Tailwind CSS v4.1.0, shadcn/ui, Firebase, Framer Motion
- **Development URL**: http://localhost:3000 (or port 3003 if specified)
- **Design Theme**: Dark background (#121212) with gold accents (#FFC300)
- **Typography**: Ubuntu (headings), Montserrat (body)

## Development Commands

### Core Development
```bash
# Development server (default port 3000)
pnpm dev

# Development with Turbopack for faster builds
pnpm dev --turbopack

# Build for production
pnpm build

# Start production server
pnpm start

# Type checking without emitting files
pnpm type-check

# Linting
pnpm lint
```

### Testing Commands
```bash
# Run all Jest unit tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage report
pnpm test:coverage

# Run tests for CI (no watch, coverage, pass with no tests)
pnpm test:ci

# End-to-end tests with Playwright
pnpm test:e2e

# E2E tests with UI
pnpm test:e2e:ui

# E2E tests with debugging
pnpm test:e2e:debug

# Accessibility tests only
pnpm test:accessibility

# Performance tests only
pnpm test:performance

# Run all tests (unit + e2e + lighthouse)
pnpm test:all
```

### Performance & Quality
```bash
# Lighthouse CI audit
pnpm lighthouse

# Lighthouse collect only
pnpm lighthouse:collect

# Lighthouse assertions only
pnpm lighthouse:assert
```

## Architecture Overview

### App Router Structure (Next.js 15)
```
app/
├── layout.tsx                 # Root layout with fonts and analytics
├── globals.css               # Global styles and Tailwind base
├── (main)/                   # Main route group
│   ├── layout.tsx           # Main layout with sidebar
│   ├── page.tsx             # Homepage
│   ├── about/page.tsx       # About page
│   ├── projects/page.tsx    # Projects gallery
│   ├── skills/page.tsx      # Skills showcase
│   └── contact/page.tsx     # Contact form
└── api/                     # API routes
    ├── contact/route.ts     # Contact form submission
    ├── projects/route.ts    # Projects API
    └── analytics/route.ts   # Analytics tracking
```

### Component Organization
```
components/
├── ui/                      # shadcn/ui base components
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   └── badge.tsx
├── layout/                  # Layout components
│   ├── Sidebar.tsx         # Main navigation sidebar
│   ├── Header.tsx          # Page header
│   └── Footer.tsx          # Page footer
├── sections/               # Page sections
│   ├── HeroSection.tsx     # Homepage hero
│   ├── SkillProgressBar.tsx
│   └── TimelineItem.tsx
├── features/               # Feature components
│   ├── ContactForm.tsx     # Contact form with validation
│   ├── ProjectCard.tsx     # Project display card
│   ├── ProjectFilter.tsx   # Project filtering
│   ├── ScrollToTop.tsx     # Scroll to top button
│   └── TechStack.tsx       # Technology stack display
├── animations/             # Animation components
│   ├── ScrollIndicator.tsx
│   └── TypewriterText.tsx
└── analytics/              # Analytics integration
    └── AnalyticsProvider.tsx
```

### Key Libraries & Utilities
```
lib/
├── utils.ts               # Utility functions and cn() for classnames
├── firebase.ts           # Firebase configuration and initialization
├── accessibility.ts      # Accessibility utilities
├── responsive.ts         # Responsive design utilities
├── performance/          # Performance optimization
├── firebase/            # Firebase services
│   ├── collections.ts   # Firestore collection helpers
│   └── services.ts      # Firebase service functions
└── hooks/               # Custom React hooks
    └── useFirebaseData.ts
```

## Firebase Integration

This project uses Firebase for backend services:

- **Firestore**: Database for projects, skills, testimonials, contact inquiries
- **Storage**: File storage for images and documents
- **Analytics**: User behavior tracking
- **Security Rules**: Public read for portfolio data, admin write access

### Environment Variables Required
```bash
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef123456
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-ABCDEF123

# Email Service (Resend)
RESEND_API_KEY=re_your_api_key
RESEND_FROM_EMAIL=portfolio@yourdomain.com
CONTACT_EMAIL=your@email.com

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://albertnartey.com
NEXT_PUBLIC_SITE_NAME=Albert Nartey Portfolio
```

## Design System

### Color Palette
- **Primary Gold**: #FFC300 (gold-500)
- **Background**: #121212 (dark-900)
- **Card Background**: #212121 (dark-800)
- **Text**: Various shades from foreground/muted-foreground tokens

### Typography
- **Headings**: Ubuntu font family (300, 400, 500, 700)
- **Body**: Montserrat font family (300-900 weights)
- **Font Variables**: `--font-ubuntu`, `--font-montserrat`

### Component Patterns
- All components use **shadcn/ui** as base with custom styling
- **Framer Motion** for animations and transitions
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: WCAG 2.1 AA compliant with ARIA attributes

## Data Management

### Static Data Location
```
constants/
├── layout.ts            # Navigation, social links, profile info
├── projects.ts          # Project portfolio data
└── skills.ts           # Skills and technologies
```

### Firebase Collections
- `projects`: Portfolio projects with live URLs and GitHub links
- `skills`: Technical skills with proficiency levels
- `testimonials`: Client testimonials (approved only for public)
- `contact_inquiries`: Contact form submissions
- `analytics_events`: User interaction tracking

## Testing Strategy

### Unit Tests (Jest + React Testing Library)
- **Location**: `__tests__/` directory
- **Coverage Target**: >80% for components and utilities
- **Setup**: `jest.setup.js` with custom matchers and mocks

### E2E Tests (Playwright)
- **Location**: `e2e/` directory
- **Coverage**: Critical user journeys, accessibility, performance
- **Configuration**: `playwright.config.ts`

### Test Utilities
- **MSW**: Mock Service Worker for API mocking
- **Test Utils**: Custom render functions in `__tests__/utils/test-utils.tsx`
- **Mocks**: Firebase mocks in `__mocks__/firebase.ts`

## Performance Optimization

### Build Configuration
- **Next.js 15** with App Router
- **Image Optimization**: WebP/AVIF formats, responsive sizes
- **Security Headers**: CSP, X-Frame-Options, etc.
- **Bundle Analysis**: Track bundle size and optimize imports

### Performance Targets
- **Lighthouse Performance**: >90
- **Core Web Vitals**: LCP <2.5s, FID <100ms, CLS <0.1
- **Bundle Size**: <500KB gzipped
- **Test Coverage**: >80%

## Development Workflow

### Code Quality
- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js config with Prettier integration
- **Path Aliases**: `@/*` maps to root directory
- **Component Convention**: PascalCase, functional components with TypeScript

### Git Workflow
- **Main Branch**: `master`
- **Commit Convention**: Conventional commits preferred
- **Pre-commit**: Linting and type checking (if configured)

### Responsive Development
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Mobile-First**: Design and develop mobile experience first
- **Layout Context**: `LayoutContext` manages sidebar state and responsive behavior

## Deployment

- **Platform**: Vercel (primary) or Netlify
- **Domain**: Custom domain configuration ready
- **Environment**: Production environment variables required
- **Monitoring**: Analytics, error tracking, performance monitoring

## Key Implementation Notes

1. **Sidebar Navigation**: Collapsible, responsive with mobile overlay
2. **Contact Form**: Server-side validation with Zod, email via Resend
3. **Project Gallery**: Dynamic filtering, modal views, lazy loading
4. **SEO Optimization**: Meta tags, Open Graph, structured data
5. **Accessibility**: Skip links, ARIA labels, keyboard navigation
6. **Dark Theme**: Consistent dark mode with gold accent colors
7. **Animation**: Framer Motion for page transitions and micro-interactions

## Troubleshooting

### Common Issues
- **Firebase Connection**: Check environment variables and network
- **Build Errors**: Run `pnpm type-check` to identify TypeScript issues
- **Test Failures**: Check mock configurations and environment setup
- **Performance**: Use Lighthouse CI for performance regression detection

### Development Tips
- Use `pnpm dev --turbopack` for faster development builds
- Run tests in watch mode during development
- Check console for Firebase connection status
- Use React DevTools for component debugging

## Maintenance

### Regular Tasks
- **Dependencies**: Update monthly with `pnpm update`
- **Security**: Run `pnpm audit` and fix vulnerabilities
- **Performance**: Monitor Core Web Vitals and optimize
- **Content**: Update projects and skills data as needed
- **Tests**: Maintain >80% coverage, update tests for new features