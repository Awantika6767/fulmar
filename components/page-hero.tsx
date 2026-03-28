"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PageHeroProps {
  badge: string
  title: string
  description: string
  breadcrumbs?: { label: string; href: string }[]
  image?: string
}

export function PageHero({ badge, title, description, breadcrumbs, image }: PageHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-primary overflow-hidden">
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/70" />
        </div>
      )}

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav className={cn(
            "flex items-center gap-2 text-sm text-primary-foreground/60 mb-6 opacity-0 translate-y-4 transition-all duration-700",
            isLoaded && "opacity-100 translate-y-0"
          )}>
            <Link href="/" className="hover:text-primary-foreground transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <Link href={crumb.href} className="hover:text-primary-foreground transition-colors">
                  {crumb.label}
                </Link>
              </span>
            ))}
          </nav>
        )}

        <div className="max-w-3xl">
          <span 
            className={cn(
              "inline-block text-sm font-medium text-primary-foreground/70 uppercase tracking-wider mb-4 opacity-0 translate-y-4 transition-all duration-700",
              isLoaded && "opacity-100 translate-y-0"
            )}
          >
            {badge}
          </span>
          <h1 
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 opacity-0 translate-y-4 transition-all duration-700 delay-100 text-balance",
              isLoaded && "opacity-100 translate-y-0"
            )}
          >
            {title}
          </h1>
          <p 
            className={cn(
              "text-lg lg:text-xl text-primary-foreground/70 leading-relaxed opacity-0 translate-y-4 transition-all duration-700 delay-200",
              isLoaded && "opacity-100 translate-y-0"
            )}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
