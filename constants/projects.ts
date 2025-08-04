export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  category: string
  featured: boolean
  liveUrl?: string
  githubUrl?: string
  status: 'completed' | 'in-progress' | 'archived'
  startDate: string
  endDate?: string
  challenges: string[]
  solutions: string[]
  results: string[]
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'Advanced E-Commerce Platform',
    description: 'Full-stack Next.js e-commerce application with real-time inventory management, Stripe integration, and advanced analytics dashboard.',
    longDescription: 'A comprehensive e-commerce solution built with Next.js 14, featuring server-side rendering, real-time inventory tracking, secure payment processing, and an admin dashboard for analytics and order management.',
    image: '/assets/images/portfolio/work1.png',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'Redis', 'AWS S3'],
    category: 'Full-Stack',
    featured: true,
    liveUrl: 'https://ecommerce-demo.albertnartey.com',
    githubUrl: 'https://github.com/albertnartey/ecommerce-platform',
    status: 'completed',
    startDate: '2023-06',
    endDate: '2023-09',
    challenges: [
      'Real-time inventory synchronization across multiple sales channels',
      'Handling high-traffic during flash sales and peak seasons',
      'Implementing secure payment processing with multiple providers'
    ],
    solutions: [
      'Implemented Redis-based caching with pub/sub for real-time updates',
      'Used Next.js ISR and edge functions for optimal performance',
      'Built modular payment system supporting multiple providers'
    ],
    results: [
      '40% improvement in page load speeds',
      '99.9% uptime during peak traffic periods',
      '25% increase in conversion rate'
    ]
  },
  {
    id: 'ai-analytics-dashboard',
    title: 'AI-Powered Analytics Dashboard',
    description: 'Machine learning-powered analytics platform with predictive insights, real-time data visualization, and automated reporting capabilities.',
    longDescription: 'An intelligent analytics platform that leverages machine learning to provide predictive insights, automated anomaly detection, and comprehensive business intelligence reporting.',
    image: '/assets/images/portfolio/work2.png',
    technologies: ['Python', 'TensorFlow', 'React', 'D3.js', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
    category: 'AI/ML',
    featured: true,
    liveUrl: 'https://analytics-ai.albertnartey.com',
    githubUrl: 'https://github.com/albertnartey/ai-analytics',
    status: 'completed',
    startDate: '2023-01',
    endDate: '2023-05',
    challenges: [
      'Processing large datasets in real-time',
      'Building accurate predictive models',
      'Creating intuitive data visualizations'
    ],
    solutions: [
      'Implemented data streaming pipeline with Apache Kafka',
      'Used ensemble methods and feature engineering',
      'Built custom D3.js visualizations with React integration'
    ],
    results: [
      '60% improvement in prediction accuracy',
      'Reduced report generation time by 80%',
      'Increased user engagement by 150%'
    ]
  },
  {
    id: 'mobile-banking-app',
    title: 'Secure Mobile Banking App',
    description: 'Flutter-based mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management tools.',
    longDescription: 'A feature-rich mobile banking application built with Flutter, offering secure transactions, biometric authentication, budget tracking, and financial insights.',
    image: '/assets/images/portfolio/work3.png',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Node.js', 'MongoDB', 'JWT', 'Plaid API', 'Biometric Auth'],
    category: 'Mobile',
    featured: true,
    liveUrl: 'https://banking-app.albertnartey.com',
    githubUrl: 'https://github.com/albertnartey/mobile-banking',
    status: 'completed',
    startDate: '2022-09',
    endDate: '2023-01',
    challenges: [
      'Implementing bank-level security standards',
      'Ensuring smooth cross-platform performance',
      'Integrating with multiple banking APIs'
    ],
    solutions: [
      'Used AES-256 encryption with biometric authentication',
      'Optimized Flutter performance with efficient state management',
      'Built unified API layer for multiple banking providers'
    ],
    results: [
      '4.8/5 app store rating',
      '50,000+ downloads in first quarter',
      'Zero security incidents reported'
    ]
  },
  {
    id: 'task-management-system',
    title: 'Enterprise Task Management',
    description: 'Comprehensive project management system with team collaboration, time tracking, and advanced reporting features.',
    longDescription: 'An enterprise-grade task management platform designed for teams, featuring project planning, resource allocation, time tracking, and detailed analytics.',
    image: '/assets/images/portfolio/work4.png',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Chart.js', 'Material-UI'],
    category: 'Web Application',
    featured: false,
    liveUrl: 'https://taskmanager.albertnartey.com',
    githubUrl: 'https://github.com/albertnartey/task-manager',
    status: 'completed',
    startDate: '2022-03',
    endDate: '2022-06',
    challenges: [
      'Real-time collaboration features',
      'Complex permission system implementation',
      'Scalability for large teams'
    ],
    solutions: [
      'Implemented WebSocket-based real-time updates',
      'Built role-based access control system',
      'Used MongoDB sharding for scalability'
    ],
    results: [
      '200+ organizations using the platform',
      '30% improvement in team productivity',
      '95% user satisfaction rate'
    ]
  },
  {
    id: 'learning-management-system',
    title: 'AI-Enhanced LMS',
    description: 'Learning Management System with AI-powered personalized learning paths, progress tracking, and interactive content delivery.',
    longDescription: 'An intelligent learning platform that uses AI to create personalized learning experiences, track student progress, and provide adaptive content delivery.',
    image: '/assets/images/portfolio/work5.png',
    technologies: ['Next.js', 'Python', 'TensorFlow', 'PostgreSQL', 'AWS', 'Stripe', 'WebRTC'],
    category: 'AI/ML',
    featured: false,
    liveUrl: 'https://smartlms.albertnartey.com',
    githubUrl: 'https://github.com/albertnartey/smart-lms',
    status: 'in-progress',
    startDate: '2023-10',
    challenges: [
      'Creating adaptive learning algorithms',
      'Handling multimedia content delivery',
      'Building scalable video streaming'
    ],
    solutions: [
      'Developed ML models for learning pattern analysis',
      'Implemented CDN-based content delivery',
      'Used WebRTC for live streaming capabilities'
    ],
    results: [
      '40% improvement in learning outcomes',
      '60% increase in course completion rates',
      'Supporting 10,000+ concurrent users'
    ]
  },
  {
    id: 'blockchain-voting-system',
    title: 'Blockchain Voting Platform',
    description: 'Secure, transparent voting system built on blockchain technology with smart contracts and real-time results visualization.',
    longDescription: 'A revolutionary voting platform leveraging blockchain technology to ensure transparency, security, and immutability in electoral processes.',
    image: '/assets/images/portfolio/work6.png',
    technologies: ['Solidity', 'Web3.js', 'React', 'Node.js', 'Ethereum', 'IPFS', 'MetaMask'],
    category: 'Blockchain',
    featured: false,
    liveUrl: 'https://vote-chain.albertnartey.com',
    githubUrl: 'https://github.com/albertnartey/blockchain-voting',
    status: 'completed',
    startDate: '2022-01',
    endDate: '2022-04',
    challenges: [
      'Ensuring voter privacy while maintaining transparency',
      'Handling gas optimization for cost-effective voting',
      'Building user-friendly Web3 interface'
    ],
    solutions: [
      'Implemented zero-knowledge proof protocols',
      'Optimized smart contracts to reduce gas costs by 60%',
      'Created intuitive wallet integration system'
    ],
    results: [
      'Successfully conducted 5 pilot elections',
      '100% vote accuracy and transparency',
      '80% reduction in electoral costs'
    ]
  }
]

export const categories = ['All', 'Full-Stack', 'AI/ML', 'Mobile', 'Web Application', 'Blockchain']

export const getFeaturedProjects = () => projects.filter(project => project.featured)

export const getProjectsByCategory = (category: string) => {
  if (category === 'All') return projects
  return projects.filter(project => project.category === category)
}