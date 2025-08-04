'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface ScrollIndicatorProps {
  className?: string
  onClick?: () => void
}

export function ScrollIndicator({ className = "", onClick }: ScrollIndicatorProps) {
  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      // Default behavior: scroll to next section
      window.scrollBy({
        top: window.innerHeight * 0.8,
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.button
      onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-2 p-4 cursor-pointer group ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Scroll down to see more content"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="text-primary"
      >
        <ChevronDown size={24} />
      </motion.div>
      <motion.span 
        className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        Scroll Down
      </motion.span>
    </motion.button>
  )
}