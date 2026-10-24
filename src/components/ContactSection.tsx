import React, { useState, useEffect } from 'react';
import { Mail, Send, CheckCircle2, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ContactSectionProps {
  language: 'en' | 'ta';
  initialSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language, initialSubject }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('₹25,000 - ₹60,000');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialSubject) {
      if (language === 'ta') {
        setMessage(`வணக்கம் இளநிலா இன்போடெக், எனக்கு இது குறித்த மென்பொருள் தேவை: ${initialSubject}.\n\nதிட்டம் பற்றிய குறிப்புகள்: `);
      } else {
        setMessage(`Hi Ilanil Infotech, I would like to inquire about: ${initialSubject}.\n\nProject details: `);
      }
    }
  }, [initialSubject, language]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError(language === 'ta' ? 'தயவுசெய்து உங்கள் பெயரை உள்ளிடவும்.' : 'Please provide your name.');
      return;
    }
    if (!email.trim() || (!email.includes('@') && email.length < 8)) {
      setError(language === 'ta' ? 'சரியான மின்னஞ்சல் (Email) அல்லது மொபைல் எண்ணை உள்ளிடவும்.' : 'Please provide a valid email or phone number.');
      return;
    }
    if (!message.trim()) {
      setError(language === 'ta' ? 'உங்கள் மென்பொருள் தேவை பற்றி சுருக்கமாக எழுதவும்.' : 'Please provide a brief description of your project.');
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
            {language === 'ta' ? 'நேரடி தொடர்பு' : 'Get in Touch'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight [text-wrap:balance]">
            {language === 'ta'
              ? 'உங்கள் மென்பொருள் திட்டம் பற்றி பேசலாம்.'
              : 'Let’s discuss your software project.'}
          </h2>
          <p className="text-sm text-slate-300 mt-3 leading-relaxed">
            {language === 'ta'
              ? 'மின்னஞ்சல் மூலமாகவோ அல்லது கீழேயுள்ள படிவம் மூலமாகவோ தொடர்பு கொள்ளலாம். உங்கள் தேவைகளை ஆய்வு செய்து விரைவில் பதிலளிக்கிறோம்.'
              : 'Reach out via email or submit the form below. We will review your requirements and respond promptly.'}
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#111726] border border-slate-800 text-sm text-slate-200">
              <Mail className="w-4 h-4 text-blue-400 shrink-0" />
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-white hover:text-blue-400 font-medium transition-colors"
              >
                {COMPANY_INFO.email}
              </a>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#111726] border border-slate-800 text-xs text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>{COMPANY_INFO.location}</span>
            </div>
          </div>
        </div>

        <div className="bg-[#111726] rounded-xl border border-slate-800 p-6 sm:p-8 max-w-2xl mx-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                {language === 'ta' ? 'தகவல் வெற்றிகரமாக பெறப்பட்டது!' : 'Inquiry Received Successfully'}
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                {language === 'ta' ? (
                  <>நன்றி, <strong className="text-white">{name}</strong>. உங்கள் திட்டம் குறித்த விவரங்கள் எங்களது மின்னஞ்சலுக்கு ({COMPANY_INFO.email}) அனுப்பப்பட்டுள்ளது. விரைவில் உங்களைத் தொடர்பு கொள்கிறோம்.</>
                ) : (
                  <>Thank you, <strong className="text-white">{name}</strong>. Your inquiry has been routed to <span className="text-blue-400 font-medium">{COMPANY_INFO.email}</span>. We will get back to you shortly.</>
                )}
              </p>
              <div className="pt-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors"
                >
                  {language === 'ta' ? 'மற்றொரு செய்தி அனுப்ப' : 'Send Another Message'}
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
                  {language === 'ta' ? 'உங்கள் பெயர் *' : 'Your Name *'}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={language === 'ta' ? 'எ.கா. செந்தில் குமார்' : 'e.g. Senthil Kumar'}
                  className="w-full px-3.5 py-2.5 bg-[#0d131f] border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  {language === 'ta' ? 'மின்னஞ்சல் அல்லது தொடர்பு எண் *' : 'Email or Contact *'}
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={language === 'ta' ? 'எ.கா. yourname@gmail.com' : 'e.g. name@company.com'}
                  className="w-full px-3.5 py-2.5 bg-[#0d131f] border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  {language === 'ta' ? 'தோராயமான பட்ஜெட் (Budget Range)' : 'Estimated Budget Range'}
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#0d131f] border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                >
                  <option value="₹25,000 - ₹60,000">₹25,000 – ₹60,000 ({language === 'ta' ? 'ஆரம்ப நிலை / எளிய மென்பொருள்' : 'Starter MVP'})</option>
                  <option value="₹60,000 - ₹1,50,000">₹60,000 – ₹1,50,000 ({language === 'ta' ? 'முழுமையான வெப் & மொபைல் ஆப்' : 'Full Web & Mobile Suite'})</option>
                  <option value="₹1,50,000+">₹1,50,000+ ({language === 'ta' ? 'பெரிய அளவிலான கிளவுட் சாஸ் (SaaS)' : 'Enterprise Scale'})</option>
                  <option value="Discussion Needed">{language === 'ta' ? 'பேசி முடிவெடுக்கலாம் (Need Discussion)' : 'Discussion Needed'}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  {language === 'ta' ? 'திட்ட விவரங்கள் *' : 'Project Requirements *'}
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={language === 'ta'
                    ? 'நீங்கள் உருவாக்க விரும்பும் மென்பொருள் அல்லது செயலி பற்றி குறிப்பிடவும் (எ.கா. வாடிக்கையாளர் பில்லிங் வெப்சைட், டெலிவரி ஆப், அல்லது AI சாட்பாட்)...'
                    : 'Tell us what you would like to build (e.g. web application, mobile app, API, billing software, or AI automation)...'}
                  className="w-full px-3.5 py-2.5 bg-[#0d131f] border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 shadow-sm shadow-blue-500/20 active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>{language === 'ta' ? 'செய்தி அனுப்ப' : 'Send Message'}</span>
              </button>

              <div className="text-center pt-2">
                <span className="text-[11px] text-slate-400">
                  {language === 'ta' ? 'நேரடியாக மின்னஞ்சல் அனுப்ப: ' : 'Or email directly to '}
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
