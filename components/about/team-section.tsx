'use client';

import { motion } from 'framer-motion';

export function TeamSection() {
  const teams = [
    { name: 'Engineering Team', count: '35+', desc: 'Expert engineers with deep marine expertise' },
    { name: 'Operations Team', count: '25+', desc: 'Logistics and supply chain specialists' },
    { name: 'Support Team', count: '30+', desc: '24/7 customer service excellence' },
    { name: 'Innovation Team', count: '10+', desc: 'R&D and technology advancement' },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Expert Team</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A dedicated workforce committed to delivering excellence in every maritime solution
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teams.map((team, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-8 text-center hover:border-cyan-500/60 transition-colors"
            >
              <p className="text-4xl font-bold text-cyan-400 mb-3">{team.count}</p>
              <h3 className="text-xl font-bold text-white mb-2">{team.name}</h3>
              <p className="text-slate-300 text-sm">{team.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
