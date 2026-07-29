import { CSSProperties, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

// Card is always a dark navy surface with light text, regardless of the
// ambient section it sits in (e.g. an ivory Section overrides --color-ink
// for its own copy — Card resets it back so nested text stays legible).
const cardTokens: CSSProperties = {
  '--color-ink': '#ffffff',
  '--color-ink-muted': '#a9c5ec',
} as CSSProperties;

export function Card({ className, style, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-3xl border border-white/10 bg-bg-card/60 text-white shadow-[0_20px_60px_rgba(3,12,32,0.35)] backdrop-blur-sm',
        className,
      )}
      style={{ ...cardTokens, ...style }}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col gap-2 p-6 md:p-8', className)} {...props} />;
}

export function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn('text-xl font-medium tracking-tight text-ink md:text-2xl', className)} {...props} />;
}

export function CardDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('text-sm font-light leading-relaxed text-ink-muted', className)} {...props} />;
}

export function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('px-6 pb-6 md:px-8 md:pb-8', className)} {...props} />;
}

export function CardFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex items-center gap-3 px-6 pb-6 md:px-8 md:pb-8', className)} {...props} />;
}
