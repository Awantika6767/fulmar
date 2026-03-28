"use client"

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Wrench, Package, Ship, Cpu } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'

const services = [
  {
    icon: Wrench,
    number: '01',
    title: 'Mechanical Repair & Engine Services',
    description: 'Complete mechanical lifecycle support for main propulsion and auxiliary engines. In-situ and workshop overhaul capabilities for 2-stroke, 4-stroke, dual-fuel & gas engines.',
    features: ['Crankshaft Replacement', 'Turbocharger Servicing', 'Cylinder Overhaul', 'Governor Calibration'],
    href: '/services/mechanical',
    image: '/images/engine-room.jpg',
  },
  {
    icon: Package,
    number: '02',
    title: 'Spare Parts Supply & Logistics',
    description: 'OEM & genuine alternatives with global sourcing. Ready stock for critical components with 24-48 hour emergency dispatch from stock locations.',
    features: ['Engine Components', 'Boiler Spares', 'IGG Parts', 'Pump Spares'],
    href: '/services/spare-parts',
    image: '/images/spare-parts.jpg',
  },
  {
    icon: Ship,
    number: '03',
    title: 'Ship Stores & Provisioning',
    description: 'Complete vessel consumables for all vessel types. Certified deck stores, provisions, and bonded stores delivered to vessel at port or anchorage.',
    features: ['Deck Stores', 'Engine Stores', 'Fresh Provisions', 'Bonded Stores'],
    href: '/services/ship-stores',
    image: '/images/ship-stores.jpg',
  },
  {
    icon: Cpu,
    number: '04',
    title: 'Automation & Control Systems',
    description: 'Technical support for electronically controlled engines, power management systems, and cargo control platforms. OEM-agnostic diagnostics.',
    features: ['ECES Support', 'PMS Services', 'Remote Diagnostics', 'Tank Gauging'],
    href: '/services/automation',
    image: '/images/automation.jpg',
  },
]

export function ServicesOverview() {
  return (
    <section className="relative py-20 lg:py-32 bg-background overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/3 to-transparent" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <AnimatedSection animation="fade-up">
            <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
              Our Services
            </span>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Complete Marine Technical Solutions
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are not a general ship repair company. We are engine specialists who also support 
              auxiliary systems critical to propulsion and power generation.
            </p>
          </AnimatedSection>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              animation="fade-up"
              delay={index * 100}
            >
              <Link
                href={service.href}
                className="group block h-full bg-card rounded-2xl border border-border card-hover overflow-hidden"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/90 backdrop-blur-sm flex items-center justify-center text-primary-foreground">
                      <service.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-mono text-white/80 bg-black/30 px-2 py-1 rounded backdrop-blur-sm">
                      {service.number}
                    </span>
                  </div>
                  <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>

                <div className="p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
