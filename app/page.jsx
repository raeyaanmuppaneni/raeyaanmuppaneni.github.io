import Link from 'next/link';
import HeroIllustration from '@/components/HeroIllustration';
import ResearchIllustration from '@/components/ResearchIllustration';
import InnovationIllustration from '@/components/InnovationIllustration';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 pt-20 pb-32 md:pt-32 md:pb-48">
        {/* Decorative blobs */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -z-10 animate-pulse"></div>
        <div className="absolute top-40 left-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -z-10 animate-pulse animation-delay-2000"></div>

        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:pr-8">
              <div className="inline-block">
                <span className="badge">High School Engineer</span>
              </div>

              <h1 className="heading-lg">
                Building with technical rigor & human purpose
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                I'm Raeyaan, a high school student exploring assistive technology, biomedical engineering, and robotics at Stanford and beyond. Passionate about solving real problems through rigorous engineering.
              </p>

              <div className="flex gap-4 flex-wrap pt-4">
                <Link
                  href="/work"
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all"
                >
                  View My Work
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3 rounded-lg border-2 border-blue-500 text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:scale-105 transition-all"
                >
                  Get in Touch
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                <div>
                  <div className="text-2xl font-bold gradient-text">5+</div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Major Projects</p>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">2x</div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Science Fair Awards</p>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">Stanford</div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">SIMR Researcher</p>
                </div>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative h-96 md:h-full hidden md:flex items-center justify-center">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="mb-16">
            <h2 className="heading-md mb-4">Featured Projects</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Rigorous engineering with real-world impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Project 1 */}
            <div className="card group">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="heading-sm mb-1">Capacitive Sensing Insole</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Stanford University</p>
                </div>
                <span className="text-3xl">📊</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Biomedical device for para-athlete gait analysis. PCB design, embedded firmware, and real-time data acquisition.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">PCB Design</span>
                <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">Biomedical</span>
                <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">Embedded</span>
              </div>
              <Link href="/work" className="text-blue-600 dark:text-blue-400 font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                View Project →
              </Link>
            </div>

            {/* Project 2 */}
            <div className="card group">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="heading-sm mb-1">EMG-Controlled Robotics</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">2nd Place Science Fair</p>
                </div>
                <span className="text-3xl">🤖</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Muscle signal processing system translating EMG signals into robotic arm control with real-time signal analysis.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded">Signal Processing</span>
                <span className="text-xs px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded">Robotics</span>
                <span className="text-xs px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded">Research</span>
              </div>
              <Link href="/work" className="text-amber-600 dark:text-amber-400 font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                View Project →
              </Link>
            </div>

            {/* Project 3 */}
            <div className="card group">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="heading-sm mb-1">Assistive Vision Wearable</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">2nd Place Synopsys Fair</p>
                </div>
                <span className="text-3xl">👁️</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                YOLOv8 computer vision wearable for obstacle detection. Real-time inference on edge devices for accessibility.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded">Computer Vision</span>
                <span className="text-xs px-2 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded">AI/ML</span>
                <span className="text-xs px-2 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded">Accessibility</span>
              </div>
              <Link href="/work" className="text-cyan-600 dark:text-cyan-400 font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                View Project →
              </Link>
            </div>

            {/* Project 4 */}
            <div className="card group">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="heading-sm mb-1">Rooting Minds Initiative</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Co-Founder & President</p>
                </div>
                <span className="text-3xl">🌱</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Non-profit initiative creating accessible technology and education for neurodivergent youth. Reached 100+ students.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded">Community</span>
                <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded">Impact</span>
                <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded">Leadership</span>
              </div>
              <Link href="/activities" className="text-green-600 dark:text-green-400 font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                Learn More →
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/work"
              className="inline-block px-8 py-3 rounded-lg border-2 border-blue-500 text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Research Focus */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container-custom">
          <div className="mb-16">
            <h2 className="heading-md mb-4">Research & Interests</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Exploring the intersection of engineering and human impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="space-y-4">
                {[
                  'Biomedical instrumentation & wearable sensors',
                  'Signal processing (EMG/EEG/Capacitive)',
                  'Assistive technology for accessibility',
                  'Robotics & mechanical systems',
                  'Applied mathematics & optimization',
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex-shrink-0 flex items-center justify-center text-white text-sm font-bold">
                      ✓
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/research"
                className="inline-block px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                Explore Research →
              </Link>
            </div>

            <div className="flex items-center justify-center h-64">
              <ResearchIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex items-center justify-center h-64 order-2 md:order-1">
              <InnovationIllustration />
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <div>
                <h2 className="heading-md mb-4">Rigorous Engineering</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                  My approach combines deep technical understanding with practical problem-solving. From PCB design and embedded systems to signal processing and machine learning, I focus on building solutions that work and matter.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'PCB Design', icon: '🔌' },
                  { label: 'Embedded Systems', icon: '⚙️' },
                  { label: 'Signal Processing', icon: '📈' },
                  { label: 'Machine Learning', icon: '🧠' },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-slate-100 dark:bg-slate-800 text-center">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-900 dark:to-cyan-900">
        <div className="container-custom text-center text-white space-y-8">
          <h2 className="heading-md text-white">Let's Build Something Great</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Interested in collaboration, research opportunities, or learning more about my work? I'd love to connect.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-lg bg-white text-blue-600 font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              Get in Touch
            </Link>
            <a
              href="https://github.com/raeyaan"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 hover:scale-105 transition-all"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
