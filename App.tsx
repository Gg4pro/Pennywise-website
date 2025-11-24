import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import MobileAppShowcase from './components/MobileAppShowcase';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CTASection from './components/CTASection';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen selection:bg-purple-200 selection:text-purple-900">
      {/* Global Noise Texture */}
      <div className="bg-noise" />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-purple-600 origin-left z-50"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main className="flex flex-col items-center w-full">
        <Hero />
        <Ticker />
        <Features />
        <HowItWorks />
        <MobileAppShowcase />
        <Testimonials />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default App;