import { http, HttpResponse } from 'msw'

// Mock API responses for testing
export const handlers = [
  // Contact form submission
  http.post('/api/contact', async ({ request }) => {
    const body = await request.json() as {
      name?: string
      email?: string
      message?: string
      honeypot?: string
    }
    
    // Simulate validation
    if (!body?.name || !body?.email || !body?.message) {
      return HttpResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Simulate spam detection
    if (body?.honeypot) {
      return HttpResponse.json(
        { error: 'Spam detected' },
        { status: 400 }
      )
    }
    
    // Simulate successful submission
    return HttpResponse.json({
      success: true,
      message: 'Thank you for your message! I\'ll get back to you soon.',
      referenceId: 'TEST-REF-123456',
      timestamp: new Date().toISOString()
    })
  }),

  // Projects API
  http.get('/api/projects', () => {
    return HttpResponse.json({
      projects: [
        {
          id: 'project-1',
          title: 'E-Commerce Platform',
          description: 'A modern e-commerce platform built with Next.js',
          image: '/assets/images/portfolio/work1.png',
          technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
          category: 'web-development',
          featured: true,
          demoUrl: 'https://demo1.example.com',
          githubUrl: 'https://github.com/test/project1',
          status: 'completed',
          createdAt: '2024-01-01T00:00:00.000Z',
        },
        {
          id: 'project-2',
          title: 'Mobile Banking App',
          description: 'Secure mobile banking application',
          image: '/assets/images/portfolio/work2.png',
          technologies: ['React Native', 'Firebase', 'Node.js'],
          category: 'mobile-development',
          featured: false,
          demoUrl: null,
          githubUrl: 'https://github.com/test/project2',
          status: 'completed',
          createdAt: '2024-02-01T00:00:00.000Z',
        }
      ],
      total: 2,
      page: 1,
      limit: 12
    })
  }),

  // Individual project
  http.get('/api/projects/:id', ({ params }) => {
    const { id } = params
    
    if (id === 'project-1') {
      return HttpResponse.json({
        id: 'project-1',
        title: 'E-Commerce Platform',
        description: 'A modern e-commerce platform built with Next.js',
        longDescription: 'This is a comprehensive e-commerce platform featuring user authentication, shopping cart, payment processing, and admin dashboard.',
        image: '/assets/images/portfolio/work1.png',
        images: [
          '/assets/images/portfolio/work1.png',
          '/assets/images/portfolio/work2.png'
        ],
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
        category: 'web-development',
        featured: true,
        demoUrl: 'https://demo1.example.com',
        githubUrl: 'https://github.com/test/project1',
        status: 'completed',
        challenges: ['Payment integration', 'Real-time inventory'],
        solutions: ['Stripe webhooks', 'WebSocket connections'],
        impact: 'Increased client sales by 150%',
        createdAt: '2024-01-01T00:00:00.000Z',
        updatedAt: '2024-01-15T00:00:00.000Z'
      })
    }
    
    return HttpResponse.json(
      { error: 'Project not found' },
      { status: 404 }
    )
  }),

  // Analytics tracking
  http.post('/api/analytics', async ({ request }) => {
    const body = await request.json()
    
    return HttpResponse.json({
      success: true,
      eventId: 'event-123',
      timestamp: new Date().toISOString()
    })
  }),

  // Skills API (if needed for dynamic loading)
  http.get('/api/skills', () => {
    return HttpResponse.json({
      skills: [
        {
          id: 'frontend',
          name: 'Frontend Development',
          category: 'technical',
          level: 95,
          technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
        },
        {
          id: 'backend',
          name: 'Backend Development',
          category: 'technical', 
          level: 88,
          technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB']
        },
        {
          id: 'design',
          name: 'UI/UX Design',
          category: 'design',
          level: 82,
          technologies: ['Figma', 'Adobe XD', 'Sketch']
        }
      ]
    })
  }),

  // Health check
  http.get('/api/health', () => {
    return HttpResponse.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      version: '1.0.0'
    })
  }),

  // Error simulation for testing error handling
  http.get('/api/error', () => {
    return HttpResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }),

  // Slow response simulation
  http.get('/api/slow', async () => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    return HttpResponse.json({ message: 'Slow response' })
  }),
]

// Error handlers for testing error states
export const errorHandlers = [
  http.post('/api/contact', () => {
    return HttpResponse.json(
      { error: 'Service temporarily unavailable' },
      { status: 503 }
    )
  }),

  http.get('/api/projects', () => {
    return HttpResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    )
  }),
]