'use client';

import Link from 'next/link';
import HeroPortrait from '@/components/HeroPortrait';
import Reveal from '@/components/Reveal';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbf7ef]">
      {/* ============ HERO SECTION ============ */}
      <section className="relative pt-16 md:pt-20 overflow-hidden">
        {/* Soft background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8c1515] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center pb-16">
            {/* Left: Content */}
            <div className="space-y-7">
              {/* Trust badges row */}
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-1.5 bg-[#fffdf8] border border-[#e6dcc8] rounded-full px-3 py-1.5 shadow-sm">
                  <span className="text-amber-600">★★★★★</span>
                  <span className="text-xs font-bold text-[#2b2620]">4.71 GPA</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#fffdf8] border border-[#e6dcc8] rounded-full px-3 py-1.5 shadow-sm">
                  <span className="text-xs font-bold text-[#8c1515]">Stanford SIMR</span>
                </div>
                <span className="text-xs uppercase tracking-wider text-[var(--muted)] hidden sm:inline">Class of 2027 · Fremont, CA</span>
              </div>

              <div>
                <p className="calligraphy text-3xl mb-2">Hey, I'm Raeyaan</p>
                <h1 className="heading-display leading-tight mb-6">
                  The World Wasn't Built<br className="hidden md:block" /> for Everyone. So I'm<br className="hidden md:block" /> Building What It Left Out.
                </h1>
              </div>

              {/* Description */}
              <p className="prose text-lg">
                I design hardware for people that standard tools leave out. Right now I lead a team at Stanford building a pressure-sensing insole for blade runners, whose gait can't be measured on the lab's instrumented treadmill. Before that, I built a robotic arm controlled by muscle signals and an object detection device for blind people.
              </p>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-2 flex-wrap">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-[0.65rem] font-bold">
                    RM
                  </span>
                  Let's Connect
                </Link>
                <Link href="/work" className="btn-secondary inline-flex items-center gap-2">
                  See What I've Built <span>↓</span>
                </Link>
              </div>
            </div>

            {/* Right: Portrait */}
            <div className="relative flex items-end justify-center md:justify-end">
              <HeroPortrait />
            </div>
          </div>
        </div>

        {/* Recognized By strip */}
        <div className="border-t border-[#e6dcc8] bg-[#f4ecda]/60 py-6">
          <div className="container-custom flex flex-col md:flex-row gap-3 md:gap-8 md:items-center md:justify-between">
            <span className="text-xs uppercase tracking-widest text-[var(--muted)] font-semibold shrink-0">
              Recognized By
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2 md:gap-x-12 items-center opacity-80">
              <span className="font-serif font-bold text-sm md:text-base text-[#3d362c]">Stanford University</span>
              <span className="font-serif font-bold text-sm md:text-base text-[#3d362c]">Synopsys Science Fair</span>
              <span className="font-serif font-bold text-sm md:text-base text-[#3d362c]">Conrad Challenge</span>
              <span className="font-serif font-bold text-sm md:text-base text-[#3d362c]">Rooting Minds</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STANFORD BANNER ============ */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden bg-[#2b2620]">
        <img
          src="/images/profile/stanford-lab.jpg"
          alt="Raeyaan working inside the Human Performance Lab at Stanford"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '72% 40%' }}
        />

        <div className="absolute inset-x-0 bottom-0 z-20 pb-8 pt-24 bg-gradient-to-t from-[#2b2620]/90 via-[#2b2620]/40 to-transparent">
          <div className="container-custom">
            <p style={{ fontFamily: "'Caveat', cursive", fontWeight: 600 }} className="text-3xl md:text-4xl text-white/95">
              Working inside the Human Performance Lab in Stanford
            </p>
          </div>
        </div>
      </section>

      {/* ============ PROFILE SECTION ============ */}
      <section className="py-20 bg-gradient-to-b from-[#f4ecda] to-[#fbf7ef]">
        <div className="container-custom">
          <Reveal>
            <div className="text-center mb-12">
              <p className="subtitle text-red-800 mb-4">A Bit About Me</p>
              <h2 className="heading-lg mb-4">Hi, I'm Raeyaan</h2>
              <p className="prose text-lg max-w-2xl mx-auto">
                Student at Irvington High and student researcher in Stanford's Human Performance Lab. I do most of my work hands-on: designing the boards, soldering them, writing the firmware, and testing them.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#8c1515]/20 via-[#c9a876]/20 to-transparent rounded-3xl blur-2xl"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#e6dcc8]">
                  <img
                    src="/images/projects/aac-prototype.jpg"
                    alt="A breadboard prototype mid-build — wires, buttons, and a microcontroller"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="space-y-8">
                <div>
                  <h3 className="heading-md mb-4">How I Got Here</h3>
                  <p className="prose mb-4">
                    I got into engineering by taking apart remotes and fans to see what was inside. Now I build the insides myself: designing circuit boards, writing the firmware that runs them, and testing them with the people they're for.                  </p>
                  <p className="prose">
                    My projects have ranged from a robotic arm controlled by muscle signals to a wearable that helps visually impaired people sense what's around them. The one I'm proudest of started with an interview: a blade runner told me even Stanford's lab equipment couldn't measure how she runs. My team is now building an insole that can.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Weighted GPA', value: '4.71' },
                    { label: 'Dream School', value: 'Stanford' },
                    { label: 'Focus', value: 'Biomedical Engineering' },
                    { label: 'Mission', value: 'Closing gaps' },
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                      <p className="text-xs font-semibold text-red-800 uppercase tracking-wider">{item.label}</p>
                      <p className="text-lg font-bold text-slate-900 mt-1">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {/* ============ STANFORD RESEARCH SECTION ============ */}
      <section className="py-24 bg-gradient-to-b from-[#fbf7ef] to-[#f3e6cd] overflow-hidden">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Photography */}
            <Reveal className="relative order-2 md:order-1">
              <div className="absolute -inset-6 bg-gradient-to-br from-amber-300 via-orange-200 to-transparent rounded-3xl opacity-40 blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-amber-200/60">
                <img
                  src="/images/stanford/hoover-tower.jpg"
                  alt="Hoover Tower and the Main Quad at Stanford University"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Small detail shot overlapping the corner */}
              <div className="hidden md:block absolute -bottom-8 -right-8 w-40 h-32 rounded-xl overflow-hidden shadow-2xl border-4 border-[#fbf7ef]">
                <img
                  src="/images/stanford/colonnade.jpg"
                  alt="Stanford Main Quad colonnade"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-xs text-slate-400 mt-3 italic">
                Hoover Tower &amp; the Main Quad, Stanford University
              </p>
            </Reveal>

            {/* Text */}
            <Reveal delay={150} className="order-1 md:order-2 space-y-6">
              <h2 className="heading-lg">My Summer at Stanford</h2>
              <p className="prose text-lg">
                This past summer, my team and I started building a smart insole through Stanford's <span className="font-bold text-slate-900">SIMR program</span>, a summer research program for high school students. The insole measures foot pressure as someone walks or runs.
              </p>
              <p className="prose">
                It began with an interview with a para-athlete, who told us even Stanford's lab equipment can't be used by blade runners. We built an insole with eight capacitive pressure sensors to fill that gap. After SIMR ended, my team and I continued the project under the mentorship of a PhD student in the Human Performance Lab. Since then, we've redesigned the circuit boards and got the full system running. Next is calibration and lab testing.
              </p>
              <div className="flex gap-2 md:gap-3 flex-wrap pt-2">
                <span className="bg-[#8c1515] text-white rounded-full px-3 py-1.5 md:px-5 md:py-2 text-[0.65rem] md:text-xs font-semibold whitespace-nowrap">Stanford SIMR 2025–26</span>
                <span className="text-[0.65rem] md:text-xs px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-amber-300 text-amber-700 font-semibold whitespace-nowrap">
                  Human Performance Lab
                </span>
              </div>
              <Link href="/work" className="inline-flex items-center gap-2 font-semibold text-red-800 pt-2">
                See the research in detail <span>→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FEATURED WORK SECTION ============ */}
      <section className="py-24 bg-gradient-to-b from-[#f4ecda] to-[#fbf7ef]">
        <div className="container-custom">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">What I've Built</h2>
              <p className="prose text-lg max-w-2xl mx-auto">
                Every one of these started as "wait, what if..." — here's where that curiosity led.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 md:auto-rows-fr">
            {[
              {
                image: '/images/projects/insole-pcb-render.png',
                title: 'Capacitive Sensing Insole',
                org: 'SIMR & Human Performance Lab at Stanford University',
                desc: "Built a smart insole at Stanford that reads pressure and gait in real time, to help para-athletes train more safely. I handled the hardware and firmware.",
                tags: ['Bioengineering', 'PCB', 'Embedded'],
                link: '/work',
                size: 'big',
              },
              {
                image: '/images/projects/emg-device.jpg',
                title: 'EMG-Controlled Robotic Arm',
                org: '2nd Place · Alameda Science Fair',
                desc: "Trained a robotic arm to move using my own muscle signals — a first step toward more responsive prosthetics.",
                tags: ['Signal Processing', 'Robotics'],
                link: '/work',
                size: 'small',
              },
              {
                icon: '👁️',
                title: 'Assistive Vision Wearable',
                org: '2nd Place · Synopsys',
                desc: "A wearable that classifies obstacles in real time, to help people with visual impairments get around safer.",
                tags: ['Computer Vision', 'AI/ML'],
                link: '/work',
                size: 'small',
                noHoverScale: true,
              },
              {
                image: '/images/logos/rooting-minds.png',
                title: 'Rooting Minds Initiative',
                org: 'Co-Founder & President',
                desc: "Co-founded a nonprofit that works toward bringing accessible technology and learning games to neurodivergent students.",
                tags: ['Community', 'Leadership'],
                link: '/activities',
                size: 'big',
              },
            ].map((project, idx) => (
              <Reveal
                key={idx}
                delay={idx * 100}
                className={project.size === 'big' ? 'md:col-span-2' : 'md:col-span-1'}
              >
                <Link href={project.link} className="block h-full">
                  <div className={`card group cursor-pointer h-full flex flex-col ${project.size === 'big' ? 'md:flex-row md:items-center md:gap-8' : ''}`}>
                    <div className={project.size === 'big' ? 'md:w-1/3 flex flex-col items-start' : ''}>
                      {project.image ? (
                        <div className={`rounded-xl overflow-hidden border border-[#e6dcc8] mb-3 group-hover:scale-105 transition-transform ${project.size === 'big' ? 'w-full aspect-square' : 'w-full aspect-[3/2]'}`}>
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <span className={`${project.size === 'big' ? 'text-6xl' : 'text-4xl'} ${project.noHoverScale ? '' : 'group-hover:scale-110'} transition-transform block mb-3`}>
                          {project.icon}
                        </span>
                      )}
                      <h3 className={project.size === 'big' ? 'heading-md' : 'heading-sm'}>{project.title}</h3>
                      <p className="text-sm text-red-800 font-semibold mb-2">
                        {project.org}
                      </p>
                    </div>

                    <div className="flex-1">
                      <p className={`prose mb-4 ${project.size === 'big' ? '' : 'line-clamp-2'}`}>{project.desc}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1 bg-amber-100 text-red-900 rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 flex items-center text-red-800 font-semibold group-hover:gap-2 transition-all">
                        Discover More <span className="ml-2">→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
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
      <section className="py-24 bg-[#fbf7ef]">
        <div className="container-custom">
          <Reveal>
            <div className="text-center mb-16">
              <p className="subtitle text-red-800 mb-4">Tools I Reach For</p>
              <h2 className="heading-lg mb-4">The Toolkit Behind the Projects</h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-6 md:auto-rows-fr">
            {[
              {
                category: 'Electronics & PCB Design',
                blurb: 'Designing the circuit boards that power everything I build.',
                skills: ['KiCad', '4-Layer PCB Design', 'Circuit Design', 'Microcontrollers'],
                icon: '⚡',
                size: 'big',
              },
              {
                category: 'Embedded Systems',
                blurb: 'Writing the code that runs directly on hardware.',
                skills: ['STM32 Firmware', 'C/C++', 'I2C/SPI/UART', 'Sensor Integration'],
                icon: '🔧',
                size: 'small',
              },
              {
                category: 'Signal Processing',
                blurb: 'Turning messy real-world signals into usable data.',
                skills: ['EMG/EEG Analysis', 'Filtering', 'Python DSP', 'Data Acquisition'],
                icon: '📈',
                size: 'small',
              },
              {
                category: 'Software & AI',
                blurb: 'Building smart software that can see, sense, and decide.',
                skills: ['Python', 'Computer Vision', 'YOLOv8', 'Machine Learning'],
                icon: '🧠',
                size: 'small',
              },
              {
                category: 'Robotics & Mechanics',
                blurb: 'Making things move the way they\'re actually supposed to.',
                skills: ['Kinematics', 'Actuator Control', 'CAD Design', 'Prototyping'],
                icon: '🤖',
                size: 'small',
              },
              {
                category: 'Mathematics',
                blurb: 'The math that quietly makes everything above actually work.',
                skills: ['Multivariable Calculus', 'Group Theory', 'Optimization', 'Applied Math'],
                icon: '∑',
                size: 'big',
              },
            ].map((item, idx) => (
              <Reveal
                key={idx}
                delay={idx * 80}
                className={item.size === 'big' ? 'md:col-span-2' : 'md:col-span-1'}
              >
                <div className={`card group h-full ${item.size === 'big' ? 'text-left flex items-center gap-6' : 'text-center'}`}>
                  <div className={`${item.size === 'big' ? 'w-20 text-6xl' : 'text-4xl mx-auto'} mb-4 group-hover:scale-110 transition-transform shrink-0 flex items-center justify-center`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className={item.size === 'big' ? 'heading-md mb-2' : 'heading-sm mb-2'}>{item.category}</h3>
                    <p className="text-xs text-[var(--muted)] italic mb-4">{item.blurb}</p>
                    <div className={`space-y-1.5 ${item.size === 'big' ? 'flex flex-wrap gap-2 space-y-0' : ''}`}>
                      {item.skills.map((skill, i) => (
                        item.size === 'big' ? (
                          <span key={i} className="text-xs px-3 py-1 bg-amber-100 text-red-900 rounded-full font-medium">
                            {skill}
                          </span>
                        ) : (
                          <p key={i} className="text-sm text-slate-600">
                            {skill}
                          </p>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA SECTION ============ */}
      <section className="relative py-32 bg-gradient-to-br from-[#7a1212] to-[#4a0d0d] overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>

        <Reveal className="container-custom relative z-10 text-center text-white space-y-8">
          <h2 className="heading-lg text-white mb-4">Got an Idea? Let's Build It</h2>
          <p className="prose text-lg text-amber-100 max-w-2xl mx-auto">
            Whether it's a research collaboration, a school project, or you just want to talk shop about PCBs — I'd love to hear from you.
          </p>

          <div className="flex gap-4 justify-center flex-wrap pt-4">
            <Link href="/contact" className="px-8 py-3 rounded-full bg-white text-red-800 font-bold hover:bg-amber-50 transition-all transform hover:scale-105 inline-block">
              Get In Touch
            </Link>
            <a
              href="https://github.com/raeyaanmuppaneni"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition-all transform hover:scale-105"
            >
              View GitHub
            </a>
          </div>

          <p className="pt-6" style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: '1.75rem', color: 'rgba(255,255,255,0.9)' }}>
            — Raeyaan Muppaneni
          </p>
        </Reveal>
      </section>
    </div>
  );
}
