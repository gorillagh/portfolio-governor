'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'

interface SkillCardProps {
  title: string
  description: string
  icon: LucideIcon
  skills: string[]
  color: string
  index: number
}

export function SkillCard({ 
  title, 
  description, 
  icon: Icon, 
  skills, 
  color,
  index 
}: SkillCardProps) {
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
        
      }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.2 }
      }}
      className="h-full"
    >
      <Card className="bg-card/80 border-border hover:border-primary/30 transition-all duration-300 group h-full">
        <CardContent className="p-6 space-y-6">
          {/* Icon and Title */}
          <div className="flex items-center gap-4">
            <motion.div
              className={`w-12 h-12 rounded-lg flex items-center justify-center ${color} group-hover:scale-110 transition-transform duration-300`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Icon className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {description}
              </p>
            </div>
          </div>

          {/* Skills List */}
          <div className="space-y-3">
            {skills.map((skill, skillIndex) => (
              <motion.div
                key={skill}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: (index * 0.1) + (skillIndex * 0.05),
                  duration: 0.3
                }}
              >
                <motion.div
                  className="w-2 h-2 bg-primary rounded-full"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: (index * 0.1) + (skillIndex * 0.05) + 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                />
                <span className="text-foreground font-medium text-sm md:text-base">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}