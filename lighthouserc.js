module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000/'],
      startServerCommand: 'pnpm start',
      startServerReadyPattern: 'ready on',
      startServerReadyTimeout: 20000,
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'categories:performance': ['error', { minScore: 0.8 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        'categories:pwa': 'off', // PWA will be implemented in later phases
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};