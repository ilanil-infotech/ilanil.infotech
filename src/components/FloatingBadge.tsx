import React from 'react';

export interface FloatingBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  depthZ?: number;
  icon?: React.ReactNode;
  variant?: 'sage' | 'eucalyptus' | 'charcoal' | 'glass';
  className?: string;
  float?: boolean;
}

/**
 * FloatingBadge
 * 
 * VisionOS-style floating 3D badge with translateZ parallax depth:
 * Floats physically above the frosted glass card plane with its own specular top highlight
 * and drop-shadow, producing a striking 3D optical shift when the parent tilts.
 */
export const FloatingBadge: React.FC<FloatingBadgeProps> = ({
  children,
  depthZ = 28,
  icon,
  variant = 'glass',
  className = '',
  float = false,
  style,
  ...rest
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'sage':
        return {
          background: 'linear-gradient(135deg, rgba(163, 196, 178, 0.45) 0%, rgba(163, 196, 178, 0.22) 100%)',
          color: '#2f3e46',
          borderTop: '1.5px solid rgba(255, 255, 255, 0.98)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.6)',
          borderRight: '1px solid rgba(255, 255, 255, 0.3)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.25)',
        };
      case 'eucalyptus':
        return {
          background: 'linear-gradient(135deg, rgba(82, 121, 111, 0.3) 0%, rgba(82, 121, 111, 0.14) 100%)',
          color: '#2f3e46',
          borderTop: '1.5px solid rgba(255, 255, 255, 0.98)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.6)',
          borderRight: '1px solid rgba(255, 255, 255, 0.3)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.25)',
        };
      case 'charcoal':
        return {
          background: 'linear-gradient(135deg, rgba(47, 62, 70, 0.9) 0%, rgba(30, 41, 59, 0.95) 100%)',
          color: '#ffffff',
          borderTop: '1.5px solid rgba(255, 255, 255, 0.45)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.25)',
          borderRight: '1px solid rgba(255, 255, 255, 0.15)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        };
      case 'glass':
      default:
        return {
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.68) 0%, rgba(255, 255, 255, 0.38) 100%)',
          color: '#2f3e46',
          borderTop: '1.5px solid rgba(255, 255, 255, 0.98)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.65)',
          borderRight: '1px solid rgba(255, 255, 255, 0.35)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.25)',
        };
    }
  };

  const variantStyle = getVariantStyles();

  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide select-none transition-transform duration-200 ${
        float ? 'animate-gentle-float' : ''
      } ${className}`}
      style={{
        transform: `translateZ(${depthZ}px)`,
        transformStyle: 'preserve-3d',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        boxShadow: 'inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.98), inset 0 -1px 1px 0 rgba(255, 255, 255, 0.2), 0 10px 22px -4px rgba(47, 62, 70, 0.12)',
        ...variantStyle,
        ...style,
      }}
      {...rest}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="whitespace-nowrap">{children}</span>
    </div>
  );
};
