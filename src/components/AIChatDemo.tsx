import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Bot, Send, User } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

interface Message {
  id: string;
  text: string;
  sender: 'ai' | 'user';
}

const qualificationFlow = [
  'Do you own or manage a bail bond agency?',
  'What do you need help with most: calls, SEO, website, CRM, dashboards, appointment setting, mobile apps, or follow-up?',
  'What is your agency website URL?',
  'What city and state does your agency serve?',
  'Do you miss calls after hours?',
  'Which service sounds most relevant right now?',
  'Would you like the free bail bond lead system audit?',
  'What is the best email or phone number for follow-up?',
  'Thanks. LyCore can review your details and prepare next steps for human review.',
];

function deterministicReply(message: string, step: number) {
  const normalized = message.toLowerCase();
  if (normalized.includes('legal') || normalized.includes('court') || normalized.includes('bail outcome')) {
    return 'I cannot give legal advice or determine bail outcomes. LyCore AI supports intake, summaries, CRM updates, and follow-up while licensed professionals stay in control.';
  }
  if (step >= qualificationFlow.length) {
    return 'The next best step is the free bail bond lead system audit. LyCore can review calls, website, intake, CRM handoff, dashboards, appointments, and follow-up readiness.';
  }
  return qualificationFlow[step];
}

export default function AIChatDemo() {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'Hi, I can help you review your bail bond lead system. Do you own or manage a bail bond agency?', sender: 'ai' },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [opened, setOpened] = useState(false);
  const [step, setStep] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;
    if (!opened) {
      setOpened(true);
      trackEvent('chatbot_open', { path: window.location.pathname });
    }

    const userText = input.trim();
    setMessages((prev) => [...prev, { id: Date.now().toString(), text: userText, sender: 'user' }]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText }),
      });
      const result = await response.json().catch(() => ({}));
      const text = result.text || deterministicReply(userText, step);
      setMessages((prev) => [...prev, { id: `${Date.now()}-ai`, text, sender: 'ai' }]);
    } catch {
      setMessages((prev) => [...prev, { id: `${Date.now()}-fallback`, text: deterministicReply(userText, step), sender: 'ai' }]);
    } finally {
      const nextStep = Math.min(step + 1, qualificationFlow.length);
      setStep(nextStep);
      if (/audit|crm|after-hours|calls|seo|dashboard|appointment|booking|mobile|app|email|phone/i.test(userText)) {
        trackEvent('chatbot_lead_captured', { step: nextStep, topic: userText.slice(0, 80) });
      }
      setIsTyping(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto glass-panel rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex flex-col h-[500px]">
      <div className="p-4 border-b border-white/5 bg-white/5 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
          <Bot size={20} className="text-white" />
        </div>
        <div>
          <h3 className="text-sm font-medium tracking-wide">LyCore AI Intake Demo</h3>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-ink-muted font-bold">Qualification support</span>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div key={msg.id} initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex gap-3 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.sender === 'user' ? 'bg-white/10' : 'bg-white/20'}`}>
                  {msg.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
                </div>
                <div className={`p-4 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user' ? 'bg-white/10 text-white rounded-tr-none' : 'bg-white/5 border border-white/10 text-ink-muted rounded-tl-none'}`}>
                  {msg.text}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Bot size={14} />
              </div>
              <div className="bg-white/5 border border-white/10 p-3 rounded-2xl rounded-tl-none flex gap-1">
                <span className="w-1 h-1 bg-white/40 rounded-full animate-bounce" />
                <span className="w-1 h-1 bg-white/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1 h-1 bg-white/40 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSend();
        }}
        className="p-4 border-t border-white/5 bg-white/5 flex gap-3"
      >
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Answer the intake question..."
          className="flex-1 h-10 rounded-full bg-white/5 border border-white/10 px-4 text-white text-xs font-light focus:outline-none focus:border-white/30 transition-colors"
          aria-label="Chat message"
        />
        <button type="submit" disabled={!input.trim() || isTyping} className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center disabled:opacity-50 transition-opacity" aria-label="Send chat message">
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}
