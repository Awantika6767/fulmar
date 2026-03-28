"use client"

import Image from 'next/image'
import { AnimatedSection } from '@/components/animated-section'

const engineBrands = [
  { name: 'MAN B&W', logo: '/logos/man.jpg' },
  { name: 'Wärtsilä', logo: '/logos/wartsila.png' },
  { name: 'Sulzer', logo: '/logos/sulzer.jpg' },
  { name: 'Mitsubishi', logo: '/logos/mitsubishi.png' },
  { name: 'Caterpillar', logo: '/logos/caterpillar.png' },
  { name: 'MAK', logo: '/logos/mak.jpg' },
  { name: 'Niigata', logo: '/logos/niigata.png' },
  { name: 'Yanmar', logo: '/logos/yanmar.png' },
  { name: 'Daihatsu', logo: '/logos/daihatsu.jpg' },
  { name: 'Rolls-Royce/Bergen', logo: '/logos/bergen.png' },
  { name: 'ABC', logo: '/logos/abc.png' },
  { name: 'Hyundai', logo: '/logos/hyundai.png' },
  { name: 'Doosan', logo: '/logos/doosan.png' },
]

const turbochargerBrands = [
  { name: 'ABB', logo: '/logos/abb.png' },
  { name: 'MAN', logo: '/logos/man_turbo.png' },
  { name: 'Mitsubishi', logo: '/logos/mitsubishi.png' },
  { name: 'IHI', logo: '/logos/ihi.png' },
  { name: 'Napier', logo: '/logos/napier.png' },
  { name: 'Kawasaki', logo: '/logos/kawasaki.png' },
  { name: 'PBS', logo: '/logos/pbs.png' },
  { name: 'Holset', logo: '/logos/holset.png' },
  { name: 'Komatsu', logo: '/logos/komatsu.png' },
]

function BrandCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="group flex flex-col items-center gap-3 cursor-default">
      <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-cyan-500/40 transition-all duration-300 overflow-hidden p-2">
        <Image
          src={logo}
          alt={name}
          width={72}
          height={72}
          className="object-contain w-full h-full"
        />
      </div>
      <span className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors text-center leading-tight">{name}</span>
    </div>
  )
}

export function EngineSupport() {
  return (
    <section className="relative py-20 lg:py-32 bg-background overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimatedSection animation="fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 text-sm font-medium uppercase tracking-wider mb-5">
              Comprehensive Coverage
            </span>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 text-balance">
              Engine Makes We{' '}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Support
              </span>
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Independent servicing with no brand restriction.
              Mechanical and rotating element specialists across all major OEMs.
            </p>
          </AnimatedSection>
        </div>

        {/* Main Engines */}
        <AnimatedSection animation="fade-up" delay={300}>
          <div className="bg-card border border-border rounded-3xl p-8 lg:p-10 mb-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full" />
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-widest">
                Main &amp; Auxiliary Engines
              </h3>
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-muted-foreground">{engineBrands.length} manufacturers</span>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-13 gap-6 justify-items-center">
              {engineBrands.map((brand) => (
                <BrandCard key={brand.name} {...brand} />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Turbochargers */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="bg-secondary border border-border rounded-3xl p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-600 rounded-full" />
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-widest">
                Turbocharger Makes
              </h3>
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-muted-foreground">{turbochargerBrands.length} manufacturers</span>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-9 gap-6 justify-items-center">
              {turbochargerBrands.map((brand) => (
                <BrandCard key={brand.name} {...brand} />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Bottom image strip */}
        <AnimatedSection animation="fade-up" delay={500}>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl overflow-hidden">
            {[
              'https://images.unsplash.com/photo-1652837135894-cd1d7f74588a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHwyfHxtYXJpbmUlMjBlbmdpbmV8ZW58MHx8fHwxNzczNTk5NTgwfDA&ixlib=rb-4.1.0&q=85',
              'https://images.unsplash.com/photo-1725119668328-10ce8dd4c5ec?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxzaGlwJTIwbWFpbnRlbmFuY2V8ZW58MHx8fHwxNzczNTk5NjAyfDA&ixlib=rb-4.1.0&q=85',
              'https://images.unsplash.com/photo-1601670718651-1ed810d046fb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxzaGlwJTIwbWFpbnRlbmFuY2V8ZW58MHx8fHwxNzczNTk5NjAyfDA&ixlib=rb-4.1.0&q=85',
              'https://images.unsplash.com/photo-1685720543979-e9524b3b0176?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHwxfHxtYXJpbmUlMjBlbmdpbmV8ZW58MHx8fHwxNzczNTk5NTgwfDA&ixlib=rb-4.1.0&q=85',
            ].map((src, i) => (
              <div key={i} className="relative h-40 overflow-hidden rounded-xl">
                <Image src={src} alt="Marine engineering" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-slate-950/30" />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
