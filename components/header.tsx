"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const subNavigation = [
  { name: 'Mechanical Repair', href: '/services/mechanical' },
  { name: 'Spare Parts', href: '/services/spare-parts' },
  { name: 'Ship Stores', href: '/services/ship-stores' },
  { name: 'Automation', href: '/services/automation' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className={cn(
        "transition-all duration-500",
        isScrolled ? "py-3" : "py-5"
      )}>
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
            >
              <div className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg transition-colors duration-300",
                isScrolled ? "text-primary-foreground" : "bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm"
              )}>
                <img src="/logos/logo.ico" alt="Logo" />
              </div>
              <div className="flex flex-col">
                <span className={cn(
                  "font-semibold text-lg tracking-tight transition-colors duration-300",
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                )}>
                  Fulmar Marine
                </span>
                <span className={cn(
                  "text-xs tracking-widest uppercase transition-colors duration-300",
                  isScrolled ? "text-muted-foreground" : "text-primary-foreground/70"
                )}>
                  Services
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-300 link-underline",
                    isScrolled
                      ? "text-foreground hover:text-primary"
                      : "text-primary-foreground/90 hover:text-primary-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+971000000000"
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors duration-300",
                  isScrolled ? "text-foreground hover:text-primary" : "text-primary-foreground hover:text-primary/90"
                )}
              >
                <Phone className="w-4 h-4" />
                <span>24/7 Emergency</span>
              </a>
              <Button
                asChild
                variant={isScrolled ? "default" : "secondary"}
                className="rounded-full px-6"
              >
                <Link href="/contact">Request Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors duration-300",
                isScrolled
                  ? "text-foreground hover:bg-secondary"
                  : "text-primary-foreground hover:bg-primary-foreground/10"
              )}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </div>

      {/* Sub Header for Services (Desktop only) */}
      <div className={cn(
        "hidden lg:block border-t transition-colors duration-300",
        isScrolled ? "border-border/10 bg-background/50 backdrop-blur-md" : "border-primary-foreground/10 bg-background/10"
      )}>
        <div className="container mx-auto px-4 lg:px-8 py-2.5">
          <div className="flex items-center  gap-10">
            {subNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-xs font-semibold tracking-wider transition-colors duration-300",
                  isScrolled ? "text-muted-foreground hover:text-foreground" : "text-primary-foreground/80 hover:text-primary-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-card/95 backdrop-blur-md border-t border-border shadow-lg">
              <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="h-px bg-border/50 w-full my-2" />
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Services</span>
                  {subNavigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-base text-card-foreground/80 hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="h-px bg-border/50 w-full my-2" />
                <div className="flex flex-col gap-4 pt-2">
                  <a
                    href="tel:+971000000000"
                    className="flex items-center justify-center gap-2 text-foreground font-medium bg-muted py-3 rounded-lg"
                  >
                    <Phone className="w-4 h-4" />
                    <span>24/7 Emergency</span>
                  </a>
                  <Button asChild className="w-full rounded-full" size="lg">
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Request Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
