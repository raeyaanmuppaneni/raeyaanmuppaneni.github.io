import Link from 'next/link';

export default function Home() {
  return (
    <div className="container-custom py-16 md:py-32">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="space-y-6">
          <h1 className="heading-lg">
            Raeyaan Muppaneni
          </h1>
          <p className="text-lg text-[var(--muted)] max-w-2xl">
            High school engineer and researcher exploring assistive technology, bioengineering, and applied mathematics. Building at the intersection of technical rigor and human-centered design.
          </p>
        </div>
      </section>

      {/* Featured Work */}
      <section className="mb-16">
        <h2 className="heading-md mb-8">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: 'Capacitive Sensing Insole',
              description: 'Biomedical device for para-athlete gait analysis at Stanford Human Performance Lab',
              tags: ['Bioengineering', 'PCB Design', 'Embedded Systems'],
              link: '/work/capacitive-insole',
            },
            {
              title: 'EMG-Controlled Robotic Arm',
              description: 'Muscle signal processing and mechanical actuation system. 2nd place at Alameda Science Fair.',
              tags: ['Signal Processing', 'Robotics', 'Research'],
              link: '/work/emg-arm',
            },
            {
              title: 'Assistive Wearable for Visually Impaired',
              description: 'YOLOv8-based obstacle detection device. 2nd place at Synopsys Science Fair.',
              tags: ['Computer Vision', 'AI/ML', 'Wearables'],
              link: '/work/obstacle-detection',
            },
            {
              title: 'Rooting Minds Initiative',
              description: 'Co-founded platform creating accessible games and technology for neurodivergent youth.',
              tags: ['Community Impact', 'Assistive Tech', 'Leadership'],
              link: '/activities#rooting-minds',
            },
          ].map((project, idx) => (
            <Link
              key={idx}
              href={project.link}
              className="p-6 border border-[var(--border)] rounded-lg hover:border-[var(--foreground)] transition group"
            >
              <h3 className="heading-sm mb-2 group-hover:opacity-70">{project.title}</h3>
              <p className="text-sm text-[var(--muted)] mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-[var(--border)] rounded text-[var(--muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Research Focus */}
      <section className="mb-16">
        <h2 className="heading-md mb-8">Research Areas</h2>
        <ul className="space-y-3 text-[var(--muted)]">
          <li>• Biomedical instrumentation and wearable sensor design</li>
          <li>• Signal processing and EMG/EEG applications</li>
          <li>• Assistive technology for accessibility and inclusion</li>
          <li>• Robotics and mechanical system design</li>
          <li>• Applied mathematics: multivariable calculus, group theory, optimization</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="py-12 border-t border-b border-[var(--border)]">
        <div className="space-y-6">
          <h2 className="heading-md">Let's Connect</h2>
          <p className="text-[var(--muted)] max-w-2xl">
            Interested in research collaboration, engineering projects, or learning more about my work? Feel free to reach out.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/contact"
              className="px-6 py-2 border border-[var(--foreground)] rounded hover:bg-[var(--foreground)] hover:text-[var(--background)] transition"
            >
              Get in Touch
            </Link>
            <a
              href="https://github.com/raeyaan"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-[var(--foreground)] rounded hover:bg-[var(--foreground)] hover:text-[var(--background)] transition"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
