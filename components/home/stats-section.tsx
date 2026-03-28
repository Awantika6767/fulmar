"use client"

import { AnimatedSection } from '@/components/animated-section'

const stats = [
  { value: '24/7', label: 'Emergency Support', description: 'Round-the-clock availability' },
  { value: '48hr', label: 'Parts Dispatch', description: 'Emergency delivery worldwide' },
  { value: '13+', label: 'Engine Brands', description: 'Comprehensive coverage' },
  { value: '6+', label: 'Partner Shipyards', description: 'Global network' },
]

export function StatsSection() {
  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={stat.label}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-3">
                  {stat.value}
                </div>
                <div className="text-primary-foreground font-medium mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-primary-foreground/60">
                  {stat.description}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
