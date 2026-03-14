import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import TiltCard from '../components/TiltCard';

export default function Contact() {
  return (
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
                    <div className="text-[10px] uppercase tracking-widest font-bold text-stone-500 mb-1">{item.label}</div>
                    <div className="text-xl font-display font-medium text-stone-200 group-hover:text-white transition-colors">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="relative">
            <TiltCard>
              <div className="p-10 md:p-12 glass-panel rounded-[40px] border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full" />
                
                <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="micro-label">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-white/30 transition-colors font-light"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="micro-label">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@agency.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-white/30 transition-colors font-light"
                      />
                    </div>
                  </div>

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
