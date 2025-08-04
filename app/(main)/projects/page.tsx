'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ProjectFilter } from '@/components/features/ProjectFilter'
import { ProjectCard } from '@/components/features/ProjectCard'
import { ProjectModal } from '@/components/features/ProjectModal'
import { projects, categories, getProjectsByCategory, Project } from '@/constants/projects'
import { Search, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
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

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const filteredProjects = getProjectsByCategory(activeCategory).filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <div className="container mx-auto max-w-7xl">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="space-y-12"
      >
        {/* Page Header */}
        <motion.div variants={fadeInUp} className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            My Projects
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of applications, solutions, and innovations that showcase 
            my technical expertise and problem-solving abilities across various domains.
          </p>
        </motion.div>

        {/* Search and Filter Controls */}
        <motion.div variants={fadeInUp} className="space-y-6">
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search projects, technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card border-border focus:border-primary"
            />
          </div>

          {/* Mobile Filter Toggle */}
          <div className="md:hidden flex justify-center">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>

          {/* Category Filters */}
          <AnimatePresence>
            {(showFilters || !isMobile) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ProjectFilter
                  categories={categories}
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory}
                  className="justify-center"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Projects Count */}
        <motion.div variants={fadeInUp} className="text-center">
          <p className="text-muted-foreground">
            Showing {filteredProjects.length} of {projects.length} projects
            {activeCategory !== 'All' && ` in ${activeCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.section variants={staggerContainer} className="space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${searchTerm}`}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={staggerContainer}
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                  category={project.category}
                  featured={project.featured}
                  index={index}
                  onViewDetails={() => handleViewDetails(project)}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="space-y-4">
                <div className="text-6xl">🔍</div>
                <h3 className="text-xl font-semibold text-foreground">No projects found</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Try adjusting your search terms or selecting a different category to find what you're looking for.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm('')
                    setActiveCategory('All')
                  }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </div>
            </motion.div>
          )}
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          variants={fadeInUp} 
          className="bg-card/30 rounded-2xl p-8 md:p-12 text-center space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Interested in Working Together?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I'm always excited to take on new challenges and create innovative solutions. 
            Let's discuss how I can help bring your project to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="/contact">Start a Project</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/about">Learn More About Me</a>
            </Button>
          </div>
        </motion.section>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </motion.div>
    </div>
  )
}