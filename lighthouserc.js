module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/about',
        'http://localhost:3000/projects',
        'http://localhost:3000/skills',
        'http://localhost:3000/contact'
      ],
      startServerCommand: 'pnpm build && pnpm start',
      startServerReadyPattern: 'ready on',
      startServerReadyTimeout: 60000,
      numberOfRuns: 3, // Run 3 times and average the results
      settings: {
        preset: 'desktop',
        throttling: {
          rttMs: 40,
          throughputKbps: 10 * 1024,
          cpuSlowdownMultiplier: 1
        },
        screenEmulation: {
          mobile: false,
          width: 1350,
          height: 940,
          deviceScaleFactor: 1,
          disabled: false,
        },
        formFactor: 'desktop',
        throttlingMethod: 'simulate',
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      }
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        // Performance Metrics
        'categories:performance': ['error', { minScore: 0.9 }],
        'first-contentful-paint': ['error', { maxNumericValue: 1800 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['error', { maxNumericValue: 300 }],
        'speed-index': ['error', { maxNumericValue: 3400 }],
        
        // Accessibility
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'color-contrast': 'error',
        'image-alt': 'error',
        'label': 'error',
        'link-name': 'error',
        'button-name': 'error',
        'document-title': 'error',
        'html-has-lang': 'error',
        'html-lang-valid': 'error',
        'meta-viewport': 'error',
        
        // Best Practices
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'uses-https': 'error',
        'is-on-https': 'error',
        'no-vulnerable-libraries': 'error',
        'external-anchors-use-rel-noopener': 'error',
        'image-aspect-ratio': 'error',
        'image-size-responsive': 'error',
        
        // SEO
        'categories:seo': ['error', { minScore: 0.9 }],
        'document-title': 'error',
        'meta-description': 'error',
        'http-status-code': 'error',
        'link-text': 'error',
        'crawlable-anchors': 'error',
        'robots-txt': 'error',
        'hreflang': 'off', // Not applicable for single-language site
        
        // Resource Optimization
        'unused-css-rules': ['warn', { maxLength: 2000 }],
        'unused-javascript': ['warn', { maxLength: 20000 }],
        'modern-image-formats': 'error',
        'efficient-animated-content': 'error',
        'offscreen-images': 'error',
        'render-blocking-resources': ['warn', { maxLength: 0 }],
        'unminified-css': 'error',
        'unminified-javascript': 'error',
        'uses-optimized-images': 'error',
        'uses-webp-images': 'warn',
        'uses-text-compression': 'error',
        
        // Network
        'server-response-time': ['error', { maxNumericValue: 600 }],
        'redirects': 'error',
        'uses-long-cache-ttl': 'warn',
        
        // JavaScript
        'no-document-write': 'error',
        'dom-size': ['warn', { maxNumericValue: 3000 }],
        'critical-request-chains': 'warn',
        
        // PWA (disabled for now but ready for future implementation)
        'categories:pwa': 'off',
        
        // Security
        'is-on-https': 'error',
        'uses-https': 'error',
      },
    },
    upload: {
      target: 'temporary-public-storage',
      githubAppToken: process.env.LHCI_GITHUB_APP_TOKEN,
    },
    server: {
      port: 9001,
      storage: {
        storageMethod: 'sql',
        sqlDialect: 'sqlite3',
        sqlDatabasePath: './lhci.db',
      },
    },
  },
};