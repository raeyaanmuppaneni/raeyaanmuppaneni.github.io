'use client';

export default function JourneyTimeline() {
  const milestones = [
    {
      year: '2023',
      title: 'Visionary Spark',
      description: 'Started exploring assistive technology and bioengineering. Built first wearable device for accessibility.',
      color: 'from-blue-500 to-blue-600',
      icon: '✨',
    },
    {
      year: '2024',
      title: 'Innovation Accelerates',
      description: 'EMG-controlled robotics research. 2x Science Fair awards. Launched Rooting Minds initiative.',
      color: 'from-cyan-500 to-blue-500',
      icon: '🚀',
    },
    {
      year: '2025',
      title: 'Stanford Collaboration',
      description: 'Selected for Stanford SIMR program. Leading biomedical research on capacitive sensing insoles.',
      color: 'from-amber-500 to-orange-500',
      icon: '🔬',
    },
    {
      year: 'Present',
      title: 'Building the Future',
      description: 'Mentoring teams, advancing research, and creating technology for real-world impact.',
      color: 'from-green-500 to-emerald-500',
      icon: '🌟',
    },
  ];

  return (
    <div className="relative py-12">
      {/* Decorative SVG curved path */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
        </defs>

        {/* Curved journey path */}
        <path
          d="M 100 150 Q 300 100 400 200 T 700 250 T 1000 300"
          stroke="url(#pathGrad)"
          strokeWidth="3"
          opacity="0.3"
          strokeDasharray="5,5"
        />

        {/* Curve arrows pointing to next milestone */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="url(#pathGrad)" />
          </marker>
        </defs>

        {/* Arrow from 2023 to 2024 */}
        <path
          d="M 280 150 Q 320 120 380 180"
          stroke="url(#pathGrad)"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
          opacity="0.4"
        />

        {/* Arrow from 2024 to 2025 */}
        <path
          d="M 580 200 Q 620 170 700 250"
          stroke="url(#pathGrad)"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
          opacity="0.4"
        />

        {/* Arrow from 2025 to Present */}
        <path
          d="M 880 250 Q 920 220 1000 300"
          stroke="url(#pathGrad)"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
          opacity="0.4"
        />
      </svg>

      {/* Timeline items */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {milestones.map((milestone, idx) => (
          <div
            key={idx}
            className="group"
            style={{
              animationDelay: `${idx * 100}ms`,
            }}
          >
            {/* Timeline card */}
            <div className="relative">
              {/* Decorative top line and dot */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${milestone.color} shadow-lg`}></div>
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${milestone.color} opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}></div>
              </div>

              {/* Card content */}
              <div className={`bg-gradient-to-br ${milestone.color} p-0.5 rounded-2xl mt-8`}>
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 h-full">
                  {/* Icon and year */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{milestone.icon}</span>
                    <span className={`text-sm font-bold bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent`}>
                      {milestone.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 heading-sm">
                    {milestone.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {milestone.description}
                  </p>

                  {/* Hover accent */}
                  <div className={`mt-4 h-1 w-0 bg-gradient-to-r ${milestone.color} rounded-full group-hover:w-full transition-all duration-500`}></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom decorative elements */}
      <div className="mt-12 flex justify-center">
        <div className="flex gap-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 ${
                i < 3 ? 'opacity-100' : 'opacity-30'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
