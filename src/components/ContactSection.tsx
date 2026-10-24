import React, { useState, useEffect } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ContactSectionProps {
  initialSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialSubject }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialSubject) {
      setMessage(`Hi Ilanil Infotech, I would like to inquire about: ${initialSubject}.\n\nHere are some details about my project: `);
    }
  }, [initialSubject]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please provide a valid email address.');
      return;
    }
    if (!message.trim()) {
      setError('Please provide a message or brief description of your project.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-800/80 bg-[#0a0e17]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase mb-2">
            Get in Touch
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight [text-wrap:balance]">
            Let’s discuss your software project.
          </h2>
          <p className="text-sm text-slate-300 mt-3 leading-relaxed">
            Reach out via email or submit the form below. We will review your requirements and respond promptly.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#111726] border border-slate-800 text-sm text-slate-200">
            <Mail className="w-4 h-4 text-blue-400 shrink-0" />
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="text-white hover:text-blue-400 font-medium transition-colors"
            >
              {COMPANY_INFO.email}
            </a>
          </div>
        </div>

        <div className="bg-[#111726] rounded-xl border border-slate-800 p-6 sm:p-8 max-w-2xl mx-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Message Sent Successfully</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{name}</strong>. Your inquiry has been sent to <span className="text-blue-400 font-medium">{COMPANY_INFO.email}</span>. We will reach back to you shortly.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 rounded-lg bg-rose-950/60 border border-rose-800/80 text-xs text-rose-300">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="w-full px-3.5 py-2.5 bg-[#0d131f] border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. john@example.com"
                  className="w-full px-3.5 py-2.5 bg-[#0d131f] border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what you'd like to build (e.g. mobile app, web platform, API, or hosting requirements)..."
                  className="w-full px-3.5 py-2.5 bg-[#0d131f] border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 shadow-sm shadow-blue-500/20 active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>

              <div className="text-center pt-2">
                <span className="text-[11px] text-slate-400">
                  Or email directly to{' '}
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-blue-400 hover:underline">
                    {COMPANY_INFO.email}
                  </a>
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
