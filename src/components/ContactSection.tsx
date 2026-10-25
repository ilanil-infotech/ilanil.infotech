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
    <section id="contact" className="py-20 border-t border-emerald-100/60 bg-[#f4faf6]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-emerald-700 uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>{language === 'ta' ? 'நேரடி தொடர்பு' : 'Get in Touch'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            {language === 'ta'
              ? 'உங்கள் மென்பொருள் திட்டம் பற்றி பேசலாம்.'
              : 'Let’s discuss your software project.'}
          </h2>
          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            {language === 'ta'
              ? 'மின்னஞ்சல் மூலமாகவோ அல்லது கீழேயுள்ள படிவம் மூலமாகவோ தொடர்பு கொள்ளலாம். உங்கள் தேவைகளை ஆய்வு செய்து விரைவில் பதிலளிக்கிறோம்.'
              : 'Reach out directly via email or submit the form below. We will review your requirements and respond promptly.'}
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-emerald-200/80 text-sm text-slate-700 shadow-xs">
              <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-emerald-950 hover:text-emerald-700 font-semibold transition-colors"
              >
                {COMPANY_INFO.email}
              </a>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-emerald-200/80 text-xs text-slate-700 shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>{COMPANY_INFO.location}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-emerald-100 p-7 sm:p-9 max-w-2xl mx-auto shadow-xl shadow-emerald-900/5">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {language === 'ta' ? 'தகவல் வெற்றிகரமாக பெறப்பட்டது!' : 'Inquiry Received Successfully'}
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                {language === 'ta' ? (
                  <>நன்றி, <strong className="text-emerald-950">{name}</strong>. உங்கள் திட்டம் குறித்த விவரங்கள் எங்களது மின்னஞ்சலுக்கு ({COMPANY_INFO.email}) அனுப்பப்பட்டுள்ளது. விரைவில் உங்களைத் தொடர்பு கொள்கிறோம்.</>
                ) : (
                  <>Thank you, <strong className="text-emerald-950">{name}</strong>. Your inquiry has been routed to <span className="text-emerald-700 font-medium">{COMPANY_INFO.email}</span>. We will get back to you shortly.</>
                )}
              </p>
              <div className="pt-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-2.5 text-xs font-semibold text-emerald-950 hover:bg-emerald-50 bg-slate-100 rounded-xl transition-colors"
                >
                  {language === 'ta' ? 'மற்றொரு செய்தி அனுப்ப' : 'Send Another Message'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  {language === 'ta' ? 'உங்கள் பெயர் *' : 'Your Name *'}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={language === 'ta' ? 'எ.கா. செந்தில் குமார்' : 'e.g. Senthil Kumar'}
                  className="w-full px-4 py-3 bg-[#fafdfb] border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  {language === 'ta' ? 'மின்னஞ்சல் அல்லது தொடர்பு எண் *' : 'Email or Contact *'}
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={language === 'ta' ? 'எ.கா. yourname@gmail.com அல்லது 9876543210' : 'e.g. name@company.com or phone'}
                  className="w-full px-4 py-3 bg-[#fafdfb] border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  {language === 'ta' ? 'திட்ட விவரங்கள் *' : 'Project Requirements *'}
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={language === 'ta'
                    ? 'நீங்கள் உருவாக்க விரும்பும் மென்பொருள் அல்லது செயலி பற்றி குறிப்பிடவும் (எ.கா. வாடிக்கையாளர் பில்லிங் வெப்சைட், டெலிவரி ஆப், அல்லது AI ஆட்டோமேஷன்)...'
                    : 'Tell us what you would like to build (e.g. web application, mobile app, billing software, or AI automation)...'}
                  className="w-full px-4 py-3 bg-[#fafdfb] border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 text-xs font-semibold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 rounded-xl hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-sm shadow-emerald-600/20 active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>{language === 'ta' ? 'செய்தி அனுப்ப' : 'Send Message'}</span>
              </button>

              <div className="text-center pt-2">
                <span className="text-[11px] text-slate-500">
                  {language === 'ta' ? 'நேரடியாக மின்னஞ்சல் அனுப்ப: ' : 'Or email directly to '}
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-emerald-700 hover:underline font-medium">
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
