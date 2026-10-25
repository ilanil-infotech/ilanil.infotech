import React from 'react';
import { CORE_SERVICES_EN, CORE_SERVICES_TA } from '../data/companyData';
import { Globe, Smartphone, Cloud, Sparkles, Check, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  language: 'en' | 'ta';
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ language, onSelectService }) => {
  const services = language === 'ta' ? CORE_SERVICES_TA : CORE_SERVICES_EN;

  const getIcon = (id: string) => {
    switch (id) {
      case 'web-dev':
        return <Globe className="w-5 h-5 text-emerald-600" />;
      case 'mobile-apis':
        return <Smartphone className="w-5 h-5 text-teal-600" />;
      case 'cloud-hosting':
        return <Cloud className="w-5 h-5 text-sky-600" />;
      case 'ai-tech':
      default:
        return <Sparkles className="w-5 h-5 text-lime-600" />;
    }
  };

  const getBadgeStyle = (id: string) => {
    switch (id) {
      case 'web-dev':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200/70';
      case 'mobile-apis':
        return 'bg-teal-50 text-teal-800 border-teal-200/70';
      case 'cloud-hosting':
        return 'bg-sky-50 text-sky-800 border-sky-200/70';
      case 'ai-tech':
      default:
        return 'bg-lime-50 text-lime-900 border-lime-200/70';
    }
  };

  return (
    <section id="services" className="py-20 border-t border-emerald-100/60 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-emerald-700 uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>{language === 'ta' ? 'எங்கள் முதன்மை சேவைகள்' : 'What We Build'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            {language === 'ta'
              ? 'உங்கள் வணிகத் தேவைக்கேற்ப தனிப்பயன் மென்பொருள் சேவைகள்.'
              : 'Full-cycle engineering tailored to your workflow.'}
          </h2>
          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            {language === 'ta'
              ? 'வலைத்தள வடிவமைப்பு, மொபைல் ஆப், கிளவுட் ஹோஸ்டிங் முதல் AI ஒருங்கிணைப்பு வரை அனைத்தையும் நாங்களே பொறுப்பேற்று செய்து தருகிறோம்.'
              : 'We handle the complete software lifecycle—from intuitive user interfaces and low-latency mobile APIs to AWS cloud hosting and AI integrations.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-7 sm:p-8 rounded-2xl border border-slate-200/80 bg-white hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-900/5 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${getBadgeStyle(service.id)}`}>
                    {getIcon(service.id)}
                  </div>
                  <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                  {service.summary}
                </p>

                {/* Practical Use Case Box */}
                <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100 text-xs text-emerald-900 mb-6 flex items-start gap-2">
                  <span className="font-semibold text-emerald-700 shrink-0">
                    {language === 'ta' ? 'பயன்பாடு:' : 'Use Case:'}
                  </span>
                  <span>{service.localContext}</span>
                </div>

                <div className="space-y-2.5 mb-6">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="text-xs sm:text-sm font-semibold text-emerald-700 group-hover:text-emerald-800 flex items-center gap-1.5 transition-colors"
                >
                  <span>{language === 'ta' ? 'இச்சேவையைப் பற்றி பேசலாம்' : 'Inquire about this service'}</span>
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
