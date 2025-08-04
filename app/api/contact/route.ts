import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'
import { ContactService } from '@/lib/firebase/services'
import { AnalyticsService } from '@/lib/firebase/services'
import { ContactInquiryEmail } from '@/components/emails/ContactInquiryEmail'
import { AutoResponseEmail } from '@/components/emails/AutoResponseEmail'
import { headers } from 'next/headers'

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)

// Request validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  company: z.string().max(100).optional(),
  inquiryType: z.enum(['recruitment', 'consulting', 'speaking', 'general']),
  budget: z.enum(['$500-1000', '$1000-2000', '$2000-5000', '$5000+']).optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200),
  message: z.string().min(20, 'Message must be at least 20 characters').max(2000),
  honeypot: z.string().max(0, 'Spam detected') // Anti-spam honeypot field
})

// Rate limiting storage (in production, use Redis or database)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

// Rate limiting function
function checkRateLimit(ip: string): { allowed: boolean; resetTime?: number } {
  const now = Date.now()
  const windowMs = 60 * 60 * 1000 // 1 hour
  const maxRequests = 5 // Max 5 requests per hour per IP

  const existing = rateLimitStore.get(ip)
  
  if (!existing || now > existing.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs })
    return { allowed: true }
  }

  if (existing.count >= maxRequests) {
    return { allowed: false, resetTime: existing.resetTime }
  }

  existing.count++
  return { allowed: true }
}

// Get client IP address
function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  
  if (realIP) {
    return realIP
  }
  
  return 'unknown'
}

// Generate reference ID
function generateReferenceId(): string {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, '')
  const random = Math.random().toString(36).substr(2, 6).toUpperCase()
  return `INQ-${date}-${random}`
}

export async function POST(request: NextRequest) {
  try {
    // Get client information
    const clientIP = getClientIP(request)
    const userAgent = request.headers.get('user-agent') || 'unknown'
    const referer = request.headers.get('referer') || ''

    // Rate limiting
    const rateLimit = checkRateLimit(clientIP)
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Rate limit exceeded. Please try again later.',
          resetTime: rateLimit.resetTime 
        },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const result = contactFormSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Validation failed',
          details: result.error.flatten().fieldErrors 
        },
        { status: 400 }
      )
    }

    const formData = result.data

    // Generate reference ID
    const referenceId = generateReferenceId()

    // Determine email subject and priority based on inquiry type
    const emailConfig = {
      recruitment: {
        subject: `🎯 Recruitment Inquiry - ${formData.subject}`,
        priority: 'high' as const,
        autoResponseTemplate: 'recruitment'
      },
      consulting: {
        subject: `💼 Consulting Request - ${formData.subject}`,
        priority: 'high' as const,
        autoResponseTemplate: 'consulting'
      },
      speaking: {
        subject: `🎤 Speaking Opportunity - ${formData.subject}`,
        priority: 'medium' as const,
        autoResponseTemplate: 'speaking'
      },
      general: {
        subject: `💬 General Inquiry - ${formData.subject}`,
        priority: 'medium' as const,
        autoResponseTemplate: 'general'
      }
    }

    const config = emailConfig[formData.inquiryType]

    // Store inquiry in Firebase
    const inquiryId = await ContactService.submitInquiry({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      inquiryType: formData.inquiryType,
      budget: formData.budget,
      subject: formData.subject,
      message: formData.message,
      priority: config.priority,
      tags: [],
      ipAddress: clientIP,
      userAgent,
      referrer: referer
    })

    // Send notification email to me
    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'portfolio@albertnartey.com',
        to: [process.env.CONTACT_EMAIL || 'albert@albertnartey.com'],
        subject: `[${referenceId}] ${config.subject}`,
        react: ContactInquiryEmail({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          inquiryType: formData.inquiryType,
          budget: formData.budget,
          subject: formData.subject,
          message: formData.message,
          referenceId,
          clientIP,
          userAgent,
          referer
        }),
        headers: {
          'X-Priority': config.priority === 'high' ? '1' : '3',
          'X-Entity-Ref-ID': referenceId
        }
      })
    } catch (emailError) {
      console.error('Failed to send notification email:', emailError)
      // Don't fail the request if notification email fails
    }

    // Send auto-response email to user
    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'portfolio@albertnartey.com',
        to: [formData.email],
        subject: `Thank you for reaching out! (Ref: ${referenceId})`,
        react: AutoResponseEmail({
          name: formData.name,
          inquiryType: formData.inquiryType,
          referenceId,
          subject: formData.subject
        }),
        headers: {
          'X-Entity-Ref-ID': referenceId
        }
      })
    } catch (emailError) {
      console.error('Failed to send auto-response email:', emailError)
      // Don't fail the request if auto-response fails
    }

    // Track analytics event
    try {
      await AnalyticsService.trackContactFormSubmission(formData.inquiryType)
    } catch (analyticsError) {
      console.error('Failed to track analytics:', analyticsError)
      // Don't fail the request if analytics fails
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Thank you for your inquiry! I'll get back to you within 24 hours.",
      referenceId,
      inquiryId
    })

  } catch (error) {
    console.error('Contact form error:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error. Please try again later.' 
      },
      { status: 500 }
    )
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    service: 'contact-api'
  })
}

// Handle OPTIONS for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': process.env.NODE_ENV === 'production' 
        ? process.env.NEXT_PUBLIC_SITE_URL || 'https://albertnartey.com'
        : '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  })
}