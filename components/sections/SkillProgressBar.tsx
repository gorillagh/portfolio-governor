'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface SkillProgressBarProps {
  skill: string
  percentage: number
  delay?: number
  className?: string
}

export function SkillProgressBar({ 
  skill, 
  percentage, 
  delay = 0,
  className = "" 
}: SkillProgressBarProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <motion.div
      className={`mb-6 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-foreground font-medium">{skill}</span>
        <motion.span
          className="text-primary font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ delay: (delay + 500) / 1000 }}
        >
          {percentage}%
        </motion.span>
      </div>
      
      <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
        <motion.div
          className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${percentage}%` : 0 }}
          transition={{ 
            duration: 1.2, 
            delay: (delay + 300) / 1000,
            ease: "easeOut"
          }}
        />
      </div>
    </motion.div>
  )
}