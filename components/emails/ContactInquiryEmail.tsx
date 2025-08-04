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
} from '@react-email/components'

interface ContactInquiryEmailProps {
  name: string
  email: string
  company?: string
  inquiryType: 'recruitment' | 'consulting' | 'speaking' | 'general'
  budget?: string
  subject: string
  message: string
  referenceId: string
  clientIP?: string
  userAgent?: string
  referer?: string
}

export const ContactInquiryEmail = ({
  name,
  email,
  company,
  inquiryType,
  budget,
  subject,
  message,
  referenceId,
  clientIP,
  userAgent,
  referer
}: ContactInquiryEmailProps) => {
  const inquiryTypeLabels = {
    recruitment: '🎯 Recruitment',
    consulting: '💼 Consulting',
    speaking: '🎤 Speaking',
    general: '💬 General'
  }

  const priorityColors = {
    recruitment: '#EF4444', // Red
    consulting: '#F59E0B', // Amber
    speaking: '#3B82F6', // Blue
    general: '#6B7280'  // Gray
  }

  return (
    <Html>
      <Head />
      <Preview>
        New {inquiryTypeLabels[inquiryType]} inquiry from {name} - {subject}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={h1}>Portfolio Inquiry</Heading>
            <Text style={referenceText}>Reference: {referenceId}</Text>
          </Section>

          {/* Priority Badge */}
          <Section style={prioritySection}>
            <div
              style={{
                ...priorityBadge,
                backgroundColor: priorityColors[inquiryType],
              }}
            >
              {inquiryTypeLabels[inquiryType]} Inquiry
            </div>
          </Section>

          {/* Contact Information */}
          <Section style={section}>
            <Heading style={h2}>Contact Information</Heading>
            <Row>
              <Column style={column}>
                <Text style={label}>Name:</Text>
                <Text style={value}>{name}</Text>
              </Column>
              <Column style={column}>
                <Text style={label}>Email:</Text>
                <Link href={`mailto:${email}`} style={link}>
                  {email}
                </Link>
              </Column>
            </Row>
            
            {company && (
              <Row>
                <Column style={column}>
                  <Text style={label}>Company:</Text>
                  <Text style={value}>{company}</Text>
                </Column>
                {budget && (
                  <Column style={column}>
                    <Text style={label}>Budget:</Text>
                    <Text style={value}>{budget}</Text>
                  </Column>
                )}
              </Row>
            )}
          </Section>

          <Hr style={hr} />

          {/* Subject and Message */}
          <Section style={section}>
            <Heading style={h2}>Subject</Heading>
            <Text style={subjectText}>{subject}</Text>
            
            <Heading style={h2}>Message</Heading>
            <Text style={messageText}>{message}</Text>
          </Section>

          <Hr style={hr} />

          {/* Quick Actions */}
          <Section style={section}>
            <Heading style={h2}>Quick Actions</Heading>
            <Row>
              <Column style={column}>
                <Link
                  href={`mailto:${email}?subject=Re: ${subject} (${referenceId})`}
                  style={button}
                >
                  Reply via Email
                </Link>
              </Column>
              <Column style={column}>
                <Link
                  href={`https://cal.com/albertnartey?prefill_email=${email}&prefill_name=${name}`}
                  style={buttonSecondary}
                >
                  Schedule Meeting
                </Link>
              </Column>
            </Row>
          </Section>

          <Hr style={hr} />

          {/* Technical Information */}
          <Section style={technicalSection}>
            <Heading style={h3}>Technical Information</Heading>
            <Text style={technicalText}>
              <strong>Reference ID:</strong> {referenceId}<br />
              <strong>Timestamp:</strong> {new Date().toLocaleString()}<br />
              {clientIP && (
                <>
                  <strong>IP Address:</strong> {clientIP}<br />
                </>
              )}
              {referer && (
                <>
                  <strong>Referrer:</strong> {referer}<br />
                </>
              )}
              {userAgent && (
                <>
                  <strong>User Agent:</strong> {userAgent.substring(0, 100)}...
                </>
              )}
            </Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              This email was automatically generated from the portfolio contact form.
              <br />
              <Link href="https://albertnartey.com" style={link}>
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
  padding: '20px 0 48px',
  marginBottom: '64px',
  maxWidth: '600px',
}

const header = {
  padding: '32px 24px',
  textAlign: 'center' as const,
  backgroundColor: '#1f2937',
  color: '#ffffff',
}

const h1 = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0 0 8px',
  lineHeight: '32px',
}

const referenceText = {
  color: '#d1d5db',
  fontSize: '14px',
  margin: '0',
}

const prioritySection = {
  padding: '16px 24px',
  textAlign: 'center' as const,
}

const priorityBadge = {
  display: 'inline-block',
  padding: '8px 16px',
  borderRadius: '20px',
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: 'bold',
}

const section = {
  padding: '24px',
}

const h2 = {
  color: '#1f2937',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 16px',
}

const h3 = {
  color: '#374151',
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '0 0 12px',
}

const column = {
  width: '50%',
  paddingRight: '12px',
}

const label = {
  color: '#6b7280',
  fontSize: '14px',
  fontWeight: 'bold',
  margin: '0 0 4px',
}

const value = {
  color: '#1f2937',
  fontSize: '16px',
  margin: '0 0 16px',
}

const link = {
  color: '#3b82f6',
  textDecoration: 'underline',
}

const subjectText = {
  color: '#1f2937',
  fontSize: '18px',
  fontWeight: '600',
  margin: '0 0 24px',
  padding: '16px',
  backgroundColor: '#f9fafb',
  borderRadius: '8px',
  borderLeft: '4px solid #3b82f6',
}

const messageText = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0',
  padding: '20px',
  backgroundColor: '#f9fafb',
  borderRadius: '8px',
  whiteSpace: 'pre-wrap' as const,
}

const button = {
  backgroundColor: '#3b82f6',
  borderRadius: '6px',
  color: '#ffffff',
  display: 'inline-block',
  fontSize: '16px',
  fontWeight: 'bold',
  padding: '12px 24px',
  textAlign: 'center' as const,
  textDecoration: 'none',
  width: '100%',
  boxSizing: 'border-box' as const,
}

const buttonSecondary = {
  backgroundColor: '#f3f4f6',
  borderRadius: '6px',
  color: '#374151',
  display: 'inline-block',
  fontSize: '16px',
  fontWeight: 'bold',
  padding: '12px 24px',
  textAlign: 'center' as const,
  textDecoration: 'none',
  width: '100%',
  boxSizing: 'border-box' as const,
  border: '1px solid #d1d5db',
}

const hr = {
  borderColor: '#e5e7eb',
  margin: '20px 0',
}

const technicalSection = {
  padding: '16px 24px',
  backgroundColor: '#f9fafb',
}

const technicalText = {
  color: '#6b7280',
  fontSize: '12px',
  lineHeight: '16px',
  margin: '0',
}

const footer = {
  padding: '24px',
  textAlign: 'center' as const,
  backgroundColor: '#f9fafb',
}

const footerText = {
  color: '#6b7280',
  fontSize: '14px',
  margin: '0',
}

export default ContactInquiryEmail