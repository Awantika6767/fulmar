'use client';

import { motion } from 'framer-motion';

export function Milestones() {
  const milestones = [
    { year: '2003', title: 'Foundation', description: 'Fulmar Marine established with a vision to revolutionize maritime services' },
    { year: '2008', title: 'Expansion', description: 'Extended services across major global ports and shipping hubs' },
    { year: '2015', title: 'Innovation', description: 'Launched advanced automation and digital solutions for vessels' },
    { year: '2023', title: 'Leadership', description: 'Recognized as industry leader in marine engineering excellence' },
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Key Milestones
        </motion.h2>

        <div className="space-y-8">
          {milestones.map((milestone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              <div className="flex-shrink-0 w-24">
                <p className="text-3xl font-bold text-cyan-400">{milestone.year}</p>
              </div>
              <div className="flex-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                <p className="text-slate-300">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
