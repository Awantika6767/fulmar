"use client"

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Package, Flame, Droplets, Gauge, Settings, CircuitBoard, CheckCircle2, Truck, Shield, Clock } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'

const images = {
  maintenance: 'https://images.unsplash.com/photo-1544860632-96597322585c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxzaGlwJTIwbWFpbnRlbmFuY2V8ZW58MHx8fHwxNzczNTk5NjAyfDA&ixlib=rb-4.1.0&q=85',
  maritime: 'https://images.unsplash.com/photo-1704110826560-cb9d3772c04c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHxtYXJpdGltZSUyMGluZHVzdHJ5fGVufDB8fHx8MTc3MzU5OTYxMXww&ixlib=rb-4.1.0&q=85',
}

const categories = [
  {
    icon: Settings,
    title: 'Engine & Turbocharger Spares',
    items: [
      'Piston crowns, skirts, complete piston assemblies',
      'Cylinder liners, cylinder covers, exhaust valve cages',
      'Main bearings, big-end bearings, thrust pads',
      'Fuel injection pumps, plunger & barrel sets, injector nozzles',
      'Turbocharger cartridges, rotor shafts, nozzle rings, filter elements',
      'Governor components, actuator linkages, hydraulic amplifiers',
    ],
    engines: 'MAN B&W, Wärtsilä, Sulzer, Mitsubishi, Caterpillar, MAK, Niigata, Yanmar, Daihatsu, Rolls-Royce/Bergen, ABC, Hyundai, Doosan',
    turbochargers: 'ABB, MAN, Mitsubishi, IHI, Napier, Kawasaki, PBS, Holset, Komatsu',
  },
  {
    icon: Flame,
    title: 'Boiler & Burner Spares',
    items: [
      'Flame scanners (UV/IR), ignition electrodes, photocells',
      'Burner nozzles, oil pre-heaters, fuel pressure regulating valves',
      'Manhole door gaskets, handhole gaskets, sight glass assemblies',
      'Electrode level regulators, float switches, gauge glass spares',
      'Safety shut-off valves, pressure switches, flame failure amplifiers',
      'Boiler feed pump mechanical seals, impellers, wear rings',
    ],
    manufacturers: 'SAACKE, Alfa Laval (Aalborg), Miura, Kawasaki, Weishaupt, Hamworthy, Oilon, Riello',
  },
  {
    icon: Droplets,
    title: 'IGG & FWG Spares',
    items: [
      'Refractory anchors, burner tiles, UV scanner lenses',
      'Spray nozzle sets, demister pads, pH sensor housings',
      'Water level electrodes, seal plates, non-return valve internals',
      'Oxygen analyzer cells, sample pump diaphragms, cooler units',
      'Titanium plate gaskets, plate packs, ejector nozzles',
      'Salinometer cells, conductivity sensors, flow switches',
    ],
    manufacturers: 'Alfa Laval Smit, Green Instruments, Atlas Danmark, Sasakura, Wärtsilä Hamworthy, Kangrim',
  },
  {
    icon: Gauge,
    title: 'Pump Spares',
    items: [
      'Rotor sets (drive/idler screws), housing liners, timing gears',
      'Impellers (bronze/SS/duplex), wear rings, shaft sleeves',
      'Gear sets, housing covers, shaft seals, coupling elements',
      'Motor winding repair kits, cable entry seals, impeller diffusers',
      'Rotor blades, non-return valve plates, mechanical seals',
    ],
    manufacturers: 'IMO AB (Circor), Allweiler, KSB, Flowserve, Sulzer, Grundfos, Torishima, Viking, Flygt',
  },
  {
    icon: CircuitBoard,
    title: 'Controllers & Control Systems',
    items: [
      'Bilge pump automatic controllers, level relay cards',
      'Electrode water level regulator cards, burner sequence controllers',
      'Oxygen analyzer controller cards, deck seal logic controllers',
      'CPU modules, power supply units, I/O cards',
      'Touch screens, display panels, membrane keypads',
      'Solid state relays, timing relays, interposing relays',
    ],
    manufacturers: 'MRS Electronic, SAACKE, Siemens, Honeywell, Danfoss, Allen-Bradley, Mitsubishi, Omron',
  },
]

const sourcingCommitments = [
  'OEM parts with full traceability and manufacturer certification',
  'Genuine approved alternatives meeting Class society requirements',
  'No unbranded or non-certified components',
  '24-48 hour emergency dispatch from stock locations',
]

export function SparePartsContent() {
  return (
    <div className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Hero Banner */}
        <AnimatedSection animation="fade-up" className="mb-16">
          <div className="relative rounded-3xl overflow-hidden h-64 lg:h-80">
            <Image src={images.maintenance} alt="Ship maintenance" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
            <div className="absolute inset-0 flex items-center p-8 lg:p-12">
              <div className="max-w-xl">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4 shadow-lg">
                  <Package className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl lg:text-4xl font-bold text-white mb-3">
                  Global Spare Parts Supply
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  OEM and genuine alternatives with 24-48 hour emergency dispatch from worldwide stock locations.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Sourcing Commitment */}
        <AnimatedSection animation="fade-up" className="mb-20">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl border border-slate-800 p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-wider mb-4">
                  Our Promise
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Independent Sourcing Commitment
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  We are not bound by exclusive OEM agreements. We source based on technical suitability, 
                  certification requirements, and commercial efficiency.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Shield, text: 'OEM parts with full traceability and manufacturer certification' },
                  { icon: CheckCircle2, text: 'Genuine approved alternatives meeting Class society requirements' },
                  { icon: Truck, text: '24-48 hour emergency dispatch from stock locations' },
                  { icon: Clock, text: 'Real-time global inventory search and tracking' },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <item.icon className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Categories */}
        <div className="space-y-8">
          {categories.map((category, index) => {
            const gradients = [
              'from-cyan-500 to-blue-600',
              'from-orange-500 to-red-600',
              'from-blue-500 to-cyan-600',
              'from-cyan-600 to-blue-500',
              'from-blue-600 to-cyan-500',
            ]
            return (
              <AnimatedSection key={category.title} animation="fade-up" delay={index * 50}>
                <div className="bg-card rounded-2xl border border-border overflow-hidden hover:border-cyan-500/30 transition-colors duration-300">
                  <div className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 p-6 lg:p-8 border-b border-border">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[index]} flex items-center justify-center shadow-lg`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-xl lg:text-2xl font-bold text-card-foreground">
                        {category.title}
                      </h2>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                          <span className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
                          Parts Supplied
                        </h3>
                        <ul className="space-y-3">
                          {category.items.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                              <span className="text-card-foreground text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-secondary/50 rounded-xl p-5 space-y-5">
                        {category.engines && (
                          <div>
                            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                              Engine Makes Supported
                            </h3>
                            <p className="text-sm text-muted-foreground">{category.engines}</p>
                          </div>
                        )}
                        {category.turbochargers && (
                          <div>
                            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                              Turbocharger Makes
                            </h3>
                            <p className="text-sm text-muted-foreground">{category.turbochargers}</p>
                          </div>
                        )}
                        {category.manufacturers && (
                          <div>
                            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                              Manufacturers Supported
                            </h3>
                            <p className="text-sm text-muted-foreground">{category.manufacturers}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        {/* CTA */}
        <AnimatedSection animation="fade-up" className="mt-20">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <Image src={images.maritime} alt="Maritime industry" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/75" />
            </div>
            <div className="relative p-10 lg:p-14 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Need Parts Fast?
              </h2>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Request a quotation for your specific requirements. Emergency sourcing available with real-time global inventory search.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="rounded-full group bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 border-0 text-white shadow-lg shadow-blue-500/25">
                  <Link href="/contact">
                    Request Quotation
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-slate-500 text-white hover:bg-white/10 hover:border-cyan-500/50">
                  <Link href="/contact#emergency">
                    Emergency Sourcing
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
