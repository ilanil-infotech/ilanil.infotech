import React from 'react';
import { WHY_CHOOSE_US_EN, WHY_CHOOSE_US_TA } from '../data/companyData';
import { ShieldCheck, MessageSquare, Layers, Sparkles } from 'lucide-react';
import { VisionGlassCard } from './VisionGlassCard';
import { FloatingBadge } from './FloatingBadge';

interface WhyChooseUsProps {
  language: 'en' | 'ta';
}

/**
 * WhyChooseUs
 * 
 * VisionOS-Style Trust & Ownership Pillars:
 * - 4 Frosted Glass Cards with Crystalline Top Borders & 3D Tilt
 * - Dynamic Specular Glare on Hover
 * - Flowing Sage & Mineral Liquid Underneath
 * - Slate Charcoal Typography
 */
export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ language }) => {
  const items = language === 'ta' ? WHY_CHOOSE_US_TA : WHY_CHOOSE_US_EN;

  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <ShieldCheck className="w-5 h-5 text-[#52796f]" />;
      case 1:
        return <MessageSquare className="w-5 h-5 text-[#52796f]" />;
      case 2:
        return <Layers className="w-5 h-5 text-[#52796f]" />;
      case 3:
      default:
        return <Sparkles className="w-5 h-5 text-[#52796f]" />;
    }
  };

  const getPillarLabel = (idx: number) => {
    switch (idx) {
      case 0:
        return language === 'ta' ? 'முழு உரிமை' : '100% IP';
      case 1:
        return language === 'ta' ? 'நேரடி உதவி' : 'Direct Tech';
      case 2:
        return language === 'ta' ? 'அதிநவீன தரம்' : 'High Scale';
      case 3:
      default:
        return language === 'ta' ? 'நவீன AI' : 'Applied AI';
    }
  };

  return (
    <section id="why-us" className="py-20 sm:py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#52796f] uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#52796f]"></span>
            <span>{language === 'ta' ? 'நம்பகத்தன்மை & தரம்' : 'Why Work With Us'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e293b] tracking-tight [text-wrap:balance]">
            {language === 'ta'
              ? 'நேரடி தொடர்பு, முழு உரிமை & நம்பகமான சேவை.'
              : 'Software engineering built on ownership, trust, and clarity.'}
          </h2>
          <p className="text-sm text-[#475569] mt-3 leading-relaxed">
            {language === 'ta'
              ? 'நாங்கள் வழங்கும் ஒவ்வொரு மென்பொருளுக்கும் முழு மூலக்குறியீட்டு உரிமை மற்றும் வெளிப்படையான தொழில்முறை ஆதரவு உண்டு.'
              : 'You get full source code ownership, direct communication with software architects, and ongoing technical reliability.'}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <VisionGlassCard
              key={idx}
              tiltIntensity={15}
              glare={true}
              className="p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div className="preserve-3d">
                {/* Header row with Icon and Floating Pillar Badge */}
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
                    {getPillarIcon(idx)}
                  </div>

                  <FloatingBadge
                    depthZ={48}
                    variant="glass"
                    className="text-[10px] py-1 px-2.5 font-bold"
                  >
                    {getPillarLabel(idx)}
                  </FloatingBadge>
                </div>

                {/* Pillar Title */}
                <h3 
                  className="text-base font-bold text-[#1e293b] mb-2.5 group-hover:text-[#2f3e46] transition-colors preserve-3d"
                  style={{ transform: 'translateZ(26px)' }}
                >
                  {item.title}
                </h3>

                {/* Pillar Description */}
                <p 
                  className="text-xs sm:text-sm text-[#475569] leading-relaxed preserve-3d"
                  style={{ transform: 'translateZ(18px)' }}
                >
                  {item.desc}
                </p>
              </div>
            </VisionGlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
