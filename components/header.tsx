'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="relative w-9 h-9 bg-linear-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center shadow-lg shadow-accent/20">
              <span className="text-accent-foreground font-bold text-lg">{'A'}</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">{'aldeia.group'}</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium hover:text-accent transition-colors relative group">
              {'About'}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#portfolio" className="text-sm font-medium hover:text-accent transition-colors relative group">
              {'Portfolio'}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors relative group">
              {'Contact'}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 flex flex-col gap-4">
            <a
              href="#about"
              className="text-sm uppercase tracking-wider hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {'About'}
            </a>
            <a
              href="#portfolio"
              className="text-sm uppercase tracking-wider hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {'Portfolio'}
            </a>
            <a
              href="#contact"
              className="text-sm uppercase tracking-wider hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {'Contact'}
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
