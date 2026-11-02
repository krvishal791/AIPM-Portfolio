import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ContactButton } from './ContactButton';
import { Magnet } from './Magnet';

interface HeroSectionProps {
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, translateX: 0, translateY: 0 });
  const targetTimeRef = useRef(3.0);
  const currentTimeRef = useRef(3.0);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Explicitly enforce iOS WebKit attributes to bypass Apple's strict video policies
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.autoplay = false;
    video.loop = false;

    const handleLoadedMetadata = () => {
      const initialTime = Math.min(video.duration * 0.38, video.duration - 0.1);
      video.currentTime = initialTime;
      targetTimeRef.current = initialTime;
      currentTimeRef.current = initialTime;
    };

    // Prime iOS Safari decoder so frame renders immediately instead of showing a blank box
    const handleCanPlay = () => {
      video.play().then(() => {
        video.pause();
      }).catch(() => {
        video.pause();
      });
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('canplay', handleCanPlay, { once: true });

    if (video.readyState >= 1) {
      handleLoadedMetadata();
      handleCanPlay();
    } else {
      video.load();
    }

    // High-performance, lag-free animation frame loop
    const updateScrub = () => {
      if (video && video.duration > 0) {
        const diff = targetTimeRef.current - currentTimeRef.current;
        // Fast, smooth interpolation for responsive gaze tracking without stutter
        currentTimeRef.current += diff * 0.24;

        if (Math.abs(video.currentTime - currentTimeRef.current) > 0.015) {
          video.currentTime = currentTimeRef.current;
        }
      }
      animFrameRef.current = requestAnimationFrame(updateScrub);
    };

    animFrameRef.current = requestAnimationFrame(updateScrub);

    const handlePointerMove = (e: PointerEvent | TouchEvent) => {
      const clientX = 'touches' in e && e.touches[0] ? e.touches[0].clientX : (e as PointerEvent).clientX;
      const clientY = 'touches' in e && e.touches[0] ? e.touches[0].clientY : (e as PointerEvent).clientY;

      const width = window.innerWidth || 1;
      const height = window.innerHeight || 1;

      // Normalized coordinates from 0 to 1
      const normX = Math.min(Math.max(clientX / width, 0), 1);
      const normY = Math.min(Math.max(clientY / height, 0), 1);

      // 3D perspective tilt
      const centerX = width / 2;
      const centerY = height / 2;
      const dx = (clientX - centerX) / centerX;
      const dy = (clientY - centerY) / centerY;

      setTilt({
        rotateX: -dy * 8,
        rotateY: dx * 10,
        translateX: dx * 6,
        translateY: dy * 5,
      });

      // Frame scrubbing across video frames (duration ~8.04s):
      // Direct multi-axis mapping: cursor horizontal & vertical position directly moves character's face & eyes
      if (video && video.duration) {
        const maxDuration = Math.max(video.duration - 0.2, 0.5);
        const mappedTime = (normX * 0.7 + (1 - normY) * 0.3) * maxDuration;
        targetTimeRef.current = Math.min(Math.max(mappedTime, 0.05), maxDuration);
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('canplay', handleCanPlay);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#projects' },
    { label: 'Contact', href: '#contact', onClick: onContactClick },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: (typeof navLinks)[0]) => {
    if (link.onClick) {
      e.preventDefault();
      link.onClick();
      return;
    }
    const target = document.querySelector(link.href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* 1. Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full flex items-center justify-between px-6 md:px-12 pt-6 md:pt-8 z-30 relative"
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleNavClick(e, link)}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base lg:text-lg hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            {link.label}
          </a>
        ))}
      </motion.nav>

      {/* 2. Hero Heading - Significantly smaller to fit neatly on desktop without awkward wrapping */}
      <div className="w-full mt-2 sm:mt-4 md:mt-6 z-20 text-center relative pointer-events-none px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero-heading font-black uppercase tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto leading-tight"
        >
          Hi, I am Vishal
        </motion.h1>
      </div>

      {/* 3. Real-Time Cursor-Tracking Video Hero - Constrained & 100% responsive without face clipping */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        className="hero-portrait-wrap pointer-events-auto"
        id="magnetWrap"
        style={{
          transform: `translate(calc(-50% + ${tilt.translateX}px), calc(-50% + ${tilt.translateY}px)) perspective(900px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transition: 'transform 0.12s cubic-bezier(0.2, 0.8, 0.2, 1)',
          willChange: 'transform',
        }}
      >
        {/* Constrained container preventing any cutoff on mobile/tablet/desktop */}
        <div
          className="hero-portrait-inner relative overflow-hidden rounded-[24px] sm:rounded-[32px] md:rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-[#D7E2EA]/20 bg-[#121212] aspect-[9/14] flex items-center justify-center"
          id="magnetInner"
        >
          {/* Local attached video asset - explicit playsInline and muted for iOS Safari compliance */}
          <video
            ref={videoRef}
            muted
            playsInline
            autoPlay={false}
            loop={false}
            preload="auto"
            className="w-full h-full object-contain select-none pointer-events-none"
            {...({
              'webkit-playsinline': 'true',
              'x5-playsinline': 'true',
            } as React.HTMLAttributes<HTMLVideoElement>)}
          >
            <source src="/assets/aistudio/avt_650fbc55.mp4" type="video/mp4" />
          </video>

          {/* Interactive Tracking Hint */}
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 bg-black/65 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[9px] uppercase tracking-widest text-[#D7E2EA]/70 font-mono pointer-events-none whitespace-nowrap">
            Cursor Tracking Active
          </div>
        </div>
      </motion.div>

      {/* 4. Bottom bar */}
      <div className="w-full flex justify-between items-end pb-6 sm:pb-8 md:pb-10 px-6 md:px-12 z-30 relative pointer-events-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[#D7E2EA]/85 font-light uppercase tracking-wide leading-snug max-w-[190px] sm:max-w-[260px] md:max-w-[320px] text-xs sm:text-sm md:text-base"
        >
          AI Product Manager focused on product strategy, discovery, and high-impact systems
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Magnet strength={4} padding={30}>
            <ContactButton onClick={onContactClick} label="Connect" />
          </Magnet>
        </motion.div>
      </div>
    </section>
  );
};
