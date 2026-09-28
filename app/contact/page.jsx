'use client';

import { useState } from 'react';
import PageHero from '@/components/PageHero';

const inputClass =
  'w-full px-4 py-2.5 border border-[#e6dcc8] rounded-xl bg-[#fffdf8] text-[#2b2620] focus:outline-none focus:border-[#8c1515] focus:ring-2 focus:ring-[#8c1515]/10 transition';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // No third-party form backend is configured, so this opens the visitor's
    // own email client with the message pre-filled — works with zero setup.
    const body = `${formData.message}\n\n— ${formData.name} (${formData.email})`;
    const mailto = `mailto:raeyaanmuppaneni@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className="bg-[#fbf7ef] min-h-screen">
      <PageHero
        eyebrow="Let's Talk"
        title="Get in Touch"
        subtitle="I'm always interested in hearing about new ideas, research opportunities, and collaborations. Reach out any way that's easiest."
      />

      <div className="container-custom py-16 md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="md:col-span-2 space-y-4">
            <div className="card">
              <h3 className="heading-sm text-base mb-2" style={{ color: '#8c1515' }}>Email</h3>
              <a
                href="mailto:raeyaanmuppaneni@gmail.com"
                className="text-slate-700 hover:text-red-800 transition break-all"
              >
                raeyaanmuppaneni@gmail.com
              </a>
            </div>

            <div className="card">
              <h3 className="heading-sm text-base mb-3" style={{ color: '#a0522d' }}>Social</h3>
              <div className="flex flex-col gap-2">
                <a
                  href="https://github.com/raeyaanmuppaneni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-700 hover:text-red-800 transition"
                >
                  GitHub <span>→</span>
                </a>
                <a
                  href="https://linkedin.com/in/raeyaan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-700 hover:text-red-800 transition"
                >
                  LinkedIn <span>→</span>
                </a>
              </div>
            </div>

            <div className="card">
              <h3 className="heading-sm text-base mb-2" style={{ color: '#6b7c52' }}>Location</h3>
              <p className="text-slate-600">Fremont, California, USA</p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3 card">
            <h2 className="heading-md mb-6">Send a Message</h2>

            {submitted && (
              <div className="p-4 bg-[#eef1e7] border border-[#c3cdab] rounded-xl mb-6 text-sm text-[#4a5636] font-medium">
                Opening your email client with this message pre-filled — just hit send there.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-slate-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
