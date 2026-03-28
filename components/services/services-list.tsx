"use client"

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Wrench, Package, Ship, Cpu, CheckCircle2 } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Wrench,
    number: '01',
    title: 'Mechanical Repair & Engine Services',
    description: 'Complete mechanical lifecycle support for main propulsion and auxiliary generating engines. Our engineers hold sea-going command experience and OEM workshop training.',
    features: [
      '2-stroke / 4-stroke diesel, dual-fuel & gas engine overhaul',
      'Crankshaft replacement & journal reconditioning',
      'Turbocharger balancing & cartridge replacement',
      'Fuel injection equipment calibration',
      'White-metal bearing casting & bearing seat machining',
      'Cylinder cover, liner, piston crown replacement',
      'Governor tuning & actuator linkage calibration',
    ],
    image: 'https://images.unsplash.com/photo-1685720543979-e9524b3b0176?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHwxfHxtYXJpbmUlMjBlbmdpbmV8ZW58MHx8fHwxNzczNTk5NTgwfDA&ixlib=rb-4.1.0&q=85',
    accent: 'from-cyan-500 to-blue-600',
    href: '/services/mechanical',
  },
  {
    icon: Package,
    number: '02',
    title: 'Spare Parts Supply & Logistics',
    description: 'OEM & genuine alternatives with global sourcing. We source based on technical suitability, certification requirements, and commercial efficiency.',
    features: [
      'Engine & turbocharger spare parts',
      'Boiler & burner components',
      'IGG & FWG spare parts',
      'Fuel oil, IMO & sea water pump spares',
      'Mechanical & electrical controllers',
      'Control system components',
      '24-48 hour emergency dispatch',
    ],
    image: 'https://images.unsplash.com/photo-1544860632-96597322585c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxzaGlwJTIwbWFpbnRlbmFuY2V8ZW58MHx8fHwxNzczNTk5NjAyfDA&ixlib=rb-4.1.0&q=85',
    accent: 'from-blue-500 to-cyan-600',
    href: '/services/spare-parts',
  },
  {
    icon: Ship,
    number: '03',
    title: 'Ship Stores & Provisioning',
    description: 'Complete vessel consumables for all vessel types. Certified deck stores, fresh provisions, and bonded stores delivered globally.',
    features: [
      'Deck & engine stores',
      'Fresh, chilled & frozen provisions',
      'Bonded stores & duty-free supply',
      'Dry dock & lay-up stores',
      'Multi-cultural crew provisioning',
      'Quarterly & voyage-specific supply',
      'Vessel takeover packages',
    ],
    image: 'https://images.unsplash.com/photo-1704110826560-cb9d3772c04c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHxtYXJpdGltZSUyMGluZHVzdHJ5fGVufDB8fHx8MTc3MzU5OTYxMXww&ixlib=rb-4.1.0&q=85',
    accent: 'from-cyan-600 to-blue-500',
    href: '/services/ship-stores',
  },
  {
    icon: Cpu,
    number: '04',
    title: 'Automation & Control Systems',
    description: 'Technical support for electronically controlled engines, power management systems, and cargo control platforms with OEM-agnostic diagnostics.',
    features: [
      'ME Engine Control Systems (MES / DPS / FIVA)',
      'VRC calibration & combustion optimization',
      'Power management & electrical control',
      'Boiler, IGG & thermal fluid automation',
      'Cargo, ballast & valve remote control',
      'Ultrasonic thickness gauging',
      'Remote diagnostics & condition monitoring',
    ],
    image: 'https://images.unsplash.com/photo-1652837135894-cd1d7f74588a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHwyfHxtYXJpbmUlMjBlbmdpbmV8ZW58MHx8fHwxNzczNTk5NTgwfDA&ixlib=rb-4.1.0&q=85',
    accent: 'from-blue-600 to-cyan-500',
    href: '/services/automation',
  },
]

export function ServicesList() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="space-y-12">
          {services.map((service, index) => {
            const isReversed = index % 2 === 1
            return (
              <AnimatedSection key={service.title} animation="fade-up" delay={index * 80}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-border bg-card shadow-sm ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image side */}
                  <div className={`relative min-h-[280px] lg:min-h-[420px] overflow-hidden ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                    {/* Number overlay */}
                    <div className="absolute bottom-6 left-6">
                      <span className={`text-7xl font-black bg-gradient-to-r ${service.accent} bg-clip-text text-transparent opacity-60 select-none`}>
                        {service.number}
                      </span>
                    </div>
                    {/* Icon overlay */}
                    <div className="absolute top-6 left-6">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.accent} flex items-center justify-center shadow-lg`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className={`p-8 lg:p-10 flex flex-col justify-center ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-7">
                      {service.description}
                    </p>

                    {/* Feature list */}
                    <ul className="space-y-2.5 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                          <span className="text-sm text-card-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div>
                      <Button asChild className={`rounded-full group bg-gradient-to-r ${service.accent} border-0 text-white hover:opacity-90 shadow-md`}>
                        <Link href={service.href}>
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
