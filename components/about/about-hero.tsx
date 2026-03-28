'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/team-work.jpg"
          alt="Marine engineering team"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-slate-950/90" />
      </div>
      
      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-0 w-64 md:w-96 h-64 md:h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/3"></div>
        <div className="absolute bottom-10 right-0 w-64 md:w-96 h-64 md:h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/3"></div>
      </div>

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            About{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Fulmar Marine
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-slate-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Leading specialists in marine engineering and maritime solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-block bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 rounded-lg px-6 py-2"
          >
            <p className="text-cyan-400 font-semibold">Trusted by maritime industries worldwide</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
