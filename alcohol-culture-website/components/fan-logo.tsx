export function FanLogo({ className = "", withWhiteBorder = false }: { className?: string; withWhiteBorder?: boolean }) {
  const strokeColor = withWhiteBorder ? "white" : "currentColor";
  const strokeWidth = withWhiteBorder ? "1.5" : "1";
  
  return (
    <svg
      viewBox="0 0 80 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Left Fan */}
      <path
        d="M10 35 C10 20, 25 10, 25 10 L30 15 C30 15, 18 22, 18 35 Z"
        fill="url(#gradient1)"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        opacity="0.9"
      />
      <path
        d="M18 35 C18 22, 30 15, 30 15 L35 20 C35 20, 26 26, 26 35 Z"
        fill="url(#gradient2)"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        opacity="0.85"
      />
      <path
        d="M26 35 C26 26, 35 20, 35 20 L40 25 C40 25, 34 29, 34 35 Z"
        fill="url(#gradient1)"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        opacity="0.8"
      />
      
      {/* Center Fan */}
      <path
        d="M28 35 C28 18, 40 8, 40 8 L45 13 C45 13, 36 20, 36 35 Z"
        fill="url(#gradient2)"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        opacity="0.9"
      />
      <path
        d="M36 35 C36 20, 45 13, 45 13 L50 18 C50 18, 44 24, 44 35 Z"
        fill="url(#gradient1)"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        opacity="0.85"
      />
      <path
        d="M44 35 C44 24, 50 18, 50 18 L55 23 C55 23, 52 28, 52 35 Z"
        fill="url(#gradient2)"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        opacity="0.8"
      />
      
      {/* Right Fan */}
      <path
        d="M46 35 C46 16, 55 6, 55 6 L60 11 C60 11, 54 18, 54 35 Z"
        fill="url(#gradient1)"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        opacity="0.9"
      />
      <path
        d="M54 35 C54 18, 60 11, 60 11 L65 16 C65 16, 62 22, 62 35 Z"
        fill="url(#gradient2)"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        opacity="0.85"
      />
      <path
        d="M62 35 C62 22, 65 16, 65 16 L70 21 C70 21, 70 27, 70 35 Z"
        fill="url(#gradient1)"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        opacity="0.8"
      />
      
      {/* Gradients - Soft Lavender & Light Pink */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B48CFF" />
          <stop offset="100%" stopColor="#C9A8FF" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFB6DA" />
          <stop offset="100%" stopColor="#FFCCE5" />
        </linearGradient>
      </defs>
    </svg>
  )
}
