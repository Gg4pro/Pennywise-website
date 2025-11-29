
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollTo = (sectionId: string) => {
    setIsOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navbarHeight = 80; // 80px = h-20
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 300); // Increased timeout for route change
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 80; // 80px = h-20
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleNavigation = (path: string) => {
    setIsOpen(false);

    if (path === '/' && location.pathname === '/') {
      // If already on home page, smooth scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Navigate to path and scroll to top
      navigate(path);
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  const navItems = [
    { label: 'Features', id: 'features', type: 'scroll' },
    { label: 'How it works', id: 'how-it-works', type: 'scroll' },
    { label: 'Reviews', id: 'testimonials', type: 'scroll' },
    { label: 'About Us', path: '/about', type: 'page' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavigation('/')}>
            <img src="/images/pennywise-logo.png" alt="Pennywise" className="h-10" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => item.type === 'scroll' ? handleScrollTo(item.id!) : handleNavigation(item.path!)}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a href="https://apps.apple.com/si/app/pennywise-finance-tracker/id6754343519" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-3 bg-black text-white rounded-full font-medium text-sm transition-all hover:bg-slate-800 hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/20 flex items-center gap-2.5">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[8px] leading-none mb-0.5">Download on the</div>
                  <div className="text-base font-semibold leading-none">App Store</div>
                </div>
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6 flex flex-col items-center text-center">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => item.type === 'scroll' ? handleScrollTo(item.id!) : handleNavigation(item.path!)}
                  className="text-lg font-medium text-slate-900"
                >
                  {item.label}
                </button>
              ))}
              <a href="https://apps.apple.com/si/app/pennywise-finance-tracker/id6754343519" target="_blank" rel="noopener noreferrer" className="w-full">
                <button className="w-full py-4 bg-black text-white rounded-full font-medium transition-all hover:bg-slate-800 active:scale-95 shadow-lg shadow-slate-900/20 flex items-center justify-center gap-3">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[9px] leading-none mb-0.5">Download on the</div>
                    <div className="text-lg font-semibold leading-none">App Store</div>
                  </div>
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
