import { useEffect, useState } from 'react';
import { Mic } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

type BlandWindow = Window & { __BLAND_SHADOW_ROOT__?: ShadowRoot };

const findBlandButton = () =>
  (window as BlandWindow).__BLAND_SHADOW_ROOT__?.querySelector<HTMLButtonElement>('#bland-widget-root button') ?? null;

export default function AgentTestCta() {
  const [ready, setReady] = useState(false);
  const [opened, setOpened] = useState(false);

  // Bland injects its widget after load; wait for its launcher, then make it stand out
  // (its default is a small white circle that disappears on a light page).
  useEffect(() => {
    let tries = 0;
    const timer = window.setInterval(() => {
      const button = findBlandButton();
      tries += 1;
      if (button) {
        button.style.background = '#ff6b22';
        button.style.borderColor = '#ff6b22';
        setReady(true);
        window.clearInterval(timer);
      } else if (tries > 40) {
        window.clearInterval(timer);
      }
    }, 500);
    return () => window.clearInterval(timer);
  }, []);

  if (!ready || opened) return null;

  const openAgent = () => {
    trackEvent('ai_agent_test_click', { page: window.location.pathname });
    findBlandButton()?.click();
    setOpened(true);
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
