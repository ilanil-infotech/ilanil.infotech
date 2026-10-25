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
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-emerald-100/80 shadow-xs">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Logo & Title */}
        <a
          href="#"
          className="flex items-center gap-3 group shrink-0"
        >
          {/* Logo Badge */}
          <div className="w-12 h-12 rounded-xl bg-white border border-emerald-100 p-0.5 shadow-xs overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105">
            <img
              src="logo.png"
              alt="Ilanil Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-emerald-950 font-sans">
                {language === 'ta' ? COMPANY_INFO.tamilName : 'ilanil'}
              </span>
              <span className="hidden sm:inline-block text-[11px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/60 rounded px-2 py-0.5">
                Tamil Nadu
              </span>
            </div>
            <span className="text-[11px] font-medium text-emerald-600/90 tracking-wide">
              {language === 'ta' ? COMPANY_INFO.tamilTagline : COMPANY_INFO.tagline}
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a
            href="#services"
            className="hover:text-emerald-700 transition-colors whitespace-nowrap hover:underline decoration-emerald-500 decoration-2 underline-offset-8"
          >
            {language === 'ta' ? 'சேவைகள்' : 'Services'}
          </a>
          <a
            href="#use-cases"
            className="hover:text-emerald-700 transition-colors whitespace-nowrap hover:underline decoration-emerald-500 decoration-2 underline-offset-8"
          >
            {language === 'ta' ? 'வணிகத் தீர்வுகள்' : 'Solutions'}
          </a>
          <a
            href="#why-us"
            className="hover:text-emerald-700 transition-colors whitespace-nowrap hover:underline decoration-emerald-500 decoration-2 underline-offset-8"
          >
            {language === 'ta' ? 'ஏன் இளநிலா?' : 'Why Ilanil'}
          </a>
          <a
            href="#contact"
            className="hover:text-emerald-700 transition-colors whitespace-nowrap hover:underline decoration-emerald-500 decoration-2 underline-offset-8"
          >
            {language === 'ta' ? 'தொடர்புக்கு' : 'Contact'}
          </a>
        </nav>

        {/* Zone 3: Actions */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          {/* Tamil / English Toggle Button */}
          <button
            type="button"
            onClick={onToggleLanguage}
            className="px-3.5 py-1.5 rounded-lg border border-emerald-200 bg-emerald-50/70 text-xs font-semibold text-emerald-800 hover:bg-emerald-100 transition-colors flex items-center gap-1.5 whitespace-nowrap"
            title="Toggle between English and Tamil"
          >
            <Languages className="w-3.5 h-3.5 text-emerald-600" />
            <span>{language === 'en' ? 'தமிழ்' : 'English'}</span>
          </button>

          <button
            onClick={onContactClick}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 rounded-lg hover:opacity-95 transition-all whitespace-nowrap shadow-sm shadow-emerald-600/20 active:scale-[0.98]"
          >
            {language === 'ta' ? 'தொடர்பு கொள்ள' : 'Contact Us'}
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={onToggleLanguage}
            className="px-2.5 py-1 rounded border border-emerald-200 bg-emerald-50 text-xs text-emerald-700 font-semibold"
          >
            {language === 'en' ? 'தமிழ்' : 'English'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-slate-600 hover:text-emerald-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-emerald-100 bg-white px-6 py-6 space-y-4 shadow-md">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-700 hover:text-emerald-700"
          >
            {language === 'ta' ? 'சேவைகள் (Services)' : 'Services'}
          </a>
          <a
            href="#use-cases"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-700 hover:text-emerald-700"
          >
            {language === 'ta' ? 'வணிகத் தீர்வுகள் (Solutions)' : 'Solutions'}
          </a>
          <a
            href="#why-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-700 hover:text-emerald-700"
          >
            {language === 'ta' ? 'ஏன் இளநிலா? (Why Ilanil)' : 'Why Ilanil'}
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-700 hover:text-emerald-700"
          >
            {language === 'ta' ? 'தொடர்புக்கு (Contact)' : 'Contact'}
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full py-3 text-center text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg hover:opacity-95 transition-all shadow-sm"
            >
              {language === 'ta' ? 'தொடர்பு கொள்ள' : 'Contact Us'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
