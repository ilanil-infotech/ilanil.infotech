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
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Header with Bilingual English / தமிழ் Toggle */}
      <Header
        language={language}
        onToggleLanguage={toggleLanguage}
        onContactClick={scrollToContact}
      />

      <main className="flex-1">
        {/* Simple Punchy Hero */}
        <Hero
          language={language}
          onContactClick={scrollToContact}
        />

        {/* 4 Core Engineering Services */}
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

        {/* Straightforward Contact Form & Direct Email */}
        <ContactSection
          language={language}
          initialSubject={selectedService}
        />
      </main>

      {/* Clean Footer */}
      <Footer language={language} />
    </div>
  );
}
