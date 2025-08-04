'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  SortAsc, 
  SortDesc,
  Loader2,
  AlertCircle,
  RefreshCw
} from 'lucide-react'
import { EnhancedProjectCard } from './ProjectCard.enhanced'
import { useProjects, useProjectsByCategory } from '@/lib/hooks/useFirebaseData'
import { FirebaseProject } from '@/lib/firebase/collections'
import { usePortfolioAnalytics } from '@/components/analytics/AnalyticsProvider'

interface ProjectGridProps {
  initialCategory?: string
  showFeaturedOnly?: boolean
  maxProjects?: number
  layout?: 'grid' | 'list'
  showSearch?: boolean
  showFilters?: boolean
  className?: string
}

type SortOption = 'newest' | 'oldest' | 'most-viewed' | 'most-liked' | 'alphabetical'
type ViewMode = 'grid' | 'list'

export function EnhancedProjectGrid({
  initialCategory = 'All',
  showFeaturedOnly = false,
  maxProjects,
  layout = 'grid',
  showSearch = true,
  showFilters = true,
  className = ''
}: ProjectGridProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<SortOption>('newest')
  const [viewMode, setViewMode] = useState<ViewMode>(layout)
  const [showFilterMenu, setShowFilterMenu] = useState(false)

  const { trackEvent } = usePortfolioAnalytics()

  // Fetch projects based on category
  const { data: allProjects, loading, error, refetch } = selectedCategory === 'All' 
    ? useProjects()
    : useProjectsByCategory(selectedCategory)

  // Filter and sort projects
  const filteredAndSortedProjects = useMemo(() => {
    if (!allProjects) return []

    let filtered = [...allProjects]

    // Apply featured filter
    if (showFeaturedOnly) {
      filtered = filtered.filter(project => project.featured)
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some(tech => tech.toLowerCase().includes(query)) ||
        project.category.toLowerCase().includes(query)
      )
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return b.createdAt.toMillis() - a.createdAt.toMillis()
        case 'oldest':
          return a.createdAt.toMillis() - b.createdAt.toMillis()
        case 'most-viewed':
          return b.viewCount - a.viewCount
        case 'most-liked':
          return b.likes - a.likes
        case 'alphabetical':
          return a.title.localeCompare(b.title)
        default:
          return b.createdAt.toMillis() - a.createdAt.toMillis()
      }
    })

    // Apply limit
    if (maxProjects) {
      filtered = filtered.slice(0, maxProjects)
    }

    return filtered
  }, [allProjects, showFeaturedOnly, searchQuery, sortBy, maxProjects])

  // Get unique categories
  const categories = useMemo(() => {
    if (!allProjects) return ['All']
    const uniqueCategories = [...new Set(allProjects.map(p => p.category))]
    return ['All', ...uniqueCategories]
  }, [allProjects])

  // Track interactions
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    trackEvent('filter_projects', 'engagement', {
      filter_type: 'category',
      filter_value: category
    })
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    trackEvent('search_projects', 'engagement', {
      search_query: query,
      results_count: filteredAndSortedProjects.length
    })
  }

  const handleSortChange = (sort: SortOption) => {
    setSortBy(sort)
    trackEvent('sort_projects', 'engagement', {
      sort_type: sort
    })
  }

  const handleViewModeChange = (mode: ViewMode) => {
    setViewMode(mode)
    trackEvent('change_view_mode', 'engagement', {
      view_mode: mode
    })
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading projects...</p>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="text-center">
          <AlertCircle className="w-8 h-8 text-red-400 mx-auto mb-4" />
          <p className="text-muted-foreground mb-4">Failed to load projects</p>
          <Button onClick={() => refetch()} variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Search and Filters */}
      {(showSearch || showFilters) && (
        <div className="space-y-4">
          {/* Search Bar */}
          {showSearch && (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search projects by name, technology, or category..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 bg-background border-border focus:border-primary"
              />
            </div>
          )}

          {/* Filters and Controls */}
          {showFilters && (
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handleCategoryChange(category)}
                    className="text-xs"
                  >
                    {category}
                    {category !== 'All' && allProjects && (
                      <Badge variant="secondary" className="ml-2 text-xs">
                        {allProjects.filter(p => p.category === category).length}
                      </Badge>
                    )}
                  </Button>
                ))}
              </div>

              {/* View Controls */}
              <div className="flex items-center gap-2">
                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value as SortOption)}
                  className="text-sm bg-background border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="most-viewed">Most Viewed</option>
                  <option value="most-liked">Most Liked</option>
                  <option value="alphabetical">A-Z</option>
                </select>

                {/* View Mode Toggle */}
                <div className="flex items-center border border-border rounded-md">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => handleViewModeChange('grid')}
                    className="rounded-r-none"
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => handleViewModeChange('list')}
                    className="rounded-l-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Results Summary */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <p>
              Showing {filteredAndSortedProjects.length} of {allProjects?.length || 0} projects
              {searchQuery && ` for "${searchQuery}"`}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
            
            {showFeaturedOnly && (
              <Badge variant="secondary">Featured Only</Badge>
            )}
          </div>
        </div>
      )}

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        {filteredAndSortedProjects.length > 0 ? (
          <motion.div
            key={`${selectedCategory}-${sortBy}-${viewMode}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'space-y-4'
            }
          >
            {filteredAndSortedProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <EnhancedProjectCard
                  project={project}
                  variant={viewMode === 'list' ? 'compact' : 'default'}
                  showStats={true}
                  onLike={async (projectId) => {
                    // This would typically call an API to update likes
                    console.log('Like project:', projectId)
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground mb-4">
              {searchQuery
                ? `No projects match "${searchQuery}"`
                : `No projects in ${selectedCategory}`}
            </p>
            {(searchQuery || selectedCategory !== 'All') && (
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('All')
                }}
              >
                Clear Filters
              </Button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default EnhancedProjectGrid