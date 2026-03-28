'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function CompanyStory() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-slate-300 text-lg mb-4 leading-relaxed">
              Fulmar Marine has been a pioneering force in the maritime industry, delivering exceptional engineering solutions and comprehensive marine support services. With decades of expertise, we have established ourselves as a trusted partner for vessel operators and maritime enterprises globally.
            </p>
            <p className="text-slate-300 text-lg mb-4 leading-relaxed">
              Our commitment to excellence, innovation, and customer satisfaction has made us the preferred choice for mechanical support, spare parts provision, ship stores, and advanced automation systems.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              We combine traditional maritime expertise with cutting-edge technology to deliver solutions that keep vessels operating efficiently and safely in every corner of the world.
            </p>
            
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 relative h-64 rounded-xl overflow-hidden"
            >
              <Image
                src="/images/ship-bow.jpg"
                alt="Cargo ship at sea"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { title: 'Years of Service', value: '20+' },
              { title: 'Global Reach', value: '50+' },
              { title: 'Expert Team', value: '100+' },
              { title: 'Satisfied Clients', value: '500+' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-6 text-center"
              >
                <p className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</p>
                <p className="text-slate-300 text-sm">{stat.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
