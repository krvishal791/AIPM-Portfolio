import React, { useRef, useState, useEffect } from 'react';

const ALL_GIFS = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

const ROW_1_ORIGINAL = ALL_GIFS.slice(0, 11);
const ROW_2_ORIGINAL = ALL_GIFS.slice(11);

// Tripled for seamless infinite ribbon illusion
const ROW_1 = [...ROW_1_ORIGINAL, ...ROW_1_ORIGINAL, ...ROW_1_ORIGINAL];
const ROW_2 = [...ROW_2_ORIGINAL, ...ROW_2_ORIGINAL, ...ROW_2_ORIGINAL];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const sectionTop = sectionRef.current.offsetTop;
            const currentY = window.scrollY;
            const innerH = window.innerHeight;
            // Scroll offset calculated as: (window.scrollY - sectionTop + window.innerHeight) * 0.3
            const calc = (currentY - sectionTop + innerH) * 0.3;
            setScrollOffset(calc);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Moves RIGHT on scroll: translateX(offset - 200)
  const row1Transform = `translateX(${scrollOffset - 200}px)`;
  // Moves LEFT on scroll: translateX(-(offset - 200))
  const row2Transform = `translateX(${-(scrollOffset - 200)}px)`;

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden select-none"
    >
      <div className="flex flex-col gap-3 w-full">
        {/* Row 1 - Moves Right */}
        <div
          className="flex gap-3 w-max"
          style={{
            transform: row1Transform,
            willChange: 'transform',
          }}
        >
          {ROW_1.map((src, idx) => (
            <div
              key={`r1-${idx}`}
              className="w-[420px] h-[270px] min-w-[420px] shrink-0 rounded-2xl overflow-hidden bg-[#181818] shadow-lg"
            >
              <img
                src={src}
                alt="3D Project Preview"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-2xl transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Row 2 - Moves Left */}
        <div
          className="flex gap-3 w-max"
          style={{
            transform: row2Transform,
            willChange: 'transform',
          }}
        >
          {ROW_2.map((src, idx) => (
            <div
              key={`r2-${idx}`}
              className="w-[420px] h-[270px] min-w-[420px] shrink-0 rounded-2xl overflow-hidden bg-[#181818] shadow-lg"
            >
              <img
                src={src}
                alt="3D Project Preview"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-2xl transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
