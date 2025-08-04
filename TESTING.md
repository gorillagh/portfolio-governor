# Testing Suite Documentation - Albert Nartey Portfolio

This comprehensive testing suite ensures the quality, performance, and accessibility of Albert Nartey's portfolio project. The testing strategy implements a multi-layered approach following industry best practices.

## Table of Contents

- [Overview](#overview)
- [Testing Architecture](#testing-architecture)
- [Getting Started](#getting-started)
- [Test Types](#test-types)
- [Running Tests](#running-tests)
- [CI/CD Pipeline](#cicd-pipeline)
- [Quality Gates](#quality-gates)
- [Maintenance Guidelines](#maintenance-guidelines)
- [Troubleshooting](#troubleshooting)

## Overview

### Testing Stack

- **Unit/Component Tests**: Jest + React Testing Library
- **E2E Tests**: Playwright with cross-browser support
- **Accessibility**: axe-core integration for WCAG 2.1 AA compliance
- **Performance**: Lighthouse CI + custom performance tests
- **API Mocking**: MSW (Mock Service Worker) for reliable testing
- **CI/CD**: GitHub Actions with comprehensive quality gates

### Quality Standards

- **Test Coverage**: 80%+ across components and utilities
- **Performance**: Lighthouse scores >90 for all categories
- **Accessibility**: WCAG 2.1 AA compliance
- **Browser Support**: Latest 2 versions of Chrome, Firefox, Safari, Edge
- **Cross-Platform**: Desktop and mobile viewports

## Testing Architecture

### Test Pyramid Structure

```
    E2E Tests (Few)
      ↑ Critical user journeys
      ↑ Cross-browser compatibility
      ↑ Performance metrics
    ----
  Integration Tests (Some)
    ↑ Component interactions
    ↑ Firebase services
    ↑ API endpoints
  ----
Unit Tests (Many)
  ↑ Component logic
  ↑ Utility functions
  ↑ Form validation
```

### Directory Structure

```
portfolio/
├── __tests__/                 # Unit & Component tests
│   ├── components/           # Component-specific tests  
│   ├── utils/               # Test utilities & helpers
│   └── setup/               # MSW configuration
├── e2e/                     # End-to-end tests
│   ├── utils/               # E2E helpers & page objects
│   ├── homepage.spec.ts     # Homepage user flows
│   ├── contact-form.spec.ts # Contact form testing
│   ├── navigation.spec.ts   # Navigation & routing
│   ├── accessibility.spec.ts # WCAG compliance
│   └── performance.spec.ts  # Performance metrics
├── jest.config.js           # Jest configuration
├── jest.setup.js           # Global test setup
├── playwright.config.ts    # Playwright configuration  
└── lighthouserc.js         # Lighthouse CI config
```

## Getting Started

### Prerequisites

```bash
# Install dependencies
pnpm install

# Install Playwright browsers
pnpm playwright install
```

### Environment Variables

Create `.env.test.local` for testing:

```env
# Firebase Test Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=test-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=test-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=test-project
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=test-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:test-app-id

# Email Configuration (Test)
RESEND_API_KEY=test-resend-key
CONTACT_EMAIL=test@example.com
```

## Test Types

### 1. Unit & Component Tests

**Location**: `__tests__/components/`
**Framework**: Jest + React Testing Library

**What we test**:
- Component rendering and props
- User interactions and state changes
- Form validation logic
- Accessibility attributes
- Error handling

**Example**:
```typescript
// ContactForm.test.tsx
test('validates email format', async () => {
  const user = userEvent.setup()
  render(<ContactForm />)
  
  await user.type(screen.getByLabelText(/email/i), 'invalid-email')
  await user.click(screen.getByRole('button', { name: /send/i }))
  
  expect(screen.getByText(/invalid email/i)).toBeInTheDocument()
})
```

### 2. End-to-End Tests

**Location**: `e2e/`
**Framework**: Playwright

**What we test**:
- Complete user journeys
- Cross-browser compatibility  
- Mobile responsiveness
- Real API interactions
- Performance metrics

**Example**:
```typescript
// contact-form.spec.ts
test('submits contact form successfully', async ({ page }) => {
  await helpers.navigateToContact()
  await helpers.fillContactForm(mockContactFormData)
  await helpers.submitContactForm()
  
  await helpers.waitForContactFormSuccess()
  expect(page.locator('.success-message')).toBeVisible()
})
```

### 3. Accessibility Tests

**Location**: `e2e/accessibility.spec.ts`
**Framework**: Playwright + axe-core

**What we test**:
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- Color contrast ratios
- Focus management

**Example**:
```typescript
test('homepage meets accessibility standards', async ({ page }) => {
  await helpers.navigateToHome()
  
  const violations = await getViolations(page, null, {
    rules: { 'color-contrast': { enabled: true } }
  })
  
  expect(violations.length).toBe(0)
})
```

### 4. Performance Tests

**Location**: `e2e/performance.spec.ts` + `lighthouserc.js`
**Framework**: Playwright + Lighthouse CI

**What we test**:
- Core Web Vitals (LCP, FID, CLS)
- Bundle size optimization
- Image loading efficiency
- JavaScript performance
- Mobile performance

**Example**:
```typescript
test('measures Core Web Vitals', async ({ page }) => {
  const vitals = await measureCoreWebVitals(page)
  
  expect(vitals.LCP).toBeLessThan(2500) // Good LCP: < 2.5s
  expect(vitals.CLS).toBeLessThan(0.1)  // Good CLS: < 0.1
})
```

## Running Tests

### Local Development

```bash
# Run all unit tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run with coverage report
pnpm test:coverage

# Run E2E tests
pnpm test:e2e

# Run E2E with UI mode (interactive)
pnpm test:e2e:ui

# Run specific test suites
pnpm test:accessibility
pnpm test:performance

# Run Lighthouse CI
pnpm lighthouse

# Run complete test suite
pnpm test:all
```

### Debug Mode

```bash
# Debug E2E tests with browser UI
pnpm test:e2e:debug

# Debug specific test file
pnpm test ContactForm.test.tsx

# Debug with specific browser
pnpm playwright test --project=firefox --debug
```

### Cross-Browser Testing

```bash
# Test across all browsers
pnpm playwright test

# Test specific browser
pnpm playwright test --project=chromium
pnpm playwright test --project=firefox
pnpm playwright test --project=webkit
```

## CI/CD Pipeline

### GitHub Actions Workflow

The CI/CD pipeline consists of several stages:

1. **Quality Gates** - Linting, type checking, build verification
2. **Unit Tests** - Component and utility testing with coverage
3. **E2E Tests** - Cross-browser functional testing  
4. **Accessibility Tests** - WCAG compliance validation
5. **Performance Tests** - Lighthouse CI and performance metrics
6. **Security Scan** - Dependency audit and CodeQL analysis
7. **Bundle Analysis** - Size monitoring and optimization
8. **Deployment** - Preview (PRs) and Production (main branch)

### Quality Gates

Tests must pass these criteria:

#### Code Quality
- TypeScript compilation: ✅ No errors
- ESLint: ✅ No errors
- Prettier: ✅ Consistent formatting
- Build: ✅ Successful build

#### Test Coverage
- Unit tests: ✅ 80%+ coverage
- Critical paths: ✅ 100% coverage
- E2E tests: ✅ All critical flows

#### Performance
- Lighthouse Performance: ✅ Score > 90
- First Contentful Paint: ✅ < 1.8s
- Largest Contentful Paint: ✅ < 2.5s
- Cumulative Layout Shift: ✅ < 0.1

#### Accessibility
- WCAG 2.1 AA: ✅ No violations
- Color contrast: ✅ 4.5:1 minimum
- Keyboard navigation: ✅ Full support
- Screen reader: ✅ Proper labels

## Maintenance Guidelines

### Adding New Tests

#### Component Tests

1. Create test file: `__tests__/components/NewComponent.test.tsx`
2. Import test utilities: `from '@/__tests__/utils/test-utils'`
3. Follow testing patterns:
   - Rendering tests
   - Interaction tests  
   - Accessibility tests
   - Error handling tests

#### E2E Tests

1. Add to appropriate spec file in `e2e/`
2. Use page helpers: `PortfolioPageHelpers`
3. Follow user journey patterns
4. Include mobile and desktop tests

### Updating Tests

#### When Component Changes
- Update component tests to match new behavior
- Verify E2E tests still pass
- Update snapshots if UI changes significantly

#### When Adding New Features
- Add unit tests for new functionality
- Create E2E tests for new user flows
- Update accessibility tests for new interactive elements
- Add performance tests if impacting load time

### Test Maintenance Schedule

#### Weekly
- Review test failure patterns
- Update outdated snapshots
- Check performance regression trends

#### Monthly  
- Review test coverage reports
- Update test dependencies
- Analyze slow test performance
- Review accessibility compliance

#### Quarterly
- Full test suite audit
- Browser compatibility review
- Performance benchmark updates
- Test utility refactoring

## Troubleshooting

### Common Issues

#### Test Failures

**Flaky E2E Tests**:
```bash
# Run with retries
pnpm playwright test --retries=3

# Check for timing issues
await page.waitForLoadState('networkidle')
await helpers.waitForAnimation()
```

**Component Test Failures**:
```bash
# Debug with verbose output
pnpm test --verbose ComponentName

# Update snapshots
pnpm test --updateSnapshot
```

#### Performance Issues

**Slow Test Execution**:
- Use `test.concurrent()` for independent tests
- Mock expensive operations
- Limit E2E test scope to critical paths

**Lighthouse Failures**:
- Check for blocking resources
- Verify image optimization
- Review bundle size increases

#### Accessibility Issues

**axe-core Violations**:
- Review specific violation details
- Test with actual screen readers
- Verify keyboard navigation manually

### Getting Help

1. **Documentation**: Check test comments and this guide
2. **Debug Mode**: Use `--debug` flags for interactive debugging
3. **Logs**: Review test output and CI logs
4. **Community**: Playwright, Jest, and React Testing Library docs

### Best Practices

#### Test Writing
- Write descriptive test names
- Test user behavior, not implementation
- Use data-testid for stable selectors
- Mock external dependencies consistently

#### Performance
- Run tests in parallel when possible
- Use test.beforeAll for expensive setup
- Clean up after tests to prevent memory leaks

#### Maintenance
- Keep tests simple and focused
- Update tests when requirements change
- Remove obsolete tests promptly
- Document complex test logic

---

## Summary

This comprehensive testing suite provides confidence in the portfolio's quality through:

- **Multi-layered testing** covering units, integration, and E2E scenarios
- **Automated quality gates** preventing regressions
- **Performance monitoring** ensuring optimal user experience
- **Accessibility compliance** making the site inclusive
- **Cross-browser support** reaching all users
- **Comprehensive CI/CD** automating quality assurance

The testing infrastructure is designed to scale with the project while maintaining high quality standards and developer productivity.

For questions or improvements to this testing suite, please refer to the project documentation or open an issue.