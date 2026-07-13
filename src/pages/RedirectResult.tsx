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
    eyebrow: 'Review Request Received',
    title: 'Your review request is in.',
    description:
      'Thanks for sharing your business details. LYCORE will review your calls, website, and follow-up before reaching out with next steps.',
    steps: [
      'Your submission has been captured and routed to our team.',
      'We will review your website, call handling, and follow-up context.',
      'Book a strategy call when you are ready to walk through the review together.',
    ],
    note: 'All submissions are securely captured and reviewed personally.',
    primaryLabel: 'Book a Strategy Call',
    primaryPath: '/book',
    secondaryLabel: 'Back to What We Build',
    secondaryPath: '/what-we-build',
    eventName: 'audit_redirect_success',
  },
  'booking-success': {
    icon: CalendarCheck,
    eyebrow: 'Meeting Booked',
    title: 'Your strategy call is booked.',
    description:
      'You should receive a calendar confirmation. Bring your website URL, call-handling questions, and follow-up challenges to the call.',
    steps: [
      'Check your email for the calendar confirmation.',
      'Have your website URL and call-handling questions ready.',
      'Review what LYCORE builds if you want to compare options before the call.',
    ],
    note: 'We send automated calendar reminders to make sure nothing is missed.',
    primaryLabel: 'Review What We Build',
    primaryPath: '/what-we-build',
    secondaryLabel: 'Go Home',
    secondaryPath: '/',
    eventName: 'booking_redirect_success',
  },
  'booking-failed': {
    icon: AlertCircle,
    eyebrow: 'Booking Not Completed',
    title: 'The meeting was not booked.',
    description:
      'Something interrupted the booking flow. You can try again or email LYCORE directly and we will help schedule the strategy call.',
    steps: [
      'Try the booking flow again if the calendar page was interrupted.',
      'Email LYCORE if the calendar tool does not load or the available times do not work.',
      'If you already submitted the review form, that submission is separate from the calendar attempt.',
    ],
    note: 'This page is a fallback route. It does not mean your review request failed unless the form itself showed an error.',
    primaryLabel: 'Try Booking Again',
    primaryPath: '/book',
    secondaryLabel: 'Email LYCORE',
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
            <div key={step} className="lycore-card rounded-2xl p-5">
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
