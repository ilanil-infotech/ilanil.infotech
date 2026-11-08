import React, { useRef, useState, useCallback } from 'react';

export interface VisionGlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  tiltIntensity?: number;
  glare?: boolean;
  elevationOnHover?: boolean;
  style?: React.CSSProperties;
}

/**
 * VisionGlassCard
 * 
 * Hyper-Realistic Apple VisionOS Crystalline Frosted Glass Card with Advanced 3D Spatial Physics:
 * - Dynamic 3D tilt tracking with responsive spring easing
 * - Real-time directional contact shadow parallax (-ry * 2.5px, rx * 2.5px)
 * - True 3D CSS Space (perspective: 1200px, preserve-3d)
 * - Multi-layer translateZ depth for nested floating elements
 * - Optical glass transparency gradient + Permanent diagonal sheen + Dynamic cursor specular glare
 */
export const VisionGlassCard: React.FC<VisionGlassCardProps> = ({
  children,
  className = '',
  tiltIntensity = 14,
  glare = true,
  elevationOnHover = true,
  style,
  ...rest
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0 to 1
    const y = (e.clientY - rect.top) / rect.height; // 0 to 1

    const ry = (x - 0.5) * tiltIntensity * 2;
    const rx = (0.5 - y) * tiltIntensity * 2;

    setTilt({ rx, ry });
    setGlarePos({
      x: x * 100,
      y: y * 100,
      opacity: 1,
    });
  }, [tiltIntensity]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    setGlarePos(prev => ({ ...prev, opacity: 1 }));
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ rx: 0, ry: 0 });
    setGlarePos(prev => ({ ...prev, opacity: 0 }));
  }, []);

  // Compute realistic directional 3D contact shadows that physically shift opposite the light angle
  const shadowX = -tilt.ry * 2.4;
  const shadowY = tilt.rx * 2.4 + (isHovered ? 28 : 16);
  const shadowBlur = isHovered ? 52 : 36;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl preserve-3d transition-all duration-300 ${className}`}
      style={{
        transform: `perspective(1200px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateZ(${isHovered && elevationOnHover ? 18 : 0}px) scale3d(${isHovered ? 1.025 : 1}, ${isHovered ? 1.025 : 1}, 1)`,
        transition: isHovered
          ? 'transform 0.1s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.2s ease'
          : 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s ease',
        background: isHovered
          ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0.22) 50%, rgba(255, 255, 255, 0.38) 100%)'
          : 'linear-gradient(135deg, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0.18) 50%, rgba(255, 255, 255, 0.32) 100%)',
        backdropFilter: 'blur(24px) saturate(190%) contrast(102%) brightness(104%)',
        WebkitBackdropFilter: 'blur(24px) saturate(190%) contrast(102%) brightness(104%)',
        borderTop: '1.5px solid rgba(255, 255, 255, 0.98)',
        borderLeft: '1.5px solid rgba(255, 255, 255, 0.65)',
        borderRight: '1px solid rgba(255, 255, 255, 0.25)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: isHovered
          ? `inset 0 1.5px 2px 0 rgba(255, 255, 255, 0.98), inset 1.5px 0 2px 0 rgba(255, 255, 255, 0.65), inset 0 -1.5px 2px 0 rgba(255, 255, 255, 0.25), ${shadowX}px ${shadowY}px ${shadowBlur}px -10px rgba(47, 62, 70, 0.18), 0 6px 20px -2px rgba(82, 121, 111, 0.12)`
          : `inset 0 1.5px 2px 0 rgba(255, 255, 255, 0.95), inset 1.5px 0 2px 0 rgba(255, 255, 255, 0.55), inset 0 -1px 2px 0 rgba(255, 255, 255, 0.18), ${shadowX}px ${shadowY}px ${shadowBlur}px -12px rgba(47, 62, 70, 0.09)`,
        ...style,
      }}
      {...rest}
    >
      {/* Permanent Optical Glass Diagonal Sheen Overlay */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden z-10 opacity-70"
        style={{
          background: 'linear-gradient(125deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.08) 28%, transparent 55%)',
        }}
      />

      {/* Dynamic Specular Glare Layer on Hover */}
      {glare && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden transition-opacity duration-300 z-20"
          style={{ opacity: glarePos.opacity }}
        >
          {/* Cursor-following radial light glare */}
          <div
            className="absolute inset-0 transition-all duration-75 ease-out"
            style={{
              background: `radial-gradient(circle 380px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.22) 35%, transparent 70%)`,
            }}
          />
          {/* Crystalline top edge sheen sweep */}
          <div 
            className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-95"
          />
        </div>
      )}

      {/* Card Content (Preserves 3D for nested translateZ elements) */}
      <div className="relative z-30 w-full h-full preserve-3d">
        {children}
      </div>
    </div>
  );
};
