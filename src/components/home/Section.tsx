import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

/**
 * Shared section shell. Keeps vertical rhythm, container width and chapter
 * separation identical across the homepage instead of each section inventing
 * its own spacing.
 */
export function Section({
  id,
  tint = false,
  surface,
  divider = true,
  className,
  children,
}: {
  id?: string;
  /** Subtle raised surface, used to alternate chapters on the dark page. */
  tint?: boolean;
  /**
   * Warm ivory surface with dark text — breaks up an all-navy page by
   * overriding the `--color-ink*` tokens locally, so anything already using
   * `text-ink` / `text-ink-muted` / `.micro-label` adapts automatically.
   */
  surface?: 'ivory';
  /** Hairline rule marking the start of a chapter. */
  divider?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const isIvory = surface === 'ivory';

  // An ivory section carries its OWN cream surface rather than relying on the
  // page gradient to be light where it happens to land. That coupling was the
  // source of dark-text-on-dark-field bugs. The surface fades in and out at the
  // edges so it blends into the field instead of cutting a hard band across it.
  return (
    <section
      id={id}
      className={cn(
        'relative py-12 md:py-16 lg:py-20',
        tint && !isIvory && 'bg-white/[0.02]',
        isIvory && 'surface-cream text-[#092f69]',
        className,
      )}
      style={
        isIvory
          ? ({
              '--color-ink': '#092f69',
              '--color-ink-muted': '#4a5f8a',
            } as React.CSSProperties)
          : undefined
      }
    >
      {divider && !isIvory && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent"
        />
      )}
      {children}
    </section>
  );
}

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn('mx-auto w-full max-w-7xl px-6', className)}>{children}</div>;
}

/**
 * Section header. With `lead` it splits into a two-column arrangement; without
 * it the title sits in a narrow measure.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  className,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  className?: string;
}) {
  if (lead) {
    return (
      <div className={cn('mb-10 grid gap-6 lg:grid-cols-[1fr_0.6fr] lg:items-end', className)}>
        <div>
          <p className="micro-label mb-4 text-ink-muted">{eyebrow}</p>
          <h2 className="section-title max-w-2xl text-ink">{title}</h2>
        </div>
        <p className="text-base font-light leading-relaxed text-ink-muted">{lead}</p>
      </div>
    );
  }

  return (
    <div className={cn('mb-10 max-w-2xl', className)}>
      <p className="micro-label mb-4 text-ink-muted">{eyebrow}</p>
      <h2 className="section-title text-ink">{title}</h2>
    </div>
  );
}
