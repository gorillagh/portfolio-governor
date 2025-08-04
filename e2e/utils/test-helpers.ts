import { Page, Locator, expect } from '@playwright/test'

// Page Object Model helpers
export class PortfolioPageHelpers {
  constructor(private page: Page) {}

  // Navigation helpers
  async navigateToHome() {
    await this.page.goto('/')
    await this.page.waitForLoadState('domcontentloaded')
  }

  async navigateToAbout() {
    await this.page.goto('/about')
    await this.page.waitForLoadState('domcontentloaded')
  }

  async navigateToProjects() {
    await this.page.goto('/projects')
    await this.page.waitForLoadState('domcontentloaded')
  }

  async navigateToSkills() {
    await this.page.goto('/skills')
    await this.page.waitForLoadState('domcontentloaded')
  }

  async navigateToContact() {
    await this.page.goto('/contact')
    await this.page.waitForLoadState('domcontentloaded')
  }

  // Sidebar helpers
  async openSidebar() {
    const trigger = this.page.locator('[data-testid="sidebar-trigger"], .menu-trigger, button[aria-label*="menu"]').first()
    if (await trigger.isVisible()) {
      await trigger.click()
    }
  }

  async closeSidebar() {
    const closeButton = this.page.locator('[data-testid="sidebar-close"], .sidebar-close').first()
    if (await closeButton.isVisible()) {
      await closeButton.click()
    } else {
      // Click overlay to close
      const overlay = this.page.locator('.sidebar-overlay, [data-testid="sidebar-overlay"]').first()
      if (await overlay.isVisible()) {
        await overlay.click()
      }
    }
  }

  async clickSidebarLink(linkText: string) {
    await this.page.locator(`nav a:has-text("${linkText}"), [data-testid="sidebar"] a:has-text("${linkText}")`).first().click()
  }

  // Contact form helpers
  async fillContactForm(data: {
    name: string
    email: string
    company?: string
    inquiryType?: string
    subject: string
    message: string
  }) {
    await this.page.fill('#name', data.name)
    await this.page.fill('#email', data.email)
    
    if (data.company) {
      await this.page.fill('#company', data.company)
    }
    
    if (data.inquiryType) {
      await this.page.selectOption('#inquiryType', data.inquiryType)
    }
    
    await this.page.fill('#subject', data.subject)
    await this.page.fill('#message', data.message)
  }

  async submitContactForm() {
    await this.page.click('button[type="submit"]:has-text("Send Message")')
  }

  async waitForContactFormSuccess() {
    await this.page.waitForSelector('.text-green-400:has-text("Thank you"), [data-testid="success-message"]', {
      timeout: 10000
    })
  }

  // Project helpers
  async filterProjectsByCategory(category: string) {
    await this.page.click(`button:has-text("${category}"), [data-testid="filter-${category}"]`)
    await this.page.waitForTimeout(500) // Wait for animation
  }

  async clickProject(projectTitle: string) {
    await this.page.click(`[data-testid="project-card"]:has-text("${projectTitle}"), .project-card:has-text("${projectTitle}")`)
  }

  async waitForProjectModal() {
    await this.page.waitForSelector('[data-testid="project-modal"], .project-modal', {
      timeout: 5000
    })
  }

  async closeProjectModal() {
    // Try multiple ways to close modal
    const closeButton = this.page.locator('[data-testid="modal-close"], .modal-close, button[aria-label="Close"]').first()
    if (await closeButton.isVisible()) {
      await closeButton.click()
    } else {
      await this.page.keyboard.press('Escape')
    }
  }

  // Scroll helpers
  async scrollToElement(selector: string) {
    await this.page.locator(selector).scrollIntoViewIfNeeded()
  }

  async scrollToTop() {
    await this.page.evaluate(() => window.scrollTo(0, 0))
  }

  async scrollToBottom() {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  }

  // Responsive helpers
  async setMobileViewport() {
    await this.page.setViewportSize({ width: 375, height: 667 })
  }

  async setTabletViewport() {
    await this.page.setViewportSize({ width: 768, height: 1024 })
  }

  async setDesktopViewport() {
    await this.page.setViewportSize({ width: 1920, height: 1080 })
  }

  // Wait helpers
  async waitForAnimation() {
    await this.page.waitForTimeout(300)
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle')
  }

  async waitForElementVisible(selector: string, timeout = 5000) {
    await this.page.waitForSelector(selector, { state: 'visible', timeout })
  }

  // Accessibility helpers
  async checkAriaLabel(selector: string, expectedLabel: string) {
    const element = this.page.locator(selector)
    await expect(element).toHaveAttribute('aria-label', expectedLabel)
  }

  async checkAriaExpanded(selector: string, expected: boolean) {
    const element = this.page.locator(selector)
    await expect(element).toHaveAttribute('aria-expanded', expected.toString())
  }

  async checkFocusOrder(selectors: string[]) {
    for (let i = 0; i < selectors.length; i++) {
      await this.page.keyboard.press('Tab')
      const focused = await this.page.evaluate(() => document.activeElement?.getAttribute('data-testid') || document.activeElement?.tagName.toLowerCase())
      // This is a simplified check - you might need more sophisticated focus checking
    }
  }

  // Performance helpers
  async measurePageLoadTime(): Promise<number> {
    const start = Date.now()
    await this.page.waitForLoadState('networkidle')
    return Date.now() - start
  }

  async checkImageLoading(selector: string) {
    const image = this.page.locator(selector)
    await expect(image).toBeVisible()
    
    // Check if image has loaded
    const naturalWidth = await image.evaluate((img: HTMLImageElement) => img.naturalWidth)
    expect(naturalWidth).toBeGreaterThan(0)
  }
}

// Utility functions
export const mockContactFormData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  company: 'Test Company',
  inquiryType: 'consulting',
  subject: 'Website Development Project',
  message: 'I would like to discuss a potential website development project for my business. Please contact me at your earliest convenience.'
}

export const mockInvalidContactFormData = {
  name: '', // Invalid - empty
  email: 'invalid-email', // Invalid format
  subject: 'Hi', // Too short
  message: 'Short' // Too short
}

// Custom matchers for portfolio-specific assertions
export const customExpects = {
  async toHaveValidContactForm(page: Page) {
    // Check form structure
    await expect(page.locator('#name')).toBeVisible()
    await expect(page.locator('#email')).toBeVisible()
    await expect(page.locator('#subject')).toBeVisible()
    await expect(page.locator('#message')).toBeVisible()
    await expect(page.locator('button[type="submit"]')).toBeVisible()
  },

  async toHaveAccessibleNavigation(page: Page) {
    const nav = page.locator('nav')
    await expect(nav).toHaveAttribute('role', 'navigation')
    await expect(nav).toHaveAttribute('aria-label')
  }
}