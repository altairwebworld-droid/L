import { motion } from 'motion/react';
import { reportFields } from '../../content/implementation';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Container, Section } from './Section';

export default function ReportingCard() {
  return (
    <Section surface="ivory" className="home-report-section">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="micro-label mb-5 text-ink-muted">What reaches the team</p>
          <h2 className="section-title text-ink">A useful report, not a mystery notification.</h2>
          <p className="mt-6 max-w-md text-base font-light leading-relaxed text-ink-muted">
            Every row reflects information the current intake and routing system can actually capture. No fictional dashboards or performance figures.
          </p>
        </div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          <Card>
            <CardHeader className="border-b border-white/10">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">Lead route — structured handoff</p>
            </CardHeader>
            <CardContent className="pt-6">
              <dl className="divide-y divide-white/10">
                {reportFields.map(([field, value]) => (
                  <div key={field} className="flex flex-col gap-1 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <dt className="text-sm font-medium text-ink">{field}</dt>
                    <dd className="text-sm font-light text-ink-muted sm:text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Section>
  );
}
