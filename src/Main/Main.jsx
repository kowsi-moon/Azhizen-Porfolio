import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutUsSection from '../components/AboutUsSection';
import FoundersSection from '../components/FoundersSection';

const Main = () => {
  return (
    <div className="font-sans">
      {/* Add padding-top to account for the fixed navbar height */}
      <div className="pt-16">
        <HeroSection />
        <section id="services">
          <ServicesSection />
        </section>
        <AboutUsSection />
        <FoundersSection />
      </div>
    </div>
  );
};

export default Main;