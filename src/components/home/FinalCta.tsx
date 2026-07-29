import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { contactActions } from '../../content/contact';
import { LightLines } from '../ui/light-lines';
import { MagneticButton } from './MagneticButton';

export default function FinalCta() {
  return (
    <section className="home-final-cta relative isolate overflow-hidden py-14 md:py-20">
      <LightLines gradientFrom="#090909" gradientTo="#171513" lightsOpacity={0.52} linesOpacity={0.05} className="-z-10" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="liquid-glass flex flex-col gap-8 rounded-[32px] border border-white/10 p-8 md:flex-row md:items-center md:justify-between md:p-12">
            <div className="max-w-xl">
              <p className="micro-label mb-4 text-white/70">The next route</p>
              <h2 className="text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl">Your next job should not disappear.</h2>
              <p className="mt-4 max-w-lg text-sm font-light leading-relaxed text-white/70">
                We will review the path from first enquiry to follow-up and show you where to start, without pressure or unsupported promises.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <MagneticButton>
                <Link
                  to={contactActions.review.path}
                  data-track="cta_click"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff6b22] px-7 py-3.5 text-sm font-bold text-black"
                >
                  {contactActions.review.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </MagneticButton>
              <a
                href={contactActions.whatsapp.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:border-white/50"
              >
                WhatsApp LYCORE
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
