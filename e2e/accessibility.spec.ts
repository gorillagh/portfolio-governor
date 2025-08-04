import { test, expect } from '@playwright/test'
import { injectAxe, checkA11y, getViolations } from 'axe-playwright'
import { PortfolioPageHelpers } from './utils/test-helpers'

test.describe('Accessibility Tests', () => {
  let helpers: PortfolioPageHelpers

  test.beforeEach(async ({ page }) => {
    helpers = new PortfolioPageHelpers(page)
    await injectAxe(page)
  })

  test.describe('WCAG 2.1 AA Compliance', () => {
    test('homepage meets accessibility standards', async ({ page }) => {
      await helpers.navigateToHome()
      await helpers.waitForPageLoad()
      
      const violations = await getViolations(page, null, {
        rules: {
          // Configure rules for WCAG 2.1 AA
          'color-contrast': { enabled: true },
          'keyboard-navigation': { enabled: true },
          'focus-visible': { enabled: true },
          'heading-order': { enabled: true },
          'image-alt': { enabled: true },
          'label': { enabled: true },
          'landmark-one-main': { enabled: true },
          'page-has-heading-one': { enabled: true },
          'region': { enabled: true }
        }
      })
      
      expect(violations.length).toBe(0)
    })

    test('about page meets accessibility standards', async ({ page }) => {
      await helpers.navigateToAbout()
      await helpers.waitForPageLoad()
      
      const violations = await getViolations(page, null, {
        rules: {
          'color-contrast': { enabled: true },
          'heading-order': { enabled: true },
          'image-alt': { enabled: true },
          'label': { enabled: true },
          'region': { enabled: true }
        }
      })
      
      expect(violations.length).toBe(0)
    })

    test('projects page meets accessibility standards', async ({ page }) => {
      await helpers.navigateToProjects()
      await helpers.waitForPageLoad()
      
      const violations = await getViolations(page, null, {
        rules: {
          'color-contrast': { enabled: true },
          'image-alt': { enabled: true },
          'button-name': { enabled: true },
          'link-name': { enabled: true },
          'focus-visible': { enabled: true }
        }
      })
      
      expect(violations.length).toBe(0)
    })

    test('skills page meets accessibility standards', async ({ page }) => {
      await helpers.navigateToSkills()
      await helpers.waitForPageLoad()
      
      const violations = await getViolations(page, null, {
        rules: {
          'color-contrast': { enabled: true },
          'heading-order': { enabled: true },
          'region': { enabled: true }
        }
      })
      
      expect(violations.length).toBe(0)
    })

    test('contact page meets accessibility standards', async ({ page }) => {
      await helpers.navigateToContact()
      await helpers.waitForPageLoad()
      
      const violations = await getViolations(page, null, {
        rules: {
          'color-contrast': { enabled: true },
          'form-field-multiple-labels': { enabled: true },
          'label': { enabled: true },
          'input-button-name': { enabled: true },
          'focus-visible': { enabled: true }
        }
      })
      
      expect(violations.length).toBe(0)
    })
  })

  test.describe('Keyboard Navigation', () => {
    test('can navigate entire site using only keyboard', async ({ page }) => {
      await helpers.navigateToHome()
      
      // Tab through focusable elements
      let tabCount = 0
      const maxTabs = 20 // Prevent infinite loop
      
      while (tabCount < maxTabs) {
        await page.keyboard.press('Tab')
        tabCount++
        
        const focusedElement = await page.evaluate(() => {
          const active = document.activeElement
          return {
            tagName: active?.tagName,
            role: active?.getAttribute('role'),
            ariaLabel: active?.getAttribute('aria-label'),
            text: active?.textContent?.trim().substring(0, 50)
          }
        })
        
        // Should always have a focused element
        expect(focusedElement.tagName).toBeTruthy()
        
        // If we reach a navigation link, test it
        if (focusedElement.tagName === 'A' && focusedElement.text?.includes('About')) {
          await page.keyboard.press('Enter')
          await page.waitForLoadState('domcontentloaded')
          expect(page.url()).toContain('about')
          break
        }
      }
    })

    test('skip links work properly', async ({ page }) => {
      await helpers.navigateToHome()
      
      // Tab to first element (usually skip link)
      await page.keyboard.press('Tab')
      
      const focusedElement = await page.locator(':focus')
      const text = await focusedElement.textContent()
      
      if (text && (text.includes('Skip') || text.includes('skip'))) {
        await page.keyboard.press('Enter')
        
        // Should jump to main content
        const newFocusedElement = await page.locator(':focus')
        const newText = await newFocusedElement.textContent()
        
        expect(newText).not.toBe(text) // Focus should have moved
      }
    })

    test('focus order is logical', async ({ page }) => {
      await helpers.navigateToContact()
      await helpers.waitForPageLoad()
      
      const focusOrder = []
      
      // Tab through form elements
      for (let i = 0; i < 10; i++) {
        await page.keyboard.press('Tab')
        
        const focusedElement = await page.evaluate(() => {
          const active = document.activeElement
          return {
            id: active?.id,
            name: active?.getAttribute('name'),
            tagName: active?.tagName,
            type: active?.getAttribute('type')
          }
        })
        
        if (focusedElement.tagName === 'INPUT' || focusedElement.tagName === 'TEXTAREA' || focusedElement.tagName === 'BUTTON') {
          focusOrder.push(focusedElement)
        }
      }
      
      // Form focus order should be logical (name -> email -> subject -> message -> submit)
      const expectedOrder = ['name', 'email', 'subject', 'message']
      let orderIndex = 0
      
      for (const element of focusOrder) {
        if (element.name === expectedOrder[orderIndex] || element.id === expectedOrder[orderIndex]) {
          orderIndex++
        }
      }
      
      expect(orderIndex).toBeGreaterThan(2) // At least some logical order
    })

    test('modal focus management works', async ({ page }) => {
      await helpers.navigateToProjects()
      await helpers.waitForPageLoad()
      
      // Look for project cards and click one
      const projectCards = page.locator('[data-testid="project-card"], .project-card, article')
      const cardCount = await projectCards.count()
      
      if (cardCount > 0) {
        await projectCards.first().click()
        await helpers.waitForAnimation()
        
        // Check if modal opened
        const modal = page.locator('[data-testid="project-modal"], .modal, [role="dialog"]')
        
        if (await modal.count() > 0) {
          // Focus should be trapped in modal
          await page.keyboard.press('Tab')
          
          const focusedElement = await page.locator(':focus')
          const focusedParent = await focusedElement.evaluate(el => {
            let parent = el.parentElement
            while (parent) {
              if (parent.classList.contains('modal') || parent.getAttribute('role') === 'dialog') {
                return true
              }
              parent = parent.parentElement
            }
            return false
          })
          
          expect(focusedParent).toBe(true)
          
          // Close modal with Escape
          await page.keyboard.press('Escape')
          await helpers.waitForAnimation()
          
          // Modal should be closed
          expect(await modal.count()).toBe(0)
        }
      }
    })
  })

  test.describe('Screen Reader Support', () => {
    test('has proper heading hierarchy', async ({ page }) => {
      await helpers.navigateToHome()
      
      const headings = await page.locator('h1, h2, h3, h4, h5, h6').all()
      const headingLevels = []
      
      for (const heading of headings) {
        const tagName = await heading.evaluate(el => el.tagName)
        const level = parseInt(tagName[1])
        headingLevels.push(level)
      }
      
      // Should start with h1
      expect(headingLevels[0]).toBe(1)
      
      // Should not skip levels
      for (let i = 1; i < headingLevels.length; i++) {
        const diff = headingLevels[i] - headingLevels[i - 1]
        expect(diff).toBeLessThanOrEqual(1) // Should not skip more than one level
      }
    })

    test('images have proper alt text', async ({ page }) => {
      await helpers.navigateToHome()
      
      const images = await page.locator('img').all()
      
      for (const img of images) {
        const alt = await img.getAttribute('alt')
        const role = await img.getAttribute('role')
        
        // Images should have alt text or be marked as decorative
        if (role !== 'presentation' && role !== 'none') {
          expect(alt).toBeTruthy()
          expect(alt!.length).toBeGreaterThan(0)
        }
      }
    })

    test('form fields have proper labels', async ({ page }) => {
      await helpers.navigateToContact()
      
      const formFields = await page.locator('input, textarea, select').all()
      
      for (const field of formFields) {
        const id = await field.getAttribute('id')
        const ariaLabel = await field.getAttribute('aria-label')
        const ariaLabelledBy = await field.getAttribute('aria-labelledby')
        
        let hasLabel = false
        
        if (ariaLabel || ariaLabelledBy) {
          hasLabel = true
        } else if (id) {
          const label = await page.locator(`label[for="${id}"]`).count()
          if (label > 0) {
            hasLabel = true
          }
        }
        
        // Skip hidden fields like honeypot
        const type = await field.getAttribute('type')
        const style = await field.getAttribute('style')
        
        if (type !== 'hidden' && !style?.includes('display: none')) {
          expect(hasLabel).toBe(true)
        }
      }
    })

    test('buttons have accessible names', async ({ page }) => {
      await helpers.navigateToHome()
      
      const buttons = await page.locator('button, [role="button"]').all()
      
      for (const button of buttons) {
        const text = await button.textContent()
        const ariaLabel = await button.getAttribute('aria-label')
        const ariaLabelledBy = await button.getAttribute('aria-labelledby')
        
        const hasAccessibleName = 
          (text && text.trim().length > 0) ||
          (ariaLabel && ariaLabel.length > 0) ||
          ariaLabelledBy
        
        expect(hasAccessibleName).toBe(true)
      }
    })

    test('links have accessible names', async ({ page }) => {
      await helpers.navigateToHome()
      
      const links = await page.locator('a').all()
      
      for (const link of links) {
        const text = await link.textContent()
        const ariaLabel = await link.getAttribute('aria-label')
        const title = await link.getAttribute('title')
        
        const hasAccessibleName = 
          (text && text.trim().length > 0) ||
          (ariaLabel && ariaLabel.length > 0) ||
          (title && title.length > 0)
        
        expect(hasAccessibleName).toBe(true)
      }
    })
  })

  test.describe('Color and Contrast', () => {
    test('meets color contrast requirements', async ({ page }) => {
      await helpers.navigateToHome()
      
      // Use axe to check color contrast
      const violations = await getViolations(page, null, {
        rules: {
          'color-contrast': { enabled: true }
        }
      })
      
      expect(violations.length).toBe(0)
    })

    test('information is not conveyed by color alone', async ({ page }) => {
      await helpers.navigateToHome()
      
      // Check for elements that might rely on color alone
      const violations = await getViolations(page, null, {
        rules: {
          'color-contrast': { enabled: true },
          'link-in-text-block': { enabled: true }
        }
      })
      
      expect(violations.length).toBe(0)
    })
  })

  test.describe('Responsive Accessibility', () => {
    test('remains accessible on mobile', async ({ page }) => {
      await helpers.setMobileViewport()
      await helpers.navigateToHome()
      await helpers.waitForPageLoad()
      
      const violations = await getViolations(page, null, {
        rules: {
          'color-contrast': { enabled: true },
          'tap-target-size': { enabled: true },
          'focus-visible': { enabled: true }
        }
      })
      
      expect(violations.length).toBe(0)
    })

    test('touch targets are appropriately sized', async ({ page }) => {
      await helpers.setMobileViewport()
      await helpers.navigateToContact()
      
      const touchTargets = await page.locator('button, a, input, [role="button"]').all()
      
      for (const target of touchTargets) {
        if (await target.isVisible()) {
          const box = await target.boundingBox()
          if (box) {
            // WCAG recommends minimum 44x44px touch targets
            expect(box.height).toBeGreaterThanOrEqual(40) // Allow some tolerance
            expect(box.width).toBeGreaterThanOrEqual(40)
          }
        }
      }
    })
  })

  test.describe('Dynamic Content Accessibility', () => {
    test('dynamic content changes are announced', async ({ page }) => {
      await helpers.navigateToContact()
      
      // Fill form with invalid data to trigger validation
      await page.fill('#name, input[name="name"]', 'A')
      await page.fill('#email, input[name="email"]', 'invalid')
      await page.click('button[type="submit"]')
      
      await page.waitForTimeout(1000)
      
      // Check for ARIA live regions
      const liveRegions = await page.locator('[aria-live], [role="alert"], [role="status"]').count()
      
      // Should have some mechanism for announcing changes
      if (liveRegions === 0) {
        // Check if errors are associated with fields via aria-describedby
        const errorElements = await page.locator('.error, .text-red-500, [data-testid*="error"]').count()
        expect(errorElements).toBeGreaterThan(0)
      }
    })

    test('loading states are accessible', async ({ page }) => {
      await helpers.navigateToContact()
      
      // Fill and submit form
      await helpers.fillContactForm({
        name: 'Test User',
        email: 'test@example.com',
        subject: 'Test Subject',
        message: 'This is a test message for accessibility testing.'
      })
      
      await page.click('button[type="submit"]')
      
      // Check for loading state accessibility
      const loadingButton = page.locator('button[disabled], [aria-busy="true"], text=/sending|loading/i')
      
      if (await loadingButton.count() > 0) {
        const ariaLabel = await loadingButton.first().getAttribute('aria-label')
        const text = await loadingButton.first().textContent()
        
        expect(ariaLabel || (text && text.includes('sending'))).toBeTruthy()
      }
    })
  })

  test.describe('Focus Management', () => {
    test('focus is visible and clear', async ({ page }) => {
      await helpers.navigateToHome()
      
      // Tab through elements and check focus visibility
      const focusableElements = await page.locator('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])').all()
      
      for (let i = 0; i < Math.min(5, focusableElements.length); i++) {
        await page.keyboard.press('Tab')
        
        const focusedElement = await page.locator(':focus')
        
        // Check if focus is visible (has outline or other focus indicator)
        const styles = await focusedElement.evaluate(el => {
          const computed = window.getComputedStyle(el)
          return {
            outline: computed.outline,
            boxShadow: computed.boxShadow,
            border: computed.border
          }
        })
        
        const hasFocusIndicator = 
          styles.outline !== 'none' ||
          styles.boxShadow !== 'none' ||
          styles.border.includes('rgb') // Colored border
        
        expect(hasFocusIndicator).toBe(true)
      }
    })

    test('focus does not get trapped inappropriately', async ({ page }) => {
      await helpers.navigateToHome()
      
      let previousFocus = null
      let sameCount = 0
      
      // Tab through page
      for (let i = 0; i < 10; i++) {
        await page.keyboard.press('Tab')
        
        const currentFocus = await page.evaluate(() => {
          const active = document.activeElement
          return active?.tagName + (active?.id ? '#' + active.id : '')
        })
        
        if (currentFocus === previousFocus) {
          sameCount++
        } else {
          sameCount = 0
        }
        
        // Focus shouldn't be stuck in one place (unless it's intentional like a modal)
        expect(sameCount).toBeLessThan(3)
        
        previousFocus = currentFocus
      }
    })
  })
})