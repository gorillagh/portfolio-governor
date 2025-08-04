/**
 * Data Migration Utility
 * 
 * This script helps migrate existing static data to Firebase collections.
 * Run this script once to populate your Firebase database with initial data.
 * 
 * Usage:
 * 1. Set up Firebase configuration in .env.local
 * 2. Run: npx tsx lib/migration/migrateData.ts
 */

import { DataMigrationService } from '../firebase/services'
import { projects } from '../../constants/projects'
import { skillCategories } from '../../constants/skills'

// Sample testimonials data (since we don't have this in constants yet)
const sampleTestimonials = [
  {
    clientName: 'Sarah Johnson',
    clientTitle: 'CTO',
    company: 'TechStartup Inc.',
    testimonialText: 'Albert delivered an exceptional e-commerce platform that exceeded our expectations. His technical expertise and attention to detail are outstanding.',
    rating: 5,
    projectId: 'ecommerce-platform',
    photoUrl: '/assets/images/testimonials/testimonial-1.jpg',
    featured: true,
    approved: true,
    order: 1
  },
  {
    clientName: 'Michael Chen',
    clientTitle: 'Product Manager',
    company: 'DataCorp Solutions',
    testimonialText: 'The AI analytics dashboard Albert built transformed how we understand our data. Highly recommend his expertise in machine learning.',
    rating: 5,
    projectId: 'ai-analytics-dashboard',
    photoUrl: '/assets/images/testimonials/testimonial-2.jpg',
    featured: true,
    approved: true,
    order: 2
  },
  {
    clientName: 'Emily Rodriguez',
    clientTitle: 'Head of Digital',
    company: 'FinanceFirst Bank',
    testimonialText: 'Albert developed a secure mobile banking app that our customers love. His attention to security and user experience is remarkable.',
    rating: 5,
    projectId: 'mobile-banking-app',
    photoUrl: '/assets/images/testimonials/testimonial-3.jpg',
    featured: true,
    approved: true,
    order: 3
  }
]

async function migrateAllData() {
  console.log('🚀 Starting data migration...')

  try {
    // Migrate Projects
    console.log('📁 Migrating projects...')
    await DataMigrationService.migrateProjects(projects)
    console.log(`✅ Successfully migrated ${projects.length} projects`)

    // Migrate Skills
    console.log('🎯 Migrating skills...')
    await DataMigrationService.migrateSkills(skillCategories)
    console.log(`✅ Successfully migrated ${skillCategories.length} skill categories`)

    // Migrate Testimonials
    console.log('💬 Migrating testimonials...')
    await migrateTestimonials(sampleTestimonials)
    console.log(`✅ Successfully migrated ${sampleTestimonials.length} testimonials`)

    console.log('🎉 Data migration completed successfully!')
    console.log('\n📋 Next steps:')
    console.log('1. Check your Firebase console to verify the data')
    console.log('2. Update your components to use Firebase hooks')
    console.log('3. Test the real-time functionality')

  } catch (error) {
    console.error('❌ Migration failed:', error)
    process.exit(1)
  }
}

// Testimonials migration helper
async function migrateTestimonials(testimonials: any[]) {
  const { testimonialsCollection } = await import('../firebase/collections')

  for (const testimonial of testimonials) {
    await testimonialsCollection.create(testimonial)
  }
}

// Check if running directly
if (require.main === module) {
  migrateAllData()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error('Migration failed:', error)
      process.exit(1)
    })
}

export { migrateAllData }