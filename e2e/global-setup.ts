import { chromium, FullConfig } from '@playwright/test'

async function globalSetup(config: FullConfig) {
  const { baseURL } = config.projects[0].use
  
  console.log(`🚀 Starting global setup for Albert Nartey Portfolio tests`)
  console.log(`📍 Base URL: ${baseURL}`)
  
  // Launch browser for setup
  const browser = await chromium.launch()
  const page = await browser.newPage()
  
  try {
    // Wait for the application to be ready
    console.log('⏳ Waiting for application to be ready...')
    await page.goto(baseURL!)
    
    // Wait for essential elements to load
    await page.waitForSelector('[data-testid="hero-section"], h1', { timeout: 30000 })
    
    console.log('✅ Application is ready for testing')
    
    // You could perform other setup tasks here:
    // - Authenticate users
    // - Seed test data
    // - Set up test fixtures
    
  } catch (error) {
    console.error('❌ Global setup failed:', error)
    throw error
  } finally {
    await browser.close()
  }
}

export default globalSetup