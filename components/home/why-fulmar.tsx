"use client"

import Image from 'next/image'
import { AnimatedSection } from '@/components/animated-section'
import { Shield, Wrench, Award, Globe, Layers, Cog } from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: 'Independent',
    description: 'No OEM sales target. We specify parts based on technical suitability and cost.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Wrench,
    title: 'Deep Mechanical Expertise',
    description: 'Crankshaft replacement, white-metal bearing casting, governor tuning – not just bolt torque.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Award,
    title: 'ECES Certified',
    description: 'ME, RT-flex, X-engine control system diagnostics by trained specialists.',
    color: 'from-cyan-600 to-blue-500',
  },
  {
    icon: Globe,
    title: 'Global Spare Parts',
    description: 'OEM & genuine alternatives. Global sourcing with dry dock packages.',
    color: 'from-blue-600 to-cyan-500',
  },
  {
    icon: Layers,
    title: 'Auxiliary Spares Ready',
    description: 'SAACKE boiler, Alfa Laval IGG/FWG, IMO pumps – ready stock available.',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Cog,
    title: 'Workshop-Backed',
    description: 'Precision machining, pump bench testing, dynamic balancing in-house.',
    color: 'from-blue-500 to-cyan-600',
  },
]

const stats = [
  { value: '24hr', label: 'Engineer Mobilization' },
  { value: '<1hr', label: 'Initial Technical Feedback' },
  { value: '50+', label: 'Engine Models Supported' },
  { value: '15+', label: 'Years of Experience' },
]

export function WhyFulmar() {
  return (
    <section className="relative py-20 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1685720543979-e9524b3b0176?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHwxfHxtYXJpbmUlMjBlbmdpbmV8ZW58MHx8fHwxNzczNTk5NTgwfDA&ixlib=rb-4.1.0&q=85"
          alt="Marine engine"
          fill
          className="object-cover object-center opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950/95" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection animation="fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium uppercase tracking-wider mb-5">
              Why Choose Us
            </span>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 text-balance">
              Technical Excellence,{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Global Reach
              </span>
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Our engineers hold sea-going command experience, shipyard production management backgrounds,
              and OEM workshop test-bed training — enabling accurate root-cause identification anywhere.
            </p>
          </AnimatedSection>
        </div>

        {/* Stats bar */}
        <AnimatedSection animation="fade-up" delay={250}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-700/50 rounded-2xl overflow-hidden mb-16 border border-slate-700/50">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-slate-900/80 px-6 py-8 text-center">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Feature cards grid — full width 3-column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <AnimatedSection key={reason.title} animation="fade-up" delay={index * 80}>
              <div className="group relative bg-slate-900/60 border border-slate-700/50 rounded-2xl p-7 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300 h-full">
                {/* Top accent line */}
                <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${reason.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-5 shadow-lg`}>
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{reason.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
