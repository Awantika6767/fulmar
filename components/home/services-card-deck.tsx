"use client"

import { useState, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform, useMotionValueEvent, MotionValue, useSpring } from 'framer-motion'
import { ArrowUpRight, Wrench, Package, Ship, Cpu } from 'lucide-react'

const services = [
  {
    icon: Wrench,
    number: '01',
    title: 'Mechanical Repair & Engine Services',
    description: 'Complete mechanical lifecycle support for main propulsion and auxiliary engines. In-situ and workshop overhaul capabilities for 2-stroke, 4-stroke, dual-fuel & gas engines.',
    features: ['Crankshaft Replacement', 'Turbocharger Servicing', 'Cylinder Overhaul', 'Governor Calibration'],
    href: '/services/mechanical',
    image: '/images/engine-room.jpg',
    accent: '#22d3ee',
    tag: 'Engineering',
  },
  {
    icon: Package,
    number: '02',
    title: 'Spare Parts Supply & Logistics',
    description: 'OEM & genuine alternatives with full traceability and global sourcing. Ready stock for critical components with 24-48 hour emergency dispatch from worldwide locations.',
    features: ['Engine Components', 'Boiler Spares', 'IGG Parts', 'Pump Spares'],
    href: '/services/spare-parts',
    image: '/images/spare-parts.jpg',
    accent: '#3b82f6',
    tag: 'Logistics',
  },
  {
    icon: Ship,
    number: '03',
    title: 'Ship Stores & Provisioning',
    description: 'Complete vessel consumables for all vessel types. Certified deck stores, fresh provisions, and bonded stores delivered to vessel at port or anchorage worldwide.',
    features: ['Deck Stores', 'Engine Stores', 'Fresh Provisions', 'Bonded Stores'],
    href: '/services/ship-stores',
    image: '/images/ship-stores.jpg',
    accent: '#14b8a6',
    tag: 'Supply',
  },
  {
    icon: Cpu,
    number: '04',
    title: 'Automation & Control Systems',
    description: 'Technical support for electronically controlled engines, power management systems, and cargo control platforms with OEM-agnostic diagnostics.',
    features: ['ECES Support', 'PMS Services', 'Remote Diagnostics', 'Tank Gauging'],
    href: '/services/automation',
    image: '/images/automation.jpg',
    accent: '#6366f1',
    tag: 'Technology',
  },
]

function ServiceCard({
  service,
  index,
  total,
  scrollYProgress,
}: {
  service: any
  index: number
  total: number
  scrollYProgress: MotionValue<number>
}) {
  const targetProgress = index / (total - 1);
  const startEntering = (index - 1) / (total - 1);
  const nextTargetProgress = (index + 1) / (total - 1);

  const y = useTransform(
    scrollYProgress,
    [startEntering, targetProgress],
    ['100%', '0%']
  );

  const scale = useTransform(
    scrollYProgress,
    [targetProgress, nextTargetProgress],
    [1, 0.92]
  );

  const opacity = useTransform(
    scrollYProgress,
    [targetProgress, nextTargetProgress],
    [1, 0.4]
  );

  return (
    <motion.div
      className="absolute inset-x-4 md:inset-x-10 lg:inset-x-16 top-0 bottom-0 z-20"
      style={{
        y: index === 0 ? '0%' : y,
        scale: index === total - 1 ? 1 : scale,
        opacity: index === total - 1 ? 1 : opacity,
        zIndex: index + 10,
      }}
    >
      <Link
        href={service.href}
        className="group block h-full rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl bg-slate-900"
        style={{ boxShadow: `0 25px 60px -15px ${service.accent}25` }}
      >
        <div className="relative h-full flex flex-col lg:flex-row">
          {/* Image panel */}
          <div className="relative h-44 lg:h-auto lg:w-[45%] overflow-hidden shrink-0">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent lg:bg-gradient-to-r" />
            <div className="absolute top-4 left-4">
              <span
                className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full backdrop-blur-md bg-black/40 border"
                style={{ color: service.accent, borderColor: `${service.accent}40` }}
              >
                {service.tag}
              </span>
            </div>
            <div className="absolute bottom-4 left-6 font-black font-mono text-8xl leading-none select-none"
              style={{ color: `${service.accent}20` }}>
              {service.number}
            </div>
          </div>

          {/* Content panel */}
          <div className="relative flex-1 flex flex-col justify-center p-6 lg:p-10 overflow-auto">
            <div className="absolute top-0 left-0 right-0 h-0.5"
              style={{ background: `linear-gradient(90deg, ${service.accent}, transparent)` }} />

            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shrink-0"
              style={{ backgroundColor: `${service.accent}15`, border: `1px solid ${service.accent}30` }}
            >
              <service.icon className="w-6 h-6" style={{ color: service.accent }} />
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">
              {service.title}
            </h3>
            <p className="text-slate-400 leading-relaxed mb-5 text-sm lg:text-base">
              {service.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {service.features.map((feature: string) => (
                <span key={feature}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-slate-800 border border-slate-700 text-slate-300">
                  {feature}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-300"
              style={{ color: service.accent }}>
              <span>Explore Service</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export function ServicesCardDeck() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(services.length - 1, Math.round(latest * (services.length - 1)))
    setActiveIndex(index)
  })

  // Smooth scroll to the specific card
  const scrollToCard = useCallback((index: number) => {
    if (!containerRef.current) return
    const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY
    const targetY = containerTop + (index * window.innerHeight)
    window.scrollTo({ top: targetY, behavior: 'smooth' })
  }, [])

  const activeService = services[activeIndex] || services[0]

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.3
  });

  return (
    <div
      ref={containerRef}
      className="relative bg-slate-950 w-full"
      style={{ height: `${services.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col pt-[72px] lg:pt-[80px]">
        {/* Header bar */}
        <div className="relative z-30 pt-6 pb-5 px-6 lg:px-16 flex items-end justify-between border-b border-slate-800/50 bg-slate-950">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-1">Our Services</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              Complete Marine Solutions
            </h2>
          </div>
          <div className="hidden md:flex items-baseline gap-1">
            <span className="text-5xl font-black text-white font-mono leading-none transition-colors duration-300"
              style={{ color: activeService.accent }}>
              {String(activeIndex + 1).padStart(2, '0')}
            </span>
            <span className="text-xl text-slate-600 font-mono">
              &nbsp;/ {String(services.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Card area */}
        <div className="flex-1 relative flex items-center px-4 md:px-10 lg:px-16 py-4 bg-slate-950">
          {services.map((service, index) => (
            <ServiceCard
              key={service.number}
              service={service}
              index={index}
              total={services.length}
              scrollYProgress={smoothProgress}
            />
          ))}
        </div>

        {/* Bottom bar */}
        <div className="relative z-30 pb-6 pt-2 px-6 lg:px-16 flex items-center gap-4 bg-slate-950">
          {/* Dot navigation */}
          <div className="flex items-center gap-2">
            {services.map((service, index) => (
              <button
                key={service.number}
                onClick={() => scrollToCard(index)}
                aria-label={`Go to ${service.title}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: index === activeIndex ? '28px' : '8px',
                  height: '8px',
                  backgroundColor: index === activeIndex
                    ? activeService.accent
                    : index < activeIndex ? '#475569' : '#1e293b',
                }}
              />
            ))}
          </div>

          {/* Continuous Progress bar using scrollYProgress */}
          <div className="flex-1 h-px bg-slate-800 relative overflow-hidden rounded-full">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                backgroundColor: activeService.accent,
                width: useTransform(smoothProgress, [0, 1], [`${100 / services.length}%`, '100%'])
              }}
            />
          </div>

          {/* Hint */}
          <div className="w-32 flex justify-end shrink-0">
            {activeIndex < services.length - 1 ? (
              <motion.p
                className="text-xs text-slate-500 hidden md:block"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Scroll to continue
              </motion.p>
            ) : (
              <Link
                href="/services"
                className="text-xs font-semibold flex items-center gap-1 transition-opacity duration-300"
                style={{ color: activeService.accent }}
              >
                View all <ArrowUpRight className="w-3 h-3" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
