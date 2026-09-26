export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white mt-24 py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-2">Raeyaan Muppaneni</h3>
            <p className="text-slate-300 text-sm">
              High school engineer building at the intersection of technical rigor and human impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="/about" className="hover:text-white transition">About</a></li>
              <li><a href="/work" className="hover:text-white transition">Projects</a></li>
              <li><a href="/research" className="hover:text-white transition">Research</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="mailto:raeyaanmuppaneni@gmail.com" className="hover:text-white transition">
                  Email
                </a>
              </li>
              <li>
                <a href="https://github.com/raeyaan" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/raeyaan" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
          <p>© 2026 Raeyaan Muppaneni. All rights reserved.</p>
          <p className="mt-2">
            Built with Next.js, Tailwind CSS, and hosted on GitHub Pages.
          </p>
        </div>
      </div>
    </footer>
  );
}
