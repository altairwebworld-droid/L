import { motion } from 'motion/react';
import { Mail, MapPin, MessageSquare, CheckCircle2 } from 'lucide-react';
import TiltCard from '../components/TiltCard';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    agency: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-normal mb-8"
        >
          Let's <i className="text-gradient">Connect.</i>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          className="text-xl text-ink-muted font-light leading-relaxed"
        >
          Ready to stop losing leads and start capturing every client opportunity? Reach out to schedule a strategy session.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="perspective-[1000px]"
        >
          <TiltCard>
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-medium mb-10 tracking-wide">Contact Information</h2>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all">
                    <Mail size={24} className="text-white/80" />
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-[0.1em] text-ink-muted mb-2 font-medium">Email Us</h3>
                    <p className="text-ink-muted mb-2 font-light">For all inquiries and strategy session requests.</p>
                    <a href="mailto:services@lycore.org" className="text-xl hover:text-white transition-colors font-light">services@lycore.org</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all">
                    <MessageSquare size={24} className="text-white/80" />
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-[0.1em] text-ink-muted mb-2 font-medium">Strategy Session</h3>
                    <p className="text-ink-muted mb-2 font-light">Book a 30-minute audit of your current intake process.</p>
                    <a href="mailto:services@lycore.org" className="text-xl hover:text-white transition-colors font-light">Request a Time</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all">
                    <MapPin size={24} className="text-white/80" />
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-[0.1em] text-ink-muted mb-2 font-medium">Office</h3>
                    <p className="text-xl font-light leading-relaxed">
                      1209 MOUNTAIN ROAD PL NE STE N<br />
                      ALBUQUERQUE, NM 87110
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="perspective-[1000px]"
        >
          <TiltCard>
            {isSubmitted ? (
              <div className="p-8 md:p-12 text-center py-20">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 size={40} className="text-white" />
                </motion.div>
                <h2 className="text-3xl font-medium mb-4">Message Sent</h2>
                <p className="text-ink-muted font-light">Thank you for reaching out. Our team will contact you shortly to schedule your strategy session.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-sm uppercase tracking-widest text-white border-b border-white/20 pb-1 hover:border-white transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="p-8 md:p-12" onSubmit={handleSubmit}>
                <h2 className="text-3xl font-medium mb-10 tracking-wide">Send a Message</h2>
                
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="firstName" className="block text-sm uppercase tracking-[0.1em] text-ink-muted mb-3 font-medium">First Name</label>
                      <input 
                        required
                        type="text" 
                        id="firstName" 
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-colors font-light"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm uppercase tracking-[0.1em] text-ink-muted mb-3 font-medium">Last Name</label>
                      <input 
                        required
                        type="text" 
                        id="lastName" 
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-colors font-light"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm uppercase tracking-[0.1em] text-ink-muted mb-3 font-medium">Email Address</label>
                    <input 
                      required
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-colors font-light"
                      placeholder="john@agency.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="agency" className="block text-sm uppercase tracking-[0.1em] text-ink-muted mb-3 font-medium">Agency Name</label>
                    <input 
                      required
                      type="text" 
                      id="agency" 
                      value={formData.agency}
                      onChange={(e) => setFormData({...formData, agency: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-colors font-light"
                      placeholder="Doe Bail Bonds"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm uppercase tracking-[0.1em] text-ink-muted mb-3 font-medium">Message</label>
                    <textarea 
                      required
                      id="message" 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-colors font-light resize-none"
                      placeholder="Tell us about your current intake process..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-3d w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </TiltCard>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group h-[400px]"
      >
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200&h=400" 
          alt="Modern Office"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-12 left-12">
          <h3 className="text-3xl font-medium text-white mb-2">Ready to Scale?</h3>
          <p className="text-white/60 font-light">Join the agencies dominating their local markets.</p>
        </div>
      </motion.div>
    </div>
  );
}
