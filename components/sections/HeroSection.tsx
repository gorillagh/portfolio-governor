'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TypewriterText } from '@/components/animations/TypewriterText';
import { ScrollIndicator } from '@/components/animations/ScrollIndicator';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Download, MapPin, Calendar, Mail } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: 'easeInOut' as const,
    },
  },
  tap: {
    scale: 0.95,
  },
};

export function HeroSection() {
  const roles = [
    'Software Architect',
    'AI/ML Consultant',
    'Full-Stack Developer',
    'Technical Lead',
    'Mobile Developer',
  ];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="bg-primary/10 absolute top-1/4 left-1/4 h-96 w-96 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut' as const,
          }}
        />
        <motion.div
          className="bg-secondary/10 absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut' as const,
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-12 lg:flex-row"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content Section */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl leading-tight font-bold text-white md:text-6xl lg:text-7xl">
                Albert Nartey
              </h1>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex h-16 items-center justify-center lg:justify-start"
            >
              <TypewriterText
                texts={roles}
                className="text-primary text-2xl font-semibold md:text-3xl lg:text-4xl"
                typeSpeed={100}
                deleteSpeed={50}
                delayBetweenTexts={2000}
              />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed md:text-lg lg:mx-0 lg:text-xl"
            >
              Experienced software architect and AI consultant with proven
              expertise in building scalable applications. I transform complex
              business challenges into elegant technical solutions using
              cutting-edge technologies like React, Next.js, and machine
              learning.
            </motion.p>

            {/* Professional Status Indicators */}
            <motion.div
              variants={itemVariants}
              className="text-muted-foreground flex flex-col items-center justify-center gap-4 text-sm sm:flex-row lg:justify-start"
            >
              <div className="flex items-center gap-2">
                <MapPin className="text-primary h-4 w-4" aria-hidden="true" />
                <span>Accra, Ghana</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="text-primary h-4 w-4" aria-hidden="true" />
                <span>Available for projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="text-primary h-4 w-4" aria-hidden="true" />
                <span>Open to collaborations</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col justify-center gap-4 pt-6 sm:flex-row lg:justify-start"
            >
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 min-w-[180px] text-base font-medium transition-all duration-300"
                >
                  <Link href="/projects" className="flex items-center gap-2">
                    View My Work
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-12 min-w-[180px] text-base font-medium transition-all duration-300"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Let's Connect
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </motion.div>

              {/* Resume Download Button - Mobile Priority */}
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="sm:hidden"
              >
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="text-primary hover:text-primary-foreground hover:bg-primary/10 h-12 w-full text-base transition-all duration-300"
                >
                  <Link
                    href="/assets/CV- Albert Nartey.docx"
                    download
                    className="flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    Download Resume
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Professional Stats */}
            <motion.div
              variants={itemVariants}
              className="mx-auto grid max-w-md grid-cols-3 gap-4 pt-8 sm:gap-8 lg:mx-0"
            >
              <div className="text-center">
                <div className="text-primary mb-1 text-xl font-bold sm:text-2xl">
                  5+
                </div>
                <div className="text-muted-foreground text-xs leading-tight sm:text-sm">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-primary mb-1 text-xl font-bold sm:text-2xl">
                  50+
                </div>
                <div className="text-muted-foreground text-xs leading-tight sm:text-sm">
                  Projects Delivered
                </div>
              </div>
              <div className="text-center">
                <div className="text-primary mb-1 text-xl font-bold sm:text-2xl">
                  25+
                </div>
                <div className="text-muted-foreground text-xs leading-tight sm:text-sm">
                  Happy Clients
                </div>
              </div>
            </motion.div>

            {/* Desktop Resume Download */}
            <motion.div
              variants={itemVariants}
              className="hidden pt-4 sm:block"
            >
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="text-primary hover:text-primary-foreground hover:bg-primary/10 transition-all duration-300"
              >
                <Link
                  href="/assets/CV- Albert Nartey.docx"
                  download
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download Resume
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Profile Image Section */}
          <motion.div
            className="flex-shrink-0"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="from-primary/20 to-secondary/20 absolute inset-0 scale-110 rounded-full bg-gradient-to-r blur-xl"
                animate={{
                  rotate: [0, 360],
                  scale: [1.1, 1.2, 1.1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                  scale: {
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut' as const,
                  },
                }}
              />
              <div className="border-primary/30 relative mx-auto h-64 w-64 overflow-hidden rounded-full border-4 shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                <Image
                  src="/assets/images/profile.jpg"
                  alt="Albert Nartey - Software Architect & AI Consultant"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                />
              </div>

              {/* Status indicator for availability */}
              <motion.div
                className="border-background absolute right-4 bottom-4 h-6 w-6 rounded-full border-4 bg-green-500 shadow-lg"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut' as const,
                }}
                title="Available for new projects"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 transform sm:bottom-8"
          variants={itemVariants}
        >
          <ScrollIndicator />
        </motion.div>
      </div>
    </section>
  );
}
