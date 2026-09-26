export default function Resume() {
  return (
    <div className="container-custom py-16 md:py-24">
      <article className="max-w-3xl">
        <div className="flex justify-between items-start mb-12">
          <div>
            <h1 className="heading-lg mb-2">Resume</h1>
            <p className="text-[var(--muted)]">
              raeyaanmuppaneni@gmail.com | Fremont, California
            </p>
          </div>
          <a
            href="/Raeyaan_Muppaneni_Resume.pdf"
            className="px-4 py-2 border border-[var(--foreground)] rounded hover:bg-[var(--foreground)] hover:text-[var(--background)] transition text-sm"
          >
            Download PDF
          </a>
        </div>

        <section className="mb-12">
          <h2 className="heading-md mb-6">Education</h2>
          <div>
            <h3 className="heading-sm mb-1">Irvington High School</h3>
            <p className="text-sm text-[var(--muted)] mb-3">Class of 2027 | Fremont, California</p>
            <ul className="text-sm space-y-1 text-[var(--muted)]">
              <li>• <strong>GPA:</strong> 4.71 weighted / 4.06 unweighted</li>
              <li>• <strong>Advanced Coursework:</strong> Multivariable Calculus, AP Calculus AB, AP Physics C (Mechanics & E&M), AP Chemistry, AP Computer Science A, Quantum Physics</li>
              <li>• <strong>Leadership:</strong> AP Physics C Teaching Assistant, Math/Robotics/Cricket Clubs</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="heading-md mb-6">Research & Engineering</h2>

          <div className="mb-8">
            <h3 className="heading-sm mb-1">Stanford Institutes of Medicine Summer Research (SIMR) – Bioengineering</h3>
            <p className="text-sm text-[var(--muted)] mb-3">Stanford University | June 2026 – Present</p>
            <ul className="text-sm space-y-1 text-[var(--muted)]">
              <li>• Developed capacitive sensing insole for para-athlete gait analysis</li>
              <li>• Designed rigid PCB and integrated electronics, firmware, calibration, testing</li>
              <li>• Leading 5-student team on hardware iteration and Conrad Challenge preparation</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="heading-sm mb-1">EMG-Controlled Robotic Arm Research</h3>
            <p className="text-sm text-[var(--muted)] mb-3">Polygence | 2024 – Present</p>
            <ul className="text-sm space-y-1 text-[var(--muted)]">
              <li>• Built EMG-controlled arm translating muscle signals to mechanical movement</li>
              <li>• 2nd place at Alameda Science Fair</li>
              <li>• Research paper prepared for publication/conference submission</li>
            </ul>
          </div>

          <div>
            <h3 className="heading-sm mb-1">Assistive Technology & AI Projects</h3>
            <p className="text-sm text-[var(--muted)] mb-3">2023 – Present</p>
            <ul className="text-sm space-y-1 text-[var(--muted)]">
              <li>• YOLOv8-based wearable for visually impaired users – 2nd place Synopsys Science Fair</li>
              <li>• Handheld communication device for neurodivergent children (in development)</li>
              <li>• EEG-based focus application; filed patent application for medical-emergency wearable</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="heading-md mb-6">Leadership & Community</h2>

          <div className="mb-6">
            <h3 className="heading-sm mb-1">Rooting Minds – Co-Founder & President</h3>
            <p className="text-sm text-[var(--muted)] mb-3">2025 – Present</p>
            <ul className="text-sm space-y-1 text-[var(--muted)]">
              <li>• Co-founded initiative for neurodivergent youth education & assistive technology</li>
              <li>• Partnered with FCSN and WeEMBRACE; reached ~100 students</li>
              <li>• Designed educational card decks, led workshops, coordinated team</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="heading-sm mb-1">Youth Council – Chapter President</h3>
            <p className="text-sm text-[var(--muted)] mb-3">2024 – Present</p>
            <ul className="text-sm space-y-1 text-[var(--muted)]">
              <li>• Plan monthly activities, coordinate officer responsibilities</li>
              <li>• Teach math enrichment to 38+ students</li>
              <li>• Organize STEM/robotics and service activities</li>
            </ul>
          </div>

          <div>
            <h3 className="heading-sm mb-1">FCSN & WeEMBRACE – Volunteer</h3>
            <p className="text-sm text-[var(--muted)] mb-3">2024 – Present</p>
            <ul className="text-sm space-y-1 text-[var(--muted)]">
              <li>• Teach robotics, coding, athletics, and educational activities</li>
              <li>• Support neurodivergent children through weekly programs</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="heading-md mb-6">Internship</h2>
          <div>
            <h3 className="heading-sm mb-1">Fluora Bioscience Laboratories – Electronics Engineer Trainee</h3>
            <p className="text-sm text-[var(--muted)] mb-3">Grade 12 | 27 hr/wk, 6 wk/yr (ongoing)</p>
            <ul className="text-sm space-y-1 text-[var(--muted)]">
              <li>• Electronics trainee on portable fluorometer for diabetes screening</li>
              <li>• Designed LED-drive, photodetector-amplifier, and battery circuits</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="heading-md mb-6">Mathematics & Recognition</h2>
          <div className="mb-4">
            <p className="text-sm text-[var(--muted)] mb-2">
              <strong>USAMO Qualifier</strong> | AMC 12A: 139.5 | AMC 12B: 144
            </p>
            <p className="text-sm text-[var(--muted)]">
              <strong>International Honors:</strong> High Distinction (Australian Mathematics Competition 2025), Distinction (Cayley Contest 2025), Honours (COMC 2024), AMO Silver & Bronze, IYMC Finalist
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="heading-md mb-6">Technical Skills</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold mb-3">Electronics & Embedded</h3>
              <ul className="text-sm space-y-1 text-[var(--muted)]">
                <li>• PCB Design (KiCad)</li>
                <li>• STM32 Microcontrollers</li>
                <li>• Capacitive/EMG/EEG Sensing</li>
                <li>• Signal Processing</li>
                <li>• I2C/SPI/UART Interfaces</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-3">Programming & AI</h3>
              <ul className="text-sm space-y-1 text-[var(--muted)]">
                <li>• Python, Java, C</li>
                <li>• Computer Vision (YOLOv8)</li>
                <li>• Machine Learning</li>
                <li>• Robotics & Control</li>
                <li>• Data Analysis</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="heading-md mb-6">Additional Activities</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <p className="text-[var(--muted)]">
              <strong>Cricket:</strong> Captain, American School of Cricketing Excellence (2019-2025); 50+ matches/year; qualified for West Coast intrazonals
            </p>
            <p className="text-[var(--muted)]">
              <strong>Debate:</strong> Lincoln-Douglas, Public Forum, Oratorical Interpretation; 1st place Golden State Academy (2022-2023)
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}
