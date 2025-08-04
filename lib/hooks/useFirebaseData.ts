'use client'

import { useState, useEffect, useCallback } from 'react'
import useSWR from 'swr'
import { 
  ProjectsService, 
  SkillsService, 
  TestimonialsService,
  AnalyticsService 
} from '@/lib/firebase/services'
import type { 
  FirebaseProject, 
  FirebaseSkillCategory, 
  FirebaseTestimonial 
} from '@/lib/firebase/collections'

// Generic hook for real-time Firebase data
export function useRealTimeData<T>(
  fetchFunction: () => Promise<T>,
  onChangeFunction: (callback: (data: T) => void) => () => void,
  key: string
) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let unsubscribe: (() => void) | null = null

    const initializeData = async () => {
      try {
        setLoading(true)
        const initialData = await fetchFunction()
        setData(initialData)
        setError(null)
      } catch (err) {
        setError(err as Error)
        console.error(`Error fetching ${key}:`, err)
      } finally {
        setLoading(false)
      }
    }

    const setupRealtimeListener = () => {
      unsubscribe = onChangeFunction((newData: T) => {
        setData(newData)
        setError(null)
      })
    }

    initializeData()
    setupRealtimeListener()

    return () => {
      if (unsubscribe) {
        unsubscribe()
      }
    }
  }, [key])

  return { data, loading, error, refetch: fetchFunction }
}

// Projects hooks
export function useProjects() {
  return useRealTimeData(
    ProjectsService.getAllProjects,
    ProjectsService.onProjectsChange,
    'projects'
  )
}

export function useFeaturedProjects() {
  const { data: allProjects, loading, error } = useProjects()
  
  const featuredProjects = allProjects?.filter(project => project.featured) || []
  
  return { data: featuredProjects, loading, error }
}

export function useProjectsByCategory(category?: string) {
  const { data: allProjects, loading, error } = useProjects()
  
  const projectsByCategory = category && category !== 'All' 
    ? allProjects?.filter(project => project.category === category) || []
    : allProjects || []
  
  return { data: projectsByCategory, loading, error }
}

export function useProject(id: string) {
  const [project, setProject] = useState<FirebaseProject | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchProject = useCallback(async (incrementViews = false) => {
    if (!id) return null

    try {
      setLoading(true)
      const projectData = await ProjectsService.getProjectById(id)
      
      if (projectData && incrementViews) {
        await ProjectsService.incrementViewCount(id)
        await AnalyticsService.trackProjectView(id, projectData.title)
        projectData.viewCount += 1
      }
      
      setProject(projectData)
      setError(null)
      return projectData
    } catch (err) {
      setError(err as Error)
      console.error('Error fetching project:', err)
      return null
    } finally {
      setLoading(false)
    }
  }, [id])

  const likeProject = useCallback(async () => {
    if (!project) return

    try {
      await ProjectsService.toggleLike(id, true)
      await AnalyticsService.trackProjectLike(id, project.title)
      setProject(prev => prev ? { ...prev, likes: prev.likes + 1 } : null)
    } catch (err) {
      console.error('Error liking project:', err)
    }
  }, [id, project])

  const unlikeProject = useCallback(async () => {
    if (!project) return

    try {
      await ProjectsService.toggleLike(id, false)
      setProject(prev => prev ? { ...prev, likes: Math.max(0, prev.likes - 1) } : null)
    } catch (err) {
      console.error('Error unliking project:', err)
    }
  }, [id, project])

  useEffect(() => {
    fetchProject()
  }, [fetchProject])

  return { 
    data: project, 
    loading, 
    error, 
    refetch: fetchProject, 
    likeProject, 
    unlikeProject 
  }
}

// Skills hooks
export function useSkills() {
  return useRealTimeData(
    SkillsService.getAllSkills,
    SkillsService.onSkillsChange,
    'skills'
  )
}

// Testimonials hooks
export function useTestimonials() {
  return useRealTimeData(
    TestimonialsService.getAllTestimonials,
    TestimonialsService.onTestimonialsChange,
    'testimonials'
  )
}

export function useFeaturedTestimonials() {
  const { data: allTestimonials, loading, error } = useTestimonials()
  
  const featuredTestimonials = allTestimonials?.filter(testimonial => testimonial.featured) || []
  
  return { data: featuredTestimonials, loading, error }
}

// Analytics hooks
export function useAnalytics() {
  const trackPageView = useCallback((path: string, title?: string) => {
    AnalyticsService.trackPageView(path, title)
  }, [])

  const trackEvent = useCallback((
    eventName: string, 
    eventCategory: string, 
    properties?: Record<string, any>
  ) => {
    AnalyticsService.trackEvent(eventName, eventCategory, properties)
  }, [])

  const trackResumeDownload = useCallback(() => {
    AnalyticsService.trackResumeDownload()
  }, [])

  const trackExternalLinkClick = useCallback((url: string, linkText?: string) => {
    AnalyticsService.trackExternalLinkClick(url, linkText)
  }, [])

  return {
    trackPageView,
    trackEvent,
    trackResumeDownload,
    trackExternalLinkClick
  }
}

// SWR-based hooks for API endpoints (with caching)
const fetcher = async (url: string) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

export function useProjectsAPI(category?: string, featured?: boolean) {
  const params = new URLSearchParams()
  if (category) params.set('category', category)
  if (featured !== undefined) params.set('featured', featured.toString())
  
  const url = `/api/projects${params.toString() ? `?${params.toString()}` : ''}`
  
  const { data, error, mutate, isLoading } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
    refreshInterval: 5 * 60 * 1000, // Refresh every 5 minutes
  })

  return {
    projects: data?.data?.projects || [],
    categories: data?.data?.categories || [],
    totalCount: data?.data?.totalCount || 0,
    loading: isLoading,
    error,
    mutate
  }
}

export function useProjectAPI(id: string, incrementViews = false) {
  const headers = incrementViews ? { 'X-Increment-Views': 'true' } : {}
  
  const { data, error, mutate, isLoading } = useSWR(
    id ? `/api/projects/${id}` : null,
    (url) => fetch(url, { headers }).then(res => res.json()),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  )

  const likeProject = useCallback(async () => {
    if (!id) return

    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'like' })
      })

      if (response.ok) {
        mutate() // Revalidate the data
      }
    } catch (err) {
      console.error('Error liking project:', err)
    }
  }, [id, mutate])

  const unlikeProject = useCallback(async () => {
    if (!id) return

    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'unlike' })
      })

      if (response.ok) {
        mutate() // Revalidate the data
      }
    } catch (err) {
      console.error('Error unliking project:', err)
    }
  }, [id, mutate])

  return {
    project: data?.data || null,
    loading: isLoading,
    error,
    mutate,
    likeProject,
    unlikeProject
  }
}

// Contact form submission hook
export function useContactForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<{ message: string; referenceId: string } | null>(null)

  const submitForm = useCallback(async (formData: any) => {
    setLoading(true)
    setError(null)
    setSuccess(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSuccess({
          message: result.message,
          referenceId: result.referenceId
        })
        return { success: true, referenceId: result.referenceId }
      } else {
        setError(result.error || 'An error occurred')
        return { success: false, error: result.error }
      }
    } catch (err) {
      const errorMessage = 'Network error. Please check your connection and try again.'
      setError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      setLoading(false)
    }
  }, [])

  const resetForm = useCallback(() => {
    setError(null)
    setSuccess(null)
    setLoading(false)
  }, [])

  return {
    submitForm,
    resetForm,
    loading,
    error,
    success
  }
}