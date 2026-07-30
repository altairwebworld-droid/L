import { ArrowUpRight, CalendarDays, Check } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useEffect } from 'react';
import { trackEvent } from '../lib/analytics';

const bookingUrl = 'https://cal.com/lycorellc/discovery-call';
const embeddedBookingUrl = `${bookingUrl}?embed=true&theme=light`;

const reviewPoints = [
  'Find where calls and website enquiries are being lost.',
  'Review whether intake captures the details your team needs.',
  'Map the shortest route from first contact to a booked opportunity.',
] as const;

export default function Book() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    trackEvent('service_page_view', { page: '/book' });
  }, []);

  return (
    <main className="booking-page">
      <motion.header
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="booking-page__header"
      >
        <p className="booking-page__eyebrow"><CalendarDays aria-hidden="true" /> Discovery call</p>
        <h1>Book the call that finds your biggest lead leak.</h1>
        <p>Choose a time below. We will review your call handling, website journey, intake, booking, and follow-up.</p>
      </motion.header>

      <ol className="booking-benefits" role="list">
        {reviewPoints.map((point, index) => (
          <li key={point}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <Check aria-hidden="true" />
            <p>{point}</p>
          </li>
        ))}
      </ol>

      <motion.section
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="booking-frame"
        aria-label="LYCORE discovery call calendar"
      >
        <iframe
          src={embeddedBookingUrl}
          title="Book a LYCORE discovery call"
          allow="camera; microphone; fullscreen; payment"
          loading="eager"
        />
      </motion.section>

      <p className="booking-page__fallback">
        Calendar not displaying?{' '}
        <a href={bookingUrl} target="_blank" rel="noreferrer">
          Open the booking page <ArrowUpRight aria-hidden="true" />
        </a>
      </p>
    </main>
  );
}
