import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Mail, MapPin } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'ta';
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer className="border-t border-slate-800 bg-[#070a10] text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
              {language === 'ta' ? COMPANY_INFO.tamilName : COMPANY_INFO.name}
            </div>
            <p className="text-xs text-slate-400 mt-1">
              {language === 'ta'
                ? 'முழுமையான மென்பொருள் உருவாக்கம் · மொபைல் செயலிகள் · கிளவுட் சர்வர் · AI தீர்வுகள்'
                : 'Full-Stack Software Development · Mobile APIs · Cloud Hosting · AI'}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-2">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>{language === 'ta' ? COMPANY_INFO.tamilLocation : COMPANY_INFO.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Mail className="w-4 h-4 text-blue-400" />
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {COMPANY_INFO.email}
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-slate-300 transition-colors">
              {language === 'ta' ? 'சேவைகள்' : 'Services'}
            </a>
            <a href="#use-cases" className="hover:text-slate-300 transition-colors">
              {language === 'ta' ? 'வணிகத் தீர்வுகள்' : 'Solutions'}
            </a>
            <a href="#why-us" className="hover:text-slate-300 transition-colors">
              {language === 'ta' ? 'ஏன் எங்களை தேர்வு செய்ய வேண்டும்?' : 'Why Us'}
            </a>
            <a href="#contact" className="hover:text-slate-300 transition-colors">
              {language === 'ta' ? 'தொடர்புக்கு' : 'Contact'}
            </a>
            <a
              href="social-post.jpg"
              download="ilanil-infotech-social-post.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline underline-offset-4"
            >
              {language === 'ta' ? 'போஸ்டர் படம் தரவிறக்க' : 'Download Social Post Image'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
