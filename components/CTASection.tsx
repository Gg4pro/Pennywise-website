
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="w-full px-6 pb-24 pt-10">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-[3rem] overflow-hidden relative shadow-2xl shadow-blue-200 text-center px-6 py-24 md:py-32">

         {/* Abstract Shapes */}
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-35 pointer-events-none">
             <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
             <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
         </div>

         <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-medium text-white mb-8 leading-[0.9] tracking-tighter">
              Take control <br/>
              <span className="font-serif italic text-white/90">of your money.</span>
            </h2>
            <p className="text-blue-100 text-xl md:text-2xl mb-12 font-light">
               Your future self will thank you for the choices you make today.
            </p>

            <div className="flex justify-center">
              <a href="https://apps.apple.com/si/app/pennywise-finance-tracker/id6754343519" target="_blank" rel="noopener noreferrer">
                <button className="px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all shadow-lg">
                  Get started now
                </button>
              </a>
            </div>
         </div>
      </div>
    </section>
  );
};

export default CTASection;
