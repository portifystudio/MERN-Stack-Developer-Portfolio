import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

const responses = {
  default: "I'm Madhan's portfolio assistant! Ask me about his skills, projects, experience, or how to get in touch. 🚀",
  skills: "Madhan is a MERN Stack specialist: **React, Node.js, Express, MongoDB**. He also works with TypeScript, Docker, AWS, and has experience with Java & JDBC.",
  projects: "Madhan has built several featured projects:\n• **IoT Agriculture Shield** – real-time field protection system\n• **Nexus Hotel System** – Java-based backend CUI\n• **BakeSync GUI** – bakery management with PDF export\n• **MERN Cloud Storage** – distributed cloud file system\n\nScroll up to the Projects section to see more!",
  contact: "You can reach Madhan at:\n📧 sriramojumadhan@gmail.com\n💼 linkedin.com/in/madhansreeramoju\n🐱 github.com/sriramojumadhan-ops\n\nOr use the Contact form on this page!",
  experience: "Madhan has 3+ years of experience building full-stack applications. He thrives in agile teams, delivers clean code, and has shipped 15+ projects across IoT, SaaS, and enterprise domains.",
  hire: "Madhan is currently **open to opportunities** — freelance projects, full-time roles, and exciting collaborations! Click **Hire Me** in the navigation or scroll to the Contact section. 🎯",
  blog: "Madhan writes about MERN stack development, React architecture, database design, UI/UX trends, and web security. Check out the Blog section for his latest insights!",
};

const getResponse = (msg) => {
  const m = msg.toLowerCase();
  if (m.match(/skill|stack|tech|language|react|node|mongo/)) return responses.skills;
  if (m.match(/project|build|work|portfolio|demo/)) return responses.projects;
  if (m.match(/contact|email|reach|linkedin|github|social/)) return responses.contact;
  if (m.match(/experience|year|agile|team|career/)) return responses.experience;
  if (m.match(/hire|job|freelance|available|opportunit/)) return responses.hire;
  if (m.match(/blog|article|post|write|insight/)) return responses.blog;
  return responses.default;
};

const AIChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 0, role: 'bot', text: "Hi! 👋 I'm Madhan's AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg = { id: Date.now(), role: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      const botText = getResponse(text);
      setMessages(prev => [...prev, { id: Date.now() + 1, role: 'bot', text: botText }]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  const renderText = (text) =>
    text.split('\n').map((line, i) => (
      <p key={i} className="mb-1 last:mb-0" dangerouslySetInnerHTML={{
        __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-neon-blue">$1</strong>')
      }} />
    ));

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(prev => !prev)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-primary-purple to-neon-blue rounded-full shadow-[0_0_25px_rgba(109,40,217,0.4)] flex items-center justify-center text-white"
        aria-label="Toggle AI assistant"
      >
        <AnimatePresence mode="wait">
          {open
            ? <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><X size={24} /></motion.div>
            : <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}><MessageCircle size={24} /></motion.div>
          }
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-[350px] max-h-[500px] glass rounded-3xl border border-white/10 flex flex-col overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-primary-purple/30 to-neon-blue/20 border-b border-white/5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-purple to-neon-blue flex items-center justify-center">
                <Bot size={18} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-sm">Portfolio Assistant</p>
                <p className="text-[10px] text-text-dark-muted flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Powered by AI · Always online
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-4 space-y-3 scroll-smooth">
              {messages.map(msg => (
                <div key={msg.id} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'bot' && (
                    <div className="w-7 h-7 rounded-full bg-primary-purple/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot size={14} className="text-primary-purple-light" />
                    </div>
                  )}
                  <div className={`max-w-[80%] rounded-2xl text-sm px-4 py-3 ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-br from-primary-purple to-neon-blue text-white rounded-tr-sm'
                      : 'bg-white/5 text-text-dark-muted rounded-tl-sm'
                  }`}>
                    {renderText(msg.text)}
                  </div>
                  {msg.role === 'user' && (
                    <div className="w-7 h-7 rounded-full bg-neon-blue/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <User size={14} className="text-neon-blue" />
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-2 items-center">
                  <div className="w-7 h-7 rounded-full bg-primary-purple/30 flex items-center justify-center">
                    <Bot size={14} className="text-primary-purple-light" />
                  </div>
                  <div className="bg-white/5 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1">
                    {[0, 1, 2].map(i => (
                      <span key={i} className="w-1.5 h-1.5 rounded-full bg-text-dark-muted animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick Prompts */}
            <div className="px-4 pb-2 flex gap-2 overflow-x-auto scrollbar-none">
              {['Skills', 'Projects', 'Hire Me', 'Contact'].map(q => (
                <button
                  key={q}
                  onClick={() => { setInput(q); setTimeout(sendMessage, 50); }}
                  className="flex-shrink-0 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/10 hover:border-neon-blue/40 bg-white/5 text-text-dark-muted hover:text-neon-blue transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="px-4 pb-4 pt-2 border-t border-white/5 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask me anything..."
                className="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-neon-blue transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={sendMessage}
                className="w-10 h-10 bg-gradient-to-br from-primary-purple to-neon-blue rounded-xl flex items-center justify-center text-white"
              >
                <Send size={16} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
