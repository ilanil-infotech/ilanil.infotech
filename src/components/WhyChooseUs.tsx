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
        return <ShieldCheck className="w-5 h-5 text-blue-400" />;
      case 1:
        return <MessageSquare className="w-5 h-5 text-emerald-400" />;
      case 2:
        return <Layers className="w-5 h-5 text-indigo-400" />;
      case 3:
      default:
        return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="why-us" className="py-20 border-t border-slate-800/80 bg-[#0b0f17]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase mb-2">
            {language === 'ta' ? 'நம்பகத்தன்மை & வெளிப்படைத்தன்மை' : 'Why Work With Us'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight [text-wrap:balance]">
            {language === 'ta'
              ? 'நேரடி தொடர்பு, முழு உரிமை & நம்பகமான சேவை.'
              : 'Engineering built on trust, transparency, and ownership.'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-slate-800 bg-[#111726] flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center mb-4">
                  {getIcon(idx)}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
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
