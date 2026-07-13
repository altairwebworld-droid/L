import { CtaBand, Hero } from '../components/PageSections';

export default function Vision() {
  return (
    <>
      <Hero
        compact
        title="Where We Are Building"
        copy="LYCORE starts with the call. The ambition goes further."
      />
      <section className="py-16 px-6 max-w-5xl mx-auto space-y-12">
        <div>
          <h2 className="text-4xl font-normal mb-5">Start with the phone</h2>
          <p className="text-white text-lg leading-relaxed font-light">
            Most small service businesses lose revenue the same way: the phone rings and nobody answers. The website does not convert. The follow-up does not happen. LYCORE fixes that first — a receptionist that answers every call, a website built for callers, and intake that runs itself.
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-normal mb-5">Then automate the paperwork</h2>
          <p className="text-white text-lg leading-relaxed font-light">
            After the call, details need to go somewhere: dispatch, invoicing, customer records. Today that work is manual for most service businesses. LYCORE is building the layer that moves call data into action — confirmations, routing, follow-up, and reporting — without the owner touching a spreadsheet.
          </p>
          <p className="text-sm text-stone-400 font-light mt-3 italic">This layer is currently rolling out to early partners.</p>
        </div>
        <div>
          <h2 className="text-4xl font-normal mb-5">Then build the operating system</h2>
          <p className="text-white text-lg leading-relaxed font-light">
            The long-term direction: one system per industry that runs the office end to end. From the first call through dispatch, invoicing, repeat-business follow-up, and reporting. The system knows the industry because it was built for it — not adapted from generic software.
          </p>
          <p className="text-sm text-stone-400 font-light mt-3 italic">This is direction, not a product available today.</p>
        </div>
        <div>
          <h2 className="text-4xl font-normal mb-5">Eventually, past software</h2>
          <p className="text-white text-lg leading-relaxed font-light">
            Software is a starting point. As LYCORE understands the operational patterns of each industry deeply enough, the ambition extends into physical infrastructure, logistics, and services that cannot be replaced by a screen. How that unfolds depends on what we learn building the layers above.
          </p>
          <p className="text-sm text-stone-400 font-light mt-3 italic">This is long-term direction.</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
