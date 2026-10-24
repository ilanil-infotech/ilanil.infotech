import React from 'react';
import { CORE_SERVICES_EN, CORE_SERVICES_TA } from '../data/companyData';
import { Globe, Smartphone, Server, Sparkles, Check, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  language: 'en' | 'ta';
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ language, onSelectService }) => {
  const services = language === 'ta' ? CORE_SERVICES_TA : CORE_SERVICES_EN;

  const getIcon = (id: string) => {
    switch (id) {
      case 'web-dev':
        return <Globe className="w-5 h-5 text-blue-400" />;
      case 'mobile-apis':
        return <Smartphone className="w-5 h-5 text-indigo-400" />;
      case 'cloud-hosting':
        return <Server className="w-5 h-5 text-cyan-400" />;
      case 'ai-tech':
      default:
        return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-20 border-t border-slate-800/80 bg-[#0a0e17]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase mb-2">
            {language === 'ta' ? 'எங்கள் முதன்மை சேவைகள்' : 'What We Do'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight [text-wrap:balance]">
            {language === 'ta'
              ? 'உங்கள் வணிகத் தேவைக்கேற்ப மென்பொருள் சேவைகள்.'
              : 'Comprehensive software services tailored to your needs.'}
          </h2>
          <p className="text-sm text-slate-300 mt-3 leading-relaxed">
            {language === 'ta'
              ? 'வலைத்தள வடிவமைப்பு, மொபைல் ஆப், கிளவுட் ஹோஸ்டிங் முதல் AI ஒருங்கிணைப்பு வரை அனைத்தையும் நாங்களே பொறுப்பேற்று செய்து தருகிறோம்.'
              : 'We handle the full software lifecycle—from coding user interfaces and mobile APIs to cloud hosting and AI integrations.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-7 rounded-xl border border-slate-800 bg-[#111726] hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {getIcon(service.id)}
                  </div>
                  <span className="font-mono text-sm text-slate-400">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                  {service.summary}
                </p>

                {/* Local application context box */}
                <div className="p-3 rounded-lg bg-[#0d131f] border border-slate-800/80 text-xs text-blue-300 mb-5 flex items-start gap-2">
                  <span className="font-semibold text-blue-400 shrink-0">
                    {language === 'ta' ? 'பயன்பாடு:' : 'Use Case:'}
                  </span>
                  <span>{service.localContext}</span>
                </div>

                <div className="space-y-2 mb-6">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors"
                >
                  <span>{language === 'ta' ? 'இச்சேவையைப் பற்றி விசாரிக்க' : 'Request this service'}</span>
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
