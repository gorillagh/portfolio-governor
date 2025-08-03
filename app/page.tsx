import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
          Albert Nartey
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Software Architect & AI Consultant
        </p>
        <p className="text-lg text-foreground mb-12 max-w-2xl mx-auto">
          Experienced software architect specializing in React, Next.js, and AI/ML solutions. 
          Delivering scalable, high-performance applications that drive business growth.
        </p>
        
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card 1 */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-primary">E-Commerce Platform</CardTitle>
              <CardDescription>
                Full-stack Next.js application with real-time inventory management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">Next.js</span>
                <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">TypeScript</span>
                <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">Stripe</span>
              </div>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </CardContent>
          </Card>

          {/* Project Card 2 */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-primary">AI Analytics Dashboard</CardTitle>
              <CardDescription>
                Machine learning-powered analytics platform with predictive insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">Python</span>
                <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">TensorFlow</span>
                <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">React</span>
              </div>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </CardContent>
          </Card>

          {/* Project Card 3 */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-primary">Mobile Banking App</CardTitle>
              <CardDescription>
                Secure Flutter application with biometric authentication
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">Flutter</span>
                <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">Firebase</span>
                <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">Dart</span>
              </div>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-card/50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your next project and how I can help you achieve your goals.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">Start a Project</Link>
          </Button>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Albert Nartey. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}