import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, MapPin, Send, ArrowRight, CheckCircle2 } from 'lucide-react';
import TiltCard from '../components/TiltCard';
import React, { useState } from 'react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    agency: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ firstName: '', lastName: '', email: '', agency: '', message: '' });
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
          Request Your <i className="text-stone-200">Custom Solution.</i>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          className="text-xl text-stone-200 font-light leading-relaxed"
        >
          Every agency has unique pain points. Reach out today for a 30-minute infrastructure audit and see how we can eliminate your lead leaks and reduce forfeitures.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          <div className="space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all">
                <Mail size={24} className="text-white/80" />
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.1em] text-stone-200 mb-2 font-medium">Email Us</h3>
                <p className="text-stone-200 mb-2 font-light">For all inquiries and strategy session requests.</p>
                <a href="mailto:services@lycore.org" className="text-xl hover:text-white transition-colors font-light">services@lycore.org</a>
              </div>
            </div>
            
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all">
                <MessageSquare size={24} className="text-white/80" />
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.1em] text-stone-200 mb-2 font-medium">Strategy Session</h3>
                <p className="text-stone-200 mb-2 font-light">Book a 30-minute audit of your current intake process.</p>
                <a href="mailto:services@lycore.org" className="text-xl hover:text-white transition-colors font-light">Request a Time</a>
              </div>
            </div>
            
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all">
                <MapPin size={24} className="text-white/80" />
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.1em] text-stone-200 mb-2 font-medium">Office</h3>
                <p className="text-xl font-light leading-relaxed">
                  1209 MOUNTAIN ROAD PL NE STE N<br />
                  ALBUQUERQUE, NM 87110
                </p>
              </div>
            </div>
          </div>
        </div>

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
                <p className="text-stone-200 font-light">Thank you for reaching out. Our team will contact you shortly to schedule your strategy session.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-sm uppercase tracking-widest text-white border-b border-white/20 pb-1 hover:border-white transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="p-8 md:p-12 space-y-6" onSubmit={handleSubmit}>
                <h2 className="text-3xl font-medium mb-10 tracking-wide">Send a Message</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm uppercase tracking-[0.1em] text-stone-200 mb-3 font-medium">First Name</label>
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
                    <label htmlFor="lastName" className="block text-sm uppercase tracking-[0.1em] text-stone-200 mb-3 font-medium">Last Name</label>
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
                  <label htmlFor="email" className="block text-sm uppercase tracking-[0.1em] text-stone-200 mb-3 font-medium">Email Address</label>
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
                  <label htmlFor="agency" className="block text-sm uppercase tracking-[0.1em] text-stone-200 mb-3 font-medium">Agency Name</label>
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
                  <label htmlFor="message" className="block text-sm uppercase tracking-[0.1em] text-stone-200 mb-3 font-medium">Message</label>
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
                  className="btn-3d w-full disabled:opacity-50 disabled:cursor-not-allowed group flex items-center justify-center gap-3"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </TiltCard>
        </motion.div>
      </div>

      <div className="mt-32 p-12 md:p-20 bg-white/5 rounded-[40px] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl font-medium mb-4">Frequently Asked Questions</h2>
          <p className="text-stone-400 font-light">Have quick questions about our onboarding process or system security?</p>
        </div>
        <a href="/#faq" className="btn-3d-dark flex items-center gap-3">
          View FAQ <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
}
