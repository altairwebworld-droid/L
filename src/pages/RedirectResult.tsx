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
      'Thanks for sharing your agency details. LyCore will review your intake, website, CRM, follow-up, and booking context before the next step.',
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
      'Something interrupted the booking flow. You can try again or email LyCore directly and we will help schedule the strategy call.',
    primaryLabel: 'Try Booking Again',
    primaryPath: '/book',
    secondaryLabel: 'Email LyCore',
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
