import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { AlertCircle, FileText, LockKeyhole } from 'lucide-react';
import { legalPages, site } from '../siteData';

const privacySections = [
  {
    title: 'Information Collected',
    body: 'LyCore may collect audit form details such as your name, agency, contact information, website, location, CRM context, message, source page, referrer, and UTM data.',
  },
  {
    title: 'How Information Is Used',
    body: 'Submitted information is used to respond to audit requests, prepare lead-system recommendations, measure form activity, and support manually configured CRM or automation workflows.',
  },
  {
    title: 'Analytics And Integrations',
    body: 'Analytics, CRM routing, booking tools, email delivery, chat, and webhook automations require manual setup with real account credentials before production use.',
  },
  {
    title: 'Human Review',
    body: 'AI-supported summaries and workflows are intended to assist staff. Licensed professionals remain responsible for legal, financial, client, and operational decisions.',
  },
];

const termsSections = [
  {
    title: 'Informational Use',
    body: 'The website describes digital marketing, intake, automation, and CRM-readiness services for bail bond agencies. Content is informational and is not legal, financial, or compliance advice.',
  },
  {
    title: 'No Guaranteed Outcomes',
    body: 'LyCore does not guarantee rankings, revenue, client volume, ad performance, bond outcomes, court outcomes, or CRM acceptance by third-party platforms.',
  },
  {
    title: 'Third-Party Services',
    body: 'Calendars, CRMs, email tools, analytics platforms, AI providers, and automation services are controlled by their own terms and setup requirements.',
  },
  {
    title: 'AI Boundaries',
    body: site.aiDisclaimer,
  },
];

export default function Legal() {
  const { pathname } = useLocation();
  const page = legalPages.find((legalPage) => legalPage.path === pathname) ?? legalPages[0];
  const sections = page.path === '/privacy' ? privacySections : termsSections;
  const Icon = page.path === '/privacy' ? LockKeyhole : FileText;

  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-14"
      >
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
          <Icon size={16} className="text-white/70" />
          <span className="micro-label">{page.label}</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-normal tracking-tight mb-6">{page.h1}</h1>
        <p className="text-xl text-stone-200 font-light leading-relaxed">{page.description}</p>
      </motion.div>

      <div className="glass-panel rounded-[32px] border border-white/10 p-8 md:p-12 mb-8">
        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-medium mb-4">{section.title}</h2>
              <p className="text-stone-300 font-light leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>
      </div>

      <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
        <AlertCircle className="text-white/60 mt-1 shrink-0" size={22} />
        <p className="text-sm text-stone-400 font-light leading-relaxed">
          This page is a practical placeholder for launch readiness and should be reviewed by qualified counsel before being relied on as a final policy or agreement.
        </p>
      </div>
    </div>
  );
}
