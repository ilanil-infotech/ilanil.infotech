import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Shield, Cpu, Cloud } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  language: 'en' | 'ta';
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onContactClick }) => {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-emerald-50/50 via-[#fafdfb] to-[#f4faf6]">
      {/* Subtle ambient lighting reminiscent of moonlight & leaves */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-emerald-200/30 via-teal-100/20 to-transparent blur-3xl opacity-70" 
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline and Message */}
          <div className="lg:col-span-7">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 bg-white border border-emerald-200 px-3.5 py-1.5 rounded-full shadow-xs mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{language === 'ta' ? 'இளநிலா · ஒரு புதிய விடியல்' : 'ilanil · A new light in technology'}</span>
              <span className="text-slate-300">|</span>
              <span className="text-teal-700 font-medium">Tamil Nadu</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2] mb-6 [text-wrap:balance]">
              {language === 'ta' ? (
                <>
                  தொழில்நுட்பத்தில் ஒரு புதிய விடியல் —{' '}
                  <span className="nature-gradient-text">உங்கள் வணிகத்திற்கான மென்பொருட்கள்.</span>
                </>
              ) : (
                <>
                  A new light in technology for{' '}
                  <span className="nature-gradient-text">growing businesses.</span>
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
              {language === 'ta' ? (
                <>
                  இயற்கையின் நேர்த்தியும் அதிநவீன தொழில்நுட்பமும் இணைந்த மென்பொருள் உருவாக்கம். முழுமையான வலைத்தளங்கள், ஆண்ட்ராய்டு/iOS மொபைல் செயலிகள், கிளவுட் ஹோஸ்டிங் மற்றும் AI தீர்வுகள் — நேரடி தமிழ் & ஆங்கில ஆதரவுடன்.
                </>
              ) : (
                <>
                  At <strong className="text-emerald-950 font-semibold">ilanil</strong>, we bring fresh, sustainable simplicity to software engineering. From full-stack web platforms and high-speed mobile APIs to managed cloud hosting and applied AI automation.
                </>
              )}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-9">
              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 rounded-xl hover:opacity-95 transition-all shadow-md shadow-emerald-600/20 active:scale-[0.99] whitespace-nowrap"
              >
                <span>{language === 'ta' ? 'திட்டம் பற்றி பேசலாம்' : 'Discuss Your Project'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-emerald-950 bg-white hover:bg-emerald-50/60 border border-emerald-200/80 rounded-xl transition-colors shadow-xs whitespace-nowrap"
              >
                <span>{language === 'ta' ? 'சேவைகளைப் பார்க்க' : 'Explore Services'}</span>
              </button>
            </div>

            {/* 4 core trust pillars */}
            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-emerald-200/60 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{language === 'ta' ? '100% முழு குறியீட்டு உரிமை' : '100% Full Code Ownership'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{language === 'ta' ? 'நேரடி தமிழ் & ஆங்கில உதவி' : 'Direct Tamil & English Support'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{language === 'ta' ? '24/7 கிளவுட் சர்வர் பராமரிப்பு' : '24/7 Managed Cloud Hosting'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{language === 'ta' ? 'நவீன AI வணிக ஆட்டோமேஷன்' : 'Applied AI & Automation'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Brand Showcase */}
          <div className="lg:col-span-5">
            <div className="w-full rounded-2xl bg-white border border-emerald-100 p-6 sm:p-8 shadow-xl shadow-emerald-900/5 relative overflow-hidden">
              {/* Subtle decorative background gradient */}
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br from-teal-200/30 to-sky-200/20 blur-2xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-gradient-to-tr from-emerald-200/30 to-lime-100/30 blur-2xl pointer-events-none" />

              {/* Logo Presentation */}
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-36 h-36 sm:w-44 sm:h-44 p-3 rounded-2xl bg-white border border-emerald-100/90 shadow-md mb-5 flex items-center justify-center transition-transform hover:scale-102">
                  <img
                    src="logo.png"
                    alt="Ilanil Logo - A new light in technology"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="space-y-1">
                  <div className="text-2xl font-extrabold text-emerald-950 tracking-tight font-sans">
                    {language === 'ta' ? COMPANY_INFO.tamilName : 'ilanil'}
                  </div>
                  <div className="text-xs font-semibold text-emerald-700 tracking-wide">
                    {language === 'ta' ? COMPANY_INFO.tamilTagline : COMPANY_INFO.tagline}
                  </div>
                  <div className="text-[11px] text-slate-500 pt-1">
                    {COMPANY_INFO.location}
                  </div>
                </div>

                {/* 3 mini feature badges matching the Nature-Tech aesthetic */}
                <div className="grid grid-cols-3 gap-2 w-full mt-6 pt-5 border-t border-slate-100 text-[11px]">
                  <div className="p-2 rounded-lg bg-emerald-50/80 border border-emerald-100 text-center">
                    <Shield className="w-4 h-4 text-emerald-700 mx-auto mb-1" />
                    <span className="font-semibold text-emerald-950 block">100% IP</span>
                    <span className="text-[10px] text-emerald-700">Ownership</span>
                  </div>
                  <div className="p-2 rounded-lg bg-teal-50/80 border border-teal-100 text-center">
                    <Cpu className="w-4 h-4 text-teal-700 mx-auto mb-1" />
                    <span className="font-semibold text-teal-950 block">Modern</span>
                    <span className="text-[10px] text-teal-700">Full-Stack</span>
                  </div>
                  <div className="p-2 rounded-lg bg-sky-50/80 border border-sky-100 text-center">
                    <Cloud className="w-4 h-4 text-sky-700 mx-auto mb-1" />
                    <span className="font-semibold text-sky-950 block">Cloud</span>
                    <span className="text-[10px] text-sky-700">Managed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
