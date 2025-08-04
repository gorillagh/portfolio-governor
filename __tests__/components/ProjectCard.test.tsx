import React from 'react'
import { render, screen, waitFor } from '@/__tests__/utils/test-utils'
import userEvent from '@testing-library/user-event'
import { ProjectCard } from '@/components/features/ProjectCard'

const mockProject = {
  title: 'E-Commerce Platform',
  description: 'A modern e-commerce platform built with Next.js and featuring user authentication, shopping cart, and payment processing.',
  image: '/assets/images/portfolio/work1.png',
  technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
  liveUrl: 'https://demo.example.com',
  githubUrl: 'https://github.com/test/project',
  category: 'web-development',
  featured: true,
  index: 0
}

const mockProjectWithoutUrls = {
  title: 'Internal Tool',
  description: 'An internal business tool for managing workflows.',
  image: '/assets/images/portfolio/work2.png',
  technologies: ['React', 'Node.js'],
  category: 'web-development',
  featured: false,
  index: 1
}

describe('ProjectCard Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Rendering', () => {
    it('renders project information correctly', () => {
      render(<ProjectCard {...mockProject} />)

      expect(screen.getByText('E-Commerce Platform')).toBeInTheDocument()
      expect(screen.getByText(/modern e-commerce platform/i)).toBeInTheDocument()
      expect(screen.getByText('web-development')).toBeInTheDocument()
    })

    it('renders project image with correct alt text', () => {
      render(<ProjectCard {...mockProject} />)

      const image = screen.getByAltText('E-Commerce Platform')
      expect(image).toBeInTheDocument()
      expect(image).toHaveAttribute('src', '/assets/images/portfolio/work1.png')
    })

    it('renders featured badge when project is featured', () => {
      render(<ProjectCard {...mockProject} />)

      expect(screen.getByText('Featured')).toBeInTheDocument()
    })

    it('does not render featured badge when project is not featured', () => {
      render(<ProjectCard {...mockProjectWithoutUrls} />)

      expect(screen.queryByText('Featured')).not.toBeInTheDocument()
    })

    it('renders category badge', () => {
      render(<ProjectCard {...mockProject} />)

      expect(screen.getByText('web-development')).toBeInTheDocument()
    })

    it('renders technology stack', () => {
      render(<ProjectCard {...mockProject} />)

      expect(screen.getByText('Next.js')).toBeInTheDocument()
      expect(screen.getByText('TypeScript')).toBeInTheDocument()
      expect(screen.getByText('Tailwind CSS')).toBeInTheDocument()
      expect(screen.getByText('Stripe')).toBeInTheDocument()
    })

    it('shows "more" indicator when there are more than 4 technologies', () => {
      render(<ProjectCard {...mockProject} />)

      expect(screen.getByText('+1 more')).toBeInTheDocument()
    })

    it('does not show "more" indicator when there are 4 or fewer technologies', () => {
      render(<ProjectCard {...mockProjectWithoutUrls} />)

      expect(screen.queryByText(/\+\d+ more/)).not.toBeInTheDocument()
    })
  })

  describe('Action Buttons', () => {
    it('renders live demo button when liveUrl is provided', () => {
      render(<ProjectCard {...mockProject} />)

      const liveButton = screen.getByLabelText('View E-Commerce Platform live demo')
      expect(liveButton).toBeInTheDocument()
      expect(liveButton).toHaveAttribute('href', 'https://demo.example.com')
      expect(liveButton).toHaveAttribute('target', '_blank')
      expect(liveButton).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('renders source code button when githubUrl is provided and no onViewDetails', () => {
      render(<ProjectCard {...mockProject} />)

      const sourceButton = screen.getByLabelText('View E-Commerce Platform source code')
      expect(sourceButton).toBeInTheDocument()
      expect(sourceButton).toHaveAttribute('href', 'https://github.com/test/project')
      expect(sourceButton).toHaveAttribute('target', '_blank')
      expect(sourceButton).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('renders details button when onViewDetails is provided', async () => {
      const mockOnViewDetails = jest.fn()
      const user = userEvent.setup()

      render(<ProjectCard {...mockProject} onViewDetails={mockOnViewDetails} />)

      const detailsButton = screen.getByLabelText('View E-Commerce Platform details')
      expect(detailsButton).toBeInTheDocument()

      await user.click(detailsButton)
      expect(mockOnViewDetails).toHaveBeenCalledTimes(1)
    })

    it('does not render buttons when URLs are not provided', () => {
      render(<ProjectCard {...mockProjectWithoutUrls} />)

      expect(screen.queryByLabelText(/live demo/i)).not.toBeInTheDocument()
      expect(screen.queryByLabelText(/source code/i)).not.toBeInTheDocument()
    })

    it('shows correct button text when onViewDetails is provided', () => {
      const mockOnViewDetails = jest.fn()

      render(<ProjectCard {...mockProject} onViewDetails={mockOnViewDetails} />)

      expect(screen.getByText('Details')).toBeInTheDocument()
      expect(screen.getByText('Live')).toBeInTheDocument() // Shortened text when details button present
    })

    it('shows full button text when onViewDetails is not provided', () => {
      render(<ProjectCard {...mockProject} />)

      expect(screen.getByText('Live Demo')).toBeInTheDocument()
      expect(screen.getByText('Source')).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('has proper ARIA labels for action buttons', () => {
      render(<ProjectCard {...mockProject} />)

      expect(screen.getByLabelText('View E-Commerce Platform live demo')).toBeInTheDocument()
      expect(screen.getByLabelText('View E-Commerce Platform source code')).toBeInTheDocument()
    })

    it('has proper ARIA labels for details button', () => {
      const mockOnViewDetails = jest.fn()

      render(<ProjectCard {...mockProject} onViewDetails={mockOnViewDetails} />)

      expect(screen.getByLabelText('View E-Commerce Platform details')).toBeInTheDocument()
    })

    it('has proper image alt text', () => {
      render(<ProjectCard {...mockProject} />)

      const image = screen.getByAltText('E-Commerce Platform')
      expect(image).toBeInTheDocument()
    })

    it('has icons marked as aria-hidden', () => {
      render(<ProjectCard {...mockProject} />)

      const icons = document.querySelectorAll('[aria-hidden="true"]')
      expect(icons.length).toBeGreaterThan(0)
    })

    it('has proper touch targets for mobile', () => {
      render(<ProjectCard {...mockProject} />)

      const buttons = screen.getAllByRole('link')
      buttons.forEach(button => {
        expect(button).toHaveClass('h-10') // Minimum 44px touch target
        expect(button).toHaveClass('touch-manipulation')
      })
    })
  })

  describe('Responsive Design', () => {
    it('applies responsive classes for image height', () => {
      render(<ProjectCard {...mockProject} />)

      const imageContainer = document.querySelector('.h-48.md\\:h-56')
      expect(imageContainer).toBeInTheDocument()
    })

    it('applies responsive classes for text sizes', () => {
      render(<ProjectCard {...mockProject} />)

      const title = screen.getByText('E-Commerce Platform')
      expect(title).toHaveClass('text-lg', 'md:text-xl')
    })

    it('has responsive text for description', () => {
      render(<ProjectCard {...mockProject} />)

      const description = screen.getByText(/modern e-commerce platform/i)
      expect(description).toHaveClass('text-sm', 'md:text-base')
    })
  })

  describe('Styling and Layout', () => {
    it('applies featured styling when project is featured', () => {
      render(<ProjectCard {...mockProject} />)

      const card = document.querySelector('.ring-2.ring-primary\\/20')
      expect(card).toBeInTheDocument()
    })

    it('does not apply featured styling when project is not featured', () => {
      render(<ProjectCard {...mockProjectWithoutUrls} />)

      const card = document.querySelector('.ring-2.ring-primary\\/20')
      expect(card).not.toBeInTheDocument()
    })

    it('applies hover and transition classes', () => {
      render(<ProjectCard {...mockProject} />)

      const card = document.querySelector('.hover\\:border-primary\\/50')
      expect(card).toBeInTheDocument()
    })

    it('truncates long descriptions', () => {
      render(<ProjectCard {...mockProject} />)

      const description = screen.getByText(/modern e-commerce platform/i)
      expect(description).toHaveClass('line-clamp-3')
    })
  })

  describe('Technology Stack Display', () => {
    it('limits technology display to 4 items', () => {
      const projectWithManyTechs = {
        ...mockProject,
        technologies: ['React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Nuxt', 'Gatsby']
      }

      render(<ProjectCard {...projectWithManyTechs} />)

      // Should show first 4 technologies
      expect(screen.getByText('React')).toBeInTheDocument()
      expect(screen.getByText('Vue')).toBeInTheDocument()
      expect(screen.getByText('Angular')).toBeInTheDocument()
      expect(screen.getByText('Svelte')).toBeInTheDocument()

      // Should show "+3 more" indicator
      expect(screen.getByText('+3 more')).toBeInTheDocument()

      // Should not show additional technologies
      expect(screen.queryByText('Next.js')).not.toBeInTheDocument()
      expect(screen.queryByText('Nuxt')).not.toBeInTheDocument()
    })

    it('shows all technologies when 4 or fewer', () => {
      render(<ProjectCard {...mockProjectWithoutUrls} />)

      expect(screen.getByText('React')).toBeInTheDocument()
      expect(screen.getByText('Node.js')).toBeInTheDocument()
      expect(screen.queryByText(/\+\d+ more/)).not.toBeInTheDocument()
    })
  })

  describe('Hover Effects', () => {
    it('shows overlay buttons on desktop hover areas', () => {
      render(<ProjectCard {...mockProject} />)

      // Desktop overlay should be hidden by default but present in DOM
      const overlay = document.querySelector('.hidden.md\\:flex')
      expect(overlay).toBeInTheDocument()
    })
  })

  describe('Button Interactions', () => {
    it('calls onViewDetails when details button is clicked', async () => {
      const mockOnViewDetails = jest.fn()
      const user = userEvent.setup()

      render(<ProjectCard {...mockProject} onViewDetails={mockOnViewDetails} />)

      const detailsButton = screen.getByRole('button', { name: /details/i })
      await user.click(detailsButton)

      expect(mockOnViewDetails).toHaveBeenCalledTimes(1)
    })

    it('does not render github button when onViewDetails is provided', () => {
      const mockOnViewDetails = jest.fn()

      render(<ProjectCard {...mockProject} onViewDetails={mockOnViewDetails} />)

      // In mobile view, github button should not appear when details button is present
      expect(screen.queryByText('Source')).not.toBeInTheDocument()
    })
  })
})