'use client';

// Footer Component for Albert Nartey Portfolio
// Phase 1: Minimal Footer with Social Links

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SOCIAL_LINKS } from '@/constants/layout';
import { Button } from '@/components/ui/button';

interface FooterProps {
  className?: string;
  showSocial?: boolean;
}

export function Footer({ className, showSocial = false }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className={cn('bg-card/50 border-border mt-auto border-t', className)}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links - Optional */}
          {showSocial && (
            <div className="flex items-center space-x-4">
              {SOCIAL_LINKS.map(social => (
                <Button
                  key={social.id}
                  asChild
                  variant="ghost"
                  size="sm"
                  className="hover:bg-primary/10 hover:text-primary group transition-colors"
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Connect on ${social.platform}`}
                    className="flex items-center space-x-1"
                  >
                    <span className="text-sm">{social.platform}</span>
                    <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </Button>
              ))}
            </div>
          )}

          {/* Copyright */}
          <div className="text-muted-foreground flex items-center space-x-2 text-sm">
            <span>© {currentYear} Albert Nartey. All rights reserved.</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
