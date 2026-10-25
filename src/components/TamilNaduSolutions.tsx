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
        return <ShoppingCart className="w-5 h-5 text-emerald-700" />;
      case 1:
        return <Factory className="w-5 h-5 text-teal-700" />;
      case 2:
        return <Stethoscope className="w-5 h-5 text-sky-700" />;
      case 3:
      default:
        return <Truck className="w-5 h-5 text-lime-700" />;
    }
  };

  const getIconBg = (idx: number) => {
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
    <section id="use-cases" className="py-20 border-t border-emerald-100/60 bg-[#f4faf6]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-emerald-700 uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>{language === 'ta' ? 'தமிழ்நாடு வணிகங்களுக்கான தீர்வுகள்' : 'Regional & Enterprise Solutions'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            {language === 'ta'
              ? 'உங்கள் வணிகத் துறையை டிஜிட்டல் மயமாக்கும் மென்பொருட்கள்.'
              : 'Software built for real business workflows.'}
          </h2>
          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            {language === 'ta'
              ? 'சில்லறை வர்த்தகம், ஜவுளி உற்பத்தி, கிளினிக் முதல் உள்ளூர் டெலிவரி வரை — நீங்கள் யோசிக்கும் வணிக மாடலுக்கு முழுமையான மென்பொருள் செய்து தருகிறோம்.'
              : 'From retail billing and textile manufacturing ERPs to clinical scheduling and on-demand delivery apps — we build turnkey software tailored to your workflows.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TAMIL_NADU_USE_CASES.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl border border-slate-200/80 bg-white hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-900/5 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 ${getIconBg(idx)}`}>
                  {getIcon(idx)}
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2.5 leading-snug group-hover:text-emerald-800 transition-colors">
                  {language === 'ta' ? item.tamilTitle : item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {language === 'ta' ? item.tamilDesc : item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onSelectSolution(language === 'ta' ? item.tamilTitle : item.title)}
                  className="text-xs sm:text-sm font-semibold text-emerald-700 group-hover:text-emerald-800 flex items-center gap-1 transition-colors"
                >
                  <span>{language === 'ta' ? 'விவரம் கேட்க' : 'Discuss This'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
