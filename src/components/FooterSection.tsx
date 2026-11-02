import React from 'react';
import { ArrowUp, Instagram, Twitter, Dribbble, Globe } from 'lucide-react';
import { ContactButton } from './ContactButton';
import { Magnet } from './Magnet';

interface FooterSectionProps {
  onContactClick: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onContactClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="w-full bg-[#0C0C0C] text-[#D7E2EA] px-6 md:px-12 py-16 border-t border-[#D7E2EA]/10 select-none">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-between gap-10 md:flex-row">
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
          <span className="hero-heading font-black text-3xl uppercase tracking-wider">
            MINA
          </span>
          <p className="text-sm font-light text-[#D7E2EA]/60 max-w-xs">
            Crafting striking 3D worlds, tactile motion identities & digital sculptures.
          </p>
        </div>

        {/* Center Contact CTA */}
        <div className="flex flex-col items-center space-y-4">
          <Magnet strength={4} padding={20}>
            <ContactButton onClick={onContactClick} label="Get In Touch" />
          </Magnet>
          <span className="text-xs tracking-widest uppercase text-[#D7E2EA]/40">
            Available for select client projects & art commissions
          </span>
        </div>

        {/* Socials & Back to Top */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="flex items-center gap-4 text-[#D7E2EA]/70">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-white transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dribbble"
              className="hover:text-white transition-colors"
            >
              <Dribbble size={20} />
            </a>
            <a
              href="https://artstation.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Portfolio"
              className="hover:text-white transition-colors"
            >
              <Globe size={20} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D7E2EA]/50 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-[#D7E2EA]/5 text-center text-xs text-[#D7E2EA]/40 tracking-wider">
        &copy; {new Date().getFullYear()} Mina -- 3D Creator. All rights reserved.
      </div>
    </footer>
  );
};
