import React, { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { getAttribution, trackEvent } from '../lib/analytics';
import { site } from '../siteData';

type LeadFormState = {
  fullName: string;
  agencyName: string;
  website: string;
  email: string;
  phone: string;
  location: string;
  biggestChallenge: string;
  currentCRM: string;
  missedCalls: string;
  preferredContactMethod: string;
  preferredContactTime: string;
  message: string;
  consent: boolean;
  honeypot: string;
};

const initialState: LeadFormState = {
  fullName: '',
  agencyName: '',
  website: '',
  email: '',
  phone: '',
  location: '',
  biggestChallenge: '',
  currentCRM: '',
  missedCalls: '',
  preferredContactMethod: '',
  preferredContactTime: '',
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
      setStatus({ type: 'success', message: 'Audit request received. LyCore will review your lead system details.' });
      return;
    }
    
    if (!formData.consent) {
      setStatus({ type: 'error', message: 'Please confirm consent before requesting the audit.' });
      trackEvent('audit_form_submit_error', { reason: 'missing_consent' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: 'idle', message: 'Submitting your audit request...' });
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
        message: result.manualSetupRequired
          ? 'Audit request received. CRM routing requires manual setup before production automation is active.'
          : 'Audit request received. LyCore will review your lead system details.',
      });
      trackEvent('audit_form_submit_success', { manualSetupRequired: Boolean(result.manualSetupRequired) });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Submission failed.';
      setStatus({ type: 'error', message: `${message} Backend or CRM setup may still be required.` });
      trackEvent('audit_form_submit_error', { reason: message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="glass-panel rounded-[32px] border border-white/10 p-6 md:p-10 space-y-6" onSubmit={handleSubmit}>
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
          <div>
            <h2 className="text-3xl font-medium mb-3">Request Your Free Audit</h2>
            <p className="text-stone-300 font-light leading-relaxed">
              Share how your agency captures leads today. The payload is ready for backend and CRM routing once real credentials are configured.
            </p>
          </div>

          {/* Honeypot field - hidden from real users */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company_fax">Company Fax</label>
            <input id="company_fax" name="company_fax" type="text" tabIndex={-1} autoComplete="off" value={formData.honeypot} onChange={(event) => updateField('honeypot', event.target.value)} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Full name" id="fullName" value={formData.fullName} onChange={(value) => updateField('fullName', value)} required />
            <Field label="Agency name" id="agencyName" value={formData.agencyName} onChange={(value) => updateField('agencyName', value)} required />
            <Field label="Website URL" id="website" type="url" value={formData.website} onChange={(value) => updateField('website', value)} />
            <Field label="Email" id="email" type="email" value={formData.email} onChange={(value) => updateField('email', value)} required />
            <Field label="Phone number" id="phone" type="tel" value={formData.phone} onChange={(value) => updateField('phone', value)} required />
            <Field label="City/state" id="location" value={formData.location} onChange={(value) => updateField('location', value)} required />
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
            <Field label="Current CRM/tool" id="currentCRM" value={formData.currentCRM} onChange={(value) => updateField('currentCRM', value)} />
            <Select
              label="Do you miss after-hours calls?"
              id="missedCalls"
              value={formData.missedCalls}
              onChange={(value) => updateField('missedCalls', value)}
              options={['Yes', 'No', 'Not sure']}
              required
            />
            <Select
              label="Preferred contact method"
              id="preferredContactMethod"
              value={formData.preferredContactMethod}
              onChange={(value) => updateField('preferredContactMethod', value)}
              options={['Email', 'Phone', 'Text']}
              required
            />
            <Field label="Preferred contact time" id="preferredContactTime" value={formData.preferredContactTime} onChange={(value) => updateField('preferredContactTime', value)} />
          </div>

          <label className="block">
            <span className="block text-sm uppercase tracking-[0.1em] text-stone-200 mb-3 font-medium">Message</span>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={(event) => updateField('message', event.target.value)}
              className="form-control resize-none"
              placeholder="Tell us what happens when a lead contacts your agency today..."
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
              I consent to LyCore using this information to respond to my audit request. Analytics, CRM routing, email, chatbot, and booking integrations require manual setup before production use.
            </span>
          </label>

          <p className="text-xs text-stone-400 leading-relaxed">
            No pressure. No ranking, revenue, client volume, or legal outcome guarantees. {site.aiDisclaimer}
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
  required = false,
}: {
  label: string;
  id: keyof LeadFormState;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-sm uppercase tracking-[0.1em] text-stone-200 mb-3 font-medium">{label}</span>
      <select name={id} value={value} onChange={(event) => onChange(event.target.value)} className="form-control" required={required}>
        <option value="">Select one</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
