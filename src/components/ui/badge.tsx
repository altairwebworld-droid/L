import { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-[var(--color-ink)]/15 bg-[var(--color-ink)]/5 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.08em] text-ink-muted',
        className,
      )}
      {...props}
    />
  );
}
