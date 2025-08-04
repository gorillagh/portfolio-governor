'use client'

import { motion } from 'framer-motion'
import { ContactForm } from '@/components/features/ContactForm'
import { ContactInfo } from '@/components/features/ContactInfo'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  MessageSquare, 
  Clock, 
  CheckCircle, 
  Users, 
  Star,
  Coffee
} from 'lucide-react'

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

const responseStats = [
  {
    icon: <Clock className="w-6 h-6" />,
    value: "< 24hrs",
    label: "Response Time"
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    value: "95%",
    label: "Project Success Rate"
  },
  {
    icon: <Users className="w-6 h-6" />,
    value: "20+",
    label: "Happy Clients"
  },
  {
    icon: <Star className="w-6 h-6" />,
    value: "4.9/5",
    label: "Client Rating"
  }
]

const faqs = [
  {
    question: "What type of projects do you work on?",
    answer: "I specialize in web applications, mobile apps, AI/ML solutions, and enterprise software. From startups to established businesses, I help clients build scalable, modern solutions."
  },
  {
    question: "What's your typical project timeline?",
    answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 2-6 months. I provide detailed timelines during our initial consultation."
  },
  {
    question: "Do you work with international clients?",
    answer: "Absolutely! I work with clients worldwide and am comfortable collaborating across different time zones. I use modern communication tools to ensure smooth project coordination."
  },
  {
    question: "What's included in your services?",
    answer: "I provide end-to-end development services including planning, design, development, testing, deployment, and ongoing support. I also offer consulting for architecture and technology decisions."
  }
]

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-7xl">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="space-y-20"
      >
        {/* Page Header */}
        <motion.div variants={fadeInUp} className="text-center space-y-4 sm:space-y-6 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Let's Work Together
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'm here to help you build something amazing. 
            Let's discuss your project and explore how we can achieve your goals together.
          </p>
        </motion.div>

        {/* Response Stats */}
        <motion.section variants={staggerContainer} className="space-y-8">
          <motion.h2 
            variants={fadeInUp} 
            className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-foreground"
          >
            Why Work With Me?
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            variants={staggerContainer}
          >
            {responseStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="bg-card/80 border-border hover:border-primary/30 transition-all duration-300 text-center">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 mx-auto bg-primary/20 rounded-full flex items-center justify-center text-primary">
                      {stat.icon}
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Contact Form and Info */}
        <motion.section variants={staggerContainer} className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Contact Form - Takes 2 columns */}
          <motion.div variants={fadeInUp} className="lg:col-span-2 order-2 lg:order-1">
            <ContactForm />
          </motion.div>

          {/* Contact Information - Takes 1 column */}
          <motion.div variants={fadeInUp} className="order-1 lg:order-2">
            <ContactInfo />
          </motion.div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section variants={staggerContainer} className="space-y-8">
          <motion.h2 
            variants={fadeInUp} 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground"
          >
            Frequently Asked Questions
          </motion.h2>
          
          <motion.div 
            className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto"
            variants={staggerContainer}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="bg-card/80 border-border hover:border-primary/30 transition-all duration-300 h-full">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-lg font-semibold text-primary">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          variants={fadeInUp} 
          className="bg-card/30 rounded-2xl p-6 sm:p-8 md:p-12 text-center space-y-6"
        >
          <div className="flex justify-center mb-6">
            <Coffee className="w-12 h-12 sm:w-16 sm:h-16 text-primary" aria-hidden="true" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
            Let's Grab a Virtual Coffee!
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Before we dive into your project, I'd love to have a casual conversation 
            to understand your vision, challenges, and goals. No commitments, just a 
            friendly chat about your ideas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 min-w-[180px]"
            >
              <a href="https://calendly.com/albertnartey" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-4 h-4 mr-2" aria-hidden="true" />
                Schedule a Chat
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 min-w-[180px]">
              <a href="/projects">
                View My Work
              </a>
            </Button>
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}