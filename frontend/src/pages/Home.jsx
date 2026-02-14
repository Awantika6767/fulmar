import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, MapPin, Globe, Wrench, Settings, Package, 
  Thermometer, Search, ShoppingCart, Zap, Ship, Gauge, 
  Factory, Cog, AlertCircle, CheckCircle, ArrowRight, Menu, X 
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const mainServices = [
    {
      id: 'mechanical',
      icon: <Wrench className="w-12 h-12" />,
      title: 'Mechanical Repair & Engine Services',
      description: 'Independent large-bore engine specialists deployed globally',
      image: 'https://images.unsplash.com/photo-1685720543979-e9524b3b0176'
    },
    {
      id: 'spare-parts',
      icon: <Package className="w-12 h-12" />,
      title: 'Spare Parts Supply & Logistics',
      description: 'OEM & genuine alternatives. Global sourcing. Rapid delivery.',
      image: 'https://images.unsplash.com/photo-1664382953403-fc1ac77073a0'
    },
    {
      id: 'ship-stores',
      icon: <ShoppingCart className="w-12 h-12" />,
      title: 'Ship Stores & Provisioning',
      description: 'Complete vessel consumables certified, packed, delivered',
      image: 'https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4'
    },
    {
      id: 'automation',
      icon: <Settings className="w-12 h-12" />,
      title: 'Automation & Control Systems',
      description: 'Marine automation, control systems & instrumentation',
      image: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img 
                src="https://customer-assets.emergentagent.com/job_taste-adventure-3/artifacts/nxfwj90m_fulmar-removebg-preview.png" 
                alt="Fulmar Marine Logo" 
                className="h-16 w-auto cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-[#1e3a8a] transition-colors font-medium">Services</button>
              <button onClick={() => scrollToSection('why-choose')} className="text-gray-700 hover:text-[#1e3a8a] transition-colors font-medium">Why Us</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#1e3a8a] transition-colors font-medium">Contact</button>
            </div>

            <div className="hidden lg:block">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] hover:from-[#1e40af] hover:to-[#2563eb] text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Request Quote
              </Button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 space-y-2">
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Services</button>
              <button onClick={() => scrollToSection('why-choose')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Why Us</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/95 via-slate-900/90 to-[#1e40af]/95 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1605745341112-85968b19335b" 
            alt="Marine Operations" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Independent Large-Bore<br />
            <span className="bg-gradient-to-r from-[#60a5fa] to-[#93c5fd] bg-clip-text text-transparent">
              Engine Specialists
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
            Deployed globally for planned maintenance, performance recovery, and catastrophic engine casualty response
          </p>
          <p className="text-lg text-[#93c5fd] mb-12">
            OEM-certified engineers • 24/7 emergency mobilization • Workshop-backed precision
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg"
              onClick={() => scrollToSection('services')}
              className="bg-gradient-to-r from-[#3b82f6] to-[#1e3a8a] hover:from-[#2563eb] hover:to-[#1e40af] text-white text-lg px-8 py-6 shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
            >
              Explore Services
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.location.href = 'tel:+919684083997'}
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-[#1e3a8a] text-lg px-8 py-6 transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              24/7 Emergency
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Wrench className="w-6 h-6" />, text: 'Crankshaft Replacement' },
              { icon: <Settings className="w-6 h-6" />, text: 'ME Control Systems' },
              { icon: <Package className="w-6 h-6" />, text: 'Global Parts Network' },
              { icon: <Zap className="w-6 h-6" />, text: '<24hr Mobilization' }
            ].map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="text-[#93c5fd] mb-2">{item.icon}</div>
                  <p className="text-white font-semibold text-sm">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Overview */}
      <section id="services" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive marine engineering solutions backed by technical expertise and global reach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#3b82f6]">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    {service.icon}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button 
                    variant="link" 
                    className="text-[#1e3a8a] hover:text-[#3b82f6] p-0 font-semibold group"
                    onClick={() => scrollToSection(service.id)}
                  >
                    Explore Details 
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mechanical Repair Section */}
      <section id="mechanical" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Mechanical Repair & Engine Services
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] mb-6"></div>
              <p className="text-lg text-gray-700 mb-6">
                Our engineers bring sea-going command experience, shipyard management backgrounds, and OEM test-bed training—enabling root-cause identification and risk management anywhere.
              </p>
              <div className="space-y-3">
                {[
                  '2-stroke / 4-stroke diesel, dual-fuel & gas engine overhaul',
                  'Crankshaft replacement & journal reconditioning',
                  'Turbocharger balancing & cartridge replacement',
                  'Fuel injection equipment calibration',
                  'White-metal bearing casting & machining',
                  'Cylinder cover, liner, piston crown replacement',
                  'Governor tuning & actuator linkage calibration'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#1e3a8a] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1667316337036-5b82f7d6535c" 
                alt="Engine Services"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Engine Makes Supported */}
          <Card className="bg-gradient-to-br from-blue-50 to-white border-2 border-[#3b82f6]/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Engine Makes Supported</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {['MAN B&W', 'Wärtsilä', 'Sulzer', 'Mitsubishi', 'Caterpillar', 'MAK', 'Niigata', 'Yanmar', 'Daihatsu', 'Rolls-Royce', 'ABC', 'Hyundai', 'Doosan'].map((brand, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-sm font-semibold text-gray-700">{brand}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Spare Parts Section */}
      <section id="spare-parts" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Spare Parts Supply & Logistics
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              OEM & Genuine Alternatives • Global Sourcing • Ready Stock • Rapid Delivery
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-gray-200 hover:border-[#3b82f6] transition-all">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Package className="w-8 h-8 text-[#1e3a8a] mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Engine & Turbocharger Spares</h3>
                </div>
                <ul className="space-y-2">
                  {['Piston crowns & assemblies', 'Cylinder liners & covers', 'Valve cages & bearings', 'Fuel injection pumps', 'Turbocharger cartridges', 'Governor components'].map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-[#1e3a8a] rounded-full mt-2"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#3b82f6] transition-all">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Thermometer className="w-8 h-8 text-[#1e3a8a] mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Boiler & IGG Spare Parts</h3>
                </div>
                <ul className="space-y-2">
                  {['Burner components & nozzles', 'Flame scanners & detectors', 'Level regulators & controls', 'Safety shut-off valves', 'Pump seals & gaskets', 'Oxygen analyzer cells'].map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-[#1e3a8a] rounded-full mt-2"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#3b82f6] transition-all">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Gauge className="w-8 h-8 text-[#1e3a8a] mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Fresh Water Generator Spares</h3>
                </div>
                <ul className="space-y-2">
                  {['Titanium plate gaskets', 'Combined ejectors', 'Distillate pump impellers', 'Salinometer cells', 'Solenoid valves', 'Anti-scalant chemicals'].map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-[#1e3a8a] rounded-full mt-2"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#3b82f6] transition-all">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Cog className="w-8 h-8 text-[#1e3a8a] mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Pump Spares & Components</h3>
                </div>
                <ul className="space-y-2">
                  {['IMO screw pump rotor sets', 'Centrifugal pump impellers', 'Gear pump sets', 'Motor winding kits', 'Mechanical seals', 'Bearing assemblies'].map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-[#1e3a8a] rounded-full mt-2"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Image Banner */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1749244768351-2726dc23d26c" 
              alt="Warehouse"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/90 to-transparent flex items-center">
              <div className="max-w-2xl p-12 text-white">
                <h3 className="text-3xl font-bold mb-4">24-48 Hour Emergency Despatch</h3>
                <p className="text-lg mb-6">Global sourcing network with ready stock in UAE & India warehouses</p>
                <Button 
                  className="bg-white text-[#1e3a8a] hover:bg-gray-100"
                  onClick={() => scrollToSection('contact')}
                >
                  Request Parts Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ship Stores Section */}
      <section id="ship-stores" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1585713181935-d5f622cc2415" 
                alt="Ship Stores"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ship Stores, Provisioning & Chandlery
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] mb-6"></div>
              <p className="text-lg text-gray-700 mb-6">
                Complete vessel consumables certified, packed, and delivered. Global provisioning with local fresh supply, maintaining cold chain integrity.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Deck & Engine Stores', items: ['Mooring & towing equipment', 'Rigging & lifting gear', 'Valves & fittings', 'Welding supplies', 'Tools & equipment'] },
                  { title: 'Provisions', items: ['Dry provisions', 'Chilled & frozen goods', 'Bonded stores', 'Galley supplies', 'Crew amenities'] }
                ].map((category, index) => (
                  <Card key={index} className="bg-blue-50 border-none">
                    <CardContent className="p-4">
                      <h4 className="font-bold text-gray-900 mb-3">{category.title}</h4>
                      <ul className="space-y-1">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-[#1e3a8a] mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Section */}
      <section id="automation" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Automation, Instrumentation & Control Systems
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              OEM-Agnostic Diagnostics • ME Engine Control Systems • PLC/SCADA • Remote Support
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Zap className="w-10 h-10" />,
                title: 'Electronic Engine Control',
                description: 'MAN B&W ME/ME-C, Wärtsilä RT-flex, FIVA/HPS systems',
                features: ['FIVA valve response testing', 'CCU/ECU diagnostics', 'Hydraulic power units', 'Crank angle sensors']
              },
              {
                icon: <Gauge className="w-10 h-10" />,
                title: 'Power Management',
                description: 'Generator control, switchboard automation, PMS systems',
                features: ['Load sharing optimization', 'Generator synchronization', 'VFD & soft starters', 'Power distribution']
              },
              {
                icon: <AlertCircle className="w-10 h-10" />,
                title: 'Safety & Monitoring',
                description: 'Fire & gas detection, cargo control, alarm systems',
                features: ['Fire alarm diagnostics', 'Gas sensor calibration', 'Tank gauging systems', 'ESD logic validation']
              }
            ].map((service, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-[#3b82f6] hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-xl flex items-center justify-center text-white mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#1e3a8a] rounded-full mt-2"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Automation Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1716191299980-a6e8827ba10b" 
              alt="Automation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
              <div className="p-12 text-white">
                <h3 className="text-3xl font-bold mb-2">Remote Diagnostics & Support</h3>
                <p className="text-lg">PLC program access • Trend logging • Firmware verification • Pre-mobilization analysis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Fulmar */}
      <section id="why-choose" className="py-20 px-4 bg-gradient-to-br from-[#1e3a8a] via-slate-800 to-[#1e40af] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Fulmar</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#60a5fa] to-[#93c5fd] mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Independent', desc: 'No OEM sales target. We specify based on technical suitability and cost.' },
              { title: 'Deep Mechanical', desc: 'Crankshaft replacement, white-metal casting, governor tuning.' },
              { title: 'ECES Certified', desc: 'ME, RT-flex, X-engine control system diagnostics certified.' },
              { title: 'Global Parts Network', desc: 'OEM & genuine alternatives. Dry dock packages ready.' },
              { title: 'Ready Stock', desc: 'SAACKE boiler, Alfa Laval IGG/FWG, IMO pumps stocked.' },
              { title: 'Controller Specialists', desc: 'MRS Electronic, SAACKE, Siemens replacements.' },
              { title: 'Workshop-Backed', desc: 'Precision machining, pump testing, dynamic balancing in-house.' },
              { title: '24hr Mobilization', desc: 'Senior engineers on aircraft within one day globally.' }
            ].map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">24/7 Emergency Support • Direct Engineer Connection</p>
          </div>

          {/* Emergency Contact Banner */}
          <Card className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] border-none mb-12">
            <CardContent className="p-8 text-center text-white">
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Emergency Hotline</h3>
              <p className="text-lg mb-4">Direct connection to duty senior engineer • No call center • No triage layer</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919684083997" className="text-2xl font-bold hover:text-gray-200 transition-colors">
                  +91 9684083997
                </a>
                <a href="tel:+919144935508" className="text-2xl font-bold hover:text-gray-200 transition-colors">
                  +91 9144935508
                </a>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                location: 'UAE',
                address: 'VUET1980 Compass Building, Al Hulaila Industrial Zone-FZ, Ras Al Khaimah'
              },
              {
                location: 'Mumbai, India',
                address: '302, Geeta Square, Sector 21, Plot No. 41, Ghansoli, Navi Mumbai – 400701'
              },
              {
                location: 'Kolkata, India',
                address: '5ES8A East Tower, Mani Casadona, Plot No IIF/04, New Town, Kolkata – 700156'
              }
            ].map((office, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-[#3b82f6] transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{office.location}</h3>
                  <p className="text-gray-600 text-center text-sm">{office.address}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-white border-2 border-[#3b82f6]">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-[#1e3a8a] mx-auto mb-3" />
                <p className="text-sm text-gray-600 mb-2">Email</p>
                <a href="mailto:info@fulmarmarine.in" className="text-lg font-bold text-[#1e3a8a] hover:text-[#3b82f6]">
                  info@fulmarmarine.in
                </a>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-white border-2 border-[#3b82f6]">
              <CardContent className="p-6 text-center">
                <Globe className="w-8 h-8 text-[#1e3a8a] mx-auto mb-3" />
                <p className="text-sm text-gray-600 mb-2">Website</p>
                <a href="https://www.fulmarmarine.in" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-[#1e3a8a] hover:text-[#3b82f6]">
                  www.fulmarmarine.in
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-[#1e3a8a] to-slate-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <img 
                src="https://customer-assets.emergentagent.com/job_taste-adventure-3/artifacts/nxfwj90m_fulmar-removebg-preview.png" 
                alt="Fulmar Marine Logo" 
                className="h-14 w-auto mb-4"
              />
              <p className="text-gray-400">
                Independent large-bore engine specialists. Available 24/7 for technical emergencies and planned maintenance worldwide.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('mechanical')} className="block text-gray-400 hover:text-[#60a5fa] transition-colors">Mechanical Services</button>
                <button onClick={() => scrollToSection('spare-parts')} className="block text-gray-400 hover:text-[#60a5fa] transition-colors">Spare Parts</button>
                <button onClick={() => scrollToSection('automation')} className="block text-gray-400 hover:text-[#60a5fa] transition-colors">Automation</button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-[#60a5fa] transition-colors">Contact</button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Service Coverage</h4>
              <div className="space-y-2 text-gray-400">
                <p>🌍 UAE • Middle East</p>
                <p>🌍 India • South Asia</p>
                <p>🌍 South East Asia</p>
                <p className="text-[#60a5fa] font-semibold mt-4">24/7 Global Emergency Response</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Fulmar Marine Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
