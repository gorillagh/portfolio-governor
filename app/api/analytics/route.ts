import { NextRequest, NextResponse } from 'next/server'
import { AnalyticsService } from '@/lib/firebase/services'
import { z } from 'zod'

// Event tracking request schema
const analyticsEventSchema = z.object({
  eventName: z.string().min(1).max(100),
  eventCategory: z.enum(['navigation', 'engagement', 'conversion', 'interaction']),
  properties: z.record(z.string(), z.any()).optional().default({}),
  userId: z.string().optional()
})

// Analytics query schema
const analyticsQuerySchema = z.object({
  category: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  limit: z.string().transform(Number).optional()
})

// POST - Track analytics event
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const result = analyticsEventSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid event data',
          details: result.error.flatten().fieldErrors 
        },
        { status: 400 }
      )
    }

    const { eventName, eventCategory, properties, userId } = result.data

    // Track the event
    await AnalyticsService.trackEvent(eventName, eventCategory, properties, userId)

    return NextResponse.json({
      success: true,
      message: 'Event tracked successfully'
    })

  } catch (error) {
    console.error('Analytics tracking error:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to track event' 
      },
      { status: 500 }
    )
  }
}

// GET - Retrieve analytics data (for admin/dashboard use)
export async function GET(request: NextRequest) {
  try {
    // Check for admin authentication (in production, use proper auth)
    const adminKey = request.headers.get('X-Admin-Key')
    if (adminKey !== process.env.ADMIN_API_KEY) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    
    const queryResult = analyticsQuerySchema.safeParse({
      category: searchParams.get('category'),
      startDate: searchParams.get('startDate'),
      endDate: searchParams.get('endDate'),
      limit: searchParams.get('limit')
    })

    if (!queryResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid query parameters',
          details: queryResult.error.flatten().fieldErrors 
        },
        { status: 400 }
      )
    }

    const { category, startDate, endDate, limit } = queryResult.data

    let events

    if (startDate && endDate) {
      // Get events in date range
      events = await AnalyticsService.getEventsInDateRange(
        new Date(startDate),
        new Date(endDate)
      )
    } else if (category) {
      // Get events by category
      events = await AnalyticsService.getEventsByCategory(category, limit || 100)
    } else {
      // Get recent events
      events = await AnalyticsService.getEventsByCategory('navigation', limit || 50)
    }

    return NextResponse.json({
      success: true,
      data: {
        events,
        totalCount: events.length,
        filters: {
          category,
          startDate,
          endDate,
          limit: limit || null
        }
      }
    })

  } catch (error) {
    console.error('Analytics retrieval error:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to retrieve analytics data' 
      },
      { status: 500 }
    )
  }
}

// Common event tracking endpoints
export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const action = searchParams.get('action')

    switch (action) {
      case 'page-view': {
        const { page_path, page_title } = await request.json()
        await AnalyticsService.trackPageView(page_path, page_title)
        break
      }

      case 'resume-download': {
        await AnalyticsService.trackResumeDownload()
        break
      }

      case 'external-link': {
        const { url, link_text } = await request.json()
        await AnalyticsService.trackExternalLinkClick(url, link_text)
        break
      }

      case 'contact-form': {
        const { inquiry_type } = await request.json()
        await AnalyticsService.trackContactFormSubmission(inquiry_type)
        break
      }

      default:
        return NextResponse.json(
          { success: false, error: 'Invalid action' },
          { status: 400 }
        )
    }

    return NextResponse.json({
      success: true,
      message: `${action} event tracked successfully`
    })

  } catch (error) {
    console.error('Quick analytics tracking error:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to track event' 
      },
      { status: 500 }
    )
  }
}