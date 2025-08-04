import { NextRequest, NextResponse } from 'next/server'
import { ProjectsService, AnalyticsService } from '@/lib/firebase/services'
import { z } from 'zod'

// Query parameters validation
const projectsQuerySchema = z.object({
  category: z.string().optional(),
  featured: z.enum(['true', 'false']).optional(),
  limit: z.string().transform(Number).optional(),
  orderBy: z.enum(['createdAt', 'viewCount', 'likes']).optional(),
  order: z.enum(['asc', 'desc']).optional()
})

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Parse and validate query parameters
    const queryResult = projectsQuerySchema.safeParse({
      category: searchParams.get('category'),
      featured: searchParams.get('featured'),
      limit: searchParams.get('limit'),
      orderBy: searchParams.get('orderBy'),
      order: searchParams.get('order')
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

    const { category, featured, limit } = queryResult.data

    let projects

    // Handle different query types
    if (featured === 'true') {
      projects = await ProjectsService.getFeaturedProjects()
    } else if (category && category !== 'All') {
      projects = await ProjectsService.getProjectsByCategory(category)
    } else {
      projects = await ProjectsService.getAllProjects()
    }

    // Apply limit if specified
    if (limit && limit > 0) {
      projects = projects.slice(0, limit)
    }

    // Get project categories for filtering
    const categories = await ProjectsService.getProjectCategories()

    // Track API usage
    try {
      await AnalyticsService.trackEvent('projects_api_call', 'api_usage', {
        category: category || 'all',
        featured: featured || 'false',
        limit: limit || 'unlimited',
        results_count: projects.length
      })
    } catch (analyticsError) {
      console.error('Analytics tracking failed:', analyticsError)
    }

    return NextResponse.json({
      success: true,
      data: {
        projects,
        categories,
        totalCount: projects.length,
        filters: {
          category: category || 'All',
          featured: featured === 'true',
          limit: limit || null
        }
      }
    })

  } catch (error) {
    console.error('Projects API error:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch projects' 
      },
      { status: 500 }
    )
  }
}

// Health check and metadata endpoint
export async function HEAD() {
  try {
    const projects = await ProjectsService.getAllProjects()
    const categories = await ProjectsService.getProjectCategories()
    
    return new NextResponse(null, {
      status: 200,
      headers: {
        'X-Total-Projects': projects.length.toString(),
        'X-Categories-Count': categories.length.toString(),
        'X-Last-Modified': new Date().toISOString(),
        'Cache-Control': 'public, max-age=300, stale-while-revalidate=60'
      }
    })
  } catch (error) {
    return new NextResponse(null, { status: 500 })
  }
}