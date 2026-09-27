'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const BAR_COUNT = 12;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Traveling wave: bar heights ripple left-to-right as scrollY changes.
  // Magnify follows a bell curve — it grows, peaks around scrollY ~260,
  // then eases back to its resting size (so it never overlaps neighbors
  // and reverses smoothly when you scroll back up).
  const wavePhase = scrollY / 60;
  const magnify = 1 + 0.28 * Math.exp(-Math.pow((scrollY - 260) / 220, 2));

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/work' },
    { label: 'Research', href: '/research' },
    { label: 'Activities', href: '/activities' },
    { label: 'Resume', href: '/resume' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#fbf7ef]/85 border-b border-[#e6dcc8]">
      <nav className="container-custom py-4 flex justify-between items-center gap-6">
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 rounded-lg bg-[#8c1515] flex items-center justify-center font-bold text-white text-lg group-hover:scale-110 transition-transform">
            RM
          </div>
          <span className="hidden sm:block font-bold text-lg text-[#2b2620]">
            Raeyaan
          </span>
        </Link>

        {/* Desktop Menu — pipe-separated like the reference */}
        <div className="hidden lg:flex items-center gap-5 text-sm font-medium text-[#5c5347]">
          {navItems.map((item, idx) => (
            <span key={item.href} className="flex items-center gap-5">
              <Link href={item.href} className="hover:text-[#8c1515] transition-colors">
                {item.label}
              </Link>
              {idx < navItems.length - 1 && <span className="text-[#e6dcc8]">|</span>}
            </span>
          ))}
        </div>

        {/* Decorative tick marks + CTA, like the reference's waveform accent */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <a
            href="https://github.com/raeyaanmuppaneni"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#5c5347] hover:text-[#8c1515] transition-colors"
          >
            GitHub
          </a>
          <div className="w-16 flex justify-center shrink-0">
            <div
              className="flex items-end gap-[3px] h-4 opacity-60 transition-transform duration-200 ease-out"
              style={{ transform: `scale(${magnify})` }}
            >
              {Array.from({ length: BAR_COUNT }).map((_, i) => {
                const h = 5 + Math.abs(Math.sin(wavePhase + i * 0.55)) * 11;
                return (
                  <span
                    key={i}
                    className="w-[2px] bg-[#8c1515] rounded-full transition-all duration-150 ease-out"
                    style={{ height: `${h}px` }}
                  ></span>
                );
              })}
            </div>
          </div>
          <Link
            href="/contact"
            className="flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full bg-[#fffdf8] border border-[#e6dcc8] shadow-sm hover:shadow-md transition-all"
          >
            <span className="text-sm font-semibold text-[#2b2620]">Let's Connect</span>
            <span className="w-7 h-7 rounded-full bg-[#8c1515] flex items-center justify-center text-white text-[0.6rem] font-bold">
              RM
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-[#f0e9d8] transition"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#fbf7ef] border-b border-[#e6dcc8] lg:hidden">
            <div className="container-custom py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-slate-600 hover:text-red-800 py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#8c1515] text-white font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Let's Connect
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
