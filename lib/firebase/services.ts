import { 
  projectsCollection, 
  skillsCollection, 
  testimonialsCollection, 
  contactInquiriesCollection,
  analyticsEventsCollection,
  FirebaseProject, 
  FirebaseSkillCategory, 
  FirebaseTestimonial, 
  FirebaseContactInquiry,
  FirebaseAnalyticsEvent
} from './collections'
import { Timestamp } from 'firebase/firestore'

// Projects Service
export class ProjectsService {
  // Get all projects with caching
  static async getAllProjects(): Promise<FirebaseProject[]> {
    return await projectsCollection.getAll()
  }

  // Get featured projects
  static async getFeaturedProjects(): Promise<FirebaseProject[]> {
    return await projectsCollection.query({
      where: [{ field: 'featured', operator: '==', value: true }],
      orderBy: [{ field: 'createdAt', direction: 'desc' }]
    })
  }

  // Get projects by category
  static async getProjectsByCategory(category: string): Promise<FirebaseProject[]> {
    if (category === 'All') {
      return await this.getAllProjects()
    }
    
    return await projectsCollection.query({
      where: [{ field: 'category', operator: '==', value: category }],
      orderBy: [{ field: 'createdAt', direction: 'desc' }]
    })
  }

  // Get project by ID
  static async getProjectById(id: string): Promise<FirebaseProject | null> {
    return await projectsCollection.getById(id)
  }

  // Increment project view count
  static async incrementViewCount(id: string): Promise<void> {
    const project = await projectsCollection.getById(id)
    if (project) {
      await projectsCollection.update(id, {
        viewCount: project.viewCount + 1
      })
    }
  }

  // Like/unlike project
  static async toggleLike(id: string, increment: boolean = true): Promise<void> {
    const project = await projectsCollection.getById(id)
    if (project) {
      await projectsCollection.update(id, {
        likes: increment ? project.likes + 1 : Math.max(0, project.likes - 1)
      })
    }
  }

  // Real-time projects listener
  static onProjectsChange(callback: (projects: FirebaseProject[]) => void) {
    return projectsCollection.onSnapshot(callback)
  }

  // Get project categories
  static async getProjectCategories(): Promise<string[]> {
    const projects = await this.getAllProjects()
    const categories = new Set(projects.map(p => p.category))
    return ['All', ...Array.from(categories)]
  }
}

// Skills Service
export class SkillsService {
  static async getAllSkills(): Promise<FirebaseSkillCategory[]> {
    return await skillsCollection.query({
      orderBy: [{ field: 'order', direction: 'asc' }]
    })
  }

  static async getSkillById(id: string): Promise<FirebaseSkillCategory | null> {
    return await skillsCollection.getById(id)
  }

  static onSkillsChange(callback: (skills: FirebaseSkillCategory[]) => void) {
    return skillsCollection.onSnapshotWithQuery(
      { orderBy: [{ field: 'order', direction: 'asc' }] },
      callback
    )
  }
}

// Testimonials Service
export class TestimonialsService {
  static async getAllTestimonials(): Promise<FirebaseTestimonial[]> {
    return await testimonialsCollection.query({
      where: [{ field: 'approved', operator: '==', value: true }],
      orderBy: [{ field: 'order', direction: 'asc' }]
    })
  }

  static async getFeaturedTestimonials(): Promise<FirebaseTestimonial[]> {
    return await testimonialsCollection.query({
      where: [
        { field: 'featured', operator: '==', value: true },
        { field: 'approved', operator: '==', value: true }
      ],
      orderBy: [{ field: 'order', direction: 'asc' }]
    })
  }

  static async getTestimonialsByProject(projectId: string): Promise<FirebaseTestimonial[]> {
    return await testimonialsCollection.query({
      where: [
        { field: 'projectId', operator: '==', value: projectId },
        { field: 'approved', operator: '==', value: true }
      ],
      orderBy: [{ field: 'createdAt', direction: 'desc' }]
    })
  }

  static onTestimonialsChange(callback: (testimonials: FirebaseTestimonial[]) => void) {
    return testimonialsCollection.onSnapshotWithQuery(
      {
        where: [{ field: 'approved', operator: '==', value: true }],
        orderBy: [{ field: 'order', direction: 'asc' }]
      },
      callback
    )
  }
}

// Contact Service
export class ContactService {
  static async submitInquiry(inquiry: Omit<FirebaseContactInquiry, 'id' | 'status' | 'priority' | 'tags' | 'createdAt' | 'updatedAt'>): Promise<string> {
    const inquiryData = {
      ...inquiry,
      status: 'new' as const,
      priority: 'medium' as const,
      tags: [],
      ipAddress: undefined, // Will be set by API route
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : undefined,
      referrer: typeof window !== 'undefined' ? document.referrer : undefined
    }

    return await contactInquiriesCollection.create(inquiryData)
  }

  static async getInquiryById(id: string): Promise<FirebaseContactInquiry | null> {
    return await contactInquiriesCollection.getById(id)
  }

  static async updateInquiryStatus(id: string, status: FirebaseContactInquiry['status']): Promise<void> {
    const updateData: Partial<FirebaseContactInquiry> = { status }
    
    if (status === 'responded') {
      updateData.respondedAt = Timestamp.now()
    }

    await contactInquiriesCollection.update(id, updateData)
  }

  static async getAllInquiries(): Promise<FirebaseContactInquiry[]> {
    return await contactInquiriesCollection.query({
      orderBy: [{ field: 'createdAt', direction: 'desc' }]
    })
  }

  static async getNewInquiries(): Promise<FirebaseContactInquiry[]> {
    return await contactInquiriesCollection.query({
      where: [{ field: 'status', operator: '==', value: 'new' }],
      orderBy: [{ field: 'createdAt', direction: 'desc' }]
    })
  }

  static onNewInquiriesChange(callback: (inquiries: FirebaseContactInquiry[]) => void) {
    return contactInquiriesCollection.onSnapshotWithQuery(
      {
        where: [{ field: 'status', operator: '==', value: 'new' }],
        orderBy: [{ field: 'createdAt', direction: 'desc' }]
      },
      callback
    )
  }
}

// Analytics Service
export class AnalyticsService {
  static async trackEvent(
    eventName: string,
    eventCategory: string,
    properties: Record<string, any> = {},
    userId?: string
  ): Promise<void> {
    const event: Omit<FirebaseAnalyticsEvent, 'id'> = {
      eventName,
      eventCategory,
      userId,
      sessionId: this.getSessionId(),
      properties,
      timestamp: Timestamp.now(),
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : undefined,
      referrer: typeof window !== 'undefined' ? document.referrer : undefined,
      pagePath: typeof window !== 'undefined' ? window.location.pathname : '/'
    }

    await analyticsEventsCollection.create(event)
  }

  // Page view tracking
  static async trackPageView(path: string, title?: string): Promise<void> {
    await this.trackEvent('page_view', 'navigation', {
      page_path: path,
      page_title: title || document.title
    })
  }

  // Project interaction tracking
  static async trackProjectView(projectId: string, projectTitle: string): Promise<void> {
    await this.trackEvent('project_view', 'engagement', {
      project_id: projectId,
      project_title: projectTitle
    })
  }

  static async trackProjectLike(projectId: string, projectTitle: string): Promise<void> {
    await this.trackEvent('project_like', 'engagement', {
      project_id: projectId,
      project_title: projectTitle
    })
  }

  // Contact form tracking
  static async trackContactFormSubmission(inquiryType: string): Promise<void> {
    await this.trackEvent('contact_form_submit', 'conversion', {
      inquiry_type: inquiryType
    })
  }

  // Resume download tracking
  static async trackResumeDownload(): Promise<void> {
    await this.trackEvent('resume_download', 'conversion', {})
  }

  // External link tracking
  static async trackExternalLinkClick(url: string, linkText?: string): Promise<void> {
    await this.trackEvent('external_link_click', 'engagement', {
      url,
      link_text: linkText
    })
  }

  // Get or generate session ID
  private static getSessionId(): string {
    if (typeof window === 'undefined') return 'server-session'
    
    const sessionKey = 'portfolio_session_id'
    let sessionId = sessionStorage.getItem(sessionKey)
    
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      sessionStorage.setItem(sessionKey, sessionId)
    }
    
    return sessionId
  }

  // Get analytics data (for admin dashboard)
  static async getEventsByCategory(category: string, limit: number = 100): Promise<FirebaseAnalyticsEvent[]> {
    return await analyticsEventsCollection.query({
      where: [{ field: 'eventCategory', operator: '==', value: category }],
      orderBy: [{ field: 'timestamp', direction: 'desc' }],
      limit
    })
  }

  static async getEventsInDateRange(startDate: Date, endDate: Date): Promise<FirebaseAnalyticsEvent[]> {
    return await analyticsEventsCollection.query({
      where: [
        { field: 'timestamp', operator: '>=', value: Timestamp.fromDate(startDate) },
        { field: 'timestamp', operator: '<=', value: Timestamp.fromDate(endDate) }
      ],
      orderBy: [{ field: 'timestamp', direction: 'desc' }]
    })
  }
}

// Data migration utilities
export class DataMigrationService {
  // Migrate existing projects data to Firebase
  static async migrateProjects(projects: any[]): Promise<void> {
    for (const project of projects) {
      const firebaseProject: Omit<FirebaseProject, 'id' | 'createdAt' | 'updatedAt'> = {
        title: project.title,
        description: project.description,
        longDescription: project.longDescription,
        imageUrl: project.image,
        technologies: project.technologies,
        category: project.category,
        featured: project.featured,
        liveUrl: project.liveUrl,
        githubUrl: project.githubUrl,
        status: project.status,
        startDate: Timestamp.fromDate(new Date(project.startDate)),
        endDate: project.endDate ? Timestamp.fromDate(new Date(project.endDate)) : undefined,
        challenges: project.challenges,
        solutions: project.solutions,
        results: project.results,
        viewCount: 0,
        likes: 0
      }

      await projectsCollection.create(firebaseProject)
    }
  }

  // Migrate existing skills data
  static async migrateSkills(skillCategories: any[]): Promise<void> {
    for (let i = 0; i < skillCategories.length; i++) {
      const category = skillCategories[i]
      
      const firebaseSkills: Omit<FirebaseSkillCategory, 'id' | 'createdAt' | 'updatedAt'> = {
        title: category.title,
        description: category.description,
        iconName: category.icon.name || 'Code', // Assuming Lucide icon names
        skills: category.skills.map((skill: string) => ({
          name: skill,
          proficiency: Math.floor(Math.random() * 3) + 8, // Random 8-10 for demo
          yearsExperience: Math.floor(Math.random() * 5) + 2, // Random 2-7 years
          certified: Math.random() > 0.7 // 30% chance of certification
        })),
        color: category.color,
        order: i
      }

      await skillsCollection.create(firebaseSkills)
    }
  }
}