import { useEffect, useState } from 'react';
import { trackEvent } from '../lib/analytics';
import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

export default function Book() {
  const [bookingUrl, setBookingUrl] = useState('');

  useEffect(() => {
    trackEvent('service_page_view', { page: '/book' });
    // Use env var if available, otherwise show a placeholder or prompt manual setup
    const url = import.meta.env.VITE_BOOKING_URL;
    setBookingUrl(url || '');
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 md:px-8 max-w-7xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Book a Strategy Call</h1>
        <p className="text-stone-300 text-lg font-light leading-relaxed">
          Schedule a time to discuss how LyCore can help your bail bond agency capture more leads, automate intake, and connect your CRM.
        </p>
      </motion.div>

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
            <div className="w-16 h-16 bg-accent-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-accent-blue" />
            </div>
            <h3 className="text-2xl font-medium mb-3">Calendar Not Connected</h3>
            <p className="text-stone-300 font-light mx-auto mb-8">
              The booking system is ready, but requires a manual connection to your Zoho Calendar, Zoho Bookings, Cal.com, Calendly, or other scheduling provider.
            </p>
            <div className="p-5 bg-black/40 rounded-xl text-left border border-white/10 w-full">
              <p className="text-sm text-stone-400 font-medium mb-3">Setup instructions:</p>
              <code className="text-sm text-accent-blue break-all block leading-relaxed">
                1. Set VITE_BOOKING_URL to your public booking link<br/>
                2. Set BOOKING_URL to the same link for server webhook payloads<br/>
                3. Optional: set ZOHO_CALENDAR_WEBHOOK_URL for calendar automation<br/>
                4. Restart local dev or redeploy Vercel
              </code>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
