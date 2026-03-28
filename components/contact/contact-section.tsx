'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

const contactDetails = [
  {
    icon: MapPin,
    label: 'Corporate Office',
    lines: ['Global Maritime Centre', 'Port Authority Building, India'],
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
  },
  {
    icon: Mail,
    label: 'Email Us',
    lines: ['info@fulmarmarine.com', 'support@fulmarmarine.com'],
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: Phone,
    label: 'Phone',
    lines: ['+91 (0) 999-999-9999', '+1 (555) 555-5555'],
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    lines: ['Mon – Fri: 9:00 AM – 6:00 PM', 'Sat: 10:00 AM – 4:00 PM'],
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass = "w-full bg-slate-800/60 border border-slate-700/60 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:bg-slate-800 transition-all text-sm";

  return (
    <section className="py-16 lg:py-24 bg-slate-950">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto">

          {/* Left — Contact Info (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium uppercase tracking-wider mb-4">
                Contact
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                Let's work{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  together
                </span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our team responds within 1 hour for technical inquiries. Emergency support is available 24/7.
              </p>
            </div>

            {/* Contact detail cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="flex items-start gap-4 bg-slate-900/60 border border-slate-700/50 rounded-2xl p-5 hover:border-cyan-500/30 transition-colors"
                >
                  <div className={`w-10 h-10 rounded-xl ${detail.bg} flex items-center justify-center shrink-0`}>
                    <detail.icon className={`w-5 h-5 ${detail.color}`} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">{detail.label}</div>
                    {detail.lines.map((line) => (
                      <div key={line} className="text-sm text-slate-300 leading-relaxed">{line}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency banner */}
            <div className="bg-gradient-to-br from-cyan-500/15 to-blue-500/15 border border-cyan-500/30 rounded-2xl p-5">
              <p className="text-sm text-slate-300 mb-2">Emergency maritime support available around the clock.</p>
              <a href="tel:+910999999999" className="text-cyan-400 font-semibold text-sm hover:text-cyan-300 transition-colors">
                Emergency Hotline: +91 (0) 999-999-9999
              </a>
            </div>
          </motion.div>

          {/* Right — Contact Form (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-slate-900/60 border border-slate-700/50 rounded-3xl p-7 lg:p-9">
              <h3 className="text-lg font-semibold text-white mb-6">Send us a message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {/* Phone + Subject row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    >
                      <option value="">Select a subject</option>
                      <option value="mechanical">Mechanical Services</option>
                      <option value="spare-parts">Spare Parts Inquiry</option>
                      <option value="ship-stores">Ship Stores</option>
                      <option value="automation">Automation Solutions</option>
                      <option value="emergency">Emergency Support</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your inquiry, vessel details, or requirements..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:opacity-70 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/20 group"
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-center text-sm"
                  >
                    Thank you! We'll get back to you within 1 hour.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
