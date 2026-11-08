import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Menu, X, Languages, Sparkles } from 'lucide-react';

interface HeaderProps {
  language: 'en' | 'ta';
  onToggleLanguage: () => void;
  onContactClick: () => void;
}

/**
 * Header
 * 
 * Apple VisionOS-inspired floating glass navigation capsule:
 * - Translucent frosted glass (approx 55% opacity) with 20px blur
 * - Crystalline white top border simulating overhead light refraction
 * - Floating pills and tactile micro-interactions
 * - Slate charcoal & eucalyptus accents (strictly no neon)
 */
export const Header: React.FC<HeaderProps> = ({ language, onToggleLanguage, onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-3 sm:top-4 z-50 w-full px-3 sm:px-6 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <div 
          className="vision-glass-pill rounded-2xl sm:rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-4 transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.52) 0%, rgba(255, 255, 255, 0.25) 100%)',
            backdropFilter: 'blur(28px) saturate(190%) contrast(102%) brightness(104%)',
            WebkitBackdropFilter: 'blur(28px) saturate(190%) contrast(102%) brightness(104%)',
            borderTop: '1.5px solid rgba(255, 255, 255, 0.98)',
            borderLeft: '1.5px solid rgba(255, 255, 255, 0.65)',
            borderRight: '1px solid rgba(255, 255, 255, 0.35)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.25)',
            boxShadow: 'inset 0 1.5px 2px 0 rgba(255, 255, 255, 0.98), inset 0 -1px 1px 0 rgba(255, 255, 255, 0.2), 0 16px 36px -8px rgba(47, 62, 70, 0.1)',
          }}
        >
          {/* Zone 1: Brand Logo & Title */}
          <a
            href="#"
            className="flex items-center gap-3 group shrink-0 select-none"
          >
            {/* Logo Frosted Tile */}
            <div 
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl p-1 overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0.6) 100%)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderTop: '1.5px solid rgba(255, 255, 255, 0.98)',
                borderLeft: '1px solid rgba(255, 255, 255, 0.7)',
                borderRight: '1px solid rgba(255, 255, 255, 0.4)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 6px 16px rgba(47, 62, 70, 0.08), inset 0 1px 1px white',
              }}
            >
              <img
                src="logo.png"
                alt="Ilanil Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-[#1e293b] font-sans">
                  {language === 'ta' ? COMPANY_INFO.tamilName : 'ilanil'}
                </span>
                <span className="hidden sm:inline-flex items-center text-[10px] font-semibold text-[#52796f] bg-white/70 border border-[#84a98c]/40 rounded-full px-2 py-0.5 shadow-xs">
                  Tamil Nadu
                </span>
              </div>
              <span className="text-[11px] font-medium text-[#52796f] tracking-wide">
                {language === 'ta' ? COMPANY_INFO.tamilTagline : COMPANY_INFO.tagline}
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (VisionOS Frosted Pills) */}
          <nav className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-[#334155]">
            <a
              href="#services"
              className="px-3.5 py-1.5 rounded-full hover:bg-white/70 hover:text-[#1e293b] transition-all hover:shadow-xs"
            >
              {language === 'ta' ? 'சேவைகள்' : 'Services'}
            </a>
            <a
              href="#use-cases"
              className="px-3.5 py-1.5 rounded-full hover:bg-white/70 hover:text-[#1e293b] transition-all hover:shadow-xs"
            >
              {language === 'ta' ? 'வணிகத் தீர்வுகள்' : 'Solutions'}
            </a>
            <a
              href="#why-us"
              className="px-3.5 py-1.5 rounded-full hover:bg-white/70 hover:text-[#1e293b] transition-all hover:shadow-xs"
            >
              {language === 'ta' ? 'ஏன் இளநிலா?' : 'Why Ilanil'}
            </a>
            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-full hover:bg-white/70 hover:text-[#1e293b] transition-all hover:shadow-xs"
            >
              {language === 'ta' ? 'தொடர்புக்கு' : 'Contact'}
            </a>
          </nav>

          {/* Zone 3: Actions */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            {/* Tamil / English Toggle Button with Crystalline Glass Edges */}
            <button
              type="button"
              onClick={onToggleLanguage}
              className="vision-btn-glass px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5"
              title="Toggle between English and Tamil"
            >
              <Languages className="w-3.5 h-3.5 text-[#52796f]" />
              <span>{language === 'en' ? 'தமிழ்' : 'English'}</span>
            </button>

            {/* Deep Eucalyptus Slate VisionOS Button with Crystalline Glass Edges */}
            <button
              onClick={onContactClick}
              className="vision-btn-primary px-4.5 py-1.5 sm:px-5 sm:py-2 text-xs font-semibold rounded-full whitespace-nowrap flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#b7e4c7]" />
              <span>{language === 'ta' ? 'தொடர்பு கொள்ள' : 'Contact Us'}</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={onToggleLanguage}
              className="vision-btn-glass px-2.5 py-1 rounded-full text-xs font-semibold"
            >
              {language === 'en' ? 'தமிழ்' : 'English'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="vision-btn-glass p-2 rounded-full"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Glass Drawer */}
        {mobileMenuOpen && (
          <div 
            className="md:hidden mt-2 rounded-2xl p-5 space-y-3 shadow-xl transition-all"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(24px) saturate(170%)',
              WebkitBackdropFilter: 'blur(24px) saturate(170%)',
              borderTop: '1.5px solid rgba(255, 255, 255, 0.98)',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              boxShadow: '0 16px 36px rgba(47, 62, 70, 0.12)',
            }}
          >
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-[#1e293b] px-3 py-2 rounded-xl hover:bg-white/80 transition-colors"
            >
              {language === 'ta' ? 'சேவைகள் (Services)' : 'Services'}
            </a>
            <a
              href="#use-cases"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-[#1e293b] px-3 py-2 rounded-xl hover:bg-white/80 transition-colors"
            >
              {language === 'ta' ? 'வணிகத் தீர்வுகள் (Solutions)' : 'Solutions'}
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-[#1e293b] px-3 py-2 rounded-xl hover:bg-white/80 transition-colors"
            >
              {language === 'ta' ? 'ஏன் இளநிலா? (Why Ilanil)' : 'Why Ilanil'}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-[#1e293b] px-3 py-2 rounded-xl hover:bg-white/80 transition-colors"
            >
              {language === 'ta' ? 'தொடர்புக்கு (Contact)' : 'Contact'}
            </a>
            <div className="pt-2 border-t border-white/60">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="vision-btn-primary w-full py-2.5 text-center text-xs font-semibold rounded-2xl"
              >
                {language === 'ta' ? 'தொடர்பு கொள்ள' : 'Contact Us'}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
