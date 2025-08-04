'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  X, 
  ExternalLink, 
  Github, 
  Calendar, 
  CheckCircle, 
  AlertTriangle,
  Target,
  Lightbulb,
  TrendingUp
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/constants/projects'

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsLoaded(true)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!project) return null

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  }

  const statusConfig = {
    completed: { icon: CheckCircle, color: 'bg-green-500', label: 'Completed' },
    'in-progress': { icon: AlertTriangle, color: 'bg-yellow-500', label: 'In Progress' },
    archived: { icon: AlertTriangle, color: 'bg-gray-500', label: 'Archived' }
  }

  const StatusIcon = statusConfig[project.status].icon

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative bg-background border border-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-10">
              <div className="flex items-center justify-between p-4 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 ${statusConfig[project.status].color} rounded-full`} />
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground truncate">
                    {project.title}
                  </h2>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="flex-shrink-0 h-10 w-10 p-0 hover:bg-muted"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
              <motion.div
                className="p-4 sm:p-6 space-y-6"
                variants={contentVariants}
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
              >
                {/* Project Image */}
                <motion.div variants={itemVariants} className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className={`${statusConfig[project.status].color} text-white flex items-center gap-1`}>
                      <StatusIcon className="w-3 h-3" />
                      {statusConfig[project.status].label}
                    </Badge>
                  </div>
                </motion.div>

                {/* Project Info Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Main Content - 2 columns */}
                  <div className="md:col-span-2 space-y-6">
                    <motion.div variants={itemVariants}>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Project Overview</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.longDescription}
                      </p>
                    </motion.div>

                    {/* Challenges Section */}
                    <motion.div variants={itemVariants}>
                      <Card className="bg-card/50 border-border">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg flex items-center gap-2 text-orange-400">
                            <Target className="w-5 h-5" />
                            Challenges
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {project.challenges.map((challenge, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-orange-400 mt-1.5">•</span>
                                <span>{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>

                    {/* Solutions Section */}
                    <motion.div variants={itemVariants}>
                      <Card className="bg-card/50 border-border">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg flex items-center gap-2 text-blue-400">
                            <Lightbulb className="w-5 h-5" />
                            Solutions
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {project.solutions.map((solution, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-blue-400 mt-1.5">•</span>
                                <span>{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>

                    {/* Results Section */}
                    <motion.div variants={itemVariants}>
                      <Card className="bg-card/50 border-border">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg flex items-center gap-2 text-green-400">
                            <TrendingUp className="w-5 h-5" />
                            Results & Impact
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {project.results.map((result, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-green-400 mt-1.5">•</span>
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>

                  {/* Sidebar - 1 column */}
                  <div className="space-y-6">
                    {/* Project Details */}
                    <motion.div variants={itemVariants}>
                      <Card className="bg-card/50 border-border">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg">Project Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span className="text-muted-foreground">
                              {project.startDate}
                              {project.endDate && ` - ${project.endDate}`}
                            </span>
                          </div>
                          
                          <div>
                            <span className="text-sm font-medium text-foreground">Category:</span>
                            <Badge variant="outline" className="ml-2">
                              {project.category}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>

                    {/* Technologies */}
                    <motion.div variants={itemVariants}>
                      <Card className="bg-card/50 border-border">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg">Technologies Used</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                              <Badge
                                key={index}
                                className="bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div variants={itemVariants} className="space-y-3">
                      {project.liveUrl && (
                        <Button asChild className="w-full h-12" size="lg">
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Live Project
                          </Link>
                        </Button>
                      )}
                      
                      {project.githubUrl && (
                        <Button asChild variant="outline" className="w-full h-12" size="lg">
                          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            View Source Code
                          </Link>
                        </Button>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}