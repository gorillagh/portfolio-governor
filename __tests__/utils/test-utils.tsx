import React, { ReactElement, ReactNode } from 'react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LayoutProvider } from '@/contexts/LayoutContext'

// Mock data for testing
export const mockProjects = [
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
    createdAt: new Date('2024-01-01'),
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
    createdAt: new Date('2024-02-01'),
  }
]

export const mockSkills = [
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
  }
]

export const mockContactFormData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  company: 'Test Company',
  inquiryType: 'consulting' as const,
  budget: '$2000-5000' as const,
  subject: 'Website Development Project',
  message: 'I would like to discuss a potential website development project for my business.',
  honeypot: ''
}

// Custom render function with providers
const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return (
    <LayoutProvider>
      {children}
    </LayoutProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options })

// Setup user event
export const setupUserEvent = () => {
  return userEvent.setup()
}

// Utility functions for testing
export const waitForLoadingToFinish = () => {
  return new Promise(resolve => setTimeout(resolve, 100))
}

export const mockIntersectionObserver = () => {
  const mockIntersectionObserver = jest.fn()
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
  })
  window.IntersectionObserver = mockIntersectionObserver
}

export const mockResizeObserver = () => {
  const mockResizeObserver = jest.fn()
  mockResizeObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
  })
  window.ResizeObserver = mockResizeObserver
}

// Viewport testing utilities
export const setMobileViewport = () => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: 375,
  })
  
  Object.defineProperty(window, 'innerHeight', {
    writable: true,  
    configurable: true,
    value: 667,
  })
  
  window.dispatchEvent(new Event('resize'))
}

export const setTabletViewport = () => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: 768,
  })
  
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: 1024,
  })
  
  window.dispatchEvent(new Event('resize'))
}

export const setDesktopViewport = () => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: 1920,
  })
  
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: 1080,
  })
  
  window.dispatchEvent(new Event('resize'))
}

// Accessibility testing helpers
export const getByAriaLabel = (container: HTMLElement, label: string) => {
  return container.querySelector(`[aria-label="${label}"]`)
}

export const getByTestId = (container: HTMLElement, testId: string) => {
  return container.querySelector(`[data-testid="${testId}"]`)
}

// Form testing utilities
export const fillContactForm = async (user: ReturnType<typeof userEvent.setup>, data = mockContactFormData) => {
  const nameInput = document.querySelector('#name') as HTMLInputElement
  const emailInput = document.querySelector('#email') as HTMLInputElement  
  const companyInput = document.querySelector('#company') as HTMLInputElement
  const subjectInput = document.querySelector('#subject') as HTMLInputElement
  const messageTextarea = document.querySelector('#message') as HTMLTextAreaElement
  const inquiryTypeSelect = document.querySelector('#inquiryType') as HTMLSelectElement
  
  if (nameInput) await user.type(nameInput, data.name)
  if (emailInput) await user.type(emailInput, data.email)
  if (companyInput) await user.type(companyInput, data.company || '')
  if (subjectInput) await user.type(subjectInput, data.subject)
  if (messageTextarea) await user.type(messageTextarea, data.message)
  if (inquiryTypeSelect) await user.selectOptions(inquiryTypeSelect, data.inquiryType)
}

// Animation testing utilities
export const skipAnimations = () => {
  const style = document.createElement('style')
  style.innerHTML = `
    *, ::before, ::after {
      animation-duration: 0s !important;
      animation-delay: 0s !important;
      transition-duration: 0s !important;
      transition-delay: 0s !important;
    }
  `
  document.head.appendChild(style)
}

// Re-export everything
export * from '@testing-library/react'
export { customRender as render }