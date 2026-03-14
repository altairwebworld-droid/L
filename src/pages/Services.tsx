import { motion } from 'framer-motion';
import { ArrowRight, Bot, Target, Zap, Clock, Shield, BarChart2 } from 'lucide-react';
import TiltCard from '../components/TiltCard';

export default function Services() {
  const services = [
    {
      icon: <Bot className="text-white/80" size={32} />,
      title: "AI Response Engines",
      tag: "Lead Capture",
      desc: "Custom-trained AI voice and chat agents that handle intake 24/7. They don't just chat—they qualify, capture jurisdictional details, and secure leads when your team is off the clock.",
      features: ["Compliant intake logic", "Instant lead notification", "CRM integration"]
    },
    {
      icon: <BarChart2 className="text-white/80" size={32} />,
      title: "Google Maps Domination",
      tag: "Visibility",
      desc: "Strategic local SEO designed to put your agency in the 'Local 3-Pack'. We optimize your profile, manage reviews, and ensure you're the first name people see during a crisis.",
      features: ["Local keyword targeting", "Review management system", "Competitor gap analysis"]
    },
    {
      icon: <Target className="text-white/80" size={32} />,
      title: "High-Intent PPC / LSA",
      tag: "Lead Gen",
      desc: "Expertly managed Google Local Services Ads and PPC campaigns. We focus on high-intent search terms to drive qualified calls, not just clicks, ensuring maximum ROI for your ad spend.",
      features: ["LSA verification support", "Call tracking & playback", "Negative keyword filtering"]
    },
    {
      icon: <Zap className="text-white/80" size={32} />,
      title: "Conversion-Built Web",
      tag: "Performance",
      desc: "State-of-the-art websites built for one purpose: conversion. Mobile-first, lightning-fast, and designed with high-stakes user psychology to turn panicked visitors into clients.",
      features: ["Sub-second load times", "Frictionless intake forms", "Premium design aesthetic"]
    },
    {
      icon: <Clock className="text-white/80" size={32} />,
      title: "Automated Reminders",
      tag: "Operations",
      desc: "Interactive SMS and email systems that keep defendants on track. Automated court reminders reduce skips and forfeitures without increasing your staff's manual workload.",
      features: ["Two-way SMS capability", "Interactive court date confirmation", "automated check-ins"]
    },
    {
      icon: <Shield className="text-white/80" size={32} />,
      title: "Secure Client Portals",
      tag: "Trust",
      desc: "Professional, secure areas for clients and families to upload documents, check status, and receive updates, reducing client anxiety and phone inquiries.",
      features: ["Encrypted document upload", "Automated status updates", "Branded client experience"]
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest font-bold text-white mb-6"
          >
            Digital Infrastructure
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-medium mb-8 leading-tight"
          >
            Solutions that <i className="text-gradient">scale with urgency.</i>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-stone-400 font-light leading-relaxed"
          >
            We don't offer generic marketing. We build the operational tools and growth systems required to dominate in high-stakes industries like bail bonds.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <TiltCard>
                <div className="p-10 lg:p-12 h-full flex flex-col glass-panel rounded-3xl border border-white/10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {service.icon}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-stone-500 py-1 px-3 border border-white/5 rounded-full">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="text-3xl font-display font-medium mb-6">{service.title}</h3>
                  <p className="text-stone-400 font-light leading-relaxed mb-10 flex-grow">
                    {service.desc}
                  </p>
                  <ul className="space-y-4 mb-10">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-stone-300 font-light">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="mailto:services@lycore.org" className="inline-flex items-center gap-3 text-white text-xs tracking-widest uppercase font-bold hover:gap-5 transition-all group">
                    Request Integration <ArrowRight size={16} />
                  </a>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Custom Solution CTA */}
        <div className="mt-32 p-12 md:p-20 bg-white/5 rounded-[40px] border border-white/10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl font-display font-medium mb-8">Need a Custom OS for Your Agency?</h2>
            <p className="text-stone-400 font-light leading-relaxed mb-10">
              Beyond our core services, we architect bespoke operational systems for specialized industries. If it involves high-stakes lead intake and automated follow-up, we can build it.
            </p>
            <a href="mailto:services@lycore.org" className="btn-3d">
              Book a Strategy Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
