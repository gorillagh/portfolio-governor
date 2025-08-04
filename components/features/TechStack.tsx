'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface TechStackProps {
  technologies: {
    name: string
    logo?: string
    category: string
  }[]
  className?: string
}

export function TechStack({ technologies, className = "" }: TechStackProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5, rotateY: 90 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateY: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const categoryColors = {
    'Frontend': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'Backend': 'bg-green-500/20 text-green-400 border-green-500/30',
    'Database': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    'Cloud': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    'AI/ML': 'bg-pink-500/20 text-pink-400 border-pink-500/30',
    'Mobile': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    'Tools': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
  }

  const groupedTech = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = []
    }
    acc[tech.category].push(tech)
    return acc
  }, {} as Record<string, typeof technologies>)

  return (
    <div className={`space-y-8 ${className}`}>
      {Object.entries(groupedTech).map(([category, techs]) => (
        <motion.div
          key={category}
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-sm ${categoryColors[category as keyof typeof categoryColors] || categoryColors.Tools}`}>
              {category}
            </span>
          </h3>
          
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            variants={containerVariants}
          >
            {techs.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <div className="bg-card/60 border border-border hover:border-primary/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  {tech.logo ? (
                    <div className="relative w-8 h-8 mx-auto mb-2">
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        fill
                        className="object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                      />
                    </div>
                  ) : (
                    <div className="w-8 h-8 mx-auto mb-2 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">
                        {tech.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}