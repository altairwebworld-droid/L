import { getAnalyticsConsent } from './analytics';

type WhopProps = Record<string, unknown>;

declare global {
  interface Window {
    // Defined by the Whop Pixel snippet in <head>. It queues calls until Whop's script loads.
    whop?: { track: (event: string, props?: WhopProps) => void };
  }
}

/** Send one funnel event to Whop. Tracking must never break the page, so every failure is swallowed. */
export function whopTrack(event: string, props: WhopProps = {}) {
  if (typeof window === 'undefined') return;
  try {
    window.whop?.track(event, props);
  } catch {
    // The visitor's action matters more than the event.
  }
}

/**
 * Personal details help Whop match a conversion to an ad, but they only go out when the visitor
 * accepted analytics. A Global Privacy Control signal counts as a refusal (see getAnalyticsConsent).
 */
export function whopCustomer(info: { email?: string; phone?: string; name?: string }): WhopProps {
  if (getAnalyticsConsent() !== 'granted') return {};
  const customer: WhopProps = {};
  const email = info.email?.trim().toLowerCase();
  const phone = info.phone?.replace(/[^\d+]/g, '');
  const name = info.name?.trim();
  if (email) customer.email = email;
  if (phone && phone.replace(/\D/g, '').length >= 7) customer.phone = phone;
  if (name) customer.name = name;
  return customer;
}

function randomId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') return crypto.randomUUID();
  return `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`;
}

/** A fresh id for one real action. Use it once, at the moment the action succeeds. */
export function newEventId(prefix: string) {
  return `${prefix}_${randomId()}`;
}

/**
 * For events fired on a page that can be reloaded (a thank-you page): the same id is reused for a
 * while in this browser tab, so a refresh counts as one conversion instead of two.
 */
export function sessionEventId(prefix: string, ttlMs = 30 * 60 * 1000) {
  const key = `lycore_whop_${prefix}`;
  try {
    const saved = JSON.parse(window.sessionStorage.getItem(key) || 'null') as { id: string; at: number } | null;
    if (saved && Date.now() - saved.at < ttlMs) return saved.id;
    const next = { id: newEventId(prefix), at: Date.now() };
    window.sessionStorage.setItem(key, JSON.stringify(next));
    return next.id;
  } catch {
    return newEventId(prefix);
  }
}
