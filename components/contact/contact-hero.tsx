'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function ContactHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/port-aerial.jpg"
          alt="Aerial view of shipping port"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-slate-950/90" />
      </div>
      
      {/* Animated Orbs - contained within section */}
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <div className="absolute top-10 left-0 w-64 md:w-96 h-64 md:h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse -translate-x-1/3"></div>
        <div className="absolute bottom-10 right-0 w-64 md:w-96 h-64 md:h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000 translate-x-1/3"></div>
      </div>

      <div className="relative container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6"
        >
          Get In{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Touch
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl text-slate-300 max-w-2xl mx-auto"
        >
          Connect with our team for inquiries, support, or partnership opportunities
        </motion.p>
      </div>
    </section>
  );
}
