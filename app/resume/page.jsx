import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Resume | Raeyaan Muppaneni',
  description: 'Education, research, leadership, and technical skills — Raeyaan Muppaneni’s resume.',
};

const ACCENTS = ['#8c1515', '#a0522d', '#c9a876', '#6b7c52', '#8c1515', '#a0522d', '#c9a876'];

function ResumeSection({ index, title, children }) {
  const accent = ACCENTS[index % ACCENTS.length];
  return (
    <section className="card relative overflow-hidden">
      <div className="absolute top-0 left-0 bottom-0 w-1.5" style={{ backgroundColor: accent }}></div>
      <h2 className="heading-sm text-lg mb-5 uppercase tracking-wide" style={{ color: accent }}>{title}</h2>
      {children}
    </section>
  );
}

function Entry({ title, meta, items }) {
  return (
    <div className="mb-5 last:mb-0">
      <h3 className="font-bold text-slate-900 mb-0.5">{title}</h3>
      <p className="text-sm text-[var(--muted)] mb-2">{meta}</p>
      <ul className="text-sm space-y-1.5 text-slate-600">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-red-800 shrink-0">–</span>
            <span dangerouslySetInnerHTML={{ __html: item }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Resume() {
  return (
    <div className="bg-[#fbf7ef] min-h-screen">
      <section className="relative overflow-hidden pt-16 pb-14 md:pt-20 md:pb-16 border-b border-[#e6dcc8]">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
        </div>
        <div className="container-custom flex flex-wrap justify-between items-end gap-6">
          <div>
            <p className="calligraphy text-2xl mb-2">The Paper Trail</p>
            <h1 className="heading-lg mb-3" style={{ color: 'var(--primary)' }}>Resume</h1>
            <p className="text-[var(--muted)]">raeyaanmuppaneni@gmail.com · Fremont, California</p>
          </div>
          <a
            href="/Raeyaan_Muppaneni_Resume.pdf"
            className="btn-primary inline-flex items-center gap-2 shrink-0"
          >
            Download PDF <span>↓</span>
          </a>
        </div>
      </section>

      <div className="container-custom py-16 md:py-20">
        <div className="max-w-4xl mx-auto space-y-6">
          <ResumeSection index={0} title="Education">
            <Entry
              title="Irvington High School"
              meta="Class of 2027 · Fremont, California"
              items={[
                '<strong>GPA:</strong> 4.71 weighted / 4.06 unweighted',
                '<strong>Advanced Coursework:</strong> Multivariable Calculus, AP Calculus AB, AP Physics C (Mechanics & E&M), AP Chemistry, AP Computer Science A, Quantum Physics',
                '<strong>Leadership:</strong> AP Physics C Teaching Assistant, Math/Robotics/Cricket Clubs',
              ]}
            />
          </ResumeSection>

          <ResumeSection index={1} title="Research & Engineering">
            <Entry
              title="Stanford Institutes of Medicine Summer Research (SIMR) – Bioengineering"
              meta="Stanford University · Summer 2026"
              items={[
                'Developed a capacitive sensing insole for para-athlete gait analysis through Stanford SIMR; after the program, continued the project with my team under mentorship from a PhD student in Stanford\'s Human Performance Lab',
                'Designed rigid PCB and integrated electronics, firmware, calibration, testing',
                'Leading 5-student team on hardware iteration and Conrad Challenge preparation',
              ]}
            />
            <Entry
              title="EMG-Controlled Robotic Arm Research"
              meta="Polygence · 2024 – Present"
              items={[
                'Built a wearable EMG acquisition system to capture muscle activity and translate signals into robotic-arm commands',
                'Collected a 5-gesture dataset and trained KNN, Random Forest, and MLP classifiers; best model reached ~85% test accuracy',
                'Deployed the trained model on a Raspberry Pi 4 for real-time control of a servo-actuated robotic arm',
                '2nd place at Alameda Science Fair',
                'Published in IEEE: <a href="https://xplorestaging.ieee.org/document/11496321" target="_blank" rel="noopener noreferrer" class="font-semibold text-red-800 hover:underline">“Real-Time Control of a Low-Cost Robotic Arm Using EMG Signal Classification by AI-Based Machine Learning on Raspberry Pi”</a> — 2026 World Conference on Computational Science and Technology (WcCST); DOI: 10.1109/WcCST67302.2026.11496321',
              ]}
            />
            <Entry
              title="Assistive Technology & AI Projects"
              meta="2023 – Present"
              items={[
                'YOLOv8-based wearable for visually impaired users – 2nd place Synopsys Science Fair',
                'Handheld communication device for neurodivergent children (in development)',
                'EEG-based focus application exploring neurofeedback approaches for attention support',
              ]}
            />
          </ResumeSection>

          <ResumeSection index={2} title="Leadership & Community">
            <Entry
              title="Rooting Minds – Co-Founder & President"
              meta="2025 – Present"
              items={[
                'Co-founded initiative for neurodivergent youth education & assistive technology',
                'Partnered with FCSN and WeEMBRACE; reached ~100 students',
                'Designed educational card decks, led workshops, coordinated team',
              ]}
            />
            <Entry
              title="Youth Council – Chapter President"
              meta="2024 – Present"
              items={[
                'Plan monthly activities, coordinate officer responsibilities',
                'Teach math enrichment to 38+ students',
                'Organize STEM/robotics and service activities',
              ]}
            />
            <Entry
              title="FCSN & WeEMBRACE – Volunteer"
              meta="2024 – Present"
              items={[
                'Teach robotics, coding, athletics, and educational activities',
                'Support neurodivergent children through weekly programs',
              ]}
            />
          </ResumeSection>

          <ResumeSection index={3} title="Internship">
            <Entry
              title="Fluora Bioscience Laboratories – Electronics Engineer Trainee"
              meta="Grade 12 · 27 hr/wk, 6 wk/yr (ongoing)"
              items={[
                'Electronics trainee on portable fluorometer for diabetes screening',
                'Designed LED-drive, photodetector-amplifier, and battery circuits',
              ]}
            />
          </ResumeSection>

          <ResumeSection index={4} title="Mathematics & Recognition">
            <p className="text-sm text-slate-600 mb-2">
              <strong className="text-slate-900">USAMO Qualifier</strong> · AMC 12A: 139.5 · AMC 12B: 144
            </p>
            <p className="text-sm text-slate-600">
              <strong className="text-slate-900">International Honors:</strong> High Distinction (Australian Mathematics Competition 2025), Distinction (Cayley Contest 2025), Honours (COMC 2024), AMO Silver & Bronze, IYMC Finalist
            </p>
          </ResumeSection>

          <ResumeSection index={5} title="Technical Skills">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">Electronics & Embedded</h3>
                <div className="flex flex-wrap gap-2">
                  {['PCB Design (KiCad)', 'STM32 Microcontrollers', 'Capacitive/EMG/EEG Sensing', 'Signal Processing', 'I2C/SPI/UART'].map((s) => (
                    <span key={s} className="text-xs px-3 py-1 bg-amber-100 text-red-900 rounded-full font-medium">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">Programming & AI</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python, Java, C', 'Computer Vision (YOLOv8)', 'Machine Learning', 'Robotics & Control', 'Data Analysis'].map((s) => (
                    <span key={s} className="text-xs px-3 py-1 bg-amber-100 text-red-900 rounded-full font-medium">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </ResumeSection>

          <ResumeSection index={6} title="Additional Activities">
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <p className="text-slate-600">
                <strong className="text-slate-900">Cricket:</strong> Captain, American School of Cricketing Excellence (2019-2025); 50+ matches/year; qualified for West Coast intrazonals
              </p>
              <p className="text-slate-600">
                <strong className="text-slate-900">Debate:</strong> Lincoln-Douglas, Public Forum, Oratorical Interpretation; 1st place Golden State Academy (2022-2023)
              </p>
            </div>
          </ResumeSection>
        </div>
      </div>
    </div>
  );
}
