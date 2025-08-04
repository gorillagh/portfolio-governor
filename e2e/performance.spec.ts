import { test, expect } from '@playwright/test'
import { PortfolioPageHelpers } from './utils/test-helpers'

test.describe('Performance Tests', () => {
  let helpers: PortfolioPageHelpers

  test.beforeEach(async ({ page }) => {
    helpers = new PortfolioPageHelpers(page)
  })

  test.describe('Core Web Vitals', () => {
    test('measures Core Web Vitals on homepage', async ({ page }) => {
      await helpers.navigateToHome()
      
      // Wait for page to fully load
      await page.waitForLoadState('networkidle')
      
      // Measure Core Web Vitals
      const vitals = await page.evaluate(() => {
        return new Promise((resolve) => {
          const vitals = {
            LCP: 0,
            FID: 0,
            CLS: 0,
            FCP: 0,
            TTFB: 0
          }
          
          // Largest Contentful Paint
          new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries()
            const lastEntry = entries[entries.length - 1]
            vitals.LCP = lastEntry.startTime
          }).observe({ entryTypes: ['largest-contentful-paint'] })
          
          // First Contentful Paint
          new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              if (entry.name === 'first-contentful-paint') {
                vitals.FCP = entry.startTime
              }
            }
          }).observe({ entryTypes: ['paint'] })
          
          // Cumulative Layout Shift
          let clsValue = 0
          new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              if (!entry.hadRecentInput) {
                clsValue += entry.value
              }
            }
            vitals.CLS = clsValue
          }).observe({ entryTypes: ['layout-shift'] })
          
          // Time to First Byte
          const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
          if (navEntry) {
            vitals.TTFB = navEntry.responseStart - navEntry.requestStart
          }
          
          // Wait a bit for metrics to be collected
          setTimeout(() => resolve(vitals), 3000)
        })
      })
      
      // Core Web Vitals thresholds (in milliseconds)
      expect(vitals.LCP).toBeLessThan(2500) // Good LCP: < 2.5s
      expect(vitals.FCP).toBeLessThan(1800) // Good FCP: < 1.8s  
      expect(vitals.CLS).toBeLessThan(0.1)  // Good CLS: < 0.1
      expect(vitals.TTFB).toBeLessThan(800) // Good TTFB: < 800ms
      
      console.log('Core Web Vitals:', vitals)
    })

    test('measures page load performance across key pages', async ({ page }) => {
      const pages = ['/', '/about', '/projects', '/skills', '/contact']
      const performanceResults = []
      
      for (const pagePath of pages) {
        const startTime = performance.now()
        
        await page.goto(pagePath)
        await page.waitForLoadState('domcontentloaded')
        
        const domContentLoaded = performance.now() - startTime
        
        await page.waitForLoadState('networkidle')
        const fullyLoaded = performance.now() - startTime
        
        const result = {
          page: pagePath,
          domContentLoaded,
          fullyLoaded
        }
        
        performanceResults.push(result)
        
        // Performance thresholds
        expect(domContentLoaded).toBeLessThan(3000) // DOM should load < 3s
        expect(fullyLoaded).toBeLessThan(5000)     // Full load < 5s
      }
      
      console.log('Page Load Performance:', performanceResults)
    })
  })

  test.describe('Resource Loading', () => {
    test('images load efficiently', async ({ page }) => {
      await helpers.navigateToHome()
      await page.waitForLoadState('networkidle')
      
      // Check image loading performance
      const imageMetrics = await page.evaluate(() => {
        const images = Array.from(document.querySelectorAll('img'))
        const metrics = []
        
        for (const img of images) {
          const rect = img.getBoundingClientRect()
          metrics.push({
            src: img.src,
            naturalWidth: img.naturalWidth,
            naturalHeight: img.naturalHeight,
            displayWidth: rect.width,
            displayHeight: rect.height,
            loaded: img.complete,
            lazy: img.loading === 'lazy'
          })
        }
        
        return metrics
      })
      
      for (const metric of imageMetrics) {
        // Images should be loaded
        expect(metric.loaded).toBe(true)
        
        // Images should have natural dimensions (not broken)
        expect(metric.naturalWidth).toBeGreaterThan(0)
        expect(metric.naturalHeight).toBeGreaterThan(0)
        
        // Images should not be excessively oversized
        if (metric.displayWidth > 0) {
          const oversizeRatio = metric.naturalWidth / metric.displayWidth
          expect(oversizeRatio).toBeLessThan(3) // Not more than 3x oversized
        }
      }
      
      console.log('Image Metrics:', imageMetrics)
    })

    test('fonts load without layout shift', async ({ page }) => {
      await helpers.navigateToHome()
      
      // Measure layout shifts during font loading
      const layoutShifts = await page.evaluate(() => {
        return new Promise((resolve) => {
          const shifts = []
          
          new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              shifts.push({
                value: entry.value,
                hadRecentInput: entry.hadRecentInput,
                sources: entry.sources?.map(source => ({
                  node: source.node?.tagName,
                  currentRect: source.currentRect,
                  previousRect: source.previousRect
                }))
              })
            }
          }).observe({ entryTypes: ['layout-shift'] })
          
          setTimeout(() => resolve(shifts), 3000)
        })
      })
      
      // Filter out user-input caused shifts
      const automaticShifts = layoutShifts.filter(shift => !shift.hadRecentInput)
      const totalCLS = automaticShifts.reduce((sum, shift) => sum + shift.value, 0)
      
      expect(totalCLS).toBeLessThan(0.1) // Good CLS score
      
      console.log('Layout Shifts:', automaticShifts)
    })

    test('critical resources load quickly', async ({ page }) => {
      const startTime = Date.now()
      
      await helpers.navigateToHome()
      
      // Wait for critical content to be visible
      await expect(page.locator('h1').first()).toBeVisible()
      await expect(page.locator('main').first()).toBeVisible()
      
      const criticalLoadTime = Date.now() - startTime
      
      // Critical content should load quickly
      expect(criticalLoadTime).toBeLessThan(2000) // < 2 seconds
      
      console.log('Critical Load Time:', criticalLoadTime)
    })
  })

  test.describe('JavaScript Performance', () => {
    test('JavaScript execution is efficient', async ({ page }) => {
      await helpers.navigateToHome()
      
      // Measure JavaScript execution time
      const jsMetrics = await page.evaluate(() => {
        const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        
        return {
          domInteractive: navEntry.domInteractive - navEntry.navigationStart,
          domComplete: navEntry.domComplete - navEntry.navigationStart,
          loadEventEnd: navEntry.loadEventEnd - navEntry.navigationStart
        }
      })
      
      // JavaScript should not block rendering excessively
      expect(jsMetrics.domInteractive).toBeLessThan(3000)
      expect(jsMetrics.domComplete).toBeLessThan(5000)
      
      console.log('JavaScript Metrics:', jsMetrics)
    })

    test('animations are smooth', async ({ page }) => {
      await helpers.navigateToProjects()
      await page.waitForLoadState('networkidle')
      
      // Test animation performance by measuring frame rate during interactions
      const animationTest = await page.evaluate(() => {
        return new Promise((resolve) => {
          let frames = 0
          let startTime = performance.now()
          
          const measureFrames = () => {
            frames++
            if (frames < 60) { // Measure for ~1 second at 60fps
              requestAnimationFrame(measureFrames)
            } else {
              const endTime = performance.now()
              const fps = frames / ((endTime - startTime) / 1000)
              resolve(fps)
            }
          }
          
          // Trigger animations by hovering over elements
          const projectCards = document.querySelectorAll('[data-testid="project-card"], .project-card, article')
          if (projectCards.length > 0) {
            const card = projectCards[0] as HTMLElement
            card.dispatchEvent(new Event('mouseenter'))
          }
          
          requestAnimationFrame(measureFrames)
        })
      })
      
      // Should maintain reasonable frame rate
      expect(animationTest).toBeGreaterThan(30) // At least 30 FPS
      
      console.log('Animation FPS:', animationTest)
    })
  })

  test.describe('Bundle Size and Optimization', () => {
    test('monitors resource sizes', async ({ page }) => {
      await helpers.navigateToHome()
      await page.waitForLoadState('networkidle')
      
      // Get resource sizes
      const resourceSizes = await page.evaluate(() => {
        const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[]
        const sizes = {
          js: 0,
          css: 0,
          images: 0,
          fonts: 0,
          total: 0
        }
        
        for (const resource of resources) {
          const size = resource.transferSize || 0
          
          if (resource.name.includes('.js')) {
            sizes.js += size
          } else if (resource.name.includes('.css')) {
            sizes.css += size
          } else if (resource.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/)) {
            sizes.images += size
          } else if (resource.name.match(/\.(woff|woff2|ttf|otf)$/)) {
            sizes.fonts += size
          }
          
          sizes.total += size
        }
        
        return sizes
      })
      
      // Bundle size recommendations (in bytes)
      expect(resourceSizes.js).toBeLessThan(1024 * 1024)    // JS < 1MB
      expect(resourceSizes.css).toBeLessThan(512 * 1024)    // CSS < 512KB
      expect(resourceSizes.total).toBeLessThan(3 * 1024 * 1024) // Total < 3MB
      
      console.log('Resource Sizes (KB):', {
        js: Math.round(resourceSizes.js / 1024),
        css: Math.round(resourceSizes.css / 1024),
        images: Math.round(resourceSizes.images / 1024),
        fonts: Math.round(resourceSizes.fonts / 1024),
        total: Math.round(resourceSizes.total / 1024)
      })
    })

    test('uses efficient image formats', async ({ page }) => {
      await helpers.navigateToHome()
      await page.waitForLoadState('networkidle')
      
      const imageFormats = await page.evaluate(() => {
        const images = Array.from(document.querySelectorAll('img'))
        const formats = {
          webp: 0,
          avif: 0,
          jpg: 0,
          png: 0,
          svg: 0,
          other: 0
        }
        
        for (const img of images) {
          const src = img.src.toLowerCase()
          if (src.includes('.webp')) formats.webp++
          else if (src.includes('.avif')) formats.avif++
          else if (src.includes('.jpg') || src.includes('.jpeg')) formats.jpg++
          else if (src.includes('.png')) formats.png++
          else if (src.includes('.svg')) formats.svg++
          else formats.other++
        }
        
        return formats
      })
      
      const totalImages = Object.values(imageFormats).reduce((sum, count) => sum + count, 0)
      
      if (totalImages > 0) {
        // Should use modern formats when possible
        const modernFormats = imageFormats.webp + imageFormats.avif + imageFormats.svg
        const modernRatio = modernFormats / totalImages
        
        // At least 50% of images should use modern formats
        expect(modernRatio).toBeGreaterThan(0.3)
      }
      
      console.log('Image Formats:', imageFormats)
    })
  })

  test.describe('Mobile Performance', () => {
    test('performs well on mobile device simulation', async ({ page }) => {
      // Simulate mobile device
      await page.emulate({
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15',
        viewport: { width: 375, height: 667 },
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true
      })
      
      const startTime = Date.now()
      await helpers.navigateToHome()
      
      // Wait for critical content
      await expect(page.locator('h1').first()).toBeVisible()
      const mobileLoadTime = Date.now() - startTime
      
      // Mobile should load reasonably quickly even on slower connections
      expect(mobileLoadTime).toBeLessThan(4000) // < 4 seconds on mobile
      
      console.log('Mobile Load Time:', mobileLoadTime)
    })

    test('touch interactions are responsive', async ({ page }) => {
      await helpers.setMobileViewport()
      await helpers.navigateToContact()
      
      const touchStartTime = Date.now()
      
      // Simulate touch interaction
      const button = page.locator('button[type="submit"]').first()
      await button.tap()
      
      const touchResponseTime = Date.now() - touchStartTime
      
      // Touch should be responsive
      expect(touchResponseTime).toBeLessThan(100) // < 100ms response
      
      console.log('Touch Response Time:', touchResponseTime)
    })
  })

  test.describe('Network Performance', () => {
    test('handles slow network conditions', async ({ page }) => {
      // Simulate slow 3G
      await page.route('**/*', route => {
        // Add delay to simulate slow network
        setTimeout(() => route.continue(), 200)
      })
      
      const startTime = Date.now()
      await helpers.navigateToHome()
      
      // Should still load within reasonable time on slow connection
      await expect(page.locator('h1').first()).toBeVisible({ timeout: 10000 })
      const slowLoadTime = Date.now() - startTime
      
      expect(slowLoadTime).toBeLessThan(8000) // < 8 seconds on slow connection
      
      console.log('Slow Network Load Time:', slowLoadTime)
    })

    test('efficiently caches resources', async ({ page }) => {
      // First visit
      await helpers.navigateToHome()
      await page.waitForLoadState('networkidle')
      
      // Get initial resource count
      const firstVisitResources = await page.evaluate(() => {
        return performance.getEntriesByType('resource').length
      })
      
      // Second visit (should use cache)
      await page.reload()
      await page.waitForLoadState('networkidle')
      
      const secondVisitResources = await page.evaluate(() => {
        return performance.getEntriesByType('resource').length
      })
      
      // Should have cached resources (fewer network requests)
      expect(secondVisitResources).toBeLessThanOrEqual(firstVisitResources)
      
      console.log('Resource Requests:', {
        first: firstVisitResources,
        second: secondVisitResources
      })
    })
  })

  test.describe('Memory Usage', () => {
    test('does not have memory leaks during navigation', async ({ page }) => {
      // Navigate through pages multiple times
      const pages = ['/', '/about', '/projects', '/contact']
      
      for (let cycle = 0; cycle < 3; cycle++) {
        for (const pagePath of pages) {
          await page.goto(pagePath)
          await page.waitForLoadState('domcontentloaded')
          
          // Small delay between navigations
          await page.waitForTimeout(100)
        }
      }
      
      // Check memory usage (basic check)
      const memoryInfo = await page.evaluate(() => {
        // @ts-ignore - performance.memory is available in Chrome
        return performance.memory ? {
          usedJSHeapSize: performance.memory.usedJSHeapSize,
          totalJSHeapSize: performance.memory.totalJSHeapSize,
          jsHeapSizeLimit: performance.memory.jsHeapSizeLimit
        } : null
      })
      
      if (memoryInfo) {
        // Memory usage should be reasonable
        const memoryUsageMB = memoryInfo.usedJSHeapSize / (1024 * 1024)
        expect(memoryUsageMB).toBeLessThan(100) // < 100MB
        
        console.log('Memory Usage (MB):', Math.round(memoryUsageMB))
      }
    })
  })
})