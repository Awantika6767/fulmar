"use client"

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Cpu, Gauge, Zap, ThermometerSun, Activity, CheckCircle2, Wifi, Shield } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'

const images = {
  engine: 'https://images.unsplash.com/photo-1685720543979-e9524b3b0176?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHwxfHxtYXJpbmUlMjBlbmdpbmV8ZW58MHx8fHwxNzczNTk5NTgwfDA&ixlib=rb-4.1.0&q=85',
  maritime: 'https://images.unsplash.com/photo-1703977883249-d959f2b0c1ae?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHw0fHxtYXJpdGltZSUyMGluZHVzdHJ5fGVufDB8fHx8MTc3MzU5OTYxMXww&ixlib=rb-4.1.0&q=85',
}

const coreCompetencies = [
  'ME Engine Control Systems (MES / DPS / FIVA)',
  'VRC calibration and performance optimization',
  'PLC and SCADA-based control systems',
  'Boiler and IGG burner management',
  'Switchboard, PMS, and generator load sharing',
  'Alarm monitoring and data logging systems',
]

const ecesServices = [
  { title: 'FIVA / HPS / INJ', description: 'Valve response testing, spool replacement, LVDT calibration, null-adjustment' },
  { title: 'Control Units', description: 'CCU, ECU, DCU – fault code interpretation, firmware version verification' },
  { title: 'Hydraulic Power Units', description: 'Pump pressure setting, filter inspection, accumulator pre-charge' },
  { title: 'Crank Angle Sensors', description: 'Gap setting, waveform verification, replacement' },
  { title: 'Engine Safety System', description: 'Overspeed trip testing, shutdown logic validation, alarm setpoint verification' },
]

const vrcScope = [
  'VRC position sensor calibration',
  'Hydraulic servo deadband compensation',
  'Timing deviation measurement (per cylinder)',
  'Actuator linkage wear assessment',
  'I/O signal validation between VRC and engine control system',
  'Re-timing following camshaft removal or cylinder head replacement',
]

const pmsScope = [
  { title: 'Power Management System (PMS)', description: 'Load-dependent start/stop, priority tripping, blackout recovery logic, breaker control' },
  { title: 'Generator Control', description: 'Voltage regulator tuning, droop setting, synchronizing check relay calibration' },
  { title: 'Switchboard', description: 'PLC I/O mapping, mimic panel diagnostics, earth fault location' },
  { title: 'VFD & Soft Starters', description: 'Parameter verification, communications interface, fault logging' },
]

const boilerIggScope = [
  'Burner management system: Flame scanner validation, purge cycle timing, fuel valve leak testing',
  'IGG: Combustion air ratio control, deck seal monitoring, pressure control loop tuning',
  'Three-element feed water control: Drum level tuning, flow transmitter verification',
  'Alarm and trip testing: Low-low water level, flame failure, high steam pressure',
]

const cargoSystems = [
  { system: 'Cargo Control', scope: 'Loading computer interface, tank level monitoring (radar/servo), valve remote control system, pressure and temperature transmitter loop validation' },
  { system: 'Ballast Control', scope: 'Remote valve actuation, tank level sensing, bilge system automatic start logic' },
  { system: 'Safety Systems', scope: 'Fire and gas detection panel, ESD logic testing, PA/GA system integration' },
]

const tankGaugingMakes = ['Saab', 'Emerson', 'Honeywell', 'Kongsberg', 'Museco', 'Whessoe', 'MMC']

const remoteCapabilities = [
  'PLC program upload/download and force monitoring',
  'Trend logging of analogue process values',
  'Alarm history retrieval and sequence-of-events analysis',
  'Firmware version verification',
  'Pre-mobilization spare part recommendation',
]

const conditionMonitoring = [
  'Cylinder pressure analysis',
  'Vibration signature collection (turbocharger, main engine crosshead)',
  'Bearing temperature trend monitoring',
  'Exhaust gas temperature deviation logging',
]

export function AutomationContent() {
  return (
    <div className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Hero Banner */}
        <AnimatedSection animation="fade-up" className="mb-16">
          <div className="relative rounded-3xl overflow-hidden h-64 lg:h-80">
            <Image src={images.engine} alt="Marine automation" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
            <div className="absolute inset-0 flex items-center p-8 lg:p-12">
              <div className="max-w-xl">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4 shadow-lg">
                  <Cpu className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl lg:text-4xl font-bold text-white mb-3">
                  Marine Automation Services
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  Advanced control systems diagnostics, PLC programming, and remote monitoring solutions.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Overview */}
        <AnimatedSection animation="fade-up" className="mb-20">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl border border-slate-800 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-10">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-wider mb-4">
                  Our Approach
                </span>
                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                  Our automation engineers are trained in control logic, hardware interfacing, and fieldbus diagnostics – 
                  not just component swapping. We do not merely replace cards. We identify root cause: failed I/O, corrupted logic, 
                  earth fault, signal interference, or sensor drift.
                </p>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                  Core Competencies
                </h3>
                <ul className="grid grid-cols-1 gap-3">
                  {coreCompetencies.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative min-h-[300px] lg:min-h-full">
                <Image src={images.maritime} alt="Maritime industry" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-slate-900 lg:block hidden" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-transparent lg:hidden" />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ECES */}
        <AnimatedSection animation="fade-up" className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">Engine Control</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                Electronically Controlled Engine Services
              </h2>
              <p className="text-muted-foreground mt-1">MAN B&W ME/ME-C/ME-B | Wärtsilä RT-flex / X | Sulzer Flex | Caterpillar M/E</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ecesServices.map((service, index) => {
              const gradients = [
                'from-blue-500 to-cyan-600', 'from-cyan-500 to-blue-600',
                'from-blue-600 to-cyan-500', 'from-cyan-600 to-blue-500', 'from-blue-500 to-blue-600',
              ]
              return (
                <div key={service.title} className="group bg-card rounded-xl border border-border p-6 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradients[index]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              )
            })}
          </div>
        </AnimatedSection>

        {/* VRC */}
        <AnimatedSection animation="fade-up" className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl border border-border p-8 hover:border-cyan-500/30 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                  <Gauge className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xs font-medium text-cyan-600 uppercase tracking-wider">Optimization</span>
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground">
                    VRC & Combustion Optimization
                  </h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                VRC calibration is a distinct technical competency. Our engineers adjust fuel injection timing against 
                crankshaft angle to optimize specific fuel oil consumption and reduce cylinder imbalance.
              </p>
              <ul className="space-y-3">
                {vrcScope.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-0.5 shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl border border-slate-800 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Power Management & Electrical Control</h3>
              </div>
              <div className="space-y-5">
                {pmsScope.map((item, index) => (
                  <div key={item.title} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="font-medium text-white mb-1 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-xs text-white font-bold">{index + 1}</span>
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-400 pl-8">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Boiler, IGG & Cargo */}
        <AnimatedSection animation="fade-up" className="mb-20">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-xs font-medium uppercase tracking-wider mb-4">
              Systems Control
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              Specialized System Automation
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="group bg-card rounded-2xl border border-border p-8 hover:border-orange-500/40 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <ThermometerSun className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">Boiler, IGG & Thermal Fluid Automation</h3>
              </div>
              <ul className="space-y-3">
                {boilerIggScope.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="group bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl border border-slate-800 p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-white" />
                </span>
                Cargo, Ballast & Valve Remote Control
              </h3>
              <div className="space-y-4">
                {cargoSystems.map((item) => (
                  <div key={item.system} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="font-medium text-white mb-1">{item.system}</h4>
                    <p className="text-sm text-slate-400">{item.scope}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Tank Gauging */}
        <AnimatedSection animation="fade-up" className="mb-20">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl border border-slate-800 p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium uppercase tracking-wider mb-4">
                  Instrumentation
                </span>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Cargo Tank Gauging Systems
                </h2>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Radar, servo & ultrasonic level measurement – repair & calibration. Our engineers diagnose and repair 
                  the instrumentation itself, including PCB-level electronics.
                </p>
                <div className="flex flex-wrap gap-2">
                  {tankGaugingMakes.map((make) => (
                    <span key={make} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-slate-300 hover:border-cyan-500/30 transition-colors">
                      {make}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
                  Tank Gauging Scope
                </h3>
                <ul className="space-y-3">
                  {[
                    'Radar gauge: Transceiver diagnostics, antenna cleaning, echo profile verification',
                    'Servo gauge: Motor driver board repair, wire drum replacement, encoder calibration',
                    'Ultrasonic gap gauges: Transducer replacement, signal conditioning board repair',
                    'PCB-level repair: Power supply boards, processor cards, display units, I/O modules',
                    'Sensor loop validation: 4-20mA, fieldbus, serial interface',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                      <span className="text-sm text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Remote & Condition Monitoring */}
        <AnimatedSection animation="fade-up" className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
              <Wifi className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xs font-medium text-green-600 uppercase tracking-wider">24/7 Available</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                Remote Diagnostics & Condition Monitoring
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="group bg-card rounded-2xl border border-border p-8 hover:border-green-500/40 transition-colors duration-300">
              <h3 className="font-semibold text-card-foreground mb-4 flex items-center gap-2">
                <Wifi className="w-5 h-5 text-green-500" />
                Remote Support Capabilities
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Our engineers access control systems remotely to perform first-line fault analysis prior to mobilization.
              </p>
              <ul className="space-y-3">
                {remoteCapabilities.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="group bg-card rounded-2xl border border-border p-8 hover:border-blue-500/40 transition-colors duration-300">
              <h3 className="font-semibold text-card-foreground mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-500" />
                Onboard Condition Monitoring
              </h3>
              <ul className="space-y-3">
                {conditionMonitoring.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
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
              Need Automation Support?
            </h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Remote diagnostics available 24/7. Our automation engineers are ready for deployment worldwide.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full group bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 border-0 text-white shadow-lg shadow-blue-500/25">
                <Link href="/contact">
                  Request Support
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-slate-600 text-white hover:bg-white/10 hover:border-cyan-500/50">
                <Link href="/contact#remote">
                  Remote Diagnostics
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
