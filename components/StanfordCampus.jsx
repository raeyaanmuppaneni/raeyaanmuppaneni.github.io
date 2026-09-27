export default function StanfordCampus() {
  return (
    <svg
      viewBox="0 0 600 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <defs>
        <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#bfe3f7" />
          <stop offset="60%" stopColor="#e8f4fb" />
          <stop offset="100%" stopColor="#fdf6ec" />
        </linearGradient>
        <linearGradient id="stoneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e8d4ab" />
          <stop offset="100%" stopColor="#d4b988" />
        </linearGradient>
        <linearGradient id="stoneGradDark" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#dcc396" />
          <stop offset="100%" stopColor="#c2a273" />
        </linearGradient>
        <linearGradient id="roofGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c1502e" />
          <stop offset="100%" stopColor="#9c3d22" />
        </linearGradient>
        <linearGradient id="towerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f0dfb8" />
          <stop offset="50%" stopColor="#e3cd9c" />
          <stop offset="100%" stopColor="#cbae7d" />
        </linearGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Sky */}
      <rect x="0" y="0" width="600" height="420" fill="url(#skyGrad)" />

      {/* Sun glow */}
      <circle cx="500" cy="70" r="60" fill="#fef3c7" opacity="0.35" />

      {/* Distant hills */}
      <path d="M0 260 Q 100 230 220 250 T 460 245 T 600 255 V 420 H 0 Z" fill="#c9d8a8" opacity="0.5" />

      {/* Ground */}
      <rect x="0" y="330" width="600" height="90" fill="#e3ddc9" />
      <path d="M0 330 Q 150 315 300 330 T 600 325 V 330 H 0 Z" fill="#d8cfae" />

      {/* ===== Hoover Tower ===== */}
      <g filter="url(#softShadow)">
        {/* Tower shaft */}
        <rect x="272" y="70" width="56" height="200" fill="url(#towerGrad)" />
        {/* Vertical seams */}
        <line x1="286" y1="70" x2="286" y2="270" stroke="#b89a68" strokeWidth="1" opacity="0.4" />
        <line x1="300" y1="70" x2="300" y2="270" stroke="#b89a68" strokeWidth="1" opacity="0.4" />
        <line x1="314" y1="70" x2="314" y2="270" stroke="#b89a68" strokeWidth="1" opacity="0.4" />

        {/* Window arches */}
        {[110, 150, 190, 230].map((y, i) => (
          <path
            key={i}
            d={`M 288 ${y + 14} L 288 ${y} Q 300 ${y - 10} 312 ${y} L 312 ${y + 14} Z`}
            fill="#7a5c34"
            opacity="0.55"
          />
        ))}

        {/* Belfry base (wider) */}
        <rect x="262" y="45" width="76" height="28" fill="url(#stoneGradDark)" />
        {/* Arched openings in belfry */}
        <path d="M 275 70 L 275 55 Q 283 48 291 55 L 291 70 Z" fill="#6b4f2c" opacity="0.6" />
        <path d="M 309 70 L 309 55 Q 317 48 325 55 L 325 70 Z" fill="#6b4f2c" opacity="0.6" />

        {/* Pyramidal tiled roof */}
        <path d="M 255 45 L 300 8 L 345 45 Z" fill="url(#roofGrad)" />
        <path d="M 255 45 L 345 45 L 338 52 L 262 52 Z" fill="#8a3620" />
        {/* Roof ridge lines */}
        <line x1="300" y1="8" x2="300" y2="45" stroke="#7a2f1b" strokeWidth="1" opacity="0.5" />
        <line x1="278" y1="45" x2="300" y2="12" stroke="#7a2f1b" strokeWidth="1" opacity="0.4" />
        <line x1="322" y1="45" x2="300" y2="12" stroke="#7a2f1b" strokeWidth="1" opacity="0.4" />

        {/* Spire finial */}
        <line x1="300" y1="8" x2="300" y2="-6" stroke="#7a5c34" strokeWidth="2" />
        <circle cx="300" cy="-8" r="3" fill="#c9a86a" />
      </g>

      {/* ===== Main Quad colonnade wings ===== */}
      {/* Left wing */}
      <g filter="url(#softShadow)">
        <rect x="60" y="230" width="212" height="70" fill="url(#stoneGrad)" />
        {/* Arched colonnade openings */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const x = 78 + i * 32;
          return (
            <path
              key={i}
              d={`M ${x} 300 L ${x} 262 Q ${x + 12} 250 ${x + 24} 262 L ${x + 24} 300 Z`}
              fill="#8f7248"
              opacity="0.5"
            />
          );
        })}
        {/* Roofline */}
        <path d="M 55 232 L 165 205 L 277 232 Z" fill="url(#roofGrad)" />
        <rect x="55" y="228" width="222" height="8" fill="#8a3620" />
      </g>

      {/* Right wing */}
      <g filter="url(#softShadow)">
        <rect x="328" y="230" width="212" height="70" fill="url(#stoneGrad)" />
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const x = 346 + i * 32;
          return (
            <path
              key={i}
              d={`M ${x} 300 L ${x} 262 Q ${x + 12} 250 ${x + 24} 262 L ${x + 24} 300 Z`}
              fill="#8f7248"
              opacity="0.5"
            />
          );
        })}
        <path d="M 323 232 L 433 205 L 545 232 Z" fill="url(#roofGrad)" />
        <rect x="323" y="228" width="222" height="8" fill="#8a3620" />
      </g>

      {/* Connecting arcade behind tower */}
      <rect x="272" y="260" width="56" height="40" fill="url(#stoneGradDark)" />

      {/* ===== Palm trees ===== */}
      {[
        { x: 40, y: 300, scale: 1 },
        { x: 555, y: 300, scale: 1.1 },
      ].map((p, i) => (
        <g key={i} transform={`translate(${p.x} ${p.y}) scale(${p.scale})`}>
          <path d="M 0 0 C -3 -30 -1 -55 1 -75" stroke="#7a6a4a" strokeWidth="4" fill="none" strokeLinecap="round" />
          {[
            'M 1 -75 Q -25 -85 -38 -70',
            'M 1 -75 Q 25 -88 40 -76',
            'M 1 -75 Q -18 -95 -22 -112',
            'M 1 -75 Q 20 -98 28 -114',
            'M 1 -75 Q 2 -100 2 -118',
          ].map((d, j) => (
            <path key={j} d={d} stroke="#5f7a3f" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.85" />
          ))}
        </g>
      ))}

      {/* Foreground lawn texture */}
      <path d="M0 340 Q 150 332 300 340 T 600 336 V 420 H 0 Z" fill="#eef0dd" opacity="0.6" />

      {/* Soft foreground vignette shrubs */}
      <ellipse cx="130" cy="305" rx="26" ry="12" fill="#7f9660" opacity="0.5" />
      <ellipse cx="470" cy="305" rx="26" ry="12" fill="#7f9660" opacity="0.5" />
    </svg>
  );
}
