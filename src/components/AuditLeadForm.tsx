import React, { useState } from 'react';
import { ArrowUpRight, CalendarDays, CheckCircle2, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAttribution, trackEvent } from '../lib/analytics';
import { site } from '../siteData';

const bookingUrl = 'https://cal.com/lycorellc/discovery-call';

type LeadFormState = {
  biggestChallenge: string;
  phone: string;
  email: string;
  consent: boolean;
  honeypot: string;
};

const initialState: LeadFormState = {
  biggestChallenge: '',
  phone: '',
  email: '',
  consent: false,
  honeypot: '',
};

const issueOptions = [
  'Calls are being missed or answered too slowly',
  'The website is not turning visitors into enquiries',
  'Customers cannot find the business locally',
  'Intake and follow-up are too manual',
  'Appointment booking needs to be simpler',
  'Not sure — help me find the problem',
] as const;

export default function AuditLeadForm() {
  const [formData, setFormData] = useState<LeadFormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({ type: 'idle', message: '' });
  const [started, setStarted] = useState(false);

  const updateField = (field: keyof LeadFormState, value: string | boolean) => {
    if (!started) {
      setStarted(true);
      trackEvent('audit_form_start', { path: window.location.pathname });
    }
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (formData.honeypot) {
      setIsSubmitting(false);
      setFormData(initialState);
      setStatus({ type: 'success', message: 'Thank you. Your request has been received.' });
      return;
    }

    if (!formData.consent) {
      setStatus({ type: 'error', message: 'Please confirm consent before sending your request.' });
      trackEvent('audit_form_submit_error', { reason: 'missing_consent' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: 'idle', message: 'Sending your request...' });

    const payload = {
      ...formData,
      helpNeeded: formData.biggestChallenge,
      preferredContactMethod: 'Phone or email',
      ...getAttribution(),
      submittedAt: new Date().toISOString(),
    };

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.success) {
        throw new Error(result.error || 'The request could not be saved.');
      }

      setFormData(initialState);
      setStarted(false);
      setStatus({
        type: 'success',
        message: 'Your request is in. If you want to choose a time now, the discovery-call calendar is ready below.',
      });
      trackEvent('audit_form_submit_success', { manualSetupRequired: Boolean(result.manualSetupRequired) });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Submission failed.';
      setStatus({ type: 'error', message: 'Something went wrong. Please try again or book the discovery call directly.' });
      trackEvent('audit_form_submit_error', { reason: message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-intake-form lycore-card rounded-[36px] p-6 md:p-10 space-y-7" onSubmit={handleSubmit}>
      {status.type === 'success' ? (
        <div className="py-10 text-center">
          <CheckCircle2 className="mx-auto mb-6 h-16 w-16 text-emerald-400" aria-hidden="true" />
          <h2 className="mb-4 text-3xl font-display font-medium text-white">Request received</h2>
          <p className="mx-auto mb-8 max-w-md text-stone-300 leading-relaxed">{status.message}</p>
          <a href={bookingUrl} target="_blank" rel="noreferrer" className="btn-3d contact-booking-button mx-auto w-full max-w-sm" data-track="calendar_event_click">
            Book a discovery call <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      ) : (
        <>
          <div className="border-b border-white/10 pb-7">
            <p className="micro-label mb-4 text-white">Quick intake</p>
            <h2 className="mb-3 text-3xl font-medium md:text-4xl">What should we fix?</h2>
            <p className="text-stone-300 font-light leading-relaxed">
              Choose the problem and leave the best phone number and email. That is all we need to start.
            </p>
          </div>

          <a href={bookingUrl} target="_blank" rel="noreferrer" className="contact-booking-button flex w-full items-center justify-center gap-2" data-track="calendar_event_click">
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            Skip the form and book a discovery call
          </a>

          <div className="hidden" aria-hidden="true">
            <label htmlFor="crm_reference_id">CRM Reference ID</label>
            <input id="crm_reference_id" name="crm_reference_id" type="text" tabIndex={-1} autoComplete="off" value={formData.honeypot} onChange={(event) => updateField('honeypot', event.target.value)} />
          </div>

          <label className="block">
            <span className="mb-3 block text-sm font-medium uppercase tracking-[0.1em] text-stone-200">What needs to be fixed?</span>
            <select
              name="biggestChallenge"
              value={formData.biggestChallenge}
              onChange={(event) => updateField('biggestChallenge', event.target.value)}
              className="form-control"
              required
            >
              <option value="">Choose one</option>
              {issueOptions.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </label>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Field
              label="Phone number"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={formData.phone}
              onChange={(value) => updateField('phone', value)}
            />
            <Field
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={(value) => updateField('email', value)}
            />
          </div>

          <label className="flex items-start gap-3 text-sm text-stone-300 font-light leading-relaxed">
            <input
              name="consent"
              type="checkbox"
              checked={formData.consent}
              onChange={(event) => updateField('consent', event.target.checked)}
              className="mt-1 h-4 w-4"
              required
            />
            <span>
              I consent to LYCORE GROUP LLC using this information to respond to my request, as described in the <Link to="/privacy-policy" className="underline decoration-white/40 underline-offset-2 hover:decoration-white">Privacy Policy</Link>.
            </span>
          </label>

          <p className="text-xs text-stone-400 leading-relaxed">
            No pressure and no outcome guarantees. {site.aiDisclaimer}
          </p>

          <button type="submit" disabled={isSubmitting} className="btn-3d w-full gap-3 disabled:opacity-60" data-track="audit_form_submit_click">
            {isSubmitting ? 'Sending...' : 'Send my request'}
            {!isSubmitting && <Send size={16} aria-hidden="true" />}
          </button>

          {status.type === 'error' && (
            <p className="text-sm text-red-300" role="status" aria-live="polite">{status.message}</p>
          )}
        </>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type,
  autoComplete,
  value,
  onChange,
}: {
  label: string;
  name: 'phone' | 'email';
  type: 'tel' | 'email';
  autoComplete: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-3 block text-sm font-medium uppercase tracking-[0.1em] text-stone-200">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="form-control"
        required
      />
    </label>
  );
}
