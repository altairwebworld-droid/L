import { ArrowUpRight, Check, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

type CommitmentKey = 'career-growth' | 'work-life-balance' | 'social-impact' | 'how-we-work';

type ContentSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
  variant?: 'default' | 'highlight';
};

type Commitment = {
  eyebrow: string;
  title: string;
  intro: string;
  description: string;
  sections: ContentSection[];
  summary: string;
};

const lastUpdated = '13 July 2026';

export const commitments: Record<CommitmentKey, Commitment> = {
  'career-growth': {
    eyebrow: 'Growth and learning',
    title: 'Career Growth and Continuous Learning',
    intro:
      'At LYCORE GROUP LLC, career development is built around practical experience, continuous learning and meaningful responsibility. As a growing remote-first company, we want people to strengthen their skills while contributing to real client work and business outcomes.',
    description: 'How LYCORE approaches practical learning, feedback, responsibility and career development as the company grows.',
    sections: [
      {
        title: 'Practical learning through meaningful work',
        paragraphs: [
          'Our approach starts with useful work. Team members develop skills through client projects, research, process improvement, problem-solving and exposure to different business functions.',
          'The goal is to connect learning to a real responsibility, decision or client outcome.',
        ],
      },
      {
        title: 'Ownership and responsibility',
        paragraphs: [
          'People are encouraged to understand the outcome behind a task, make thoughtful decisions, communicate clearly and take responsibility for the quality of their work. Responsibility is paired with context and constructive review.',
        ],
      },
      {
        title: 'Mentorship and feedback',
        paragraphs: [
          'As the company grows, LYCORE aims to support regular feedback, knowledge sharing, coaching and constructive review. These practices will develop with the team and the needs of each role.',
        ],
      },
      {
        title: 'Cross-functional development',
        paragraphs: [
          'Work may create exposure to customer experience, operations, automation, communication, sales support, project delivery and business systems. This broader view helps people understand how their work connects to the client experience.',
        ],
      },
      {
        title: 'Self-directed learning',
        paragraphs: [
          'Relevant courses, certifications, reading, experimentation and technical development are encouraged where they support the role and company objectives. Access to resources depends on relevance, timing and what is feasible for the company.',
        ],
      },
      {
        title: 'Career development commitments',
        items: [
          'Clear role expectations',
          'Constructive performance feedback',
          'Opportunities to take on greater responsibility',
          'Access to relevant learning resources where feasible',
          'Knowledge-sharing opportunities',
          'Exposure to practical projects',
          'Consideration of role-relevant certifications',
          'Fair consideration for advancement as positions become available',
        ],
      },
      {
        title: 'Learning and development practices',
        items: [
          'Role-based onboarding',
          'Guided project learning',
          'Peer knowledge sharing',
          'Technical and business skills development',
          'Mentoring and feedback',
          'Cross-functional project exposure',
          'Self-directed learning',
          'Professional certification support where appropriate',
        ],
        variant: 'highlight',
      },
    ],
    summary:
      'LYCORE supports career growth through practical project experience, continuous learning, constructive feedback, ownership and cross-functional development. We encourage people to strengthen their skills while contributing to meaningful client outcomes.',
  },
  'work-life-balance': {
    eyebrow: 'Working arrangement',
    title: 'Remote Work and Work-Life Balance',
    intro:
      'LYCORE GROUP LLC is a remote-first company built around trust, accountability, flexibility and clear communication. We believe strong performance should be sustainable and that flexibility works best when expectations, availability and responsibilities are clearly understood.',
    description: 'The LYCORE remote-first working arrangement, flexibility expectations and work-life balance commitments.',
    sections: [
      {
        title: 'What remote-first means',
        paragraphs: [
          'Work is primarily completed remotely using approved communication, collaboration and project-management tools. The practical setup depends on the role, the work being delivered and client requirements.',
        ],
      },
      {
        title: 'Flexibility with accountability',
        paragraphs: [
          'Flexibility is not the absence of structure. Team members are expected to meet deadlines, communicate availability, attend necessary meetings and deliver agreed outcomes.',
        ],
      },
      {
        title: 'Working hours and availability',
        paragraphs: [
          'Arrangements vary by role, client needs and time zone. Some roles require agreed availability windows or client coverage periods, and those expectations should be clear before the work begins.',
        ],
      },
      {
        title: 'Respect for personal time',
        paragraphs: [
          'Unnecessary after-hours communication should be avoided. When something is genuinely urgent, it should be identified clearly so the recipient can understand the priority and respond appropriately.',
        ],
      },
      {
        title: 'Sustainable performance',
        paragraphs: [
          'The company values reliable, high-quality work rather than constant online presence. We aim to plan work realistically, protect focus and address workload concerns early.',
        ],
      },
      {
        title: 'Communication norms',
        items: [
          'Clear availability',
          'Realistic deadlines',
          'Advance notice of schedule changes',
          'Documented handovers',
          'Respectful meeting scheduling',
          'Appropriate response-time expectations',
        ],
      },
      {
        title: 'Remote-First Flexible Work',
        paragraphs: [
          'Eligible roles may work remotely with flexibility in how work is organised, subject to client commitments, agreed availability, security requirements and performance expectations.',
        ],
        variant: 'highlight',
      },
      {
        title: 'Work-life balance commitments',
        items: [
          'Remote-first arrangements for eligible roles',
          'Flexible organisation of work where operationally possible',
          'Respect for agreed non-working time',
          'Clear expectations rather than unnecessary monitoring',
          'Thoughtful meeting practices',
          'Advance planning where possible',
          'Encouragement of sustainable workloads',
          'Periodic review of working arrangements as the company grows',
        ],
      },
    ],
    summary:
      'LYCORE supports remote-first work through flexibility, trust and accountability. Eligible team members can organise their work around agreed responsibilities, client needs and availability while maintaining clear communication and sustainable performance.',
  },
  'social-impact': {
    eyebrow: 'Public commitment',
    title: 'Our Social Impact Commitment',
    intro:
      'LYCORE GROUP LLC believes business technology should create practical value beyond efficiency alone. Our social impact approach focuses on helping smaller service businesses improve access, responsiveness and customer experience while building responsible, inclusive and sustainable business practices.',
    description: 'The public LYCORE pledge for responsible technology, fair access, privacy, inclusive communication and practical support.',
    sections: [
      {
        title: 'Our Social Impact Pledge',
        paragraphs: [
          'LYCORE GROUP LLC pledges to develop and deliver business systems responsibly, support fair access to practical technology, protect customer information, promote inclusive communication and contribute time, knowledge or resources to initiatives that strengthen small businesses and digital skills as the company grows.',
        ],
        variant: 'highlight',
      },
      {
        title: 'Supporting small and service-based businesses',
        paragraphs: [
          'Smaller businesses often lose opportunities because they lack the staff or systems to respond consistently. LYCORE aims to provide practical systems that help them compete more effectively and serve customers with greater consistency.',
        ],
      },
      {
        title: 'Responsible technology',
        paragraphs: [
          'Our approach is to use technology transparently, safely and with appropriate human oversight. The responsibility for a process should remain clear, including when automation supports the work.',
        ],
      },
      {
        title: 'Privacy and data responsibility',
        paragraphs: [
          'We aim to minimise unnecessary data collection, use appropriate safeguards, respect client instructions and handle customer information responsibly. Our formal data practices are described in the privacy policy.',
        ],
      },
      {
        title: 'Accessible and inclusive communication',
        paragraphs: [
          'We support clear customer communication and, where available and appropriate, multilingual or accessible service options. We will keep learning from the people who use the systems we build.',
        ],
      },
      {
        title: 'Skills and knowledge sharing',
        paragraphs: [
          'As the company grows, LYCORE intends to contribute through educational resources, practical guidance, mentoring, workshops or skills-support initiatives. Any future activity will be described plainly when it exists.',
        ],
      },
      {
        title: 'Responsible growth',
        paragraphs: [
          'LYCORE will avoid unsupported impact claims and improve how it tracks and reports impact over time. We want public updates to reflect meaningful work, not ambition presented as achievement.',
        ],
      },
      {
        title: 'Initial commitments',
        items: [
          'Publish practical educational resources for small businesses',
          'Encourage responsible use of automation and customer data',
          'Design services around real operational needs',
          'Promote inclusive and respectful customer communication',
          'Explore skills-development or mentoring initiatives',
          'Review social-impact priorities annually',
          'Publish material updates when meaningful progress has been made',
        ],
      },
      {
        title: 'Transparency',
        paragraphs: [
          'We are at an early stage of this work. This page records our public direction and commitments rather than presenting an audited impact report. As LYCORE grows and develops measurable initiatives, we intend to update this page with clearer targets, activities and outcomes.',
        ],
      },
    ],
    summary:
      'LYCORE pledges to use business technology responsibly, support practical access for smaller businesses, protect customer information, promote inclusive communication and contribute knowledge or resources to digital skills and business development initiatives.',
  },
  'how-we-work': {
    eyebrow: 'Working principles',
    title: 'How We Work',
    intro:
      'At LYCORE, remote work is built on trust, flexibility and ownership. We encourage innovation, creativity, experimentation and continuous learning, while holding ourselves to integrity, open communication and a commitment to delivering meaningful results for every client.',
    description: 'The principles that guide how LYCORE approaches ownership, communication, learning and client work.',
    sections: [
      {
        title: 'Trust and ownership',
        paragraphs: [
          'People are trusted to manage their work and are expected to own its outcomes. Responsibility is given early and taken seriously, with the context and support needed to make thoughtful decisions.',
        ],
      },
      {
        title: 'Flexibility, in service of the work',
        paragraphs: [
          'Flexibility exists so people can do their best work sustainably. It is paired with accountability, agreed availability and clear client commitments. The practical arrangement is set out on our remote work and work-life balance page.',
        ],
      },
      {
        title: 'Innovation and experimentation',
        paragraphs: [
          'Trying new tools, approaches and ideas is encouraged. Small experiments help the company improve what it delivers. In a small team, useful ideas can come from anyone and move quickly into practice.',
        ],
      },
      {
        title: 'Continuous learning',
        paragraphs: [
          'Learning is treated as part of the job, not separate from it. Practical projects, feedback and self-directed development all contribute to stronger work. Our career growth commitment explains this approach in more detail.',
        ],
      },
      {
        title: 'Integrity and open communication',
        paragraphs: [
          'We value honest updates, including when something is behind or has gone wrong. Problems should be surfaced early. Commitments should be made carefully, communicated clearly and kept.',
        ],
      },
      {
        title: 'Results that matter to clients',
        paragraphs: [
          "The measure of the work is the outcome it produces for the client's business, not hours logged or activity displayed. We aim to understand what matters, agree on the work and report progress honestly.",
        ],
      },
      {
        title: 'Our working principles',
        items: [
          'Trust first, verify through outcomes',
          'Own the result, not just the task',
          'Communicate early, especially bad news',
          'Experiment small, learn fast',
          'Protect focus and personal time',
          "Deliver work you'd sign your name to",
        ],
        variant: 'highlight',
      },
    ],
    summary:
      'LYCORE is built on trust, flexibility and ownership. We encourage innovation, experimentation and continuous learning, and hold ourselves to integrity, open communication and meaningful results for every client.',
  },
};

const commitmentOrder: CommitmentKey[] = ['how-we-work', 'career-growth', 'work-life-balance', 'social-impact'];

const commitmentCardStyles: Record<CommitmentKey, string> = {
  'how-we-work': 'md:col-span-7 md:min-h-[370px]',
  'career-growth': 'md:col-span-5 md:min-h-[370px]',
  'work-life-balance': 'md:col-span-5 md:min-h-[340px]',
  'social-impact': 'md:col-span-7 md:min-h-[340px]',
};

function TextLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="group inline-flex items-center gap-2 text-sm text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white">
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  );
}

function CommitmentLinks({ current }: { current?: CommitmentKey }) {
  return (
    <section className="px-6 py-20" aria-labelledby="commitment-links-title">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-white/10 pt-12 lg:grid-cols-[0.34fr_0.66fr] lg:gap-16">
        <div>
          <p className="micro-label mb-3">Continue reading</p>
          <h2 id="commitment-links-title" className="max-w-sm text-3xl font-medium md:text-4xl">Related commitments</h2>
          <div className="mt-7 flex flex-col items-start gap-3">
            <TextLink to="/">LYCORE homepage</TextLink>
            <TextLink to="/what-we-build">Customer communication services</TextLink>
            <TextLink to="/contact">Contact LYCORE</TextLink>
          </div>
        </div>
        <div className="lycore-card overflow-hidden rounded-[24px]">
          {commitmentOrder.filter((key) => key !== current).map((key) => (
            <Link
              key={key}
              to={`/commitments/${key}`}
              className="group grid gap-3 border-b border-white/10 p-6 transition-colors last:border-b-0 hover:bg-white/[0.055] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white md:grid-cols-[0.28fr_0.62fr_auto] md:items-center md:p-7"
            >
              <p className="text-xs font-medium text-stone-400">{commitments[key].eyebrow}</p>
              <h3 className="text-xl font-medium tracking-tight md:text-2xl">{commitments[key].title}</h3>
              <ArrowUpRight className="h-5 w-5 text-stone-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompanyLinks() {
  return (
    <section className="px-6 py-16" aria-label="Explore LYCORE">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border-t border-white/10 pt-10 md:flex-row md:items-center">
        <div>
          <p className="micro-label mb-3">Explore LYCORE</p>
          <p className="text-lg font-light text-stone-300">See what we build or speak with the team.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <TextLink to="/">LYCORE homepage</TextLink>
          <TextLink to="/what-we-build">Customer communication services</TextLink>
          <TextLink to="/contact">Contact LYCORE</TextLink>
        </div>
      </div>
    </section>
  );
}

export function CommitmentsIndex() {
  return (
    <>
      <header className="relative overflow-hidden px-6 pb-14 pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,210,255,0.055),transparent_42%)]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_0.3fr] lg:items-end">
          <div>
          <p className="micro-label mb-7">LYCORE commitments</p>
            <h1 className="max-w-4xl text-5xl font-bold leading-[0.98] tracking-tight md:text-7xl lg:text-[5.25rem]">How we intend to grow</h1>
          </div>
          <p className="max-w-xl text-lg font-light leading-relaxed text-stone-200 lg:pb-2">
            How LYCORE GROUP LLC approaches its work, people and wider responsibilities as a remote-first, early-stage company.
          </p>
        </div>
      </header>
      <div className="px-6 pb-10 pt-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-12">
          {commitmentOrder.map((key) => (
            <Link
              key={key}
              to={`/commitments/${key}`}
              className={`lycore-card group relative flex min-h-[310px] flex-col justify-between rounded-[28px] p-7 transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:translate-y-0 md:p-9 ${commitmentCardStyles[key]}`}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00d2ff]/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
              <div className="flex items-start justify-between gap-6">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-stone-400">{commitments[key].eyebrow}</p>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.035] text-stone-300 transition-colors group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-16 max-w-2xl">
                <h2 className={`font-medium leading-[1.02] tracking-tight ${key === 'how-we-work' || key === 'social-impact' ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl'}`}>{commitments[key].title}</h2>
                <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-stone-400 transition-colors group-hover:text-stone-300">{commitments[key].description}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mx-auto mt-14 grid max-w-7xl gap-5 border-t border-white/10 pt-8 md:grid-cols-[0.3fr_0.7fr]">
          <h2 className="text-xl font-medium">A living commitment</h2>
          <div className="max-w-3xl">
            <p className="text-lg font-light leading-relaxed text-stone-300">
              These commitments will evolve as LYCORE grows. We will update them when our practices, responsibilities or public commitments materially change.
            </p>
            <p className="mt-4 text-sm text-stone-500">Last updated {lastUpdated}</p>
          </div>
        </div>
      </div>
      <CompanyLinks />
    </>
  );
}

export function CommitmentPage({ page }: { page: CommitmentKey }) {
  const commitment = commitments[page];

  return (
    <>
      <header className="relative overflow-hidden px-6 pb-20 pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,210,255,0.045),transparent_44%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <Link to="/commitments" className="micro-label inline-flex items-center gap-2 hover:text-white">Commitments / {commitment.eyebrow}</Link>
          <h1 className="mt-8 max-w-6xl text-5xl font-bold leading-[0.98] tracking-tight md:text-7xl lg:text-8xl">{commitment.title}</h1>
          <p className="mt-8 max-w-4xl text-xl font-light leading-relaxed text-white md:text-2xl">{commitment.intro}</p>
          <p className="mt-8 text-sm text-stone-400">Last updated {lastUpdated}</p>
        </div>
      </header>

      <div className="px-6 pb-12">
        <div className="mx-auto max-w-5xl border-t border-white/10 pt-8">
          {commitment.sections.map((section, index) => (
            <section
              key={section.title}
              className={section.variant === 'highlight'
                ? 'lycore-card my-10 rounded-[28px] p-7 md:p-10'
                : 'grid gap-6 border-b border-white/10 py-12 md:grid-cols-[0.36fr_0.64fr] md:gap-12'}
              aria-labelledby={`${page}-section-${index}`}
            >
              <div>
                <h2 id={`${page}-section-${index}`} className="text-3xl font-medium leading-tight md:text-4xl">{section.title}</h2>
              </div>
              <div className={section.variant === 'highlight' ? 'mt-7' : ''}>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mb-5 text-lg font-light leading-relaxed text-stone-200 last:mb-0">{paragraph}</p>
                ))}
                {section.title === 'Privacy and data responsibility' && (
                  <p className="mt-5"><TextLink to="/privacy-policy">Read the LYCORE privacy policy</TextLink></p>
                )}
                {page === 'how-we-work' && section.title === 'Flexibility, in service of the work' && (
                  <p className="mt-5"><TextLink to="/commitments/work-life-balance">Remote work and work-life balance</TextLink></p>
                )}
                {page === 'how-we-work' && section.title === 'Continuous learning' && (
                  <p className="mt-5"><TextLink to="/commitments/career-growth">Career growth and continuous learning</TextLink></p>
                )}
                {section.items && (
                  <ul className="grid gap-4 sm:grid-cols-2" role="list">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3 text-base font-light leading-relaxed text-stone-200">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-white" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}

          {page === 'social-impact' && (
            <section className="lycore-card relative my-10 rounded-[28px] p-7 text-white md:p-10" aria-labelledby="pledge-details-title">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00d2ff]/55 to-transparent" aria-hidden="true" />
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">Public pledge record</p>
              <h2 id="pledge-details-title" className="text-3xl font-bold md:text-4xl">Pledge details</h2>
              <dl className="mt-8 grid gap-6 sm:grid-cols-2">
                <div><dt className="text-sm text-stone-400">Pledge owner</dt><dd className="mt-1 font-medium">LYCORE GROUP LLC</dd></div>
                <div><dt className="text-sm text-stone-400">Scope</dt><dd className="mt-1 font-medium">Company operations, client delivery and future community initiatives</dd></div>
                <div><dt className="text-sm text-stone-400">Review frequency</dt><dd className="mt-1 font-medium">At least annually</dd></div>
                <div><dt className="text-sm text-stone-400">Current status</dt><dd className="mt-1 font-medium">Foundational commitment</dd></div>
                <div><dt className="text-sm text-stone-400">Last updated</dt><dd className="mt-1 font-medium">{lastUpdated}</dd></div>
              </dl>
            </section>
          )}

          <aside className="lycore-card my-16 rounded-[28px] p-7 md:p-10" aria-labelledby={`${page}-summary-title`}>
            <div className="flex items-center justify-between gap-4">
              <p className="micro-label">LinkedIn-ready summary</p>
              <Quote className="h-5 w-5 text-white/50" aria-hidden="true" />
            </div>
            <h2 id={`${page}-summary-title`} className="sr-only">Summary of this commitment</h2>
            <blockquote className="mt-7 max-w-4xl text-2xl font-medium leading-relaxed md:text-3xl">{commitment.summary}</blockquote>
          </aside>
        </div>
      </div>

      <CommitmentLinks current={page} />
    </>
  );
}

export type { CommitmentKey };
