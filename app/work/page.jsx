import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Work & Projects | Raeyaan Muppaneni',
  description: 'Capacitive sensing insoles, EMG-controlled robotics, assistive wearables, and more — projects Raeyaan Muppaneni has built.',
};

const ACCENTS = ['#8c1515', '#a0522d', '#c9a876', '#6b7c52', '#8c1515'];

export default function Work() {
  const projects = [
    {
      slug: 'capacitive-insole',
      title: 'Capacitive Sensing Insole for Gait Analysis',
      year: '2026',
      status: 'Stanford SIMR → Continued with Human Performance Lab mentorship',
      description: 'Biomedical device for analyzing loading and gait asymmetry in para-athletes',
      overview: `Through Stanford SIMR, I helped build a capacitive force-sensing system for running blades. After the program ended, my team continued the project with mentorship from a PhD student in Stanford's Human Performance Lab, redesigning the hardware, firmware, and calibration tools.`,
      image: '/images/projects/insole-pcb-photo.jpg',
      highlights: [
        'Designed a rigid PCB carrying two TI FDC2214 capacitance-to-digital converters — 8 sensor channels total, each an LC tank read over I²C',
        'Wrote bare-metal C firmware for an STM32WB55 (no HAL, no CubeMX) that streams live sensor data over serial at 460,800 baud',
        'Built Python tooling for live plotting, per-sensor weight calibration, and mapping physical sensors to data channels',
        'Characterized real sensor behavior: resting capacitance, non-linear force response, and hysteresis after heavy loads',
        'Continued the SIMR project after the summer with Human Performance Lab mentorship',
      ],
      tech: ['KiCad / EasyEDA', 'STM32 Bare-Metal C', 'FDC2214 Capacitive Sensing', 'Python', 'Signal Calibration'],
      github: 'https://github.com/raeyaanmuppaneni/Blade-Insole',
    },
    {
      slug: 'emg-arm',
      title: 'EMG-Controlled Robotic Arm',
      year: '2024–2026',
      status: '2nd Place at Alameda Science Fair',
      description: 'Muscle signal processing system for robotic manipulation',
      overview: `Myoelectric Signal Interpretation for Robotic Limb Control — a wearable EMG device and a robotic arm that learns to map muscle activity to hand movements, aimed at more responsive, accessible prosthetics.`,
      image: '/images/projects/emg-poster.jpg',
      highlights: [
        '2nd place award at Alameda County Science Fair',
        'Built a wearable EMG device (Seeed XIAO ESP32-S3, 8-channel EMG front end, 9-axis IMU) that streams muscle-activity data in real time',
        'Collected a 5-gesture dataset (rest, fist, open hand, wrist flex, wrist extend) and trained KNN, Random Forest, and MLP classifiers',
        'Best model reached ~85% test accuracy (93% on the full dataset) at ~20 estimators, depth 5',
        'Deployed the trained model to a Raspberry Pi 4 driving a servo-actuated robotic arm in real time',
      ],
      tech: ['EMG Signal Processing', 'Python', 'Feature Extraction', 'Random Forest / KNN / MLP', 'Raspberry Pi'],
      github: 'https://github.com/raeyaanmuppaneni/EMG-controlled-robotic-arm',
    },
    {
      slug: 'obstacle-detection',
      title: 'Assistive Wearable for Visually Impaired Users',
      year: '2023–Present',
      status: '2nd Place at Synopsys Science Fair',
      description: 'YOLOv8-based real-time obstacle detection worn as a wearable device',
      overview: `Built a wearable system using YOLOv8 computer vision to detect nearby obstacles and warn visually impaired users through audio and haptic feedback. The system runs on edge hardware for low latency.`,
      highlights: [
        '2nd place at Synopsys Science Fair',
        'Implemented YOLOv8 for real-time object detection on edge devices',
        'Designed audio and haptic feedback interface',
        'Optimized model for low-power, real-time inference',
        'User testing and iterative improvements based on feedback',
      ],
      tech: ['YOLOv8', 'Python', 'Computer Vision', 'Embedded Linux', 'Edge AI'],
      github: '#',
    },
    {
      slug: 'communication-device',
      title: 'Communication Device for Neurodivergent Children',
      year: '2023–Present',
      status: 'In Development',
      description: 'Accessible one-press messaging system for nonverbal communication',
      overview: `Developing a handheld communication device designed specifically for neurodivergent and nonverbal children. The device features simple one-press customizable messages, intuitive interface, and durable construction.`,
      image: '/images/projects/aac-prototype.jpg',
      highlights: [
        'User-centered design with input from FCSN and WeEMBRACE',
        'Simple one-press interface for quick communication',
        'Customizable message bank per user',
        'Prototype testing with target users',
      ],
      tech: ['Embedded Systems', 'User Research', 'Hardware Design'],
      github: '#',
    },
    {
      slug: 'focus-app',
      title: 'EEG-Based Focus Application',
      year: '2023–Present',
      status: 'Exploratory Project',
      description: 'Neurofeedback exploration using EEG for attention support',
      overview: `Exploring EEG-based biofeedback as a possible tool for attention support. This project is still at an early exploratory stage and is being documented separately from other wearable concepts.`,
      highlights: [
        'EEG data collection and analysis',
        'Exploration of neurofeedback approaches for attention support',
        'Early-stage research documentation and validation',
      ],
      tech: ['EEG Processing', 'Neurofeedback', 'Signal Analysis'],
      github: '#',
    },
    {
      slug: 'applied-math-research',
      title: 'Advanced Mathematics & Independent Study',
      year: '2024 – Present',
      status: 'Independent Study',
      description: 'Self-directed study in multivariable calculus, robotics kinematics, and group theory',
      overview: `Self-directed study of multivariable calculus, linear algebra, group theory, and mathematical methods used in robotics, with notes, proofs, and problem sets documented in LaTeX.`,
      highlights: [
        'Independent study spanning multivariable calculus, Jacobians, linear algebra, and group theory',
        'Applied mathematical methods directly to robotics projects such as the EMG-controlled arm',
        'Documented notes, proofs, and problem sets in LaTeX',
      ],
      tech: ['Multivariable Calculus', 'Linear Algebra', 'Group Theory', 'LaTeX', 'Robotics Kinematics'],
      github: '#',
    },
  ];

  const awards = [
    'USAMO Qualifier · AMC 12A: 139.5 · AMC 12B: 144',
    'High Distinction, Australian Mathematics Competition (2025)',
    'Distinction, Cayley Contest (2025)',
    'Honours, COMC (2024) · AMO Silver & Bronze · IYMC Finalist',
  ];

  return (
    <div className="bg-[#fbf7ef] min-h-screen">
      <PageHero
        eyebrow="What I've Built"
        title="Work & Projects"
        subtitle="Every one of these started as a question I couldn't let go of. Here's the fuller story behind each one."
      />

      <div className="container-custom pt-16 pb-16 md:pt-20 md:pb-20">
        <div className="max-w-4xl mx-auto space-y-10">
          {projects.map((project, idx) => {
            const accent = ACCENTS[idx % ACCENTS.length];
            return (
              <div key={project.slug} className="card relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5" style={{ backgroundColor: accent }}></div>

                <div className="mb-4">
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    <h2 className="heading-md">{project.title}</h2>
                  </div>
                  <div className="flex gap-3 items-center text-sm text-[var(--muted)] flex-wrap">
                    <span className="font-semibold">{project.year}</span>
                    <span className="text-xs px-3 py-1 rounded-full font-semibold text-white" style={{ backgroundColor: accent }}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {project.image && (
                  <div className="rounded-xl overflow-hidden border border-[#e6dcc8] mb-6 max-w-md">
                    <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
                  </div>
                )}

                <p className="prose mb-6">{project.overview}</p>

                <div className="mb-6">
                  <h3 className="heading-sm mb-3 text-base">Key Highlights</h3>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, hidx) => (
                      <li key={hidx} className="text-sm text-slate-600 flex gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: accent }}></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="heading-sm mb-3 text-base">Technology</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs px-3 py-1 bg-amber-100 text-red-900 rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.github !== '#' && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-red-800 hover:gap-3 transition-all">
                    View on GitHub <span>→</span>
                  </a>
                )}
              </div>
            );
          })}

          <section className="card relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#8c1515]"></div>
            <p className="subtitle text-red-800 mb-2">Awards & Mathematics</p>
            <h2 className="heading-md mb-4">Mathematics Competitions</h2>
            <p className="prose mb-5">Competition mathematics has been a separate part of my work from engineering and research, with a focus on proof-based problem solving and olympiad-style questions.</p>
            <ul className="space-y-2">
              {awards.map((award) => (
                <li key={award} className="text-sm text-slate-600 flex gap-2.5">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-[#8c1515]"></span>
                  {award}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
