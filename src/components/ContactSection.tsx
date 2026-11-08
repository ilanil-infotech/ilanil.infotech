import React, { useState } from 'react';
import { Mail, MapPin, Copy, Check, ExternalLink, MessageSquare, Clock, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { VisionGlassCard } from './VisionGlassCard';
import { FloatingBadge } from './FloatingBadge';

interface ContactSectionProps {
  language: 'en' | 'ta';
  initialSubject?: string;
}

/**
 * ContactSection
 * 
 * Apple VisionOS Crystalline Frosted Glass Contact Hub:
 * - Direct Email Consultation (no mock form/APIs)
 * - Click-to-email with prefilled subject & body
 * - One-click Copy Email with tactile feedback
 * - 3D spatial tilt and crystalline glass edges
 */
export const ContactSection: React.FC<ContactSectionProps> = ({ language, initialSubject }) => {
  const [copied, setCopied] = useState(false);

  const subjectText = initialSubject 
    ? (language === 'ta' ? `இளநிலா மென்பொருள் தேவை: ${initialSubject}` : `Software Project Inquiry: ${initialSubject}`)
    : (language === 'ta' ? 'இளநிலா புதிய மென்பொருள் திட்டம்' : 'Software Project Inquiry with Ilanil Infotech');

  const bodyText = language === 'ta'
    ? `வணக்கம் இளநிலா இன்போடெக்,\n\nஎனது மென்பொருள் தேவை குறித்த விவரங்கள்:\n- வணிகம் / நிறுவனம்:\n- தேவையான மென்பொருள் வகை (Web / Mobile / Cloud / AI):\n- திட்ட விவரங்கள்:\n- தொடர்பு எண்:\n\nநன்றி.`
    : `Hi Ilanil Infotech team,\n\nI would like to discuss our software requirements:\n- Company / Business Name:\n- Software Type (Web / Mobile / Cloud / AI):\n- Project Summary:\n- Phone / WhatsApp:\n\nLooking forward to hearing from you.`;

  const mailtoUrl = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(COMPANY_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#52796f] uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#52796f]"></span>
            <span>{language === 'ta' ? 'நேரடி தொடர்பு' : 'Get in Touch'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e293b] tracking-tight [text-wrap:balance]">
            {language === 'ta'
              ? 'உங்கள் மென்பொருள் திட்டம் பற்றி பேசலாம்.'
              : 'Let’s discuss your software project.'}
          </h2>
          <p className="text-sm text-[#475569] mt-3 leading-relaxed">
            {language === 'ta'
              ? 'உங்கள் திட்டத்தின் நோக்கங்கள் அல்லது தொழில்நுட்ப கேள்விகளை நேரடியாக எங்கள் மின்னஞ்சலுக்கு அனுப்பலாம். நாங்கள் உங்களை விரைவில் தொடர்பு கொள்கிறோம்.'
              : 'Connect directly with our software engineering team via email. Share your project requirements and we will review your architecture promptly.'}
          </p>
        </div>

        {/* 3D Glass Contact Showcase Card */}
        <div className="max-w-2xl mx-auto perspective-1200">
          <VisionGlassCard
            tiltIntensity={12}
            glare={true}
            className="p-8 sm:p-12 text-center"
          >
            {/* Suspended 3D Floating Status Badge */}
            <div className="inline-block mb-6 preserve-3d">
              <FloatingBadge
                depthZ={48}
                variant="eucalyptus"
                icon={<Mail className="w-3.5 h-3.5 text-[#52796f]" />}
              >
                {language === 'ta' ? 'நேரடி மின்னஞ்சல் தொடர்பு' : 'Direct Email Consultation'}
              </FloatingBadge>
            </div>

            {/* Email Address Display Tile */}
            <div 
              className="p-6 sm:p-7 rounded-3xl mb-8 preserve-3d"
              style={{
                transform: 'translateZ(36px)',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.72) 0%, rgba(255, 255, 255, 0.35) 100%)',
                backdropFilter: 'blur(22px) saturate(190%)',
                WebkitBackdropFilter: 'blur(22px) saturate(190%)',
                borderTop: '2px solid rgba(255, 255, 255, 0.98)',
                borderLeft: '1.5px solid rgba(255, 255, 255, 0.7)',
                borderRight: '1px solid rgba(255, 255, 255, 0.35)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.25)',
                boxShadow: 'inset 0 1.5px 2px 0 rgba(255, 255, 255, 0.98), 0 16px 36px -8px rgba(47, 62, 70, 0.12)',
              }}
            >
              <span className="text-[11px] font-semibold text-[#52796f] uppercase tracking-wider block mb-2">
                {language === 'ta' ? 'அதிகாரப்பூர்வ மின்னஞ்சல் முகவரி' : 'Official Email Address'}
              </span>

              <a
                href={mailtoUrl}
                className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#1e293b] hover:text-[#52796f] transition-colors break-all tracking-tight block select-all font-mono"
              >
                {COMPANY_INFO.email}
              </a>

              {/* Subject Pill Indicator if a service was clicked */}
              {initialSubject && (
                <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-[#52796f]/10 text-[#2f3e46] border border-[#52796f]/20">
                  <span className="font-semibold">{language === 'ta' ? 'தேர்வு செய்த சேவை:' : 'Inquiry for:'}</span>
                  <span>{initialSubject}</span>
                </div>
              )}
            </div>

            {/* Action Buttons with Precision Cut-Glass Edges */}
            <div 
              className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10 preserve-3d"
              style={{ transform: 'translateZ(38px)' }}
            >
              <a
                href={mailtoUrl}
                className="vision-btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold rounded-2xl whitespace-nowrap shadow-md group"
              >
                <ExternalLink className="w-4 h-4 text-[#b7e4c7] group-hover:scale-110 transition-transform" />
                <span>{language === 'ta' ? 'மின்னஞ்சல் செயலியைத் திறக்க' : 'Launch Email Client'}</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="vision-btn-glass w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold rounded-2xl whitespace-nowrap"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#52796f]" />
                    <span className="text-[#52796f] font-bold">
                      {language === 'ta' ? 'நகலெடுக்கப்பட்டது!' : 'Copied to Clipboard!'}
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#52796f]" />
                    <span>{language === 'ta' ? 'மின்னஞ்சலை நகலெடுக்க' : 'Copy Email Address'}</span>
                  </>
                )}
              </button>
            </div>

            {/* 3 Frosted Glass Direct Pillars */}
            <div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t border-white/60 text-left text-xs preserve-3d"
              style={{ transform: 'translateZ(26px)' }}
            >
              <div 
                className="p-3.5 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.58) 0%, rgba(255, 255, 255, 0.25) 100%)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  borderTop: '1.5px solid rgba(255, 255, 255, 0.98)',
                  borderLeft: '1px solid rgba(255, 255, 255, 0.6)',
                  borderRight: '1px solid rgba(255, 255, 255, 0.3)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.95), 0 6px 16px rgba(47, 62, 70, 0.05)',
                }}
              >
                <MessageSquare className="w-4 h-4 text-[#52796f] mb-1.5" />
                <span className="font-bold text-[#1e293b] block mb-0.5">
                  {language === 'ta' ? 'நேரடி ஆலோசனை' : 'Direct Architects'}
                </span>
                <span className="text-[11px] text-[#475569] leading-snug block">
                  {language === 'ta' ? 'தமிழ் & ஆங்கிலத்தில் நேரடி உதவி.' : 'Direct discussion with lead engineers.'}
                </span>
              </div>

              <div 
                className="p-3.5 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.58) 0%, rgba(255, 255, 255, 0.25) 100%)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  borderTop: '1.5px solid rgba(255, 255, 255, 0.98)',
                  borderLeft: '1px solid rgba(255, 255, 255, 0.6)',
                  borderRight: '1px solid rgba(255, 255, 255, 0.3)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.95), 0 6px 16px rgba(47, 62, 70, 0.05)',
                }}
              >
                <Clock className="w-4 h-4 text-[#52796f] mb-1.5" />
                <span className="font-bold text-[#1e293b] block mb-0.5">
                  {language === 'ta' ? 'விரைவான பதில்' : 'Prompt Review'}
                </span>
                <span className="text-[11px] text-[#475569] leading-snug block">
                  {language === 'ta' ? 'உங்கள் தேவைக்கேற்ப விரிவான ஆய்வு.' : 'Swift architecture and quote evaluation.'}
                </span>
              </div>

              <div 
                className="p-3.5 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.58) 0%, rgba(255, 255, 255, 0.25) 100%)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  borderTop: '1.5px solid rgba(255, 255, 255, 0.98)',
                  borderLeft: '1px solid rgba(255, 255, 255, 0.6)',
                  borderRight: '1px solid rgba(255, 255, 255, 0.3)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.95), 0 6px 16px rgba(47, 62, 70, 0.05)',
                }}
              >
                <MapPin className="w-4 h-4 text-[#52796f] mb-1.5" />
                <span className="font-bold text-[#1e293b] block mb-0.5">
                  {language === 'ta' ? 'தமிழ்நாடு, இந்தியா' : 'Tamil Nadu, India'}
                </span>
                <span className="text-[11px] text-[#475569] leading-snug block">
                  {language === 'ta' ? 'உள்ளூர் ஆதரவு & உலகளாவிய மென்பொருள்.' : 'Regional presence with global deployment.'}
                </span>
              </div>
            </div>
          </VisionGlassCard>
        </div>
      </div>
    </section>
  );
};
