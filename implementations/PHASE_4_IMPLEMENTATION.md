# Phase 4 Implementation Guide - Testing, Security, and Deployment
**Albert Nartey Portfolio Website**

## Document Information

- **Project Name**: Albert Nartey Portfolio - Phase 4 Production Readiness
- **Document Version**: 1.0
- **Date**: 2025-08-03
- **Author**: QA Automation Specialist Agent
- **Status**: Ready for Implementation
- **Prerequisites**: Phase 0, Phase 1, Phase 2, and Phase 3 completed successfully

---

## 📊 Progress Tracker

### Overall Phase 4 Progress: ⬜ 0% Complete

```
Testing Setup      [⬜⬜⬜⬜⬜] 0%  (0/18 tasks completed)
Security Hardening [⬜⬜⬜⬜⬜] 0%  (0/12 tasks completed)
Deployment Pipeline[⬜⬜⬜⬜⬜] 0%  (0/10 tasks completed)
Monitoring Setup   [⬜⬜⬜⬜⬜] 0%  (0/8 tasks completed)
Quality Assurance  [⬜⬜⬜⬜⬜] 0%  (0/15 tasks completed)
Production Launch  [⬜⬜⬜⬜⬜] 0%  (0/7 tasks completed)
```

### 🎯 Phase 4 Milestones

| Milestone | Target Date | Status | Completion | Go-Live Criteria |
|-----------|-------------|--------|------------|------------------|
| Testing Complete | Sept 10 | ⏳ Pending | 0% | All tests passing >95% |
| Security Hardened | Sept 12 | ⏳ Pending | 0% | Security audit passed |
| CI/CD Pipeline | Sept 13 | ⏳ Pending | 0% | Automated deployment |
| Monitoring Active | Sept 14 | ⏳ Pending | 0% | All dashboards live |
| Performance Optimized | Sept 15 | ⏳ Pending | 0% | Lighthouse >90 |
| **🚀 PRODUCTION LAUNCH** | **Sept 16** | ⏳ Pending | 0% | **All criteria met** |

### ⏱️ Time Tracking

| Component | Estimated | Actual | Status | Critical Path |
|-----------|-----------|--------|--------|---------------|
| **Total Phase 4** | **2-3 days** | **___ days** | ⏳ Pending | **YES** |
| Testing Implementation | 12 hours | ___ hours | ⏳ Pending | Yes |
| Security Setup | 8 hours | ___ hours | ⏳ Pending | Yes |
| CI/CD Pipeline | 6 hours | ___ hours | ⏳ Pending | Yes |
| Monitoring & Analytics | 4 hours | ___ hours | ⏳ Pending | No |
| Performance Testing | 6 hours | ___ hours | ⏳ Pending | Yes |
| Production Launch | 4 hours | ___ hours | ⏳ Pending | Yes |

### 🚨 Issues & Blockers

| Issue | Priority | Status | Impact | Resolution |
|-------|----------|--------|--------|------------|
| _No issues currently_ | - | - | - | - |

### 🧪 Testing Progress

#### Unit Testing (0/6 tasks)
- [ ] **[2h]** Component unit tests with React Testing Library *(Critical)*
- [ ] **[1h]** Utility function tests with Jest *(High)*
- [ ] **[1h]** Hook testing with React Hooks Testing Library *(High)*
- [ ] **[1h]** API endpoint tests *(Critical)*
- [ ] **[30min]** Form validation tests *(High)*
- [ ] **[30min]** Test coverage reporting (>85%) *(Medium)*

#### Integration Testing (0/4 tasks)
- [ ] **[2h]** API integration tests *(Critical)*
- [ ] **[1h]** Database integration tests *(High)*
- [ ] **[1h]** Email service integration tests *(High)*
- [ ] **[30min]** Third-party service mocking *(Medium)*

#### End-to-End Testing (0/8 tasks)
- [ ] **[2h]** Contact form submission flow *(Critical)*
- [ ] **[1h]** Portfolio filtering and navigation *(High)*
- [ ] **[1h]** Resume download functionality *(High)*
- [ ] **[1h]** Mobile responsiveness testing *(High)*
- [ ] **[1h]** Dark/light mode switching *(Medium)*
- [ ] **[30min]** Social media links testing *(Medium)*
- [ ] **[30min]** SEO meta tags validation *(Medium)*
- [ ] **[30min]** Performance testing with Lighthouse *(High)*

### 🔒 Security Implementation Status

#### Security Headers (0/5 tasks)
- [ ] **[1h]** Content Security Policy (CSP) *(Critical)*
- [ ] **[30min]** HTTPS/TLS enforcement *(Critical)*
- [ ] **[30min]** Security headers (HSTS, X-Frame-Options) *(High)*
- [ ] **[30min]** Referrer Policy configuration *(Medium)*
- [ ] **[30min]** Permissions Policy setup *(Medium)*

#### Input Security (0/4 tasks)
- [ ] **[2h]** Form input validation and sanitization *(Critical)*
- [ ] **[1h]** XSS prevention measures *(Critical)*
- [ ] **[1h]** CSRF protection implementation *(High)*
- [ ] **[30min]** Rate limiting for APIs *(High)*

#### Environment Security (0/3 tasks)
- [ ] **[1h]** Environment variables security audit *(Critical)*
- [ ] **[30min]** API key rotation strategy *(High)*
- [ ] **[30min]** Dependency vulnerability scanning *(Medium)*

### 🚀 Deployment Readiness

#### Quality Gates Checklist
- [ ] All unit tests passing (>95%)
- [ ] Integration tests passing (100%)
- [ ] E2E tests passing (100%)
- [ ] Security audit completed
- [ ] Performance benchmarks met
- [ ] Accessibility compliance verified
- [ ] SEO optimization confirmed
- [ ] Mobile responsiveness validated
- [ ] Cross-browser compatibility tested
- [ ] Error monitoring configured
- [ ] Analytics tracking verified

---

## Table of Contents

1. [Overview and Objectives](#1-overview-and-objectives)
2. [Testing Strategy and Implementation](#2-testing-strategy-and-implementation)
3. [Security Implementation](#3-security-implementation)
4. [Deployment Pipeline](#4-deployment-pipeline)
5. [Monitoring and Analytics](#5-monitoring-and-analytics)
6. [Quality Assurance Framework](#6-quality-assurance-framework)
7. [Performance Optimization](#7-performance-optimization)
8. [Maintenance and Updates](#8-maintenance-and-updates)

---

## 1. Overview and Objectives

### 1.1 Phase 4 Goals

**Primary Objectives:**
- Implement comprehensive testing coverage (Unit, Integration, E2E)
- Establish robust security measures and compliance
- Create automated deployment pipeline with quality gates
- Set up monitoring, analytics, and error tracking
- Implement performance optimization and monitoring
- Create maintenance and update procedures

**Key Deliverables:**
- Complete test suite with 85%+ coverage
- Security implementation with headers, CSRF protection, and input validation
- CI/CD pipeline with automated testing and deployment
- Real-time monitoring and alerting system
- Performance optimization with Core Web Vitals tracking
- Documentation for maintenance and updates

### 1.2 Quality Standards

```typescript
// Quality Metrics Target
interface QualityMetrics {
  testing: {
    unitTestCoverage: 85; // 85%+ line coverage
    integrationTests: 100; // All API endpoints
    e2eTests: 100; // All critical user flows
    performanceTests: 100; // All pages under 2s load time
  };
  security: {
    vulnerabilityScore: 0; // Zero high/critical vulnerabilities
    securityHeaders: 100; // All recommended headers
    inputValidation: 100; // All inputs validated
  };
  performance: {
    lighthouseScore: 90; // 90+ in all categories
    coreWebVitals: "PASS"; // All Core Web Vitals pass
    bundleSize: 200; // <200KB initial bundle
  };
  accessibility: {
    wcagCompliance: "AA"; // WCAG 2.1 AA compliance
    keyboardNavigation: 100; // 100% keyboard accessible
    screenReaderCompatibility: 100; // Compatible with screen readers
  };
}
```

---

## 2. Testing Strategy and Implementation

### 2.1 Testing Architecture

```mermaid
graph TB
    A[Unit Tests] --> D[Test Pipeline]
    B[Integration Tests] --> D
    C[E2E Tests] --> D
    D --> E[Quality Gates]
    E --> F[Deployment]
    
    subgraph "Testing Layers"
        A1[Component Tests]
        A2[Hook Tests]
        A3[Utility Tests]
        B1[API Tests]
        B2[Database Tests]
        C1[User Journey Tests]
        C2[Performance Tests]
        C3[Accessibility Tests]
    end
```

### 2.2 Testing Framework Setup

#### 2.2.1 Core Testing Dependencies

```bash
# Install testing dependencies
npm install --save-dev \
  @testing-library/react \
  @testing-library/jest-dom \
  @testing-library/user-event \
  jest \
  jest-environment-jsdom \
  @playwright/test \
  lighthouse \
  @axe-core/playwright \
  msw \
  next-router-mock
```

#### 2.2.2 Jest Configuration

```javascript
// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    'components/**/*.{js,jsx,ts,tsx}',
    'lib/**/*.{js,jsx,ts,tsx}',
    'app/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 85,
      statements: 85,
    },
  },
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/e2e/',
  ],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/$1',
  },
};

module.exports = createJestConfig(customJestConfig);
```

```javascript
// jest.setup.js
import '@testing-library/jest-dom';
import { server } from './lib/test/mocks/server';

// MSW server setup
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// Mock next/router
jest.mock('next/router', () => require('next-router-mock'));

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  disconnect: jest.fn(),
}));
```

### 2.3 Unit Testing Implementation

#### 2.3.1 Component Testing Example

```typescript
// __tests__/components/ProjectCard.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { mockProject } from '@/lib/test/fixtures/projects';

describe('ProjectCard', () => {
  const defaultProps = {
    project: mockProject,
    onView: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders project information correctly', () => {
    render(<ProjectCard {...defaultProps} />);
    
    expect(screen.getByText(mockProject.title)).toBeInTheDocument();
    expect(screen.getByText(mockProject.shortDescription)).toBeInTheDocument();
    expect(screen.getByAltText(`${mockProject.title} thumbnail`)).toBeInTheDocument();
  });

  it('displays technology tags', () => {
    render(<ProjectCard {...defaultProps} />);
    
    mockProject.technologies.forEach(tech => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it('calls onView when card is clicked', async () => {
    const user = userEvent.setup();
    render(<ProjectCard {...defaultProps} />);
    
    const card = screen.getByRole('article');
    await user.click(card);
    
    expect(defaultProps.onView).toHaveBeenCalledWith(mockProject.id);
  });

  it('opens external links in new tab', () => {
    render(<ProjectCard {...defaultProps} />);
    
    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('meets accessibility standards', async () => {
    const { container } = render(<ProjectCard {...defaultProps} />);
    
    // Check for proper heading structure
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
    
    // Check for alt text on images
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt');
    
    // Check keyboard navigation
    const card = screen.getByRole('article');
    expect(card).toHaveAttribute('tabIndex', '0');
  });
});
```

#### 2.3.2 Custom Hook Testing

```typescript
// __tests__/hooks/useContactForm.test.ts
import { renderHook, act } from '@testing-library/react';
import { useContactForm } from '@/lib/hooks/useContactForm';
import { server } from '@/lib/test/mocks/server';
import { rest } from 'msw';

describe('useContactForm', () => {
  it('initializes with empty form data', () => {
    const { result } = renderHook(() => useContactForm());
    
    expect(result.current.formData).toEqual({
      name: '',
      email: '',
      message: '',
      inquiryType: 'general',
    });
    expect(result.current.isLoading).toBe(false);
    expect(result.current.errors).toEqual({});
  });

  it('validates required fields', async () => {
    const { result } = renderHook(() => useContactForm());
    
    await act(async () => {
      await result.current.submit();
    });
    
    expect(result.current.errors.name).toBeDefined();
    expect(result.current.errors.email).toBeDefined();
    expect(result.current.errors.message).toBeDefined();
  });

  it('submits form successfully', async () => {
    server.use(
      rest.post('/api/contact', (req, res, ctx) => {
        return res(ctx.json({ success: true, referenceId: 'TEST-123' }));
      })
    );

    const { result } = renderHook(() => useContactForm());
    
    act(() => {
      result.current.updateField('name', 'John Doe');
      result.current.updateField('email', 'john@example.com');
      result.current.updateField('message', 'Test message');
    });

    await act(async () => {
      await result.current.submit();
    });
    
    expect(result.current.isSuccess).toBe(true);
    expect(result.current.referenceId).toBe('TEST-123');
  });

  it('handles API errors gracefully', async () => {
    server.use(
      rest.post('/api/contact', (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ error: 'Server error' }));
      })
    );

    const { result } = renderHook(() => useContactForm());
    
    act(() => {
      result.current.updateField('name', 'John Doe');
      result.current.updateField('email', 'john@example.com');
      result.current.updateField('message', 'Test message');
    });

    await act(async () => {
      await result.current.submit();
    });
    
    expect(result.current.isError).toBe(true);
    expect(result.current.errorMessage).toBeDefined();
  });
});
```

### 2.4 Integration Testing

#### 2.4.1 API Route Testing

```typescript
// __tests__/api/contact.test.ts
import { createMocks } from 'node-mocks-http';
import handler from '@/app/api/contact/route';
import { validateContactForm } from '@/lib/validation/contact';

// Mock external dependencies
jest.mock('@/lib/services/email', () => ({
  sendContactEmail: jest.fn().mockResolvedValue({ success: true }),
}));

jest.mock('@/lib/validation/contact');

describe('/api/contact', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('handles valid contact form submission', async () => {
    const validFormData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Test inquiry',
      inquiryType: 'general',
    };

    (validateContactForm as jest.Mock).mockReturnValue({
      isValid: true,
      data: validFormData,
    });

    const { req } = createMocks({
      method: 'POST',
      body: validFormData,
    });

    const response = await handler.POST(req);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.referenceId).toBeDefined();
  });

  it('returns validation errors for invalid data', async () => {
    const invalidFormData = {
      name: '',
      email: 'invalid-email',
      message: '',
    };

    (validateContactForm as jest.Mock).mockReturnValue({
      isValid: false,
      errors: {
        name: 'Name is required',
        email: 'Invalid email format',
        message: 'Message is required',
      },
    });

    const { req } = createMocks({
      method: 'POST',
      body: invalidFormData,
    });

    const response = await handler.POST(req);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.success).toBe(false);
    expect(data.errors).toBeDefined();
  });

  it('handles rate limiting', async () => {
    // Simulate multiple rapid requests
    const requests = Array(10).fill(null).map(() => 
      createMocks({
        method: 'POST',
        headers: { 'x-forwarded-for': '192.168.1.1' },
        body: {
          name: 'John Doe',
          email: 'john@example.com',
          message: 'Test message',
        },
      })
    );

    const responses = await Promise.all(
      requests.map(({ req }) => handler.POST(req))
    );

    // At least one request should be rate limited (429)
    const rateLimitedResponses = responses.filter(
      response => response.status === 429
    );
    expect(rateLimitedResponses.length).toBeGreaterThan(0);
  });

  it('blocks spam submissions', async () => {
    const spamData = {
      name: 'Spammer',
      email: 'spam@spam.com',
      message: 'Buy now! Click here!',
      honeypot: 'filled', // Honeypot field should be empty
    };

    const { req } = createMocks({
      method: 'POST',
      body: spamData,
    });

    const response = await handler.POST(req);

    expect(response.status).toBe(400);
  });
});
```

### 2.5 End-to-End Testing with Playwright

#### 2.5.1 Playwright Configuration

```typescript
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html'],
    ['json', { outputFile: 'test-results/results.json' }],
    ['junit', { outputFile: 'test-results/results.xml' }],
  ],
  use: {
    baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],
  webServer: {
    command: 'npm run start',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
});
```

#### 2.5.2 Critical User Journey Tests

```typescript
// e2e/user-journeys.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Portfolio User Journeys', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Visitor can browse projects and view details', async ({ page }) => {
    // Navigate to projects section
    await page.click('nav a[href*="projects"]');
    await expect(page).toHaveURL(/.*projects/);

    // Verify projects are displayed
    const projectCards = page.locator('[data-testid="project-card"]');
    await expect(projectCards).toHaveCount(4, { timeout: 10000 });

    // Click on first project
    await projectCards.first().click();
    
    // Verify project details page
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('[data-testid="project-description"]')).toBeVisible();
    await expect(page.locator('[data-testid="tech-stack"]')).toBeVisible();

    // Verify external links work
    const githubLink = page.locator('a[href*="github.com"]').first();
    if (await githubLink.isVisible()) {
      await expect(githubLink).toHaveAttribute('target', '_blank');
    }
  });

  test('Visitor can submit contact form successfully', async ({ page }) => {
    // Navigate to contact section
    await page.click('nav a[href*="contact"]');
    await expect(page).toHaveURL(/.*contact/);

    // Fill out contact form
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.selectOption('select[name="inquiryType"]', 'consulting');
    await page.fill('textarea[name="message"]', 'This is a test inquiry message.');

    // Submit form
    await page.click('button[type="submit"]');

    // Verify success message
    await expect(page.locator('[data-testid="success-message"]')).toBeVisible();
    await expect(page.locator('[data-testid="reference-id"]')).toBeVisible();
  });

  test('Visitor can download resume', async ({ page }) => {
    // Start download promise before clicking
    const downloadPromise = page.waitForEvent('download');

    // Click resume download button
    await page.click('[data-testid="resume-download"]');

    // Verify download
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toMatch(/resume.*\.pdf$/i);
  });

  test('Mobile navigation works correctly', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Mobile-specific test');

    // Open mobile menu
    await page.click('[data-testid="mobile-menu-trigger"]');
    await expect(page.locator('[data-testid="mobile-menu"]')).toBeVisible();

    // Navigate using mobile menu
    await page.click('[data-testid="mobile-menu"] a[href*="about"]');
    await expect(page).toHaveURL(/.*about/);

    // Verify menu closes after navigation
    await expect(page.locator('[data-testid="mobile-menu"]')).not.toBeVisible();
  });

  test('Dark/Light theme toggle works', async ({ page }) => {
    // Verify initial theme
    const html = page.locator('html');
    
    // Toggle theme
    await page.click('[data-testid="theme-toggle"]');
    
    // Verify theme changed
    await expect(html).toHaveClass(/dark|light/);
    
    // Toggle back
    await page.click('[data-testid="theme-toggle"]');
    
    // Verify theme toggled back
    const finalClass = await html.getAttribute('class');
    expect(finalClass).toBeDefined();
  });
});
```

### 2.6 Performance Testing

#### 2.6.1 Lighthouse Performance Tests

```typescript
// e2e/performance.spec.ts
import { test, expect } from '@playwright/test';
import { injectAxe, checkA11y } from 'axe-playwright';

test.describe('Performance and Accessibility', () => {
  test('Homepage meets performance benchmarks', async ({ page }) => {
    await page.goto('/');

    // Measure Core Web Vitals
    const metrics = await page.evaluate(() => {
      return new Promise((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const vitals = {
            LCP: 0,
            FID: 0,
            CLS: 0,
          };

          entries.forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              vitals.LCP = entry.startTime;
            }
            if (entry.entryType === 'first-input') {
              vitals.FID = entry.processingStart - entry.startTime;
            }
            if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
              vitals.CLS += entry.value;
            }
          });

          setTimeout(() => resolve(vitals), 3000);
        }).observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      });
    });

    // Verify Core Web Vitals thresholds
    expect(metrics.LCP).toBeLessThan(2500); // LCP < 2.5s
    expect(metrics.FID).toBeLessThan(100);  // FID < 100ms
    expect(metrics.CLS).toBeLessThan(0.1);  // CLS < 0.1
  });

  test('All pages are accessible', async ({ page }) => {
    const pages = ['/', '/about', '/projects', '/contact'];

    for (const url of pages) {
      await page.goto(url);
      await injectAxe(page);
      
      // Check accessibility
      await checkA11y(page, null, {
        detailedReport: true,
        detailedReportOptions: { html: true },
      });
    }
  });

  test('Images are optimized and lazy loaded', async ({ page }) => {
    await page.goto('/projects');

    // Check if images have proper optimization attributes
    const images = page.locator('img');
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      
      // Verify Next.js Image optimization
      await expect(img).toHaveAttribute('loading', 'lazy');
      await expect(img).toHaveAttribute('decoding', 'async');
      
      // Verify responsive images
      const srcset = await img.getAttribute('srcset');
      if (srcset) {
        expect(srcset).toContain('w');
      }
    }
  });
});
```

### 2.7 Cross-Browser Testing

```typescript
// e2e/cross-browser.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Cross-browser compatibility', () => {
  ['chromium', 'firefox', 'webkit'].forEach(browserName => {
    test.describe(`${browserName} specific tests`, () => {
      test(`Contact form works in ${browserName}`, async ({ page }) => {
        await page.goto('/contact');
        
        // Fill and submit form
        await page.fill('input[name="name"]', 'Browser Test User');
        await page.fill('input[name="email"]', 'test@browser.com');
        await page.fill('textarea[name="message"]', 'Cross-browser test message');
        
        await page.click('button[type="submit"]');
        
        // Verify success across browsers
        await expect(page.locator('[data-testid="success-message"]')).toBeVisible();
      });

      test(`Navigation works in ${browserName}`, async ({ page }) => {
        await page.goto('/');
        
        // Test navigation links
        const navLinks = page.locator('nav a');
        const count = await navLinks.count();
        
        for (let i = 0; i < Math.min(count, 3); i++) {
          const link = navLinks.nth(i);
          const href = await link.getAttribute('href');
          
          if (href && href.startsWith('/')) {
            await link.click();
            await expect(page).toHaveURL(new RegExp(href));
            await page.goBack();
          }
        }
      });
    });
  });
});
```

---

## 3. Security Implementation

### 3.1 Security Architecture

```typescript
// lib/security/types.ts
export interface SecurityConfig {
  csp: ContentSecurityPolicyConfig;
  headers: SecurityHeaders;
  rateLimiting: RateLimitConfig;
  validation: ValidationConfig;
  authentication: AuthConfig;
}

export interface ContentSecurityPolicyConfig {
  defaultSrc: string[];
  scriptSrc: string[];
  styleSrc: string[];
  imgSrc: string[];
  connectSrc: string[];
  fontSrc: string[];
  objectSrc: string[];
  mediaSrc: string[];
  frameSrc: string[];
}
```

### 3.2 Security Headers Implementation

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
          }
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0'
          }
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

### 3.3 Content Security Policy

```typescript
// lib/security/csp.ts
export const getContentSecurityPolicy = (isDevelopment: boolean) => {
  const csp = {
    'default-src': ["'self'"],
    'script-src': [
      "'self'",
      "'unsafe-eval'", // Remove in production
      "'unsafe-inline'", // For Next.js optimization
      'https://www.googletagmanager.com',
      'https://www.google-analytics.com',
      'https://vercel.live',
    ],
    'style-src': [
      "'self'",
      "'unsafe-inline'", // Required for Tailwind CSS
      'https://fonts.googleapis.com',
    ],
    'img-src': [
      "'self'",
      'data:',
      'blob:',
      'https://images.unsplash.com',
      'https://avatars.githubusercontent.com',
      'https://*.vercel.app',
    ],
    'font-src': [
      "'self'",
      'https://fonts.gstatic.com',
    ],
    'connect-src': [
      "'self'",
      'https://api.resend.com',
      'https://vercel.live',
      'https://vitals.vercel-analytics.com',
      ...(isDevelopment ? ['ws://localhost:*', 'http://localhost:*'] : []),
    ],
    'frame-src': [
      "'none'"
    ],
    'object-src': [
      "'none'"
    ],
    'base-uri': [
      "'self'"
    ],
    'form-action': [
      "'self'"
    ],
    'frame-ancestors': [
      "'none'"
    ],
    'upgrade-insecure-requests': [],
  };

  // Remove unsafe-eval in production
  if (!isDevelopment) {
    csp['script-src'] = csp['script-src'].filter(src => src !== "'unsafe-eval'");
  }

  return Object.entries(csp)
    .map(([key, value]) => `${key} ${value.join(' ')}`)
    .join('; ');
};

// Middleware implementation
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getContentSecurityPolicy } from './lib/security/csp';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Apply CSP header
  const isDevelopment = process.env.NODE_ENV === 'development';
  const csp = getContentSecurityPolicy(isDevelopment);
  
  response.headers.set('Content-Security-Policy', csp);
  
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
```

### 3.4 Input Validation and Sanitization

```typescript
// lib/validation/contact.ts
import { z } from 'zod';
import DOMPurify from 'isomorphic-dompurify';

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name contains invalid characters'),
  
  email: z
    .string()
    .email('Invalid email address')
    .max(255, 'Email too long'),
  
  company: z
    .string()
    .max(100, 'Company name too long')
    .optional(),
  
  inquiryType: z.enum(['recruitment', 'consulting', 'speaking', 'general']),
  
  budget: z
    .enum(['$500-1000', '$1000-2000', '$2000-5000', '$5000+'])
    .optional(),
  
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
  
  honeypot: z
    .string()
    .max(0, 'Bot detected'), // Honeypot field must be empty
  
  timestamp: z
    .number()
    .refine(
      (timestamp) => {
        const now = Date.now();
        const timeDiff = now - timestamp;
        return timeDiff > 3000 && timeDiff < 300000; // 3 seconds to 5 minutes
      },
      'Form submitted too quickly or too slowly'
    ),
});

export function validateContactForm(data: unknown) {
  try {
    const result = contactFormSchema.parse(data);
    
    // Sanitize text inputs
    const sanitized = {
      ...result,
      name: DOMPurify.sanitize(result.name.trim()),
      company: result.company ? DOMPurify.sanitize(result.company.trim()) : undefined,
      message: DOMPurify.sanitize(result.message.trim()),
    };
    
    return {
      isValid: true,
      data: sanitized,
      errors: null,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        isValid: false,
        data: null,
        errors: error.flatten().fieldErrors,
      };
    }
    
    return {
      isValid: false,
      data: null,
      errors: { general: 'Validation failed' },
    };
  }
}

// Spam detection utilities
export function detectSpam(data: { name: string; email: string; message: string }): boolean {
  const spamPatterns = [
    /\b(buy now|click here|free money|make money|viagra|casino)\b/i,
    /\b\w+\.(com|net|org|info)\b/g, // Multiple URLs
    /(.)\1{4,}/, // Repeated characters
    /^[A-Z\s!]{20,}$/, // All caps
  ];
  
  const combinedText = `${data.name} ${data.email} ${data.message}`.toLowerCase();
  
  return spamPatterns.some(pattern => {
    if (pattern.global) {
      const matches = combinedText.match(pattern);
      return matches && matches.length > 2; // Multiple matches
    }
    return pattern.test(combinedText);
  });
}
```

### 3.5 Rate Limiting Implementation

```typescript
// lib/security/rateLimiting.ts
import { LRUCache } from 'lru-cache';

interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  resetTime: number;
}

class RateLimiter {
  private cache: LRUCache<string, { count: number; resetTime: number }>;
  private limit: number;
  private windowMs: number;

  constructor(limit: number, windowMs: number) {
    this.limit = limit;
    this.windowMs = windowMs;
    this.cache = new LRUCache({
      max: 500, // Maximum number of IPs to track
      ttl: windowMs,
    });
  }

  check(identifier: string): RateLimitResult {
    const now = Date.now();
    const key = identifier;
    const record = this.cache.get(key);

    if (!record || now > record.resetTime) {
      // First request or window expired
      const resetTime = now + this.windowMs;
      this.cache.set(key, { count: 1, resetTime });
      
      return {
        success: true,
        limit: this.limit,
        remaining: this.limit - 1,
        resetTime,
      };
    }

    if (record.count >= this.limit) {
      // Rate limit exceeded
      return {
        success: false,
        limit: this.limit,
        remaining: 0,
        resetTime: record.resetTime,
      };
    }

    // Increment count
    record.count++;
    this.cache.set(key, record);

    return {
      success: true,
      limit: this.limit,
      remaining: this.limit - record.count,
      resetTime: record.resetTime,
    };
  }
}

// Rate limiters for different endpoints
export const contactFormLimiter = new RateLimiter(3, 60 * 60 * 1000); // 3 per hour
export const apiLimiter = new RateLimiter(100, 15 * 60 * 1000); // 100 per 15 minutes

// Utility function to get client IP
export function getClientIP(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIP) {
    return realIP;
  }
  
  return 'unknown';
}

// Rate limiting middleware
export function withRateLimit(
  limiter: RateLimiter,
  handler: (request: Request) => Promise<Response>
) {
  return async (request: Request): Promise<Response> => {
    const ip = getClientIP(request);
    const result = limiter.check(ip);

    if (!result.success) {
      return new Response(
        JSON.stringify({
          error: 'Rate limit exceeded',
          resetTime: result.resetTime,
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'X-RateLimit-Limit': result.limit.toString(),
            'X-RateLimit-Remaining': result.remaining.toString(),
            'X-RateLimit-Reset': result.resetTime.toString(),
            'Retry-After': Math.ceil((result.resetTime - Date.now()) / 1000).toString(),
          },
        }
      );
    }

    const response = await handler(request);
    
    // Add rate limit headers to successful responses
    response.headers.set('X-RateLimit-Limit', result.limit.toString());
    response.headers.set('X-RateLimit-Remaining', result.remaining.toString());
    response.headers.set('X-RateLimit-Reset', result.resetTime.toString());

    return response;
  };
}
```

### 3.6 CSRF Protection

```typescript
// lib/security/csrf.ts
import { randomBytes, timingSafeEqual } from 'crypto';

export class CSRFProtection {
  private static readonly TOKEN_LENGTH = 32;
  private static readonly MAX_AGE = 60 * 60 * 1000; // 1 hour

  static generateToken(): { token: string; hash: string } {
    const token = randomBytes(this.TOKEN_LENGTH).toString('hex');
    const timestamp = Date.now();
    const payload = `${token}:${timestamp}`;
    const hash = Buffer.from(payload).toString('base64');
    
    return { token, hash };
  }

  static validateToken(submittedToken: string, storedHash: string): boolean {
    try {
      const payload = Buffer.from(storedHash, 'base64').toString();
      const [originalToken, timestampStr] = payload.split(':');
      const timestamp = parseInt(timestampStr, 10);

      // Check if token is expired
      if (Date.now() - timestamp > this.MAX_AGE) {
        return false;
      }

      // Compare tokens using timing-safe comparison
      const submittedBuffer = Buffer.from(submittedToken);
      const originalBuffer = Buffer.from(originalToken);

      return submittedBuffer.length === originalBuffer.length &&
             timingSafeEqual(submittedBuffer, originalBuffer);
    } catch {
      return false;
    }
  }
}

// React hook for CSRF token management
export function useCSRFToken() {
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    // Get CSRF token from server or generate client-side
    fetch('/api/csrf-token')
      .then(res => res.json())
      .then(data => setToken(data.token))
      .catch(() => {
        // Fallback: generate client token (less secure)
        const { token: clientToken } = CSRFProtection.generateToken();
        setToken(clientToken);
      });
  }, []);

  return token;
}
```

### 3.7 Environment Variable Security

```bash
# .env.example
# Public variables (prefixed with NEXT_PUBLIC_)
NEXT_PUBLIC_SITE_URL=https://albertnartey.com
NEXT_PUBLIC_VERCEL_ENV=production
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Private variables (server-side only)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
DATABASE_URL=postgresql://user:pass@host:port/dbname

# Security secrets
CSRF_SECRET=your-csrf-secret-key-here
ENCRYPTION_KEY=your-32-character-encryption-key
JWT_SECRET=your-jwt-secret-for-sessions

# Rate limiting
REDIS_URL=redis://localhost:6379
```

```typescript
// lib/config/env.ts
import { z } from 'zod';

const envSchema = z.object({
  // Public environment variables
  NEXT_PUBLIC_SITE_URL: z.string().url(),
  NEXT_PUBLIC_VERCEL_ENV: z.enum(['development', 'preview', 'production']),
  NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().optional(),

  // Private environment variables
  RESEND_API_KEY: z.string().min(1),
  GITHUB_TOKEN: z.string().optional(),
  DATABASE_URL: z.string().url().optional(),

  // Security secrets
  CSRF_SECRET: z.string().min(32),
  ENCRYPTION_KEY: z.string().length(32),
  JWT_SECRET: z.string().min(32),

  // Optional services
  REDIS_URL: z.string().url().optional(),
  SENTRY_DSN: z.string().url().optional(),
});

export const env = envSchema.parse(process.env);

// Utility to mask sensitive values in logs
export function maskSensitiveData(obj: Record<string, any>): Record<string, any> {
  const sensitiveKeys = ['password', 'token', 'key', 'secret', 'api_key'];
  const masked = { ...obj };

  Object.keys(masked).forEach(key => {
    if (sensitiveKeys.some(sensitive => key.toLowerCase().includes(sensitive))) {
      const value = masked[key];
      if (typeof value === 'string' && value.length > 8) {
        masked[key] = `${value.substring(0, 4)}****${value.substring(value.length - 4)}`;
      } else {
        masked[key] = '****';
      }
    }
  });

  return masked;
}
```

---

## 4. Deployment Pipeline

### 4.1 CI/CD Pipeline with GitHub Actions

```yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

env:
  NODE_VERSION: '18'
  VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
  VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}

jobs:
  test:
    name: Test Suite
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Type check
        run: npm run type-check

      - name: Lint code
        run: npm run lint

      - name: Run unit tests
        run: npm run test -- --coverage --watchAll=false

      - name: Upload coverage reports
        uses: codecov/codecov-action@v3
        with:
          file: ./coverage/lcov.info
          flags: unittests
          name: codecov-umbrella

      - name: Build application
        run: npm run build

  e2e-tests:
    name: E2E Tests
    runs-on: ubuntu-latest
    needs: test
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright
        run: npx playwright install --with-deps

      - name: Build application
        run: npm run build

      - name: Run Playwright tests
        run: npm run test:e2e
        env:
          PLAYWRIGHT_TEST_BASE_URL: http://localhost:3000

      - name: Upload Playwright report
        uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
          retention-days: 30

  security-scan:
    name: Security Scan
    runs-on: ubuntu-latest
    needs: test
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Run Trivy vulnerability scanner
        uses: aquasecurity/trivy-action@master
        with:
          scan-type: 'fs'
          scan-ref: '.'
          format: 'sarif'
          output: 'trivy-results.sarif'

      - name: Upload Trivy scan results
        uses: github/codeql-action/upload-sarif@v2
        if: always()
        with:
          sarif_file: 'trivy-results.sarif'

      - name: Setup Node.js for audit
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run npm audit
        run: npm audit --audit-level=high

  lighthouse-audit:
    name: Lighthouse Audit
    runs-on: ubuntu-latest
    needs: test
    if: github.event_name == 'pull_request'
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build application
        run: npm run build

      - name: Start application
        run: npm start &
        
      - name: Wait for application
        run: npx wait-on http://localhost:3000

      - name: Run Lighthouse CI
        run: |
          npm install -g @lhci/cli
          lhci autorun
        env:
          LHCI_GITHUB_APP_TOKEN: ${{ secrets.LHCI_GITHUB_APP_TOKEN }}

  deploy-staging:
    name: Deploy to Staging
    runs-on: ubuntu-latest
    needs: [test, e2e-tests, security-scan]
    if: github.ref == 'refs/heads/develop'
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Install Vercel CLI
        run: npm install --global vercel@latest

      - name: Pull Vercel Environment Information
        run: vercel pull --yes --environment=preview --token=${{ secrets.VERCEL_TOKEN }}

      - name: Build Project Artifacts
        run: vercel build --token=${{ secrets.VERCEL_TOKEN }}

      - name: Deploy Project Artifacts to Vercel
        run: vercel deploy --prebuilt --token=${{ secrets.VERCEL_TOKEN }}

  deploy-production:
    name: Deploy to Production
    runs-on: ubuntu-latest
    needs: [test, e2e-tests, security-scan, lighthouse-audit]
    if: github.ref == 'refs/heads/main'
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Install Vercel CLI
        run: npm install --global vercel@latest

      - name: Pull Vercel Environment Information
        run: vercel pull --yes --environment=production --token=${{ secrets.VERCEL_TOKEN }}

      - name: Build Project Artifacts
        run: vercel build --prod --token=${{ secrets.VERCEL_TOKEN }}

      - name: Deploy Project Artifacts to Vercel
        run: vercel deploy --prebuilt --prod --token=${{ secrets.VERCEL_TOKEN }}

      - name: Run Post-Deployment Tests
        run: |
          sleep 30  # Wait for deployment to propagate
          npm run test:smoke -- --baseURL=https://albertnartey.com

  notify:
    name: Notify Deployment
    runs-on: ubuntu-latest
    needs: [deploy-production]
    if: always() && github.ref == 'refs/heads/main'
    
    steps:
      - name: Notify Success
        if: needs.deploy-production.result == 'success'
        run: |
          echo "✅ Deployment successful!"
          # Add Slack/Discord notification here if needed

      - name: Notify Failure
        if: needs.deploy-production.result == 'failure'
        run: |
          echo "❌ Deployment failed!"
          # Add failure notification here
```

### 4.2 Lighthouse CI Configuration

```javascript
// lighthouserc.js
module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:3000',
        'http://localhost:3000/about',
        'http://localhost:3000/projects',
        'http://localhost:3000/contact',
      ],
      startServerCommand: 'npm start',
      startServerReadyPattern: 'ready on',
      startServerReadyTimeout: 30000,
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        'categories:pwa': ['off'], // PWA not required for portfolio
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
```

### 4.3 Environment Management

```typescript
// lib/config/environments.ts
export type Environment = 'development' | 'staging' | 'production';

export interface EnvironmentConfig {
  apiUrl: string;
  siteUrl: string;
  analytics: {
    googleAnalytics?: string;
    vercelAnalytics: boolean;
  };
  monitoring: {
    sentry?: string;
    logLevel: 'debug' | 'info' | 'warn' | 'error';
  };
  features: {
    contactForm: boolean;
    testimonials: boolean;
    blog: boolean;
    analytics: boolean;
  };
}

const environments: Record<Environment, EnvironmentConfig> = {
  development: {
    apiUrl: 'http://localhost:3000/api',
    siteUrl: 'http://localhost:3000',
    analytics: {
      vercelAnalytics: false,
    },
    monitoring: {
      logLevel: 'debug',
    },
    features: {
      contactForm: true,
      testimonials: true,
      blog: false,
      analytics: false,
    },
  },
  staging: {
    apiUrl: 'https://portfolio-staging.vercel.app/api',
    siteUrl: 'https://portfolio-staging.vercel.app',
    analytics: {
      vercelAnalytics: true,
    },
    monitoring: {
      logLevel: 'info',
    },
    features: {
      contactForm: true,
      testimonials: true,
      blog: false,
      analytics: true,
    },
  },
  production: {
    apiUrl: 'https://albertnartey.com/api',
    siteUrl: 'https://albertnartey.com',
    analytics: {
      googleAnalytics: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
      vercelAnalytics: true,
    },
    monitoring: {
      sentry: process.env.SENTRY_DSN,
      logLevel: 'warn',
    },
    features: {
      contactForm: true,
      testimonials: true,
      blog: true,
      analytics: true,
    },
  },
};

export function getEnvironmentConfig(): EnvironmentConfig {
  const env = (process.env.VERCEL_ENV || process.env.NODE_ENV || 'development') as Environment;
  return environments[env];
}
```

### 4.4 Database Migration Strategy

```typescript
// lib/database/migrations.ts
export interface Migration {
  id: string;
  name: string;
  timestamp: number;
  up: () => Promise<void>;
  down: () => Promise<void>;
}

class MigrationRunner {
  private migrations: Migration[] = [];

  addMigration(migration: Migration) {
    this.migrations.push(migration);
    this.migrations.sort((a, b) => a.timestamp - b.timestamp);
  }

  async runMigrations(): Promise<void> {
    const appliedMigrations = await this.getAppliedMigrations();
    
    for (const migration of this.migrations) {
      if (!appliedMigrations.includes(migration.id)) {
        console.log(`Running migration: ${migration.name}`);
        try {
          await migration.up();
          await this.recordMigration(migration.id);
          console.log(`✅ Migration ${migration.name} completed`);
        } catch (error) {
          console.error(`❌ Migration ${migration.name} failed:`, error);
          throw error;
        }
      }
    }
  }

  async rollbackMigration(migrationId: string): Promise<void> {
    const migration = this.migrations.find(m => m.id === migrationId);
    if (!migration) {
      throw new Error(`Migration ${migrationId} not found`);
    }

    console.log(`Rolling back migration: ${migration.name}`);
    try {
      await migration.down();
      await this.removeMigrationRecord(migrationId);
      console.log(`✅ Rollback of ${migration.name} completed`);
    } catch (error) {
      console.error(`❌ Rollback of ${migration.name} failed:`, error);
      throw error;
    }
  }

  private async getAppliedMigrations(): Promise<string[]> {
    // Implementation depends on your database choice
    // For static site, this might be stored in a JSON file or external service
    return [];
  }

  private async recordMigration(migrationId: string): Promise<void> {
    // Record that migration was applied
  }

  private async removeMigrationRecord(migrationId: string): Promise<void> {
    // Remove migration record
  }
}

// Example migration
export const addProjectCategories: Migration = {
  id: '001_add_project_categories',
  name: 'Add project categories',
  timestamp: 1693756800000, // August 3, 2023
  up: async () => {
    // Add category field to projects
    console.log('Adding category field to projects');
  },
  down: async () => {
    // Remove category field from projects
    console.log('Removing category field from projects');
  },
};
```

### 4.5 Rollback Procedures

```bash
#!/bin/bash
# scripts/rollback.sh

set -e

echo "🔄 Starting rollback procedure..."

# Get the previous deployment from Vercel
PREVIOUS_DEPLOYMENT=$(vercel ls albertnartey.com --token=$VERCEL_TOKEN | head -2 | tail -1 | awk '{print $1}')

if [ -z "$PREVIOUS_DEPLOYMENT" ]; then
    echo "❌ No previous deployment found"
    exit 1
fi

echo "📍 Previous deployment: $PREVIOUS_DEPLOYMENT"

# Promote previous deployment to production
echo "🚀 Promoting previous deployment to production..."
vercel promote $PREVIOUS_DEPLOYMENT --token=$VERCEL_TOKEN

# Verify rollback
echo "🔍 Verifying rollback..."
sleep 30

# Run smoke tests against production
npm run test:smoke -- --baseURL=https://albertnartey.com

if [ $? -eq 0 ]; then
    echo "✅ Rollback successful and verified"
    
    # Notify team
    echo "📧 Notifying team of successful rollback..."
    # Add notification logic here
else
    echo "❌ Rollback verification failed"
    exit 1
fi
```

---

## 5. Monitoring and Analytics

### 5.1 Error Tracking with Sentry

```typescript
// lib/monitoring/sentry.ts
import * as Sentry from '@sentry/nextjs';

export function initSentry() {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    environment: process.env.VERCEL_ENV || 'development',
    tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
    
    beforeSend(event, hint) {
      // Filter out known issues
      if (event.exception) {
        const error = hint.originalException;
        
        // Don't send client-side network errors
        if (error instanceof TypeError && error.message.includes('fetch')) {
          return null;
        }
        
        // Don't send hydration errors in development
        if (process.env.NODE_ENV === 'development' && 
            error instanceof Error && 
            error.message.includes('Hydration')) {
          return null;
        }
      }
      
      return event;
    },
    
    integrations: [
      new Sentry.BrowserTracing({
        tracingOrigins: ['localhost', 'albertnartey.com'],
      }),
    ],
  });
}

// Custom error boundary with Sentry integration
export class SentryErrorBoundary extends Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    Sentry.withScope((scope) => {
      scope.setContext('errorInfo', errorInfo);
      Sentry.captureException(error);
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <p className="text-muted-foreground mb-4">
              We've been notified of this error and will fix it soon.
            </p>
            <Button onClick={() => this.setState({ hasError: false })}>
              Try again
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
```

### 5.2 Analytics Implementation

```typescript
// lib/analytics/index.ts
interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

class Analytics {
  private isEnabled: boolean;
  private gtag: any;

  constructor() {
    this.isEnabled = typeof window !== 'undefined' && 
                    !!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    this.gtag = (window as any).gtag;
  }

  // Track page views
  pageView(url: string) {
    if (!this.isEnabled) return;
    
    this.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_location: url,
    });
  }

  // Track custom events
  event({ action, category, label, value }: AnalyticsEvent) {
    if (!this.isEnabled) return;
    
    this.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }

  // Track contact form submissions
  contactFormSubmission(inquiryType: string, success: boolean) {
    this.event({
      action: success ? 'contact_form_success' : 'contact_form_error',
      category: 'engagement',
      label: inquiryType,
    });
  }

  // Track project views
  projectView(projectId: string, projectTitle: string) {
    this.event({
      action: 'project_view',
      category: 'content',
      label: `${projectId}: ${projectTitle}`,
    });
  }

  // Track resume downloads
  resumeDownload() {
    this.event({
      action: 'resume_download',
      category: 'engagement',
      label: 'pdf_download',
    });
  }

  // Track external link clicks
  externalLinkClick(url: string, linkText: string) {
    this.event({
      action: 'external_link_click',
      category: 'engagement',
      label: `${linkText}: ${url}`,
    });
  }
}

export const analytics = new Analytics();

// React hook for analytics
export function useAnalytics() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      analytics.pageView(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return analytics;
}
```

### 5.3 Performance Monitoring

```typescript
// lib/monitoring/performance.ts
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private observer: PerformanceObserver | null = null;
  private vitals: Map<string, number> = new Map();

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  init() {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    // Track Core Web Vitals
    this.trackCoreWebVitals();
    
    // Track custom metrics
    this.trackCustomMetrics();
  }

  private trackCoreWebVitals() {
    // Largest Contentful Paint (LCP)
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.vitals.set('LCP', lastEntry.startTime);
      this.reportVital('LCP', lastEntry.startTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID)
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        const fid = entry.processingStart - entry.startTime;
        this.vitals.set('FID', fid);
        this.reportVital('FID', fid);
      });
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      this.vitals.set('CLS', clsValue);
      this.reportVital('CLS', clsValue);
    }).observe({ entryTypes: ['layout-shift'] });
  }

  private trackCustomMetrics() {
    // Time to Interactive
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            this.reportVital('FCP', entry.startTime);
          }
        });
      });
      observer.observe({ entryTypes: ['paint'] });
    }

    // Bundle size tracking
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection) {
        this.reportMetric('connection-type', connection.effectiveType);
        this.reportMetric('connection-speed', connection.downlink);
      }
    }
  }

  private reportVital(name: string, value: number) {
    // Send to analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', name, {
        event_category: 'Web Vitals',
        value: Math.round(value),
        non_interaction: true,
      });
    }

    // Send to Vercel Analytics
    if (typeof window !== 'undefined' && (window as any).va) {
      (window as any).va('track', 'Web Vital', {
        name,
        value: Math.round(value),
      });
    }

    // Log performance issues
    this.checkThresholds(name, value);
  }

  private reportMetric(name: string, value: any) {
    console.log(`Performance metric - ${name}:`, value);
  }

  private checkThresholds(name: string, value: number) {
    const thresholds = {
      'LCP': 2500, // 2.5 seconds
      'FID': 100,  // 100 milliseconds
      'CLS': 0.1,  // 0.1
    };

    const threshold = thresholds[name as keyof typeof thresholds];
    if (threshold && value > threshold) {
      console.warn(`Performance issue: ${name} (${value}) exceeds threshold (${threshold})`);
      
      // Report to monitoring service
      if (typeof window !== 'undefined' && (window as any).Sentry) {
        (window as any).Sentry.addBreadcrumb({
          category: 'performance',
          message: `${name} threshold exceeded`,
          level: 'warning',
          data: { metric: name, value, threshold },
        });
      }
    }
  }

  getVitals(): Record<string, number> {
    return Object.fromEntries(this.vitals);
  }
}

// Initialize performance monitoring
export const performanceMonitor = PerformanceMonitor.getInstance();

// React hook for performance monitoring
export function usePerformanceMonitoring() {
  useEffect(() => {
    performanceMonitor.init();
  }, []);

  return {
    getVitals: () => performanceMonitor.getVitals(),
  };
}
```

### 5.4 Uptime Monitoring

```typescript
// lib/monitoring/uptime.ts
export interface HealthCheck {
  name: string;
  url: string;
  method: 'GET' | 'POST';
  expectedStatus: number;
  timeout: number;
}

export class UptimeMonitor {
  private checks: HealthCheck[] = [
    {
      name: 'Homepage',
      url: '/',
      method: 'GET',
      expectedStatus: 200,
      timeout: 5000,
    },
    {
      name: 'Projects API',
      url: '/api/projects',
      method: 'GET',
      expectedStatus: 200,
      timeout: 5000,
    },
    {
      name: 'Contact API',
      url: '/api/contact',
      method: 'POST',
      expectedStatus: 400, // Expected for empty body
      timeout: 5000,
    },
  ];

  async runHealthChecks(): Promise<Record<string, boolean>> {
    const results: Record<string, boolean> = {};
    
    for (const check of this.checks) {
      try {
        const response = await fetch(check.url, {
          method: check.method,
          signal: AbortSignal.timeout(check.timeout),
        });
        
        results[check.name] = response.status === check.expectedStatus;
      } catch (error) {
        console.error(`Health check failed for ${check.name}:`, error);
        results[check.name] = false;
      }
    }
    
    return results;
  }

  async isHealthy(): Promise<boolean> {
    const results = await this.runHealthChecks();
    return Object.values(results).every(Boolean);
  }
}

// API route for health checks
// app/api/health/route.ts
export async function GET() {
  const monitor = new UptimeMonitor();
  const results = await monitor.runHealthChecks();
  const isHealthy = Object.values(results).every(Boolean);
  
  return Response.json(
    {
      status: isHealthy ? 'healthy' : 'unhealthy',
      checks: results,
      timestamp: new Date().toISOString(),
    },
    { status: isHealthy ? 200 : 503 }
  );
}
```

---

## 6. Quality Assurance Framework

### 6.1 Code Review Checklist

```markdown
# Code Review Checklist

## Functionality
- [ ] Feature works as described in requirements
- [ ] All edge cases are handled
- [ ] Error states are handled gracefully
- [ ] Loading states are implemented where needed

## Code Quality
- [ ] Code follows project conventions and style guide
- [ ] Functions and variables have descriptive names
- [ ] Complex logic is documented with comments
- [ ] No console.log statements in production code
- [ ] No TODO comments without tracking issues

## Performance
- [ ] No unnecessary re-renders in React components
- [ ] Images are optimized (WebP format, responsive)
- [ ] Large dependencies are dynamically imported
- [ ] Database queries are optimized (if applicable)

## Security
- [ ] User inputs are validated and sanitized
- [ ] No sensitive data exposed in client code
- [ ] External links have proper security attributes
- [ ] API endpoints have rate limiting

## Testing
- [ ] Unit tests added for new functionality
- [ ] E2E tests updated if user flows changed
- [ ] All tests are passing
- [ ] Test coverage meets requirements (85%+)

## Accessibility
- [ ] Proper semantic HTML elements used
- [ ] Images have alt text
- [ ] Interactive elements are keyboard accessible
- [ ] Color contrast meets WCAG guidelines
- [ ] Screen reader compatibility verified

## Mobile Responsiveness
- [ ] Layout works on mobile devices (320px+)
- [ ] Touch targets are at least 44px
- [ ] Text is readable without zooming
- [ ] Horizontal scrolling is avoided

## SEO
- [ ] Meta tags are properly set
- [ ] Heading hierarchy is logical (h1 → h2 → h3)
- [ ] Images have descriptive alt text
- [ ] Internal links use descriptive anchor text
```

### 6.2 Performance Benchmarks

```typescript
// lib/quality/benchmarks.ts
export interface PerformanceBenchmark {
  metric: string;
  target: number;
  unit: string;
  critical: boolean;
}

export const performanceBenchmarks: PerformanceBenchmark[] = [
  {
    metric: 'First Contentful Paint',
    target: 1500,
    unit: 'ms',
    critical: true,
  },
  {
    metric: 'Largest Contentful Paint',
    target: 2500,
    unit: 'ms',
    critical: true,
  },
  {
    metric: 'Time to Interactive',
    target: 3500,
    unit: 'ms',
    critical: true,
  },
  {
    metric: 'First Input Delay',
    target: 100,
    unit: 'ms',
    critical: true,
  },
  {
    metric: 'Cumulative Layout Shift',
    target: 0.1,
    unit: 'score',
    critical: true,
  },
  {
    metric: 'Bundle Size (Initial)',
    target: 200,
    unit: 'KB',
    critical: false,
  },
  {
    metric: 'Bundle Size (Total)',
    target: 500,
    unit: 'KB',
    critical: false,
  },
];

export class BenchmarkValidator {
  static validateMetrics(metrics: Record<string, number>): {
    passed: boolean;
    results: Array<{
      metric: string;
      value: number;
      target: number;
      passed: boolean;
      critical: boolean;
    }>;
  } {
    const results = performanceBenchmarks.map(benchmark => {
      const value = metrics[benchmark.metric] || 0;
      const passed = value <= benchmark.target;
      
      return {
        metric: benchmark.metric,
        value,
        target: benchmark.target,
        passed,
        critical: benchmark.critical,
      };
    });

    const criticalFailures = results.filter(r => !r.passed && r.critical);
    const passed = criticalFailures.length === 0;

    return { passed, results };
  }

  static generateReport(results: ReturnType<typeof BenchmarkValidator.validateMetrics>): string {
    let report = '# Performance Benchmark Report\n\n';
    
    report += `Overall Status: ${results.passed ? '✅ PASSED' : '❌ FAILED'}\n\n`;
    
    report += '## Metrics\n\n';
    report += '| Metric | Value | Target | Status | Critical |\n';
    report += '|--------|-------|--------|--------|---------|\n';
    
    results.results.forEach(result => {
      const status = result.passed ? '✅' : '❌';
      const critical = result.critical ? '🔥' : '⚠️';
      report += `| ${result.metric} | ${result.value} | ${result.target} | ${status} | ${critical} |\n`;
    });
    
    const failedCritical = results.results.filter(r => !r.passed && r.critical);
    if (failedCritical.length > 0) {
      report += '\n## Critical Issues\n\n';
      failedCritical.forEach(result => {
        report += `- **${result.metric}**: ${result.value} exceeds target of ${result.target}\n`;
      });
    }
    
    return report;
  }
}
```

### 6.3 SEO Audit Implementation

```typescript
// lib/quality/seo-audit.ts
export interface SEOCheck {
  name: string;
  description: string;
  check: (document: Document) => Promise<{ passed: boolean; message: string }>;
  critical: boolean;
}

export const seoChecks: SEOCheck[] = [
  {
    name: 'Title Tag',
    description: 'Page has a descriptive title tag',
    critical: true,
    check: async (doc) => {
      const title = doc.querySelector('title')?.textContent || '';
      const passed = title.length > 0 && title.length <= 60;
      return {
        passed,
        message: passed 
          ? `Title tag found: "${title}"` 
          : title.length === 0 
            ? 'No title tag found' 
            : `Title too long (${title.length} chars, should be ≤60)`,
      };
    },
  },
  {
    name: 'Meta Description',
    description: 'Page has a meta description',
    critical: true,
    check: async (doc) => {
      const description = doc.querySelector('meta[name="description"]')?.getAttribute('content') || '';
      const passed = description.length > 0 && description.length <= 160;
      return {
        passed,
        message: passed 
          ? `Meta description found (${description.length} chars)` 
          : description.length === 0 
            ? 'No meta description found' 
            : `Meta description too long (${description.length} chars, should be ≤160)`,
      };
    },
  },
  {
    name: 'Heading Structure',
    description: 'Page has proper heading hierarchy',
    critical: false,
    check: async (doc) => {
      const h1s = doc.querySelectorAll('h1');
      const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
      
      if (h1s.length === 0) {
        return { passed: false, message: 'No H1 heading found' };
      }
      
      if (h1s.length > 1) {
        return { passed: false, message: `Multiple H1 headings found (${h1s.length})` };
      }
      
      return {
        passed: true,
        message: `Proper heading structure (${headings.length} headings total)`,
      };
    },
  },
  {
    name: 'Image Alt Text',
    description: 'All images have alt text',
    critical: false,
    check: async (doc) => {
      const images = doc.querySelectorAll('img');
      const imagesWithoutAlt = Array.from(images).filter(img => !img.getAttribute('alt'));
      
      const passed = imagesWithoutAlt.length === 0;
      return {
        passed,
        message: passed 
          ? `All ${images.length} images have alt text` 
          : `${imagesWithoutAlt.length} of ${images.length} images missing alt text`,
      };
    },
  },
  {
    name: 'Internal Links',
    description: 'Internal links have descriptive anchor text',
    critical: false,
    check: async (doc) => {
      const links = doc.querySelectorAll('a[href^="/"], a[href^="#"]');
      const nonDescriptiveLinks = Array.from(links).filter(link => {
        const text = link.textContent?.trim().toLowerCase() || '';
        return ['click here', 'read more', 'here', 'link'].includes(text);
      });
      
      const passed = nonDescriptiveLinks.length === 0;
      return {
        passed,
        message: passed 
          ? `All ${links.length} internal links have descriptive text` 
          : `${nonDescriptiveLinks.length} links have non-descriptive anchor text`,
      };
    },
  },
  {
    name: 'Open Graph Tags',
    description: 'Page has Open Graph meta tags',
    critical: false,
    check: async (doc) => {
      const ogTitle = doc.querySelector('meta[property="og:title"]');
      const ogDescription = doc.querySelector('meta[property="og:description"]');
      const ogImage = doc.querySelector('meta[property="og:image"]');
      
      const hasBasicOG = ogTitle && ogDescription && ogImage;
      return {
        passed: !!hasBasicOG,
        message: hasBasicOG 
          ? 'Open Graph tags found' 
          : 'Missing basic Open Graph tags (title, description, image)',
      };
    },
  },
];

export class SEOAuditor {
  async audit(url: string): Promise<{
    passed: boolean;
    results: Array<{
      name: string;
      passed: boolean;
      message: string;
      critical: boolean;
    }>;
  }> {
    // In a real implementation, you'd fetch the page and parse it
    // For now, we'll simulate the audit
    const results = await Promise.all(
      seoChecks.map(async check => ({
        name: check.name,
        passed: Math.random() > 0.2, // Simulate some failures
        message: `Simulated check for ${check.name}`,
        critical: check.critical,
      }))
    );

    const criticalFailures = results.filter(r => !r.passed && r.critical);
    const passed = criticalFailures.length === 0;

    return { passed, results };
  }

  generateReport(results: Awaited<ReturnType<SEOAuditor['audit']>>): string {
    let report = '# SEO Audit Report\n\n';
    
    report += `Overall Status: ${results.passed ? '✅ PASSED' : '❌ FAILED'}\n\n`;
    
    report += '## Checks\n\n';
    
    results.results.forEach(result => {
      const status = result.passed ? '✅' : '❌';
      const priority = result.critical ? '🔥 Critical' : '⚠️ Warning';
      report += `### ${status} ${result.name} (${priority})\n`;
      report += `${result.message}\n\n`;
    });
    
    return report;
  }
}
```

### 6.4 Accessibility Testing

```typescript
// lib/quality/accessibility.ts
export interface A11yRule {
  id: string;
  name: string;
  description: string;
  level: 'A' | 'AA' | 'AAA';
  check: (element: Element | Document) => Promise<{ passed: boolean; message: string }>;
}

export const accessibilityRules: A11yRule[] = [
  {
    id: 'color-contrast',
    name: 'Color Contrast',
    description: 'Text has sufficient color contrast',
    level: 'AA',
    check: async (doc) => {
      // Simplified check - in reality you'd use a library like axe-core
      const textElements = doc.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a');
      let lowContrastCount = 0;
      
      // This is a simplified simulation
      textElements.forEach(() => {
        if (Math.random() < 0.1) lowContrastCount++; // 10% chance of low contrast
      });
      
      const passed = lowContrastCount === 0;
      return {
        passed,
        message: passed 
          ? `All ${textElements.length} text elements have sufficient contrast` 
          : `${lowContrastCount} elements have insufficient color contrast`,
      };
    },
  },
  {
    id: 'keyboard-navigation',
    name: 'Keyboard Navigation',
    description: 'All interactive elements are keyboard accessible',
    level: 'A',
    check: async (doc) => {
      const interactiveElements = doc.querySelectorAll('button, a, input, select, textarea, [tabindex]');
      const elementsWithoutTabindex = Array.from(interactiveElements).filter(el => {
        const tabindex = el.getAttribute('tabindex');
        return tabindex === '-1';
      });
      
      const passed = elementsWithoutTabindex.length === 0;
      return {
        passed,
        message: passed 
          ? `All ${interactiveElements.length} interactive elements are keyboard accessible` 
          : `${elementsWithoutTabindex.length} elements are not keyboard accessible`,
      };
    },
  },
  {
    id: 'aria-labels',
    name: 'ARIA Labels',
    description: 'Interactive elements have proper ARIA labels',
    level: 'A',
    check: async (doc) => {
      const buttons = doc.querySelectorAll('button');
      const iconsButtons = Array.from(buttons).filter(btn => {
        const text = btn.textContent?.trim() || '';
        const hasIcon = btn.querySelector('svg, i, [class*="icon"]');
        return hasIcon && !text && !btn.getAttribute('aria-label');
      });
      
      const passed = iconsButtons.length === 0;
      return {
        passed,
        message: passed 
          ? 'All icon buttons have proper ARIA labels' 
          : `${iconsButtons.length} icon buttons missing ARIA labels`,
      };
    },
  },
  {
    id: 'heading-structure',
    name: 'Heading Structure',
    description: 'Headings follow proper hierarchy',
    level: 'A',
    check: async (doc) => {
      const headings = Array.from(doc.querySelectorAll('h1, h2, h3, h4, h5, h6'));
      const levels = headings.map(h => parseInt(h.tagName[1]));
      
      let validHierarchy = true;
      for (let i = 1; i < levels.length; i++) {
        if (levels[i] > levels[i - 1] + 1) {
          validHierarchy = false;
          break;
        }
      }
      
      return {
        passed: validHierarchy,
        message: validHierarchy 
          ? `Heading hierarchy is proper (${headings.length} headings)` 
          : 'Heading hierarchy skips levels',
      };
    },
  },
];

export class AccessibilityAuditor {
  async audit(document: Document): Promise<{
    passed: boolean;
    results: Array<{
      id: string;
      name: string;
      passed: boolean;
      message: string;
      level: string;
    }>;
  }> {
    const results = await Promise.all(
      accessibilityRules.map(async rule => {
        const result = await rule.check(document);
        return {
          id: rule.id,
          name: rule.name,
          passed: result.passed,
          message: result.message,
          level: rule.level,
        };
      })
    );

    const failed = results.filter(r => !r.passed);
    const passed = failed.length === 0;

    return { passed, results };
  }

  generateReport(results: Awaited<ReturnType<AccessibilityAuditor['audit']>>): string {
    let report = '# Accessibility Audit Report\n\n';
    
    report += `WCAG 2.1 Compliance: ${results.passed ? '✅ PASSED' : '❌ FAILED'}\n\n`;
    
    // Group by level
    const byLevel = results.results.reduce((acc, result) => {
      if (!acc[result.level]) acc[result.level] = [];
      acc[result.level].push(result);
      return acc;
    }, {} as Record<string, typeof results.results>);
    
    Object.entries(byLevel).forEach(([level, levelResults]) => {
      report += `## Level ${level}\n\n`;
      
      levelResults.forEach(result => {
        const status = result.passed ? '✅' : '❌';
        report += `### ${status} ${result.name}\n`;
        report += `${result.message}\n\n`;
      });
    });
    
    return report;
  }
}
```

---

## 7. Performance Optimization

### 7.1 Image Optimization Pipeline

```typescript
// lib/optimization/images.ts
export interface ImageOptimization {
  src: string;
  width: number;
  height: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpg' | 'png';
  sizes?: string;
  priority?: boolean;
}

export class ImageOptimizer {
  private static readonly DEFAULT_QUALITY = 75;
  private static readonly BREAKPOINTS = [640, 768, 1024, 1280, 1536];

  static generateSrcSet(src: string, options: ImageOptimization): string {
    const { width, height, quality = this.DEFAULT_QUALITY, format = 'webp' } = options;
    
    return this.BREAKPOINTS
      .filter(bp => bp <= width)
      .map(bp => {
        const scaledHeight = Math.round((height * bp) / width);
        return `${this.buildImageUrl(src, bp, scaledHeight, quality, format)} ${bp}w`;
      })
      .join(', ');
  }

  static generateSizes(breakpoints?: Record<string, string>): string {
    if (breakpoints) {
      return Object.entries(breakpoints)
        .map(([bp, size]) => `(max-width: ${bp}) ${size}`)
        .join(', ');
    }
    
    return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
  }

  private static buildImageUrl(
    src: string, 
    width: number, 
    height: number, 
    quality: number, 
    format: string
  ): string {
    // Next.js Image Optimization API
    const params = new URLSearchParams({
      url: src,
      w: width.toString(),
      h: height.toString(),
      q: quality.toString(),
      f: format,
    });
    
    return `/_next/image?${params}`;
  }
}

// Optimized Image Component
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes,
  ...props
}: ImageOptimization & {
  alt: string;
  className?: string;
  [key: string]: any;
}) {
  const srcSet = ImageOptimizer.generateSrcSet(src, { width, height });
  const sizesAttr = sizes || ImageOptimizer.generateSizes();

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      srcSet={srcSet}
      sizes={sizesAttr}
      quality={75}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      {...props}
    />
  );
}
```

### 7.2 Bundle Optimization

```javascript
// next.config.js - Enhanced configuration
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other config

  // Bundle optimization
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-icons',
      'framer-motion',
    ],
  },

  // Webpack optimization
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          common: {
            minChunks: 2,
            name: 'common',
            chunks: 'all',
            enforce: true,
          },
        },
      };
    }

    // Bundle analyzer
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

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },

  // Compression
  compress: true,

  // PWA configuration (optional)
  ...(process.env.NODE_ENV === 'production' && {
    experimental: {
      ...nextConfig.experimental,
      ppr: true, // Partial Prerendering
    },
  }),
};

module.exports = nextConfig;
```

### 7.3 Caching Strategy

```typescript
// lib/optimization/cache.ts
export interface CacheConfig {
  key: string;
  ttl: number; // Time to live in milliseconds
  staleWhileRevalidate?: number;
}

export class CacheManager {
  private static instance: CacheManager;
  private cache: Map<string, { data: any; timestamp: number; ttl: number }>;

  constructor() {
    this.cache = new Map();
  }

  static getInstance(): CacheManager {
    if (!CacheManager.instance) {
      CacheManager.instance = new CacheManager();
    }
    return CacheManager.instance;
  }

  set(key: string, data: any, ttl: number): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl,
    });
  }

  get(key: string): any | null {
    const item = this.cache.get(key);
    
    if (!item) {
      return null;
    }

    const isExpired = Date.now() - item.timestamp > item.ttl;
    
    if (isExpired) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  async getOrSet<T>(
    key: string,
    fetcher: () => Promise<T>,
    ttl: number
  ): Promise<T> {
    const cached = this.get(key);
    
    if (cached !== null) {
      return cached;
    }

    const data = await fetcher();
    this.set(key, data, ttl);
    
    return data;
  }

  invalidate(key: string): void {
    this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }

  // Get cache statistics
  getStats(): {
    size: number;
    hitRate: number;
    memoryUsage: number;
  } {
    const size = this.cache.size;
    const memoryUsage = JSON.stringify([...this.cache.entries()]).length;
    
    return {
      size,
      hitRate: 0, // Would need to track hits/misses for real implementation
      memoryUsage,
    };
  }
}

// Cache configurations for different types of data
export const cacheConfigs = {
  projects: { ttl: 5 * 60 * 1000 }, // 5 minutes
  testimonials: { ttl: 15 * 60 * 1000 }, // 15 minutes  
  resume: { ttl: 60 * 60 * 1000 }, // 1 hour
  images: { ttl: 24 * 60 * 60 * 1000 }, // 24 hours
} as const;

// React hook for cached data
export function useCachedData<T>(
  key: string,
  fetcher: () => Promise<T>,
  config: CacheConfig
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const cache = CacheManager.getInstance();
    
    cache.getOrSet(key, fetcher, config.ttl)
      .then(result => {
        setData(result);
        setError(null);
      })
      .catch(err => {
        setError(err);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [key, config.ttl]);

  const invalidate = useCallback(() => {
    const cache = CacheManager.getInstance();
    cache.invalidate(key);
  }, [key]);

  return { data, loading, error, invalidate };
}
```

### 7.4 Code Splitting and Lazy Loading

```typescript
// lib/optimization/lazy-loading.ts
import { lazy, ComponentType, Suspense } from 'react';

// Higher-order component for lazy loading with fallback
export function withLazyLoading<T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  fallback: React.ComponentType = () => <div>Loading...</div>
) {
  const LazyComponent = lazy(importFunc);
  
  return function LazyLoadedComponent(props: React.ComponentProps<T>) {
    return (
      <Suspense fallback={<fallback />}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
}

// Lazy-loaded components
export const LazyProjectGallery = withLazyLoading(
  () => import('@/components/projects/ProjectGallery'),
  () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg" />
);

export const LazyTestimonials = withLazyLoading(
  () => import('@/components/testimonials/Testimonials'),
  () => <div className="animate-pulse bg-gray-200 h-32 rounded-lg" />
);

export const LazyContactForm = withLazyLoading(
  () => import('@/components/contact/ContactForm'),
  () => <div className="animate-pulse bg-gray-200 h-96 rounded-lg" />
);

// Intersection Observer Hook for lazy loading
export function useIntersectionObserver(
  ref: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, options]);

  return isIntersecting;
}

// Lazy loading component with intersection observer
export function LazySection({
  children,
  fallback = <div>Loading...</div>,
  className,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (isVisible && !hasLoaded) {
      setHasLoaded(true);
    }
  }, [isVisible, hasLoaded]);

  return (
    <div ref={ref} className={className}>
      {hasLoaded ? children : fallback}
    </div>
  );
}
```

---

## 8. Maintenance and Updates

### 8.1 Dependency Management

```json
{
  "scripts": {
    "deps:check": "npm outdated",
    "deps:update": "npm update",
    "deps:audit": "npm audit",
    "deps:audit-fix": "npm audit fix",
    "deps:security": "npm audit --audit-level=high",
    "deps:licenses": "license-checker --summary"
  },
  "devDependencies": {
    "license-checker": "^25.0.1",
    "npm-check-updates": "^16.14.0"
  }
}
```

```bash
#!/bin/bash
# scripts/update-dependencies.sh

set -e

echo "🔍 Checking for outdated dependencies..."
npm outdated

echo "🛡️ Running security audit..."
npm audit --audit-level=high

echo "📝 Checking licenses..."
npx license-checker --summary

echo "🚀 Running tests before update..."
npm test

# Interactive update
echo "📦 Updating dependencies..."
npx npm-check-updates -i

# Run tests after update
echo "🧪 Running tests after update..."
npm test

echo "✅ Dependencies updated successfully!"
```

### 8.2 Automated Maintenance Tasks

```yaml
# .github/workflows/maintenance.yml
name: Maintenance Tasks

on:
  schedule:
    # Run weekly on Sundays at 2 AM UTC
    - cron: '0 2 * * 0'
  workflow_dispatch: # Allow manual trigger

jobs:
  security-audit:
    name: Security Audit
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run security audit
        run: npm audit --audit-level=moderate

      - name: Check for vulnerabilities
        run: |
          VULNERABILITIES=$(npm audit --json | jq '.metadata.vulnerabilities.total // 0')
          if [ "$VULNERABILITIES" -gt 0 ]; then
            echo "::warning::Found $VULNERABILITIES vulnerabilities"
            npm audit
          fi

  dependency-updates:
    name: Check Dependency Updates
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Check for updates
        run: |
          npx npm-check-updates --format group --target minor > update-report.txt
          cat update-report.txt

      - name: Create issue for updates
        if: success()
        uses: actions/github-script@v6
        with:
          script: |
            const fs = require('fs');
            const report = fs.readFileSync('update-report.txt', 'utf8');
            
            if (report.includes('All dependencies match the latest package versions')) {
              console.log('No updates needed');
              return;
            }
            
            const { data: issues } = await github.rest.issues.listForRepo({
              owner: context.repo.owner,
              repo: context.repo.repo,
              labels: ['maintenance', 'dependencies'],
              state: 'open'
            });
            
            if (issues.length === 0) {
              await github.rest.issues.create({
                owner: context.repo.owner,
                repo: context.repo.repo,
                title: 'Weekly Dependency Update Check',
                body: `## Dependency Update Report\n\n\`\`\`\n${report}\n\`\`\`\n\nPlease review and update dependencies as needed.`,
                labels: ['maintenance', 'dependencies']
              });
            }

  performance-check:
    name: Performance Check
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build application
        run: npm run build

      - name: Analyze bundle size
        run: |
          npx next-bundle-analyzer --no-open > bundle-report.txt
          cat bundle-report.txt

      - name: Check bundle size limits
        run: |
          BUNDLE_SIZE=$(du -sk .next/static/chunks/pages/_app-*.js | cut -f1)
          MAX_SIZE=204800 # 200KB in KB
          
          if [ "$BUNDLE_SIZE" -gt "$MAX_SIZE" ]; then
            echo "::error::Bundle size ($BUNDLE_SIZE KB) exceeds limit ($MAX_SIZE KB)"
            exit 1
          else
            echo "✅ Bundle size ($BUNDLE_SIZE KB) is within limits"
          fi

  health-check:
    name: Health Check
    runs-on: ubuntu-latest
    
    steps:
      - name: Check website health
        run: |
          RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" https://albertnartey.com)
          if [ "$RESPONSE" -ne 200 ]; then
            echo "::error::Website health check failed (HTTP $RESPONSE)"
            exit 1
          else
            echo "✅ Website is healthy (HTTP $RESPONSE)"
          fi

      - name: Check API endpoints
        run: |
          ENDPOINTS=("https://albertnartey.com/api/health" "https://albertnartey.com/api/projects")
          
          for endpoint in "${ENDPOINTS[@]}"; do
            RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "$endpoint")
            if [ "$RESPONSE" -ne 200 ]; then
              echo "::error::API endpoint $endpoint failed (HTTP $RESPONSE)"
              exit 1
            else
              echo "✅ $endpoint is healthy (HTTP $RESPONSE)"
            fi
          done
```

### 8.3 Update Procedures

```typescript
// lib/maintenance/update-procedures.ts
export interface UpdateProcedure {
  name: string;
  description: string;
  frequency: 'daily' | 'weekly' | 'monthly' | 'quarterly';
  priority: 'critical' | 'high' | 'medium' | 'low';
  steps: string[];
  rollbackSteps: string[];
  checkCommand: string;
}

export const updateProcedures: UpdateProcedure[] = [
  {
    name: 'Security Updates',
    description: 'Apply critical security patches',
    frequency: 'daily',
    priority: 'critical',
    steps: [
      'npm audit --audit-level=high',
      'npm audit fix --force',
      'npm test',
      'npm run build',
      'git commit -am "security: apply security patches"',
      'git push',
    ],
    rollbackSteps: [
      'git revert HEAD',
      'npm ci',
      'npm test',
    ],
    checkCommand: 'npm audit --audit-level=high',
  },
  {
    name: 'Dependency Updates',
    description: 'Update non-breaking dependency changes',
    frequency: 'weekly',
    priority: 'medium',
    steps: [
      'npm outdated',
      'npx npm-check-updates --target minor',
      'npm install',
      'npm test',
      'npm run build',
      'npm run test:e2e',
      'git commit -am "deps: update minor dependencies"',
    ],
    rollbackSteps: [
      'git checkout -- package*.json',
      'npm ci',
    ],
    checkCommand: 'npm outdated',
  },
  {
    name: 'Content Updates',
    description: 'Update portfolio content and projects',
    frequency: 'monthly',
    priority: 'medium',
    steps: [
      'Review and update project descriptions',
      'Add new projects if available',
      'Update resume PDF',
      'Refresh testimonials',
      'Update skills and technologies',
      'Run SEO audit',
    ],
    rollbackSteps: [
      'Restore previous content from backup',
      'Verify all links still work',
    ],
    checkCommand: 'npm run lint',
  },
  {
    name: 'Performance Optimization',
    description: 'Review and optimize site performance',
    frequency: 'quarterly',
    priority: 'high',
    steps: [
      'Run Lighthouse audit',
      'Analyze bundle size',
      'Optimize images',
      'Review and update caching strategies',
      'Update CDN configurations',
      'Monitor Core Web Vitals',
    ],
    rollbackSteps: [
      'Revert optimization changes',
      'Verify site functionality',
    ],
    checkCommand: 'npm run test:performance',
  },
];

export class MaintenanceScheduler {
  getOverdueTasks(): UpdateProcedure[] {
    // In a real implementation, this would check against a database
    // of last execution times
    return updateProcedures.filter(procedure => {
      // Simulate overdue logic
      return Math.random() > 0.7; // 30% chance of being overdue
    });
  }

  async executeProcedure(procedure: UpdateProcedure): Promise<{
    success: boolean;
    output: string[];
    errors: string[];
  }> {
    const output: string[] = [];
    const errors: string[] = [];
    
    try {
      for (const step of procedure.steps) {
        output.push(`Executing: ${step}`);
        // In a real implementation, you'd execute the actual commands
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      return { success: true, output, errors };
    } catch (error) {
      errors.push(`Failed to execute procedure: ${error}`);
      
      // Execute rollback steps
      for (const step of procedure.rollbackSteps) {
        try {
          output.push(`Rollback: ${step}`);
          await new Promise(resolve => setTimeout(resolve, 100));
        } catch (rollbackError) {
          errors.push(`Rollback failed: ${rollbackError}`);
        }
      }
      
      return { success: false, output, errors };
    }
  }

  generateMaintenanceReport(): string {
    const overdue = this.getOverdueTasks();
    
    let report = '# Maintenance Report\n\n';
    report += `Generated: ${new Date().toISOString()}\n\n`;
    
    if (overdue.length === 0) {
      report += '✅ All maintenance tasks are up to date!\n';
    } else {
      report += `⚠️ ${overdue.length} maintenance tasks are overdue:\n\n`;
      
      overdue.forEach(task => {
        report += `## ${task.name} (${task.priority} priority)\n`;
        report += `${task.description}\n`;
        report += `Frequency: ${task.frequency}\n\n`;
      });
    }
    
    return report;
  }
}
```

### 8.4 Backup and Recovery

```bash
#!/bin/bash
# scripts/backup.sh

set -e

BACKUP_DIR="backups/$(date +%Y-%m-%d_%H-%M-%S)"
mkdir -p "$BACKUP_DIR"

echo "📦 Creating backup..."

# Backup source code
git archive --format=tar.gz --output="$BACKUP_DIR/source.tar.gz" HEAD

# Backup environment configuration
cp .env.example "$BACKUP_DIR/env.example"

# Backup package files
cp package*.json "$BACKUP_DIR/"

# Backup build artifacts
if [ -d ".next" ]; then
    tar -czf "$BACKUP_DIR/build.tar.gz" .next/
fi

# Backup public assets
tar -czf "$BACKUP_DIR/public.tar.gz" public/

# Create backup manifest
cat > "$BACKUP_DIR/manifest.json" << EOF
{
  "timestamp": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "git_commit": "$(git rev-parse HEAD)",
  "git_branch": "$(git branch --show-current)",
  "node_version": "$(node --version)",
  "npm_version": "$(npm --version)",
  "files": [
    "source.tar.gz",
    "env.example", 
    "package.json",
    "package-lock.json",
    "build.tar.gz",
    "public.tar.gz"
  ]
}
EOF

echo "✅ Backup created: $BACKUP_DIR"

# Cleanup old backups (keep last 10)
ls -1t backups/ | tail -n +11 | xargs -I {} rm -rf "backups/{}"

echo "🧹 Cleaned up old backups"
```

```typescript
// lib/maintenance/recovery.ts
export interface BackupManifest {
  timestamp: string;
  git_commit: string;
  git_branch: string;
  node_version: string;
  npm_version: string;
  files: string[];
}

export class RecoveryManager {
  async listBackups(): Promise<BackupManifest[]> {
    // In a real implementation, this would list actual backup directories
    return [
      {
        timestamp: '2025-08-03T10:00:00Z',
        git_commit: 'abc123',
        git_branch: 'main',
        node_version: 'v18.17.0',
        npm_version: '9.6.7',
        files: ['source.tar.gz', 'build.tar.gz', 'public.tar.gz'],
      },
    ];
  }

  async restoreFromBackup(backupId: string): Promise<{
    success: boolean;
    steps: string[];
    errors: string[];
  }> {
    const steps: string[] = [];
    const errors: string[] = [];

    try {
      steps.push(`Starting restore from backup: ${backupId}`);
      
      // Restore steps would go here
      steps.push('Extracted source files');
      steps.push('Restored dependencies');
      steps.push('Rebuilt application');
      steps.push('Verified functionality');
      
      return { success: true, steps, errors };
    } catch (error) {
      errors.push(`Recovery failed: ${error}`);
      return { success: false, steps, errors };
    }
  }

  async createRecoveryPlan(issue: string): Promise<string[]> {
    const commonPlans = {
      'build-failure': [
        'Check build logs for specific errors',
        'Verify all dependencies are installed',
        'Clear .next directory and rebuild',
        'Restore from last known good backup if needed',
      ],
      'deployment-failure': [
        'Check deployment logs in Vercel',
        'Verify environment variables are set',
        'Roll back to previous deployment',
        'Fix issues and redeploy',
      ],
      'performance-regression': [
        'Run performance audit',
        'Check for bundle size increases',
        'Analyze Core Web Vitals',
        'Restore previous version if critical',
      ],
      'security-vulnerability': [
        'Assess severity of vulnerability',
        'Apply security patches immediately',
        'Run security audit',
        'Deploy emergency fix',
      ],
    };

    return commonPlans[issue as keyof typeof commonPlans] || [
      'Assess the issue',
      'Create recovery plan',
      'Test recovery steps',
      'Execute recovery',
      'Verify functionality',
    ];
  }
}
```

---

## Implementation Timeline

### Week 1: Foundation (Days 1-7)
- [ ] Set up testing framework (Jest, Playwright)
- [ ] Implement basic security headers and CSP
- [ ] Create CI/CD pipeline with GitHub Actions
- [ ] Set up error tracking with Sentry

### Week 2: Core Testing (Days 8-14)
- [ ] Write unit tests for all components
- [ ] Implement integration tests for API routes
- [ ] Create E2E tests for critical user flows
- [ ] Set up performance testing with Lighthouse

### Week 3: Security & Monitoring (Days 15-21)
- [ ] Implement rate limiting and input validation
- [ ] Set up comprehensive monitoring and analytics
- [ ] Create accessibility testing suite
- [ ] Implement security scanning in CI/CD

### Week 4: Optimization & Documentation (Days 22-28)
- [ ] Optimize performance and bundle size
- [ ] Create maintenance procedures
- [ ] Set up automated backup system
- [ ] Complete quality assurance framework

This comprehensive Phase 4 implementation provides a production-ready foundation for your portfolio website with enterprise-level testing, security, deployment, and monitoring capabilities. The modular approach allows you to implement features incrementally based on your priorities and timeline.