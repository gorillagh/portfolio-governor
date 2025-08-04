import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Hr,
  Row,
  Column,
  Img,
} from '@react-email/components'

interface AutoResponseEmailProps {
  name: string
  inquiryType: 'recruitment' | 'consulting' | 'speaking' | 'general'
  referenceId: string
  subject: string
}

export const AutoResponseEmail = ({
  name,
  inquiryType,
  referenceId,
  subject
}: AutoResponseEmailProps) => {
  const inquiryTypeInfo = {
    recruitment: {
      emoji: '🎯',
      title: 'Recruitment Opportunity',
      message: "Thank you for considering me for this role! I review all recruitment opportunities carefully and will respond within 24-48 hours with my availability and interest level.",
      nextSteps: [
        "I'll review the role requirements and company information",
        "If there's mutual interest, I'll schedule a brief intro call",
        "We can discuss timeline, compensation, and next steps"
      ],
      resources: [
        {
          title: 'Download My Resume',
          url: 'https://albertnartey.com/resume.pdf',
          description: 'Latest resume with technical skills and experience'
        },
        {
          title: 'View My Projects',
          url: 'https://albertnartey.com/projects',
          description: 'Portfolio of recent work and case studies'
        }
      ]
    },
    consulting: {
      emoji: '💼',
      title: 'Consulting Request',
      message: "Thank you for your interest in my consulting services! I help businesses leverage technology to solve complex problems and accelerate growth.",
      nextSteps: [
        "I'll review your project requirements and scope",
        "We'll schedule a discovery call to discuss your needs",
        "I'll provide a detailed proposal with timeline and pricing"
      ],
      resources: [
        {
          title: 'Consulting Services',
          url: 'https://albertnartey.com/services',
          description: 'Overview of my consulting offerings and approach'
        },
        {
          title: 'Schedule a Call',
          url: 'https://cal.com/albertnartey',
          description: 'Book a free 30-minute discovery call'
        }
      ]
    },
    speaking: {
      emoji: '🎤',
      title: 'Speaking Opportunity',
      message: "Thank you for considering me for your event! I'm passionate about sharing knowledge on software architecture, AI/ML, and developer productivity.",
      nextSteps: [
        "I'll review your event details and audience",
        "We'll discuss potential topics and format",
        "I'll confirm availability and provide speaker materials"
      ],
      resources: [
        {
          title: 'Speaker Topics',
          url: 'https://albertnartey.com/speaking',
          description: 'Available topics and past speaking engagements'
        },
        {
          title: 'Speaker Kit',
          url: 'https://albertnartey.com/speaker-kit',
          description: 'Bio, photos, and presentation materials'
        }
      ]
    },
    general: {
      emoji: '💬',
      title: 'General Inquiry',
      message: "Thank you for reaching out! I appreciate your interest and will respond to your inquiry as soon as possible.",
      nextSteps: [
        "I'll review your message and any specific questions",
        "I'll provide a detailed response within 24-48 hours",
        "We can schedule a call if further discussion is needed"
      ],
      resources: [
        {
          title: 'About Me',
          url: 'https://albertnartey.com/about',
          description: 'Learn more about my background and expertise'
        },
        {
          title: 'Blog & Articles',
          url: 'https://albertnartey.com/blog',
          description: 'Technical articles and industry insights'
        }
      ]
    }
  }

  const info = inquiryTypeInfo[inquiryType]

  return (
    <Html>
      <Head />
      <Preview>
        Thank you for reaching out, {name}! I'll get back to you soon.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Row>
              <Column style={logoColumn}>
                <Text style={logo}>AN</Text>
              </Column>
              <Column style={headerContent}>
                <Heading style={h1}>Thank you for reaching out!</Heading>
                <Text style={subtitle}>
                  {info.emoji} {info.title} • Ref: {referenceId}
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Personal Greeting */}
          <Section style={section}>
            <Text style={greeting}>Hi {name},</Text>
            <Text style={messageText}>{info.message}</Text>
            
            <Text style={messageText}>
              I've received your inquiry about "{subject}" and wanted to send you this quick 
              confirmation along with some helpful information while you wait for my detailed response.
            </Text>
          </Section>

          <Hr style={hr} />

          {/* What Happens Next */}
          <Section style={section}>
            <Heading style={h2}>What happens next?</Heading>
            <div style={stepsList}>
              {info.nextSteps.map((step, index) => (
                <div key={index} style={stepItem}>
                  <Text style={stepNumber}>{index + 1}</Text>
                  <Text style={stepText}>{step}</Text>
                </div>
              ))}
            </div>
          </Section>

          <Hr style={hr} />

          {/* Helpful Resources */}
          <Section style={section}>
            <Heading style={h2}>In the meantime...</Heading>
            <Text style={resourcesIntro}>
              Here are some resources that might be helpful while you wait:
            </Text>
            
            <Row>
              {info.resources.map((resource, index) => (
                <Column key={index} style={resourceColumn}>
                  <div style={resourceCard}>
                    <Heading style={resourceTitle}>
                      <Link href={resource.url} style={resourceLink}>
                        {resource.title}
                      </Link>
                    </Heading>
                    <Text style={resourceDescription}>{resource.description}</Text>
                  </div>
                </Column>
              ))}
            </Row>
          </Section>

          <Hr style={hr} />

          {/* Response Timeline */}
          <Section style={responseSection}>
            <div style={responseBox}>
              <Text style={responseTitle}>⏰ Expected Response Time</Text>
              <Text style={responseTime}>
                {inquiryType === 'recruitment' || inquiryType === 'consulting' 
                  ? '24-48 hours' 
                  : '24 hours'}
              </Text>
              <Text style={responseNote}>
                I personally review and respond to every inquiry. You'll hear from me soon!
              </Text>
            </div>
          </Section>

          {/* Contact Information */}
          <Section style={section}>
            <Heading style={h2}>Need immediate assistance?</Heading>
            <Text style={contactText}>
              If your inquiry is urgent, you can reach me directly:
            </Text>
            <div style={contactInfo}>
              <Text style={contactItem}>
                📧 <Link href="mailto:albert@albertnartey.com" style={link}>
                  albert@albertnartey.com
                </Link>
              </Text>
              <Text style={contactItem}>
                🔗 <Link href="https://linkedin.com/in/albertnartey" style={link}>
                  LinkedIn: /in/albertnartey
                </Link>
              </Text>
              <Text style={contactItem}>
                📅 <Link href="https://cal.com/albertnartey" style={link}>
                  Schedule a call: cal.com/albertnartey
                </Link>
              </Text>
            </div>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Best regards,<br />
              <strong>Albert Nartey</strong><br />
              Software Architect & AI Consultant
            </Text>
            <Hr style={footerHr} />
            <Text style={footerSmall}>
              This is an automated response to confirm receipt of your inquiry.<br />
              Reference ID: {referenceId} • <Link href="https://albertnartey.com" style={link}>
                albertnartey.com
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  marginBottom: '64px',
  maxWidth: '600px',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
}

const header = {
  backgroundColor: '#1f2937',
  padding: '32px 24px',
}

const logoColumn = {
  width: '80px',
  verticalAlign: 'middle',
}

const logo = {
  backgroundColor: '#3b82f6',
  borderRadius: '50%',
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: 'bold',
  height: '60px',
  lineHeight: '60px',
  margin: '0',
  textAlign: 'center' as const,
  width: '60px',
}

const headerContent = {
  verticalAlign: 'middle',
  paddingLeft: '16px',
}

const h1 = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: 'bold',
  lineHeight: '32px',
  margin: '0 0 8px',
}

const subtitle = {
  color: '#d1d5db',
  fontSize: '14px',
  margin: '0',
}

const section = {
  padding: '24px',
}

const greeting = {
  color: '#1f2937',
  fontSize: '18px',
  fontWeight: '600',
  margin: '0 0 16px',
}

const messageText = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 16px',
}

const h2 = {
  color: '#1f2937',
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '0 0 16px',
}

const stepsList = {
  margin: '0',
}

const stepItem = {
  alignItems: 'flex-start',
  display: 'flex',
  marginBottom: '12px',
}

const stepNumber = {
  backgroundColor: '#3b82f6',
  borderRadius: '50%',
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: 'bold',
  height: '24px',
  lineHeight: '24px',
  margin: '0 12px 0 0',
  minWidth: '24px',
  textAlign: 'center' as const,
}

const stepText = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0',
}

const resourcesIntro = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 20px',
}

const resourceColumn = {
  width: '50%',
  paddingRight: '12px',
  marginBottom: '16px',
}

const resourceCard = {
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  padding: '16px',
  backgroundColor: '#f9fafb',
}

const resourceTitle = {
  color: '#1f2937',
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '0 0 8px',
}

const resourceLink = {
  color: '#3b82f6',
  textDecoration: 'none',
}

const resourceDescription = {
  color: '#6b7280',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '0',
}

const responseSection = {
  padding: '24px',
  backgroundColor: '#f0f9ff',
}

const responseBox = {
  textAlign: 'center' as const,
}

const responseTitle = {
  color: '#1e40af',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 8px',
}

const responseTime = {
  color: '#1f2937',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0 0 12px',
}

const responseNote = {
  color: '#374151',
  fontSize: '16px',
  margin: '0',
}

const contactText = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 16px',
}

const contactInfo = {
  backgroundColor: '#f9fafb',
  borderRadius: '8px',
  padding: '16px',
}

const contactItem = {
  color: '#374151',
  fontSize: '16px',
  margin: '0 0 8px',
}

const link = {
  color: '#3b82f6',
  textDecoration: 'underline',
}

const hr = {
  borderColor: '#e5e7eb',
  margin: '0',
}

const footer = {
  padding: '24px',
  textAlign: 'center' as const,
}

const footerText = {
  color: '#1f2937',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 16px',
}

const footerHr = {
  borderColor: '#e5e7eb',
  margin: '16px 0',
}

const footerSmall = {
  color: '#6b7280',
  fontSize: '14px',
  margin: '0',
}

export default AutoResponseEmail