"use client"

const services = [
  'Engine Overhaul',
  'Crankshaft Replacement',
  'Turbocharger Services',
  'Spare Parts Supply',
  'Ship Stores',
  'Automation Systems',
  'Dry Dock Support',
  'Emergency Response',
  'Workshop Reconditioning',
  'Fuel Injection Calibration',
]

export function MarqueeSection() {
  return (
    <section className="py-6 bg-secondary border-y border-border overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee">
          {[...services, ...services].map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-8 shrink-0"
            >
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider whitespace-nowrap">
                {service}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
