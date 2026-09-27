import PageHero from '@/components/PageHero';

const ACCENTS = ['#8c1515', '#a0522d', '#c9a876', '#6b7c52', '#8c1515', '#a0522d'];

function SectionCard({ index, title, children }) {
  const accent = ACCENTS[index % ACCENTS.length];
  return (
    <div className="card relative pl-8 md:pl-10">
      <div
        className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl"
        style={{ backgroundColor: accent }}
      ></div>
      <div className="flex items-center gap-3 mb-4">
        <span
          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
          style={{ backgroundColor: accent }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <h2 className="heading-md">{title}</h2>
      </div>
      <div className="prose space-y-4">{children}</div>
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-[#fbf7ef] min-h-screen">
      <PageHero
        eyebrow="A Bit About Me"
        title="About Raeyaan"
        subtitle="High schooler, Stanford researcher, and someone who's happiest with a screwdriver in hand. Here's the fuller picture."
      />

      <div className="container-custom py-16 md:py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <SectionCard index={0} title="Who I Am">
            <p>
              I'm a high school student at Irvington High School (Class of 2027) in Fremont, California. I'm passionate about building technologies that solve real problems — particularly in assistive technology, biomedical engineering, and robotics.
            </p>
            <p>
              My journey has been shaped by curiosity and a desire to understand how things work. Whether it's designing PCBs, processing sensor signals, or developing AI applications, I'm drawn to the intersection of rigorous engineering and meaningful human impact.
            </p>
          </SectionCard>

          <SectionCard index={1} title="Research & Engineering">
            <p>
              Currently, I'm working with Stanford University's Human Performance Lab through the Stanford Institutes of Medicine Summer Research Program (SIMR). I'm developing a capacitive sensing insole to study gait and loading in para-athletes, handling everything from PCB design to firmware and calibration.
            </p>
            <p>
              Beyond Stanford, I've researched EMG-controlled robotics, built assistive wearables using computer vision, and explored applied mathematics through independent study in multivariable calculus, Jacobians, and group theory.
            </p>
          </SectionCard>

          <SectionCard index={2} title="Community & Leadership">
            <p>
              I co-founded Rooting Minds, an initiative focused on creating accessible technology and educational opportunities for neurodivergent youth. We've partnered with local organizations to reach approximately 100 students through workshops, games, and custom assistive tools.
            </p>
            <p>
              I'm also involved as a volunteer with FCSN and WeEMBRACE, teaching robotics and STEM to neurodivergent children, and serving as Chapter President of Youth Council where I lead monthly activities and math enrichment for younger students.
            </p>
          </SectionCard>

          <SectionCard index={3} title="Skills & Technical Focus">
            <div className="grid md:grid-cols-2 gap-8 not-prose">
              <div>
                <h3 className="heading-sm mb-3 text-base">Electronics & Embedded Systems</h3>
                <ul className="text-sm space-y-2 text-[var(--muted)]">
                  <li>PCB design (KiCad, multilayer, rigid/flex)</li>
                  <li>Microcontroller programming (STM32)</li>
                  <li>Sensor integration (capacitive, EMG, EEG)</li>
                  <li>Signal processing and calibration</li>
                  <li>Hardware debugging and prototyping</li>
                </ul>
              </div>
              <div>
                <h3 className="heading-sm mb-3 text-base">Software & AI</h3>
                <ul className="text-sm space-y-2 text-[var(--muted)]">
                  <li>Python, Java, C programming</li>
                  <li>Computer vision (YOLOv8)</li>
                  <li>Machine learning and deep learning</li>
                  <li>Robotics and control systems</li>
                  <li>Data analysis and visualization</li>
                </ul>
              </div>
            </div>
          </SectionCard>

          <SectionCard index={4} title="Academics & Recognition">
            <div className="grid grid-cols-3 gap-4 not-prose mb-4">
              {[
                { label: 'Weighted GPA', value: '4.71' },
                { label: 'AMC 12B', value: '144' },
                { label: 'Math Track', value: 'USAMO' },
              ].map((stat, i) => (
                <div key={i} className="text-center p-3 bg-amber-50 rounded-xl border border-amber-200">
                  <p className="text-lg font-bold text-slate-900">{stat.value}</p>
                  <p className="text-[0.65rem] uppercase tracking-wide text-red-800 font-semibold mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
            <p>
              I take rigorous coursework including multivariable calculus, AP Physics C, AP Chemistry, and AP Computer Science, and I'm a USAMO Qualifier with a strong competition mathematics background.
            </p>
            <p>
              My work has been recognized at multiple science fairs, and I'm an AP Physics C Teaching Assistant helping peers understand complex concepts.
            </p>
          </SectionCard>

          <SectionCard index={5} title="Beyond STEM">
            <p>
              When I'm not in the lab or coding, I'm on the cricket field where I captain the American School of Cricketing Excellence team, competing in 50+ matches annually. I also enjoy public speaking, having competed in Lincoln-Douglas debate and oratory.
            </p>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
