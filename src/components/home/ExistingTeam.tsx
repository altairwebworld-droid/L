import { ArrowRight, Check, X } from 'lucide-react';
import { motion } from 'motion/react';
import { accents } from '../../content/palette';

/**
 * For businesses that already have people answering phones. The argument here
 * is deliberately not "your staff are failing" — it is that overlapping calls
 * and tired night shifts are structural, not personal.
 */

const before = [
  'Staff occupied with a customer',
  'Second call missed',
  'Notes incomplete',
  'Follow-up delayed',
];

const after = [
  'Overflow handled automatically',
  'Caller information captured',
  'Team receives a full summary',
  'Follow-up continues on its own',
];

export default function ExistingTeam() {
  return (
    <section className="relative px-6 py-12 md:py-16 lg:py-20">
      <div
        aria-hidden="true"
        className="ambient-glow right-[6%] top-[12%] h-[26rem] w-[26rem]"
        style={{ backgroundColor: 'rgba(92,177,133,0.14)' }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[80rem] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="micro-label mb-5 text-[#9fc0ea]">If you already have a team</p>
          <h2 className="section-title max-w-[16ch] text-ink">
            Your team does not have to fail for opportunities to be missed.
          </h2>
          <p className="mt-6 max-w-[46ch] text-[1.0625rem] font-light leading-[1.7] text-[#bfd5f2] md:text-[1.125rem]">
            Calls overlap. Staff step away. Night teams become tired. Follow-up gets
            delayed. LYCORE supports your existing team with overflow coverage,
            after-hours communication, structured intake and consistent follow-up.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[1.5rem] border border-white/8 p-6 md:p-7"
            style={{ background: 'rgba(255,255,255,0.022)' }}
          >
            <p className="text-[0.76rem] font-semibold uppercase tracking-[0.14em] text-[#8fb2e4]">
              Today
            </p>
            <ul className="mt-5 flex flex-col gap-0" role="list">
              {before.map((item, index) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-white/6 py-3.5 last:border-0"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/6">
                    <X className="h-3 w-3 text-white/40" aria-hidden="true" />
                  </span>
                  <span className="text-[0.94rem] leading-snug text-[#a9c5ec]">{item}</span>
                  {index === 1 && (
                    <span className="ml-auto shrink-0 self-center rounded px-1.5 py-0.5 text-[0.7rem] font-medium text-[#e8785c]">
                      lost
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[1.5rem] border p-6 md:p-7"
            style={{
              borderColor: `${accents.green}2e`,
              background: `linear-gradient(165deg, ${accents.green}14, rgba(11,52,120,0.5))`,
            }}
          >
            <p
              className="text-[0.76rem] font-semibold uppercase tracking-[0.14em]"
              style={{ color: accents.green }}
            >
              With LYCORE
            </p>
            <ul className="mt-5 flex flex-col gap-0" role="list">
              {after.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-white/6 py-3.5 last:border-0"
                >
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: `${accents.green}2a` }}
                  >
                    <Check
                      className="h-3 w-3"
                      style={{ color: accents.green }}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-[0.94rem] leading-snug text-white">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Transition strip tying the two columns together. */}
          <div className="sm:col-span-2">
            <div
              className="flex flex-wrap items-center gap-x-3 gap-y-2 rounded-[1.25rem] border border-white/8 px-5 py-4"
              style={{ background: 'rgba(255,255,255,0.018)' }}
            >
              <span className="text-[0.9rem] text-[#a9c5ec]">Your team keeps the calls they can take.</span>
              <ArrowRight className="h-3.5 w-3.5 text-white/25" aria-hidden="true" />
              <span className="text-[0.9rem] font-medium text-white">
                LYCORE catches the ones they cannot.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
