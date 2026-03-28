"use client"

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Anchor, Package, Utensils, Wine, Warehouse, Ship, CheckCircle2, MapPin } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'

const images = {
  ship: 'https://images.unsplash.com/photo-1591384083449-6ea0df274a18?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHw0fHxzaGlwJTIwbWFpbnRlbmFuY2V8ZW58MHx8fHwxNzczNTk5NjAyfDA&ixlib=rb-4.1.0&q=85',
  maritime: 'https://images.unsplash.com/photo-1660817972601-fdf9f64b865a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwzfHxtYXJpdGltZSUyMGluZHVzdHJ5fGVufDB8fHx8MTc3MzU5OTYxMXww&ixlib=rb-4.1.0&q=85',
}

const deckStores = [
  { category: 'Mooring & Towing', items: 'Synthetic and natural fiber ropes, steel wire ropes, tails, stoppers, synthetic slings, towing springs' },
  { category: 'Rigging & Lifting', items: 'Shackles (D-shackle, bow), turnbuckles, bottle screws, wire rope clips, thimbles, hooks, master links' },
  { category: 'Valves & Fittings', items: 'Gate valve spindles, butterfly valve repair kits, non-return valve inserts, strainer baskets' },
  { category: 'Fasteners', items: 'Stainless steel bolts/nuts/washers, galvanized hardware, socket head caps, stud bolts' },
  { category: 'Welding & Cutting', items: 'Welding electrodes, MIG/TIG wire, oxygen/acetylene hoses, cutting nozzles, flashback arrestors' },
  { category: 'Tools', items: 'Torque wrenches, hydraulic tensioning tools, pneumatic grinders, drill bits, hand tool kits' },
  { category: 'Electrical', items: 'Cable drums, cable ties, junction boxes, terminal blocks, heat shrink tubing, LED battens' },
  { category: 'Paints & Chemicals', items: 'Epoxy, chlorinated rubber, antifouling, thinners, hardeners, rust converters, degreasers' },
]

const provisions = [
  { category: 'Dry Provisions', items: 'Rice, flour, pulses, pasta, cooking oil, canned vegetables, canned meat, sauces, spices, breakfast cereals, biscuits, beverages' },
  { category: 'Chilled & Frozen', items: 'Fresh vegetables and fruit, fresh meat (halal certified available), poultry, seafood, dairy products, eggs, frozen ready meals, ice cream' },
  { category: 'Bonded Stores', items: 'Beer, wine, spirits, soft drinks, mineral water, energy drinks, tobacco products' },
  { category: 'Galley & Mess', items: 'Crockery, cutlery, glassware, cookware, catering disposables, cleaning chemicals, dishwashing supplies' },
  { category: 'Crew Amenities', items: 'Toiletries, laundry detergents, cabin supplies, stationery, crew welfare items' },
]

const engineStores = [
  'Filter elements: Lube oil, fuel oil, hydraulic, air',
  'Gaskets and O-rings: Categorized by engine model',
  'Valve grinding compound, thread lockers, sealing compounds',
  'Lighting: LED floodlights, navigation bulbs, fluorescent tubes',
  'Adhesives, lubricants, degreasers, absorbent pads',
]

const provisioningCapabilities = [
  'Fresh supply at UAE, India, Singapore, Oman, Turkey',
  'Airfreight options for remote locations or urgent replenishment',
  'Customs-cleared delivery alongside vessel or to agent warehouse',
  '24-hour notice for standard provisioning',
  'Multi-vendor consolidation – single invoice, single delivery point',
]

export function ShipStoresContent() {
  return (
    <div className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Hero Banner */}
        <AnimatedSection animation="fade-up" className="mb-16">
          <div className="relative rounded-3xl overflow-hidden h-64 lg:h-80">
            <Image src={images.ship} alt="Ship supply" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
            <div className="absolute inset-0 flex items-center p-8 lg:p-12">
              <div className="max-w-xl">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg">
                  <Ship className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl lg:text-4xl font-bold text-white mb-3">
                  Ship Stores & Provisions
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  Complete vessel consumables, provisions, and bonded stores delivered worldwide.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Deck & Engine Stores */}
        <AnimatedSection animation="fade-up" className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
              <Anchor className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xs font-medium text-cyan-600 uppercase tracking-wider">Marine Supplies</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                Deck & Engine Stores
              </h2>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            Complete vessel consumables for all vessel types – container, bulk carrier, tanker, offshore, and specialist vessels.
            Certified, packed, and delivered.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {deckStores.map((item, index) => {
              const gradients = [
                'from-cyan-500 to-blue-600', 'from-blue-500 to-cyan-600',
                'from-cyan-600 to-blue-500', 'from-blue-600 to-cyan-500',
                'from-cyan-500 to-blue-500', 'from-blue-500 to-blue-600',
                'from-cyan-600 to-blue-600', 'from-blue-600 to-cyan-600',
              ]
              return (
                <div key={item.category} className="group bg-card rounded-xl border border-border p-5 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradients[index]} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Package className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">{item.category}</h3>
                      <p className="text-sm text-muted-foreground">{item.items}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl border border-slate-800 p-8">
            <h3 className="font-semibold text-white mb-5 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
              Engine Stores
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {engineStores.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* Provisions */}
        <AnimatedSection animation="fade-up" className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg">
              <Utensils className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xs font-medium text-orange-600 uppercase tracking-wider">Catering Services</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                Provision Supply & Ship Chandlering
              </h2>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            High-quality provisions and bonded stores to vessels at port or anchorage. We maintain cold chain integrity, 
            prioritize shelf life, and accommodate multi-cultural crew requirements.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {provisions.map((item, index) => {
                const colors = ['text-cyan-500', 'text-blue-500', 'text-orange-500', 'text-cyan-600', 'text-blue-600']
                return (
                  <div key={item.category} className="bg-card rounded-xl border border-border p-5 hover:border-cyan-500/30 transition-colors duration-300">
                    <h3 className={`font-semibold mb-2 flex items-center gap-2 ${colors[index]}`}>
                      <span className="w-2 h-2 rounded-full bg-current" />
                      {item.category}
                    </h3>
                    <p className="text-sm text-muted-foreground pl-4">{item.items}</p>
                  </div>
                )
              })}
            </div>
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl border border-slate-800 p-8 h-fit">
              <h3 className="font-semibold text-white mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                Provisioning Capabilities
              </h3>
              <ul className="space-y-4">
                {provisioningCapabilities.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Bonded Stores */}
        <AnimatedSection animation="fade-up" className="mb-20">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl border border-slate-800 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg">
                    <Wine className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-purple-400 uppercase tracking-wider">Duty-Free</span>
                    <h2 className="text-2xl font-bold text-white">
                      Bonded Stores Supply
                    </h2>
                  </div>
                </div>
                <p className="text-slate-400 leading-relaxed mb-8">
                  Full bonded store replenishment in compliance with flag state and port customs regulations.
                  All bonded stores supplied with customs documentation, duty-free certificates, and vessel sealing support.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Beer and Cider', 'Wine and Champagne', 'Spirits', 'Soft Drinks', 'Mineral Water', 'Energy Drinks', 'Tobacco Products'].map((item) => (
                    <span key={item} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-slate-300 hover:border-purple-500/30 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative min-h-[300px] lg:min-h-full">
                <Image src={images.maritime} alt="Maritime industry" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-slate-900 lg:block hidden" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-transparent lg:hidden" />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Specialized Supply */}
        <AnimatedSection animation="fade-up" className="mb-20">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 text-xs font-medium uppercase tracking-wider mb-4">
              Specialized Services
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              Project-Specific Supply Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="group bg-card rounded-2xl border border-border p-8 hover:border-cyan-500/40 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Warehouse className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">Dry Dock & Lay-Up Stores</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Long-shelf-life dry provisions',
                  'Frozen bulk catering packs',
                  'Minimal packaging options for waste reduction',
                  'Galley deep clean chemicals',
                  'Pest control supplies',
                  'Crew welfare packs for extended yard stays',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-0.5 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="group bg-card rounded-2xl border border-border p-8 hover:border-cyan-500/40 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">Vessel Takeover Supply</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Initial lubricant and hydraulic oil top-up',
                  'First-fill filter sets for all engines and systems',
                  'Bridge and navigation consumables',
                  'Galley and domestic stores',
                  'Safety equipment: Lifebuoys, EEBD refills, first aid kits',
                  'Spare parts inventory gap-filling',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-0.5 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection animation="fade-up">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl border border-slate-800 p-10 lg:p-14 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Order?
            </h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Contact us for quarterly, half-yearly, or voyage-specific supply requirements.
            </p>
            <Button asChild size="lg" className="rounded-full group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border-0 text-white shadow-lg shadow-cyan-500/25">
              <Link href="/contact">
                Request Supply Quote
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
