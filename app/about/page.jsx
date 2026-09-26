export default function About() {
  return (
    <div className="container-custom py-16 md:py-24">
      <article className="max-w-3xl">
        <h1 className="heading-lg mb-12">About</h1>

        <section className="mb-12 prose">
          <h2 className="heading-md mb-4">Who I Am</h2>
          <p>
            I'm a high school student at Irvington High School (Class of 2027) in Fremont, California. I'm passionate about building technologies that solve real problems—particularly in assistive technology, biomedical engineering, and robotics.
          </p>
          <p>
            My journey has been shaped by curiosity and a desire to understand how things work. Whether it's designing PCBs, processing sensor signals, or developing AI applications, I'm drawn to the intersection of rigorous engineering and meaningful human impact.
          </p>
        </section>

        <section className="mb-12 prose">
          <h2 className="heading-md mb-4">Research & Engineering</h2>
          <p>
            Currently, I'm working with Stanford University's Human Performance Lab through the Stanford Institutes of Medicine Summer Research Program (SIMR). I'm developing a capacitive sensing insole to study gait and loading in para-athletes, handling everything from PCB design to firmware and calibration.
          </p>
          <p>
            Beyond Stanford, I've researched EMG-controlled robotics, built assistive wearables using computer vision, and explored applied mathematics through independent study in multivariable calculus, Jacobians, and group theory.
          </p>
        </section>

        <section className="mb-12 prose">
          <h2 className="heading-md mb-4">Community & Leadership</h2>
          <p>
            I co-founded Rooting Minds, an initiative focused on creating accessible technology and educational opportunities for neurodivergent youth. We've partnered with local organizations to reach approximately 100 students through workshops, games, and custom assistive tools.
          </p>
          <p>
            I'm also involved as a volunteer with FCSN and WeEMBRACE, teaching robotics and STEM to neurodivergent children, and serving as Chapter President of Youth Council where I lead monthly activities and math enrichment for younger students.
          </p>
        </section>

        <section className="mb-12 prose">
          <h2 className="heading-md mb-4">Skills & Technical Focus</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div>
              <h3 className="heading-sm mb-3">Electronics & Embedded Systems</h3>
              <ul className="text-sm space-y-2 text-[var(--muted)]">
                <li>• PCB design (KiCad, multilayer, rigid/flex)</li>
                <li>• Microcontroller programming (STM32)</li>
                <li>• Sensor integration (capacitive, EMG, EEG)</li>
                <li>• Signal processing and calibration</li>
                <li>• Hardware debugging and prototyping</li>
              </ul>
            </div>
            <div>
              <h3 className="heading-sm mb-3">Software & AI</h3>
              <ul className="text-sm space-y-2 text-[var(--muted)]">
                <li>• Python, Java, C programming</li>
                <li>• Computer vision (YOLOv8)</li>
                <li>• Machine learning and deep learning</li>
                <li>• Robotics and control systems</li>
                <li>• Data analysis and visualization</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12 prose">
          <h2 className="heading-md mb-4">Academics & Recognition</h2>
          <p>
            I maintain a 4.71 weighted GPA while taking rigorous coursework including multivariable calculus, AP Physics C, AP Chemistry, and AP Computer Science. I'm a USAMO Qualifier with strong competition mathematics background (AMC 12B: 144).
          </p>
          <p>
            My work has been recognized at multiple science fairs, and I'm an AP Physics C Teaching Assistant helping peers understand complex concepts.
          </p>
        </section>

        <section className="prose">
          <h2 className="heading-md mb-4">Beyond STEM</h2>
          <p>
            When I'm not in the lab or coding, I'm on the cricket field where I captain the American School of Cricketing Excellence team, competing in 50+ matches annually. I also enjoy public speaking, having competed in Lincoln-Douglas debate and oratory.
          </p>
        </section>
      </article>
    </div>
  );
}
