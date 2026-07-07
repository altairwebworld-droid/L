import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import TiltCard from './TiltCard';

const trustNotes = [
  {
    title: 'Verified Results',
    body: 'We only publish authentic client results, reviews, and case studies. Every success story shared is a real outcome from a partnered agency.',
    status: '100% Authentic',
  },
  {
    title: 'Human-in-control AI',
    body: 'AI support handles initial intake, summaries, and follow-up, ensuring licensed professionals have the clean data they need to make the final decisions.',
    status: 'Agent Empowered',
  },
  {
    title: 'Measured improvement',
    body: 'Every SEO campaign, form, CRM integration, and analytics setup is tracked meticulously so you can see clear, measurable growth over time.',
    status: 'Data-Driven',
  },
];

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {trustNotes.map((note, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <TiltCard className="h-full">
            <div className="p-8 md:p-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-6">
                <CheckCircle2 size={20} className="text-white/70" />
              </div>

              <h3 className="text-2xl font-normal tracking-tight mb-4">{note.title}</h3>
              <p className="text-ink-muted font-light leading-relaxed mb-8 flex-1">{note.body}</p>
              
              <div className="pt-8 border-t border-white/5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white">
                  <span className="w-1 h-1 rounded-full bg-emerald-500" />
                  {note.status}
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      ))}
    </div>
  );
}
