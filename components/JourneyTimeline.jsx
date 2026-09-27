'use client';

export default function JourneyTimeline() {
  const milestones = [
    {
      year: '2023',
      title: 'It Started With a Question',
      description:
        "I got curious about assistive tech and built my first wearable — just me, a breadboard, and way too many late-night tutorials.",
      accent: '#8c1515',
    },
    {
      year: '2024',
      title: 'Things Got Real',
      description:
        'Built a robot arm controlled by muscle signals, picked up 2 Science Fair awards, and co-founded Rooting Minds to bring tech to more students.',
      accent: '#a0522d',
    },
    {
      year: '2025',
      title: 'Stanford Said Yes',
      description:
        "Joined Stanford's SIMR program to research biomedical sensing — turning years of tinkering into real research.",
      accent: '#c9a876',
    },
    {
      year: 'Present',
      title: "What's Next",
      description:
        'Now I mentor other students, keep building, and go looking for the next problem worth solving.',
      accent: '#6b7c52',
    },
  ];

  return (
    <div className="relative py-8">
      {/* Desktop: horizontal spine with alternating cards */}
      <div className="hidden md:block relative">
        {/* The spine */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#e6dcc8] -translate-y-1/2"></div>

        <div className="relative grid grid-cols-4">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative flex flex-col items-center">
              {/* Alternating card: above the spine for even index, below for odd */}
              {idx % 2 === 0 && (
                <div className="mb-8 w-full px-3">
                  <TimelineCard milestone={m} align="bottom" />
                </div>
              )}

              {/* Marker on the spine */}
              <div
                className="relative z-10 w-4 h-4 rounded-full border-4 border-[#fbf7ef] shadow"
                style={{ backgroundColor: m.accent }}
              ></div>
              <span
                className="mt-2 text-xs font-bold tracking-wide"
                style={{ color: m.accent }}
              >
                {m.year}
              </span>

              {idx % 2 === 1 && (
                <div className="mt-8 w-full px-3">
                  <TimelineCard milestone={m} align="top" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: simple vertical spine */}
      <div className="md:hidden space-y-0">
        {milestones.map((m, idx) => (
          <div key={idx} className="relative flex gap-5 pb-10 last:pb-0">
            {/* vertical line */}
            {idx < milestones.length - 1 && (
              <div className="absolute left-[7px] top-4 bottom-0 w-[2px] bg-[#e6dcc8]"></div>
            )}
            <div className="relative z-10 shrink-0 pt-1">
              <div
                className="w-4 h-4 rounded-full border-4 border-[#fbf7ef] shadow"
                style={{ backgroundColor: m.accent }}
              ></div>
            </div>
            <div className="flex-1">
              <span className="text-xs font-bold tracking-wide" style={{ color: m.accent }}>
                {m.year}
              </span>
              <h3 className="heading-sm mt-1 mb-1.5 text-slate-900">{m.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{m.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TimelineCard({ milestone, align }) {
  return (
    <div
      className="bg-[#fffdf8] border border-[#e6dcc8] rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow relative"
    >
      <div
        className="absolute left-1/2 -translate-x-1/2 w-px h-4 bg-[#e6dcc8]"
        style={{ [align === 'bottom' ? 'bottom' : 'top']: '-16px' }}
      ></div>
      <h3 className="heading-sm mb-1.5 text-slate-900 text-base">{milestone.title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{milestone.description}</p>
    </div>
  );
}
