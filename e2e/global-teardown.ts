import { FullConfig } from '@playwright/test'

async function globalTeardown(config: FullConfig) {
  console.log('🧹 Running global teardown for Albert Nartey Portfolio tests')
  
  // Perform cleanup tasks:
  // - Clean up test data
  // - Close external services
  // - Archive test results
  
  console.log('✅ Global teardown completed')
}

export default globalTeardown