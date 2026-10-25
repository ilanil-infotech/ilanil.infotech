import React from 'react';
import { WHY_CHOOSE_US_EN, WHY_CHOOSE_US_TA } from '../data/companyData';
import { ShieldCheck, MessageSquare, Layers, Sparkles } from 'lucide-react';

interface WhyChooseUsProps {
  language: 'en' | 'ta';
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ language }) => {
  const items = language === 'ta' ? WHY_CHOOSE_US_TA : WHY_CHOOSE_US_EN;

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <ShieldCheck className="w-5 h-5 text-emerald-700" />;
      case 1:
        return <MessageSquare className="w-5 h-5 text-teal-700" />;
      case 2:
        return <Layers className="w-5 h-5 text-sky-700" />;
      case 3:
      default:
        return <Sparkles className="w-5 h-5 text-lime-700" />;
    }
  };

  const getBadgeStyle = (idx: number) => {
    switch (idx) {
      case 0:
        return 'bg-emerald-50 border-emerald-200/80';
      case 1:
        return 'bg-teal-50 border-teal-200/80';
      case 2:
        return 'bg-sky-50 border-sky-200/80';
      case 3:
      default:
        return 'bg-lime-50 border-lime-200/80';
    }
  };

  return (
    <section id="why-us" className="py-20 border-t border-emerald-100/60 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-emerald-700 uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>{language === 'ta' ? 'நம்பகத்தன்மை & தரம்' : 'Why Work With Us'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            {language === 'ta'
              ? 'நேரடி தொடர்பு, முழு உரிமை & நம்பகமான சேவை.'
              : 'Software engineering built on ownership, trust, and clarity.'}
          </h2>
          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            {language === 'ta'
              ? 'நாங்கள் வழங்கும் ஒவ்வொரு மென்பொருளுக்கும் முழு மூலக்குறியீட்டு உரிமை மற்றும் வெளிப்படையான தொழில்முறை ஆதரவு உண்டு.'
              : 'You get full source code ownership, direct communication with software architects, and ongoing technical reliability.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl border border-slate-200/80 bg-white hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-900/5 transition-all flex flex-col justify-between"
            >
              <div>
                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 ${getBadgeStyle(idx)}`}>
                  {getIcon(idx)}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
