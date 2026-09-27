export default function EngineeringArt() {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <defs>
        <linearGradient id="engineeringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8c1515" />
          <stop offset="100%" stopColor="#c9a876" />
        </linearGradient>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.2"/>
        </filter>
      </defs>

      {/* Background subtle circles */}
      <circle cx="200" cy="200" r="150" fill="url(#engineeringGrad)" opacity="0.05"/>
      <circle cx="200" cy="200" r="100" fill="url(#engineeringGrad)" opacity="0.08"/>

      {/* Main engineering elements - geometric and clean */}
      {/* Hexagon representing engineering/science */}
      <path d="M 200 80 L 280 120 L 280 200 L 200 240 L 120 200 L 120 120 Z"
            fill="none" stroke="url(#engineeringGrad)" strokeWidth="2" filter="url(#shadow)"/>

      {/* Connecting circuit paths */}
      <path d="M 200 80 Q 220 100 240 120" fill="none" stroke="#8c1515" strokeWidth="1.5" opacity="0.6"/>
      <path d="M 200 80 Q 180 100 160 120" fill="none" stroke="#c9a876" strokeWidth="1.5" opacity="0.6"/>
      <path d="M 280 200 Q 300 180 320 160" fill="none" stroke="#8c1515" strokeWidth="1.5" opacity="0.6"/>
      <path d="M 120 200 Q 100 180 80 160" fill="none" stroke="#c9a876" strokeWidth="1.5" opacity="0.6"/>

      {/* Central core - represent innovation/processor */}
      <circle cx="200" cy="160" r="30" fill="url(#engineeringGrad)" opacity="0.3"/>
      <circle cx="200" cy="160" r="20" fill="none" stroke="url(#engineeringGrad)" strokeWidth="2"/>
      <circle cx="200" cy="160" r="8" fill="url(#engineeringGrad)"/>

      {/* Nodes - represent ideas/connections */}
      <circle cx="160" cy="140" r="4" fill="#8c1515"/>
      <circle cx="240" cy="140" r="4" fill="#c9a876"/>
      <circle cx="200" cy="100" r="4" fill="#f59e0b"/>
      <circle cx="200" cy="220" r="4" fill="#6b7c52"/>
      <circle cx="140" cy="180" r="3" fill="#8c1515" opacity="0.7"/>
      <circle cx="260" cy="180" r="3" fill="#c9a876" opacity="0.7"/>

      {/* Connection lines between nodes */}
      <line x1="200" y1="160" x2="160" y2="140" stroke="#8c1515" strokeWidth="1" opacity="0.4"/>
      <line x1="200" y1="160" x2="240" y2="140" stroke="#c9a876" strokeWidth="1" opacity="0.4"/>
      <line x1="200" y1="160" x2="200" y2="100" stroke="#f59e0b" strokeWidth="1" opacity="0.3"/>
      <line x1="200" y1="160" x2="200" y2="220" stroke="#6b7c52" strokeWidth="1" opacity="0.3"/>

      {/* Decorative wave patterns */}
      <path d="M 80 280 Q 100 290 120 280 T 160 280 T 200 280 T 240 280 T 280 280"
            fill="none" stroke="url(#engineeringGrad)" strokeWidth="1" opacity="0.3"/>
      <path d="M 80 290 Q 100 300 120 290 T 160 290 T 200 290 T 240 290 T 280 290"
            fill="none" stroke="url(#engineeringGrad)" strokeWidth="0.8" opacity="0.2"/>

      {/* Top accent - DNA helix inspired */}
      <path d="M 170 60 Q 180 55 190 60 Q 200 65 210 60 Q 220 55 230 60"
            fill="none" stroke="#f59e0b" strokeWidth="1.5" opacity="0.5"/>
      <circle cx="190" cy="60" r="2" fill="#f59e0b" opacity="0.6"/>
      <circle cx="210" cy="60" r="2" fill="#f59e0b" opacity="0.6"/>
    </svg>
  );
}
