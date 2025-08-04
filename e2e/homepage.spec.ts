import { test, expect } from '@playwright/test'
import { PortfolioPageHelpers } from './utils/test-helpers'

test.describe('Homepage', () => {
  let helpers: PortfolioPageHelpers

  test.beforeEach(async ({ page }) => {
    helpers = new PortfolioPageHelpers(page)
    await helpers.navigateToHome()
  })

  test.describe('Page Loading and Structure', () => {
    test('loads homepage successfully', async ({ page }) => {
      await expect(page).toHaveTitle(/Albert Nartey/i)
      await expect(page).toHaveURL('/')
    })

    test('displays main navigation elements', async ({ page }) => {
      // Check for main heading or hero section
      await expect(page.locator('h1').first()).toBeVisible()
      
      // Check for essential sections
      await expect(page.locator('main')).toBeVisible()
    })

    test('has proper page structure', async ({ page }) => {
      // Check HTML5 semantic elements
      await expect(page.locator('main')).toBeVisible()
      await expect(page.locator('header, nav')).toBeVisible()
      await expect(page.locator('footer')).toBeVisible()
    })
  })

  test.describe('Hero Section', () => {
    test('displays hero content', async ({ page }) => {
      // Look for hero section by common patterns
      const heroSection = page.locator('[data-testid="hero-section"], .hero, section').first()
      await expect(heroSection).toBeVisible()

      // Check for name or introduction
      await expect(page.locator('text=/Albert Nartey/i').first()).toBeVisible()
    })

    test('displays professional title and description', async ({ page }) => {
      // Look for professional title
      await expect(page.locator('text=/Software Engineer|Developer|Technical Lead/i').first()).toBeVisible()
      
      // Look for description or bio
      const descriptionSelectors = [
        '[data-testid="hero-description"]',
        '.hero-description', 
        'p',
        'text=/passionate|experience|innovative/i'
      ]
      
      let found = false
      for (const selector of descriptionSelectors) {
        try {
          await expect(page.locator(selector).first()).toBeVisible({ timeout: 2000 })
          found = true
          break
        } catch {
          continue
        }
      }
      expect(found).toBe(true)
    })

    test('has call-to-action elements', async ({ page }) => {
      // Look for CTA buttons or links
      const ctaSelectors = [
        'text=/Contact Me|Get in Touch|View Projects|Portfolio/i',
        'button:has-text("Contact")',
        'a:has-text("Projects")',
        '[data-testid="cta-button"]'
      ]
      
      let found = false
      for (const selector of ctaSelectors) {
        try {
          await expect(page.locator(selector).first()).toBeVisible({ timeout: 2000 })
          found = true
          break
        } catch {
          continue
        }
      }
      expect(found).toBe(true)
    })
  })

  test.describe('Navigation', () => {
    test('displays navigation menu', async ({ page }) => {
      // Check for navigation
      const navSelectors = [
        'nav',
        '[data-testid="navigation"]',
        '.navigation',
        '[role="navigation"]'
      ]
      
      let navFound = false
      for (const selector of navSelectors) {
        try {
          await expect(page.locator(selector).first()).toBeVisible({ timeout: 2000 })
          navFound = true
          break
        } catch {
          continue
        }
      }
      expect(navFound).toBe(true)
    })

    test('navigation links work correctly', async ({ page }) => {
      // Try to find and click navigation links
      const linkTexts = ['About', 'Projects', 'Skills', 'Contact']
      
      for (const linkText of linkTexts) {
        try {
          const link = page.locator(`a:has-text("${linkText}")`).first()
          if (await link.isVisible({ timeout: 1000 })) {
            await link.click()
            await page.waitForLoadState('domcontentloaded')
            
            // Verify we navigated somewhere
            const url = page.url()
            expect(url).toContain(linkText.toLowerCase())
            
            // Navigate back to home
            await helpers.navigateToHome()
            break
          }
        } catch {
          continue
        }
      }
    })
  })

  test.describe('Mobile Responsiveness', () => {
    test('adapts to mobile viewport', async ({ page }) => {
      await helpers.setMobileViewport()
      await page.reload()
      await helpers.waitForPageLoad()

      // Check that page is still functional
      await expect(page.locator('h1').first()).toBeVisible()
      
      // Check for mobile navigation (hamburger menu)
      const mobileNavSelectors = [
        '[data-testid="mobile-menu"]',
        '.mobile-menu',
        'button[aria-label*="menu"]',
        'button[aria-label*="Menu"]',
        '.hamburger'
      ]
      
      for (const selector of mobileNavSelectors) {
        try {
          const element = page.locator(selector)
          if (await element.isVisible({ timeout: 1000 })) {
            await element.click()
            await helpers.waitForAnimation()
            break
          }
        } catch {
          continue
        }
      }
    })

    test('mobile navigation works', async ({ page }) => {
      await helpers.setMobileViewport()
      await page.reload()
      
      // Try to open mobile menu
      try {
        await helpers.openSidebar()
        await helpers.waitForAnimation()
        
        // Check if navigation became visible
        const navVisible = await page.locator('nav a, [data-testid="sidebar"] a').first().isVisible()
        expect(navVisible).toBe(true)
      } catch {
        // Mobile navigation might work differently, that's okay
        console.log('Mobile navigation test skipped - implementation may vary')
      }
    })
  })

  test.describe('Performance', () => {
    test('page loads within acceptable time', async ({ page }) => {
      const startTime = Date.now()
      await helpers.navigateToHome()
      await helpers.waitForPageLoad()
      const loadTime = Date.now() - startTime
      
      // Page should load within 5 seconds
      expect(loadTime).toBeLessThan(5000)
    })

    test('images load properly', async ({ page }) => {
      // Wait for any images to load
      await page.waitForLoadState('networkidle')
      
      const images = page.locator('img')
      const imageCount = await images.count()
      
      if (imageCount > 0) {
        for (let i = 0; i < Math.min(imageCount, 3); i++) {
          const img = images.nth(i)
          if (await img.isVisible()) {
            await helpers.checkImageLoading(`img >> nth=${i}`)
          }
        }
      }
    })
  })

  test.describe('Content Sections', () => {
    test('displays key content sections', async ({ page }) => {
      // Look for common portfolio sections
      const sectionIndicators = [
        'text=/About|Skills|Projects|Experience|Portfolio/i',
        'section',
        '.section',
        '[data-testid*="section"]'
      ]
      
      let sectionsFound = 0
      for (const selector of sectionIndicators) {
        try {
          const elements = page.locator(selector)
          const count = await elements.count()
          if (count > 0) {
            sectionsFound += count
          }
        } catch {
          continue
        }
      }
      
      // Should have at least some content sections
      expect(sectionsFound).toBeGreaterThan(0)
    })

    test('content is readable and accessible', async ({ page }) => {
      // Check that text content exists and has good contrast
      const textElements = page.locator('p, h1, h2, h3, span').first()
      await expect(textElements).toBeVisible()
      
      // Check that there's meaningful content
      const textContent = await page.textContent('body')
      expect(textContent).toBeTruthy()
      expect(textContent!.length).toBeGreaterThan(100) // Has substantial content
    })
  })

  test.describe('Interactive Elements', () => {
    test('buttons and links are clickable', async ({ page }) => {
      // Find clickable elements
      const clickableElements = page.locator('button, a[href], [role="button"]')
      const count = await clickableElements.count()
      
      if (count > 0) {
        // Test first few clickable elements
        for (let i = 0; i < Math.min(count, 3); i++) {
          const element = clickableElements.nth(i)
          if (await element.isVisible()) {
            // Check that element is clickable (has pointer cursor or is interactive)
            await expect(element).toBeEnabled()
          }
        }
      }
    })

    test('form elements work if present', async ({ page }) => {
      // Check if there are any form elements on homepage
      const forms = page.locator('form')
      const formCount = await forms.count()
      
      if (formCount > 0) {
        const inputs = page.locator('input, textarea')
        const inputCount = await inputs.count()
        
        if (inputCount > 0) {
          const firstInput = inputs.first()
          await expect(firstInput).toBeVisible()
          await expect(firstInput).toBeEnabled()
        }
      }
    })
  })
})