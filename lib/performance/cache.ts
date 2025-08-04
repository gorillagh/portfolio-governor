/**
 * Performance Optimization Utilities
 * 
 * This module provides caching, lazy loading, and performance monitoring
 * utilities for the portfolio application.
 */

import { unstable_cache } from 'next/cache'

// Cache configuration
export const CACHE_TAGS = {
  PROJECTS: 'projects',
  SKILLS: 'skills',
  TESTIMONIALS: 'testimonials',
  ANALYTICS: 'analytics'
} as const

export const CACHE_DURATIONS = {
  PROJECTS: 300, // 5 minutes
  SKILLS: 600, // 10 minutes
  TESTIMONIALS: 300, // 5 minutes
  ANALYTICS: 60, // 1 minute
  STATIC_CONTENT: 3600 // 1 hour
} as const

// Memory cache for client-side data
class MemoryCache {
  private cache = new Map<string, { data: any; expiry: number }>()
  private maxSize = 100

  set(key: string, data: any, ttlSeconds: number = 300) {
    // Clean up expired entries
    this.cleanup()

    // Remove oldest entries if cache is full
    if (this.cache.size >= this.maxSize) {
      const oldestKey = this.cache.keys().next().value
      if (oldestKey !== undefined) {
        this.cache.delete(oldestKey)
      }
    }

    const expiry = Date.now() + (ttlSeconds * 1000)
    this.cache.set(key, { data, expiry })
  }

  get(key: string) {
    const entry = this.cache.get(key)
    
    if (!entry) return null
    
    if (Date.now() > entry.expiry) {
      this.cache.delete(key)
      return null
    }
    
    return entry.data
  }

  delete(key: string) {
    this.cache.delete(key)
  }

  clear() {
    this.cache.clear()
  }

  private cleanup() {
    const now = Date.now()
    for (const [key, entry] of this.cache.entries()) {
      if (now > entry.expiry) {
        this.cache.delete(key)
      }
    }
  }

  // Cache statistics
  getStats() {
    return {
      size: this.cache.size,
      maxSize: this.maxSize,
      keys: Array.from(this.cache.keys())
    }
  }
}

export const memoryCache = new MemoryCache()

// Cached fetch function
export async function cachedFetch<T>(
  key: string,
  fetchFn: () => Promise<T>,
  ttlSeconds: number = 300
): Promise<T> {
  // Try memory cache first
  const cached = memoryCache.get(key)
  if (cached) {
    return cached
  }

  // Fetch data
  const data = await fetchFn()
  
  // Store in memory cache
  memoryCache.set(key, data, ttlSeconds)
  
  return data
}

// Server-side cache with Next.js unstable_cache
export const createCachedFunction = <T extends any[], R>(
  fn: (...args: T) => Promise<R>,
  keyParts: string[],
  options: {
    tags?: string[]
    revalidate?: number
  } = {}
) => {
  return unstable_cache(fn, keyParts, {
    tags: options.tags || [],
    revalidate: options.revalidate || CACHE_DURATIONS.STATIC_CONTENT
  })
}

// Image optimization utilities
export const imageOptimization = {
  // Generate responsive image sizes
  generateSizes: (breakpoints: { [key: string]: number }) => {
    return Object.entries(breakpoints)
      .map(([key, width]) => `(max-width: ${width}px) ${width}px`)
      .join(', ')
  },

  // Optimize image loading
  getImageProps: (src: string, alt: string, priority: boolean = false) => ({
    src,
    alt,
    priority,
    quality: 85,
    placeholder: 'blur' as const,
    blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
  })
}

// Lazy loading utilities
export const lazyLoad = {
  // Create intersection observer for lazy loading
  createObserver: (
    callback: (entries: IntersectionObserverEntry[]) => void,
    options: IntersectionObserverInit = {}
  ) => {
    if (typeof window === 'undefined') return null

    const defaultOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    }

    return new IntersectionObserver(callback, defaultOptions)
  },

  // Lazy load component when it enters viewport
  observeElement: (
    element: Element,
    callback: () => void,
    options?: IntersectionObserverInit
  ) => {
    const observer = lazyLoad.createObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback()
            observer?.unobserve(entry.target)
          }
        })
      },
      options
    )

    if (observer) {
      observer.observe(element)
      return () => observer.unobserve(element)
    }

    return () => {}
  }
}

// Performance monitoring
export const performanceMonitor = {
  // Measure function execution time
  measure: async <T>(
    name: string,
    fn: () => Promise<T>
  ): Promise<{ result: T; duration: number }> => {
    const start = performance.now()
    const result = await fn()
    const duration = performance.now() - start

    // Log performance metrics
    if (typeof window !== 'undefined' && duration > 100) {
      console.warn(`Slow operation: ${name} took ${duration.toFixed(2)}ms`)
    }

    return { result, duration }
  },

  // Track Core Web Vitals
  trackWebVitals: () => {
    if (typeof window === 'undefined') return

    // Largest Contentful Paint
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime)
        }
      })
    })

    try {
      observer.observe({ type: 'largest-contentful-paint', buffered: true })
    } catch (e) {
      // LCP not supported
    }

    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry: any) => {
        if (entry.name === 'first-input') {
          const fid = entry.processingStart - entry.startTime
          console.log('FID:', fid)
        }
      })
    })

    try {
      fidObserver.observe({ type: 'first-input', buffered: true })
    } catch (e) {
      // FID not supported
    }

    // Cumulative Layout Shift
    let clsValue = 0
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value
          console.log('CLS:', clsValue)
        }
      })
    })

    try {
      clsObserver.observe({ type: 'layout-shift', buffered: true })
    } catch (e) {
      // CLS not supported
    }
  },

  // Bundle size analysis
  analyzeBundleSize: () => {
    if (typeof window === 'undefined') return

    const resources = performance.getEntriesByType('resource')
    const jsResources = resources.filter((resource) => 
      resource.name.includes('.js') && !resource.name.includes('node_modules')
    )

    const totalSize = jsResources.reduce((total, resource: any) => {
      return total + (resource.transferSize || 0)
    }, 0)

    console.log('Total JS bundle size:', (totalSize / 1024).toFixed(2), 'KB')
    
    return {
      totalSize,
      resources: jsResources.map((resource: any) => ({
        name: resource.name,
        size: resource.transferSize,
        loadTime: resource.responseEnd - resource.responseStart
      }))
    }
  }
}

// Debounce utility for performance
export function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | undefined

  return (...args: Parameters<T>) => {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Throttle utility for performance
export function throttle<T extends (...args: any[]) => void>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Preload resources
export const preload = {
  // Preload critical resources
  image: (src: string) => {
    if (typeof window === 'undefined') return

    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src
    document.head.appendChild(link)
  },

  // Preload fonts
  font: (href: string, type: string = 'font/woff2') => {
    if (typeof window === 'undefined') return

    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'font'
    link.type = type
    link.href = href
    link.crossOrigin = 'anonymous'
    document.head.appendChild(link)
  },

  // Prefetch next page resources
  page: (href: string) => {
    if (typeof window === 'undefined') return

    const link = document.createElement('link')
    link.rel = 'prefetch'
    link.href = href
    document.head.appendChild(link)
  }
}