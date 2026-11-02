import React, { useState } from 'react';
import { Mail, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';
import { Magnet } from './Magnet';

export const ContactPlaceholderSection: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 3500);
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-[75vh] bg-[#0C0C0C] text-[#D7E2EA] px-6 md:px-12 pt-24 pb-16 border-t border-[#D7E2EA]/10 select-none"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-14">
        {/* Section Header */}
        <FadeIn delay={0} y={20}>
          <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-light">
            [ 03 // CONNECT ]
          </span>
          <h2
            className="hero-heading font-black uppercase tracking-tight leading-none mt-2"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 72px)' }}
          >
            Contact
          </h2>
        </FadeIn>

        {/* Layout Split: Channels & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Personal Showcase & Direct Info (5 Cols) */}
          <FadeIn delay={0.1} y={30} className="lg:col-span-5 flex flex-col gap-6">
            <div className="border border-[#D7E2EA]/20 bg-[#121212]/60 rounded-3xl p-8 flex flex-col gap-6 shadow-xl">
              {/* Profile Status Badge */}
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-medium">
                  Open to Opportunities & Conversations
                </span>
              </div>

              <h3 className="text-2xl font-black uppercase tracking-tight text-white leading-tight">
                Let&apos;s connect and discuss AI products.
              </h3>

              <p className="text-sm text-[#D7E2EA]/75 font-light leading-relaxed">
                Thank you for visiting my portfolio. I am always open to discussing AI product management, speculative prototypes, product strategy, or full-time opportunities.
              </p>

              <div className="flex flex-col gap-3.5 text-sm text-[#D7E2EA]/70 pt-4 border-t border-[#D7E2EA]/10 font-light">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#BBCCD7] shrink-0" />
                  <a
                    href="mailto:krvishal791@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    krvishal791@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-[#BBCCD7] shrink-0" />
                  <span>India</span>
                </div>
              </div>

              {/* Social Links: LinkedIn, GitHub, YouTube */}
              <div className="pt-4 border-t border-[#D7E2EA]/10 flex flex-wrap gap-2.5">
                {[
                  { label: 'LinkedIn', href: 'https://linkedin.com' },
                  { label: 'GitHub', href: 'https://github.com' },
                  { label: 'YouTube', href: 'https://www.youtube.com/@whyyshaal' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-wider px-4 py-1.5 rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA]/75 hover:text-white hover:border-[#D7E2EA]/50 transition-colors flex items-center gap-1.5 bg-white/5"
                  >
                    <span>{social.label}</span>
                    <ArrowUpRight size={12} />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Clean Interactive Form with Blank Placeholders (7 Cols) */}
          <FadeIn delay={0.2} y={30} className="lg:col-span-7">
            <div className="border border-[#D7E2EA]/20 bg-[#121212]/60 rounded-3xl p-8 sm:p-10 relative shadow-xl">
              {sent ? (
                <div className="py-16 flex flex-col items-center justify-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="text-2xl font-bold uppercase text-white tracking-wide">
                    Message Sent
                  </h4>
                  <p className="text-sm text-[#D7E2EA]/60 max-w-sm font-light">
                    Thank you for reaching out. I look forward to connecting with you.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-medium">
                        Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder=""
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-[#181818] border border-[#D7E2EA]/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-transparent focus:outline-none focus:border-[#D7E2EA]/50 transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-medium">
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        placeholder=""
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-[#181818] border border-[#D7E2EA]/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-transparent focus:outline-none focus:border-[#D7E2EA]/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full bg-[#181818] border border-[#D7E2EA]/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-transparent focus:outline-none focus:border-[#D7E2EA]/50 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-medium">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder=""
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-[#181818] border border-[#D7E2EA]/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-transparent focus:outline-none focus:border-[#D7E2EA]/50 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end">
                    <Magnet strength={4} padding={20}>
                      <ContactButton label="Send Message" />
                    </Magnet>
                  </div>
                </form>
              )}
            </div>
          </FadeIn>
        </div>

        {/* Minimal Footer Bar */}
        <div className="pt-10 border-t border-[#D7E2EA]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D7E2EA]/40 tracking-wider">
          <span>&copy; {new Date().getFullYear()} Vishal &bull; AI Product Manager. All Rights Reserved.</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-white transition-colors uppercase tracking-widest cursor-pointer"
          >
            Back to Top &uarr;
          </button>
        </div>
      </div>
    </section>
  );
};

