import React from 'react';
import { TAMIL_NADU_USE_CASES } from '../data/companyData';
import { ShoppingCart, Factory, Stethoscope, Truck, ArrowRight } from 'lucide-react';
import { VisionGlassCard } from './VisionGlassCard';
import { FloatingBadge } from './FloatingBadge';

interface TamilNaduSolutionsProps {
  language: 'en' | 'ta';
  onSelectSolution: (title: string) => void;
}

/**
 * TamilNaduSolutions
 * 
 * VisionOS-Style Light Mode Solutions Showcase:
 * - 4 Frosted Glass Vision Cards with 3D Parallax & Tilt
 * - Dynamic specular glare reflecting ambient lighting
 * - Floating badges with translateZ depth
 * - Sage, Eucalyptus & Slate Charcoal Palette
 */
export const TamilNaduSolutions: React.FC<TamilNaduSolutionsProps> = ({
  language,
  onSelectSolution,
}) => {
  const getSolutionIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <ShoppingCart className="w-5 h-5 text-[#52796f]" />;
      case 1:
        return <Factory className="w-5 h-5 text-[#52796f]" />;
      case 2:
        return <Stethoscope className="w-5 h-5 text-[#52796f]" />;
      case 3:
      default:
        return <Truck className="w-5 h-5 text-[#52796f]" />;
    }
  };

  const getTag = (idx: number) => {
    switch (idx) {
      case 0:
        return language === 'ta' ? 'சில்லறை' : 'Retail';
      case 1:
        return language === 'ta' ? 'தொழிற்சாலை' : 'Industrial';
      case 2:
        return language === 'ta' ? 'மருத்துவம்' : 'Healthcare';
      case 3:
      default:
        return language === 'ta' ? 'தளவாடம்' : 'Logistics';
    }
  };

  return (
    <section id="use-cases" className="py-20 sm:py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#52796f] uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#52796f]"></span>
            <span>{language === 'ta' ? 'தமிழ்நாடு வணிகங்களுக்கான தீர்வுகள்' : 'Regional & Enterprise Solutions'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e293b] tracking-tight [text-wrap:balance]">
            {language === 'ta'
              ? 'உங்கள் வணிகத் துறையை டிஜிட்டல் மயமாக்கும் மென்பொருட்கள்.'
              : 'Software engineered for real industry workflows.'}
          </h2>
          <p className="text-sm text-[#475569] mt-3 leading-relaxed">
            {language === 'ta'
              ? 'சில்லறை வர்த்தகம், ஜவுளி உற்பத்தி, கிளினிக் முதல் உள்ளூர் டெலிவரி வரை — நீங்கள் யோசிக்கும் வணிக மாடலுக்கு முழுமையான மென்பொருள் செய்து தருகிறோம்.'
              : 'From retail billing and textile manufacturing ERPs to clinical scheduling and on-demand delivery apps — we build turnkey software tailored to your workflow.'}
          </p>
        </div>

        {/* 4 Solutions Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TAMIL_NADU_USE_CASES.map((item, idx) => (
            <VisionGlassCard
              key={idx}
              tiltIntensity={15}
              glare={true}
              className="p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div className="preserve-3d">
                {/* Header row with Icon and Floating Category Tag */}
                <div className="flex items-center justify-between mb-5 preserve-3d">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center preserve-3d transition-transform group-hover:scale-105"
                    style={{
                      transform: 'translateZ(40px)',
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.72) 0%, rgba(255, 255, 255, 0.38) 100%)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      borderTop: '1.5px solid rgba(255, 255, 255, 0.98)',
                      borderLeft: '1px solid rgba(255, 255, 255, 0.65)',
                      borderRight: '1px solid rgba(255, 255, 255, 0.35)',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.25)',
                      boxShadow: 'inset 0 1px 1px 0 white, 0 8px 20px rgba(47, 62, 70, 0.08)',
                    }}
                  >
                    {getSolutionIcon(idx)}
                  </div>

                  <FloatingBadge
                    depthZ={48}
                    variant="sage"
                    className="text-[10px] py-1 px-2.5 font-bold"
                  >
                    {getTag(idx)}
                  </FloatingBadge>
                </div>

                {/* Title */}
                <h3
                  className="text-base font-bold text-[#1e293b] mb-2.5 leading-snug group-hover:text-[#2f3e46] transition-colors preserve-3d"
                  style={{ transform: 'translateZ(26px)' }}
                >
                  {language === 'ta' ? item.tamilTitle : item.title}
                </h3>

                {/* Description */}
                <p
                  className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6 preserve-3d"
                  style={{ transform: 'translateZ(18px)' }}
                >
                  {language === 'ta' ? item.tamilDesc : item.desc}
                </p>
              </div>

              {/* Bottom CTA with Crystalline Glass Edges */}
              <div
                className="pt-4 border-t border-white/50 preserve-3d"
                style={{ transform: 'translateZ(28px)' }}
              >
                <button
                  type="button"
                  onClick={() => onSelectSolution(language === 'ta' ? item.tamilTitle : item.title)}
                  className="vision-btn-pill inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all"
                >
                  <span>{language === 'ta' ? 'விவரம் கேட்க' : 'Discuss This'}</span>
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
