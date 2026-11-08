import React from 'react';
import { CORE_SERVICES_EN, CORE_SERVICES_TA } from '../data/companyData';
import { Globe, Smartphone, Cloud, Sparkles, Check, ArrowRight } from 'lucide-react';
import { VisionGlassCard } from './VisionGlassCard';
import { FloatingBadge } from './FloatingBadge';

interface ServicesSectionProps {
  language: 'en' | 'ta';
  onSelectService: (serviceTitle: string) => void;
}

/**
 * ServicesSection
 * 
 * Apple VisionOS 3D Frosted Glass Services Grid:
 * - 40%–60% translucent frosted glass cards (allowing background liquid mesh to flow behind)
 * - Crystalline white top borders
 * - Dynamic specular glare tracking cursor
 * - 3D cursor tilt with floating service number badges (translateZ)
 * - Palette: Sage, Eucalyptus & Slate Charcoal
 */
export const ServicesSection: React.FC<ServicesSectionProps> = ({ language, onSelectService }) => {
  const services = language === 'ta' ? CORE_SERVICES_TA : CORE_SERVICES_EN;

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'web-dev':
        return <Globe className="w-5 h-5 text-[#52796f]" />;
      case 'mobile-apis':
        return <Smartphone className="w-5 h-5 text-[#52796f]" />;
      case 'cloud-hosting':
        return <Cloud className="w-5 h-5 text-[#52796f]" />;
      case 'ai-tech':
      default:
        return <Sparkles className="w-5 h-5 text-[#52796f]" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#52796f] uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#52796f]"></span>
            <span>{language === 'ta' ? 'எங்கள் முதன்மை சேவைகள்' : 'What We Build'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e293b] tracking-tight [text-wrap:balance]">
            {language === 'ta'
              ? 'உங்கள் வணிகத் தேவைக்கேற்ப தனிப்பயன் மென்பொருள் சேவைகள்.'
              : 'Full-cycle engineering tailored to your workflow.'}
          </h2>
          <p className="text-sm text-[#475569] mt-3 leading-relaxed">
            {language === 'ta'
              ? 'வலைத்தள வடிவமைப்பு, மொபைல் ஆப், கிளவுட் ஹோஸ்டிங் முதல் AI ஒருங்கிணைப்பு வரை அனைத்தையும் நாங்களே பொறுப்பேற்று செய்து தருகிறோம்.'
              : 'We handle the complete software lifecycle—from intuitive interfaces and low-latency mobile APIs to AWS cloud architecture and applied AI integrations.'}
          </p>
        </div>

        {/* 4 VisionOS Frosted Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {services.map((service) => (
            <VisionGlassCard
              key={service.id}
              tiltIntensity={15}
              glare={true}
              className="p-7 sm:p-8 flex flex-col justify-between group"
            >
              <div className="preserve-3d">
                {/* Header row with Icon and 3D Floating Number Badge */}
                <div className="flex items-center justify-between mb-6 preserve-3d">
                  {/* Crystalline Frosted Icon Tile */}
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center preserve-3d transition-transform group-hover:scale-105"
                    style={{
                      transform: 'translateZ(42px)',
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.76) 0%, rgba(255, 255, 255, 0.4) 100%)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      borderTop: '1.5px solid rgba(255, 255, 255, 0.98)',
                      borderLeft: '1px solid rgba(255, 255, 255, 0.65)',
                      borderRight: '1px solid rgba(255, 255, 255, 0.35)',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.25)',
                      boxShadow: 'inset 0 1px 1px 0 white, 0 10px 22px rgba(47, 62, 70, 0.1)',
                    }}
                  >
                    {getServiceIcon(service.id)}
                  </div>

                  {/* Floating 3D Service Number Badge */}
                  <FloatingBadge
                    depthZ={50}
                    variant="glass"
                    className="font-mono text-xs font-bold text-[#2f3e46]"
                  >
                    {service.number}
                  </FloatingBadge>
                </div>

                {/* Service Title */}
                <h3 
                  className="text-lg sm:text-xl font-bold text-[#1e293b] mb-2.5 group-hover:text-[#2f3e46] transition-colors preserve-3d"
                  style={{ transform: 'translateZ(28px)' }}
                >
                  {service.title}
                </h3>

                {/* Service Summary */}
                <p 
                  className="text-xs sm:text-sm text-[#475569] mb-5 leading-relaxed preserve-3d"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  {service.summary}
                </p>

                {/* Practical Use Case Frosted Box */}
                <div 
                  className="p-3.5 rounded-2xl mb-6 flex items-start gap-2.5 text-xs preserve-3d"
                  style={{
                    transform: 'translateZ(32px)',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.52) 0%, rgba(255, 255, 255, 0.22) 100%)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    borderTop: '1.5px solid rgba(255, 255, 255, 0.95)',
                    borderLeft: '1px solid rgba(255, 255, 255, 0.55)',
                    borderRight: '1px solid rgba(255, 255, 255, 0.25)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.9), 0 8px 18px rgba(47, 62, 70, 0.06)',
                  }}
                >
                  <span className="font-bold text-[#52796f] shrink-0">
                    {language === 'ta' ? 'பயன்பாடு:' : 'Use Case:'}
                  </span>
                  <span className="text-[#334155]">{service.localContext}</span>
                </div>

                {/* Features Checklist */}
                <div 
                  className="space-y-2.5 mb-6 preserve-3d"
                  style={{ transform: 'translateZ(18px)' }}
                >
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="text-xs sm:text-sm text-[#334155] flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#84a98c]/25 border border-[#84a98c]/40 text-[#2f3e46] flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Inquire Action with Crystalline Glass Edges */}
              <div 
                className="pt-5 border-t border-white/50 preserve-3d"
                style={{ transform: 'translateZ(30px)' }}
              >
                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="vision-btn-pill inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all"
                >
                  <span>{language === 'ta' ? 'இச்சேவையைப் பற்றி பேசலாம்' : 'Inquire about this service'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#52796f] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </VisionGlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
