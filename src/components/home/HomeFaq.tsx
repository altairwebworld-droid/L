import { homepageFaqs } from '../../content/faq';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Container, Section } from './Section';

export default function HomeFaq() {
  return (
    <Section surface="ivory" className="home-faq-section">
      <Container className="grid gap-12 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20">
        <div>
          <p className="micro-label mb-5 text-ink-muted">Straight answers</p>
          <h2 className="section-title text-ink">Questions before we get to work.</h2>
        </div>
        <Accordion className="faq-accordion" type="single" collapsible defaultValue={homepageFaqs[0]?.question}>
          {homepageFaqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question} className="border-[#092f69]/12">
              <AccordionTrigger className="faq-question">{faq.question}</AccordionTrigger>
              <AccordionContent className="faq-answer">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
}
