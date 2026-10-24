import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Terminal } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 overflow-hidden">
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-900/15 via-blue-950/5 to-transparent blur-3xl opacity-70" 
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase mb-3">
              Software Development & Cloud Hosting Agency
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2] mb-6 [text-wrap:balance]">
              We build, host, and scale complete software applications.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-8">
              From front-end web interfaces and back-end databases to low-latency mobile APIs, managed cloud hosting, and integrated AI capabilities—{COMPANY_INFO.name} delivers end-to-end technical solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors shadow-md shadow-blue-600/20 active:scale-[0.99] whitespace-nowrap"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors whitespace-nowrap"
              >
                <span>Explore Services</span>
              </button>
            </div>

            {/* 4 simple core pillars */}
            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-800/80 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Full-Stack Web Development</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Mobile Apps & Dedicated APIs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Cloud Hosting & DevOps Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Applied AI & Smart Automation</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5">
            <div className="w-full h-[320px] sm:h-[380px] rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl relative">
              {(!imageLoaded || imageError) && (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 flex flex-col items-center justify-center p-6 text-center">
                  <Terminal className="w-8 h-8 text-blue-400 mb-2" />
                  <div className="text-sm font-bold text-white">{COMPANY_INFO.name}</div>
                  <div className="text-xs text-slate-400 mt-1">End-to-End Software Engineering</div>
                </div>
              )}

              {!imageError && (
                <img
                  src="/src/assets/images/hero_software_studio_1792817002635.jpg"
                  alt="Ilanil Infotech Software Engineering"
                  referrerPolicy="no-referrer"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17]/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-sm p-3 rounded-lg border border-slate-800 text-xs flex items-center justify-between">
                <span className="font-semibold text-white">{COMPANY_INFO.name}</span>
                <span className="text-blue-400 font-mono text-[11px]">Turnkey Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
