import { useEffect } from 'react';
import { Mic } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

type BlandWindow = Window & { __BLAND_SHADOW_ROOT__?: ShadowRoot };

const blandRoot = () => (window as BlandWindow).__BLAND_SHADOW_ROOT__ ?? null;
const findLauncher = () => blandRoot()?.querySelector<HTMLButtonElement>('#bland-widget-root button') ?? null;
const findVoiceOption = () =>
  Array.from(blandRoot()?.querySelectorAll<HTMLButtonElement>('button') ?? []).find((b) => /voice chat/i.test(b.textContent ?? '')) ?? null;

const wait = (ms: number) => new Promise((resolve) => window.setTimeout(resolve, ms));

async function waitFor<T>(find: () => T | null, timeoutMs: number): Promise<T | null> {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const found = find();
    if (found) return found;
    await wait(100);
  }
  return null;
}

export default function AgentTestCta() {
  // Bland's default launcher is a small white circle that vanishes on a light page.
  // Once it exists, recolor it to match the site.
  useEffect(() => {
    let tries = 0;
    const timer = window.setInterval(() => {
      const launcher = findLauncher();
      tries += 1;
      if (launcher) {
        launcher.style.background = '#ff6b22';
        launcher.style.borderColor = '#ff6b22';
        window.clearInterval(timer);
      } else if (tries > 40) {
        window.clearInterval(timer);
      }
    }, 500);
    return () => window.clearInterval(timer);
  }, []);

  const openAgent = async () => {
    trackEvent('ai_agent_test_click', { page: window.location.pathname });

    const launcher = await waitFor(findLauncher, 3000);
    if (!launcher) {
      window.location.assign('/book');
      return;
    }

    // If the "Voice chat / Text chat" menu is already open, don't toggle it closed.
    if (!findVoiceOption()) launcher.click();

    // The label promises a live test, so go straight to the voice agent.
    (await waitFor(findVoiceOption, 2000))?.click();
  };

  return (
    <button
      type="button"
      onClick={openAgent}
      className="fixed bottom-5 right-[76px] z-[60] flex items-center gap-2 rounded-full bg-[#171513] px-4 py-3 text-sm font-bold text-white shadow-xl ring-1 ring-white/15 transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6b22]"
      aria-label="Test our AI agent by talking to it live"
    >
      <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff6b22] opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#ff6b22]" />
      </span>
      <Mic className="h-4 w-4" aria-hidden="true" />
      Test our AI agent
    </button>
  );
}
