'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface TimelineItemProps {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  technologies?: string[]
  isLeft?: boolean
  index: number
}

export function TimelineItem({
  title,
  company,
  location,
  period,
  description,
  technologies = [],
  isLeft = false,
  index
}: TimelineItemProps) {
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: 0, // Remove horizontal animation on mobile
      y: 30
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15, // Faster stagger for mobile
        
      }
    }
  }

  return (
    <motion.div
      className={`flex items-start mb-6 sm:mb-8 ${isLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex-row`}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Timeline dot and line */}
      <div className="flex-shrink-0 relative mt-2">
        <motion.div
          className="w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full border-2 sm:border-4 border-background shadow-lg"
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.2 }}
        />
        {/* Connecting line - visible on mobile as vertical line */}
        <div className="absolute top-3 sm:top-4 w-px h-16 sm:h-20 lg:h-24 bg-border left-1/2 transform -translate-x-1/2 last:hidden" />
      </div>

      {/* Content */}
      <motion.div
        className={`flex-1 ${isLeft ? 'lg:mr-8 lg:text-right' : 'lg:ml-8'} ml-4 sm:ml-6`}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <Card className="bg-card/80 border-border hover:border-primary/30 transition-all duration-300">
          <CardContent className="p-4 sm:p-6">
            <div className={`mb-4 ${isLeft ? 'lg:text-right' : ''}`}>
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-1 leading-tight">{title}</h3>
              <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">{company}</h4>
              
              <div className={`flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 text-sm text-muted-foreground ${isLeft ? 'lg:justify-end' : ''}`}>
                <div className="flex items-center gap-1">
                  <Calendar size={14} aria-hidden="true" />
                  <span>{period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} aria-hidden="true" />
                  <span>{location}</span>
                </div>
              </div>
            </div>

            <div className={`space-y-2 mb-4 ${isLeft ? 'lg:text-right' : ''}`}>
              {description.map((item, idx) => (
                <p key={idx} className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  • {item}
                </p>
              ))}
            </div>

            {technologies.length > 0 && (
              <div className={`flex flex-wrap gap-2 ${isLeft ? 'lg:justify-end' : ''}`}>
                {technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}