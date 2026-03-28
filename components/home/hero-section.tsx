"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Image with animated overlay */}
      <div className="absolute inset-0">
        {/* <Image
          src="/images/hero-ship.jpg"
          alt="Cargo ship at sea"
          fill
          priority
          className="object-cover object-center"
        /> */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/fulmar-hero.mp4" type="video/mp4" />
        </video>
        {/* Animated ocean wave overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/80" />

        {/* CSS Animated waves */}
        <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden">
          <svg
            className="absolute bottom-0 w-[200%] h-full animate-wave opacity-20"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="rgb(6 182 212)"
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
          <svg
            className="absolute bottom-0 w-[200%] h-full animate-wave-slow opacity-15"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            style={{ animationDelay: '-2s' }}
          >
            <path
              fill="rgb(59 130 246)"
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,144C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </div>

      {/* Animated gradient orbs for depth */}
      <div className="absolute top-1/4 left-0 w-64 md:w-80 h-64 md:h-80 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2 animate-pulse" />
      <div className="absolute bottom-1/3 right-0 w-64 md:w-80 h-64 md:h-80 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-36">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8 opacity-0 translate-y-4 transition-all duration-700",
              isLoaded && "opacity-100 translate-y-0"
            )}
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              24/7 Emergency Mobilization Available
            </span>
          </div>

          {/* Heading */}
          <h1
            className={cn(
              "text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 opacity-0 translate-y-4 transition-all duration-700 delay-100 text-balance",
              isLoaded && "opacity-100 translate-y-0"
            )}
          >
            Marine Engine
            <span className="block mt-2 text-primary-foreground/80">Specialists</span>
          </h1>

          {/* Description */}
          <p
            className={cn(
              "text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 translate-y-4 transition-all duration-700 delay-200 text-pretty",
              isLoaded && "opacity-100 translate-y-0"
            )}
          >
            Technical solutions for planned maintenance, performance recovery, and catastrophic engine casualty.
            Independent expertise with global reach.
          </p>


          {/* Trust Indicators */}
          <div
            className={cn(
              "mt-16 pt-16 border-t border-primary-foreground/10 opacity-0 transition-all duration-700 delay-500",
              isLoaded && "opacity-100"
            )}
          >
            <p className="text-primary-foreground/50 text-sm uppercase tracking-wider mb-6">
              Trusted by vessel operators worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-6">
              {['Container Vessels', 'Bulk Carriers', 'Tankers', 'Offshore', 'Specialist Vessels'].map((type, index) => (
                <span
                  key={type}
                  className="text-primary-foreground/60 text-sm font-medium"
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className={cn(
          "w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2 opacity-0 transition-all duration-700 delay-700",
          isLoaded && "opacity-100"
        )}>
          <div className="w-1 h-2 rounded-full bg-primary-foreground/50 animate-bounce" />
        </div>
      </div> */}
    </section>
  )
}
