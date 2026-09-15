import React, { useState } from 'react';
import { ArrowUpRight, CalendarDays, CheckCircle2, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAttribution, trackEvent } from '../lib/analytics';
import { site } from '../siteData';

const bookingUrl = 'https://cal.com/lycorellc/discovery-call';

const countryCallingCodes = [
  { country: 'United States', code: '+1' },
  { country: 'Canada', code: '+1' },
  { country: 'United Kingdom', code: '+44' },
  { country: 'Australia', code: '+61' },
  { country: 'New Zealand', code: '+64' },
  { country: 'South Africa', code: '+27' },
  { country: 'Zimbabwe', code: '+263' },
  { country: 'Botswana', code: '+267' },
  { country: 'Zambia', code: '+260' },
  { country: 'Kenya', code: '+254' },
  { country: 'Nigeria', code: '+234' },
  { country: 'Ghana', code: '+233' },
  { country: 'Uganda', code: '+256' },
  { country: 'Tanzania', code: '+255' },
  { country: 'Rwanda', code: '+250' },
  { country: 'India', code: '+91' },
  { country: 'Pakistan', code: '+92' },
  { country: 'Bangladesh', code: '+880' },
  { country: 'Singapore', code: '+65' },
  { country: 'Philippines', code: '+63' },
  { country: 'United Arab Emirates', code: '+971' },
  { country: 'Saudi Arabia', code: '+966' },
  { country: 'Germany', code: '+49' },
  { country: 'France', code: '+33' },
  { country: 'Ireland', code: '+353' },
  { country: 'Netherlands', code: '+31' },
  { country: 'Spain', code: '+34' },
  { country: 'Italy', code: '+39' },
  { country: 'Brazil', code: '+55' },
  { country: 'Mexico', code: '+52' },
] as const;

type LeadFormState = {
  biggestChallenge: string;
  phoneCountryCode: string;
  phone: string;
  email: string;
  consent: boolean;
  marketingSmsConsent: boolean;
  verificationSmsConsent: boolean;
  honeypot: string;
};

const initialState: LeadFormState = {
  biggestChallenge: '',
  phoneCountryCode: '+1',
  phone: '',
  email: '',
  consent: false,
  marketingSmsConsent: false,
  verificationSmsConsent: false,
  honeypot: '',
};

const interestOptions = [
  'Generate more qualified leads',
  'Improve website conversion',
  'Improve local visibility and search presence',
  'Strengthen lead response and follow-up',
  'Improve booking and appointment flow',
  'Set up or improve CRM and automation',
  'Explore what would help most',
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
            <h2 className="mb-3 text-3xl font-medium md:text-4xl">What would you like to achieve?</h2>
            <p className="text-stone-300 font-light leading-relaxed">
              Choose an area you would like to improve or explore, then leave the best phone number and email. That is all we need to start.
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
            <span className="mb-3 block text-sm font-medium uppercase tracking-[0.1em] text-stone-200">What would you like help with?</span>
            <select
              name="biggestChallenge"
              value={formData.biggestChallenge}
              onChange={(event) => updateField('biggestChallenge', event.target.value)}
              className="form-control"
              required
            >
              <option value="">Choose one</option>
              {interestOptions.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </label>

          <div className="space-y-5">
            <PhoneField
              countryCode={formData.phoneCountryCode}
              phone={formData.phone}
              onCountryCodeChange={(value) => updateField('phoneCountryCode', value)}
              onPhoneChange={(value) => updateField('phone', value)}
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
              I agree to the <Link to="/terms" className="underline decoration-white/40 underline-offset-2 hover:decoration-white">Terms of Use</Link> and acknowledge the <Link to="/privacy-policy" className="underline decoration-white/40 underline-offset-2 hover:decoration-white">Privacy Policy</Link>. LYCORE may use this information to respond to my request.
            </span>
          </label>

          <fieldset className="space-y-4 border-0 p-0">
            <legend className="text-sm font-medium uppercase tracking-[0.1em] text-stone-200">Optional text message choices</legend>
            <label className="flex items-start gap-3 text-sm text-stone-300 font-light leading-relaxed">
              <input name="marketingSmsConsent" type="checkbox" checked={formData.marketingSmsConsent} onChange={(event) => updateField('marketingSmsConsent', event.target.checked)} className="mt-1 h-4 w-4" />
              <span>I agree to receive marketing text messages from LYCORE GROUP LLC (LYCORE) about its services, offers and updates. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help. This optional consent is not required to submit my request. <Link to="/terms#sms" className="underline decoration-white/40 underline-offset-2 hover:decoration-white">SMS Terms</Link> and <Link to="/privacy-policy#sms" className="underline decoration-white/40 underline-offset-2 hover:decoration-white">Privacy Policy</Link>.</span>
            </label>
            <label className="flex items-start gap-3 text-sm text-stone-300 font-light leading-relaxed">
              <input name="verificationSmsConsent" type="checkbox" checked={formData.verificationSmsConsent} onChange={(event) => updateField('verificationSmsConsent', event.target.checked)} className="mt-1 h-4 w-4" />
              <span>If I request a LYCORE account or identity verification code, I agree to receive one-time verification text messages from LYCORE GROUP LLC (LYCORE) for that request only. Message frequency is as requested. Message and data rates may apply. Reply STOP to opt out or HELP for help. This does not sign me up for marketing texts and is not required to submit my request. <Link to="/terms#sms" className="underline decoration-white/40 underline-offset-2 hover:decoration-white">SMS Terms</Link> and <Link to="/privacy-policy#sms" className="underline decoration-white/40 underline-offset-2 hover:decoration-white">Privacy Policy</Link>.</span>
            </label>
          </fieldset>

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

function PhoneField({
  countryCode,
  phone,
  onCountryCodeChange,
  onPhoneChange,
}: {
  countryCode: string;
  phone: string;
  onCountryCodeChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
}) {
  return (
    <div className="contact-phone-fields">
      <label className="contact-phone-country">
        <span className="mb-3 block text-sm font-medium uppercase tracking-[0.1em] text-stone-200">Country code</span>
        <select
          name="phoneCountryCode"
          aria-label="Country calling code"
          autoComplete="tel-country-code"
          value={countryCode}
          onChange={(event) => onCountryCodeChange(event.target.value)}
          className="form-control"
        >
          {countryCallingCodes.map(({ country, code }) => <option key={`${country}-${code}`} value={code}>{code} · {country}</option>)}
        </select>
      </label>
      <label className="contact-phone-number">
        <span className="mb-3 block text-sm font-medium uppercase tracking-[0.1em] text-stone-200">Phone number</span>
        <input
          name="phone"
          type="tel"
          autoComplete="tel-national"
          inputMode="tel"
          placeholder="Phone number"
          value={phone}
          onChange={(event) => onPhoneChange(event.target.value)}
          className="form-control"
          required
        />
      </label>
    </div>
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
