'use client';

// Sidebar Component for Albert Nartey Portfolio
// Phase 1: Responsive Navigation with Profile and Social Links

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  Home,
  User,
  FolderOpen,
  Code,
  Mail,
  Linkedin,
  Github,
  Twitter,
  ExternalLink,
  MapPin,
  Calendar,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLayout } from '@/contexts/LayoutContext';
import {
  NAVIGATION_ITEMS,
  SOCIAL_LINKS,
  PROFILE_INFO,
  SIDEBAR_MOTION_CONFIG,
} from '@/constants/layout';
import { Button } from '@/components/ui/button';

// Icon mapping for dynamic icons
const iconMap = {
  Home,
  User,
  FolderOpen,
  Code,
  Mail,
  Linkedin,
  Github,
  Twitter,
  ExternalLink,
};

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const { isSidebarOpen, closeSidebar, isMobile, isTablet } = useLayout();
  const pathname = usePathname();

  // Show overlay on mobile and tablet
  const showOverlay = (isMobile || isTablet) && isSidebarOpen;

  return (
    <>
      {/* Overlay for mobile/tablet */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            key="sidebar-overlay"
            initial={SIDEBAR_MOTION_CONFIG.overlay.initial}
            animate={SIDEBAR_MOTION_CONFIG.overlay.animate}
            exit={SIDEBAR_MOTION_CONFIG.overlay.exit}
            transition={SIDEBAR_MOTION_CONFIG.overlay.transition}
            className="bg-background/80 fixed inset-0 z-30 backdrop-blur-sm lg:hidden"
            onClick={closeSidebar}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence mode="wait">
        {(isSidebarOpen || (!isMobile && !isTablet)) && (
          <motion.aside
            key="sidebar"
            data-sidebar
            initial={
              isMobile || isTablet
                ? SIDEBAR_MOTION_CONFIG.sidebar.initial
                : { x: 0 }
            }
            animate={SIDEBAR_MOTION_CONFIG.sidebar.animate}
            exit={
              isMobile || isTablet
                ? SIDEBAR_MOTION_CONFIG.sidebar.exit
                : undefined
            }
            transition={SIDEBAR_MOTION_CONFIG.sidebar.transition}
            className={cn(
              'bg-card border-border fixed top-0 left-0 z-40 h-screen w-80 border-r',
              'flex flex-col overflow-y-auto',
              'lg:relative lg:z-auto',
              className
            )}
            role="navigation"
            aria-label="Main navigation"
          >
            {/* Profile Section */}
            <div className="border-border/50 border-b p-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                {/* Profile Image */}
                <div className="ring-primary/20 relative h-30 w-30 overflow-hidden rounded-full ring-2">
                  <Image
                    src={PROFILE_INFO.avatar}
                    alt={PROFILE_INFO.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Profile Info */}
                <div className="space-y-2">
                  <h2 className="font-heading text-foreground text-lg font-semibold">
                    {PROFILE_INFO.name}
                  </h2>
                  <p className="text-primary text-sm font-medium">
                    {PROFILE_INFO.title}
                  </p>
                  {/* <p className="text-muted-foreground text-xs leading-relaxed">
                    {PROFILE_INFO.bio}
                  </p> */}
                </div>

                {/* Location & Status */}
                {/* <div className="text-muted-foreground flex flex-col items-center space-y-1 text-xs">
                  {PROFILE_INFO.location && (
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{PROFILE_INFO.location}</span>
                    </div>
                  )}
                  {PROFILE_INFO.availability && (
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span className="text-green-400">
                        {PROFILE_INFO.availability}
                      </span>
                    </div>
                  )}
                </div> */}
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 p-4" role="navigation">
              <ul className="space-y-2" role="menubar">
                {NAVIGATION_ITEMS.map((item, index) => {
                  const Icon = iconMap[item.icon as keyof typeof iconMap];
                  const isActive = pathname === item.href;

                  return (
                    <motion.li
                      key={item.id}
                      initial={SIDEBAR_MOTION_CONFIG.menuItems.initial}
                      animate={SIDEBAR_MOTION_CONFIG.menuItems.animate}
                      transition={{
                        ...SIDEBAR_MOTION_CONFIG.menuItems.transition,
                        delay: index * 0.1,
                      }}
                      role="none"
                    >
                      <Link
                        href={item.href}
                        onClick={() => {
                          if (isMobile || isTablet) {
                            closeSidebar();
                          }
                        }}
                        className={cn(
                          'flex items-center space-x-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200',
                          'hover:bg-primary/10 hover:text-primary focus:ring-primary/20 focus:ring-2 focus:outline-none',
                          isActive
                            ? 'bg-primary/15 text-primary border-primary border-l-2'
                            : 'text-foreground/80 hover:text-foreground'
                        )}
                        role="menuitem"
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <Icon
                          className="h-5 w-5 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <div className="min-w-0 flex-1">
                          <div className="font-medium">{item.label}</div>
                          {/* {item.description && (
                            <div className="text-muted-foreground mt-0.5 text-xs">
                              {item.description}
                            </div>
                          )} */}
                        </div>
                        {isActive && (
                          <div
                            className="bg-primary h-2 w-2 flex-shrink-0 rounded-full"
                            aria-hidden="true"
                          />
                        )}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            {/* Social Links */}
            <div className="border-border/50 border-t p-4">
              <h3 className="text-muted-foreground mb-4 text-xs font-semibold tracking-wider uppercase">
                Connect
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {SOCIAL_LINKS.map(social => {
                  const Icon = iconMap[social.icon as keyof typeof iconMap];

                  return (
                    <Button
                      key={social.id}
                      asChild
                      variant="ghost"
                      size="sm"
                      className="hover:bg-primary/10 hover:text-primary group h-10 p-2 transition-colors"
                    >
                      <Link
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2"
                        aria-label={`Connect on ${social.platform}`}
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                        <span className="text-xs font-medium">
                          {social.platform}
                        </span>
                        <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                      </Link>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="border-border/50 border-t p-4">
              <p className="text-muted-foreground text-center text-xs">
                © 2025 Albert Nartey
              </p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
