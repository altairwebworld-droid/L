import { DeckStack, type DeckStackItem } from '../components/home/DeckStack';
import { NightToDawnField } from '../components/home/NightToDawnField';
import { CtaBand, FaqSection, Hero, ProcessSection } from '../components/PageSections';
import { globalFaqs } from '../siteData';

const offerings: DeckStackItem[] = [
  {
    id: 'call-answering',
    title: '24/7 Receptionist',
    description: 'Every call answered, day or night. Caller details captured. Live transfer when it matters. Booked appointments. Missed calls become booked jobs.',
    details: [
      'Answers in your business name, with your greeting',
      'Captures caller name, number, location, urgency, and service type',
      'Sends call summaries to your team by text, email, or dashboard',
      'Transfers live calls to your on-call staff when rules are met',
      'Works nights, weekends, holidays — no gaps',
    ],
    image: '/hero-card-receptionist.webp',
    imageAlt: 'Illustrated receptionist answering a customer call beside a booking calendar',
  },
  {
    id: 'conversion-websites',
    title: 'Websites That Convert Callers',
    description: 'Fast, phone-first sites built so an urgent searcher taps and calls. Your number is tappable from the first screen.',
    details: [
      'Phone number visible and tappable within one second',
      'Loads in under two seconds on any mobile connection',
      'Service pages answer the questions callers actually ask',
      'Connected to Google Business Profile and call tracking',
      'Built for the person holding a phone at 2 a.m., not someone browsing on a laptop',
    ],
    image: '/hero-card-websites.webp',
    imageAlt: 'Illustrated high-conversion website interface',
  },
  {
    id: 'local-search',
    title: 'Google Business Profile Optimization',
    description: 'The listing that decides whether you get found and called in local search. We set it up right and keep it current.',
    details: [
      'Correct categories, service areas, and business hours',
      'Photos, posts, and Q&A that match what callers look for',
      'Monitoring and updates as Google changes requirements',
      'Connected to your website and call tracking',
    ],
    image: '/hero-card-lead-systems.webp',
    imageAlt: 'Illustrated system routing messages, calls, and bookings into one lead funnel',
  },
  {
    id: 'lead-follow-up',
    title: 'Intake + Follow-Up Automation',
    description: 'The paperwork behind the call fills itself. Confirmations and follow-ups send themselves. A monthly report shows what the system brought in.',
    details: [
      'Call details routed into your existing tools automatically',
      'Caller receives a confirmation that their request was received',
      'Follow-up fires if nobody on your team has responded',
      'Monthly report: how many leads, how many handled, where they came from',
    ],
    note: 'This feature is currently rolling out.',
    image: '/hero-card-booking.webp',
    imageAlt: 'Illustrated booking calendar and mobile confirmation',
  },
  {
    id: 'business-systems',
    title: 'Business Systems and Infrastructure',
    description: 'One system per industry that runs the office end to end — from the first call through dispatch, invoicing, and repeat business.',
    details: [
      'Dispatch and scheduling tied to call intake',
      'Invoicing and payment connected to the job lifecycle',
      'Repeat-business triggers and customer follow-up',
      'Reporting that shows the full picture, not just one slice',
    ],
    note: 'This is where we are building toward, not a product available today.',
    image: '/lycore-dispatch-poster.webp',
    imageAlt: 'LYCORE dispatch carousel showing a lead moving through qualification and booking',
  },
];

export default function WhatWeBuild() {
  return (
    <NightToDawnField>
      <Hero title="Services" copy="LYCORE handles the chain from first contact to follow-up. Choose the layers your operation needs." />

      <DeckStack items={offerings} />

      <ProcessSection />
      <FaqSection faqs={[globalFaqs[1], globalFaqs[6], globalFaqs[7], globalFaqs[8]]} />
      <CtaBand />
    </NightToDawnField>
  );
}
