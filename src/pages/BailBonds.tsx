import { motion } from 'motion/react';
import { ArrowRight, Phone, Clock, Zap, ShieldAlert } from 'lucide-react';
import TiltCard from '../components/TiltCard';

export default function BailBonds() {
  return (
    <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 mb-10 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-white uppercase">Industry Specific Solution</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-normal mb-8 leading-[1.1]"
        >
          The Bail Bond Industry is <br/>
          <i className="text-stone-200">Losing Millions to Slow Response.</i>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-xl text-stone-200 font-light leading-relaxed mb-12"
        >
          When a family member is in jail, they engage the first agency that responds. If you don't answer their inquiry immediately, they move to the next one. Slow intake, outdated websites, and delayed responses are costing you thousands in lost premiums every week.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 perspective-[1000px]">
        <TiltCard className="h-full" variant="red">
          <motion.div 
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="p-8 md:p-12 group h-full"
          >
            <div className="flex items-center gap-5 mb-8">
              <ShieldAlert className="text-red-500" size={40} />
              <h2 className="text-3xl font-medium text-red-500 tracking-wide">The Problem</h2>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                <p className="text-lg text-stone-200 font-light leading-relaxed">Lost revenue from delayed after-hours inquiries.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                <p className="text-lg text-stone-200 font-light leading-relaxed">Low visibility in local search results when families search "bail bonds near me".</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                <p className="text-lg text-stone-200 font-light leading-relaxed">Slow manual intake processes that frustrate stressed clients.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                <p className="text-lg text-stone-200 font-light leading-relaxed">Outdated websites that fail to build trust and authority.</p>
              </li>
            </ul>
          </motion.div>
        </TiltCard>

        <TiltCard className="h-full" variant="white">
          <motion.div 
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="p-8 md:p-12 group h-full"
          >
            <div className="flex items-center gap-5 mb-8">
              <Zap className="text-white" size={40} />
              <h2 className="text-3xl font-medium text-white tracking-wide">The Lycore Solution</h2>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-white shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                <p className="text-lg text-stone-200 font-light leading-relaxed">Automated SMS text-back for every inquiry, instantly engaging the lead.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-white shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                <p className="text-lg text-stone-200 font-light leading-relaxed">High-conversion, lightning-fast websites optimized for local SEO dominance.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-white shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                <p className="text-lg text-stone-200 font-light leading-relaxed">24/7 AI Chatbots that qualify leads and collect defendant info instantly.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-white shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                <p className="text-lg text-stone-200 font-light leading-relaxed">Streamlined digital intake forms and automated appointment scheduling.</p>
              </li>
            </ul>
          </motion.div>
        </TiltCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
        <div>
          <h2 className="text-4xl font-normal mb-8 leading-tight">Your Agency, <br/><i className="text-stone-200">Upgraded.</i></h2>
          <p className="text-lg text-stone-200 leading-relaxed mb-8 font-light">
            We don't just build websites; we build systems that work while you sleep. Our AI agents handle the initial intake, our SEO ensures you're the first choice, and our automation keeps the process moving.
          </p>
          <div className="space-y-4">
            {["24/7 Lead Capture", "Automated Compliance", "Local Market Dominance"].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-white/40" />
                <span className="text-stone-200 font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative perspective-[1000px]">
          <TiltCard>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Professional Bail Bondsman"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </TiltCard>
        </div>
      </div>

      <div className="text-center mb-20">
        <h2 className="text-4xl font-normal mb-6">How We <i className="text-stone-200">Capture Every Lead</i></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 perspective-[1000px]">
        {[
          {
            icon: <Phone size={32} className="text-white/80" />,
            title: "Missed Call Text-Back",
            desc: "When a lead is captured, our system instantly texts them (e.g., 'Hi, this is [Agency]. How can we help you with a bond today?'). This keeps them engaged instead of searching for a competitor."
          },
          {
            icon: <Clock size={32} className="text-white/80" />,
            title: "24/7 AI Intake",
            desc: "Our intelligent chatbots live on your website and qualify leads 24/7. They collect the defendant's name, booking number, and jail location, then instantly notify your team."
          },
          {
            icon: <Zap size={32} className="text-white/80" />,
            title: "Instant Authority",
            desc: "We build modern, authoritative websites that load instantly on mobile devices. When a stressed family member lands on your site, they immediately know they are dealing with professionals."
          }
        ].map((feature, i) => (
          <TiltCard key={i} className="h-full">
            <motion.div 
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
              className="p-8 md:p-10 text-center flex flex-col items-center group h-full"
            >
              <div className="w-16 h-16 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-8 text-white/80 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-medium mb-4 tracking-wide">{feature.title}</h3>
              <p className="text-stone-200 font-light leading-relaxed">{feature.desc}</p>
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
            <h2 className="text-4xl md:text-5xl font-normal mb-8 tracking-tight">Stop Losing Premiums to <i className="text-stone-200">Slower Competitors.</i></h2>
            <p className="text-xl text-stone-200 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Upgrade your agency's digital infrastructure today and start capturing every client opportunity.
            </p>
            <a href="mailto:services@lycore.org" className="btn-3d group">
              Book a Strategy Session
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </TiltCard>
    </div>
  );
}
