import React, { useState } from 'react';
import { Calendar, CheckCircle2, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAttribution, trackEvent } from '../lib/analytics';
import { site } from '../siteData';
import { usaCities } from '../data/usaCities';

type LeadFormState = {
  fullName: string;
  businessName: string;
  website: string;
  email: string;
  location: string;
  biggestChallenge: string;
  currentCRM: string;
  missedCalls: string;
  message: string;
  consent: boolean;
  honeypot: string;
};

const initialState: LeadFormState = {
  fullName: '',
  businessName: '',
  website: '',
  email: '',
  location: '',
  biggestChallenge: '',
  currentCRM: '',
  missedCalls: '',
  message: '',
  consent: false,
  honeypot: '',
};

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
    
    // Honeypot spam protection: bots often fill out hidden fields
    if (formData.honeypot) {
      // Silently succeed to trick the bot
      setIsSubmitting(false);
      setFormData(initialState);
      setStatus({ type: 'success', message: 'Thank you. Your request has been received.' });
      return;
    }
    
    if (!formData.consent) {
      setStatus({ type: 'error', message: 'Please confirm consent before requesting the review.' });
      trackEvent('audit_form_submit_error', { reason: 'missing_consent' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: 'idle', message: 'Submitting your review request...' });
    const attribution = getAttribution();
    const payload = {
      ...formData,
      ...attribution,
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
        message: 'Your review request is in — our team reviews every one personally. Want to skip the wait? Book your strategy call now.',
      });
      trackEvent('audit_form_submit_success', { manualSetupRequired: Boolean(result.manualSetupRequired) });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Submission failed.';
      setStatus({ type: 'error', message: 'Something went wrong. Please try again or contact us directly.' });
      trackEvent('audit_form_submit_error', { reason: message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="lycore-card rounded-[36px] p-6 md:p-10 space-y-7" onSubmit={handleSubmit}>
      {status.type === 'success' ? (
        <div className="py-12 text-center">
          <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
          <h3 className="text-3xl font-display font-medium text-white mb-4">Request Received</h3>
          <p className="text-stone-300 mb-10 leading-relaxed max-w-md mx-auto">{status.message}</p>
          <a href="/book" className="btn-3d w-full max-w-sm mx-auto">
            Book Your Strategy Call
          </a>
        </div>
      ) : (
        <>
          <div className="border-b border-white/10 pb-7">
            <p className="micro-label mb-4 text-[#ffad78]">Free systems review</p>
            <h2 className="text-3xl font-medium mb-3 md:text-4xl">Show us where leads get stuck.</h2>
            <p className="text-stone-300 font-light leading-relaxed">
              Tell us how customers reach your business today. We&apos;ll send back a plain-English breakdown of where the experience breaks and what to fix first.
            </p>
          </div>

          {/* Honeypot field - hidden from real users */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="crm_reference_id">CRM Reference ID</label>
            <input id="crm_reference_id" name="crm_reference_id" type="text" tabIndex={-1} autoComplete="off" value={formData.honeypot} onChange={(event) => updateField('honeypot', event.target.value)} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Full name" id="fullName" value={formData.fullName} onChange={(value) => updateField('fullName', value)} required />
            <Field label="Business name" id="businessName" value={formData.businessName} onChange={(value) => updateField('businessName', value)} required />
            <Field label="Website URL (optional)" id="website" type="url" value={formData.website} onChange={(value) => updateField('website', value)} />
            <Field label="Email" id="email" type="email" value={formData.email} onChange={(value) => updateField('email', value)} required />
            <CityField value={formData.location} onChange={(value) => updateField('location', value)} required />
            <Select
              label="Biggest challenge"
              id="biggestChallenge"
              value={formData.biggestChallenge}
              onChange={(value) => updateField('biggestChallenge', value)}
              options={[
                'Missing after-hours calls',
                'Website is not generating leads',
                'Need better SEO visibility',
                'Need CRM or intake automation',
                'Need follow-up workflows',
                'Need a custom dashboard',
                'Need appointment setting',
                'Need a mobile app',
                'Need a web UI app',
                'Not sure yet',
              ]}
              required
            />
            <Select
              label="Current CRM/tool"
              id="currentCRM"
              value={formData.currentCRM}
              onChange={(value) => updateField('currentCRM', value)}
              options={[
                'GoHighLevel (GHL)',
                'HubSpot',
                'Salesforce',
                'Zoho CRM',
                'Apollo',
                'Pipedrive',
                'Monday.com',
                'Freshsales',
                'Podio',
                'LionDesk',
                'Follow Up Boss',
                'Clio',
                'Spreadsheet / Google Sheets',
                'Other',
                'None — no CRM yet',
              ]}
              placeholder="Select your CRM"
            />
            <Select
              label="Do you miss after-hours calls?"
              id="missedCalls"
              value={formData.missedCalls}
              onChange={(value) => updateField('missedCalls', value)}
              options={['Yes', 'No', 'Not sure']}
              required
            />
            <CalendarEventCard />
          </div>

          <label className="block">
            <span className="block text-sm uppercase tracking-[0.1em] text-stone-200 mb-3 font-medium">Message</span>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={(event) => updateField('message', event.target.value)}
              className="form-control resize-none"
              placeholder="Tell us what happens when a lead contacts your business today..."
            />
          </label>

          <label className="flex gap-3 items-start text-sm text-stone-300 font-light leading-relaxed">
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
            No pressure. No ranking, revenue, client volume, or outcomes guarantees. {site.aiDisclaimer}
          </p>

          <button type="submit" disabled={isSubmitting} className="btn-3d w-full gap-3 disabled:opacity-60" data-track="audit_form_submit_click">
            {isSubmitting ? 'Submitting...' : site.primaryCta}
            {!isSubmitting && <Send size={16} />}
          </button>

          {status.type === 'error' && (
            <p className="flex items-start gap-2 text-sm text-red-300" role="status" aria-live="polite">
              {status.message}
            </p>
          )}
        </>
      )}
    </form>
  );
}

function CityField({
  value,
  onChange,
  required = false,
}: {
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-sm uppercase tracking-[0.1em] text-stone-200 mb-3 font-medium">USA city</span>
      <input
        name="location"
        type="text"
        list="usa-cities"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="form-control"
        placeholder="Start typing a city..."
        autoComplete="address-level2"
        required={required}
      />
      <datalist id="usa-cities">
        {usaCities.map((city) => (
          <option key={city} value={city} />
        ))}
      </datalist>
    </label>
  );
}

function CalendarEventCard() {
  const bookingUrl = import.meta.env.VITE_BOOKING_URL || '/book';
  const isExternalBookingUrl = /^https?:\/\//i.test(bookingUrl);

  return (
    <div className="lycore-card md:col-span-2 rounded-2xl p-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex gap-3">
        <Calendar className="mt-1 h-5 w-5 shrink-0 text-accent-blue" />
        <div>
          <h3 className="text-sm uppercase tracking-[0.1em] text-stone-200 font-medium mb-2">Preferred contact time</h3>
          <p className="text-sm text-stone-300 font-light leading-relaxed">
            Use the calendar to choose the best time for your review.
          </p>
        </div>
      </div>
      <a
        href={bookingUrl}
        className="btn-3d-dark shrink-0"
        data-track="calendar_event_click"
        target={isExternalBookingUrl ? '_blank' : undefined}
        rel={isExternalBookingUrl ? 'noreferrer' : undefined}
      >
        Schedule calendar event
      </a>
    </div>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  type = 'text',
  required = false,
}: {
  label: string;
  id: keyof LeadFormState;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-sm uppercase tracking-[0.1em] text-stone-200 mb-3 font-medium">{label}</span>
      <input name={id} type={type} value={value} onChange={(event) => onChange(event.target.value)} className="form-control" required={required} />
    </label>
  );
}

function Select({
  label,
  id,
  value,
  onChange,
  options,
  placeholder = 'Select one',
  required = false,
}: {
  label: string;
  id: keyof LeadFormState;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-sm uppercase tracking-[0.1em] text-stone-200 mb-3 font-medium">{label}</span>
      <select name={id} value={value} onChange={(event) => onChange(event.target.value)} className="form-control" required={required}>
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
