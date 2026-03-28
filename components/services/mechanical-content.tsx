"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, Wrench, Cog, Settings, CheckCircle2, ChevronRight } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const images = {
  engine1: 'https://images.unsplash.com/photo-1685720543979-e9524b3b0176?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHwxfHxtYXJpbmUlMjBlbmdpbmV8ZW58MHx8fHwxNzczNTk5NTgwfDA&ixlib=rb-4.1.0&q=85',
  engine2: 'https://images.unsplash.com/photo-1652837135894-cd1d7f74588a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHwyfHxtYXJpbmUlMjBlbmdpbmV8ZW58MHx8fHwxNzczNTk5NTgwfDA&ixlib=rb-4.1.0&q=85',
  maintenance1: 'https://images.unsplash.com/photo-1725119668328-10ce8dd4c5ec?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxzaGlwJTIwbWFpbnRlbmFuY2V8ZW58MHx8fHwxNzczNTk5NjAyfDA&ixlib=rb-4.1.0&q=85',
  maintenance2: 'https://images.unsplash.com/photo-1601670718651-1ed810d046fb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxzaGlwJTIwbWFpbnRlbmFuY2V8ZW58MHx8fHwxNzczNTk5NjAyfDA&ixlib=rb-4.1.0&q=85',
}

const pageSections = [
  { id: 'overview', title: 'Overview' },
  { id: 'engine-overhaul', title: 'Engine Overhaul' },
  { id: 'crankshaft', title: 'Crankshaft Repair' },
  { id: 'workshop', title: 'Workshop Services' },
  { id: 'dry-dock', title: 'Dry Dock Project Management' }
]

const overhaulCapabilities = [
  {
    component: 'Cylinder Units',
    scope: 'Cold pulling/hot pulling of cylinder heads, liner extraction, honing, micro-finishing, piston crown change-out, ring groove reconditioning',
  },
  {
    component: 'Crankgear',
    scope: 'Main bearing and crankpin bearing replacement, crankshaft deflection measurement, web polishing, journal grinding-in-place',
  },
  {
    component: 'Turbochargers',
    scope: 'Full strip-down, rotor balancing (high-speed dynamic), nozzle ring replacement, bearing housing cleaning, axial clearance setting',
  },
  {
    component: 'Fuel Injection',
    scope: 'Plunger and barrel replacement, exhaust valve actuation system calibration, VIT timing adjustment',
  },
  {
    component: 'Valve Train',
    scope: 'Valve spindle grinding, seat grinding, rotocap servicing, valve clearance setting',
  },
]

const crankshaftScope = [
  'Engine room top-end and bottom-end stripping',
  'Camshaft and chain drive removal',
  'Bearing saddle inspection and line-boring verification',
  'New crankshaft alignment (deflection and bearing clearance)',
  'Reassembly, timing reset, and sea trial support',
]

const majorRepairs = [
  { title: 'Entablature crack repair', description: 'Stop-drilling, metal stitching, NDT verification' },
  { title: 'Bedplate re-alignment', description: 'Chocking compound replacement, wedge adjustment' },
  { title: 'Thrust bearing replacement', description: 'Pad inspection, clearance restoration, white-metal re-pouring' },
  { title: 'Connecting rod replacement', description: 'Straightening, magnaflux inspection, bush replacement' },
]

const workshopServices = [
  { title: 'White-metal bearings', description: 'Centrifugal casting, static pouring, bore machining, timing fit, oil groove cutting' },
  { title: 'Piston crowns', description: 'Inconel insert replacement, crown welding, stress relieving, NDT' },
  { title: 'Cylinder covers', description: 'Seat reconditioning, crack excavation, nickel-iron welding, pressure testing' },
  { title: 'Exhaust valves', description: 'Stellite facing, grinding, hardness testing' },
  { title: 'Governors', description: 'UG8, UG32, PGA/PGB series – hydraulic and electronic calibration' },
  { title: 'Pumps', description: 'FIVA, HPS, fuel pressure plunger – bench testing and flow-rate verification' },
]

const dryDockScope = [
  'Tail shaft inspection and withdrawal',
  'Sterntube bearing replacement (oil/water lubricated)',
  'Rudder carrier bearing renewal',
  'Bow thruster unit removal and gearbox overhaul',
  'Sea chest valve grinding and actuator linkage re-fit',
  'Class survey preparation and attendance',
]

const partnerShipyards = ['Turkey', 'Dubai Maritime City', 'Oman', 'India', 'Singapore', 'China']

export function MechanicalContent() {
  const [activeSection, setActiveSection] = useState('overview')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -80% 0px' }
    )

    pageSections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-12">
        {/* Sidebar Navigation */}
        <aside className="lg:w-72 lg:shrink-0 hidden lg:block">
          <div className="sticky top-32 bg-card border border-border rounded-3xl p-6 lg:p-8 shadow-sm">
            <h3 className="font-bold text-foreground mb-6 text-lg">On this page</h3>
            <nav className="flex flex-col gap-2">
              {pageSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleScrollTo(section.id)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-left w-full group",
                    activeSection === section.id
                      ? "bg-cyan-500/10 text-cyan-500"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )}
                >
                  {section.title}
                  <ChevronRight className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    activeSection === section.id ? "translate-x-1 text-cyan-500" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                  )} />
                </button>
              ))}
            </nav>
            <div className="mt-8 pt-6 border-t border-border">
              <Button asChild className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/25 border-0">
                <Link href="/contact">Request Estimate</Link>
              </Button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Hero Image Banner */}
          <div id="overview" className="scroll-mt-32">
            <AnimatedSection animation="fade-up" className="mb-16">
              <div className="relative rounded-3xl overflow-hidden h-64 lg:h-80">
                <Image
                  src={images.engine1}
                  alt="Marine engine"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
                <div className="absolute inset-0 flex items-center p-8 lg:p-12">
                  <div className="max-w-xl">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg">
                      <Wrench className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="text-2xl lg:text-4xl font-bold text-white mb-3">
                      Expert Mechanical Services
                    </h2>
                    <p className="text-slate-300 leading-relaxed">
                      Complete lifecycle support for main propulsion and auxiliary engines with 24/7 emergency response.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Main Engine Overhaul Section */}
          <div id="engine-overhaul" className="scroll-mt-32">
            <AnimatedSection animation="fade-up" className="mb-20">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-start">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 text-xs font-medium uppercase tracking-wider mb-4">
                    Core Service
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    Main Engine & Auxiliary Engine Overhaul
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Fulmar supports the complete mechanical lifecycle of main propulsion and auxiliary generating engines.
                    In-situ and workshop overhaul capabilities for all major engine makes.
                  </p>
                  <div className="relative rounded-2xl overflow-hidden h-48">
                    <Image src={images.maintenance1} alt="Ship maintenance" fill className="object-cover" />
                  </div>
                </div>

                <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-b border-slate-800 p-5">
                    <h3 className="text-sm font-semibold text-white uppercase tracking-wider flex items-center gap-2">
                      <Cog className="w-4 h-4 text-cyan-400" />
                      Overhaul Capabilities
                    </h3>
                  </div>
                  <div className="divide-y divide-slate-800">
                    {overhaulCapabilities.map((item) => (
                      <div key={item.component} className="p-5 hover:bg-slate-800/50 transition-colors">
                        <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-cyan-400" />
                          {item.component}
                        </h4>
                        <p className="text-sm text-slate-400 pl-4">{item.scope}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Crankshaft Replacement */}
          <div id="crankshaft" className="scroll-mt-32">
            <AnimatedSection animation="fade-up" className="mb-20">
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl border border-slate-800 overflow-hidden">
                <div className="grid grid-cols-1 xl:grid-cols-2">
                  <div className="relative min-h-[300px] xl:min-h-full">
                    <Image src={images.engine2} alt="Engine crankshaft" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-900 xl:block hidden" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent xl:hidden" />
                  </div>
                  <div className="p-8 lg:p-10">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-wider mb-4">
                      Specialized Service
                    </span>
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                      Crankshaft Replacement & Catastrophic Failure Recovery
                    </h2>
                    <p className="text-slate-400 leading-relaxed mb-6">
                      Fulmar is one of the few independent service providers actively executing full crankshaft replacement contracts.
                    </p>
                    <ul className="space-y-3 mb-8">
                      {crankshaftScope.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                          <span className="text-slate-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                      <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                        <Settings className="w-4 h-4 text-cyan-400" />
                        Associated Major Repairs
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {majorRepairs.map((repair) => (
                          <div key={repair.title}>
                            <h4 className="font-medium text-white text-sm mb-1">{repair.title}</h4>
                            <p className="text-xs text-slate-400">{repair.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Workshop Reconditioning */}
          <div id="workshop" className="scroll-mt-32">
            <AnimatedSection animation="fade-up" className="mb-20">
              <div className="text-center mb-12 xl:text-left">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 text-xs font-medium uppercase tracking-wider mb-4">
                  Workshop Services
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Workshop Reconditioning & Precision Machining
                </h2>
                <p className="text-muted-foreground leading-relaxed max-w-2xl xl:mx-0 mx-auto">
                  Fulmar operates workshop facilities capable of component restoration to OEM limits or Class-approved repair standards.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                {workshopServices.map((service, index) => {
                  const colors = [
                    'from-cyan-500 to-blue-600',
                    'from-blue-500 to-cyan-600',
                    'from-cyan-600 to-blue-500',
                    'from-blue-600 to-cyan-500',
                    'from-cyan-500 to-blue-500',
                    'from-blue-500 to-blue-600',
                  ]
                  return (
                    <div key={service.title} className="group bg-card rounded-2xl border border-border p-6 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colors[index]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Wrench className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-semibold text-card-foreground mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  )
                })}
              </div>
            </AnimatedSection>
          </div>

          {/* Dry Dock Support */}
          <div id="dry-dock" className="scroll-mt-32">
            <AnimatedSection animation="fade-up" className="mb-20">
              <div className="relative rounded-3xl overflow-hidden">
                <div className="absolute inset-0">
                  <Image src={images.maintenance2} alt="Shipyard" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/70" />
                </div>
                <div className="relative p-8 lg:p-12">
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-16">
                    <div>
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 text-xs font-medium uppercase tracking-wider mb-4">
                        Project Management
                      </span>
                      <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                        Dry Dock & Shipyard Project Management
                      </h2>
                      <p className="text-slate-300 leading-relaxed mb-8">
                        Mechanical supervision and execution coordination during scheduled docking.
                      </p>
                      <ul className="space-y-3">
                        {dryDockScope.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                            <span className="text-slate-200">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                      <h3 className="text-lg font-semibold text-white mb-6">

                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {partnerShipyards.map((yard) => (
                          <span key={yard} className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg text-sm font-medium text-white">
                            {yard}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* CTA */}
          <AnimatedSection animation="fade-up">
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl border border-slate-800 p-10 lg:p-14 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Need Mechanical Support?
              </h2>
              <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                24/7 Emergency Mobilization available. Our engineers are ready for deployment worldwide.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="rounded-full group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border-0 text-white shadow-lg shadow-cyan-500/25">
                  <Link href="/contact">
                    Request Engineer
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-slate-600 text-slate-200 hover:bg-slate-800 hover:border-cyan-500/50">
                  <a href="tel:+971000000000">
                    <Phone className="mr-2 w-4 h-4" />
                    Emergency Line
                  </a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
