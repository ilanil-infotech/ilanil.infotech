import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Mail, MapPin, Sparkles, Download } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'ta';
}

/**
 * Footer
 * 
 * Apple VisionOS-Style Architectural Slate & Deep Eucalyptus Glass Footer:
 * - Refined organic tones (Slate Charcoal #1e293b, Deep Eucalyptus #2f3e46, Soft Sage #84a98c)
 * - Translucent frosted sub-panels with crystalline specular borders
 * - Strictly no neon
 */
export const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer 
      className="relative z-10 border-t border-white/40 text-slate-300 py-14 overflow-hidden"
      style={{
        backgroundColor: '#232f2c',
        boxShadow: 'inset 0 1.5px 2px 0 rgba(255, 255, 255, 0.15)',
      }}
    >
      {/* Subtle ambient sage backlight */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(132,169,140,0.18),transparent_70%)] blur-2xl"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="flex items-center gap-4">
            {/* Logo Badge */}
            <div 
              className="w-12 h-12 rounded-2xl p-1.5 flex items-center justify-center shrink-0"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderTop: '1.5px solid rgba(255, 255, 255, 1)',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)',
              }}
            >
              <img
                src="logo.png"
                alt="Ilanil Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <div className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <span>{language === 'ta' ? COMPANY_INFO.tamilName : 'ilanil'}</span>
                <span className="text-[10px] font-semibold text-[#b7e4c7] bg-white/10 border border-white/15 rounded-full px-2 py-0.5">
                  Tamil Nadu
                </span>
              </div>
              <p className="text-xs text-[#a3c4b2] mt-0.5 font-medium">
                {language === 'ta' ? COMPANY_INFO.tamilTagline : COMPANY_INFO.tagline}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#84a98c]" />
                <span>{language === 'ta' ? COMPANY_INFO.tamilLocation : COMPANY_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 text-xs">
            <div 
              className="flex items-center gap-2 px-4 py-2 rounded-2xl text-slate-200"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                borderTop: '1.5px solid rgba(255, 255, 255, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <Mail className="w-4 h-4 text-[#b7e4c7]" />
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-white hover:text-[#b7e4c7] transition-colors font-medium"
              >
                {COMPANY_INFO.email}
              </a>
            </div>

            <a
              href="social-post.jpg"
              download="ilanil-infotech-social-post.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-[#b7e4c7] hover:text-white transition-all font-medium text-xs hover:scale-102"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.04) 100%)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderTop: '1.5px solid rgba(255, 255, 255, 0.35)',
                borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
                borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.25), 0 8px 18px rgba(0, 0, 0, 0.2)',
              }}
            >
              <Download className="w-3.5 h-3.5" />
              <span>{language === 'ta' ? 'போஸ்டர் படம் தரவிறக்க' : 'Download Social Post'}</span>
            </a>
          </div>
        </div>

        {/* Bottom copyright and navigation */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-white transition-colors">
              {language === 'ta' ? 'சேவைகள்' : 'Services'}
            </a>
            <a href="#use-cases" className="hover:text-white transition-colors">
              {language === 'ta' ? 'வணிகத் தீர்வுகள்' : 'Solutions'}
            </a>
            <a href="#why-us" className="hover:text-white transition-colors">
              {language === 'ta' ? 'ஏன் இளநிலா?' : 'Why Ilanil'}
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              {language === 'ta' ? 'தொடர்புக்கு' : 'Contact'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
