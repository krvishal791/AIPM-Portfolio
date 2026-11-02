import React from 'react';
import { Play, ArrowUpRight, ExternalLink, Sparkles, Target, Compass, AlertCircle, Clock } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const ProjectsPlaceholderSection: React.FC = () => {
  // Direct YouTube Shorts link for Blinkit Late-Night School Run
  const blinkitVideoUrl = 'https://www.youtube.com/shorts/HV9To9xT6GY';

  return (
    <section
      id="projects"
      className="relative w-full min-h-[75vh] bg-[#0C0C0C] text-[#D7E2EA] px-6 md:px-12 py-24 border-t border-[#D7E2EA]/10 select-none"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <FadeIn delay={0} y={20}>
          <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-light">
            [ 02 // FEATURED WORK ]
          </span>
          <h2
            className="hero-heading font-black uppercase tracking-tight leading-none mt-2"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 72px)' }}
          >
            Projects
          </h2>
        </FadeIn>

        {/* Featured PM Case Study Card */}
        <FadeIn delay={0.1} y={25}>
          <div className="border border-[#D7E2EA]/20 bg-[#121212]/80 hover:border-[#D7E2EA]/40 transition-all duration-300 rounded-3xl p-7 sm:p-10 shadow-2xl group">
            {/* Top Meta Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#D7E2EA]/10">
              <div className="flex items-center gap-2.5">
                <span className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold font-mono">
                  PM CASE STUDY // QUICK-COMMERCE
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#D7E2EA]/20 bg-white/5 text-xs text-[#D7E2EA]/80 font-mono">
                  <Clock size={12} className="text-[#BBCCD7]" />
                  <span>1m 31s AI Prototype</span>
                </div>
              </div>
            </div>

            {/* Main Content Layout: Structured PM Narrative + Video Preview */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mt-8 items-start">
              {/* Left / Narrative Column: Product Problem, The PM Approach, North Star Metric (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#BBCCD7]/70 font-semibold block mb-1">
                    Blinkit
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white tracking-tight leading-tight group-hover:text-[#BBCCD7] transition-colors">
                    Blinkit Late-Night School Run
                  </h3>
                </div>

                {/* 1. Product Problem */}
                <div className="flex flex-col gap-1.5 bg-[#171717]/80 rounded-2xl p-5 border border-white/5">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#BBCCD7] font-semibold">
                    <AlertCircle size={14} className="text-amber-400" />
                    <span>Product Problem</span>
                  </div>
                  <p className="text-sm text-[#D7E2EA]/85 font-light leading-relaxed">
                    Addressing the urgent, late-night supply needs of students and reducing friction in last-minute discovery.
                  </p>
                </div>

                {/* 2. The PM Approach */}
                <div className="flex flex-col gap-1.5 bg-[#171717]/80 rounded-2xl p-5 border border-white/5">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#BBCCD7] font-semibold">
                    <Compass size={14} className="text-sky-400" />
                    <span>The PM Approach</span>
                  </div>
                  <p className="text-sm text-[#D7E2EA]/85 font-light leading-relaxed">
                    Rapidly prototyped a Go-To-Market (GTM) visual concept using AI generative tools to validate the user journey and emotional hook before engineering investment.
                  </p>
                </div>

                {/* 3. North Star Metric */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-gradient-to-r from-emerald-950/30 to-[#171717]/90 rounded-2xl p-5 border border-emerald-500/25">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                    <Target size={15} className="text-emerald-400 shrink-0" />
                    <span>North Star Metric</span>
                  </div>
                  <span className="text-sm font-medium text-white sm:text-right">
                    Late-night order conversion rate and frequency.
                  </span>
                </div>
              </div>

              {/* Right / Media Column: Direct-Link Video Thumbnail + Actions (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col gap-5">
                {/* Clickable Video Thumbnail Anchor Tag */}
                <a
                  href={blinkitVideoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/thumb relative aspect-video w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#1d1d1d] to-[#0f0f0f] border border-white/15 flex items-center justify-center cursor-pointer shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                  aria-label="Watch Blinkit Late-Night School Run video on YouTube"
                >
                  <div className="absolute inset-0 bg-radial from-white/10 to-transparent pointer-events-none" />

                  {/* Play Button Icon */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover/thumb:scale-110 group-hover/thumb:bg-white/25 transition-transform duration-300 shadow-xl">
                    <Play size={26} className="text-white fill-white translate-x-0.5" />
                  </div>

                  {/* Bottom Badges */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="text-[11px] uppercase tracking-wider font-mono text-[#D7E2EA]/90 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-sm border border-white/10">
                      Watch Video &bull; 1:31
                    </span>
                    <span className="text-[11px] uppercase tracking-wider font-mono text-white px-2 py-1 rounded-md bg-red-600/80 backdrop-blur-sm flex items-center gap-1 shadow-sm">
                      YouTube <ArrowUpRight size={11} />
                    </span>
                  </div>
                </a>

                {/* Action Buttons as Standard Anchor Tags */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={blinkitVideoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#0C0C0C] font-semibold text-xs uppercase tracking-wider hover:bg-[#D7E2EA] transition-colors cursor-pointer shadow-md"
                  >
                    <Play size={13} className="fill-current" />
                    <span>View Project</span>
                    <ArrowUpRight size={13} />
                  </a>

                  <a
                    href={blinkitVideoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full border border-[#D7E2EA]/20 bg-white/5 text-xs uppercase tracking-wider text-[#D7E2EA]/80 hover:text-white hover:border-[#D7E2EA]/40 transition-colors"
                  >
                    <span>YouTube Link</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Micro-Tools & AI Prototypes Placeholder */}
        <FadeIn delay={0.2} y={25}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border border-dashed border-[#D7E2EA]/20 bg-[#121212]/30 rounded-3xl p-7 sm:p-8 transition-colors hover:border-[#D7E2EA]/35">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#BBCCD7] shrink-0">
                <Sparkles size={20} />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold uppercase tracking-wide text-white">
                  Micro-Tools & AI Prototypes
                </h4>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/50 font-light max-w-lg mt-0.5 leading-relaxed">
                  Space reserved for upcoming interactive AI tools, agentic workflows, and speculative product experiments.
                </p>
              </div>
            </div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#D7E2EA]/40 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] whitespace-nowrap self-start sm:self-center">
              Coming Soon
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
