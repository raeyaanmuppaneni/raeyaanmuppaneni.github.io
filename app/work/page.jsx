import Link from 'next/link';

export default function Work() {
  const projects = [
    {
      slug: 'capacitive-insole',
      title: 'Capacitive Sensing Insole for Gait Analysis',
      year: '2026',
      status: 'Ongoing at Stanford',
      description: 'Biomedical device for analyzing loading and gait asymmetry in para-athletes',
      overview: `Working with Stanford University's Human Performance Lab, I developed a capacitive sensing insole that measures pressure distribution and gait parameters. The project involves rigid PCB design, sensor integration, firmware development, and data calibration.`,
      highlights: [
        'Designed 4-layer rigid PCB with capacitive sensing circuits',
        'Integrated STM32 microcontroller and FDC2214 capacitive-sensing ICs',
        'Developed firmware for real-time data acquisition and I2C communication',
        'Led calibration testing with known loads and experimental validation',
        'Mentoring a 5-person team through hardware iteration and Conrad Challenge preparation',
      ],
      tech: ['KiCad', 'STM32 Firmware', 'C/C++', 'Capacitive Sensing', 'PCB Design'],
      github: 'https://github.com/raeyaan/capacitive-insole',
    },
    {
      slug: 'emg-arm',
      title: 'EMG-Controlled Robotic Arm',
      year: '2024–2026',
      status: '2nd Place at Alameda Science Fair',
      description: 'Muscle signal processing system for robotic manipulation',
      overview: `This research project explores how electromyography (EMG) signals from muscle contractions can control a robotic arm in real-time. The work involved sensor design, signal processing, and mechanical integration.`,
      highlights: [
        '2nd place award at Alameda County Science Fair',
        'Designed EMG sensing and amplification circuits',
        'Implemented signal processing pipeline for feature extraction',
        'Built mechanical arm with servo actuators',
        'Research paper prepared for publication/conference',
      ],
      tech: ['EMG Sensing', 'Signal Processing', 'Python', 'Arduino', 'Mechanical Design'],
      github: 'https://github.com/raeyaan/emg-robotics',
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
      github: 'https://github.com/raeyaan/obstacle-detector',
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
      github: '#',
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
    <div className="container-custom py-16 md:py-24">
      <article className="max-w-3xl">
        <h1 className="heading-lg mb-12">Work & Projects</h1>

        <div className="space-y-16">
          {projects.map((project) => (
            <section
              key={project.slug}
              className="pb-12 border-b border-[var(--border)] last:border-b-0"
            >
              <div className="mb-4">
                <h2 className="heading-md mb-2">{project.title}</h2>
                <div className="flex gap-4 text-sm text-[var(--muted)]">
                  <span>{project.year}</span>
                  <span>•</span>
                  <span>{project.status}</span>
                </div>
              </div>

              <p className="text-[var(--muted)] mb-6">{project.overview}</p>

              <div className="mb-6">
                <h3 className="heading-sm mb-3">Key Highlights</h3>
                <ul className="space-y-2 text-sm">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-[var(--muted)]">
                      • {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="heading-sm mb-3">Technology</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-[var(--border)] rounded text-[var(--muted)]"
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
                  className="text-sm text-[var(--foreground)] hover:opacity-70 transition"
                >
                  View on GitHub →
                </a>
              )}
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
