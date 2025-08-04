'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  ExternalLink, 
  Github, 
  Heart, 
  Eye, 
  Calendar, 
  Clock,
  TrendingUp,
  Star
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FirebaseProject } from '@/lib/firebase/collections'
import { usePortfolioAnalytics } from '@/components/analytics/AnalyticsProvider'
import { Timestamp } from 'firebase/firestore'

interface EnhancedProjectCardProps {
  project: FirebaseProject
  variant?: 'default' | 'featured' | 'compact'
  showStats?: boolean
  onLike?: (projectId: string) => void
  className?: string
}

export function EnhancedProjectCard({ 
  project, 
  variant = 'default',
  showStats = true,
  onLike,
  className = ''
}: EnhancedProjectCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(project.likes)
  const { trackProjectView, trackProjectLike, trackExternalLinkClick } = usePortfolioAnalytics()

  const handleLike = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (isLiked) return

    setIsLiked(true)
    setLikeCount(prev => prev + 1)
    
    try {
      await onLike?.(project.id)
      trackProjectLike(project.id, project.title)
    } catch (error) {
      // Revert on error
      setIsLiked(false)
      setLikeCount(prev => prev - 1)
      console.error('Failed to like project:', error)
    }
  }

  const handleProjectView = () => {
    trackProjectView(project.id, project.title)
  }

  const handleExternalLink = (url: string, linkType: string) => {
    trackExternalLinkClick(url, `${project.title} - ${linkType}`, 'project_card')
  }

  const formatDate = (timestamp: Timestamp) => {
    return timestamp.toDate().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'in-progress':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'archived':
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const isFeatured = variant === 'featured' || project.featured
  const isCompact = variant === 'compact'

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className={className}
    >
      <Link href={`/projects/${project.id}`} onClick={handleProjectView}>
        <Card 
          className={`
            group overflow-hidden bg-card/80 border-border hover:border-primary/50 
            transition-all duration-300 cursor-pointer h-full
            ${isFeatured ? 'ring-2 ring-primary/20' : ''}
          `}
        >
          {/* Project Image */}
          <div className={`relative overflow-hidden ${isCompact ? 'h-40' : 'h-48'} bg-muted`}>
            <motion.div
              variants={imageVariants}
              className="w-full h-full"
            >
              <Image
                src={project.imageUrl}
                alt={project.imageAlt || project.title}
                fill
                className="object-cover transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
            
            {/* Overlay with quick actions */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
              {project.liveUrl && (
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleExternalLink(project.liveUrl!, 'Live Demo')
                    window.open(project.liveUrl, '_blank')
                  }}
                  className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Demo
                </Button>
              )}
              
              {project.githubUrl && (
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleExternalLink(project.githubUrl!, 'GitHub')
                    window.open(project.githubUrl, '_blank')
                  }}
                  className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                >
                  <Github className="w-4 h-4 mr-1" />
                  Code
                </Button>
              )}
            </div>

            {/* Status Badge */}
            <div className="absolute top-3 left-3">
              <Badge 
                variant="secondary" 
                className={`${getStatusColor(project.status)} text-xs capitalize`}
              >
                {project.status.replace('-', ' ')}
              </Badge>
            </div>

            {/* Featured Badge */}
            {isFeatured && (
              <div className="absolute top-3 right-3">
                <Badge className="bg-primary/90 text-primary-foreground">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
              </div>
            )}
          </div>

          <CardContent className="p-6">
            {/* Project Title and Category */}
            <div className="mb-3">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
                  {project.title}
                </h3>
                {!isCompact && (
                  <Badge variant="outline" className="ml-2 shrink-0">
                    {project.category}
                  </Badge>
                )}
              </div>
              
              {!isCompact && (
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {project.description}
                </p>
              )}
            </div>

            {/* Technologies */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, isCompact ? 3 : 6).map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="secondary" 
                    className="text-xs bg-secondary/50 hover:bg-secondary/70 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > (isCompact ? 3 : 6) && (
                  <Badge variant="secondary" className="text-xs bg-secondary/50">
                    +{project.technologies.length - (isCompact ? 3 : 6)}
                  </Badge>
                )}
              </div>
            </div>

            {/* Project Stats and Actions */}
            {!isCompact && showStats && (
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{project.viewCount.toLocaleString()}</span>
                  </div>
                  
                  <button
                    onClick={handleLike}
                    disabled={isLiked}
                    className={`flex items-center gap-1 transition-colors hover:text-red-400 ${
                      isLiked ? 'text-red-400' : ''
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                    <span>{likeCount.toLocaleString()}</span>
                  </button>
                  
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(project.createdAt)}</span>
                  </div>
                </div>

                {/* Performance Indicators */}
                {project.results.length > 0 && (
                  <div className="flex items-center gap-1 text-green-400">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-xs">Results</span>
                  </div>
                )}
              </div>
            )}

            {/* Compact view stats */}
            {isCompact && showStats && (
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {project.viewCount}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    {likeCount}
                  </span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {project.category}
                </Badge>
              </div>
            )}
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}

export default EnhancedProjectCard