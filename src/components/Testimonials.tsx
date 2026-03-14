import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import TiltCard from './TiltCard';

const testimonials = [
  {
    quote: "Lycore's AI chat changed our business. We used to miss 30% of our leads because we couldn't respond to inquiries at 3 AM. Now, the AI handles the intake and we just step in to finalize.",
    author: "Marcus Thompson",
    role: "Owner, Thompson Bail Bonds",
    impact: "+45% Lead Capture"
  },
  {
    quote: "The automated SMS response is a game changer. Clients tell us they were about to search for the next agency on Google when they got our text. It keeps them on the hook.",
    author: "Sarah Jenkins",
    role: "Operations Manager, Liberty Release",
    impact: "30s Response Time"
  },
  {
    quote: "Our new website actually looks professional. In this industry, trust is everything. Families feel safe working with us because our digital presence matches our service quality.",
    author: "David Chen",
    role: "CEO, Pacific Bail Group",
    impact: "2x Conversion Rate"
  }
];

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((t, i) => (
        <TiltCard key={i} className="h-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 md:p-10 flex flex-col h-full"
          >
            <div className="flex gap-1 mb-6 text-white/40">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            
            <Quote size={32} className="text-white/10 mb-6 shrink-0" />
            
            <p className="text-ink-muted font-light leading-relaxed mb-8 flex-1 italic">
              "{t.quote}"
            </p>
            
            <div className="pt-8 border-t border-white/5">
              <div className="font-medium tracking-wide mb-1">{t.author}</div>
              <div className="text-xs text-ink-muted uppercase tracking-widest mb-4">{t.role}</div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white">
                <span className="w-1 h-1 rounded-full bg-emerald-500" />
                {t.impact}
              </div>
            </div>
          </motion.div>
        </TiltCard>
      ))}
    </div>
  );
}
