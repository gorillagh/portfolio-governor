'use client';

import { motion, easeOut } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TimelineItem } from '@/components/sections/TimelineItem';
import { SkillProgressBar } from '@/components/sections/SkillProgressBar';
import { Download, Code, Brain, Users, Award, Coffee } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function AboutPage() {
  const experiences = [
    {
      title: 'Senior Software Architect',
      company: 'TechCorp Solutions',
      location: 'Accra, Ghana',
      period: '2022 - Present',
      description: [
        'Led architectural design for 5+ enterprise applications serving 100k+ users',
        'Implemented microservices architecture reducing system latency by 40%',
        'Mentored team of 8 developers in modern React and AI/ML practices',
        'Drove adoption of DevOps practices improving deployment frequency by 300%',
      ],
      technologies: [
        'React',
        'Next.js',
        'Node.js',
        'AWS',
        'Docker',
        'Python',
        'TensorFlow',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations Ltd',
      location: 'Kumasi, Ghana',
      period: '2020 - 2022',
      description: [
        'Developed 15+ web applications using React, Node.js, and PostgreSQL',
        'Built AI-powered analytics dashboard increasing client insights by 60%',
        'Optimized database queries resulting in 50% faster application performance',
        'Collaborated with UX team to implement responsive, accessible interfaces',
      ],
      technologies: [
        'React',
        'Node.js',
        'PostgreSQL',
        'Python',
        'MongoDB',
        'AWS',
      ],
    },
    {
      title: 'Software Developer',
      company: 'StartupHub Ghana',
      location: 'Accra, Ghana',
      period: '2018 - 2020',
      description: [
        'Built MVP products for 3 successful startup launches',
        'Implemented REST APIs serving 10k+ daily active users',
        'Contributed to open-source projects with 500+ GitHub stars',
        'Participated in tech meetups and hackathons, winning 2 competitions',
      ],
      technologies: ['JavaScript', 'React', 'Express.js', 'MySQL', 'Git'],
    },
  ];

  const coreSkills = [
    { skill: 'React & Next.js', percentage: 95 },
    { skill: 'TypeScript', percentage: 90 },
    { skill: 'Node.js', percentage: 88 },
    { skill: 'Python & AI/ML', percentage: 85 },
    { skill: 'AWS & DevOps', percentage: 82 },
    { skill: 'Database Design', percentage: 88 },
  ];

  const achievements = [
    {
      icon: <Code className="h-6 w-6" />,
      title: '50+ Projects',
      description: 'Successfully delivered applications',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: '20+ Clients',
      description: 'Satisfied customers worldwide',
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: '5+ Years',
      description: 'Professional development experience',
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: 'AI/ML Expert',
      description: 'Specialized in machine learning solutions',
    },
  ];

  return (
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="space-y-20"
      >
        {/* Page Header */}
        <motion.div variants={fadeInUp} className="space-y-6 text-center">
          <h1 className="text-foreground text-4xl font-bold md:text-5xl lg:text-6xl">
            About Me
          </h1>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed md:text-xl">
            Passionate software architect with 5+ years of experience crafting
            innovative solutions that bridge technology and business needs.
          </p>
        </motion.div>

        {/* Hero Section with Profile */}
        <motion.section
          variants={fadeInUp}
          className="grid items-center gap-8 lg:grid-cols-3 lg:gap-12"
        >
          <div className="order-2 space-y-6 lg:order-1 lg:col-span-1">
            <motion.div
              className="relative mx-auto w-64 overflow-hidden rounded-2xl shadow-2xl sm:w-72 lg:mx-0 lg:w-80"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/assets/images/profile.jpg"
                alt="Albert Nartey - Software Architect"
                width={320}
                height={400}
                className="h-auto w-full object-cover"
                sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                priority
              />
              <div className="from-primary/20 absolute inset-0 bg-gradient-to-t to-transparent" />
            </motion.div>
          </div>

          <div className="order-1 space-y-6 lg:order-2 lg:col-span-2">
            <h2 className="text-foreground text-center text-2xl font-bold sm:text-3xl lg:text-left lg:text-4xl">
              My Journey in Tech
            </h2>
            <div className="text-muted-foreground space-y-4 text-center text-base leading-relaxed sm:text-lg lg:text-left">
              <p>
                I'm a software architect and AI consultant based in Ghana, with
                a passion for building scalable applications that solve
                real-world problems. My journey began with a curiosity about how
                things work, leading me to explore programming and eventually
                specialize in modern web technologies and artificial
                intelligence.
              </p>
              <p>
                Over the years, I've had the privilege of working with startups
                and established companies, helping them leverage technology to
                achieve their business goals. I believe in writing clean,
                maintainable code and creating user experiences that truly
                matter.
              </p>
              <p>
                When I'm not coding, you'll find me exploring the latest AI
                research, contributing to open-source projects, or mentoring
                aspiring developers in my community.
              </p>
            </div>

            <motion.div className="flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 min-w-[160px]"
              >
                <a href="/assets/CV- Albert Nartey.docx" download>
                  <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                  Download Resume
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 min-w-[160px]"
              >
                <Link href="/contact">Let's Connect</Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Achievements Grid */}
        <motion.section variants={fadeInUp} className="space-y-8">
          <h2 className="text-foreground text-center text-3xl font-bold md:text-4xl">
            Key Achievements
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                variants={fadeInUp}
                custom={index}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="bg-card/80 border-border hover:border-primary/30 h-full transition-all duration-300">
                  <CardContent className="space-y-4 p-6 text-center">
                    <div className="bg-primary/20 text-primary mx-auto flex h-12 w-12 items-center justify-center rounded-full">
                      {achievement.icon}
                    </div>
                    <h3 className="text-primary text-xl font-bold">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Core Skills */}
        <motion.section variants={fadeInUp} className="space-y-8">
          <h2 className="text-foreground text-center text-3xl font-bold md:text-4xl">
            Core Skills & Expertise
          </h2>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {coreSkills.map((skill, index) => (
              <SkillProgressBar
                key={skill.skill}
                skill={skill.skill}
                percentage={skill.percentage}
                delay={index * 200}
              />
            ))}
          </div>
        </motion.section>

        {/* Experience Timeline */}
        <motion.section variants={fadeInUp} className="space-y-8 sm:space-y-12">
          <h2 className="text-foreground text-center text-2xl font-bold sm:text-3xl lg:text-4xl">
            Professional Experience
          </h2>
          <div className="relative mx-auto max-w-4xl">
            {/* Central timeline line - hidden on mobile */}
            <div className="bg-border absolute left-1/2 hidden h-full w-px -translate-x-1/2 transform lg:block" />

            {experiences.map((experience, index) => (
              <TimelineItem
                key={`${experience.company}-${experience.period}`}
                {...experience}
                isLeft={index % 2 === 0}
                index={index}
              />
            ))}
          </div>
        </motion.section>

        {/* Personal Touch */}
        <motion.section
          variants={fadeInUp}
          className="bg-card/30 rounded-2xl p-6 text-center sm:p-8"
        >
          <div className="mb-6 flex justify-center">
            <Coffee
              className="text-primary h-10 w-10 sm:h-12 sm:w-12"
              aria-hidden="true"
            />
          </div>
          <h3 className="text-foreground mb-4 text-xl font-bold sm:text-2xl">
            Beyond the Code
          </h3>
          <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed sm:text-lg">
            When I'm not building applications, I enjoy exploring new
            technologies, reading about AI advancements, playing chess, and
            sharing knowledge with the developer community through blog posts
            and tech talks.
          </p>
        </motion.section>
      </motion.div>
    </div>
  );
}
