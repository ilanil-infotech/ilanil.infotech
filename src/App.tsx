/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');

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
      {/* Clean Header */}
      <Header onContactClick={scrollToContact} />

      <main className="flex-1">
        {/* Simple Punchy Hero */}
        <Hero onContactClick={scrollToContact} />

        {/* 4 Core Services */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Straightforward Contact Form & Email */}
        <ContactSection initialSubject={selectedService} />
      </main>

      {/* Clean Footer */}
      <Footer />
    </div>
  );
}
