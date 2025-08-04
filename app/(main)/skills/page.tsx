'use client'

import { motion } from 'framer-motion'
import { SkillCard } from '@/components/features/SkillCard'
import { TechStack } from '@/components/features/TechStack'
import { SkillProgressBar } from '@/components/sections/SkillProgressBar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { skillCategories, technologies, certifications } from '@/constants/skills'
import { Award, Download, ExternalLink, Calendar } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function SkillsPage() {
  const proficiencyLevels = [
    { skill: "React & Next.js", percentage: 95 },
    { skill: "TypeScript", percentage: 90 },
    { skill: "Node.js & Express", percentage: 88 },
    { skill: "Python & AI/ML", percentage: 85 },
    { skill: "AWS & Cloud Services", percentage: 82 },
    { skill: "Mobile Development", percentage: 80 }
  ]

  return (
    <div className="container mx-auto max-w-7xl">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="space-y-20"
      >
        {/* Page Header */}
        <motion.div variants={fadeInUp} className="text-center space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Skills & Expertise
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            A comprehensive overview of my technical skills, tools, and technologies 
            I leverage to deliver exceptional software solutions.
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <motion.section variants={staggerContainer} className="space-y-8">
          <motion.h2 
            variants={fadeInUp} 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground"
          >
            Core Competencies
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={staggerContainer}
          >
            {skillCategories.map((category, index) => (
              <SkillCard
                key={category.title}
                title={category.title}
                description={category.description}
                icon={category.icon}
                skills={category.skills}
                color={category.color}
                index={index}
              />
            ))}
          </motion.div>
        </motion.section>

        {/* Proficiency Levels */}
        <motion.section variants={staggerContainer} className="space-y-8">
          <motion.h2 
            variants={fadeInUp} 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground"
          >
            Proficiency Levels
          </motion.h2>
          
          <motion.div 
            variants={fadeInUp}
            className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto"
          >
            {proficiencyLevels.map((skill, index) => (
              <SkillProgressBar
                key={skill.skill}
                skill={skill.skill}
                percentage={skill.percentage}
                delay={index * 150}
              />
            ))}
          </motion.div>
        </motion.section>

        {/* Technology Stack */}
        <motion.section variants={staggerContainer} className="space-y-8">
          <motion.h2 
            variants={fadeInUp} 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground"
          >
            Technology Stack
          </motion.h2>
          
          <motion.div variants={fadeInUp}>
            <TechStack technologies={technologies} />
          </motion.div>
        </motion.section>

        {/* Certifications */}
        <motion.section variants={staggerContainer} className="space-y-8">
          <motion.h2 
            variants={fadeInUp} 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground"
          >
            Certifications & Achievements
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="bg-card/80 border-border hover:border-primary/30 transition-all duration-300 h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-primary text-lg leading-tight">
                          {cert.name}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Issued {cert.date}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      ID: {cert.credentialId}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Skills Summary */}
        <motion.section 
          variants={fadeInUp} 
          className="bg-card/30 rounded-2xl p-6 sm:p-8 md:p-12 text-center space-y-6"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
            Always Learning & Growing
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Technology evolves rapidly, and I stay ahead by continuously learning new frameworks, 
            tools, and methodologies. I believe in combining proven technologies with cutting-edge 
            innovations to deliver the best solutions for my clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 min-w-[160px]">
              <a href="/assets/CV- Albert Nartey.docx" download>
                <Download className="w-4 h-4 mr-2" aria-hidden="true" />
                Download Resume
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 min-w-[160px]">
              <a href="/projects">
                <ExternalLink className="w-4 h-4 mr-2" aria-hidden="true" />
                View My Work
              </a>
            </Button>
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}