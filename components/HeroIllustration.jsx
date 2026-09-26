export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-md"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>

      {/* Circuit board pattern background */}
      <circle cx="200" cy="200" r="180" fill="url(#grad1)" opacity="0.1" />
      <circle cx="200" cy="200" r="150" fill="url(#grad1)" opacity="0.05" />

      {/* PCB-inspired circuit lines */}
      <path d="M 80 120 L 150 120 L 150 180" stroke="#3b82f6" strokeWidth="2" opacity="0.3" />
      <path d="M 320 280 L 250 280 L 250 220" stroke="#06b6d4" strokeWidth="2" opacity="0.3" />
      <circle cx="150" cy="120" r="4" fill="#3b82f6" opacity="0.5" />
      <circle cx="150" cy="180" r="4" fill="#3b82f6" opacity="0.5" />
      <circle cx="250" cy="280" r="4" fill="#06b6d4" opacity="0.5" />
      <circle cx="250" cy="220" r="4" fill="#06b6d4" opacity="0.5" />

      {/* Central microcontroller symbol */}
      <rect x="160" y="160" width="80" height="80" rx="8" fill="none" stroke="#3b82f6" strokeWidth="2" />
      <circle cx="200" cy="200" r="20" fill="url(#grad1)" opacity="0.8" />
      <circle cx="200" cy="200" r="12" fill="white" opacity="0.9" />

      {/* Sensor nodes */}
      <circle cx="100" cy="280" r="30" fill="none" stroke="#06b6d4" strokeWidth="2" opacity="0.6" />
      <circle cx="100" cy="280" r="15" fill="#06b6d4" opacity="0.3" />
      <circle cx="300" cy="120" r="30" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />
      <circle cx="300" cy="120" r="15" fill="#3b82f6" opacity="0.3" />

      {/* Antenna lines */}
      <line x1="200" y1="80" x2="200" y2="40" stroke="#3b82f6" strokeWidth="2" opacity="0.5" />
      <line x1="185" y1="55" x2="200" y2="40" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4" />
      <line x1="215" y1="55" x2="200" y2="40" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4" />

      {/* Data flow indicators */}
      <circle cx="150" cy="280" r="3" fill="#06b6d4" opacity="0.8" />
      <circle cx="250" cy="120" r="3" fill="#3b82f6" opacity="0.8" />
      <circle cx="120" cy="150" r="2" fill="#f59e0b" opacity="0.6" />
      <circle cx="280" cy="250" r="2" fill="#f59e0b" opacity="0.6" />
    </svg>
  );
}
