import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Mail, MapPin } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'ta';
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer className="border-t border-emerald-950 bg-[#071710] text-emerald-100/70 py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-emerald-900/60">
          <div className="flex items-center gap-4">
            {/* Logo Badge */}
            <div className="w-12 h-12 rounded-xl bg-white p-1 border border-emerald-800/40 shadow-xs flex items-center justify-center shrink-0">
              <img
                src="logo.png"
                alt="Ilanil Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <div className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <span>{language === 'ta' ? COMPANY_INFO.tamilName : 'ilanil'}</span>
                <span className="text-xs font-normal text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 rounded px-2 py-0.5">
                  Tamil Nadu
                </span>
              </div>
              <p className="text-xs text-emerald-300/80 mt-0.5">
                {language === 'ta' ? COMPANY_INFO.tamilTagline : COMPANY_INFO.tagline}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400/70 mt-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{language === 'ta' ? COMPANY_INFO.tamilLocation : COMPANY_INFO.location}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-950/80 border border-emerald-800/50 text-emerald-200">
              <Mail className="w-4 h-4 text-emerald-400" />
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-white hover:text-emerald-300 transition-colors font-medium"
              >
                {COMPANY_INFO.email}
              </a>
            </div>

            <a
              href="social-post.jpg"
              download="ilanil-infotech-social-post.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium underline underline-offset-4"
            >
              {language === 'ta' ? 'போஸ்டர் படம் தரவிறக்க' : 'Download Social Post Image'}
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-400/60">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-emerald-200 transition-colors">
              {language === 'ta' ? 'சேவைகள்' : 'Services'}
            </a>
            <a href="#use-cases" className="hover:text-emerald-200 transition-colors">
              {language === 'ta' ? 'வணிகத் தீர்வுகள்' : 'Solutions'}
            </a>
            <a href="#why-us" className="hover:text-emerald-200 transition-colors">
              {language === 'ta' ? 'ஏன் இளநிலா?' : 'Why Ilanil'}
            </a>
            <a href="#contact" className="hover:text-emerald-200 transition-colors">
              {language === 'ta' ? 'தொடர்புக்கு' : 'Contact'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
