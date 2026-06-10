import { motion } from 'motion/react';
import { CheckCircle2, ClipboardCheck, Gauge, PhoneCall } from 'lucide-react';
import AuditLeadForm from '../components/AuditLeadForm';
import { auditPage, site } from '../siteData';

const auditItems = [
  'Website and service-page clarity',
  'After-hours call capture',
  'Form, chat, and intake friction',
  'CRM and source tracking readiness',
  'Follow-up workflow gaps',
  'Booking, dashboard, and app opportunities',
];

export default function Audit() {
  return (
    <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
      <section className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-14 items-start">
        <div className="lg:sticky lg:top-32">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <ClipboardCheck size={16} className="text-white/70" />
            <span className="micro-label">{auditPage.label}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="text-5xl md:text-7xl font-normal tracking-tight leading-[1.05] mb-8"
          >
            {auditPage.h1}
          </motion.h1>
          <p className="text-xl text-white font-light leading-relaxed mb-10">{auditPage.description}</p>

          <div className="glass-panel rounded-[32px] border border-white/10 p-6 md:p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                <Gauge className="text-white/80" size={24} />
              </div>
              <h2 className="text-2xl font-medium">What gets reviewed</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {auditItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="text-white/60 mt-1 shrink-0" size={17} />
                  <span className="text-sm text-stone-300 font-light leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-start gap-4 text-sm text-white font-light leading-relaxed">
            <PhoneCall className="text-white/50 mt-1 shrink-0" size={20} />
            <p>{site.aiDisclaimer} The audit is informational and does not guarantee rankings, revenue, or legal outcomes.</p>
          </div>
        </div>

        <AuditLeadForm />
      </section>
    </div>
  );
}
