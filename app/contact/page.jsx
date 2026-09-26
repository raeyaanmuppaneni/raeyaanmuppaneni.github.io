'use client';

import { useState } from 'react';

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className="container-custom py-16 md:py-24">
      <article className="max-w-2xl">
        <h1 className="heading-lg mb-12">Get in Touch</h1>

        <section className="mb-12">
          <p className="text-lg text-[var(--muted)] mb-8">
            I'm always interested in hearing about new ideas, research opportunities, and collaborations. Feel free to reach out through any of the channels below.
          </p>

          <div className="space-y-6 mb-12">
            <div>
              <h3 className="heading-sm mb-2">Email</h3>
              <a
                href="mailto:raeyaanmuppaneni@gmail.com"
                className="text-[var(--foreground)] hover:opacity-70 transition"
              >
                raeyaanmuppaneni@gmail.com
              </a>
            </div>

            <div>
              <h3 className="heading-sm mb-2">Social</h3>
              <div className="flex gap-6">
                <a
                  href="https://github.com/raeyaan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--foreground)] hover:opacity-70 transition"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/raeyaan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--foreground)] hover:opacity-70 transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div>
              <h3 className="heading-sm mb-2">Location</h3>
              <p className="text-[var(--muted)]">Fremont, California, USA</p>
            </div>
          </div>
        </section>

        <div className="border-t border-[var(--border)] pt-12">
          <h2 className="heading-md mb-8">Send a Message</h2>

          {submitted && (
            <div className="p-4 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded mb-6 text-sm">
              ✓ Message sent successfully! I'll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-[var(--border)] rounded bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:border-[var(--foreground)] transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-[var(--border)] rounded bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:border-[var(--foreground)] transition"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-[var(--border)] rounded bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:border-[var(--foreground)] transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-2 border border-[var(--border)] rounded bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:border-[var(--foreground)] transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-[var(--foreground)] text-[var(--background)] rounded hover:opacity-90 transition font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </article>
    </div>
  );
}
