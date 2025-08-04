'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypewriterTextProps {
  texts: string[]
  className?: string
  typeSpeed?: number
  deleteSpeed?: number
  delayBetweenTexts?: number
}

export function TypewriterText({ 
  texts, 
  className = "", 
  typeSpeed = 100, 
  deleteSpeed = 50, 
  delayBetweenTexts = 2000 
}: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex]
      
      if (isPaused) {
        setIsPaused(false)
        setIsDeleting(true)
        return
      }

      if (!isDeleting) {
        // Typing
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.substring(0, currentText.length + 1))
        } else {
          // Finished typing, pause before deleting
          setIsPaused(true)
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(fullText.substring(0, currentText.length - 1))
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false)
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
        }
      }
    }, 
    isPaused 
      ? delayBetweenTexts 
      : isDeleting 
        ? deleteSpeed 
        : typeSpeed
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, isPaused, currentTextIndex, texts, typeSpeed, deleteSpeed, delayBetweenTexts])

  return (
    <motion.span 
      className={`inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {currentText}
      <motion.span
        className="inline-block w-0.5 h-8 bg-primary ml-1"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <span className="sr-only">
        {texts.join(', ')}
      </span>
    </motion.span>
  )
}