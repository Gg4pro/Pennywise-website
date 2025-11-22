
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="font-medium text-2xl tracking-tight text-slate-900">
              Penny<span className="font-serif italic text-3xl">wise</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Features', 'How it works', 'Reviews', 'Pricing'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s/g, '-')}`} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                {item}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
             <button className="text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors">
              Log in
            </button>
            <button className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-all hover:scale-105 active:scale-95">
              Get the app
            </button>
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
              <a href="#features" className="text-lg font-medium text-slate-900" onClick={() => setIsOpen(false)}>Features</a>
              <a href="#how-it-works" className="text-lg font-medium text-slate-900" onClick={() => setIsOpen(false)}>How it works</a>
              <a href="#testimonials" className="text-lg font-medium text-slate-900" onClick={() => setIsOpen(false)}>Reviews</a>
              <button className="w-full py-3 bg-slate-900 text-white font-medium rounded-full">
                Get Pennywise
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
