import React from 'react';
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import MobileAppShowcase from '../components/MobileAppShowcase';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

const Home: React.FC = () => {
  return (
    <main className="flex flex-col items-center w-full">
      <Hero />
      <Ticker />
      <Features />
      <HowItWorks />
      <MobileAppShowcase />
      <Testimonials />
      <CTASection />
    </main>
  );
};

export default Home;
