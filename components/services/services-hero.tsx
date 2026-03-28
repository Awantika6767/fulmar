"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Wrench, Package, Ship, Cpu, ArrowRight } from 'lucide-react'

const quickLinks = [
  { icon: Wrench, label: 'Mechanical', href: '/services/mechanical', color: 'from-cyan-500 to-blue-600' },
  { icon: Package, label: 'Spare Parts', href: '/services/spare-parts', color: 'from-blue-500 to-cyan-600' },
  { icon: Ship, label: 'Ship Stores', href: '/services/ship-stores', color: 'from-cyan-600 to-blue-500' },
  { icon: Cpu, label: 'Automation', href: '/services/automation', color: 'from-blue-600 to-cyan-500' },
]

export function ServicesHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden min-h-[70vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1670121180583-39ab653a071c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxtYXJpdGltZSUyMGluZHVzdHJ5fGVufDB8fHx8MTc3MzU5OTYxMXww&ixlib=rb-4.1.0&q=85"
          alt="Maritime industry"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      {/* Decorative orbs */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <span 
              className={cn(
                "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium uppercase tracking-wider mb-6 opacity-0 translate-y-4 transition-all duration-700",
                isLoaded && "opacity-100 translate-y-0"
              )}
            >
              Our Services
            </span>
            <h1 
              className={cn(
                "text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 opacity-0 translate-y-4 transition-all duration-700 delay-100 text-balance",
                isLoaded && "opacity-100 translate-y-0"
              )}
            >
              Complete Marine{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Technical Solutions
              </span>
            </h1>
            <p 
              className={cn(
                "text-lg lg:text-xl text-slate-300 leading-relaxed mb-8 opacity-0 translate-y-4 transition-all duration-700 delay-200",
                isLoaded && "opacity-100 translate-y-0"
              )}
            >
              From emergency engine repair to scheduled maintenance, spare parts supply to vessel provisioning. 
              We deliver technical excellence with global reach.
            </p>

            {/* Stats row */}
            <div 
              className={cn(
                "flex flex-wrap gap-8 opacity-0 translate-y-4 transition-all duration-700 delay-300",
                isLoaded && "opacity-100 translate-y-0"
              )}
            >
              {[
                { value: '24/7', label: 'Support' },
                { value: '50+', label: 'Engine Models' },
                { value: '<24hr', label: 'Mobilization' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Quick links */}
          <div 
            className={cn(
              "grid grid-cols-2 gap-4 opacity-0 translate-y-4 transition-all duration-700 delay-400",
              isLoaded && "opacity-100 translate-y-0"
            )}
          >
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <link.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-1">{link.label}</h3>
                <div className="flex items-center text-sm text-slate-400 group-hover:text-cyan-400 transition-colors">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
