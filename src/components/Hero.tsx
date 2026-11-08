import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Shield, Cpu, Cloud, Layers } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { VisionGlassCard } from './VisionGlassCard';
import { FloatingBadge } from './FloatingBadge';

interface HeroProps {
  language: 'en' | 'ta';
  onContactClick: () => void;
}

/**
 * Hero
 * 
 * Apple VisionOS-style Light Mode Hero Section:
 * - Ambient liquid flow refraction through 40%–60% opacity frosted glass
 * - Crystalline white top borders on all glass plates
 * - 3D Tilt Card with dynamic cursor specular glare
 * - Floating 3D badges with translateZ multi-layer parallax depth
 * - Sage, Eucalyptus & Slate Charcoal palette (strictly no neon)
 */
export const Hero: React.FC<HeroProps> = ({ language, onContactClick }) => {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: VisionOS Architectural Typography & CTAs */}
          <div className="lg:col-span-7">
            {/* Floating 3D Tagline Badge */}
            <div className="inline-block mb-5">
              <FloatingBadge
                depthZ={15}
                variant="glass"
                className="py-1 px-3.5"
                icon={<span className="w-2 h-2 rounded-full bg-[#52796f] animate-pulse" />}
              >
                <span className="text-[#2f3e46] font-medium">
                  {language === 'ta' ? 'இளநிலா · ஒரு புதிய விடியல்' : 'ilanil · A new light in technology'}
                </span>
                <span className="text-[#84a98c]">|</span>
                <span className="text-[#52796f] font-semibold">Tamil Nadu</span>
              </FloatingBadge>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1e293b] tracking-tight leading-[1.2] mb-6 [text-wrap:balance]">
              {language === 'ta' ? (
                <>
                  தொழில்நுட்பத்தில் ஒரு புதிய விடியல் —{' '}
                  <span className="sage-gradient-text">உங்கள் வணிகத்திற்கான மென்பொருட்கள்.</span>
                </>
              ) : (
                <>
                  A new light in technology for{' '}
                  <span className="sage-gradient-text">growing businesses.</span>
                </>
              )}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-xl mb-8">
              {language === 'ta' ? (
                <>
                  இயற்கையின் நேர்த்தியும் அதிநவீன தொழில்நுட்பமும் இணைந்த மென்பொருள் உருவாக்கம். முழுமையான வலைத்தளங்கள், மொபைல் செயலிகள், கிளவுட் ஹோஸ்டிங் மற்றும் AI தீர்வுகள் — நேரடி தமிழ் & ஆங்கில ஆதரவுடன்.
                </>
              ) : (
                <>
                  At <strong className="text-[#1e293b] font-semibold">ilanil</strong>, we bring organic simplicity and modern engineering rigor to software development. From high-performance web platforms and low-latency APIs to managed cloud architecture and applied AI automation.
                </>
              )}
            </p>

            {/* VisionOS CTAs with Crystalline Glass Edges */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <button
                onClick={onContactClick}
                className="vision-btn-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold rounded-2xl whitespace-nowrap group"
              >
                <span>{language === 'ta' ? 'திட்டம் பற்றி பேசலாம்' : 'Discuss Your Project'}</span>
                <ArrowRight className="w-4 h-4 text-[#b7e4c7] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToServices}
                className="vision-btn-glass inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold rounded-2xl whitespace-nowrap"
              >
                <Layers className="w-4 h-4 text-[#52796f]" />
                <span>{language === 'ta' ? 'சேவைகளைப் பார்க்க' : 'Explore Services'}</span>
              </button>
            </div>

            {/* 4 Core Trust Pillars (Frosted Glass Mini-Pills) */}
            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-white/50 text-xs text-[#334155]">
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/35 backdrop-blur-sm border-t border-t-white/90 border border-white/30">
                <CheckCircle2 className="w-4 h-4 text-[#52796f] shrink-0" />
                <span className="font-medium">{language === 'ta' ? '100% முழு குறியீட்டு உரிமை' : '100% Full Code Ownership'}</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/35 backdrop-blur-sm border-t border-t-white/90 border border-white/30">
                <CheckCircle2 className="w-4 h-4 text-[#52796f] shrink-0" />
                <span className="font-medium">{language === 'ta' ? 'நேரடி தமிழ் & ஆங்கில உதவி' : 'Direct Tamil & English Support'}</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/35 backdrop-blur-sm border-t border-t-white/90 border border-white/30">
                <CheckCircle2 className="w-4 h-4 text-[#52796f] shrink-0" />
                <span className="font-medium">{language === 'ta' ? '24/7 கிளவுட் சர்வர் பராமரிப்பு' : '24/7 Managed Cloud Hosting'}</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/35 backdrop-blur-sm border-t border-t-white/90 border border-white/30">
                <CheckCircle2 className="w-4 h-4 text-[#52796f] shrink-0" />
                <span className="font-medium">{language === 'ta' ? 'நவீன AI வணிக ஆட்டோமேஷன்' : 'Applied AI & Automation'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D VisionOS Glass Interactive Showcase Card */}
          <div className="lg:col-span-5 perspective-1200">
            <VisionGlassCard
              tiltIntensity={18}
              glare={true}
              className="p-7 sm:p-9 overflow-visible"
            >
              {/* Suspended 3D Floating Badge 1 (Top-Right) */}
              <div className="absolute -top-3.5 -right-3 z-30 hidden sm:block">
                <FloatingBadge
                  depthZ={68}
                  variant="eucalyptus"
                  float={true}
                  icon={<Sparkles className="w-3.5 h-3.5 text-[#52796f]" />}
                >
                  {language === 'ta' ? 'அதிநவீன மென்பொருள்' : 'Modern Engineering'}
                </FloatingBadge>
              </div>

              {/* Suspended 3D Floating Badge 2 (Bottom-Left) */}
              <div className="absolute -bottom-3 -left-3 z-30 hidden sm:block">
                <FloatingBadge
                  depthZ={60}
                  variant="sage"
                  float={true}
                  icon={<Shield className="w-3.5 h-3.5 text-[#52796f]" />}
                >
                  {language === 'ta' ? '100% குறியீட்டு உரிமை' : '100% IP Ownership'}
                </FloatingBadge>
              </div>

              {/* Main Showcase Plate */}
              <div className="flex flex-col items-center text-center preserve-3d">
                {/* Elevated Glass Logo Pedestal */}
                <div 
                  className="w-36 h-36 sm:w-44 sm:h-44 p-4 rounded-3xl mb-5 flex items-center justify-center transition-transform duration-300 preserve-3d group-hover:scale-105"
                  style={{
                    transform: 'translateZ(50px)',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.76) 0%, rgba(255, 255, 255, 0.4) 100%)',
                    backdropFilter: 'blur(22px) saturate(190%)',
                    WebkitBackdropFilter: 'blur(22px) saturate(190%)',
                    borderTop: '2px solid rgba(255, 255, 255, 0.98)',
                    borderLeft: '1.5px solid rgba(255, 255, 255, 0.75)',
                    borderRight: '1px solid rgba(255, 255, 255, 0.35)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.25)',
                    boxShadow: 'inset 0 1.5px 2px 0 rgba(255, 255, 255, 0.98), 0 26px 52px -10px rgba(47, 62, 70, 0.22)',
                  }}
                >
                  <img
                    src="logo.png"
                    alt="Ilanil Logo - A new light in technology"
                    className="w-full h-full object-contain filter drop-shadow-md"
                  />
                </div>

                {/* Brand Titles */}
                <div 
                  className="space-y-1 mb-6 preserve-3d"
                  style={{ transform: 'translateZ(38px)' }}
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#1e293b] tracking-tight font-sans">
                    {language === 'ta' ? COMPANY_INFO.tamilName : 'ilanil'}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-[#52796f] tracking-wide">
                    {language === 'ta' ? COMPANY_INFO.tamilTagline : COMPANY_INFO.tagline}
                  </div>
                  <div className="text-[11px] text-[#64748b]">
                    {COMPANY_INFO.location}
                  </div>
                </div>

                {/* 3 Frosted Mini Glass Feature Badges */}
                <div 
                  className="grid grid-cols-3 gap-2.5 w-full pt-5 border-t border-white/60 text-[11px] preserve-3d"
                  style={{ transform: 'translateZ(32px)' }}
                >
                  <div 
                    className="p-2.5 rounded-2xl text-center preserve-3d transition-transform hover:scale-105"
                    style={{
                      transform: 'translateZ(12px)',
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.3) 100%)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      borderTop: '1.5px solid rgba(255, 255, 255, 0.98)',
                      borderLeft: '1px solid rgba(255, 255, 255, 0.65)',
                      borderRight: '1px solid rgba(255, 255, 255, 0.3)',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.95), 0 8px 18px rgba(47, 62, 70, 0.08)',
                    }}
                  >
                    <Shield className="w-4 h-4 text-[#52796f] mx-auto mb-1" />
                    <span className="font-bold text-[#1e293b] block">Turnkey</span>
                    <span className="text-[10px] text-[#52796f]">Engineering</span>
                  </div>

                  <div 
                    className="p-2.5 rounded-2xl text-center preserve-3d transition-transform hover:scale-105"
                    style={{
                      transform: 'translateZ(12px)',
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.3) 100%)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      borderTop: '1.5px solid rgba(255, 255, 255, 0.98)',
                      borderLeft: '1px solid rgba(255, 255, 255, 0.65)',
                      borderRight: '1px solid rgba(255, 255, 255, 0.3)',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.95), 0 8px 18px rgba(47, 62, 70, 0.08)',
                    }}
                  >
                    <Cpu className="w-4 h-4 text-[#52796f] mx-auto mb-1" />
                    <span className="font-bold text-[#1e293b] block">Modern</span>
                    <span className="text-[10px] text-[#52796f]">Full-Stack</span>
                  </div>

                  <div 
                    className="p-2.5 rounded-2xl text-center preserve-3d transition-transform hover:scale-105"
                    style={{
                      transform: 'translateZ(12px)',
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.3) 100%)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      borderTop: '1.5px solid rgba(255, 255, 255, 0.98)',
                      borderLeft: '1px solid rgba(255, 255, 255, 0.65)',
                      borderRight: '1px solid rgba(255, 255, 255, 0.3)',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.95), 0 8px 18px rgba(47, 62, 70, 0.08)',
                    }}
                  >
                    <Cloud className="w-4 h-4 text-[#52796f] mx-auto mb-1" />
                    <span className="font-bold text-[#1e293b] block">Managed</span>
                    <span className="text-[10px] text-[#52796f]">Cloud 24/7</span>
                  </div>
                </div>
              </div>
            </VisionGlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
