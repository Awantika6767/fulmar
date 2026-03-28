"use client"

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/animated-section'

const highlights = [
  { icon: Clock, label: 'Response Time', value: '< 1 Hour' },
  { icon: Phone, label: 'Emergency Line', value: '24 / 7' },
  { icon: MapPin, label: 'Global Coverage', value: 'Worldwide' },
]

export function CTASection() {
  return (
    <section className="relative py-20 lg:py-28 bg-slate-950 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1670121180583-39ab653a071c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxtYXJpdGltZSUyMGluZHVzdHJ5fGVufDB8fHx8MTc3MzU5OTYxMXww&ixlib=rb-4.1.0&q=85"
          alt="Maritime industry"
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950" />
      </div>

      {/* Glow accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main content card */}
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-slate-700/60 rounded-3xl p-10 lg:p-14 text-center backdrop-blur-sm">
            <AnimatedSection animation="fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 text-sm font-medium uppercase tracking-wider mb-6">
                Get Started
              </span>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 text-balance">
                Ready to discuss your{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  requirements?
                </span>
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Whether you need emergency support, technical services, spare parts, or provisioning —
                our team is ready to assist with a response within 24 hours.
              </p>
            </AnimatedSection>

            {/* Highlight stats */}
            <AnimatedSection animation="fade-up" delay={250}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
                {highlights.map((item) => (
                  <div key={item.label} className="flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-xl">
                    <item.icon className="w-5 h-5 text-cyan-400 shrink-0" />
                    <div className="text-left">
                      <div className="text-xs text-slate-500 uppercase tracking-wider">{item.label}</div>
                      <div className="text-sm font-semibold text-white">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 h-12 text-base font-medium group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border-0 text-white shadow-lg shadow-cyan-500/25"
                >
                  <Link href="/contact">
                    Request a Quote
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 h-12 text-base font-medium border-slate-600 text-slate-900 hover:bg-slate-800 hover:border-cyan-500/50"
                >
                  <a href="tel:+971000000000">
                    <Phone className="mr-2 w-4 h-4" />
                    24/7 Emergency
                  </a>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-slate-700/50">
                <a
                  href="mailto:info@fulmarmarine.com"
                  className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@fulmarmarine.com
                </a>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-600" />
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin className="w-4 h-4" />
                  UAE · India · Singapore · Middle East
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
