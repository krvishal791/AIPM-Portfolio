import React from 'react';
import { FadeIn } from './FadeIn';

export const AboutPlaceholderSection: React.FC = () => {
  const coreCompetencies = ['North Star Metric'];

  return (
    <section
      id="about"
      className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] px-6 md:px-12 py-24 border-t border-[#D7E2EA]/10 select-none"
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <FadeIn delay={0} y={20}>
          <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-light">
            [ 01 // ABOUT ]
          </span>
          <h2
            className="hero-heading font-black uppercase tracking-tight leading-none mt-2"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 72px)' }}
          >
            About Me
          </h2>
        </FadeIn>

        {/* Minimal Bio & Discipline Container */}
        <FadeIn delay={0.1} y={25}>
          <div className="border border-[#D7E2EA]/20 bg-[#121212]/60 rounded-3xl p-8 sm:p-12 flex flex-col gap-8 shadow-xl">
            <p className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-relaxed">
              I am an AI product manager.
            </p>

            {/* Core Disciplines / Competencies - Single Tag */}
            <div className="pt-6 border-t border-[#D7E2EA]/10">
              <span className="block text-xs uppercase tracking-widest text-[#D7E2EA]/40 mb-3 font-medium">
                Core Disciplines & Competencies
              </span>
              <div className="flex flex-wrap gap-2.5">
                {coreCompetencies.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs uppercase tracking-wider px-4 py-2 rounded-full border border-[#D7E2EA]/30 text-white bg-white/5 font-medium tracking-wide shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

