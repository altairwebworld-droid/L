import { useEffect, useState } from 'react';
import { trackEvent } from '../lib/analytics';
import { motion } from 'motion/react';
import { Calendar, CheckCircle2 } from 'lucide-react';
import TiltCard from '../components/TiltCard';
import { accentFor, signalAccent } from '../content/palette';

export default function Book() {
  const [bookingUrl, setBookingUrl] = useState('');

  useEffect(() => {
    trackEvent('service_page_view', { page: '/book' });
    // Use env var if available, otherwise show a placeholder or prompt manual setup
    const url = import.meta.env.VITE_BOOKING_URL;
    setBookingUrl(url || '');
  }, []);

  return (
    <div className="relative overflow-hidden pt-24 pb-14 px-6 md:px-8 max-w-7xl mx-auto min-h-screen md:pt-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 right-[-6%] h-[26rem] w-[26rem] rounded-full opacity-20 blur-[110px]"
        style={{ background: `radial-gradient(circle, ${signalAccent}, transparent 70%)` }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-3xl mx-auto text-center mb-12"
      >
        <h1 className="display-title mb-5">Book the call that finds your biggest lead leak</h1>
        <p className="text-white text-lg font-light leading-relaxed">
          We will look at where your current system loses attention: website clarity, missed calls, intake friction, booking, CRM handoff, follow-up, dashboards, and source tracking.
        </p>
      </motion.div>

      <section className="relative grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-10">
        {[
          'Find out whether your website tells visitors what to do next.',
          'Review whether your intake and calendar flow captures enough detail.',
          'Map what should happen after a form, call, chat, or booking comes in.',
        ].map((item, index) => (
          <TiltCard key={item}>
            <div className="flex gap-3 p-5">
              <CheckCircle2 className="mt-1 shrink-0" style={{ color: accentFor(index) }} size={18} />
              <p className="text-sm text-stone-300 leading-relaxed font-light">{item}</p>
            </div>
          </TiltCard>
        ))}
      </section>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="floating-card p-2 md:p-4 max-w-4xl mx-auto min-h-[650px] flex flex-col items-center justify-center relative overflow-hidden"
      >
        {bookingUrl ? (
          <iframe 
            src={bookingUrl}
            width="100%" 
            height="100%" 
            frameBorder="0"
            className="w-full h-full min-h-[650px] bg-transparent rounded-xl"
            title="Book an appointment"
          />
        ) : (
          <div className="text-center p-8 z-10 w-full max-w-lg">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: `${signalAccent}26` }}>
              <Calendar className="w-8 h-8" style={{ color: signalAccent }} />
            </div>
            <h3 className="text-2xl font-medium mb-3">Calendar Not Connected</h3>
            <p className="text-stone-300 font-light mx-auto mb-8">
              The sales page is ready for appointments, but the live booking calendar still needs your public calendar link.
            </p>
            <div className="lycore-card p-5 rounded-xl text-left w-full">
              <p className="text-sm text-stone-400 font-medium mb-3">Setup instructions:</p>
              <code className="text-sm break-all block leading-relaxed" style={{ color: signalAccent }}>
                1. Create or publish your CRM appointment calendar link<br/>
                2. Set VITE_BOOKING_URL to that public link<br/>
                3. Restart local dev or redeploy Vercel
              </code>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
