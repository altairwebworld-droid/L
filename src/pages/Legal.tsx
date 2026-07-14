import { useEffect, useState, type FormEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { AlertCircle, FileText, LockKeyhole } from 'lucide-react';
import { getAnalyticsConsent, hasGlobalPrivacyControl, initAnalytics, setAnalyticsConsent, type AnalyticsConsent } from '../lib/analytics';
import { legalPages, site } from '../siteData';

type PolicySection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

const privacySections: PolicySection[] = [
  {
    title: '1. Scope and effective date',
    paragraphs: [
      'Effective date: July 15, 2026. This Privacy Policy explains how LYCORE GROUP LLC ("LYCORE," "we," "us," or "our") handles personal information collected through www.lycore.org, including our contact and review forms, optional analytics, and website chat experience.',
      'This policy covers this public website. When LYCORE provides services to a client, information handled for that client may also be governed by the applicable proposal, service agreement, and client instructions.',
    ],
  },
  {
    title: '2. Personal information we collect',
    paragraphs: ['The categories below depend on how you use the website. We do not require you to create an account to browse the site.'],
    items: [
      'Identifiers and contact details: name, business name, email address, business website, city or location, and any phone number or other contact detail you choose to include in a message or chat.',
      'Business and service information: your business needs, current CRM or tools, missed-call status, preferred contact details, and the message or request you submit.',
      'Internet and attribution data: pages viewed, referring page, landing page, UTM campaign parameters, browser and device information, and analytics events if you opt in to analytics.',
      'Chat content: messages you submit to the website chat. Please do not enter payment-card data, government ID numbers, health information, login credentials, or other sensitive personal information.',
    ],
  },
  {
    title: '3. Sources of information',
    paragraphs: ['We collect information directly from you when you submit a form, email us, use chat, or contact us through a linked social platform. We also receive limited technical and attribution information automatically from your browser and from the URL you use to reach the site.'],
  },
  {
    title: '4. How we use information',
    items: [
      'Respond to requests, schedule or prepare reviews, and communicate about the services you asked us to discuss.',
      'Operate, secure, troubleshoot, and improve the website and our lead-handling process.',
      'Understand aggregate site use when you choose optional analytics.',
      'Prevent spam, fraud, misuse, and security incidents; comply with law; and establish, exercise, or defend legal claims.',
      'Route a request to the CRM, email, calendar, notification, or automation service selected for our operations, when that integration is configured.',
    ],
  },
  {
    title: '5. How we disclose information',
    paragraphs: ['We do not sell personal information for money, and we do not use information submitted through this site to create cross-context behavioral advertising audiences. We may disclose information only as needed for the purposes described above.'],
    items: [
      'Service providers: hosting, security, analytics, form, email, CRM, calendar, automation, and communications providers. Depending on which integrations are enabled, this may include Google Analytics, Google Gemini, Jotform, Resend, and configured CRM or workflow providers.',
      'Professional advisers, insurers, regulators, law enforcement, or other parties when reasonably necessary to comply with law, protect rights and safety, or respond to a lawful request.',
      'A successor organization in connection with a merger, financing, sale, reorganization, or acquisition, subject to applicable law.',
    ],
  },
  {
    title: '6. AI-supported chat and automation',
    paragraphs: [
      'The website chat is an optional intake and information tool. If an AI provider is configured, chat messages may be sent to that provider to generate a response. AI-generated responses can be incomplete or inaccurate and are not legal, financial, medical, or professional advice.',
      'Do not provide sensitive personal information through chat. The chat is not an emergency service, and it is not designed to receive confidential client, customer, patient, or payment information.',
    ],
  },
  {
    title: '7. Cookies, analytics, and your choices',
    paragraphs: [
      'The site uses necessary browser storage to retain attribution information during a browsing session. When Google Analytics is configured, analytics is optional and remains off unless you choose “Allow analytics.” We use this information to understand aggregate site usage and improve the website.',
      'We recognize a browser Global Privacy Control signal for optional site analytics and keep Google Analytics off when that signal is present. You can also change your choice below, use browser controls to clear or block storage, or email us with a privacy request.',
    ],
  },
  {
    title: '8. Retention',
    paragraphs: [
      'We keep personal information only for as long as reasonably necessary for the purpose for which it was collected, to maintain business records, resolve disputes, comply with legal obligations, and enforce agreements. The specific retention period can vary by the systems and service providers used to handle a request.',
      'We periodically review our retention practices and provider settings. When information is no longer needed, we delete it, de-identify it, or retain it only as permitted or required by law.',
    ],
  },
  {
    title: '9. Security',
    paragraphs: [
      'We use reasonable administrative, technical, and organizational measures designed to protect personal information. No internet transmission, storage system, or service provider can be guaranteed to be completely secure. If you believe information submitted through this site has been compromised, contact us promptly.',
    ],
  },
  {
    title: '10. Your privacy rights and requests',
    paragraphs: [
      'Depending on where you live and applicable law, you may have rights to request access to, correction of, deletion of, or a copy of personal information; to opt out of certain processing; or to appeal a privacy decision. Use the request form below or email services@lycore.org with the subject line “Privacy Request,” identify the relationship or email address connected to the request, and tell us what you need. We may need to verify your identity before acting.',
      'If a request concerns information LYCORE processes on behalf of one of its clients, we may direct you to that client because the client controls the relevant information and instructions.',
    ],
  },
  {
    title: '11. California and other U.S. state disclosures',
    paragraphs: [
      'California residents can use the contact method above to request information about our privacy practices or exercise applicable rights. This policy identifies the categories of information we collect, the sources, purposes, and categories of service providers with whom it may be disclosed. We do not sell personal information or share it for cross-context behavioral advertising as those terms are used in California privacy law.',
      'Residents of other U.S. states with privacy laws may have similar rights. We will respond to a verified request as required by applicable law. If we deny a request, you may ask us to reconsider by replying to our decision email and stating that you are requesting an appeal.',
    ],
  },
  {
    title: '12. Children, external links, and international visitors',
    paragraphs: [
      'The site is intended for business users and is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided personal information, contact us and we will take appropriate steps to delete it.',
      'Links to social platforms, WhatsApp, booking tools, and other third-party services are governed by those parties’ privacy practices. If you access the site from outside the United States, your information may be processed in the United States or another country where our service providers operate.',
    ],
  },
  {
    title: '13. Changes and contact',
    paragraphs: [
      'We may update this policy when our practices, technology, or legal obligations change. We will post the revised policy here and update the effective date. Material changes will be communicated through this page or another appropriate method before they take effect when required by law.',
      'Questions or requests: services@lycore.org. LYCORE GROUP LLC, 1209 Mountain Road Pl NE, Ste N, Albuquerque, NM 87110, United States.',
    ],
  },
];

const termsSections: PolicySection[] = [
  {
    title: 'Informational Use',
    paragraphs: ['The website describes digital marketing, intake, automation, and CRM-readiness services for small service businesses. Content is informational and is not legal, financial, or compliance advice.'],
  },
  {
    title: 'No Guaranteed Outcomes',
    paragraphs: ['LYCORE GROUP LLC does not guarantee rankings, revenue, client volume, advertising performance, business outcomes, or CRM acceptance by third-party platforms.'],
  },
  {
    title: 'Third-Party Services',
    paragraphs: ['Calendars, CRMs, email tools, analytics platforms, AI providers, and automation services are controlled by their own terms and setup requirements.'],
  },
  {
    title: 'AI Boundaries',
    paragraphs: [site.aiDisclaimer],
  },
];

function AnalyticsChoices() {
  const [choice, setChoice] = useState<AnalyticsConsent | null>(() => getAnalyticsConsent());
  const globalPrivacyControl = hasGlobalPrivacyControl();

  useEffect(() => {
    const refresh = () => setChoice(getAnalyticsConsent());
    window.addEventListener('storage', refresh);
    return () => window.removeEventListener('storage', refresh);
  }, []);

  const updateChoice = (next: AnalyticsConsent) => {
    setAnalyticsConsent(next);
    setChoice(next);
    if (next === 'granted') initAnalytics(import.meta.env.VITE_GA4_MEASUREMENT_ID);
  };

  return (
    <section id="privacy-choices" className="lycore-card rounded-2xl p-6" aria-labelledby="privacy-choices-title">
      <h2 id="privacy-choices-title" className="text-xl font-medium">Manage analytics choice</h2>
      <p className="mt-3 text-sm font-light leading-relaxed text-stone-300">
        {globalPrivacyControl
          ? 'Your browser is sending a Global Privacy Control signal. Optional analytics is disabled.'
          : choice === 'granted'
            ? 'Optional analytics is enabled in this browser.'
            : choice === 'denied'
              ? 'Optional analytics is disabled in this browser.'
              : 'Optional analytics has not been enabled in this browser.'}
      </p>
      {!globalPrivacyControl && (
        <div className="mt-5 flex flex-wrap gap-3">
          <button type="button" onClick={() => updateChoice('denied')} className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white transition hover:border-white/50">Decline analytics</button>
          <button type="button" onClick={() => updateChoice('granted')} className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-stone-200">Allow analytics</button>
        </div>
      )}
    </section>
  );
}

type PrivacyRequestFormState = {
  name: string;
  email: string;
  requestType: 'access' | 'correct' | 'delete' | 'opt-out' | 'other' | '';
  details: string;
  consent: boolean;
};

const emptyPrivacyRequest: PrivacyRequestFormState = { name: '', email: '', requestType: '', details: '', consent: false };

function PrivacyRequestForm() {
  const [form, setForm] = useState<PrivacyRequestFormState>(emptyPrivacyRequest);
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({ type: 'idle', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: 'idle', message: '' });
    try {
      const response = await fetch('/api/privacy-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.success) throw new Error(result.error || 'Unable to submit your request.');
      setForm(emptyPrivacyRequest);
      setStatus({ type: 'success', message: 'Your privacy request was received. We will respond after verifying the request where required.' });
    } catch (error) {
      setStatus({ type: 'error', message: error instanceof Error ? error.message : 'Unable to submit your request. Please email services@lycore.org.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="lycore-card mt-8 rounded-2xl p-6 md:p-8" aria-labelledby="privacy-request-title">
      <h2 id="privacy-request-title" className="text-xl font-medium">Submit a privacy request</h2>
      <p className="mt-3 text-sm font-light leading-relaxed text-stone-300">Use this form only for a privacy request. Do not include passwords, payment details, health information, or government ID numbers.</p>
      <form className="mt-6 grid gap-5" onSubmit={submit}>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm text-stone-200">Name (optional)</span>
            <input value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} className="form-control" autoComplete="name" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-stone-200">Email</span>
            <input type="email" value={form.email} onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))} className="form-control" autoComplete="email" required />
          </label>
        </div>
        <label className="block">
          <span className="mb-2 block text-sm text-stone-200">Request type</span>
          <select value={form.requestType} onChange={(event) => setForm((current) => ({ ...current, requestType: event.target.value as PrivacyRequestFormState['requestType'] }))} className="form-control" required>
            <option value="">Select one</option>
            <option value="access">Access my information</option>
            <option value="correct">Correct my information</option>
            <option value="delete">Delete my information</option>
            <option value="opt-out">Opt out of processing</option>
            <option value="other">Other privacy request</option>
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-stone-200">Details (optional)</span>
          <textarea value={form.details} onChange={(event) => setForm((current) => ({ ...current, details: event.target.value }))} className="form-control min-h-28 resize-y" maxLength={2000} />
        </label>
        <label className="flex items-start gap-3 text-sm font-light leading-relaxed text-stone-300">
          <input type="checkbox" checked={form.consent} onChange={(event) => setForm((current) => ({ ...current, consent: event.target.checked }))} className="mt-1 h-4 w-4" required />
          <span>I confirm that I am submitting a privacy request and authorize LYCORE to use this information to verify and respond to it.</span>
        </label>
        <div className="flex flex-wrap items-center gap-4">
          <button type="submit" disabled={submitting} className="btn-3d disabled:opacity-60">{submitting ? 'Submitting…' : 'Submit privacy request'}</button>
          {status.type !== 'idle' && <p className={status.type === 'success' ? 'text-sm text-emerald-300' : 'text-sm text-red-300'} role="status">{status.message}</p>}
        </div>
      </form>
    </section>
  );
}

export default function Legal() {
  const { pathname } = useLocation();
  const page = legalPages.find((legalPage) => legalPage.path === pathname) ?? legalPages[0];
  const isPrivacyPolicy = page.path === '/privacy-policy';
  const sections = isPrivacyPolicy ? privacySections : termsSections;
  const Icon = isPrivacyPolicy ? LockKeyhole : FileText;

  return (
    <div className="mx-auto max-w-5xl px-6 pb-20 pt-32">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-14">
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
          <Icon size={16} className="text-white/70" />
          <span className="micro-label">{page.label}</span>
        </div>
        <h1 className="mb-6 text-5xl font-normal tracking-tight md:text-7xl">{page.h1}</h1>
        <p className="text-xl font-light leading-relaxed text-white">{page.description}</p>
        {isPrivacyPolicy && <p className="mt-5 text-sm text-stone-400">Last updated: July 15, 2026</p>}
      </motion.div>

      <div className="glass-panel mb-8 rounded-[32px] border border-white/10 p-8 md:p-12">
        <div className="space-y-11">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-4 text-2xl font-medium">{section.title}</h2>
              <div className="space-y-4 text-stone-300">
                {section.paragraphs?.map((paragraph) => <p key={paragraph} className="font-light leading-relaxed">{paragraph}</p>)}
                {section.items && (
                  <ul className="grid gap-3 pl-5 font-light leading-relaxed marker:text-white" role="list">
                    {section.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>

      {isPrivacyPolicy && <><AnalyticsChoices /><PrivacyRequestForm /></>}

      <div className="lycore-card mt-8 flex items-start gap-4 rounded-2xl p-6">
        <AlertCircle className="mt-1 shrink-0 text-white/60" size={22} />
        <p className="text-sm font-light leading-relaxed text-stone-400">
          Questions about this policy, active service providers, or your information? Contact <a className="underline decoration-white/30 underline-offset-2 hover:decoration-white" href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>
    </div>
  );
}
