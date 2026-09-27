import Link from 'next/link';
import PageHero from '@/components/PageHero';

const ACCENTS = ['#8c1515', '#a0522d', '#c9a876', '#6b7c52', '#8c1515'];

export default function Work() {
  const projects = [
    {
      slug: 'capacitive-insole',
      title: 'Capacitive Sensing Insole for Gait Analysis',
      year: '2026',
      status: 'Ongoing at Stanford',
      description: 'Biomedical device for analyzing loading and gait asymmetry in para-athletes',
      overview: `Working with Stanford's Human Performance Lab and NMBL, I built a capacitive force-sensing plate for running blades — custom rigid PCB, bare-metal STM32 firmware, and the Python tools to calibrate and visualize the data.`,
      highlights: [
        'Designed a rigid PCB carrying two TI FDC2214 capacitance-to-digital converters — 8 sensor channels total, each an LC tank read over I²C',
        'Wrote bare-metal C firmware for an STM32WB55 (no HAL, no CubeMX) that streams live sensor data over serial at 460,800 baud',
        'Built Python tooling for live plotting, per-sensor weight calibration, and mapping physical sensors to data channels',
        'Characterized real sensor behavior: resting capacitance, non-linear force response, and hysteresis after heavy loads',
        'Continued the work from Stanford SIMR into Stanford NMBL as an ongoing research project',
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
      overview: `This project explores how electromyography (EMG) signals from muscle activity can be classified and used to drive a robotic arm — from raw signal to a working classification model.`,
      highlights: [
        '2nd place award at Alameda County Science Fair',
        'Built a full pipeline: data preprocessing and feature extraction on raw EMG signal',
        'Trained and cross-validated a classification model on extracted muscle-signal features',
        'Evaluated the best-performing model against held-out test data',
      ],
      tech: ['EMG Signal Processing', 'Python', 'Feature Extraction', 'Classification Models'],
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
      highlights: [
        'User-centered design with input from FCSN and WeEMBRACE',
        'Simple one-press interface for quick communication',
        'Customizable message bank per user',
        'Prototype testing with target users',
      ],
      tech: ['Embedded Systems', 'User Research', 'Hardware Design'],
      github: 'https://github.com/raeyaanmuppaneni/Neurodivergent-App',
    },
    {
      slug: 'focus-app',
      title: 'EEG-Based Focus Application',
      year: '2023–Present',
      status: 'Research & Patent Filing',
      description: 'Neurofeedback system using EEG for attention support',
      overview: `Exploring EEG-based biofeedback to help neurodivergent users maintain focus. Filed patent application for medical-emergency wearable extension.`,
      highlights: [
        'EEG data collection and analysis',
        'Patent application filed for medical-emergency features',
        'Research documentation and validation',
      ],
      tech: ['EEG Processing', 'Neurofeedback', 'Signal Analysis'],
      github: '#',
    },
  ];

  return (
    <div className="bg-[#fbf7ef] min-h-screen">
      <PageHero
        eyebrow="What I've Built"
        title="Work & Projects"
        subtitle="Every one of these started as a question I couldn't let go of. Here's the fuller story behind each one."
      />

      <div className="container-custom pt-16 md:pt-20">
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#8c1515]/15 via-[#c9a876]/15 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#e6dcc8]">
                <img
                  src="/images/profile/classroom.jpg"
                  alt="Raeyaan measuring a PCB with calipers in class"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-3">
              <p className="calligraphy text-2xl mb-2">Most of this happens at a desk</p>
              <p className="prose text-lg">
                Between classes, late nights, and a lot of trial and error — most of what's below started as notes on a page and a circuit board in my hands before it became anything worth showing.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto space-y-10">
          {projects.map((project, idx) => {
            const accent = ACCENTS[idx % ACCENTS.length];
            return (
              <div key={project.slug} className="card relative overflow-hidden">
                <div
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ backgroundColor: accent }}
                ></div>

                <div className="mb-4">
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    <h2 className="heading-md">{project.title}</h2>
                  </div>
                  <div className="flex gap-3 items-center text-sm text-[var(--muted)] flex-wrap">
                    <span className="font-semibold">{project.year}</span>
                    <span
                      className="text-xs px-3 py-1 rounded-full font-semibold text-white"
                      style={{ backgroundColor: accent }}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <p className="prose mb-6">{project.overview}</p>

                <div className="mb-6">
                  <h3 className="heading-sm mb-3 text-base">Key Highlights</h3>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, hidx) => (
                      <li key={hidx} className="text-sm text-slate-600 flex gap-2.5">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: accent }}
                        ></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="heading-sm mb-3 text-base">Technology</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-amber-100 text-red-900 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.github !== '#' && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-red-800 hover:gap-3 transition-all"
                  >
                    View on GitHub <span>→</span>
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
