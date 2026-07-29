import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './brutalist-card.css';

export function BrutalistCard({
  icon,
  alert,
  message,
  children,
}: {
  icon: ReactNode;
  alert: string;
  message: string;
  children?: ReactNode;
}) {
  return (
    <div className="brutalist-card">
      <div className="brutalist-card__header">
        <div className="brutalist-card__icon">{icon}</div>
        <div className="brutalist-card__alert">{alert}</div>
      </div>
      <p className="brutalist-card__message">{message}</p>
      {children && <div className="brutalist-card__actions">{children}</div>}
    </div>
  );
}

export function BrutalistCardLink({
  to,
  primary = false,
  children,
}: {
  to: string;
  primary?: boolean;
  children: ReactNode;
}) {
  const className = `brutalist-card__button${primary ? ' brutalist-card__button--primary' : ''}`;
  if (to.startsWith('http') || to.startsWith('mailto:')) {
    return (
      <a href={to} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
