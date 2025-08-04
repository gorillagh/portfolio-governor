'use client';

// Header Component for Albert Nartey Portfolio
// Phase 1: Responsive Header with Breadcrumbs and Mobile Toggle

import { motion } from 'framer-motion';
import { Menu, X, ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useLayout } from '@/contexts/LayoutContext';
import { Button } from '@/components/ui/button';
import { NAVIGATION_ITEMS } from '@/constants/layout';
import { BreadcrumbItem } from '@/types';

interface HeaderProps {
  title?: string;
  breadcrumbs?: BreadcrumbItem[];
  className?: string;
}

// Helper function to generate breadcrumbs from pathname
function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/', isActive: pathname === '/' },
  ];

  if (segments.length === 0) {
    return breadcrumbs;
  }

  let currentPath = '';

  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isActive = index === segments.length - 1;

    // Find the navigation item for this segment
    const navItem = NAVIGATION_ITEMS.find(item => item.href === currentPath);

    breadcrumbs.push({
      label:
        navItem?.label || segment.charAt(0).toUpperCase() + segment.slice(1),
      href: isActive ? undefined : currentPath,
      isActive,
    });
  });

  return breadcrumbs;
}

export function Header({ title, breadcrumbs, className }: HeaderProps) {
  const { isSidebarOpen, toggleSidebar, isMobile, isTablet } = useLayout();
  const pathname = usePathname();

  // Use provided breadcrumbs or generate from pathname
  const currentBreadcrumbs = breadcrumbs || generateBreadcrumbs(pathname);

  // Get page title from navigation or use provided title
  const pageTitle =
    title ||
    NAVIGATION_ITEMS.find(item => item.href === pathname)?.label ||
    'Portfolio';

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={cn(
        'bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-30 backdrop-blur',
        'border-border border-b',
        className
      )}
    >
      <div className="flex items-center justify-between px-4 py-4 lg:px-6">
        {/* Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          {(isMobile || isTablet) && (
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleSidebar}
              data-sidebar-toggle
              className="hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label={
                isSidebarOpen ? 'Close navigation menu' : 'Open navigation menu'
              }
              aria-expanded={isSidebarOpen}
              aria-controls="sidebar-navigation"
            >
              <motion.div
                animate={{ rotate: isSidebarOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isSidebarOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </motion.div>
            </Button>
          )}

          {/* Page Title - Mobile */}
          <div className="lg:hidden">
            <h1 className="font-heading text-foreground text-lg font-semibold">
              {pageTitle}
            </h1>
          </div>

          {/* Breadcrumbs - Desktop */}
          <nav
            className="hidden items-center space-x-2 text-sm lg:flex"
            aria-label="Breadcrumb"
          >
            <ol className="flex items-center space-x-2">
              {currentBreadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && (
                    <ChevronRight
                      className="text-muted-foreground mx-2 h-4 w-4"
                      aria-hidden="true"
                    />
                  )}

                  {crumb.isActive ? (
                    <span
                      className="text-foreground flex items-center font-medium"
                      aria-current="page"
                    >
                      {index === 0 && <Home className="mr-1 h-4 w-4" />}
                      {crumb.label}
                    </span>
                  ) : (
                    <Link
                      href={crumb.href || '/'}
                      className="text-muted-foreground hover:text-primary flex items-center transition-colors hover:underline"
                    >
                      {index === 0 && <Home className="mr-1 h-4 w-4" />}
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>

        {/* Page Actions / Additional Controls */}
        <div className="flex items-center space-x-2">
          {/* Theme Toggle Placeholder - Future Enhancement */}
          <div className="flex items-center space-x-2">
            {/* Add theme toggle, search, or other actions here in future phases */}
            <div className="text-muted-foreground hidden text-xs sm:block">
              {new Date().toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
