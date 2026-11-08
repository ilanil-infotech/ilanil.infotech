import React from 'react';

/**
 * LiquidMeshBackground
 * 
 * Flowing liquid/aurora mesh background in soft sage and mineral greens:
 * #a3c4b2 (soft sage), #84a98c (eucalyptus sage), #b7e4c7 (mineral mint sage), and #52796f (deep eucalyptus).
 * 
 * Slightly higher contrast & definition so the frosted glass (backdrop-filter) produces
 * an unmistakable, luxurious liquid glass refraction effect across every card.
 */
export const LiquidMeshBackground: React.FC = () => {
  return (
    <div 
      aria-hidden="true" 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#edf3ef]"
    >
      {/* Foundational ambient gradient light */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_90%_90%_at_50%_-15%,rgba(183,228,199,0.5),rgba(237,243,239,0.92)_70%)]" 
      />

      {/* Aurora Mesh Container with optical Gaussian blur */}
      <div className="absolute inset-0 filter blur-[75px] sm:blur-[95px] opacity-90 sm:opacity-95">
        {/* Blob 1: Soft Sage (#a3c4b2) */}
        <div 
          className="absolute -top-[12%] left-[4%] w-[500px] h-[500px] sm:w-[680px] sm:h-[680px] rounded-full animate-liquid-1 mix-blend-multiply opacity-90"
          style={{
            background: 'radial-gradient(circle, #a3c4b2 0%, #84a98c 60%, transparent 85%)',
            animationDuration: '24s',
          }}
        />

        {/* Blob 2: Eucalyptus Sage (#84a98c) */}
        <div 
          className="absolute top-[10%] -right-[6%] w-[520px] h-[520px] sm:w-[720px] sm:h-[720px] rounded-full animate-liquid-2 mix-blend-multiply opacity-85"
          style={{
            background: 'radial-gradient(circle, #84a98c 0%, #52796f 65%, transparent 85%)',
            animationDuration: '30s',
          }}
        />

        {/* Blob 3: Mineral Mint Sage (#b7e4c7) */}
        <div 
          className="absolute top-[35%] left-[18%] w-[480px] h-[480px] sm:w-[660px] sm:h-[660px] rounded-full animate-liquid-3 mix-blend-multiply opacity-90"
          style={{
            background: 'radial-gradient(circle, #b7e4c7 0%, #a3c4b2 60%, transparent 85%)',
            animationDuration: '22s',
          }}
        />

        {/* Blob 4: Deep Eucalyptus (#52796f) */}
        <div 
          className="absolute top-[58%] -left-[12%] w-[540px] h-[540px] sm:w-[740px] sm:h-[740px] rounded-full animate-liquid-4 mix-blend-multiply opacity-70"
          style={{
            background: 'radial-gradient(circle, #52796f 0%, #354f52 65%, transparent 85%)',
            animationDuration: '32s',
          }}
        />

        {/* Blob 5: Soft Mineral Green (#a3c4b2 / #b7e4c7) */}
        <div 
          className="absolute top-[72%] right-[6%] w-[480px] h-[480px] sm:w-[680px] sm:h-[680px] rounded-full animate-liquid-1 mix-blend-multiply opacity-85"
          style={{
            background: 'radial-gradient(circle, #a3c4b2 0%, #b7e4c7 60%, transparent 85%)',
            animationDuration: '28s',
          }}
        />

        {/* Blob 6: Center Luminescent Accent (#b7e4c7) */}
        <div 
          className="absolute top-[20%] left-[42%] w-[420px] h-[420px] sm:w-[600px] sm:h-[600px] rounded-full animate-liquid-2 mix-blend-multiply opacity-80"
          style={{
            background: 'radial-gradient(circle, #b7e4c7 0%, #84a98c 55%, transparent 85%)',
            animationDuration: '26s',
          }}
        />
      </div>

      {/* Subtle organic light sheen / VisionOS glass texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.038] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Crisp optical perimeter vignette */}
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#dfe8e2]/50" />
    </div>
  );
};
