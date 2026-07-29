import { LineChart, Route, Search, Settings2 } from 'lucide-react';
import { motion } from 'motion/react';
import { implementationSteps } from '../../content/implementation';
import { Container, Section, SectionHeading } from './Section';

const icons = [Search, Settings2, Route, LineChart];

export default function ImplementationSteps() {
  return (
    <Section surface="ivory">
      <Container className="max-w-5xl">
        <SectionHeading
          eyebrow="How the system is installed"
          title="One continuous route from review to measurement."
        />

        <ol className="relative border-l border-[#092f69]/15 pl-8">
          {implementationSteps.map((step, index) => {
            const Icon = icons[index] ?? Search;
            return (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative pb-12 last:pb-0"
              >
                <span className="absolute -left-[2.65rem] flex h-9 w-9 items-center justify-center rounded-full border border-[#092f69]/15 bg-[#0b3478] text-white">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-xs font-mono text-ink-muted">0{index + 1}</span>
                <h3 className="mt-1 text-xl font-medium tracking-tight text-ink">{step.title}</h3>
                <p className="mt-2 max-w-2xl text-sm font-light leading-relaxed text-ink-muted">{step.body}</p>
              </motion.li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
