import { 
  Code, 
  Database, 
  Brain, 
  Smartphone, 
  Cloud, 
  Settings,
  LucideIcon
} from 'lucide-react'

export interface SkillCategory {
  title: string
  description: string
  icon: LucideIcon
  skills: string[]
  color: string
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Modern web interfaces",
    icon: Code,
    skills: [
      "React & Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML5 & CSS3",
      "JavaScript ES6+",
      "Redux & Zustand"
    ],
    color: "bg-blue-500"
  },
  {
    title: "Backend Development",
    description: "Server-side architecture",
    icon: Database,
    skills: [
      "Node.js & Express",
      "Python & FastAPI",
      "REST & GraphQL APIs",
      "Microservices",
      "Authentication & Security",
      "API Design"
    ],
    color: "bg-green-500"
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent solutions",
    icon: Brain,
    skills: [
      "TensorFlow & PyTorch",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "Deep Learning",
      "MLOps"
    ],
    color: "bg-pink-500"
  },
  {
    title: "Mobile Development",
    description: "Cross-platform apps",
    icon: Smartphone,
    skills: [
      "React Native",
      "Flutter & Dart",
      "iOS Development",
      "Android Development",
      "Progressive Web Apps",
      "Mobile UI/UX"
    ],
    color: "bg-cyan-500"
  },
  {
    title: "Cloud & DevOps",
    description: "Scalable infrastructure",
    icon: Cloud,
    skills: [
      "AWS & Azure",
      "Docker & Kubernetes",
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Monitoring & Logging",
      "Cloud Architecture"
    ],
    color: "bg-orange-500"
  },
  {
    title: "Database & Tools",
    description: "Data management",
    icon: Settings,
    skills: [
      "PostgreSQL & MongoDB",
      "Redis & Elasticsearch",
      "Git & GitHub",
      "Testing (Jest, Cypress)",
      "Linux & Shell Scripting",
      "Performance Optimization"
    ],
    color: "bg-purple-500"
  }
]

export const technologies = [
  // Frontend
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },
  { name: "Redux", category: "Frontend" },

  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "GraphQL", category: "Backend" },
  { name: "REST APIs", category: "Backend" },

  // Database
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "Prisma", category: "Database" },
  { name: "Supabase", category: "Database" },

  // Cloud
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "Vercel", category: "Cloud" },
  { name: "Docker", category: "Cloud" },
  { name: "Kubernetes", category: "Cloud" },

  // AI/ML
  { name: "TensorFlow", category: "AI/ML" },
  { name: "PyTorch", category: "AI/ML" },
  { name: "Scikit-learn", category: "AI/ML" },
  { name: "OpenAI", category: "AI/ML" },
  { name: "Hugging Face", category: "AI/ML" },

  // Mobile
  { name: "React Native", category: "Mobile" },
  { name: "Flutter", category: "Mobile" },
  { name: "Dart", category: "Mobile" },
  { name: "Expo", category: "Mobile" },

  // Tools
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "VS Code", category: "Tools" },
  { name: "Figma", category: "Tools" },
  { name: "Jest", category: "Tools" },
  { name: "Cypress", category: "Tools" }
]

export const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-SAA-2023-001"
  },
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2022",
    credentialId: "TF-DEV-2022-001"
  },
  {
    name: "Meta React Developer",
    issuer: "Meta",
    date: "2023",
    credentialId: "META-REACT-2023-001"
  }
]