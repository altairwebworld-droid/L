import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, CircleDot, Layers, ShieldCheck } from 'lucide-react';
import { servicePages, site } from '../siteData';
import TiltCard from '../components/TiltCard';

export default function ServiceDetail() {
  const { pathname } = useLocation();
  const service = servicePages.find((page) => page.path === pathname) ?? servicePages[0];
  const related = service.related
    .map((path) => servicePages.find((page) => page.path === path))
    .filter(Boolean);

  return (
    <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
      <section className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center mb-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            <span className="micro-label">{service.label}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="text-5xl md:text-7xl font-normal tracking-tight leading-[1.05] mb-8"
          >
            {service.h1}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="text-xl text-stone-200 font-light leading-relaxed max-w-3xl mb-10"
          >
            {service.description}
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-5">
            <Link to={site.auditPath} className="btn-3d gap-3">
              {site.primaryCta}
              <ArrowRight size={18} />
            </Link>
            <Link to="/book" className="btn-3d-dark">
              Book a Strategy Call
            </Link>
          </div>
        </div>

        <TiltCard>
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="glass-panel rounded-[32px] p-8 md:p-10 border border-white/10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                <ShieldCheck className="text-white/80" size={28} />
              </div>
              <div>
                <p className="micro-label text-white/50 mb-1">Primary Problem</p>
                <h2 className="text-2xl font-medium">Where leads leak</h2>
              </div>
            </div>
            <p className="text-stone-200 font-light leading-relaxed mb-8">{service.problem}</p>
            <div className="space-y-4">
              {service.benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="text-white/70 mt-1 shrink-0" size={18} />
                  <span className="text-stone-200 font-light">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </TiltCard>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24">
        <div className="glass-panel rounded-[32px] p-8 md:p-10 border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <Layers className="text-white/70" size={24} />
            <h2 className="text-3xl font-medium">What LyCore Builds</h2>
          </div>
          <p className="text-stone-200 font-light leading-relaxed mb-8">{service.explanation}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.included.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-stone-200 font-light leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel rounded-[32px] p-8 md:p-10 border border-white/10">
          <h2 className="text-3xl font-medium mb-8">Implementation Flow</h2>
          <div className="space-y-6">
            {service.process.map((step, index) => (
              <div key={step} className="flex gap-5">
                <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-sm font-medium shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">{step}</h3>
                  <p className="text-sm text-stone-400 font-light leading-relaxed">
                    Each step is prepared for human review before live CRM, calendar, call, or automation credentials are connected.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {service.faqs && (
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-4xl font-normal text-center mb-12">Common Questions</h2>
          <div className="space-y-5">
            {service.faqs.map((faq) => (
              <div key={faq.question} className="glass-panel rounded-2xl border border-white/10 p-6">
                <h3 className="text-lg font-medium mb-3">{faq.question}</h3>
                <p className="text-stone-300 font-light leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mb-24">
        <h2 className="text-3xl font-medium mb-8">Related Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((page) => (
            <Link key={page!.path} to={page!.path} className="glass-panel rounded-2xl border border-white/10 p-6 group hover:border-white/25 transition-colors">
              <CircleDot className="text-white/50 mb-5 group-hover:text-white transition-colors" size={24} />
              <h3 className="text-xl font-medium mb-3">{page!.label}</h3>
              <p className="text-sm text-stone-400 font-light leading-relaxed">{page!.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <TiltCard>
        <div className="p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-normal mb-6">See the lead system gaps first.</h2>
            <p className="text-stone-200 font-light leading-relaxed max-w-2xl mx-auto mb-10">
              Request a free audit of your website, calls, intake, CRM handoff, follow-up, tracking, and missed opportunities.
            </p>
            <Link to={site.auditPath} className="btn-3d gap-3">
              Start the Audit
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </TiltCard>
    </div>
  );
}
