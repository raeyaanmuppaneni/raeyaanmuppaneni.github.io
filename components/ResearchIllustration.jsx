export default function ResearchIllustration() {
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <defs>
        <linearGradient id="research-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>

      {/* Beaker/Flask */}
      <path
        d="M 120 80 L 100 200 Q 100 220 115 230 L 185 230 Q 200 220 200 200 L 180 80 Z"
        stroke="url(#research-grad)"
        strokeWidth="2"
        fill="none"
      />

      {/* Liquid in flask */}
      <path
        d="M 102 150 Q 102 215 115 225 L 185 225 Q 198 215 198 200 L 178 150 Z"
        fill="url(#research-grad)"
        opacity="0.2"
      />

      {/* Beaker neck */}
      <line x1="130" y1="75" x2="130" y2="50" stroke="url(#research-grad)" strokeWidth="2" />
      <line x1="170" y1="75" x2="170" y2="50" stroke="url(#research-grad)" strokeWidth="2" />
      <rect x="128" y="45" width="44" height="10" rx="3" fill="none" stroke="url(#research-grad)" strokeWidth="2" />

      {/* Data points floating around */}
      <circle cx="60" cy="100" r="6" fill="#06b6d4" opacity="0.6" />
      <circle cx="240" cy="120" r="5" fill="#f59e0b" opacity="0.6" />
      <circle cx="70" cy="200" r="4" fill="#3b82f6" opacity="0.5" />
      <circle cx="230" cy="190" r="5" fill="#06b6d4" opacity="0.5" />

      {/* Connecting lines */}
      <line x1="66" y1="105" x2="110" y2="120" stroke="#06b6d4" strokeWidth="1" opacity="0.3" />
      <line x1="234" y1="125" x2="180" y2="140" stroke="#f59e0b" strokeWidth="1" opacity="0.3" />
      <line x1="75" y1="205" x2="105" y2="215" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
      <line x1="224" y1="195" x2="190" y2="210" stroke="#06b6d4" strokeWidth="1" opacity="0.3" />

      {/* Molecule-like structure */}
      <circle cx="150" cy="70" r="3" fill="#3b82f6" />
      <circle cx="140" cy="85" r="3" fill="#06b6d4" />
      <circle cx="160" cy="85" r="3" fill="#f59e0b" />
      <line x1="150" y1="70" x2="140" y2="85" stroke="#3b82f6" strokeWidth="1" opacity="0.5" />
      <line x1="150" y1="70" x2="160" y2="85" stroke="#f59e0b" strokeWidth="1" opacity="0.5" />
      <line x1="140" y1="85" x2="160" y2="85" stroke="#06b6d4" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}
