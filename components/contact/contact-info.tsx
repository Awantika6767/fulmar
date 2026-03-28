'use client';

import { motion } from 'framer-motion';

export function ContactInfo() {
  const contactDetails = [
    {
      title: 'Corporate Office',
      content: 'Global Maritime Centre\nPort Authority Building\nIndia',
    },
    {
      title: 'Email',
      content: 'info@fulmarmarine.com\nsupport@fulmarmarine.com',
    },
    {
      title: 'Phone',
      content: '+91 (0) 999-999-9999\n+1 (555) 555-5555',
    },
    {
      title: 'Working Hours',
      content: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed',
    },
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="space-y-8">
          {contactDetails.map((detail, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-8"
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-4">{detail.title}</h3>
              <p className="text-slate-300 whitespace-pre-line leading-relaxed">{detail.content}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 rounded-lg p-8 text-center"
        >
          <p className="text-slate-300 mb-4">
            For emergency support and urgent maritime assistance, our team is available around the clock.
          </p>
          <p className="text-cyan-400 font-bold text-lg">Emergency Hotline: +91 (0) 999-999-9999</p>
        </motion.div>
      </div>
    </section>
  );
}
