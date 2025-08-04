import React from 'react'
import { render, screen, waitFor } from '@/__tests__/utils/test-utils'
import userEvent from '@testing-library/user-event'
import { ContactForm } from '@/components/features/ContactForm'
import { server } from '@/__tests__/setup/msw'
import { http, HttpResponse } from 'msw'

// Mock the Firebase hooks
jest.mock('@/lib/hooks/useFirebaseData', () => ({
  useContactForm: () => ({
    submitForm: jest.fn().mockResolvedValue({
      success: true,
      referenceId: 'TEST-REF-123456'
    }),
    loading: false,
    error: null,
    success: null,
    resetForm: jest.fn(),
  }),
  useAnalytics: () => ({
    trackEvent: jest.fn(),
    trackPageView: jest.fn(),
  }),
}))

describe('ContactForm Component', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks()
  })

  describe('Rendering', () => {
    it('renders all form fields correctly', () => {
      render(<ContactForm />)

      expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/company/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/what brings you here/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/subject/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
    })

    it('renders the correct form title and description', () => {
      render(<ContactForm />)

      expect(screen.getByText(/send me a message/i)).toBeInTheDocument()
      expect(screen.getByText(/ready to start a project/i)).toBeInTheDocument()
    })

    it('has proper form structure and accessibility', () => {
      render(<ContactForm />)

      const form = screen.getByRole('form', { name: /contact form/i }) || 
                   document.querySelector('form')
      expect(form).toBeInTheDocument()

      // Check required fields have proper labels
      expect(screen.getByLabelText(/name/i)).toHaveAttribute('required')
      expect(screen.getByLabelText(/email/i)).toHaveAttribute('type', 'email')
    })

    it('shows budget field when consulting inquiry is selected', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const inquirySelect = screen.getByLabelText(/what brings you here/i)
      await user.selectOptions(inquirySelect, 'consulting')

      await waitFor(() => {
        expect(screen.getByLabelText(/project budget/i)).toBeInTheDocument()
      })
    })

    it('hides budget field for non-consulting inquiries', async () => {
      const user = userEvent.setup() 
      render(<ContactForm />)

      const inquirySelect = screen.getByLabelText(/what brings you here/i)
      await user.selectOptions(inquirySelect, 'general')

      await waitFor(() => {
        expect(screen.queryByLabelText(/project budget/i)).not.toBeInTheDocument()
      })
    })
  })

  describe('Form Validation', () => {
    it('shows validation errors for empty required fields', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const submitButton = screen.getByRole('button', { name: /send message/i })
      await user.click(submitButton)

      await waitFor(() => {
        expect(screen.getByText(/name must be at least 2 characters/i)).toBeInTheDocument()
        expect(screen.getByText(/invalid email address/i)).toBeInTheDocument()
        expect(screen.getByText(/subject must be at least 5 characters/i)).toBeInTheDocument()
        expect(screen.getByText(/message must be at least 20 characters/i)).toBeInTheDocument()
      })
    })

    it('shows validation error for invalid email format', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const emailInput = screen.getByLabelText(/email/i)
      await user.type(emailInput, 'invalid-email')

      const submitButton = screen.getByRole('button', { name: /send message/i })
      await user.click(submitButton)

      await waitFor(() => {
        expect(screen.getByText(/invalid email address/i)).toBeInTheDocument()
      })
    })

    it('shows validation error for short name', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const nameInput = screen.getByLabelText(/name/i)
      await user.type(nameInput, 'A')

      const submitButton = screen.getByRole('button', { name: /send message/i })
      await user.click(submitButton)

      await waitFor(() => {
        expect(screen.getByText(/name must be at least 2 characters/i)).toBeInTheDocument()
      })
    })

    it('shows validation error for short subject', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const subjectInput = screen.getByLabelText(/subject/i)
      await user.type(subjectInput, 'Hi')

      const submitButton = screen.getByRole('button', { name: /send message/i })
      await user.click(submitButton)

      await waitFor(() => {
        expect(screen.getByText(/subject must be at least 5 characters/i)).toBeInTheDocument()
      })
    })

    it('shows validation error for short message', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const messageInput = screen.getByLabelText(/message/i)
      await user.type(messageInput, 'Short message')

      const submitButton = screen.getByRole('button', { name: /send message/i })
      await user.click(submitButton)

      await waitFor(() => {
        expect(screen.getByText(/message must be at least 20 characters/i)).toBeInTheDocument()
      })
    })
  })

  describe('Form Submission', () => {
    it('successfully submits form with valid data', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      // Fill form with valid data
      await user.type(screen.getByLabelText(/name/i), 'John Doe')
      await user.type(screen.getByLabelText(/email/i), 'john.doe@example.com')
      await user.type(screen.getByLabelText(/company/i), 'Test Company')
      await user.selectOptions(screen.getByLabelText(/what brings you here/i), 'consulting')
      await user.type(screen.getByLabelText(/subject/i), 'Website Development Project')
      await user.type(screen.getByLabelText(/message/i), 'I would like to discuss a potential website development project for my business.')

      const submitButton = screen.getByRole('button', { name: /send message/i })
      await user.click(submitButton)

      // Should not show validation errors
      await waitFor(() => {
        expect(screen.queryByText(/name must be at least/i)).not.toBeInTheDocument()
        expect(screen.queryByText(/invalid email/i)).not.toBeInTheDocument()
      })
    })

    it('disables submit button when form is invalid', async () => {
      render(<ContactForm />)

      const submitButton = screen.getByRole('button', { name: /send message/i })
      expect(submitButton).toBeDisabled()
    })

    it('enables submit button when form is valid', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      // Fill form with valid data
      await user.type(screen.getByLabelText(/name/i), 'John Doe')
      await user.type(screen.getByLabelText(/email/i), 'john.doe@example.com')
      await user.type(screen.getByLabelText(/subject/i), 'Website Development Project')
      await user.type(screen.getByLabelText(/message/i), 'I would like to discuss a potential website development project for my business.')

      await waitFor(() => {
        const submitButton = screen.getByRole('button', { name: /send message/i })
        expect(submitButton).toBeEnabled()
      })
    })

    it('shows loading state during submission', async () => {
      // Mock loading state
      jest.doMock('@/lib/hooks/useFirebaseData', () => ({
        useContactForm: () => ({
          submitForm: jest.fn().mockImplementation(() => 
            new Promise(resolve => setTimeout(resolve, 1000))
          ),
          loading: true,
          error: null,
          success: null,
          resetForm: jest.fn(),
        }),
        useAnalytics: () => ({
          trackEvent: jest.fn(),
        }),
      }))

      // Re-import component with mocked hook
      const { ContactForm: LoadingContactForm } = await import('@/components/features/ContactForm')
      
      render(<LoadingContactForm />)

      expect(screen.getByText(/sending/i)).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /sending/i })).toBeDisabled()
    })
  })

  describe('Character Counter', () => {
    it('shows character count for message field', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const messageInput = screen.getByLabelText(/message/i)
      await user.type(messageInput, 'Hello world')

      expect(screen.getByText(/11\/2000 characters/i)).toBeInTheDocument()
    })

    it('updates character count as user types', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const messageInput = screen.getByLabelText(/message/i)
      await user.type(messageInput, 'Test message')

      expect(screen.getByText(/12\/2000 characters/i)).toBeInTheDocument()
    })
  })

  describe('Spam Protection', () => {
    it('includes honeypot field that is hidden', () => {
      render(<ContactForm />)

      const honeypotField = document.querySelector('input[name="honeypot"]')
      expect(honeypotField).toBeInTheDocument()
      expect(honeypotField).toHaveStyle({ display: 'none' })
      expect(honeypotField).toHaveAttribute('tabIndex', '-1')
    })
  })

  describe('Accessibility', () => {
    it('has proper ARIA labels and descriptions', () => {
      render(<ContactForm />)

      const nameInput = screen.getByLabelText(/name/i)
      const emailInput = screen.getByLabelText(/email/i)
      const submitButton = screen.getByRole('button', { name: /send message/i })

      expect(nameInput).toHaveAttribute('aria-describedby')
      expect(emailInput).toHaveAttribute('aria-describedby')
      expect(submitButton).toHaveAttribute('type', 'submit')
    })

    it('shows validation errors with proper ARIA attributes', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const nameInput = screen.getByLabelText(/name/i)
      await user.type(nameInput, 'A')
      await user.tab() // Trigger validation

      await waitFor(() => {
        const errorMessage = screen.getByText(/name must be at least 2 characters/i)
        expect(errorMessage).toBeInTheDocument()
        expect(errorMessage).toHaveAttribute('id', 'name-error')
        expect(nameInput).toHaveAttribute('aria-describedby', 'name-error')
      })
    })

    it('maintains proper focus management', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      // Tab through form fields
      await user.tab()
      expect(screen.getByLabelText(/name/i)).toHaveFocus()

      await user.tab()
      expect(screen.getByLabelText(/email/i)).toHaveFocus()

      await user.tab()
      expect(screen.getByLabelText(/company/i)).toHaveFocus()
    })
  })

  describe('Error Handling', () => {
    it('displays server error message when submission fails', async () => {
      // Mock server error
      server.use(
        http.post('/api/contact', () => {
          return HttpResponse.json(
            { error: 'Server error occurred' },
            { status: 500 }
          )
        })
      )

      // Mock error state
      jest.doMock('@/lib/hooks/useFirebaseData', () => ({
        useContactForm: () => ({
          submitForm: jest.fn(),
          loading: false,
          error: 'Server error occurred',
          success: null,
          resetForm: jest.fn(),
        }),
        useAnalytics: () => ({
          trackEvent: jest.fn(),
        }),
      }))

      const { ContactForm: ErrorContactForm } = await import('@/components/features/ContactForm')
      
      render(<ErrorContactForm />)

      expect(screen.getByText(/server error occurred/i)).toBeInTheDocument()
    })
  })
})