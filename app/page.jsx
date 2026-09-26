'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import ProfileImage from '@/components/ProfileImage';
import EngineeringArt from '@/components/EngineeringArt';
import JourneyTimeline from '@/components/JourneyTimeline';

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* ============ HERO SECTION ============ */}
      <section className="relative min-h-screen pt-20 pb-32 overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              {/* Decorative subtitle */}
              <div>
                <p className="subtitle text-blue-600 dark:text-blue-400 mb-4">Welcome to my journey</p>
                <h1 className="heading-display leading-tight mb-6">
                  Engineering<br/>with Purpose
                </h1>
              </div>

              {/* Description */}
              <p className="prose text-lg">
                I'm <span className="font-bold text-slate-900 dark:text-white">Raeyaan Muppaneni</span>, a high school engineer reimagining what's possible at the intersection of technology and human impact. From biomedical research at Stanford to assistive tech for accessibility, I build solutions that matter.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div>
                  <div className="stat-number">5+</div>
                  <p className="stat-label">Major Projects</p>
                </div>
                <div>
                  <div className="stat-number">2x</div>
                  <p className="stat-label">Award Winner</p>
                </div>
                <div>
                  <div className="stat-number">∞</div>
                  <p className="stat-label">Impact Focused</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-4">
                <Link href="/work" className="btn-primary">
                  Explore My Work
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Let's Connect
                </Link>
              </div>
            </div>

            {/* Right: Visual elements */}
            <div ref={heroRef} className="relative h-full flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                {/* Floating illustration */}
                <div className="mb-8 floating">
                  <EngineeringArt />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ============ PROFILE SECTION ============ */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="subtitle text-blue-600 dark:text-blue-400 mb-4">Meet the Engineer</p>
            <h2 className="heading-lg mb-4">Raeyaan Muppaneni</h2>
            <p className="prose text-lg max-w-2xl mx-auto">
              High school innovator. Stanford researcher. Community builder. Passionate about creating technology that solves real problems and improves lives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ProfileImage />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="heading-md mb-4">The Story</h3>
                <p className="prose mb-4">
                  Since childhood, I've been fascinated by how things work. This curiosity evolved into a passion for engineering—not just for the sake of innovation, but to solve real problems that affect real people.
                </p>
                <p className="prose">
                  Whether designing PCBs in the lab, processing biomedical signals, or building assistive technology for accessibility, I approach each project with the same philosophy: technical excellence combined with human-centered purpose.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'GPA', value: '4.71' },
                  { label: 'University', value: 'Stanford' },
                  { label: 'Focus', value: 'Biotech' },
                  { label: 'Mission', value: 'Impact' },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">{item.label}</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white mt-1">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ JOURNEY SECTION ============ */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="subtitle text-blue-600 dark:text-blue-400 mb-4">The Timeline</p>
            <h2 className="heading-lg mb-4">A Journey of Innovation</h2>
            <p className="prose text-lg max-w-2xl mx-auto">
              From curiosity to real-world impact. Here's how the journey has unfolded.
            </p>
          </div>

          <JourneyTimeline />
        </div>
      </section>

      {/* ============ FEATURED WORK SECTION ============ */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="subtitle text-blue-600 dark:text-blue-400 mb-4">What I've Built</p>
            <h2 className="heading-lg mb-4">Featured Projects</h2>
            <p className="prose text-lg max-w-2xl mx-auto">
              Engineering solutions that combine technical depth with real-world impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: '📊',
                title: 'Capacitive Sensing Insole',
                org: 'Stanford University',
                desc: 'Biomedical device for gait analysis. PCB design, embedded firmware, real-time data.',
                tags: ['Bioengineering', 'PCB', 'Embedded'],
                link: '/work',
              },
              {
                icon: '🤖',
                title: 'EMG-Controlled Robotics',
                org: '2nd Place - Science Fair',
                desc: 'Signal processing system translating muscle signals to robotic movement.',
                tags: ['Signal Processing', 'Robotics'],
                link: '/work',
              },
              {
                icon: '👁️',
                title: 'Assistive Vision Wearable',
                org: '2nd Place - Synopsys',
                desc: 'YOLOv8 computer vision for obstacle detection. Real-time edge inference.',
                tags: ['Computer Vision', 'AI/ML'],
                link: '/work',
              },
              {
                icon: '🌱',
                title: 'Rooting Minds Initiative',
                org: 'Co-Founder & President',
                desc: 'Accessible technology platform for neurodivergent youth. Reached 100+ students.',
                tags: ['Community', 'Leadership'],
                link: '/activities',
              },
            ].map((project, idx) => (
              <Link key={idx} href={project.link}>
                <div className="card group cursor-pointer h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-4xl">{project.icon}</span>
                    <div>
                      <h3 className="heading-sm">{project.title}</h3>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                        {project.org}
                      </p>
                    </div>
                  </div>

                  <p className="prose mb-4 line-clamp-2">{project.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:gap-2 transition-all">
                    Discover More <span className="ml-2">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/work" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ============ EXPERTISE SECTION ============ */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="subtitle text-blue-600 dark:text-blue-400 mb-4">Technical Expertise</p>
            <h2 className="heading-lg mb-4">What I Work With</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                category: 'Electronics & PCB Design',
                skills: ['KiCad', '4-Layer PCB Design', 'Circuit Design', 'Microcontrollers'],
                icon: '⚡',
              },
              {
                category: 'Embedded Systems',
                skills: ['STM32 Firmware', 'C/C++', 'I2C/SPI/UART', 'Sensor Integration'],
                icon: '🔧',
              },
              {
                category: 'Signal Processing',
                skills: ['EMG/EEG Analysis', 'Filtering', 'Python DSP', 'Data Acquisition'],
                icon: '📈',
              },
              {
                category: 'Software & AI',
                skills: ['Python', 'Computer Vision', 'YOLOv8', 'Machine Learning'],
                icon: '🧠',
              },
              {
                category: 'Robotics & Mechanics',
                skills: ['Kinematics', 'Actuator Control', 'CAD Design', 'Prototyping'],
                icon: '🤖',
              },
              {
                category: 'Mathematics',
                skills: ['Multivariable Calculus', 'Group Theory', 'Optimization', 'Applied Math'],
                icon: '∑',
              },
            ].map((item, idx) => (
              <div key={idx} className="card text-center group">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="heading-sm mb-4">{item.category}</h3>
                <div className="space-y-2">
                  {item.skills.map((skill, i) => (
                    <p key={i} className="text-sm text-slate-600 dark:text-slate-300">
                      {skill}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA SECTION ============ */}
      <section className="relative py-32 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 dark:from-blue-900 dark:via-cyan-900 dark:to-blue-900 overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>

        <div className="container-custom relative z-10 text-center text-white space-y-8">
          <h2 className="heading-lg text-white mb-4">Let's Build Something Amazing</h2>
          <p className="prose text-lg text-blue-100 max-w-2xl mx-auto">
            Interested in collaboration, research opportunities, or learning more about my work? I'd love to connect and explore what we can create together.
          </p>

          <div className="flex gap-4 justify-center flex-wrap pt-4">
            <button className="px-8 py-3 rounded-full bg-white text-blue-600 font-bold hover:bg-blue-50 transition-all transform hover:scale-105">
              <Link href="/contact">Get In Touch</Link>
            </button>
            <a
              href="https://github.com/raeyaan"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition-all transform hover:scale-105"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
