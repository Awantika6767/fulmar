"use client"

import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Mechanical Repair', href: '/services/mechanical' },
    { name: 'Spare Parts', href: '/services/spare-parts' },
    { name: 'Ship Stores', href: '/services/ship-stores' },
    { name: 'Automation', href: '/services/automation' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Why Fulmar', href: '/about#why-fulmar' },
    { name: 'Global Footprint', href: '/about#global' },
    { name: 'Contact', href: '/contact' },
  ],
  support: [
    { name: '24/7 Emergency', href: '/contact#emergency' },
    { name: 'Request Quote', href: '/contact#quote' },
    { name: 'Vendor Registration', href: '/contact#vendor' },
  ],
}

export function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center font-bold text-xl">
                <img src="/logos/logo.ico" alt="Logo" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-xl tracking-tight">
                  Fulmar Marine
                </span>
                <span className="text-xs tracking-widest uppercase text-primary-foreground/70">
                  Services
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed max-w-md mb-8">
              Independent marine engine specialists providing technical solutions for planned maintenance,
              performance recovery, and catastrophic engine casualty worldwide.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+971000000000"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
              >
                <Phone className="w-5 h-5" />
                <span>24/7 Emergency Hotline</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
              <a
                href="mailto:info@fulmarmarine.com"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
              >
                <Mail className="w-5 h-5" />
                <span>info@fulmarmarine.com</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span>UAE | India | Singapore | Middle East</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm tracking-wider uppercase mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm tracking-wider uppercase mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-sm tracking-wider uppercase mb-5">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              {new Date().getFullYear()} Fulmar Marine Services. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
