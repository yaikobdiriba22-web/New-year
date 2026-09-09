import React from 'react';

// Authentic Ethiopian Tibeb (ጥበብ) Geometric Border Motif
export const TibebBorder: React.FC<{ className?: string; colorVariant?: 'gold' | 'emerald' | 'subtle' }> = ({
  className = '',
  colorVariant = 'gold',
}) => {
  const strokeColor =
    colorVariant === 'gold'
      ? '#D49A00'
      : colorVariant === 'emerald'
      ? '#0A5C36'
      : 'currentColor';

  return (
    <div className={`w-full overflow-hidden flex items-center justify-center opacity-85 select-none ${className}`}>
      <svg
        className="w-full h-4"
        viewBox="0 0 1200 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="repeat-x"
      >
        <defs>
          <pattern id={`tibeb-pat-${colorVariant}`} width="60" height="16" patternUnits="userSpaceOnUse">
            {/* Diamond interlocking */}
            <path
              d="M 15 8 L 30 0 L 45 8 L 30 16 Z"
              fill="none"
              stroke={strokeColor}
              strokeWidth="1.2"
              opacity="0.8"
            />
            <path
              d="M 0 8 L 15 0 L 30 8 L 15 16 Z"
              fill="none"
              stroke={strokeColor}
              strokeWidth="1.2"
              opacity="0.5"
            />
            <path
              d="M 30 8 L 45 0 L 60 8 L 45 16 Z"
              fill="none"
              stroke={strokeColor}
              strokeWidth="1.2"
              opacity="0.5"
            />
            {/* Center diamond dot */}
            <circle cx="30" cy="8" r="2" fill={strokeColor} opacity="0.9" />
            <circle cx="15" cy="8" r="1.5" fill="#C5221F" opacity="0.8" />
            <circle cx="45" cy="8" r="1.5" fill="#0A5C36" opacity="0.8" />
            {/* Top and bottom guide lines */}
            <line x1="0" y1="0.5" x2="60" y2="0.5" stroke={strokeColor} strokeWidth="0.8" opacity="0.4" />
            <line x1="0" y1="15.5" x2="60" y2="15.5" stroke={strokeColor} strokeWidth="0.8" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="16" fill={`url(#tibeb-pat-${colorVariant})`} />
      </svg>
    </div>
  );
};

// Radiant Adey Abeba (Ethiopian Yellow Daisy) SVG
export const AdeyAbebaIcon: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 28,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
    >
      <g transform="translate(50,50)">
        {/* 8 radiant golden yellow petals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <ellipse
            key={i}
            cx="0"
            cy="-28"
            rx="9"
            ry="20"
            fill="url(#petalGrad)"
            transform={`rotate(${angle})`}
            filter="drop-shadow(0 1px 2px rgba(0,0,0,0.15))"
          />
        ))}
        {/* Flower Center Disc with orange warmth */}
        <circle cx="0" cy="0" r="14" fill="#D97706" />
        <circle cx="0" cy="0" r="10" fill="#F59E0B" />
        <circle cx="0" cy="0" r="6" fill="#78350F" opacity="0.7" />
        {/* Subtle pollen ring */}
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
          <circle
            key={i}
            cx={7 * Math.cos((deg * Math.PI) / 180)}
            cy={7 * Math.sin((deg * Math.PI) / 180)}
            r="1.8"
            fill="#FEF08A"
          />
        ))}
      </g>
      <defs>
        <linearGradient id="petalGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="40%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
    </svg>
  );
};

// Ge'ez Cross Emblem Motif (Lalibela-inspired)
export const GeezCrossEmblem: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 24,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M32 4V60M4 32H60M20 20L44 44M44 20L20 44"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="32" cy="32" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="32" cy="4" r="3" fill="currentColor" />
      <circle cx="32" cy="60" r="3" fill="currentColor" />
      <circle cx="4" cy="32" r="3" fill="currentColor" />
      <circle cx="60" cy="32" r="3" fill="currentColor" />
      <circle cx="20" cy="20" r="2.5" fill="currentColor" />
      <circle cx="44" cy="20" r="2.5" fill="currentColor" />
      <circle cx="20" cy="44" r="2.5" fill="currentColor" />
      <circle cx="44" cy="44" r="2.5" fill="currentColor" />
    </svg>
  );
};

// Joyful golden celebration accent bar (radiant sunshine & Adey Abeba festival warmth)
export const CelebrationRibbon: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex h-[3px] w-full overflow-hidden ${className}`}>
      <div className="flex-1 bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-300" />
      <div className="flex-1 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400" />
      <div className="flex-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500" />
    </div>
  );
};

export const TricolorRibbon = CelebrationRibbon;

// Sacred Odaa Sycamore Tree Emblem (Oromo Gadaa Heritage Symbol)
export const OdaaTreeIcon: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 28,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Broad sprawling canopy representing democratic shelter and shade */}
      <path
        d="M32 8 C23 8 18 13 14 17 C9 22 8 28 12 33 C14 36 17 37 20 37 C21 40 23 42 27 43 L27 54 L22 58 L22 60 L42 60 L42 58 L37 54 L37 43 C41 42 43 40 44 37 C47 37 50 36 52 33 C56 28 55 22 50 17 C46 13 41 8 32 8 Z"
        fill="currentColor"
        opacity="0.9"
      />
      {/* Strong branch lines */}
      <path
        d="M32 54 L32 36 M32 38 L25 28 M32 38 L39 28 M32 32 L32 18"
        stroke="#FEF3C7"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Root base ground line */}
      <path
        d="M16 60 L48 60"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
