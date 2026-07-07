import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { AlertCircle, ArrowRight, CalendarCheck, CheckCircle2, Mail } from 'lucide-react';
import { trackEvent } from '../lib/analytics';
import { site } from '../siteData';

type RedirectResultProps = {
  type: 'audit-success' | 'booking-success' | 'booking-failed';
};

const resultContent = {
  'audit-success': {
    icon: CheckCircle2,
    eyebrow: 'Audit Request Received',
    title: 'Your lead system audit request is in.',
    description:
      'Thanks for sharing your agency details. LYCORE LLC will review your intake, website, CRM, follow-up, and booking context before the next step.',
    steps: [
      'Your intake form platform should show the submitted agency details.',
      'LYCORE LLC can review the website, call handling, intake, CRM, and follow-up context you provided.',
      'Book a strategy call when you are ready to walk through the audit together.',
    ],
    note: 'All form submissions are securely captured and routed to our team. We ensure your data is handled with the utmost confidentiality.',
    primaryLabel: 'Book a Strategy Call',
    primaryPath: '/book',
    secondaryLabel: 'Back to Services',
    secondaryPath: '/services',
    eventName: 'audit_redirect_success',
  },
  'booking-success': {
    icon: CalendarCheck,
    eyebrow: 'Meeting Booked',
    title: 'Your strategy call is booked.',
    description:
      'You should receive a calendar confirmation from the booking system. Bring your website, CRM, call handling, and lead follow-up questions to the call.',
    steps: [
      'Check your email for the calendar confirmation from the booking platform.',
      'Have your website URL, CRM questions, intake process, and follow-up problems ready.',
      'Review the LYCORE LLC service pages if you want to compare websites, AI answering, dashboards, apps, and automation before the call.',
    ],
    note: 'We set up automated calendar reminders, CRM updates, and notifications to ensure your booking process is seamless and efficient.',
    primaryLabel: 'Review Services',
    primaryPath: '/services',
    secondaryLabel: 'Go Home',
    secondaryPath: '/',
    eventName: 'booking_redirect_success',
  },
  'booking-failed': {
    icon: AlertCircle,
    eyebrow: 'Booking Not Completed',
    title: 'The meeting was not booked.',
    description:
      'Something interrupted the booking flow. You can try again or email LYCORE LLC directly and we will help schedule the strategy call.',
    steps: [
      'Try the booking flow again if the calendar page was interrupted.',
      'Email LYCORE LLC if the calendar tool does not load or the available times do not work.',
      'If you already submitted the audit form, that form submission is separate from the calendar attempt.',
    ],
    note: 'This page is a fallback route. It does not mean your audit form failed unless the intake form itself showed an error.',
    primaryLabel: 'Try Booking Again',
    primaryPath: '/book',
    secondaryLabel: 'Email LYCORE LLC',
    secondaryPath: `mailto:${site.email}`,
    eventName: 'booking_redirect_failed',
  },
} as const;

export default function RedirectResult({ type }: RedirectResultProps) {
  const content = resultContent[type];
  const Icon = content.icon;

  useEffect(() => {
    trackEvent(content.eventName, { path: window.location.pathname });
  }, [content.eventName]);

  const secondaryIsEmail = content.secondaryPath.startsWith('mailto:');

  return (
    <div className="pt-32 pb-24 px-6 md:px-8 max-w-5xl mx-auto min-h-screen flex items-center">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="glass-panel rounded-[32px] border border-white/10 p-8 md:p-14 w-full text-center"
      >
        <div className="w-16 h-16 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mx-auto mb-8">
          <Icon className="text-white/80" size={30} />
        </div>

        <p className="micro-label mb-5">{content.eyebrow}</p>
        <h1 className="text-4xl md:text-6xl font-normal tracking-tight leading-tight mb-6">{content.title}</h1>
        <p className="text-lg text-stone-300 font-light leading-relaxed max-w-2xl mx-auto mb-10">
          {content.description}
        </p>

        <div className="grid md:grid-cols-3 gap-4 text-left mb-8">
          {content.steps.map((step, index) => (
            <div key={step} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-3">
                Step {index + 1}
              </div>
              <p className="text-sm leading-relaxed text-stone-300">{step}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-stone-400 leading-relaxed max-w-3xl mx-auto mb-10">{content.note}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link to={content.primaryPath} className="btn-3d gap-3 w-full sm:w-auto">
            {content.primaryLabel}
            <ArrowRight size={18} />
          </Link>
          {secondaryIsEmail ? (
            <a href={content.secondaryPath} className="btn-3d-dark gap-3 w-full sm:w-auto">
              {content.secondaryLabel}
              <Mail size={18} />
            </a>
          ) : (
            <Link to={content.secondaryPath} className="btn-3d-dark w-full sm:w-auto">
              {content.secondaryLabel}
            </Link>
          )}
        </div>
      </motion.section>
    </div>
  );
}
