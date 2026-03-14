import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import TiltCard from '../components/TiltCard';
<<<<<<< HEAD
import React, { useState } from 'react';
=======
>>>>>>> origin/main

export default function Contact() {
  return (
<<<<<<< HEAD
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
=======
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest font-bold text-white mb-6"
            >
              Get in Touch
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-medium mb-8 leading-tight"
            >
              Let's stop the <br/><i className="text-gradient">leak together.</i>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-stone-400 font-light leading-relaxed mb-12"
            >
              Ready to automate your intake and dominate your local market? Reach out for a custom proposal tailored to your agency's scale.
            </motion.p>
>>>>>>> origin/main

            <div className="space-y-8">
              {[
                {
                  icon: <Mail className="text-white/60" size={24} />,
                  label: "Email",
                  value: "services@lycore.org",
                  link: "mailto:services@lycore.org"
                },
                {
                  icon: <Phone className="text-white/60" size={24} />,
                  label: "Priority Support",
                  value: "Available via proposal",
                  link: "#"
                },
                {
                  icon: <MapPin className="text-white/60" size={24} />,
                  label: "Central HQ",
                  value: "Austin, TX - Global Operations",
                  link: "#"
                }
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    {item.icon}
                  </div>
                  <div>
<<<<<<< HEAD
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
=======
                    <div className="text-[10px] uppercase tracking-widest font-bold text-stone-500 mb-1">{item.label}</div>
                    <div className="text-xl font-display font-medium text-stone-200 group-hover:text-white transition-colors">{item.value}</div>
                  </div>
                </motion.a>
              ))}
>>>>>>> origin/main
            </div>
          </div>

<<<<<<< HEAD
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
              <form className="p-8 md:p-12" onSubmit={handleSubmit}>
                <h2 className="text-3xl font-medium mb-10 tracking-wide">Send a Message</h2>
=======
          {/* Form Side */}
          <div className="relative">
            <TiltCard>
              <div className="p-10 md:p-12 glass-panel rounded-[40px] border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full" />
>>>>>>> origin/main
                
                <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<<<<<<< HEAD
                    <div>
                      <label htmlFor="firstName" className="block text-sm uppercase tracking-[0.1em] text-stone-200 mb-3 font-medium">First Name</label>
=======
                    <div className="space-y-3">
                      <label className="micro-label">Full Name</label>
>>>>>>> origin/main
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-white/30 transition-colors font-light"
                      />
                    </div>
<<<<<<< HEAD
                    <div>
                      <label htmlFor="lastName" className="block text-sm uppercase tracking-[0.1em] text-stone-200 mb-3 font-medium">Last Name</label>
=======
                    <div className="space-y-3">
                      <label className="micro-label">Email Address</label>
>>>>>>> origin/main
                      <input 
                        type="email" 
                        placeholder="john@agency.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-white/30 transition-colors font-light"
                      />
                    </div>
                  </div>
<<<<<<< HEAD
                  
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
=======
>>>>>>> origin/main

                  <div className="space-y-3">
                    <label className="micro-label">Agency Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Agency Ltd."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-white/30 transition-colors font-light"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="micro-label">Primary Challenge</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-stone-200 focus:outline-none focus:border-white/30 transition-colors font-light appearance-none">
                      <option value="">Select a challenge...</option>
                      <option value="lead-leak">2 AM Lead Leak</option>
                      <option value="visibility">Local Visibility / SEO</option>
                      <option value="forfeitures">High Bond Forfeitures</option>
                      <option value="qualification">Intake Qualification</option>
                      <option value="other">Other Growth Need</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="micro-label">Message (Optional)</label>
                    <textarea 
                      placeholder="Tell us about your current bottlenecks..."
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-white/30 transition-colors font-light resize-none"
                    />
                  </div>

                  <button className="btn-3d w-full flex items-center justify-center gap-3">
                    Submit Proposal Request <Send size={18} />
                  </button>
                  
                  <p className="text-[10px] text-center text-stone-500 font-light mt-6">
                    By submitting, you agree to our terms of discrete service consultation.
                  </p>
                </form>
              </div>
            </TiltCard>

            {/* Success Message Placeholder */}
            {/* 
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl rounded-[40px] border border-white/10 flex flex-col items-center justify-center text-center p-12 z-20"
            >
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-8">
                <Send size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-display font-medium mb-4">Request Received.</h3>
              <p className="text-stone-400 font-light mb-10">Our analysts will review your agency's profile and reach out within 24 hours.</p>
              <button 
                onClick={() => window.location.reload()}
                className="btn-3d-dark text-xs"
              >
                Back to Form
              </button>
            </motion.div>
            */}
          </div>
        </div>

        {/* FAQ Section Reference */}
        <div className="mt-32 p-12 md:p-20 bg-white/5 rounded-[40px] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl font-display font-medium mb-4">Frequently Asked Questions</h2>
            <p className="text-stone-400 font-light">Have quick questions about our boarding process or system security?</p>
          </div>
          <a href="/#faq" className="btn-3d-dark flex items-center gap-3">
            View FAQ <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
