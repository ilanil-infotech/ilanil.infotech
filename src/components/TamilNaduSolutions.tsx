import React from 'react';
import { TAMIL_NADU_USE_CASES } from '../data/companyData';
import { ShoppingCart, Factory, Stethoscope, Truck, ArrowRight } from 'lucide-react';

interface TamilNaduSolutionsProps {
  language: 'en' | 'ta';
  onSelectSolution: (title: string) => void;
}

export const TamilNaduSolutions: React.FC<TamilNaduSolutionsProps> = ({
  language,
  onSelectSolution,
}) => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <ShoppingCart className="w-5 h-5 text-emerald-400" />;
      case 1:
        return <Factory className="w-5 h-5 text-amber-400" />;
      case 2:
        return <Stethoscope className="w-5 h-5 text-cyan-400" />;
      case 3:
      default:
        return <Truck className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="use-cases" className="py-20 border-t border-slate-800/80 bg-[#070b12]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase mb-2">
            {language === 'ta' ? 'தமிழ்நாடு வணிகங்களுக்கான தீர்வுகள்' : 'Custom Built for Local & Regional Business'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight [text-wrap:balance]">
            {language === 'ta'
              ? 'உங்கள் வணிகத் துறையை டிஜிட்டல் மயமாக்கும் மென்பொருட்கள்.'
              : 'Software solutions built for growing businesses.'}
          </h2>
          <p className="text-sm text-slate-300 mt-3 leading-relaxed">
            {language === 'ta'
              ? 'சில்லறை வர்த்தகம், ஜவுளி உற்பத்தி, கிளினிக் முதல் உள்ளூர் டெலிவரி வரை — நீங்கள் யோசிக்கும் வணிக மாடலுக்கு முழுமையான மென்பொருள் செய்து தருகிறோம்.'
              : 'From retail billing and textile manufacturing ERPs to clinics and on-demand delivery apps — we build turnkey software tailored to your workflows.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TAMIL_NADU_USE_CASES.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-slate-800 bg-[#111726] hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center mb-4">
                  {getIcon(idx)}
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {language === 'ta' ? item.tamilTitle : item.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {language === 'ta' ? item.tamilDesc : item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <button
                  type="button"
                  onClick={() => onSelectSolution(language === 'ta' ? item.tamilTitle : item.title)}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
                >
                  <span>{language === 'ta' ? 'விவரம் கேட்க' : 'Discuss This'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
