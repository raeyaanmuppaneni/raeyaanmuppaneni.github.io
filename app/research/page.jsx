import PageHero from '@/components/PageHero';

const ACCENTS = ['#8c1515', '#a0522d', '#c9a876', '#6b7c52'];

export default function Research() {
  const research = [
    {
      title: 'Capacitive Sensing for Gait Analysis',
      institution: 'Stanford University Human Performance Lab',
      period: 'June 2026 - Present',
      description: 'Biomedical instrumentation research focused on pressure distribution measurement and gait asymmetry detection using capacitive sensing technology.',
    },
    {
      title: 'EMG-Controlled Robotics',
      institution: 'Polygence / Independent Research',
      period: '2024 - Present',
      description: 'Signal processing and biomedical sensing research exploring electromyography applications in robotic control systems.',
    },
    {
      title: 'Applied Mathematics Research',
      institution: 'Independent Study',
      period: '2024 - Present',
      description: 'Self-directed research in multivariable calculus, Jacobians, robotics kinematics, group theory, and open problems in mathematics. Documentation in LaTeX with proofs and exercises.',
    },
    {
      title: 'Mathematics Competitions',
      institution: 'USAMO, AMC, International Competitions',
      period: '2023 - Present',
      description: 'Rigorous competition mathematics including USAMO qualification and international contest participation.',
    },
  ];

  const interests = [
    'Biomedical instrumentation and wearable sensor design',
    'Signal processing (EMG, EEG, capacitive sensing)',
    'Assistive technology for accessibility',
    'Robotics kinematics and control',
    'Applied mathematics and optimization',
    'Computer vision and machine learning',
    'Neurofeedback and brain-computer interfaces',
  ];

  return (
    <div className="bg-[#fbf7ef] min-h-screen">
      <PageHero
        eyebrow="Digging Deeper"
        title="Research"
        subtitle="The theoretical side of everything I build — where the ideas get tested, documented, and pushed further."
      />

      <div className="container-custom py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <section className="mb-16">
            <h2 className="heading-md mb-8">Active Research</h2>
            <div className="space-y-6">
              {research.map((item, idx) => {
                const accent = ACCENTS[idx % ACCENTS.length];
                return (
                  <div key={idx} className="card relative overflow-hidden">
                    <div
                      className="absolute top-0 left-0 bottom-0 w-1.5"
                      style={{ backgroundColor: accent }}
                    ></div>
                    <h3 className="heading-sm mb-1 text-lg">{item.title}</h3>
                    <p className="text-sm font-semibold mb-2" style={{ color: accent }}>
                      {item.institution} · {item.period}
                    </p>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="heading-md mb-8">Research Interests</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {interests.map((interest, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#fffdf8] border border-[#e6dcc8] rounded-xl hover:border-[#8c1515] hover:shadow-md transition-all flex items-center gap-3"
                >
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: ACCENTS[idx % ACCENTS.length] }}></span>
                  <p className="text-slate-700 text-sm">{interest}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="card">
            <h2 className="heading-md mb-4">How I Approach Research</h2>
            <div className="prose space-y-4">
              <p>
                My research is driven by the desire to build technology that makes a tangible difference in people's lives. I focus on the intersection of rigorous engineering, practical constraints, and human-centered design.
              </p>
              <p>
                I believe the best research balances theoretical understanding with hands-on experimentation. Whether working with Stanford on biomedical devices or exploring assistive technology independently, I'm committed to thorough documentation, validation, and iteration based on real-world feedback.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
