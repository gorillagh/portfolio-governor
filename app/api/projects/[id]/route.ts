import { NextRequest, NextResponse } from 'next/server'
import { ProjectsService, AnalyticsService } from '@/lib/firebase/services'

interface RouteParams {
  params: Promise<{ id: string }>
}

export async function GET(
  request: NextRequest,
  context: RouteParams
) {
  try {
    const { id } = await context.params

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Project ID is required' },
        { status: 400 }
      )
    }

    // Get project by ID
    const project = await ProjectsService.getProjectById(id)

    if (!project) {
      return NextResponse.json(
        { success: false, error: 'Project not found' },
        { status: 404 }
      )
    }

    // Check if we should increment view count
    const shouldIncrementViews = request.headers.get('X-Increment-Views') === 'true'
    
    if (shouldIncrementViews) {
      try {
        // Increment view count
        await ProjectsService.incrementViewCount(id)
        
        // Track project view
        await AnalyticsService.trackProjectView(id, project.title)
        
        // Update the project object with incremented view count
        project.viewCount += 1
      } catch (error) {
        console.error('Failed to increment view count:', error)
        // Don't fail the request if view tracking fails
      }
    }

    return NextResponse.json({
      success: true,
      data: project
    }, {
      headers: {
        'Cache-Control': 'public, max-age=300, stale-while-revalidate=60',
        'X-Project-Views': project.viewCount.toString(),
        'X-Project-Likes': project.likes.toString()
      }
    })

  } catch (error) {
    console.error('Project detail API error:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch project' 
      },
      { status: 500 }
    )
  }
}

// Handle project like/unlike
export async function PATCH(
  request: NextRequest,
  context: RouteParams
) {
  try {
    const { id } = await context.params
    const body = await request.json()

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Project ID is required' },
        { status: 400 }
      )
    }

    const { action } = body

    if (!action || !['like', 'unlike'].includes(action)) {
      return NextResponse.json(
        { success: false, error: 'Invalid action. Must be "like" or "unlike"' },
        { status: 400 }
      )
    }

    // Get project to verify it exists
    const project = await ProjectsService.getProjectById(id)

    if (!project) {
      return NextResponse.json(
        { success: false, error: 'Project not found' },
        { status: 404 }
      )
    }

    // Update like count
    const increment = action === 'like'
    await ProjectsService.toggleLike(id, increment)

    // Track like event
    if (increment) {
      try {
        await AnalyticsService.trackProjectLike(id, project.title)
      } catch (error) {
        console.error('Failed to track like event:', error)
      }
    }

    // Get updated project
    const updatedProject = await ProjectsService.getProjectById(id)

    return NextResponse.json({
      success: true,
      data: {
        id,
        likes: updatedProject?.likes || project.likes,
        action
      }
    })

  } catch (error) {
    console.error('Project like API error:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to update project likes' 
      },
      { status: 500 }
    )
  }
}