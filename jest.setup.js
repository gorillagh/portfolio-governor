import '@testing-library/jest-dom'
import '@/__tests__/setup/msw'

// Global test setup for Albert Nartey Portfolio

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn().mockResolvedValue(undefined),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
    }
  },
}))

// Mock Next.js navigation (App Router)
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
    }
  },
  useSearchParams() {
    return {
      get: jest.fn(),
    }
  },
  usePathname() {
    return '/'
  },
}))

// Mock Next.js Image component
jest.mock('next/image', () => {
  return function MockedImage({ src, alt, ...props }) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} {...props} />
  }
})

// Mock Next.js Link component
jest.mock('next/link', () => {
  return function MockedLink({ children, href, ...props }) {
    return <a href={href} {...props}>{children}</a>
  }
})

// Mock Framer Motion
jest.mock('framer-motion', () => ({
  motion: {
    div: 'div',
    section: 'section',
    article: 'article',
    aside: 'aside',
    nav: 'nav',
    header: 'header',
    footer: 'footer',
    main: 'main',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    p: 'p',
    span: 'span',
    button: 'button',
    form: 'form',
    input: 'input',
    textarea: 'textarea',
    select: 'select',
    label: 'label',
    ul: 'ul',
    li: 'li',
    a: 'a',
    img: 'img',
  },
  AnimatePresence: ({ children }) => children,
  useAnimation: () => ({
    start: jest.fn(),
    stop: jest.fn(),
    set: jest.fn(),
  }),
  useInView: () => true,
}))

// Mock Firebase
jest.mock('@/lib/firebase', () => ({
  db: {},
  storage: {},
  analytics: null,
  validateFirebaseConfig: jest.fn(() => true),
}))

// Mock Firebase hooks
jest.mock('@/lib/hooks/useFirebaseData', () => ({
  useContactForm: () => ({
    submitForm: jest.fn().mockResolvedValue({ 
      success: true,
      referenceId: 'test-ref-123'
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
  useFirebaseData: () => ({
    data: [],
    loading: false,
    error: null,
  }),
}))

// Mock Resend (email service)
jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: {
      send: jest.fn().mockResolvedValue({ 
        id: 'mock-email-id',
        data: null,
        error: null
      }),
    },
  })),
}))

// Mock React Email components
jest.mock('@react-email/components', () => ({
  Html: ({ children, ...props }) => <html {...props}>{children}</html>,
  Head: ({ children, ...props }) => <head {...props}>{children}</head>,
  Body: ({ children, ...props }) => <body {...props}>{children}</body>,
  Container: ({ children, ...props }) => <div {...props}>{children}</div>,
  Section: ({ children, ...props }) => <section {...props}>{children}</section>,
  Text: ({ children, ...props }) => <p {...props}>{children}</p>,
  Heading: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
  Button: ({ children, href, ...props }) => <a href={href} {...props}>{children}</a>,
  Hr: (props) => <hr {...props} />,
  Link: ({ children, href, ...props }) => <a href={href} {...props}>{children}</a>,
}))

// Global test utilities
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

// Mock scrollTo
global.scrollTo = jest.fn()

// Silence console warnings for tests
const originalError = console.error
const originalWarn = console.warn

beforeAll(() => {
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('Warning:') || 
       args[0].includes('ReactDOMTestUtils.act'))
    ) {
      return
    }
    originalError.call(console, ...args)
  }

  console.warn = (...args) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('componentWillReceiveProps')
    ) {
      return
    }
    originalWarn.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
  console.warn = originalWarn
})