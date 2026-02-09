import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Anchor, Shield, Clock, Globe, Wrench, Settings, Package, Thermometer, Search, ShoppingCart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

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
    }
  };

  const services = [
    {
      id: 'engine-repairs',
      icon: <Wrench className="w-6 h-6" />,
      title: 'Main Engine & Auxiliary Engine Repairs',
      description: 'Expert repair and overhaul services for main engines and auxiliary diesel generators, ensuring peak performance and long-term reliability.',
      details: {
        mainEngine: [
          'Cylinder head overhauls & valve reconditioning',
          'Piston and liner replacements',
          'Fuel injection repairs & calibration',
          'Turbocharger maintenance & repair',
          'Crankshaft alignment & bearing replacement',
          'Exhaust valve servicing',
          'Governor and control system repairs'
        ],
        auxiliary: [
          'Generator overhauls',
          'Turbocharger overhauls',
          'Governor repairs',
          'Cooling & starting air system repairs',
          'Alternator and electrical system repairs',
          'Vibration analysis & balancing',
          'Emergency breakdown repairs'
        ]
      }
    },
    {
      id: 'spare-parts',
      icon: <Package className="w-6 h-6" />,
      title: 'Marine Spare Parts Supply',
      description: 'Fast and reliable spare parts supply backed by a strong global sourcing network. Genuine OEM and class-approved alternative spares.',
      details: {
        systems: [
          'Main engine & auxiliary engine components',
          'Automation & control system parts',
          'VRCS & pneumatic system parts',
          'Boiler & IGG system components',
          'Refrigeration & HVAC parts',
          'Pumps, valves & piping components'
        ],
        logistics: [
          'Emergency spares delivery',
          'Planned maintenance kits',
          'Global sourcing and procurement',
          'Technical verification & QA',
          'Certification & documentation',
          'Competitive quotations'
        ]
      }
    },
    {
      id: 'automation',
      icon: <Settings className="w-6 h-6" />,
      title: 'Marine Engine Automation Solutions',
      description: 'End-to-end marine engine automation services to enhance fuel efficiency, reduce emissions, and ensure regulatory compliance.',
      details: {
        services: [
          'Automation installation & upgrades',
          'Legacy system modernization',
          'Performance tuning & optimization',
          'Predictive monitoring & diagnostics',
          'Remote monitoring for real-time analysis',
          'Emergency automation troubleshooting'
        ]
      }
    },
    {
      id: 'power-management',
      icon: <Settings className="w-6 h-6" />,
      title: 'Switchboard & Power Management Systems',
      description: 'Specialized switchboard automation and power management to ensure stable power distribution and prevent blackouts.',
      details: {
        capabilities: [
          'Installation & commissioning',
          'Synchronization support',
          'Frequency and voltage stability',
          'Load balancing and performance optimization',
          'Emergency response & spare parts support'
        ]
      }
    },
    {
      id: 'boiler-igg',
      icon: <Thermometer className="w-6 h-6" />,
      title: 'Boiler Automation & IGG Automation',
      description: 'Modern boiler and Inert Gas Generator automation systems for safe and efficient operation.',
      details: {
        boiler: [
          'System installation & commissioning',
          'Preventive maintenance & diagnostics',
          'Performance optimization & tuning',
          'Remote monitoring support'
        ],
        igg: [
          'IGG system installation & integration',
          'SOLAS compliance support',
          'Oxygen, pressure & temperature monitoring',
          'Emergency response for IGG failures',
          'Spare parts & technical support',
          'Crew guidance & documentation'
        ]
      }
    },
    {
      id: 'vrcs',
      icon: <Settings className="w-6 h-6" />,
      title: 'VRCS (Valve Remote Control System) Solutions',
      description: 'Complete VRCS solutions to maintain reliable valve operations and prevent cargo or system disruptions.',
      details: {
        services: [
          'Installation & system integration',
          'Preventive maintenance & diagnostics',
          'Remote monitoring',
          '24/7 emergency response',
          'Critical spare parts availability'
        ]
      }
    },
    {
      id: 'cargo-equipment',
      icon: <Package className="w-6 h-6" />,
      title: 'Cargo Equipment Services',
      description: 'Installation, calibration, maintenance, and repair of essential cargo equipment for safe operations and compliance.',
      details: {
        systems: [
          'Loadicator Systems - Installation, calibration, and certification',
          'UTI Tape - Supply, calibration, and emergency replacement',
          'Tank Level Gauging Systems - Radar and float-type installation',
          'Fixed Gas Detection Systems - Installation and SOLAS compliance',
          'ODME - Oil Discharge Monitoring Equipment with MARPOL compliance',
          'Personal Gas Detection Equipment - Supply and calibration'
        ]
      }
    },
    {
      id: 'hvac',
      icon: <Thermometer className="w-6 h-6" />,
      title: 'Refrigeration & HVAC Support',
      description: 'Expert refrigeration and HVAC services for cargo preservation, crew comfort, and continuous system uptime.',
      details: {
        services: [
          'System installation & commissioning',
          'Preventive maintenance & diagnostics',
          'Performance tuning & efficiency optimization',
          'Emergency support & spare parts availability',
          '24/7 Support | Maximum System Reliability'
        ]
      }
    },
    {
      id: 'uti-inspection',
      icon: <Search className="w-6 h-6" />,
      title: 'Ultrasonic Thickness Inspection (UTI) Services',
      description: 'Class-approved UTI services to assess structural integrity, corrosion, and steel wastage per IACS requirements.',
      details: {
        scope: [
          'Hull, deck & bottom plating thickness measurement',
          'Cargo & ballast tank structure inspection',
          'Bulkheads, frames, stiffeners & longitudinals',
          'Pre-dock, dry dock & special survey support',
          'Damage, corrosion & steel wastage assessment'
        ],
        standards: [
          'IACS classification societies requirements',
          'Certified and experienced UTI technicians',
          'Accurate reporting with renewal recommendations'
        ]
      }
    },
    {
      id: 'stores-provision',
      icon: <ShoppingCart className="w-6 h-6" />,
      title: 'Stores & Provision Supplies',
      description: 'Complete vessel provisions and ship stores tailored to operational needs and crew preferences.',
      details: {
        supplies: [
          'Fresh provisions (fruits, vegetables, meat, dairy, bakery)',
          'Bonded stores (duty-free items with customs documentation)',
          'Deck & engine stores (ropes, wires, tools, consumables)',
          'Galley equipment & parts'
        ]
      }
    }
  ];

  const whyChooseUs = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Remote Support',
      description: 'Critical operations support available around the clock'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Rapid Response Teams',
      description: 'Mobilized quickly for emergency situations'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Coverage',
      description: 'Supporting fleets wherever they sail'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Senior Marine Engineers',
      description: '30+ years of combined experience'
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'OEM & Class-Approved Spares',
      description: 'Genuine parts with complete documentation'
    },
    {
      icon: <Anchor className="w-8 h-8" />,
      title: 'Minimized Downtime',
      description: 'Fast service and efficient logistics'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_taste-adventure-3/artifacts/nxfwj90m_fulmar-removebg-preview.png" 
                alt="Fulmar Marine Logo" 
                className="h-16 w-auto"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#1e3a8a] transition-colors font-medium">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-[#1e3a8a] transition-colors font-medium">Services</button>
              <button onClick={() => scrollToSection('why-choose')} className="text-gray-700 hover:text-[#1e3a8a] transition-colors font-medium">Why Us</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#1e3a8a] transition-colors font-medium">Contact</button>
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] hover:from-[#1e40af] hover:to-[#2563eb] text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-slate-900/85 to-cyan-900/90 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1605745341112-85968b19335b" 
            alt="Marine Operations" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Reliable Marine Solutions.
              <br />
              <span className="bg-gradient-to-r from-[#60a5fa] to-[#93c5fd] bg-clip-text text-transparent">
                Global Support.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Expert marine engineering, automation, and spare parts solutions for ship owners and fleet operators across the Middle East, India, and South East Asia.
            </p>
            <p className="text-lg text-[#93c5fd] mb-12">
              Led by senior marine engineers with 30+ years of combined experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: <Clock className="w-6 h-6" />, text: '24/7 Emergency Support' },
              { icon: <Shield className="w-6 h-6" />, text: 'Certified Marine Engineers' },
              { icon: <Package className="w-6 h-6" />, text: 'OEM & Class-Approved Spares' },
              { icon: <Globe className="w-6 h-6" />, text: 'Global Service Network' }
            ].map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="text-[#93c5fd] mb-3">{item.icon}</div>
                  <p className="text-white font-semibold">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] mx-auto mb-6"></div>
            <p className="text-xl text-blue-600 font-semibold">Driven by Marine Professionals</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1613690399151-65ea69478674" 
                alt="Marine Engineering" 
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                With deep shipboard knowledge and hands-on engineering expertise, Fulmar Marine provides dependable technical solutions for vessels operating worldwide. We support both emergency breakdowns and planned maintenance with rapid response teams, genuine spare parts, and class-compliant service delivery.
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Foundation</h3>
                {[
                  '30+ years combined marine engineering expertise',
                  'Strong global partner network',
                  'Reliable service across UAE, India & South East Asia',
                  'Focused on minimizing downtime and improving operational reliability'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#1e3a8a] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive marine solutions delivered by experienced engineers with 24/7 support
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {services.map((service, index) => (
              <AccordionItem 
                key={service.id} 
                value={service.id}
                className="bg-white rounded-xl shadow-lg border-2 border-gray-100 hover:border-[#3b82f6] transition-all duration-300 overflow-hidden"
              >
                <AccordionTrigger className="px-8 py-6 hover:no-underline hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-300">
                  <div className="flex items-center space-x-4 text-left">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600 mt-1">{service.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  <div className="pt-4 space-y-6 border-t border-gray-200">
                    {Object.entries(service.details).map(([key, items]) => (
                      <div key={key}>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {items.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-[#1e3a8a] rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="py-20 px-4 bg-gradient-to-br from-[#1e3a8a] via-slate-800 to-[#1e40af] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose Fulmar Marine
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Excellence in marine engineering backed by experience, reliability, and global reach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <CardContent className="p-8">
                  <div className="text-[#60a5fa] mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Let's Keep Your Fleet Sailing
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* UAE Office */}
            <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">UAE</h3>
                <div className="space-y-3 text-gray-700">
                  <p className="text-center">VUET1980 Compass Building</p>
                  <p className="text-center">Al Hulaila Industrial Zone-FZ</p>
                  <p className="text-center">Ras Al Khaimah</p>
                </div>
              </CardContent>
            </Card>

            {/* Mumbai Office */}
            <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Mumbai, India</h3>
                <div className="space-y-3 text-gray-700">
                  <p className="text-center">302, Geeta Square, Sector 21</p>
                  <p className="text-center">Plot No. 41, Ghansoli</p>
                  <p className="text-center">Navi Mumbai – 400701</p>
                </div>
              </CardContent>
            </Card>

            {/* Kolkata Office */}
            <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Kolkata, India</h3>
                <div className="space-y-3 text-gray-700">
                  <p className="text-center">5ES8A East Tower, Mani Casadona</p>
                  <p className="text-center">Plot No IIF/04, New Town</p>
                  <p className="text-center">Kolkata – 700156</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-[#3b82f6]">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 text-[#1e3a8a] mx-auto mb-3" />
                <p className="text-sm text-gray-600 mb-2">Phone</p>
                <a href="tel:+919684083997" className="text-lg font-bold text-[#1e3a8a] hover:text-[#1e40af] block">
                  +91 9684083997
                </a>
                <a href="tel:+919144935508" className="text-lg font-bold text-[#1e3a8a] hover:text-[#1e40af] block mt-1">
                  +91 9144935508
                </a>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-[#3b82f6]">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-[#1e3a8a] mx-auto mb-3" />
                <p className="text-sm text-gray-600 mb-2">Email</p>
                <a href="mailto:info@fulmarmarine.in" className="text-lg font-bold text-[#1e3a8a] hover:text-[#1e40af]">
                  info@fulmarmarine.in
                </a>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-[#3b82f6]">
              <CardContent className="p-6 text-center">
                <Globe className="w-8 h-8 text-[#1e3a8a] mx-auto mb-3" />
                <p className="text-sm text-gray-600 mb-2">Website</p>
                <a href="https://www.fulmarmarine.in" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-[#1e3a8a] hover:text-[#1e40af]">
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
              <div className="flex items-center mb-4">
                <img 
                  src="https://customer-assets.emergentagent.com/job_taste-adventure-3/artifacts/nxfwj90m_fulmar-removebg-preview.png" 
                  alt="Fulmar Marine Logo" 
                  className="h-14 w-auto"
                />
              </div>
              <p className="text-gray-400">
                Expert marine engineering solutions for vessels worldwide. Available 24/7 for emergencies.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-[#60a5fa] transition-colors">About Us</button>
                <button onClick={() => scrollToSection('services')} className="block text-gray-400 hover:text-[#60a5fa] transition-colors">Services</button>
                <button onClick={() => scrollToSection('why-choose')} className="block text-gray-400 hover:text-[#60a5fa] transition-colors">Why Choose Us</button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-[#60a5fa] transition-colors">Contact</button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Service Areas</h4>
              <div className="space-y-2 text-gray-400">
                <p>🌍 Middle East</p>
                <p>🌍 India</p>
                <p>🌍 South East Asia</p>
                <p className="text-[#60a5fa] font-semibold mt-4">24/7 Emergency Support</p>
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
