# Product Requirements Document (PRD) - New Project

## Document Information

- **Project Name**: Albert Nartey Portfolio
- **PRD Version**: 2.0 (Improved with MVP-First Approach)
- **Date**: 2025-08-02
- **Author(s)**: Albert Nartey
- **Last Updated**: 2025-08-03
- **Status**: Ready for Implementation
- **Project Type**: New Project - Portfolio Website (Phased Delivery)

---

## Table of Contents

1. [Quick Start Action Plan](#0-quick-start-action-plan)
2. [Executive Summary](#1-executive-summary)
3. [Success Metrics & KPIs](#2-success-metrics--kpis)
4. [User Stories & Requirements](#3-user-stories--requirements)
5. [Technical Architecture](#4-technical-architecture)
6. [Implementation Specifications](#5-implementation-specifications)
7. [Dependencies & Constraints](#6-dependencies--constraints)
8. [Testing Strategy](#7-testing-strategy)
9. [Security & Compliance](#8-security--compliance)
10. [Deployment & DevOps](#9-deployment--devops)
11. [Project Timeline & Milestones](#10-project-timeline--milestones)
12. [Risk Assessment](#11-risk-assessment)
13. [AI Implementation Guide](#12-ai-implementation-guide)
14. [Approval & Sign-off](#13-approval--sign-off)
15. [Appendices](#14-appendices)

---

## 0. Quick Start Action Plan

### Immediate Actions (Do Today!)

#### 1. Domain & Accounts Setup (1 hour)

```bash
# Register domain immediately (for SEO indexing)
# Recommended: Namecheap or Google Domains
# albertnartey.com or your preferred domain

# Create accounts:
- [ ] GitHub (if not existing)
- [ ] Vercel (free account)
- [ ] Resend (free tier)
- [ ] Google Account (for analytics later)
```

#### 2. Initialize Project (30 minutes)

```bash
# Open terminal and run:
npx create-next-app@latest portfolio \
  --typescript \
  --tailwind \
  --app \
  --src-dir=false \
  --import-alias="@/*" \
  --use-pnpm

cd portfolio
git init
git branch -M main

# Install shadcn/ui
pnpm dlx shadcn@latest init -d

# Create GitHub repo and push
git remote add origin https://github.com/[your-username]/portfolio
git add .
git commit -m "Initial setup"
git push -u origin main
```

#### 3. Deploy Immediately (15 minutes)

```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy and connect domain
vercel --prod

# Follow prompts to:
# 1. Link to Vercel account
# 2. Connect to GitHub repo
# 3. Configure domain
```

#### 4. SEO Placeholder (15 minutes)

Create a basic landing page with SEO meta tags:

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: "Albert Nartey - Software Architect & AI Consultant",
  description:
    "Experienced Software Architect specializing in React, Next.js, and AI/ML solutions. Available for consulting and development projects.",
  openGraph: {
    title: "Albert Nartey Portfolio",
    description: "Software Architect & AI Consultant",
    url: "https://albertnartey.com",
    siteName: "Albert Nartey Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Albert Nartey - Software Architect",
    description: "Software Architect & AI Consultant",
    images: ["/twitter-image.jpg"],
  },
};
```

#### 5. Basic Coming Soon Page (30 minutes)

```typescript
// app/page.tsx
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Albert Nartey</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Software Architect & AI Consultant
      </p>
      <p className="text-lg">Portfolio launching September 2025</p>
      <Button asChild className="mt-8">
        <a href="mailto:your@email.com">Get in Touch</a>
      </Button>
    </main>
  );
}
```

Deploy this immediately to start SEO indexing!

### Week 0 Prep Checklist

#### Content Preparation (Start Now!)

- [ ] Write 2-3 project summaries (100-200 words each)
- [ ] Update resume to latest version
- [ ] Collect 5-10 project screenshots
- [ ] Draft 3-5 skills categories with items
- [ ] Write professional bio (200 words)
- [ ] List 3-4 services you offer

#### Technical Preparation

- [ ] Install VS Code extensions: Tailwind CSS IntelliSense, ESLint, Prettier
- [ ] Setup local development environment
- [ ] Test deployment pipeline works
- [ ] Configure custom domain DNS
- [ ] Submit site to Google Search Console

### Success Criteria for Week 1

By end of Week 1, you should have:

1. ✅ Live site at your domain
2. ✅ 4 main pages (Home, About, Projects, Contact)
3. ✅ Working contact form
4. ✅ Mobile responsive design
5. ✅ 2-3 projects displayed

### Daily Time Allocation

```
Morning (1 hour):
- Content writing/gathering
- Screenshot preparation

Evening (3-4 hours):
- Coding and development
- Testing and deployment

Total: 4-5 hours/day = 28-35 hours/week
```

---

## 1. Executive Summary

### 1.1 Project Overview

The Albert Nartey Portfolio is a **phased, MVP-first** web platform designed to showcase software architecture expertise, AI/machine learning capabilities, and professional engineering services. By launching a functional MVP in 2 weeks and iterating improvements, this approach ensures early SEO benefits, faster feedback, and reduced risk of missing deadlines. The platform will feature a modern, responsive design built with Next.js and Tailwind CSS.

### 1.2 Business Justification

#### Problem Statement

Currently experiencing a fragmented digital presence with no cohesive platform effectively showcasing the combination of software architecture, AI/machine learning expertise, and professional engineering work. This fragmentation leads to missed opportunities and inefficient client acquisition.

#### Expected Business Impact

- **Revenue Generation**: 3-5 consulting clients monthly generating $500-2000 per client
- **Career Advancement**: Positioning for Senior Software Architect/AI roles with increased visibility
- **Lead Conversion**: Target 20% conversion rate from visitor to inquiry
- **Freelance Income**: $3,000-5,000 monthly freelance income through the platform
- **Professional Networking**: Enhanced LinkedIn profile views (+300/month) and industry connections

#### MVP Strategy Benefits

- **Early SEO Indexing**: Deploy domain Week 0 for search engine crawling
- **Reduced Risk**: Launch 2 weeks early to ensure conference deadline
- **Faster Iteration**: Get real user feedback starting Week 2
- **Lower Costs**: Start with free tiers, scale based on actual traffic
- **Content Flexibility**: Launch with basic content, enhance progressively

### 1.3 Project Scope

#### MVP Phase (Weeks 1-2) - Core Launch

- **Project Gallery**: 4 featured projects with descriptions and tech stacks
- **About Me Section**: Professional summary and skills overview
- **Contact Form**: Basic contact form with email integration
- **Responsive Design**: Mobile-first approach for all core pages
- **SEO Foundation**: Meta tags, sitemap, and structured data

#### Enhancement Phase (Weeks 3-4) - Polish

- **Resume Section**: Downloadable PDF resume
- **Project Details**: Individual project pages with case studies
- **Testimonials**: 2-3 client testimonials (if content ready)
- **Service Offerings**: Basic service descriptions
- **Performance Optimization**: Image optimization, caching

#### Post-Launch Phase (Month 2)

- **Advanced Features**: Animations with Framer Motion
- **Analytics Integration**: Google Analytics or Vercel Analytics
- **Content Expansion**: Additional projects and testimonials
- **Interactive Elements**: Hover effects, smooth scrolling
- **A/B Testing**: Optimize conversion elements

#### Future Considerations (Month 3+)

- Blog section with technical articles
- Newsletter subscription system
- Dark mode toggle with system preference
- AI-powered chatbot for engagement
- Payment processing for bookings
- Advanced animations and 3D graphics
- Client portal or dashboard

---

## 2. Success Metrics & KPIs

### 2.1 Performance Metrics

- **Page Load Time**: <2 seconds on 3G network connection
- **Lighthouse Score**: 90+ across all categories (Performance, Accessibility, Best Practices, SEO)
- **Accessibility**: WCAG 2.1 AA compliance with 100% keyboard navigability
- **Uptime**: 99.9% availability with <5 minutes monthly downtime
- **SEO Ranking**: Top 3 Google results for target keywords within 6 months
- **Core Web Vitals**: LCP <2.5s, FID <100ms, CLS <0.1

### 2.2 Business Metrics

- **Interview Requests**: 4-6 recruiter/company interview requests per month
- **Consulting Inquiries**: 3+ qualified consulting project inquiries monthly
- **Speaking Opportunities**: 1 speaking/workshop invitation per quarter
- **LinkedIn Impact**: +300 profile views monthly attributed to portfolio traffic
- **Revenue Attribution**: Track and attribute $3-5K monthly revenue to portfolio leads
- **Conversion Rate**: 10-15% visitor to contact form submission

### 2.3 Technical Metrics

- **Visitor Traffic**: 500+ unique visitors by month 3
- **Session Duration**: Average 2.5 minutes per session
- **Resume Downloads**: 30+ resume downloads monthly
- **Project Engagement**: 60% of visitors view at least 2 projects
- **Mobile Traffic**: Successfully handle 40-50% mobile traffic
- **Browser Compatibility**: 100% functionality across Chrome, Firefox, Safari, Edge

---

## 3. User Stories & Requirements

### 3.1 Main User Stories

#### Story 1: Tech Recruiter Discovery

**As a** Tech Recruiter  
**I want** to quickly assess technical skills and view relevant projects  
**So that** I can determine if the candidate fits our senior software architect/AI positions  
**Acceptance Criteria**:

- Skills section loads within 1 second showing categorized technical competencies
- Project gallery displays 4-6 projects with technology tags visible
- One-click resume download in PDF format
- Contact form pre-fills with "Recruitment Inquiry" option

#### Story 2: Startup Founder Evaluation

**As a** Startup Founder needing AI/ML consultation  
**I want** to review AI projects and understand service offerings  
**So that** I can evaluate expertise and initiate a consulting engagement  
**Acceptance Criteria**:

- AI/ML projects highlighted with clear problem-solution-impact format
- Service offerings page details AI consultation packages with pricing ranges
- Case studies include quantifiable business outcomes
- Contact form includes project budget range selection

#### Story 3: Hiring Manager Assessment

**As a** Hiring Manager  
**I want** to see code samples and technical implementation details  
**So that** I can evaluate coding standards and problem-solving approach  
**Acceptance Criteria**:

- Each project includes GitHub repository link
- Live demo links functional with loading time <3 seconds
- Technical stack clearly listed for each project
- Code snippets or architecture diagrams available

#### Story 4: Event Organizer Research

**As an** Event Organizer  
**I want** to review speaking experience and expertise areas  
**So that** I can invite for conferences or workshops  
**Acceptance Criteria**:

- About section includes speaking history and topics
- Downloadable speaker one-pager available
- Contact form includes "Speaking Request" option
- Links to previous talk recordings or slides

#### Story 5: Developer Learning

**As a** Developer  
**I want** to learn from project implementations  
**So that** I can improve my own skills  
**Acceptance Criteria**:

- Projects include technical blog posts or documentation
- GitHub repositories are well-documented with README files
- Technology choices explained with rationale
- Open source contributions highlighted

### 3.2 Acceptance Criteria

#### Global Acceptance Criteria

- All pages load completely within 2 seconds on 4G connection
- Navigation menu accessible on all screen sizes (320px to 4K)
- All interactive elements have hover and focus states
- Form submissions provide clear success/error feedback
- External links open in new tabs with security attributes
- Browser back button maintains expected navigation flow

#### Component-Specific Criteria

- **Project Cards**: Display title, description (50 chars), tech stack, and thumbnail
- **Contact Form**: Validate email format, require all fields, show submission confirmation
- **Resume Download**: Track downloads via analytics, serve PDF with proper headers
- **Testimonials**: Rotate automatically every 8 seconds with manual controls

### 3.3 Data Models & Validation

#### Project Model

```typescript
interface Project {
  id: string; // UUID
  title: string; // Max 100 chars
  shortDescription: string; // Max 200 chars
  longDescription: string; // Markdown, max 5000 chars
  technologies: string[]; // Array of tech tags
  githubUrl?: string; // Valid GitHub URL
  liveUrl?: string; // Valid HTTPS URL
  thumbnail: string; // Image path, max 500KB
  screenshots: string[]; // Array of image paths
  category: "frontend" | "ai-ml" | "fullstack";
  featured: boolean;
  createdDate: Date;
  clientName?: string; // For testimonial attribution
}
```

#### Contact Form Model

```typescript
interface ContactForm {
  name: string; // Required, 2-100 chars
  email: string; // Required, valid email format
  company?: string; // Optional, max 100 chars
  inquiryType: "recruitment" | "consulting" | "speaking" | "general";
  budget?: "$500-1000" | "$1000-2000" | "$2000-5000" | "$5000+";
  message: string; // Required, 10-1000 chars
  honeypot: string; // Must be empty (spam protection)
  timestamp: Date;
}
```

#### Testimonial Model

```typescript
interface Testimonial {
  id: string;
  clientName: string; // Required, max 100 chars
  clientTitle: string; // Required, max 100 chars
  company: string; // Required, max 100 chars
  testimonialText: string; // Required, 50-500 chars
  rating: number; // 1-5 stars
  projectId?: string; // Link to related project
  photoUrl?: string; // Client photo, optional
  date: Date;
}
```

### 3.4 API Requirements

#### Contact Form Submission

```
POST /api/contact
Request:
{
  "name": "string",
  "email": "string",
  "company": "string?",
  "inquiryType": "string",
  "budget": "string?",
  "message": "string",
  "honeypot": "string"
}

Response (Success - 200):
{
  "success": true,
  "message": "Thank you for your inquiry. I'll respond within 24 hours.",
  "referenceId": "string"
}

Response (Error - 400):
{
  "success": false,
  "errors": {
    "field": "error message"
  }
}
```

#### Projects API

```
GET /api/projects
Response (200):
{
  "projects": Project[],
  "totalCount": number,
  "categories": string[]
}

GET /api/projects/:id
Response (200): Project object
Response (404): { "error": "Project not found" }
```

### 3.5 Business Logic Specifications

#### Contact Form Processing

1. **Validation Flow**:

   - Check honeypot field is empty (anti-spam)
   - Validate email format using regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
   - Ensure message length between 10-1000 characters
   - Rate limit: Max 3 submissions per IP per hour

2. **Email Routing Logic**:

   - Recruitment inquiries → Include resume attachment
   - Consulting inquiries → Include service package PDF
   - Speaking requests → Include speaker one-pager
   - All emails CC to backup email address

3. **Auto-Response Logic**:
   - Send confirmation within 1 minute
   - Include reference number for tracking
   - Set expectation for response time (24-48 hours)

#### Project Display Algorithm

1. Featured projects appear first (sorted by date)
2. Non-featured projects sorted by category then date
3. Maximum 6 projects on homepage, rest on projects page
4. Related projects shown based on shared technologies

### 3.6 Non-Functional Requirements

#### Performance Requirements

- Time to Interactive (TTI): <3.5 seconds
- First Contentful Paint (FCP): <1.5 seconds
- Image optimization: WebP format with fallbacks
- Lazy loading for below-fold images
- CDN usage for static assets

#### Browser Support

- Chrome 90+ (Windows, Mac, Mobile)
- Firefox 88+ (Windows, Mac)
- Safari 14+ (Mac, iOS)
- Edge 90+ (Windows)
- Mobile browsers: iOS Safari 14+, Chrome Mobile 90+

#### Accessibility Standards

- WCAG 2.1 Level AA compliance
- Keyboard navigation for all interactive elements
- Screen reader compatibility (NVDA, JAWS, VoiceOver)
- Minimum contrast ratio 4.5:1 for normal text
- Focus indicators visible on all interactive elements
- Alt text for all images
- ARIA labels for icon buttons

---

## 4. Technical Architecture

### 4.1 Technology Stack

#### MVP Stack (Weeks 1-2)

- **Framework**: Next.js 15.1.x with App Router
- **UI Library**: shadcn/ui (latest components)
- **Language**: TypeScript 5.6.x
- **Styling**: Tailwind CSS 4.1.x
- **Icons**: Lucide React (recommended with shadcn/ui)
- **Email**: Resend (modern email API)
- **Hosting**: Vercel (free tier)
- **Analytics**: Vercel Analytics (built-in)

#### Enhancement Stack (Weeks 3-4)

- **Animation**: Framer Motion 11.x (add later for performance)
- **Database**: Supabase or Firebase Firestore (start static)
- **Storage**: Uploadthing or Cloudinary (for images)
- **Form Handling**: React Hook Form + Zod validation
- **SEO**: Next.js built-in metadata API
- **State Management**: Zustand (lightweight alternative to Redux)

#### Production Stack (Post-Launch)

- **Monitoring**: Vercel Analytics + Web Vitals
- **Error Tracking**: Sentry (free tier)
- **CDN**: Vercel Edge Network (automatic)
- **A/B Testing**: Vercel Edge Config
- **Advanced Analytics**: PostHog or Google Analytics 4

#### Development Tools

- **Version Control**: Git with GitHub
- **Package Manager**: pnpm (recommended for faster installs)
- **Build Tool**: Next.js built-in (Turbopack)
- **Linting**: ESLint with Next.js config + eslint-config-prettier
- **Formatting**: Prettier with Tailwind plugin
- **Type Checking**: TypeScript strict mode
- **Component Development**: Storybook (optional)
- **API Testing**: Thunder Client or Postman

### 4.2 System Architecture

#### Component Architecture

```
portfolio/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage
│   ├── projects/
│   │   ├── page.tsx         # Projects gallery
│   │   └── [id]/page.tsx    # Individual project
│   ├── about/page.tsx       # About section
│   ├── services/page.tsx    # Service offerings
│   ├── contact/page.tsx     # Contact form
│   └── api/
│       ├── contact/route.ts # Contact form API
│       └── projects/route.ts # Projects API
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Footer.tsx       # Footer with links
│   │   └── Layout.tsx       # Main layout wrapper
│   ├── home/
│   │   ├── Hero.tsx         # Hero section
│   │   ├── FeaturedProjects.tsx
│   │   └── Testimonials.tsx
│   ├── projects/
│   │   ├── ProjectCard.tsx  # Project card component
│   │   ├── ProjectGrid.tsx  # Projects grid layout
│   │   └── ProjectFilter.tsx # Category filter
│   └── common/
│       ├── Button.tsx       # Reusable button
│       ├── Card.tsx         # Card component
│       └── Form/            # Form components
├── lib/
│   ├── api.ts              # API utilities
│   ├── constants.ts        # App constants
│   └── utils.ts            # Helper functions
├── public/
│   ├── images/             # Static images
│   ├── resume.pdf          # Downloadable resume
│   └── favicon.ico         # Site favicon
└── styles/
    └── globals.css         # Global styles

```

#### Data Flow Architecture

1. **Static Generation**: Homepage, About, Services pages built at compile time
2. **Dynamic Rendering**: Project details fetched on-demand
3. **Client Components**: Interactive elements (forms, filters) render client-side
4. **API Routes**: Handle form submissions and data fetching
5. **Caching Strategy**:
   - Static pages cached at edge (1 week)
   - API responses cached (5 minutes)
   - Images cached (1 month)

### 4.3 Database Schema

#### Firestore Collections

**projects**

```javascript
{
  id: "auto-generated",
  title: "Project Name",
  shortDescription: "Brief description",
  longDescription: "Detailed markdown content",
  technologies: ["React", "TypeScript", "Node.js"],
  githubUrl: "https://github.com/...",
  liveUrl: "https://...",
  thumbnail: "path/to/thumbnail.webp",
  screenshots: ["path/to/screenshot1.webp"],
  category: "frontend",
  featured: true,
  order: 1,
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

**testimonials**

```javascript
{
  id: "auto-generated",
  clientName: "John Doe",
  clientTitle: "CEO",
  company: "TechCorp",
  testimonialText: "Excellent work...",
  rating: 5,
  projectId: "project-id",
  photoUrl: "path/to/photo.webp",
  featured: true,
  createdAt: Timestamp
}
```

**inquiries**

```javascript
{
  id: "auto-generated",
  name: "Contact Name",
  email: "email@example.com",
  company: "Company Name",
  inquiryType: "consulting",
  budget: "$1000-2000",
  message: "Inquiry message...",
  status: "new",
  createdAt: Timestamp,
  respondedAt: Timestamp
}
```

### 4.4 API Design

#### RESTful Endpoints

**Projects Endpoints**

```
GET /api/projects
Query Parameters:
  - category: string (optional)
  - featured: boolean (optional)
  - limit: number (default: 10)
Response: 200 OK
{
  "success": true,
  "data": Project[],
  "total": number
}

GET /api/projects/:id
Response: 200 OK
{
  "success": true,
  "data": Project
}
Response: 404 Not Found
{
  "success": false,
  "error": "Project not found"
}
```

**Contact Endpoint**

```
POST /api/contact
Headers:
  Content-Type: application/json
  X-Honeypot: must-be-empty
Body: ContactForm object
Response: 200 OK
{
  "success": true,
  "message": "Inquiry submitted successfully",
  "referenceId": "INQ-20250902-001"
}
Response: 429 Too Many Requests
{
  "success": false,
  "error": "Rate limit exceeded. Try again later."
}
```

### 4.5 Third-Party Integrations

#### Resend Integration

- **Purpose**: Modern email API for transactional emails
- **Configuration**:
  - API Key: Store in environment variable (RESEND_API_KEY)
  - From Email: Configure verified domain
  - Rate Limit: 100 emails/day (free tier)
- **Templates**:
  - Contact inquiry template (React Email)
  - Auto-response template
  - Newsletter welcome email
- **Error Handling**: Retry logic with exponential backoff
- **Features**:
  - Email tracking and analytics
  - Webhook support for delivery status
  - React Email components for templates

#### Google Analytics 4

- **Implementation**: gtag.js with Next.js Script component
- **Events Tracked**:
  - Page views
  - Contact form submissions
  - Resume downloads
  - Project views
  - External link clicks
- **Custom Dimensions**: Traffic source, user type

#### GitHub API Integration

- **Purpose**: Display repository statistics
- **Endpoints Used**:
  - `/repos/:owner/:repo` for repo details
  - `/repos/:owner/:repo/languages` for tech stack
- **Rate Limiting**: Cache responses for 1 hour
- **Data Displayed**: Stars, forks, last updated

#### Calendly Integration

- **Implementation**: Embed widget on contact page
- **Configuration**:
  - Inline widget with custom styling
  - Pre-fill name and email from contact form
- **Fallback**: Manual scheduling link if embed fails

#### Future Integrations (Phase 2)

- **Hotjar**: User behavior analytics and heatmaps
- **Sentry**: Error tracking and performance monitoring

### 4.6 Scalability Requirements

#### Traffic Handling

- **Concurrent Users**: Support 500 concurrent users
- **Requests/Second**: Handle 50 requests/second
- **Monthly Visitors**: Scale to 10,000 monthly visitors
- **Data Volume**: Store up to 100 projects, 1000 inquiries

#### Performance Optimization

- **Image Optimization**:
  - Convert to WebP format
  - Responsive images with srcset
  - Lazy loading with Intersection Observer
  - Maximum image size: 500KB
- **Code Splitting**:
  - Route-based splitting with Next.js
  - Dynamic imports for heavy components
  - Bundle size target: <200KB per route
- **Caching Strategy**:
  - Browser cache: 1 year for static assets
  - CDN cache: 1 week for HTML pages
  - API cache: 5 minutes for dynamic data

#### Infrastructure Scaling

- **Vertical Scaling**: Vercel automatically scales compute
- **Horizontal Scaling**: Multi-region deployment on Vercel Edge
- **Database Scaling**: Firebase auto-scales with demand
- **CDN Distribution**: Global edge locations for static assets

---

## 5. Implementation Specifications

### 5.1 Code Structure & Patterns

#### Design Patterns

- **Component Pattern**: Atomic design with atoms, molecules, organisms
- **Container/Presentational**: Separate logic from presentation
- **Custom Hooks**: Reusable logic in custom React hooks
- **Factory Pattern**: For creating different types of form fields
- **Observer Pattern**: For testimonial rotation and animations

#### Code Organization

```typescript
// Component Structure Example
interface ProjectCardProps {
  project: Project;
  variant?: "default" | "featured";
  onView?: (id: string) => void;
}

const ProjectCard: FC<ProjectCardProps> = ({
  project,
  variant = "default",
  onView,
}) => {
  // Component logic
};

// Custom Hook Example
const useContactForm = () => {
  const [formData, setFormData] = useState<ContactForm>();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>();

  const validate = () => {
    /* validation logic */
  };
  const submit = async () => {
    /* submission logic */
  };

  return { formData, loading, errors, submit };
};
```

#### Naming Conventions

- **Components**: PascalCase (ProjectCard, ContactForm)
- **Functions**: camelCase (handleSubmit, validateEmail)
- **Constants**: UPPER_SNAKE_CASE (MAX_FILE_SIZE, API_ENDPOINTS)
- **Files**: Component files in PascalCase, utilities in camelCase
- **CSS Classes**: BEM methodology with Tailwind utilities

### 5.2 Error Handling Strategy

#### Client-Side Error Handling

```typescript
// Global Error Boundary
class ErrorBoundary extends Component {
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught:", error, errorInfo);
    // Log to monitoring service
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}

// API Error Handling
const apiCall = async (endpoint: string, options?: RequestInit) => {
  try {
    const response = await fetch(endpoint, options);
    if (!response.ok) {
      throw new ApiError(response.status, await response.text());
    }
    return await response.json();
  } catch (error) {
    if (error instanceof ApiError) {
      handleApiError(error);
    } else {
      handleNetworkError(error);
    }
    throw error;
  }
};
```

#### Server-Side Error Handling

```typescript
// API Route Error Handler
export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Process request
    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    // Log to monitoring
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
```

### 5.3 Data Flow & State Management

#### State Management Strategy

- **Local State**: Component-specific UI state (useState)
- **Context API**: Theme, user preferences
- **URL State**: Filters, pagination (useSearchParams)
- **Server State**: Projects, testimonials (React Query/SWR)

#### Data Fetching Patterns

```typescript
// Server Component Data Fetching
async function ProjectsPage() {
  const projects = await fetchProjects();
  return <ProjectGrid projects={projects} />;
}

// Client Component with SWR
function ContactForm() {
  const { data, error, isLoading } = useSWR("/api/config", fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  if (error) return <ErrorMessage />;
  if (isLoading) return <Skeleton />;

  return <Form config={data} />;
}
```

### 5.4 Authentication & Authorization

#### MVP Security (Week 1-2)

- **HTTPS Only**: Automatic with Vercel
- **Essential Environment Variables**:
  ```
  # Start with minimal secrets
  RESEND_API_KEY=xxx
  NEXT_PUBLIC_SITE_URL=https://albertnartey.com
  NEXT_PUBLIC_VERCEL_ENV=production
  ```
- **Basic Protection**:
  - Honeypot field for spam
  - Client-side validation
  - Vercel's built-in DDoS protection

#### Enhanced Security (Week 3-4)

- **Additional Environment Variables**:
  ```
  NEXT_PUBLIC_GA_ID=xxx  # Add analytics later
  GITHUB_TOKEN=xxx  # For repo stats
  ```
- **Rate Limiting**:
  - Use Vercel Edge Middleware
  - Contact form: 3 per hour per IP
- **Input Sanitization**:
  - Add zod validation
  - HTML sanitization if needed

#### Production Security (Post-Launch)

- **Advanced Protection**:
  - Cloudflare WAF (if needed)
  - Sentry error tracking
  - Security headers via next.config.js
  - Regular dependency updates

#### CORS Configuration

```typescript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: process.env.ALLOWED_ORIGIN,
          },
          { key: "Access-Control-Allow-Methods", value: "GET,POST,OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type" },
        ],
      },
    ];
  },
};
```

---

## 6. Dependencies & Constraints

### 6.1 Technical Dependencies

#### Core Dependencies

```json
{
  "dependencies": {
    "next": "^15.1.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "typescript": "^5.6.0",
    "@radix-ui/react-icons": "^1.3.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "lucide-react": "^0.447.0",
    "resend": "^4.0.0",
    "tailwind-merge": "^2.5.0",
    "framer-motion": "^11.0.0",
    "react-hook-form": "^7.53.0",
    "zod": "^3.23.0",
    "@hookform/resolvers": "^3.9.0",
    "zustand": "^5.0.0",
    "swr": "^2.2.0"
  },
  "devDependencies": {
    "@types/react": "^19.0.0",
    "@types/node": "^22.0.0",
    "tailwindcss": "^4.1.0",
    "eslint": "^9.0.0",
    "eslint-config-next": "^15.1.0",
    "prettier": "^3.3.0",
    "prettier-plugin-tailwindcss": "^0.6.0",
    "@tailwindcss/typography": "^0.5.0",
    "@tailwindcss/forms": "^0.5.0"
  }
}
```

#### External Service Dependencies

- **Vercel Account**: For hosting and deployment
- **Firebase Project**: For database and storage
- **EmailJS Account**: For email functionality
- **Google Analytics**: For tracking
- **GitHub Account**: For version control and API access
- **Domain Registrar**: For custom domain

### 6.2 Team Dependencies

- **Developer**: 1 senior software architect (40 hours/week)
- **Designer**: Design assets and guidelines (as needed)
- **Content Creator**: Project descriptions and testimonials (8 hours)
- **QA Testing**: Manual testing across devices (8 hours)

### 6.3 Business Constraints

#### Timeline Constraints

- **MVP Launch**: September 2, 2025 (2 weeks early)
- **Full Feature Launch**: September 16, 2025
- **Recruiter Conference**: September 20, 2025 (must be polished)
- **Client Presentation**: September 30, 2025 (fully optimized)
- **Working Hours**: Part-time development (20-25 hours/week)

#### Budget Constraints (Optimized)

- **Development**: Self-developed (no cost)
- **Year 1 Costs**:
  - Domain: $15/year (register immediately)
  - Vercel Pro: $0 (free tier sufficient initially)
  - EmailJS/Resend: $0 (free tier: 200-500 emails/month)
  - Firebase: $0 (defer until needed)
  - Cloudinary: $0 (free tier for images)
- **Total Year 1**: $15 (domain only)
- **Scale as needed**: Upgrade services based on traffic

#### Content Constraints (Revised)

- **MVP Content (Ready by Week 1)**:
  - 2-3 project summaries (detailed case studies later)
  - Basic about text (enhance later)
  - Current resume PDF
  - Contact information
- **Enhancement Content (Weeks 2-4)**:
  - 2 detailed case studies
  - 2-3 testimonials (if available)
  - Service descriptions
  - Professional photos

#### Content Constraints

- **Ready Content**:
  - 4 project descriptions
  - Current resume
  - 2 professional photos
  - 2 testimonials
- **Needed Content**:
  - 2 additional project case studies
  - Project screenshots (high quality)
  - 3 additional testimonials
  - Service package descriptions

---

## 7. Testing Strategy

### 7.1 Testing Approach

#### Testing Levels

1. **Unit Testing**: Individual components and utilities
2. **Integration Testing**: API endpoints and data flow
3. **E2E Testing**: Critical user journeys
4. **Performance Testing**: Load time and Core Web Vitals
5. **Accessibility Testing**: WCAG compliance
6. **Cross-Browser Testing**: Multiple browsers and devices

#### Testing Tools

- **Unit/Integration**: Jest + React Testing Library
- **E2E**: Playwright or Cypress
- **Performance**: Lighthouse CI
- **Accessibility**: axe DevTools
- **Visual Regression**: Percy or Chromatic

### 7.2 Quality Gates

#### Pre-Deployment Checklist

- [ ] All tests passing (>80% coverage)
- [ ] Lighthouse score >90 all categories
- [ ] No console errors or warnings
- [ ] All links functional
- [ ] Forms tested with valid/invalid data
- [ ] Mobile responsive (320px to 4K)
- [ ] Cross-browser tested
- [ ] SEO meta tags verified
- [ ] Analytics tracking confirmed
- [ ] Security headers configured

#### Performance Benchmarks

- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Time to Interactive: <3.5s
- Cumulative Layout Shift: <0.1
- First Input Delay: <100ms
- Total Bundle Size: <500KB

### 7.3 Test Data Requirements

#### Test Scenarios

```typescript
// Contact Form Test Data
const testCases = [
  {
    name: "Valid Submission",
    data: {
      name: "John Doe",
      email: "john@example.com",
      message: "Test inquiry message",
    },
    expected: "success",
  },
  {
    name: "Invalid Email",
    data: {
      name: "John",
      email: "invalid-email",
      message: "Test",
    },
    expected: "validation_error",
  },
  {
    name: "Spam Detection",
    data: {
      name: "Spam",
      email: "spam@spam.com",
      message: "spam",
      honeypot: "filled",
    },
    expected: "blocked",
  },
];
```

---

## 8. Security & Compliance

### 8.1 Security Requirements

#### Application Security

- **HTTPS/TLS**: Enforce SSL for all connections
- **Content Security Policy**:
  ```
  Content-Security-Policy:
    default-src 'self';
    script-src 'self' 'unsafe-inline' *.googletagmanager.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: https:;
    connect-src 'self' *.emailjs.com *.google-analytics.com;
  ```
- **Security Headers**:
  - X-Frame-Options: DENY
  - X-Content-Type-Options: nosniff
  - Referrer-Policy: strict-origin-when-cross-origin
  - Permissions-Policy: geolocation=(), microphone=(), camera=()

#### Data Protection

- **Input Validation**: Server-side validation for all inputs
- **XSS Prevention**: Sanitize user inputs with DOMPurify
- **Rate Limiting**: Implement on contact form and API endpoints
- **Honeypot Fields**: Anti-spam protection on forms
- **Environment Variables**: Secure storage of API keys and secrets

### 8.2 Compliance Requirements

#### GDPR Compliance

- **Privacy Policy**: Clear data usage policy page
- **Cookie Consent**: Banner for analytics cookies
- **Data Rights**: Process for data access/deletion requests
- **Data Minimization**: Collect only necessary information
- **Retention Policy**: Delete inquiries after 1 year

#### Accessibility Compliance (WCAG 2.1 AA)

- **Semantic HTML5**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Descriptive labels for all interactive elements
- **Keyboard Navigation**: Full site navigable via keyboard
- **Color Contrast**: Minimum 4.5:1 for normal text, 3:1 for large text
- **Alt Text**: Descriptive alt text for all images
- **Focus Indicators**: Visible focus states for all interactive elements
- **Screen Reader Support**: Compatible with NVDA, JAWS, VoiceOver

---

## 9. Deployment & DevOps

### 9.1 Environment Strategy

#### Development Environment

- **Local Development**: Next.js dev server on localhost:3000
- **Environment Variables**: .env.local file (git-ignored)
- **Mock Data**: Local JSON files for development
- **Hot Reload**: Fast refresh enabled

#### Staging Environment

- **URL**: portfolio-staging.vercel.app
- **Purpose**: Pre-production testing
- **Data**: Test database with sample content
- **Access**: Password protected

#### Production Environment

- **URL**: albertnartey.com (custom domain)
- **Hosting**: Vercel production deployment
- **Database**: Firebase production project
- **CDN**: Vercel Edge Network

### 9.2 CI/CD Pipeline

#### Build Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run lint
      - run: npm run test
      - run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - uses: vercel/action@v3
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

#### Deployment Process

1. **Code Push**: Developer pushes to GitHub
2. **Automated Tests**: Run linting, unit tests, build
3. **Preview Deployment**: Create preview for PRs
4. **Production Deploy**: Auto-deploy main branch
5. **Post-Deploy**: Run smoke tests, check monitoring

### 9.3 Monitoring & Alerting

#### Application Monitoring

- **Uptime Monitoring**: Vercel Analytics + UptimeRobot
- **Performance Monitoring**: Core Web Vitals tracking
- **Error Tracking**: Console errors logged to service
- **User Analytics**: Google Analytics 4 integration

#### Alerting Rules

- **Downtime**: Alert if site down >1 minute
- **Performance**: Alert if load time >5 seconds
- **Errors**: Alert on >10 errors per hour
- **Traffic Spike**: Alert on >1000 requests/minute

#### Logging Strategy

```typescript
// Structured logging
const log = {
  info: (message: string, meta?: object) => {
    console.log(
      JSON.stringify({
        level: "info",
        message,
        ...meta,
        timestamp: new Date().toISOString(),
      })
    );
  },
  error: (message: string, error?: Error, meta?: object) => {
    console.error(
      JSON.stringify({
        level: "error",
        message,
        error: error?.stack,
        ...meta,
        timestamp: new Date().toISOString(),
      })
    );
  },
};
```

---

## 10. Project Timeline & Milestones

### 10.1 Timeline Overview

**Project Duration**: 4 weeks (August 19 - September 16, 2025)  
**Development Hours**: 80-100 hours total (20-25 hours/week)  
**MVP Launch**: September 2, 2025 (Week 2)  
**Full Launch**: September 16, 2025

### 10.2 Parallel Track Execution

#### Development Track

**Week 0: Pre-Development (Aug 12-18)**

- Domain registration and DNS setup
- Vercel and Firebase account setup
- Create GitHub repository
- Deploy placeholder page for SEO
- Install development environment

**Week 1: MVP Development (Aug 19-25)**

- **Day 1**: Next.js setup, deploy pipeline, domain connection
- **Day 2**: Layout components (Header, Footer, responsive nav)
- **Day 3-4**: Homepage with Hero section
- **Day 5-6**: Projects gallery (static data initially)
- **Day 7**: About page and contact form
- **Deliverable**: Deployed MVP at albertnartey.com

**Week 2: Core Enhancement (Aug 26 - Sept 1)**

- **Day 8-9**: Firebase integration for projects
- **Day 10-11**: Individual project pages
- **Day 12**: Email integration (EmailJS or Resend)
- **Day 13-14**: Mobile optimization and testing
- **Deliverable**: Fully functional portfolio (MVP Complete)

**Week 3: Polish & Content (Sept 2-8)**

- **Day 15-16**: Resume section and PDF download
- **Day 17-18**: Testimonials component (if content ready)
- **Day 19-20**: Performance optimization
- **Day 21**: SEO enhancements
- **Deliverable**: Content-complete site

**Week 4: Final Polish (Sept 9-16)**

- **Day 22-23**: Cross-browser testing
- **Day 24-25**: Accessibility audit and fixes
- **Day 26**: Analytics and monitoring setup
- **Day 27**: Final performance tuning
- **Day 28**: Launch preparation and backup
- **Deliverable**: Production-ready portfolio

#### Content Track (Parallel)

**Week 0-1**:

- Write 2 project case studies
- Gather project screenshots
- Update resume for web
- Draft service descriptions

**Week 2-3**:

- Collect 3 testimonials
- Create project thumbnails
- Write meta descriptions
- Prepare social media assets

**Week 4**:

- Final content review
- SEO keyword optimization
- Social media announcements

#### Critical Dates

- **September 16**: Soft launch (must be live)
- **September 20**: Recruiter conference (fully functional)
- **September 30**: Client presentation (polished)

---

## 11. Risk Assessment

### 11.1 Technical Risks

| Risk                         | Impact | Probability | Mitigation                                    |
| ---------------------------- | ------ | ----------- | --------------------------------------------- |
| EmailJS service downtime     | High   | Low         | Implement Firebase Functions backup           |
| Vercel deployment issues     | High   | Low         | Setup Firebase Hosting as backup              |
| Performance degradation      | Medium | Medium      | Implement aggressive caching, optimize images |
| Browser compatibility issues | Medium | Medium      | Test early and often, use polyfills           |
| API rate limiting            | Low    | Medium      | Implement caching, request batching           |
| SEO indexing delays          | Medium | High        | Submit sitemap early, implement schema markup |

### 11.2 Business Risks

| Risk                           | Impact   | Probability | Mitigation                                                                               |
| ------------------------------ | -------- | ----------- | ---------------------------------------------------------------------------------------- |
| Content not ready in time      | High     | Medium      | Start content creation Week 0, use Lorem Ipsum for MVP, iterate with real content        |
| Low initial traffic            | Medium   | High        | Deploy domain Week 0 for SEO indexing, submit sitemap immediately, build backlinks early |
| Poor mobile experience         | High     | Low         | Mobile-first development, test on real devices from Day 1                                |
| Spam through contact form      | Low      | Medium      | Start with honeypot field, add Turnstile/reCAPTCHA only if needed                        |
| Missed deadline for conference | Critical | Low         | Launch MVP by Sept 2 (2 weeks early), iterate improvements                               |
| Scope creep                    | High     | High        | Strict MVP focus, defer all "nice-to-have" features to post-launch                       |
| Perfectionism delays           | High     | Medium      | Set "good enough" criteria for MVP, polish after launch                                  |

---

## 12. AI Implementation Guide

### 12.1 Code Generation Priorities

#### Week 1 - MVP Components (Must Have)

1. **Next.js Setup with Deployment**:

   ```bash
   npx create-next-app@latest portfolio --typescript --tailwind --app
   git init && git remote add origin [repo-url]
   vercel --prod  # Deploy immediately
   ```

2. **Layout Components**:

   - Simple Header with mobile menu
   - Footer with basic links
   - SEO metadata component

3. **Homepage Hero**:

   - Simple text introduction
   - Two CTA buttons (View Projects, Contact Me)
   - No animations initially

4. **Projects Grid**:

   - Static JSON data initially
   - Simple grid layout (no filtering yet)
   - Basic project cards

5. **Contact Form**:
   - Basic form with validation
   - EmailJS or Resend integration
   - Simple success/error states

#### Week 2 - Core Features (Should Have)

1. **Individual Project Pages**:

   - Dynamic routes
   - Project details layout
   - GitHub and live demo links

2. **About Page**:

   - Professional summary
   - Skills list (no fancy animations)
   - Simple timeline

3. **Mobile Optimization**:
   - Responsive images
   - Touch-friendly navigation
   - Performance optimization

#### Week 3-4 - Enhancements (Nice to Have)

1. **Animations**:

   - Framer Motion for page transitions
   - Hover effects on cards
   - Smooth scrolling

2. **Advanced Features**:
   - Project filtering
   - Testimonials section
   - Resume download
   - Service offerings page

#### Post-Launch (Can Wait)

1. **Analytics & Monitoring**
2. **A/B Testing**
3. **Blog Section**
4. **Dark Mode**
5. **Advanced Animations**

### 12.2 Implementation Order

#### Day 0: Pre-Development Setup

```bash
# 1. Register domain and setup DNS
# 2. Create accounts: Vercel, GitHub, Resend
# 3. Setup local development environment

# 4. Initialize and deploy immediately
npx create-next-app@latest portfolio --typescript --tailwind --app --use-pnpm
cd portfolio

# 5. Setup shadcn/ui
pnpm dlx shadcn@latest init -d

# 6. Install essential components
pnpm dlx shadcn@latest add button card form input label

git init
git remote add origin https://github.com/[username]/portfolio
vercel --prod  # Connect to domain
```

#### Day 1: MVP Foundation

```bash
# Install only essential dependencies
pnpm add lucide-react resend
pnpm add -D @types/node

# Create minimal structure
mkdir -p app/{projects,about,contact}/
mkdir -p components/{layout,sections}/
mkdir -p lib/{utils,data}/ public/images/

# Install more shadcn components as needed
pnpm dlx shadcn@latest add navigation-menu sheet dialog

# Deploy basic structure
git add . && git commit -m "Initial setup with shadcn/ui"
git push origin main
# Auto-deploys via Vercel
```

#### Phase 2: Core Components

```typescript
// 4. Create Layout component
// components/layout/Layout.tsx
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}

// 5. Implement Homepage
// app/page.tsx
export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Testimonials />
      <CallToAction />
    </>
  );
}
```

#### Phase 3: Features & Functionality

```typescript
// 6. Contact Form with validation
// components/common/ContactForm.tsx
const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: ContactFormData) => {
    try {
      await emailjs.send(/* config */);
      // Handle success
    } catch (error) {
      // Handle error
    }
  };

  return (/* form JSX */);
};

// 7. Project Gallery with filtering
// components/projects/ProjectGrid.tsx
const ProjectGrid = ({ projects }: { projects: Project[] }) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = projects.filter(
    p => filter === 'all' || p.category === filter
  );

  return (/* grid JSX */);
};
```

### 12.3 Testing Checkpoints

#### After Each Component

1. Run TypeScript compiler: `npm run type-check`
2. Test responsive design: 320px, 768px, 1024px, 1440px
3. Check accessibility: Tab navigation, screen reader
4. Verify performance: Lighthouse audit

#### Integration Testing Points

1. **After Week 1**: Test navigation and routing
2. **After Week 2**: Test form submission and API calls
3. **After Week 3**: Test all user flows end-to-end
4. **Before Launch**: Full regression testing

#### Performance Checkpoints

```bash
# Run after each major feature
npm run build
npm run analyze  # Bundle size analysis
npx lighthouse http://localhost:3000 --view
```

---

## 13. Approval & Sign-off

### 13.1 Review Process

#### Internal Review Checkpoints

1. **Design Review** (Week 1): Approve visual design and UX
2. **Functionality Review** (Week 2): Test core features
3. **Content Review** (Week 3): Approve all text and media
4. **Final Review** (Week 4): Complete site walkthrough

#### Stakeholder Reviews

- **Technical Review**: Code quality, performance, security
- **Business Review**: Alignment with goals, ROI potential
- **User Testing**: Feedback from 3-5 test users

### 13.2 Approvals

| Reviewer       | Role              | Date       | Signature  |
| -------------- | ----------------- | ---------- | ---------- |
| Albert Nartey  | Project Owner     | **\_\_\_** | ****\_**** |
| Technical Lead | Developer         | **\_\_\_** | ****\_**** |
| QA Tester      | Quality Assurance | **\_\_\_** | ****\_**** |

#### Sign-off Criteria

- [ ] All requirements implemented and tested
- [ ] Performance metrics met or exceeded
- [ ] Security requirements satisfied
- [ ] Content reviewed and approved
- [ ] Deployment successful to production

---

## 14. Appendices

### 14.1 Technical References

#### Design Resources

- **Color Palette**:
  - Primary: Navy Blue (#0F172A)
  - Secondary: Sky Blue (#3B82F6)
  - Accent: Emerald (#10B981)
  - Neutral: Gray scale (#F3F4F6 to #111827)
- **Typography**:
  - Headings: Inter (Bold, Semi-bold)
  - Body: Roboto (Regular, Medium)
  - Code: Fira Code (monospace)
- **Spacing System**: 4px base unit (0.25rem)
- **Breakpoints**:
  - Mobile: 320px - 767px
  - Tablet: 768px - 1023px
  - Desktop: 1024px - 1439px
  - Wide: 1440px+

#### API Documentation

- [Next.js 14 Documentation](https://nextjs.org/docs)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

#### SEO Resources

- **Target Keywords**:
  - "Software Architect Ghana"
  - "Software Engineer Accra"
  - "Solutions Architect Ghana"
  - "AI Consultant Ghana"
  - "Machine Learning Engineer Ghana"
  - "Tech Coach Africa"
- **Meta Tags Template**:
  ```html
  <meta name="description" content="[Page description]" />
  <meta property="og:title" content="[Page title]" />
  <meta property="og:description" content="[Page description]" />
  <meta property="og:image" content="[Image URL]" />
  <meta name="twitter:card" content="summary_large_image" />
  ```

### 14.2 Change Log

| Version | Date       | Changes              | Author        |
| ------- | ---------- | -------------------- | ------------- |
| 1.0     | 2025-08-02 | Initial PRD creation | Albert Nartey |
|         |            |                      |               |
|         |            |                      |               |

### 14.3 Glossary

- **API**: Application Programming Interface
- **CDN**: Content Delivery Network
- **CI/CD**: Continuous Integration/Continuous Deployment
- **CLS**: Cumulative Layout Shift
- **CSP**: Content Security Policy
- **FCP**: First Contentful Paint
- **FID**: First Input Delay
- **GDPR**: General Data Protection Regulation
- **LCP**: Largest Contentful Paint
- **PWA**: Progressive Web Application
- **SEO**: Search Engine Optimization
- **SPA**: Single Page Application
- **SSG**: Static Site Generation
- **SSR**: Server-Side Rendering
- **TTI**: Time to Interactive
- **WCAG**: Web Content Accessibility Guidelines

---

## Document End

This PRD serves as the comprehensive guide for implementing the Albert Nartey Portfolio website. All technical specifications, requirements, and implementation details have been documented to ensure successful project delivery by the September 16, 2025 launch date.

For questions or clarifications, contact: Albert Nartey (Project Owner)

**Document Status**: Ready for Implementation  
**Next Steps**: Begin development following the implementation guide in Section 12
