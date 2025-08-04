'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { useAnalytics } from '@/lib/hooks/useFirebaseData'

// Google Analytics configuration
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID

// Extend window type for gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: Record<string, any>
    ) => void
  }
}

interface AnalyticsProviderProps {
  children: React.ReactNode
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { trackPageView } = useAnalytics()

  // Track page views when route changes
  useEffect(() => {
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '')
    const title = document.title

    // Google Analytics
    if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
        page_title: title,
      })
    }

    // Firebase Analytics
    trackPageView(url, title)

    // Custom event for page load performance
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart
        
        // Track load time if it's reasonable (not 0 and not too high)
        if (loadTime > 0 && loadTime < 10000) {
          setTimeout(() => {
            if (window.gtag && GA_MEASUREMENT_ID) {
              window.gtag('event', 'page_load_time', {
                value: Math.round(loadTime),
                custom_parameter: url
              })
            }
          }, 1000)
        }
      }
    }
  }, [pathname, searchParams, trackPageView])

  return (
    <>
      {/* Google Analytics */}
      {GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                send_page_view: false, // We handle this manually
                anonymize_ip: true,
                allow_google_signals: false,
                allow_ad_personalization_signals: false
              });
            `}
          </Script>
        </>
      )}

      {/* Vercel Analytics */}
      <Analytics />
      
      {/* Vercel Speed Insights */}
      <SpeedInsights />

      {children}
    </>
  )
}

// Custom hook for tracking specific events
export function useGoogleAnalytics() {
  const trackEvent = (
    eventName: string,
    parameters: Record<string, any> = {}
  ) => {
    if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
      window.gtag('event', eventName, {
        ...parameters,
        send_to: GA_MEASUREMENT_ID
      })
    }
  }

  const trackPurchase = (transactionId: string, value: number, currency = 'USD') => {
    trackEvent('purchase', {
      transaction_id: transactionId,
      value,
      currency
    })
  }

  const trackSignUp = (method: string) => {
    trackEvent('sign_up', {
      method
    })
  }

  const trackLogin = (method: string) => {
    trackEvent('login', {
      method
    })
  }

  const trackShare = (contentType: string, itemId: string) => {
    trackEvent('share', {
      content_type: contentType,
      item_id: itemId
    })
  }

  const trackSearch = (searchTerm: string) => {
    trackEvent('search', {
      search_term: searchTerm
    })
  }

  const trackViewItem = (itemId: string, itemName: string, itemCategory: string) => {
    trackEvent('view_item', {
      item_id: itemId,
      item_name: itemName,
      item_category: itemCategory
    })
  }

  const trackSelectContent = (contentType: string, itemId: string) => {
    trackEvent('select_content', {
      content_type: contentType,
      item_id: itemId
    })
  }

  const trackTiming = (name: string, value: number, category?: string, label?: string) => {
    trackEvent('timing_complete', {
      name,
      value,
      event_category: category,
      event_label: label
    })
  }

  return {
    trackEvent,
    trackPurchase,
    trackSignUp,
    trackLogin,
    trackShare,
    trackSearch,
    trackViewItem,
    trackSelectContent,
    trackTiming
  }
}

// Portfolio-specific analytics events
export function usePortfolioAnalytics() {
  const { trackEvent } = useGoogleAnalytics()
  const { trackEvent: trackFirebaseEvent, trackResumeDownload, trackExternalLinkClick } = useAnalytics()

  const trackProjectView = (projectId: string, projectTitle: string) => {
    trackEvent('view_project', {
      project_id: projectId,
      project_title: projectTitle
    })
    trackFirebaseEvent('project_view', 'engagement', {
      project_id: projectId,
      project_title: projectTitle
    })
  }

  const trackProjectLike = (projectId: string, projectTitle: string) => {
    trackEvent('like_project', {
      project_id: projectId,
      project_title: projectTitle
    })
    trackFirebaseEvent('project_like', 'engagement', {
      project_id: projectId,
      project_title: projectTitle
    })
  }

  const trackContactFormSubmit = (inquiryType: string, hasCompany: boolean, hasBudget: boolean) => {
    trackEvent('submit_contact_form', {
      inquiry_type: inquiryType,
      has_company: hasCompany,
      has_budget: hasBudget
    })
    trackFirebaseEvent('contact_form_submit', 'conversion', {
      inquiry_type: inquiryType,
      has_company: hasCompany,
      has_budget: hasBudget
    })
  }

  const trackResumeDownloadEvent = () => {
    trackEvent('download_resume', {
      file_type: 'pdf'
    })
    trackResumeDownload()
  }

  const trackExternalLinkClickEvent = (url: string, linkText: string, section: string) => {
    trackEvent('click_external_link', {
      link_url: url,
      link_text: linkText,
      page_section: section
    })
    trackExternalLinkClick(url, linkText)
  }

  const trackSkillsInteraction = (skillCategory: string, action: string) => {
    trackEvent('interact_skills', {
      skill_category: skillCategory,
      interaction_type: action
    })
    trackFirebaseEvent('skills_interaction', 'engagement', {
      skill_category: skillCategory,
      action
    })
  }

  const trackTestimonialView = (testimonialId: string, clientName: string) => {
    trackEvent('view_testimonial', {
      testimonial_id: testimonialId,
      client_name: clientName
    })
    trackFirebaseEvent('testimonial_view', 'engagement', {
      testimonial_id: testimonialId,
      client_name: clientName
    })
  }

  const trackSectionScroll = (sectionName: string, scrollPercentage: number) => {
    trackEvent('scroll_section', {
      section_name: sectionName,
      scroll_percentage: scrollPercentage
    })
    trackFirebaseEvent('section_scroll', 'engagement', {
      section_name: sectionName,
      scroll_percentage: scrollPercentage
    })
  }

  return {
    trackProjectView,
    trackProjectLike,
    trackContactFormSubmit,
    trackResumeDownload: trackResumeDownloadEvent,
    trackExternalLinkClick: trackExternalLinkClickEvent,
    trackSkillsInteraction,
    trackTestimonialView,
    trackSectionScroll
  }
}