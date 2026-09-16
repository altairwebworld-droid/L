import { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../lib/analytics';

const numberValue = (value: string, fallback: number) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
};

export default function MissedCallCalculator() {
  const [missedCalls, setMissedCalls] = useState('8');
  const [jobValue, setJobValue] = useState('350');
  const [recoveryRate, setRecoveryRate] = useState('20');
  const [hasTrackedUse, setHasTrackedUse] = useState(false);

  const monthlyOpportunity = useMemo(() => {
    const weeklyCalls = numberValue(missedCalls, 0);
    const value = numberValue(jobValue, 0);
    const recovery = Math.min(numberValue(recoveryRate, 0), 100) / 100;
    return Math.round(weeklyCalls * value * recovery * 4.33);
  }, [jobValue, missedCalls, recoveryRate]);

  const trackUse = () => {
    if (hasTrackedUse) return;
    setHasTrackedUse(true);
    trackEvent('missed_call_calculator_used');
  };

  return (
    <section className="px-6 py-10 md:py-16" aria-labelledby="calculator-heading">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-[#ff6b22]/35 bg-[#ff6b22]/10 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-10">
        <div>
          <p className="micro-label text-[#ff6b22]">Quick estimate</p>
          <h2 id="calculator-heading" className="mt-3 max-w-xl font-display text-3xl font-medium leading-tight text-white md:text-4xl">What could unanswered calls be costing?</h2>
          <p className="mt-4 max-w-xl leading-relaxed text-ink-muted">Use your own rough numbers. This is a planning estimate, not a promise of recovered revenue or booked work.</p>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <CalculatorField label="Missed calls per week" value={missedCalls} onChange={setMissedCalls} onBlur={trackUse} min="0" step="1" />
            <CalculatorField label="Average job value" value={jobValue} onChange={setJobValue} onBlur={trackUse} min="0" step="25" prefix="$" />
            <CalculatorField label="Possible recovery" value={recoveryRate} onChange={setRecoveryRate} onBlur={trackUse} min="0" max="100" step="5" suffix="%" />
          </div>
        </div>

        <aside className="rounded-3xl border border-white/15 bg-black/30 p-6 md:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-stone-300">Illustrative monthly opportunity</p>
          <p className="mt-3 font-display text-5xl font-medium tracking-tight text-white">${monthlyOpportunity.toLocaleString('en-US')}</p>
          <p className="mt-4 text-sm leading-relaxed text-stone-300">Based on {missedCalls || '0'} missed calls per week, a ${jobValue || '0'} average job, and a {recoveryRate || '0'}% recovery assumption.</p>
          <Link to="/book" onClick={() => trackEvent('missed_call_calculator_cta_click')} className="btn-primary mt-7 w-full justify-center">
            Review my call path <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </aside>
      </div>
    </section>
  );
}

function CalculatorField({
  label,
  value,
  onChange,
  onBlur,
  min,
  max,
  step,
  prefix,
  suffix,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  min: string;
  max?: string;
  step: string;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-[0.1em] text-stone-300">{label}</span>
      <span className="flex items-center rounded-xl border border-white/15 bg-black/25 px-3">
        {prefix && <span className="text-stone-400" aria-hidden="true">{prefix}</span>}
        <input
          type="number"
          inputMode="decimal"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onBlur={onBlur}
          className="w-full bg-transparent px-1 py-3 text-lg text-white outline-none"
        />
        {suffix && <span className="text-stone-400" aria-hidden="true">{suffix}</span>}
      </span>
    </label>
  );
}
