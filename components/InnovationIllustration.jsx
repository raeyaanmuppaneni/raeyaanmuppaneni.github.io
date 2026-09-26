export default function InnovationIllustration() {
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <defs>
        <linearGradient id="innovation-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>

      {/* Robot arm base */}
      <circle cx="150" cy="240" r="30" stroke="url(#innovation-grad)" strokeWidth="2" fill="none" />
      <rect x="140" y="235" width="20" height="15" rx="2" fill="url(#innovation-grad)" opacity="0.3" />

      {/* Arm segments */}
      <g transform="translate(150, 210)">
        {/* Segment 1 */}
        <line x1="0" y1="0" x2="35" y2="-50" stroke="url(#innovation-grad)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="0" cy="0" r="6" fill="url(#innovation-grad)" opacity="0.8" />
        <circle cx="35" cy="-50" r="6" fill="url(#innovation-grad)" opacity="0.7" />

        {/* Segment 2 */}
        <line x1="35" y1="-50" x2="60" y2="-90" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="60" cy="-90" r="5" fill="#06b6d4" opacity="0.8" />

        {/* Gripper */}
        <line x1="60" y1="-90" x2="70" y2="-105" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
        <line x1="60" y1="-90" x2="75" y2="-95" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
        <circle cx="70" cy="-105" r="4" fill="#f59e0b" opacity="0.7" />
      </g>

      {/* Energy/Signal pulses */}
      <g opacity="0.4">
        <circle cx="150" cy="120" r="20" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
        <circle cx="150" cy="120" r="35" stroke="#06b6d4" strokeWidth="1" fill="none" />
      </g>

      {/* Floating nodes */}
      <circle cx="80" cy="100" r="4" fill="#3b82f6" opacity="0.7" />
      <circle cx="220" cy="110" r="4" fill="#f59e0b" opacity="0.7" />
      <circle cx="90" cy="60" r="3" fill="#06b6d4" opacity="0.6" />
      <circle cx="210" cy="70" r="3" fill="#f59e0b" opacity="0.6" />

      {/* Connection lines */}
      <line x1="85" y1="105" x2="130" y2="120" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
      <line x1="215" y1="115" x2="170" y2="120" stroke="#f59e0b" strokeWidth="1" opacity="0.3" />
      <line x1="95" y1="65" x2="140" y2="100" stroke="#06b6d4" strokeWidth="1" opacity="0.3" />

      {/* Tech indicator */}
      <rect x="120" y="30" width="60" height="8" rx="4" fill="none" stroke="url(#innovation-grad)" strokeWidth="1.5" />
      <rect x="125" y="34" width="50" height="0.5" fill="url(#innovation-grad)" opacity="0.7" />
    </svg>
  );
}
