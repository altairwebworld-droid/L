import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Phone, MessageSquare, Globe, Zap, Clock, BarChart3, Shield, Users, Bot, Sparkles, Target } from 'lucide-react';

import TiltCard from '../components/TiltCard';
import SplineScene from '../components/SplineScene';
import AIChatDemo from '../components/AIChatDemo';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-start items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_50%)] z-0" />
        
        {/* Directional Lighting & Text Readability Overlays */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.95)_100%)] pointer-events-none" />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 via-black/40 to-black/95 pointer-events-none" />
        
        {/* Spline 3D Scene */}
        <div className="absolute inset-0 z-10 flex items-start justify-center pt-20 pointer-events-auto overflow-hidden opacity-60">
          <div className="relative flex items-center justify-center w-full h-full max-w-5xl">
            <SplineScene url="https://my.spline.design/powercopycopy-KUOVCO8PM7olZbrkuid9HBWM-SEH/" />
          </div>
        </div>

        <div className="max-w-5xl mx-auto w-full relative z-20 flex flex-col items-center text-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-10 pointer-events-auto"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,1)] animate-pulse" />
            <span className="micro-label text-[10px] tracking-[0.25em]">Strategic Growth Systems</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-10 max-w-5xl mx-auto leading-[0.95] text-glow-strong"
          >
            Don't Lose Leads <br className="hidden md:block" />
            <span className="text-gradient drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">at 2:00 AM.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-stone-400 max-w-3xl mx-auto mb-12 leading-relaxed font-medium text-glow-strong"
          >
            We build profit-driving engines for specialized agencies. <br className="hidden sm:block" /> Stop reactive intake. Start dominant growth.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full sm:w-auto pointer-events-auto"
          >
            <a href="mailto:services@lycore.org" className="btn-3d w-full sm:w-auto text-sm px-10 py-5">
              Secure Your Agency
            </a>
            <Link to="/services" className="btn-3d-dark w-full sm:w-auto group text-sm px-10 py-5">
              Our Methodology <ArrowRight size={18} className="ml-3 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Trust/Clarity Strip */}
      <section className="border-y border-white/5 bg-bg-alt/30 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center micro-label mb-10">Solving Critical Pain Points for specialized agencies</p>
          <div className="flex flex-wrap justify-center gap-16 md:gap-32 opacity-40 grayscale">
            <div className="text-2xl font-display font-medium tracking-wide">BailBonds Pro</div>
            <div className="text-2xl font-display font-medium tracking-wide">SecureRelease</div>
            <div className="text-2xl font-display font-medium tracking-wide">FastTrack Bail</div>
            <div className="text-2xl font-display font-medium tracking-wide">Liberty Bonds</div>
          </div>
        </div>
      </section>

      {/* 3. Problem Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-normal mb-8 leading-tight">The Bail Bond Industry is <br/><i className="text-gradient">Bleeding Revenue</i> to Slow Response.</h2>
            <p className="text-ink-muted text-lg mb-10 leading-relaxed font-light">
              When a family member is in jail, they engage the first agency that responds. If you don't answer their inquiry immediately, they move to the next one. Slow intake, outdated websites, and "ghost" online presences are costing you thousands in lost premiums every week.
            </p>
            <ul className="space-y-6">
              {[
                "Lost revenue from the 2 AM Lead Leak",
                "High bond forfeitures from missed court dates",
                "Invisible online presence and low local visibility",
                "High ad spend wasted on unqualified leads"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                  <span className="text-ink-muted font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative perspective-[1000px]">
            <TiltCard>
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800&h=600" 
                  alt="Stressed family member"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-8 left-8 right-8 p-6 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                      <Phone className="text-white/80" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm tracking-wide">2 AM Lead Leak Detected</h3>
                      <p className="text-[10px] text-ink-muted font-light">Lead lost to competitor in 60s</p>
                    </div>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full w-full overflow-hidden">
                    <motion.div 
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="h-full bg-white/40 w-1/3"
                    />
                  </div>
                </motion.div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* 4. Solution Section */}
      <section id="solutions" className="max-w-7xl mx-auto px-6 text-center pt-16">
        <h2 className="text-4xl md:text-6xl font-normal mb-8">The Lycore <br/><i className="text-gradient">Client Capture System</i></h2>
        <p className="text-xl text-ink-muted max-w-3xl mx-auto mb-20 font-light leading-relaxed">
          An end-to-end infrastructure designed specifically to solve your toughest operational challenges and dominate local search.
        </p>
      </section>

      {/* 5. Service Cards */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1000px]">
          {[
            {
              icon: <MessageSquare size={24} />,
              title: "24/7 AI Voice & Chat Agent",
              desc: "Instant, compliant lead capture that stops the 2 AM leak. Qualifies leads and gathers data before you wake up."
            },
            {
              icon: <Clock size={24} />,
              title: "Automated Reminders",
              desc: "Reduce bond forfeitures with interactive SMS and email reminders. Keep defendants on track automatically."
            },
            {
              icon: <BarChart3 size={24} />,
              title: "Google Maps Takeover",
              desc: "We ensure your agency dominates local search, hitting the 'Local 3-Pack' for maximum visibility."
            },
            {
              icon: <Target size={24} />, // Changed from TargetedIcon
              title: "Targeted PPC & LSAs",
              desc: "Efficient high-quality lead generation. We manage Google Guaranteed LSAs that drive high-intent calls."
            },
            {
              icon: <Users size={24} />,
              title: "Proactive Communication",
              desc: "Secure portals and automated status updates that reduce client anxiety and manual staff workload."
            },
            {
              icon: <Globe size={24} />,
              title: "Conversion-Optimized Web",
              desc: "Mobile-first, high-performance websites designed to convert panicked visitors into clients in 60 seconds."
            }
          ].map((service, i) => (
            <div key={i} className="h-full">
              <TiltCard className="h-full">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-8 md:p-10 group h-full flex flex-col"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all mb-8 shrink-0">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-medium mb-4 tracking-wide">{service.title}</h3>
                  <p className="text-ink-muted font-light leading-relaxed flex-grow">{service.desc}</p>
                </motion.div>
              </TiltCard>
            </div>
          ))}
        </div>
      </section>

      {/* 5.5 AI Chat Demo Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <AIChatDemo />
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest font-bold text-white mb-6">
              <Sparkles size={12} className="text-white" />
              Live Demo
            </div>
            <h2 className="text-4xl md:text-5xl font-normal mb-8 leading-tight">See the AI <br/><i className="text-gradient">Solution in Action.</i></h2>
            <p className="text-ink-muted text-lg mb-8 leading-relaxed font-light">
              Our AI doesn't just "chat." It solves the lead leak. It qualifies, gathers critical jurisdictional data, and ensures your team only engages with revenue-ready clients.
            </p>
            <div className="space-y-6">
              {[
                { title: "Stop the Leak", desc: "Captures and secures 100% of leads instantly, eliminating the 2 AM drop-off." },
                { title: "Smarter Qualification", desc: "Filters out 'tire-kickers' so your agents focus on high-potential bonds." },
                { title: "Compliance-First", desc: "Trained with jurisdictional logic to gather info without making legal promises." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Bot size={18} className="text-white/60" />
                  </div>
                  <div>
                    <h4 className="font-medium tracking-wide mb-1">{item.title}</h4>
                    <p className="text-sm text-ink-muted font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. How it works */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-normal mb-6">Our Problem-First Process</h2>
          <p className="text-ink-muted text-lg font-light">A strategic roadmap to reclaiming your agency's profit.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2 z-0" />
          
          {[
            { step: "01", title: "Pain Point Audit", desc: "We identify exactly where you're losing money—from missed calls to high forfeitures." },
            { step: "02", title: "Strategic Build", desc: "We deploy the Lycore System: AI intake, Google Maps dominance, and automated reminders." },
            { step: "03", title: "Domination & Growth", desc: "We monitor performance and ROI, ensuring your agency stays at the top of the market." }
          ].map((item, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center bg-bg p-8 rounded-2xl">
              <div className="w-20 h-20 rounded-full bg-bg-card border border-white/10 flex items-center justify-center text-2xl font-display font-medium text-white mb-8 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                {item.step}
              </div>
              <h3 className="text-2xl font-medium mb-4 tracking-wide">{item.title}</h3>
              <p className="text-ink-muted font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Outcomes */}
      <section className="border-y border-white/5 bg-bg-alt/30 py-16 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { metric: "100%", label: "Lead Capture", desc: "Never miss a 2 AM crisis." },
              { metric: "40%", label: "Skip Reduction", desc: "Lower forfeitures automatically." },
              { metric: "Top 3", label: "Map Visibility", desc: "Dominate the local search." },
              { metric: "Measurable", label: "Actual ROI", desc: "Solutions that pay for themselves." }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl md:text-6xl font-display font-normal text-glow mb-4">{stat.metric}</div>
                <div className="text-lg font-medium mb-3 tracking-wide">{stat.label}</div>
                <div className="text-sm text-ink-muted font-light">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7.5 Testimonials Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-normal mb-6">Proof of <i className="text-gradient">Performance</i></h2>
          <p className="text-ink-muted text-lg font-light max-w-2xl mx-auto">We measure success by the reduction in your pain and the growth of your profit.</p>
        </motion.div>
        <Testimonials />
      </section>

      {/* 8. Industry Authority */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <TiltCard>
          <motion.div 
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="p-8 md:p-16 lg:p-20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-normal mb-8 leading-tight">The Bail Bond <br/><i className="text-gradient">Problem-Solvers.</i></h2>
                <p className="text-ink-muted text-lg mb-10 leading-relaxed font-light">
                  Generic agencies don't understand the urgency of a bail bond lead. We know that if you don't respond in 60 seconds, the client is gone. Our systems are built specifically for the high-stakes, time-sensitive nature of the bail industry.
                </p>
                <a href="mailto:services@lycore.org" className="inline-flex items-center gap-3 text-white text-sm tracking-[0.1em] uppercase font-bold hover:text-white/70 transition-colors group">
                  Get Your Personalized Proposal <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center gap-4 border border-white/10">
                  <Shield className="text-white/80" size={32} />
                  <span className="font-medium tracking-wide">Compliance First</span>
                </div>
                <div className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center gap-4 mt-12 border border-white/10">
                  <Zap className="text-white/80" size={32} />
                  <span className="font-medium tracking-wide">Instant Growth</span>
                </div>
              </div>
            </div>
          </motion.div>
        </TiltCard>
      </section>

      {/* 11. FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-normal text-center mb-16">Solving Your Doubts</h2>
        <div className="space-y-6">
          {[
            { q: "How quickly can you deploy the Client Capture System?", a: "Most systems are fully operational within 14-21 days, directly addressing your agency's most urgent bottlenecks." },
            { q: "Do I need to replace my current website?", a: "Not always. We can integrate our AI chat and SMS systems into your existing site, although a conversion-optimized rebuild usually delivers the highest ROI." },
            { q: "How does the AI handle jurisdictional compliance?", a: "Our AI is trained with specific jurisdictional logic and 'Safe-Harbor' phrasing, ensuring it gathers info without making unauthorized legal promises." },
            { q: "Is the system secure for high-stakes defendant data?", a: "Yes, we use enterprise-grade encryption to ensure every piece of intake data is handled with the highest level of security and privacy." }
          ].map((faq, i) => (
            <div key={i} className="glass-panel p-8 rounded-2xl border border-white/5">
              <h3 className="font-medium text-xl mb-4 tracking-wide">{faq.q}</h3>
              <p className="text-ink-muted font-light leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 12. Final CTA */}
      <section className="max-w-5xl mx-auto px-6 text-center py-16">
        <TiltCard>
          <motion.div 
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="p-8 md:p-16 lg:p-24 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-normal mb-8 tracking-tight">Ready for a Solution <br/><i className="text-gradient">That Pays for Itself?</i></h2>
              <p className="text-xl text-ink-muted max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                Stop losing clients to agencies with faster response times. Upgrade your digital infrastructure and dominate your local market today.
              </p>
              <a href="mailto:services@lycore.org" className="btn-3d">
                Request Your Custom Solution
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </TiltCard>
      </section>
    </div>
  );
}
