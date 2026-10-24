import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-[#070a10] text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
              {COMPANY_INFO.name}
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Full-Stack Software Development · Mobile APIs · Cloud Hosting · AI
            </p>
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
              Services
            </a>
            <a href="#why-us" className="hover:text-slate-300 transition-colors">
              Why Choose Us
            </a>
            <a href="#contact" className="hover:text-slate-300 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
