import React from 'react';
import { WHY_CHOOSE_US } from '../data/companyData';
import { ShieldCheck, Layers, Cpu, MessageSquare } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <ShieldCheck className="w-5 h-5 text-blue-400" />;
      case 1:
        return <Layers className="w-5 h-5 text-indigo-400" />;
      case 2:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 3:
      default:
        return <MessageSquare className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="why-us" className="py-20 border-t border-slate-800/80 bg-[#0b0f17]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase mb-2">
            Why Work With Us
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight [text-wrap:balance]">
            Engineering built on trust, transparency, and ownership.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-slate-800 bg-[#111726] flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center mb-4">
                  {getIcon(idx)}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
