
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, PieChart, DollarSign, CreditCard } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 w-full overflow-hidden lg:overflow-visible">
      {/* Background Grid Texture - Masked to fade out at bottom */}
      <div className="absolute inset-0 -z-10 bg-pattern-grid [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left z-10"
        >
          {/* Typography: 
              - Inter: Bold (700) + Tighter Tracking (-0.05em) 
              - Serif: Medium (500) override to match the 'Features' section style and avoid 700-weight distortion
          */}
          <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-semibold text-black leading-[0.9] tracking-tighter mb-6 text-balance">
            The road to <span className="font-serif italic font-medium">financial</span> freedom <br />
            starts with a single <span className="font-serif italic font-medium">penny.</span>
          </h1>

          {/* SEO-optimized subtitle with target keywords */}
          <p className="text-lg md:text-xl text-slate-700 font-semibold mb-4 max-w-lg mx-auto lg:mx-0 tracking-tight">
            The simple budget app & expense tracker that helps you take control of your money.
          </p>

          {/* Screen reader text for additional SEO context */}
          <span className="sr-only">
            Pennywise is a free budget app and expense tracker for iOS that helps you manage your personal finances, track spending, and build better money habits.
          </span>

          <p className="text-lg text-slate-500 font-medium mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed tracking-tight">
            Stop stressing and start enjoying your life with a simple financial plan you can actually stick to.
          </p>

          <div className="flex items-center justify-center lg:justify-start">
            <a href="https://apps.apple.com/si/app/pennywise-finance-tracker/id6754343519" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 bg-black text-white rounded-full font-medium text-base transition-all hover:bg-slate-800 hover:scale-105 active:scale-95 shadow-xl shadow-slate-900/20 flex items-center gap-3">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-none mb-0.5">Download on the</div>
                  <div className="text-xl font-semibold leading-none">App Store</div>
                </div>
              </button>
            </a>
          </div>
        </motion.div>

        {/* Right Visual - Pure CSS Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 relative w-full flex justify-center lg:justify-end perspective-1000 pt-10 lg:pt-0"
        >
          {/* Abstract Gradient Card Background */}
          {/* Mobile Optimization: 
              - Reduced max-width on mobile (max-w-[320px]) to fit narrow screens
              - Reduced height on mobile (h-[460px])
              - Reduced rotation on mobile (rotate-[-3deg]) to save horizontal space
          */}
          <div className="relative w-full max-w-[320px] md:max-w-[450px] h-[460px] md:h-[600px] bg-gradient-to-br from-[#FFDEE9] to-[#B5FFFC] rounded-[2.5rem] md:rounded-[3rem] rotate-[-3deg] md:rotate-[-6deg] hover:rotate-0 transition-all duration-700 shadow-2xl border-4 border-white mx-auto lg:mx-0">
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-24 md:w-32 h-24 md:h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-24 md:w-32 h-24 md:h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            
            {/* Main Dashboard Card */}
            <div className="absolute inset-3 md:inset-4 bg-white/90 backdrop-blur-xl rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-6 shadow-inner flex flex-col justify-between overflow-hidden">
               
               {/* Header */}
               <div className="flex justify-between items-center mb-4 md:mb-6">
                 <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden">
                   <img src="/images/pennywise-icon.png" alt="Pennywise budget app icon" className="w-full h-full object-cover" />
                 </div>
                 <div className="w-8 h-8 rounded-full bg-slate-200"></div>
               </div>

               {/* Balance */}
               <div className="mb-6 md:mb-8">
                 <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-wider">Total Balance</p>
                 <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tighter">$24,500</h2>
                 <div className="inline-flex items-center gap-1 mt-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs md:text-sm font-bold">
                   <TrendingUp className="w-3 h-3" /> +12.5%
                 </div>
               </div>

               {/* Abstract Chart */}
               <div className="flex-1 flex items-end justify-between gap-2 mb-6">
                 {[40, 70, 50, 90, 60, 80, 50].map((h, i) => (
                   <div key={i} className="w-full bg-slate-100 rounded-t-lg relative group overflow-hidden" style={{ height: `${h}%` }}>
                     <div className="absolute bottom-0 left-0 w-full bg-black transition-all duration-500 h-0 group-hover:h-full" />
                   </div>
                 ))}
               </div>

               {/* Bottom Widgets */}
               <div className="grid grid-cols-2 gap-3">
                 <div className="bg-orange-50 p-3 md:p-4 rounded-2xl border border-orange-100">
                   <PieChart className="w-5 h-5 md:w-6 md:h-6 text-orange-500 mb-2" />
                   <div className="h-2 w-12 bg-orange-200 rounded mb-1"></div>
                   <div className="h-2 w-8 bg-orange-100 rounded"></div>
                 </div>
                 <div className="bg-purple-50 p-3 md:p-4 rounded-2xl border border-purple-100">
                   <CreditCard className="w-5 h-5 md:w-6 md:h-6 text-purple-500 mb-2" />
                   <div className="h-2 w-12 bg-purple-200 rounded mb-1"></div>
                   <div className="h-2 w-8 bg-purple-100 rounded"></div>
                 </div>
               </div>

            </div>

            {/* Floating Elements - Tucked in closer on mobile to prevent cutoff */}
            <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-16 md:top-20 -right-4 md:-right-12 bg-white p-3 md:p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-20 scale-90 md:scale-100"
            >
               <div className="w-8 h-8 md:w-10 md:h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <DollarSign className="w-5 h-5 md:w-6 md:h-6" />
               </div>
               <div>
                  <p className="text-[10px] md:text-xs text-slate-400 font-bold">INCOME</p>
                  <p className="text-base md:text-lg font-bold text-black">+$4,200</p>
               </div>
            </motion.div>

            <motion.div 
               animate={{ y: [0, 15, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute bottom-24 md:bottom-32 -left-4 md:-left-12 bg-black p-3 md:p-4 rounded-2xl shadow-xl flex items-center gap-3 text-white z-20 scale-90 md:scale-100"
            >
               <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center text-white">
                  <PieChart className="w-4 h-4 md:w-5 md:h-5" />
               </div>
               <div>
                  <p className="text-[10px] md:text-xs text-white/60 font-bold">BUDGET</p>
                  <p className="text-base md:text-lg font-bold">On Track</p>
               </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
