'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface ProjectFilterProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
  className?: string
}

export function ProjectFilter({ 
  categories, 
  activeCategory, 
  onCategoryChange,
  className = "" 
}: ProjectFilterProps) {
  return (
    <motion.div
      className={`flex flex-wrap justify-center gap-2 md:gap-4 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {categories.map((category, index) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
        >
          <Button
            variant={activeCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange(category)}
            className={`
              transition-all duration-300 min-w-[100px]
              ${activeCategory === category 
                ? "bg-primary text-primary-foreground shadow-lg scale-105" 
                : "hover:border-primary hover:text-primary hover:bg-primary/10"
              }
            `}
          >
            {category}
          </Button>
        </motion.div>
      ))}
    </motion.div>
  )
}