import { motion } from 'motion/react';
import { Globe, MessageSquare, Phone, Zap, BarChart3, Clock, ArrowRight, CheckCircle2, ShieldCheck, Users } from 'lucide-react';
import TiltCard from '../components/TiltCard';

export default function Services() {
  const detailedServices = [
    {
      id: "ai-agents",
      icon: <MessageSquare size={40} className="text-white" />,
      title: "24/7 AI SMS & Chat Agent",
      headline: "Stop the 2 AM Lead Leak. Capture Every Crisis.",
      subheadline: "Your agency shouldn't sleep when your clients are in crisis. Our AI agent secures 100% of your leads instantly.",
      image: "https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&q=80&w=800&h=1000",
      whatItIs: "Our AI agent is a specialized 'crisis-response' engine. It doesn't just chat; it secures revenue. Trained specifically for the bail bonds industry, it handles the panic and urgency of localized search inquiries at any hour, ensuring you are the first point of contact that actually stays on the line.",
      howItWorks: [
        { title: "Zero Lag Response", desc: "Engages leads in under 2 seconds. In the bail industry, speed isn't a feature—it's the only metric that matters." },
        { title: "Empathetic Intake", desc: "Collects defendant and cosigner data with jurisdictional awareness, maintaining a professional and supportive tone." },
        { title: "Intelligent Qualification", desc: "Instantly filters high-value bonds from non-revenue inquiries, notifying your team only when a lead is ready to move." },
        { title: "Safe-Harbor Compliance", desc: "Uses approved jurisdictional phrasing to gather info without making unauthorized legal or financial promises." },
        { title: "Multi-Platform reach", desc: "Available on your website, via SMS, and integrated into your Google Business Profile." }
      ],
      benefits: [
        "Eliminate Missed Inquiries: 100% lead capture, 24/7/365.",
        "Increased Conversion: Be the first agency to say 'We can help' at 2 AM.",
        "Operational Efficiency: No more waking up to missed calls or voicemail tag.",
        "Better Client Data: Receive full intake profiles before you even pick up the phone.",
        "Scale Without Staffing: Handle any volume of inquiries without increasing overhead.",
        "Professional First Impression: Instant, high-quality engagement builds immediate trust."
      ]
    },
    {
      id: "local-seo",
      icon: <BarChart3 size={40} className="text-white" />,
      title: "Local SEO & Map Dominance",
      headline: "Be the First Call. Period. Own the 'Local 3-Pack'.",
      subheadline: "If you're not in the top 3 on Google Maps, you're invisible. We ensure your agency dominates the space where 80% of bail bonds are secured.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800&h=1000",
      whatItIs: "Our 'Map Dominance' strategy is a targeted assault on local search. We optimize your digital presence to ensure your agency is the primary choice for families in distress searching within your county. We solve the 'Ghost Online Presence' problem by making you the most visible authority in your market.",
      howItWorks: [
        { title: "GBP Overhaul", desc: "Advanced optimization of your Google Business Profile, focusing on category dominance and primary keywords." },
        { title: "LSA & Google Guaranteed", desc: "We manage your Google Guaranteed status and Local Services Ads for high-intent, high-trust call generation." },
        { title: "Local Authority Pages", desc: "Creation of hyper-local landing pages for every jail and court jurisdiction you served." },
        { title: "Citation & NAP Cleanup", desc: "Meticulous ensuring of Name, Address, and Phone number consistency across the entire web." },
        { title: "Strategic Review Velocity", desc: "Ethical strategies to outpace competitors in review count and quality sentiment." }
      ],
      benefits: [
        "Maximum Visibility: Hit the 'Local 3-Pack' for your primary service keywords.",
        "Lower Lead Costs: Replace expensive generic ads with high-intent organic traffic.",
        "Trusted Authority: Dominate the platform where clients look for reviews first.",
        "Market Share Capture: Steal leads directly from competitors with inferior search presence.",
        "Sustainable Growth: Build a long-term asset that drives calls without ongoing ad spend."
      ]
    },
    {
      id: "web-design",
      icon: <Globe size={40} className="text-white" />,
      title: "High-Performance Web Assets",
      headline: "A Website That Actually Bonds. Specialized Conversion-Focused Design.",
      subheadline: "Panicked clients need a fast, trustworthy path to a bond. We build mobile-first assets that convert distress into revenue.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800&h=1000",
      whatItIs: "A generic web template fails in a bail bonds crisis. Our websites are built as high-performance conversion tools. They are lightning-fast, mobile-optimized, and hard-coded with psychological triggers that build instant trust when a family is at their lowest point.",
      howItWorks: [
        { title: "Mobile-Crisis Design", desc: "Optimized for the 90% of bail bond users who search from their phone in a parking lot or outside a jail." },
        { title: "Frictionless Intake", desc: "Streamlined digital forms that capture exactly what you need to write the bond, and nothing more." },
        { title: "Instant-Trust UI", desc: "Visual design language that communicates authority, security, and immediate help." },
        { title: "Speed-Focused Dev", desc: "Built with modern frameworks like Remix or Next.js for sub-second load times." },
        { title: "Direct CRM Sync", desc: "Every lead is instantly pushed to your intake team or CRM, with immediate SMS notification." },
        { title: "Compliance Layer", desc: "Built-in legal disclaimers and privacy protections tailored to the bail industry." }
      ],
      benefits: [
        "Higher Conversion Rates: Turn more panicked visitors into secured bonds.",
        "Reduced Staff Workload: Automated data collection replaces manual intake typing.",
        "Professional Brand Image: Stand out from the 'cheap' look of old-school competitors.",
        "Zero-Downtime Reliability: Ensure your front door is always open with enterprise hosting.",
        "Better Lead Tracking: Know exactly where your revenue is coming from with advanced analytics."
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
        >
          Specialized <span className="text-gradient">Services</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          className="text-xl text-ink-muted font-light leading-relaxed"
        >
          Comprehensive digital infrastructure designed to capture, engage, and convert bail bond leads 24/7.
        </motion.p>
      </div>

      <div className="space-y-32 mb-32">
        {detailedServices.map((service, index) => (
          <section key={service.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                <span className="micro-label">{service.title}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                {service.headline.split('.').map((part, i) => (
                  <span key={i} className={i === 1 ? 'text-gradient block mt-2' : ''}>
                    {part}{i === 0 && '.'}
                  </span>
                ))}
              </h2>
              
              <p className="text-xl text-white/90 font-light leading-relaxed italic border-l-2 border-white/20 pl-6">
                {service.subheadline}
              </p>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="micro-label text-white/60">The Impact</h4>
                  <p className="text-ink-muted leading-relaxed font-light">
                    {service.whatItIs}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="micro-label text-white/60">Core Protection</h4>
                    <div className="space-y-4">
                      {service.howItWorks.map((item, idx) => (
                        <div key={idx} className="flex gap-4 group/item">
                          <div className="w-px h-auto bg-white/10 group-hover/item:bg-white/30 transition-colors shrink-0" />
                          <div>
                            <h5 className="text-white/90 font-medium mb-1 tracking-wide">{item.title}</h5>
                            <p className="text-ink-muted text-sm font-light leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="micro-label text-white/60">Revenue Benefits</h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-white/40 mt-0.5 shrink-0" />
                          <span className="text-ink-muted text-sm font-light leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full max-w-xl">
              <TiltCard>
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <div className="text-2xl font-medium text-white tracking-wide">{service.title}</div>
                  </div>
                </div>
              </TiltCard>
            </div>
          </section>
        ))}
      </div>

      {/* Additional Services Grid */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-normal mb-6">More <i className="text-gradient">Solutions</i></h2>
        <p className="text-ink-muted font-light">Specialized tools to streamline every aspect of your bail agency.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 perspective-[1000px]">
        {[
          {
            icon: <Zap size={32} className="text-white/80" />,
            title: "Intake Automation",
            desc: "Streamlined digital forms and document signing that reduces paperwork and speeds up the release process. Get cosigners approved faster.",
            features: ["Digital Document Signing", "Automated Data Entry", "Secure File Uploads"]
          },
          {
            icon: <Clock size={32} className="text-white/80" />,
            title: "Appointment Funnels",
            desc: "Automated scheduling systems for cosigner meetings and payment plan setups. Reduce no-shows and streamline your calendar.",
            features: ["Automated Reminders", "Self-Scheduling Links", "Calendar Sync"]
          },
          {
            icon: <ShieldCheck size={32} className="text-white/80" />,
            title: "Compliance-First Systems",
            desc: "Every tool we build is designed with legal compliance in mind, using approved phrasing and secure data handling.",
            features: ["Safe-Harbor Scripting", "Secure Data Storage", "Audit Logs"]
          }
        ].map((service, index) => (
          <div key={index} className="h-full">
            <TiltCard className="h-full">
              <motion.div 
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6 + (index % 3), repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                className="p-8 md:p-10 group h-full flex flex-col"
              >
                <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-8 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium mb-4 tracking-wide">{service.title}</h3>
                <p className="text-ink-muted leading-relaxed mb-8 font-light text-sm">{service.desc}</p>
                
                <ul className="space-y-3 mt-auto">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs font-medium tracking-wide text-white/60">
                      <div className="w-1 h-1 rounded-full bg-white/30" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </TiltCard>
          </div>
        ))}
      </div>

      <TiltCard>
        <motion.div 
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="p-8 md:p-16 lg:p-24 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-4xl font-normal mb-8">Need a <i className="text-gradient">Custom Solution?</i></h2>
            <p className="text-ink-muted mb-12 max-w-2xl mx-auto font-light leading-relaxed text-lg">
              Every agency operates differently. We can customize our systems to fit your specific workflow, CRM, and intake requirements.
            </p>
            <a href="mailto:services@lycore.org" className="btn-3d group">
              Book a Strategy Call
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </TiltCard>
    </div>
  );
}
