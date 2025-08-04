'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Eye, Info } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  category: string
  featured?: boolean
  index: number
  onViewDetails?: () => void
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  category,
  featured = false,
  index,
  onViewDetails
}: ProjectCardProps) {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      layout
      className="h-full"
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      <Card className={`
        bg-card border-border hover:border-primary/50 transition-all duration-300 group h-full
        ${featured ? 'ring-2 ring-primary/20' : ''}
      `}>
        {/* Project Image */}
        <div className="relative overflow-hidden rounded-t-lg">
          <motion.div
            className="relative h-48 md:h-56"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            
            {/* Overlay on hover - Desktop only */}
            <motion.div
              className="hidden md:flex absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <div className="flex gap-3">
                {liveUrl && (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="sm" asChild className="bg-background/20 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground">
                      <Link href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} live demo`}>
                        <Eye className="w-4 h-4 mr-2" aria-hidden="true" />
                        View
                      </Link>
                    </Button>
                  </motion.div>
                )}
                {githubUrl && (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="sm" variant="outline" asChild className="bg-background/20 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground">
                      <Link href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} source code`}>
                        <Github className="w-4 h-4 mr-2" aria-hidden="true" />
                        Code
                      </Link>
                    </Button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Featured badge */}
          {featured && (
            <motion.div
              className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              Featured
            </motion.div>
          )}

          {/* Category badge */}
          <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-medium border border-border">
            {category}
          </div>
        </div>

        {/* Project Content */}
        <CardHeader className="pb-4">
          <CardTitle className="text-primary group-hover:text-primary/80 transition-colors text-lg md:text-xl leading-tight">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed line-clamp-3">
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.slice(0, 4).map((tech, techIndex) => (
              <motion.span
                key={tech}
                className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (index * 0.1) + (techIndex * 0.05) }}
              >
                {tech}
              </motion.span>
            ))}
            {technologies.length > 4 && (
              <span className="text-xs text-muted-foreground px-2 py-1">
                +{technologies.length - 4} more
              </span>
            )}
          </div>

          {/* Action buttons - Mobile optimized with min touch target */}
          <div className="flex gap-2 pt-2">
            {onViewDetails && (
              <Button 
                size="sm" 
                variant="secondary" 
                onClick={onViewDetails}
                className="flex-1 h-10 touch-manipulation"
                aria-label={`View ${title} details`}
              >
                <Info className="w-4 h-4 mr-2" aria-hidden="true" />
                <span className="text-sm">Details</span>
              </Button>
            )}
            {liveUrl && (
              <Button size="sm" asChild className={`${onViewDetails ? 'flex-1' : 'flex-1'} h-10 touch-manipulation`}>
                <Link href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} live demo`}>
                  <ExternalLink className="w-4 h-4 mr-2" aria-hidden="true" />
                  <span className="text-sm">{onViewDetails ? 'Live' : 'Live Demo'}</span>
                </Link>
              </Button>
            )}
            {githubUrl && !onViewDetails && (
              <Button size="sm" variant="outline" asChild className="flex-1 h-10 touch-manipulation">
                <Link href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} source code`}>
                  <Github className="w-4 h-4 mr-2" aria-hidden="true" />
                  <span className="text-sm">Source</span>
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}