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
    <div className="container-custom py-16 md:py-24">
      <article className="max-w-3xl">
        <h1 className="heading-lg mb-12">Research</h1>

        <section className="mb-16">
          <h2 className="heading-md mb-8">Active Research</h2>
          <div className="space-y-8">
            {research.map((item, idx) => (
              <div key={idx} className="border-l-2 border-[var(--border)] pl-6">
                <h3 className="heading-sm mb-1">{item.title}</h3>
                <p className="text-sm text-[var(--muted)] mb-2">
                  {item.institution} • {item.period}
                </p>
                <p className="text-[var(--muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="heading-md mb-8">Research Interests</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {interests.map((interest, idx) => (
              <div
                key={idx}
                className="p-4 border border-[var(--border)] rounded hover:border-[var(--foreground)] transition"
              >
                <p className="text-[var(--muted)]">{interest}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="prose">
          <h2 className="heading-md mb-4">Approach to Research</h2>
          <p>
            My research is driven by the desire to build technology that makes a tangible difference in people's lives. I focus on the intersection of rigorous engineering, practical constraints, and human-centered design.
          </p>
          <p>
            I believe the best research balances theoretical understanding with hands-on experimentation. Whether working with Stanford on biomedical devices or exploring assistive technology independently, I'm committed to thorough documentation, validation, and iteration based on real-world feedback.
          </p>
        </section>
      </article>
    </div>
  );
}
