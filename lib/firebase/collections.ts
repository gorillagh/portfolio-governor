import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit,
  onSnapshot,
  Timestamp,
  CollectionReference,
  DocumentData,
  Query,
  Unsubscribe
} from 'firebase/firestore'
import { db } from '../firebase'

// Collection names
export const COLLECTIONS = {
  PROJECTS: 'projects',
  SKILLS: 'skills', 
  TESTIMONIALS: 'testimonials',
  CONTACT_INQUIRIES: 'contact_inquiries',
  BLOG_POSTS: 'blog_posts',
  ANALYTICS_EVENTS: 'analytics_events'
} as const

// Enhanced TypeScript interfaces for Firebase data models
export interface FirebaseProject {
  id: string
  title: string
  description: string
  longDescription: string
  imageUrl: string
  imageAlt?: string
  technologies: string[]
  category: string
  featured: boolean
  liveUrl?: string
  githubUrl?: string
  status: 'completed' | 'in-progress' | 'archived'
  startDate: Timestamp
  endDate?: Timestamp
  challenges: string[]
  solutions: string[]
  results: string[]
  viewCount: number
  likes: number
  createdAt: Timestamp
  updatedAt: Timestamp
}

export interface FirebaseSkillCategory {
  id: string
  title: string
  description: string
  iconName: string
  skills: {
    name: string
    proficiency: number // 1-10 scale
    yearsExperience: number
    certified?: boolean
  }[]
  color: string
  order: number
  createdAt: Timestamp
  updatedAt: Timestamp
}

export interface FirebaseTestimonial {
  id: string
  clientName: string
  clientTitle: string
  company: string
  testimonialText: string
  rating: number // 1-5 stars
  projectId?: string
  photoUrl?: string
  featured: boolean
  approved: boolean
  order: number
  createdAt: Timestamp
  updatedAt: Timestamp
}

export interface FirebaseContactInquiry {
  id: string
  name: string
  email: string
  company?: string
  inquiryType: 'recruitment' | 'consulting' | 'speaking' | 'general'
  budget?: '$500-1000' | '$1000-2000' | '$2000-5000' | '$5000+'
  subject: string
  message: string
  status: 'new' | 'responded' | 'closed'
  priority: 'low' | 'medium' | 'high'
  tags: string[]
  notes?: string
  respondedAt?: Timestamp
  createdAt: Timestamp
  updatedAt: Timestamp
  ipAddress?: string
  userAgent?: string
  referrer?: string
}

export interface FirebaseBlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  tags: string[]
  category: string
  featured: boolean
  published: boolean
  seoTitle?: string
  seoDescription?: string
  imageUrl?: string
  readingTime: number
  viewCount: number
  likes: number
  publishedAt?: Timestamp
  createdAt: Timestamp
  updatedAt: Timestamp
}

export interface FirebaseAnalyticsEvent {
  id: string
  eventName: string
  eventCategory: string
  userId?: string
  sessionId: string
  properties: Record<string, any>
  timestamp: Timestamp
  userAgent?: string
  ipAddress?: string
  referrer?: string
  pagePath: string
}

// Generic Firebase CRUD operations
export class FirebaseCollection<T extends DocumentData> {
  private collectionRef: CollectionReference<T>

  constructor(collectionName: string) {
    this.collectionRef = collection(db, collectionName) as CollectionReference<T>
  }

  // Create a new document
  async create(data: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    const now = Timestamp.now()
    const docData = {
      ...data,
      createdAt: now,
      updatedAt: now
    } as unknown as T

    const docRef = await addDoc(this.collectionRef, docData)
    return docRef.id
  }

  // Get all documents
  async getAll(): Promise<T[]> {
    const snapshot = await getDocs(this.collectionRef)
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as unknown as T))
  }

  // Get document by ID
  async getById(id: string): Promise<T | null> {
    const docRef = doc(db, this.collectionRef.path, id)
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      } as unknown as T
    }
    
    return null
  }

  // Update document
  async update(id: string, data: Partial<Omit<T, 'id' | 'createdAt'>>): Promise<void> {
    const docRef = doc(db, this.collectionRef.path, id)
    const updateData = {
      ...data,
      updatedAt: Timestamp.now()
    }
    
    await updateDoc(docRef, updateData)
  }

  // Delete document
  async delete(id: string): Promise<void> {
    const docRef = doc(db, this.collectionRef.path, id)
    await deleteDoc(docRef)
  }

  // Query with conditions
  async query(conditions: {
    where?: { field: string; operator: any; value: any }[]
    orderBy?: { field: string; direction?: 'asc' | 'desc' }[]
    limit?: number
  }): Promise<T[]> {
    let q: Query<T> = this.collectionRef as Query<T>

    // Apply where conditions
    if (conditions.where) {
      conditions.where.forEach(condition => {
        q = query(q, where(condition.field, condition.operator, condition.value))
      })
    }

    // Apply ordering
    if (conditions.orderBy) {
      conditions.orderBy.forEach(order => {
        q = query(q, orderBy(order.field, order.direction || 'asc'))
      })
    }

    // Apply limit
    if (conditions.limit) {
      q = query(q, limit(conditions.limit))
    }

    const snapshot = await getDocs(q)
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as unknown as T))
  }

  // Real-time listener
  onSnapshot(
    callback: (data: T[]) => void,
    errorCallback?: (error: Error) => void
  ): Unsubscribe {
    return onSnapshot(
      this.collectionRef,
      snapshot => {
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as unknown as T))
        callback(data)
      },
      errorCallback
    )
  }

  // Real-time listener with query
  onSnapshotWithQuery(
    conditions: {
      where?: { field: string; operator: any; value: any }[]
      orderBy?: { field: string; direction?: 'asc' | 'desc' }[]
      limit?: number
    },
    callback: (data: T[]) => void,
    errorCallback?: (error: Error) => void
  ): Unsubscribe {
    let q: Query<T> = this.collectionRef as Query<T>

    // Apply conditions (same logic as query method)
    if (conditions.where) {
      conditions.where.forEach(condition => {
        q = query(q, where(condition.field, condition.operator, condition.value))
      })
    }

    if (conditions.orderBy) {
      conditions.orderBy.forEach(order => {
        q = query(q, orderBy(order.field, order.direction || 'asc'))
      })
    }

    if (conditions.limit) {
      q = query(q, limit(conditions.limit))
    }

    return onSnapshot(
      q,
      snapshot => {
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as unknown as T))
        callback(data)
      },
      errorCallback
    )
  }
}

// Specialized collection instances
export const projectsCollection = new FirebaseCollection<FirebaseProject>(COLLECTIONS.PROJECTS)
export const skillsCollection = new FirebaseCollection<FirebaseSkillCategory>(COLLECTIONS.SKILLS)
export const testimonialsCollection = new FirebaseCollection<FirebaseTestimonial>(COLLECTIONS.TESTIMONIALS)
export const contactInquiriesCollection = new FirebaseCollection<FirebaseContactInquiry>(COLLECTIONS.CONTACT_INQUIRIES)
export const blogPostsCollection = new FirebaseCollection<FirebaseBlogPost>(COLLECTIONS.BLOG_POSTS)
export const analyticsEventsCollection = new FirebaseCollection<FirebaseAnalyticsEvent>(COLLECTIONS.ANALYTICS_EVENTS)