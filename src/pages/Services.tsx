import { motion } from 'motion/react';
import { Globe, MessageSquare, Phone, Zap, BarChart3, Clock, ArrowRight, CheckCircle2, ShieldCheck, Users } from 'lucide-react';
import TiltCard from '../components/TiltCard';

export default function Services() {
  const detailedServices = [
    {
      id: "ai-agents",
      icon: <MessageSquare size={40} className="text-white" />,
      title: "AI SMS & Chat Agents",
      headline: "Never Miss Another Lead. Convert More with AI.",
      subheadline: "Our compliant AI SMS and Chat Agents provide instant, empathetic support, qualifying leads and capturing critical information around the clock.",
      image: "https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&q=80&w=800&h=1000", // Professional woman in support/tech
      whatItIs: "Our AI SMS and Chat Agents are intelligent virtual assistants specifically trained for the unique demands of the bail bonds industry. They are designed to be your agency's first point of contact, capable of handling inbound inquiries and website chats 24 hours a day, 7 days a week. Unlike generic chatbots, our AI is built with a \"Compliance-First\" architecture, ensuring every interaction adheres to legal restrictions and uses approved \"Safe-Harbor\" phrasing.",
      howItWorks: [
        { title: "Instant Engagement", desc: "When a potential client texts or initiates a chat, our AI immediately responds, eliminating wait times and capturing urgent leads." },
        { title: "Empathetic & Compliant Dialogue", desc: "The AI is trained to handle emotional clients with empathy, guiding them through a structured conversation while adhering to legal restrictions." },
        { title: "Dynamic Information Extraction", desc: "Critical data is extracted in real-time and can be integrated directly into your CRM, preparing the lead for a human agent hand-off." },
        { title: "24/7 Availability", desc: "Arrests don't happen on a 9-to-5 schedule. Our AI ensures your agency is always open, capturing leads outside of business hours." },
        { title: "Jurisdictional Awareness", desc: "The AI can be trained to understand and reference specific jurisdictional requirements based on the arrest location." }
      ],
      benefits: [
        "Never Miss a Lead: Capture every inbound inquiry, regardless of time or day.",
        "Reduced Lead Response Time: From minutes to seconds, dramatically increasing conversion rates.",
        "Improved Lead Qualification: Human agents receive pre-qualified leads.",
        "Cost Efficiency: Reduce the need for 24/7 human staffing for initial intake.",
        "Enhanced Client Experience: Provide immediate, professional support during stressful times.",
        "Compliance Assurance: Built-in \"Safe-Harbor\" scripting minimizes legal risks."
      ]
    },
    {
      id: "local-seo",
      icon: <BarChart3 size={40} className="text-white" />,
      title: "Local SEO & Google Maps Takeover",
      headline: "Be the First Call. Own Your Local Bail Bonds Search Results.",
      subheadline: "We ensure your agency appears at the top of Google Maps and local search, capturing high-intent clients when they need you most.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800&h=1000", // Professional man in business setting
      whatItIs: "Local SEO and Google Maps Takeover is our specialized strategy to make your bail bonds agency the most visible and trusted option in your service area. When someone searches for \"bail bonds near me\" or \"bail bonds [City Name],\" our goal is to ensure your agency is not just visible, but dominant. This isn't just about ranking; it's about capturing the urgent, local demand that drives your business.",
      howItWorks: [
        { title: "Google Business Profile (GBP) Optimization", desc: "We meticulously optimize your GBP with accurate information, compelling descriptions, and a robust review strategy." },
        { title: "Mobile-First Website Optimization", desc: "Your website will be designed for lightning-fast loading and seamless experience on mobile devices." },
        { title: "Location-Specific Content", desc: "We create dedicated landing pages for each city or county you serve, filled with unique, localized content." },
        { title: "Citation Building & NAP Consistency", desc: "We ensure your Name, Address, and Phone number are consistent across all online directories." },
        { title: "Review Generation & Management", desc: "We implement strategies to actively solicit positive client reviews and manage feedback professionally." }
      ],
      benefits: [
        "Top-Tier Local Visibility: Appear prominently in Google Maps and the local search pack.",
        "Increased Organic Leads: Drive more qualified traffic from unpaid search results.",
        "Enhanced Credibility: A strong online presence positions your agency as the authoritative choice.",
        "Competitive Advantage: Outrank competitors who neglect their local online presence.",
        "Measurable Growth: Track improvements in rankings, traffic, and inbound inquiries."
      ]
    },
    {
      id: "web-design",
      icon: <Globe size={40} className="text-white" />,
      title: "Modern Website Design",
      headline: "Your Website: More Than a Brochure. It's a Lead-Generating Machine.",
      subheadline: "We build high-performance, mobile-responsive websites designed to convert urgent visitors into paying clients.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800&h=1000", // Team working together
      whatItIs: "Your website is your agency's most important digital asset. It's not just an online brochure; it's a 24/7 sales and information hub. We design and develop modern, intuitive, and highly functional websites specifically tailored for the bail bonds industry. Our focus is on user experience, speed, and conversion, ensuring that every visitor can quickly find the information they need.",
      howItWorks: [
        { title: "Strategic Design", desc: "We craft a clean, professional design that instills trust and guides visitors through a clear path to contact your agency." },
        { title: "Mobile-First Development", desc: "Every website we build is optimized for flawless performance and appearance on all mobile devices." },
        { title: "Speed Optimization", desc: "We implement best practices for fast loading times, ensuring visitors don't abandon your site due to delays." },
        { title: "Conversion-Focused Layout", desc: "Prominent contact options and easy-to-use intake forms are strategically placed to maximize lead capture." },
        { title: "SEO-Ready Architecture", desc: "Built from the ground up with search engine optimization in mind for maximum discoverability." },
        { title: "Secure & Reliable Hosting", desc: "We provide secure, high-performance hosting and ongoing maintenance to protect your digital asset." }
      ],
      benefits: [
        "Increased Lead Conversion: Turn more website visitors into actual clients.",
        "Professional Credibility: A modern website builds immediate trust and authority.",
        "24/7 Accessibility: Clients can access information and contact you anytime.",
        "Enhanced User Experience: Easy navigation and fast loading times keep visitors engaged.",
        "Future-Proof Technology: Built on robust, scalable platforms that can grow with your business.",
        "Seamless Integration: Designed to work perfectly with our AI Voice Agents and Local SEO strategies."
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-normal mb-8"
        >
          Specialized <i className="text-gradient">Services</i>
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
              
              <h2 className="text-4xl md:text-5xl font-normal leading-tight">
                {service.headline.split('.').map((part, i) => (
                  <span key={i} className={i === 1 ? 'text-gradient italic block mt-2' : ''}>
                    {part}{i === 0 && '.'}
                  </span>
                ))}
              </h2>
              
              <p className="text-xl text-white/90 font-light leading-relaxed italic border-l-2 border-white/20 pl-6">
                {service.subheadline}
              </p>

              <div className="space-y-4">
                <h4 className="micro-label text-white/60">What It Is</h4>
                <p className="text-ink-muted leading-relaxed font-light">
                  {service.whatItIs}
                </p>
              </div>

              <div className="space-y-6">
                <h4 className="micro-label text-white/60">How It Works</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.howItWorks.map((item, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center gap-2 font-medium text-white/90">
                        <div className="w-1 h-1 rounded-full bg-white" />
                        {item.title}
                      </div>
                      <p className="text-sm text-ink-muted font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="micro-label text-white/60">Key Benefits</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-ink-muted font-light">
                      <CheckCircle2 size={16} className="text-white/40 mt-0.5 shrink-0" />
                      {benefit}
                    </div>
                  ))}
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
          <TiltCard key={index} className="h-full">
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
