import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Menu, X, Languages } from 'lucide-react';

interface HeaderProps {
  language: 'en' | 'ta';
  onToggleLanguage: () => void;
  onContactClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ language, onToggleLanguage, onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0b0f17]/95 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title */}
        <a
          href="#"
          className="text-lg sm:text-xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2.5"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block"></span>
          <span>{language === 'ta' ? COMPANY_INFO.tamilName : COMPANY_INFO.name}</span>
          <span className="hidden lg:inline-block text-[11px] font-normal text-slate-400 border border-slate-800 rounded px-1.5 py-0.5">
            Tamil Nadu
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a
            href="#services"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline decoration-blue-500 underline-offset-8"
          >
            {language === 'ta' ? 'சேவைகள்' : 'Services'}
          </a>
          <a
            href="#use-cases"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline decoration-blue-500 underline-offset-8"
          >
            {language === 'ta' ? 'வணிகத் தீர்வுகள்' : 'Solutions'}
          </a>
          <a
            href="#why-us"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline decoration-blue-500 underline-offset-8"
          >
            {language === 'ta' ? 'ஏன் எங்களை தேர்வு செய்ய வேண்டும்?' : 'Why Us'}
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline decoration-blue-500 underline-offset-8"
          >
            {language === 'ta' ? 'தொடர்புக்கு' : 'Contact'}
          </a>
        </nav>

        {/* Zone 3: Actions (Language toggle + Primary action) */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          {/* Tamil / English Toggle Button */}
          <button
            type="button"
            onClick={onToggleLanguage}
            className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900/90 text-xs font-semibold text-slate-200 hover:text-white hover:border-blue-500 transition-colors flex items-center gap-1.5 whitespace-nowrap"
            title="Toggle between English and Tamil"
          >
            <Languages className="w-3.5 h-3.5 text-blue-400" />
            <span>{language === 'en' ? 'தமிழ்' : 'English'}</span>
          </button>

          <button
            onClick={onContactClick}
            className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors whitespace-nowrap shadow-sm shadow-blue-500/20 active:scale-[0.98]"
          >
            {language === 'ta' ? 'தொடர்பு கொள்ள' : 'Contact Us'}
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={onToggleLanguage}
            className="px-2.5 py-1 rounded border border-slate-700 bg-slate-900 text-xs text-blue-400 font-semibold"
          >
            {language === 'en' ? 'தமிழ்' : 'English'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-slate-400 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0f172a] px-6 py-6 space-y-4">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-300 hover:text-white"
          >
            {language === 'ta' ? 'சேவைகள் (Services)' : 'Services'}
          </a>
          <a
            href="#use-cases"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-300 hover:text-white"
          >
            {language === 'ta' ? 'வணிகத் தீர்வுகள் (Solutions)' : 'Solutions'}
          </a>
          <a
            href="#why-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-300 hover:text-white"
          >
            {language === 'ta' ? 'ஏன் எங்களை தேர்வு செய்ய வேண்டும்?' : 'Why Choose Us'}
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-300 hover:text-white"
          >
            {language === 'ta' ? 'தொடர்புக்கு (Contact)' : 'Contact'}
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full py-3 text-center text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
            >
              {language === 'ta' ? 'தொடர்பு கொள்ள' : 'Contact Us'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
