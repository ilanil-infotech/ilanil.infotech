/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { TamilNaduSolutions } from './components/TamilNaduSolutions';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LiquidMeshBackground } from './components/LiquidMeshBackground';

export default function App() {
  const [language, setLanguage] = useState<'en' | 'ta'>('en');
  const [selectedService, setSelectedService] = useState<string>('');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'ta' : 'en'));
  };

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#f2f6f3] text-[#1e293b] flex flex-col font-sans selection:bg-[#52796f] selection:text-white relative overflow-x-hidden">
      {/* 
        Animated flowing liquid/aurora mesh blobs in soft sage and mineral greens:
        #a3c4b2, #84a98c, #b7e4c7, #52796f (strictly no neon).
        Renders underneath all translucent frosted glass cards to provide physical refraction.
      */}
      <LiquidMeshBackground />

      {/* Apple VisionOS Floating Pill Header */}
      <Header
        language={language}
        onToggleLanguage={toggleLanguage}
        onContactClick={scrollToContact}
      />

      <main className="flex-1 relative z-10">
        {/* Hero with 3D VisionOS Glass & Multi-Layer Parallax */}
        <Hero
          language={language}
          onContactClick={scrollToContact}
        />

        {/* 4 Core Engineering Services in 3D Frosted Glass Cards */}
        <ServicesSection
          language={language}
          onSelectService={handleSelectService}
        />

        {/* Tamil Nadu Business Solutions Showcase */}
        <TamilNaduSolutions
          language={language}
          onSelectSolution={handleSelectService}
        />

        {/* Why Choose Us & Trust Pillars */}
        <WhyChooseUs language={language} />

        {/* VisionOS Frosted Glass Contact Hub */}
        <ContactSection
          language={language}
          initialSubject={selectedService}
        />
      </main>

      {/* Deep Eucalyptus Slate Architectural Footer */}
      <Footer language={language} />
    </div>
  );
}
