'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Send, CheckCircle, AlertCircle, Loader2, Building, DollarSign } from 'lucide-react'
import { useContactForm, useAnalytics } from '@/lib/hooks/useFirebaseData'

// Enhanced form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  company: z.string().max(100).optional(),
  inquiryType: z.enum(['recruitment', 'consulting', 'speaking', 'general']),
  budget: z.enum(['$500-1000', '$1000-2000', '$2000-5000', '$5000+']).optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200),
  message: z.string().min(20, 'Message must be at least 20 characters').max(2000),
  honeypot: z.string().max(0) // Anti-spam field
})

type ContactFormData = z.infer<typeof contactFormSchema>

const inquiryTypeOptions = [
  { value: 'recruitment', label: '🎯 Job Opportunity', description: 'Hiring for a role' },
  { value: 'consulting', label: '💼 Consulting Project', description: 'Need technical expertise' },
  { value: 'speaking', label: '🎤 Speaking Event', description: 'Conference or workshop' },
  { value: 'general', label: '💬 General Inquiry', description: 'Other questions' }
]

const budgetOptions = [
  { value: '$500-1000', label: '$500 - $1,000' },
  { value: '$1000-2000', label: '$1,000 - $2,000' },
  { value: '$2000-5000', label: '$2,000 - $5,000' },
  { value: '$5000+', label: '$5,000+' }
]

export function ContactForm() {
  const [showBudgetField, setShowBudgetField] = useState(false)
  const { submitForm, loading, error, success, resetForm } = useContactForm()
  const { trackEvent } = useAnalytics()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    reset,
    setValue
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      inquiryType: 'general',
      budget: undefined,
      subject: '',
      message: '',
      honeypot: ''
    },
    mode: 'onChange'
  })

  const inquiryType = watch('inquiryType')

  // Show budget field for consulting inquiries
  useEffect(() => {
    setShowBudgetField(inquiryType === 'consulting')
  }, [inquiryType])

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Track form start
      trackEvent('contact_form_start', 'engagement', {
        inquiry_type: data.inquiryType,
        has_company: !!data.company,
        has_budget: !!data.budget
      })

      const result = await submitForm(data)

      if (result.success) {
        // Track successful submission
        trackEvent('contact_form_success', 'conversion', {
          inquiry_type: data.inquiryType,
          reference_id: result.referenceId
        })
        
        // Reset form
        reset()
        resetForm()
      } else {
        // Track form error
        trackEvent('contact_form_error', 'engagement', {
          inquiry_type: data.inquiryType,
          error_type: 'submission_failed'
        })
      }
    } catch (err) {
      console.error('Form submission error:', err)
    }
  }

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const fieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  }

  return (
    <motion.div
      variants={formVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Card className="bg-card/80 border-border">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
            <Send className="w-6 h-6" />
            Send Me a Message
          </CardTitle>
          <p className="text-muted-foreground">
            Ready to start a project or just want to chat? I'd love to hear from you.
          </p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Hidden honeypot field for spam protection */}
            <input
              {...register('honeypot')}
              type="text"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Name and Email Row */}
            <div className="grid md:grid-cols-2 gap-4">
              <motion.div variants={fieldVariants} className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name *
                </label>
                <Input
                  {...register('name')}
                  id="name"
                  type="text"
                  className={`bg-background border-border focus:border-primary ${
                    errors.name ? 'border-red-500 focus:border-red-500' : ''
                  }`}
                  placeholder="Your full name"
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                <AnimatePresence mode="wait">
                  {errors.name && (
                    <motion.p
                      id="name-error"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-red-500 text-sm flex items-center gap-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {errors.name.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div variants={fieldVariants} className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email *
                </label>
                <Input
                  {...register('email')}
                  id="email"
                  type="email"
                  className={`bg-background border-border focus:border-primary ${
                    errors.email ? 'border-red-500 focus:border-red-500' : ''
                  }`}
                  placeholder="your.email@example.com"
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                <AnimatePresence mode="wait">
                  {errors.email && (
                    <motion.p
                      id="email-error"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-red-500 text-sm flex items-center gap-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {errors.email.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Company and Inquiry Type Row */}
            <div className="grid md:grid-cols-2 gap-4">
              <motion.div variants={fieldVariants} className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  Company (Optional)
                </label>
                <Input
                  {...register('company')}
                  id="company"
                  type="text"
                  className="bg-background border-border focus:border-primary"
                  placeholder="Your company name"
                />
              </motion.div>

              <motion.div variants={fieldVariants} className="space-y-2">
                <label htmlFor="inquiryType" className="text-sm font-medium text-foreground">
                  What brings you here? *
                </label>
                <select
                  {...register('inquiryType')}
                  id="inquiryType"
                  className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {inquiryTypeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-muted-foreground">
                  {inquiryTypeOptions.find(opt => opt.value === inquiryType)?.description}
                </p>
              </motion.div>
            </div>

            {/* Budget Field (shown for consulting) */}
            <AnimatePresence>
              {showBudgetField && (
                <motion.div 
                  variants={fieldVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="space-y-2"
                >
                  <label htmlFor="budget" className="text-sm font-medium text-foreground flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Project Budget (Optional)
                  </label>
                  <select
                    {...register('budget')}
                    id="budget"
                    className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select budget range</option>
                    {budgetOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <p className="text-xs text-muted-foreground">
                    This helps me understand the project scope and provide better recommendations.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Subject */}
            <motion.div variants={fieldVariants} className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-foreground">
                Subject *
              </label>
              <Input
                {...register('subject')}
                id="subject"
                type="text"
                className={`bg-background border-border focus:border-primary ${
                  errors.subject ? 'border-red-500 focus:border-red-500' : ''
                }`}
                placeholder="What's this about?"
                aria-describedby={errors.subject ? 'subject-error' : undefined}
              />
              <AnimatePresence mode="wait">
                {errors.subject && (
                  <motion.p
                    id="subject-error"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-red-500 text-sm flex items-center gap-1"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {errors.subject.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Message */}
            <motion.div variants={fieldVariants} className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message *
              </label>
              <textarea
                {...register('message')}
                id="message"
                rows={6}
                className={`flex w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none border-border focus:border-primary ${
                  errors.message ? 'border-red-500 focus:border-red-500' : ''
                }`}
                placeholder="Tell me about your project, ideas, or just say hello..."
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              <div className="flex justify-between items-center">
                <AnimatePresence mode="wait">
                  {errors.message && (
                    <motion.p
                      id="message-error"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-red-500 text-sm flex items-center gap-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {errors.message.message}
                    </motion.p>
                  )}
                </AnimatePresence>
                <p className="text-xs text-muted-foreground">
                  {watch('message')?.length || 0}/2000 characters
                </p>
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={fieldVariants}>
              <Button
                type="submit"
                size="lg"
                disabled={loading || !isValid}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 h-12 min-h-[44px] touch-manipulation"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" aria-hidden="true" />
                    Send Message
                  </>
                )}
              </Button>
            </motion.div>

            {/* Status Messages */}
            <AnimatePresence mode="wait">
              {success && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-4 rounded-lg flex items-center gap-3 bg-green-500/20 text-green-400 border border-green-500/30"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">{success.message}</p>
                    <p className="text-xs text-green-300 mt-1">
                      Reference: {success.referenceId}
                    </p>
                  </div>
                </motion.div>
              )}
              
              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-4 rounded-lg flex items-center gap-3 bg-red-500/20 text-red-400 border border-red-500/30"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm">{error}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}