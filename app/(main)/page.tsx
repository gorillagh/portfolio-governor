'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { HeroSection } from '@/components/sections/HeroSection';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
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

export default function HomePage() {
  return (
    <main className="bg-background min-h-screen">
      {/* Enhanced Hero Section */}
      <HeroSection />

      {/* Featured Projects Section */}
      <motion.section
        className="container mx-auto px-4 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="mb-16 text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold md:text-4xl">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Showcasing some of my recent work in software architecture, AI/ML,
            and full-stack development
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
        >
          {/* Project Card 1 */}
          <motion.div variants={fadeInUp}>
            <Card className="bg-card border-border hover:border-primary/50 group h-full transition-all duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src="/assets/images/portfolio/work1.png"
                  alt="E-Commerce Platform"
                  width={400}
                  height={240}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <CardHeader>
                <CardTitle className="text-primary group-hover:text-primary/80 transition-colors">
                  E-Commerce Platform
                </CardTitle>
                <CardDescription>
                  Full-stack Next.js application with real-time inventory
                  management and Stripe integration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="bg-primary/20 text-primary rounded-full px-2 py-1 text-xs">
                    Next.js
                  </span>
                  <span className="bg-primary/20 text-primary rounded-full px-2 py-1 text-xs">
                    TypeScript
                  </span>
                  <span className="bg-primary/20 text-primary rounded-full px-2 py-1 text-xs">
                    Stripe
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="group-hover:bg-primary group-hover:text-primary-foreground w-full transition-colors"
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Project Card 2 */}
          <motion.div variants={fadeInUp}>
            <Card className="bg-card border-border hover:border-primary/50 group h-full transition-all duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src="/assets/images/portfolio/work2.png"
                  alt="AI Analytics Dashboard"
                  width={400}
                  height={240}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <CardHeader>
                <CardTitle className="text-primary group-hover:text-primary/80 transition-colors">
                  AI Analytics Dashboard
                </CardTitle>
                <CardDescription>
                  Machine learning-powered analytics platform with predictive
                  insights and real-time data visualization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="bg-primary/20 text-primary rounded-full px-2 py-1 text-xs">
                    Python
                  </span>
                  <span className="bg-primary/20 text-primary rounded-full px-2 py-1 text-xs">
                    TensorFlow
                  </span>
                  <span className="bg-primary/20 text-primary rounded-full px-2 py-1 text-xs">
                    React
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="group-hover:bg-primary group-hover:text-primary-foreground w-full transition-colors"
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Project Card 3 */}
          <motion.div variants={fadeInUp}>
            <Card className="bg-card border-border hover:border-primary/50 group h-full transition-all duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src="/assets/images/portfolio/work3.png"
                  alt="Mobile Banking App"
                  width={400}
                  height={240}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <CardHeader>
                <CardTitle className="text-primary group-hover:text-primary/80 transition-colors">
                  Mobile Banking App
                </CardTitle>
                <CardDescription>
                  Secure Flutter application with biometric authentication and
                  real-time transaction processing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="bg-primary/20 text-primary rounded-full px-2 py-1 text-xs">
                    Flutter
                  </span>
                  <span className="bg-primary/20 text-primary rounded-full px-2 py-1 text-xs">
                    Firebase
                  </span>
                  <span className="bg-primary/20 text-primary rounded-full px-2 py-1 text-xs">
                    Dart
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="group-hover:bg-primary group-hover:text-primary-foreground w-full transition-colors"
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Link href="/projects">View All Projects</Link>
          </Button>
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="bg-card/50 relative overflow-hidden py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="bg-primary/5 absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <motion.h2
            className="text-foreground mb-6 text-3xl font-bold md:text-4xl"
            variants={fadeInUp}
          >
            Ready to Build Something Amazing?
          </motion.h2>
          <motion.p
            className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg"
            variants={fadeInUp}
          >
            Let's discuss your next project and how I can help you achieve your
            goals with cutting-edge technology and innovative solutions.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 min-w-[200px] transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact">Start a Project</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
