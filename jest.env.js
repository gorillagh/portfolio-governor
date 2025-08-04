// Jest environment variables setup
// This file is loaded before tests run to set up environment variables

process.env.NODE_ENV = 'test'
process.env.NEXT_PUBLIC_VERCEL_URL = 'http://localhost:3000'

// Firebase Test Configuration
process.env.NEXT_PUBLIC_FIREBASE_API_KEY = 'test-api-key'
process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = 'test-project.firebaseapp.com'
process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID = 'test-project'
process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = 'test-project.appspot.com'
process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = '123456789'
process.env.NEXT_PUBLIC_FIREBASE_APP_ID = '1:123456789:web:test-app-id'
process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID = 'G-TEST123'

// Email Configuration (Test)
process.env.RESEND_API_KEY = 'test-resend-key'
process.env.CONTACT_EMAIL = 'test@example.com'

// Analytics
process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ID = 'test-analytics-id'