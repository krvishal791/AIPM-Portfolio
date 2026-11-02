import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutPlaceholderSection } from './components/AboutPlaceholderSection';
import { ProjectsPlaceholderSection } from './components/ProjectsPlaceholderSection';
import { ContactPlaceholderSection } from './components/ContactPlaceholderSection';
import { ContactModal } from './components/ContactModal';

export const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <main
      className="relative w-full min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif]"
      style={{ overflowX: 'clip' }}
    >
      {/* Top header & interactive cursor-tracking video hero section */}
      <HeroSection onContactClick={openContact} />

      {/* Clean empty layout structure: About Me */}
      <AboutPlaceholderSection />

      {/* Clean empty layout structure: Projects showcase grid */}
      <ProjectsPlaceholderSection />

      {/* Clean empty layout structure: Contact */}
      <ContactPlaceholderSection />

      {/* Interactive Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </main>
  );
};

export default App;
