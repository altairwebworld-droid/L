import { motion } from 'framer-motion';
import { Shield, Target, Award, CheckCircle2, ArrowRight, Zap } from 'lucide-react';
import TiltCard from '../components/TiltCard';

export default function About() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
          >
            Built for the <br/>
            <span className="text-stone-200">Speed of Bail.</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            className="text-lg text-stone-200 leading-relaxed mb-8 font-medium"
          >
            Lycore was founded on a simple realization: the bail industry operates at lightning speed, but its technology was stuck in the past. We're here to bridge that gap with high-performance digital infrastructure.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-stone-200 leading-relaxed mb-12 font-medium"
          >
            We build the digital infrastructure that ensures you are the agency they find, the agency that responds instantly, and the agency they trust to handle their case.
          </motion.p>
          
          <motion.a 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            href="mailto:services@lycore.org" 
            className="btn-3d group"
          >
            Work With Us
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Vision/Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <TiltCard>
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative p-8 md:p-12 h-full flex flex-col justify-center items-center text-center glass-panel rounded-3xl border border-white/10"
            >
              <div className="text-7xl font-display font-normal text-glow mb-6">60s</div>
              <h3 className="text-2xl font-medium mb-4 tracking-wide">The Golden Window</h3>
              <p className="text-stone-200 max-w-xs font-light leading-relaxed">
                If you don't engage a bail lead within 60 seconds, your chance of conversion drops by 400%. Our systems guarantee instant engagement.
              </p>
            </motion.div>
          </TiltCard>
          <TiltCard>
            <div className="p-10 h-full bg-white/5 rounded-3xl border border-white/5 flex flex-col justify-center">
              <h3 className="text-2xl font-display font-medium mb-6">Our Vision</h3>
              <p className="text-stone-400 font-light leading-relaxed">
                To be the indispensable growth partner for high-stakes service industries, setting the standard for response time, compliance, and digital excellence.
              </p>
            </div>
          </TiltCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-24">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-normal mb-8 tracking-tight">A Message from <br/><i className="text-stone-200">Our Founder</i></h2>
            <div className="space-y-6 text-lg text-stone-200 font-light leading-relaxed">
              <p>
                "The bail bond industry is the backbone of the judicial system's efficiency, yet it is often the most underserved by modern technology. In bail, you aren't just writing a bond; you are managing high-stakes risk and providing a lifeline to families during their most vulnerable moments."
              </p>
              <p>
                "I founded Lycore because I saw a massive gap between the grit of the bail industry and the sophistication of modern AI. You shouldn't have to be a tech expert to dominate your local market. You should be able to focus on your clients while your digital infrastructure secures your revenue."
              </p>
              <p>
                "We don't just 'build websites.' We deploy a strategic framework designed to stop the 2 AM Lead Leak and reduce forfeitures. Whether you're navigating the strict regulations of California, the competitive landscape of Texas, or the high-volume jurisdictions of Florida and New York, our mission is to ensure you are the first choice, every single time."
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative perspective-[1000px]">
            <TiltCard>
              <div className="p-8 md:p-12 bg-white/5 rounded-3xl border border-white/10">
                <h3 className="text-2xl font-medium mb-8 tracking-wide">Why Specialized Support Matters</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-px h-12 bg-white/20 shrink-0" />
                    <p className="text-stone-200 font-light">
                      <b>Crisis Infrastructure:</b> Bail bonds operate in crisis mode 24/7. Your technology must be as resilient as your agency.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-px h-12 bg-white/20 shrink-0" />
                    <p className="text-stone-200 font-light">
                      <b>Compliance Certainty:</b> In a regulated industry, 'close enough' doesn't work. We build compliance into every line of code.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-px h-12 bg-white/20 shrink-0" />
                    <p className="text-stone-200 font-light">
                      <b>Revenue Protection:</b> We don't measure success in clicks; we measure it in secured bonds and reduced skips.
                    </p>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>

        <section className="mb-24">
          <h2 className="text-4xl font-normal mb-16 text-center tracking-tight">The <i className="text-stone-200">Operational Shield</i></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                letter: "A",
                title: "Leak Elimination",
                desc: "Our AI agents stop the 2 AM Lead Leak. No more waking up to missed calls or 'messages' from an answering service that didn't secure the lead."
              },
              {
                letter: "B",
                title: "Map Dominance",
                desc: "Hyper-local search optimization that puts your agency in front of families exactly when they are searching at a jail or courthouse."
              },
              {
                letter: "C",
                title: "Forfeiture Reduction",
                desc: "Relentless automated reminder systems that bridge the communication gap, ensuring defendants show up and your collateral stays safe."
              },
              {
                letter: "D",
                title: "Intelligent Intake",
                desc: "Every lead is qualified automatically. Collect defendant and cosigner data in seconds, so you only focus on writing the bond."
              }
            ].map((item, i) => (
              <div key={i} className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all group">
                <div className="text-5xl font-display font-normal text-white/10 group-hover:text-white/20 transition-colors mb-4">{item.letter}</div>
                <h3 className="text-xl font-medium mb-4 tracking-wide">{item.title}</h3>
                <p className="text-stone-200 font-light leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 perspective-[1000px] mb-32">
          {[
            {
              icon: <Target size={32} className="text-white/80" />,
              title: "Niche Focus",
              desc: "We don't work with plumbers or dentists. We specialize exclusively in the high-stakes, time-sensitive bail bond industry."
            },
            {
              icon: <Zap size={32} className="text-white/80" />,
              title: "Speed Obsessed",
              desc: "Every system we build is optimized for one thing: speed. Fast websites, instant chat, immediate text-backs."
            },
            {
              icon: <Shield size={32} className="text-white/80" />,
              title: "Data Security",
              desc: "We understand the sensitive nature of intake data. Our systems prioritize security and confidentiality."
            }
          ].map((value, i) => (
            <div key={i} className="h-full">
              <TiltCard className="h-full">
                <motion.div 
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 6 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                  className="p-8 md:p-10 group h-full"
                >
                  <div className="w-16 h-16 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-8 text-white/80 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-medium mb-4 tracking-wide">{value.title}</h3>
                  <p className="text-stone-200 font-light leading-relaxed">{value.desc}</p>
                </motion.div>
              </TiltCard>
            </div>
          ))}
        </div>

        <div className="bg-white/5 rounded-[40px] p-12 md:p-20 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-medium mb-8 leading-tight">Driving real results for <br/><i className="text-gradient">high-stakes agencies.</i></h2>
              <div className="space-y-4">
                {[
                  "Proprietary AI Intake Logic",
                  "Deep Industry Knowledge",
                  "Compliance-First Development",
                  "Dedicated Success Support"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-white/40" />
                    <span className="text-stone-300 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-5xl font-display font-bold mb-2">100%</div>
                <div className="text-xs uppercase tracking-widest text-stone-500 font-bold">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-display font-bold mb-2">60s</div>
                <div className="text-xs uppercase tracking-widest text-stone-500 font-bold">Response</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-display font-bold mb-2">24/7</div>
                <div className="text-xs uppercase tracking-widest text-stone-500 font-bold">Intake</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-display font-bold mb-2">ROI</div>
                <div className="text-xs uppercase tracking-widest text-stone-500 font-bold">Focused</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
