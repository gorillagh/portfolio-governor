'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Globe, 
  Linkedin, 
  Github, 
  Twitter,
  Calendar,
  MessageCircle
} from 'lucide-react'

const contactDetails = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "albert.nartey@email.com",
    href: "mailto:albert.nartey@email.com",
    description: "Best way to reach me"
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+233 (0) 123 456 789",
    href: "tel:+233123456789",
    description: "Available during business hours"
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "Accra, Ghana",
    href: "https://maps.google.com/?q=Accra,Ghana",
    description: "GMT+0 timezone"
  },
  {
    icon: <Clock className="w-5 h-5" />,
    label: "Availability",
    value: "Mon - Fri, 9AM - 6PM",
    description: "Generally respond within 24 hours"
  }
]

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://linkedin.com/in/albertnartey",
    color: "hover:text-blue-400"
  },
  {
    name: "GitHub",
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/albertnartey",
    color: "hover:text-gray-400"
  },
  {
    name: "Twitter",
    icon: <Twitter className="w-5 h-5" />,
    href: "https://twitter.com/albertnartey",
    color: "hover:text-blue-400"
  }
]

const quickActions = [
  {
    title: "Schedule a Call",
    description: "Book a 30-minute consultation",
    icon: <Calendar className="w-5 h-5" />,
    href: "https://calendly.com/albertnartey",
    color: "bg-blue-500"
  },
  {
    title: "WhatsApp Chat",
    description: "Quick message on WhatsApp",
    icon: <MessageCircle className="w-5 h-5" />,
    href: "https://wa.me/233123456789",
    color: "bg-green-500"
  }
]

export function ContactInfo() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  }

  return (
    <div className="space-y-6">
      {/* Main Contact Info */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Card className="bg-card/80 border-border">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
              <Globe className="w-6 h-6" />
              Get in Touch
            </CardTitle>
            <p className="text-muted-foreground">
              I'm always excited to discuss new opportunities and interesting projects.
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {contactDetails.map((detail, index) => (
              <motion.div
                key={detail.label}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {detail.icon}
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="font-semibold text-foreground">{detail.label}</h3>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      target={detail.href.startsWith('http') ? '_blank' : undefined}
                      rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium">{detail.value}</p>
                  )}
                  <p className="text-sm text-muted-foreground">{detail.description}</p>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <Card className="bg-card/80 border-border">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground">
              Quick Actions
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full justify-start h-auto p-4 hover:border-primary/50"
                >
                  <a href={action.href} target="_blank" rel="noopener noreferrer">
                    <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center text-white mr-4`}>
                      {action.icon}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-foreground">{action.title}</div>
                      <div className="text-sm text-muted-foreground">{action.description}</div>
                    </div>
                  </a>
                </Button>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      {/* Social Links */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <Card className="bg-card/80 border-border">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground">
              Connect with Me
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-muted hover:bg-primary border border-border hover:border-primary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary-foreground transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (index * 0.1) }}
                  aria-label={`Connect on ${social.name}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Follow me for updates on my latest projects and tech thoughts.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}