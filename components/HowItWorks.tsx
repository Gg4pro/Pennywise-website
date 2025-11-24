import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, TrendingUp, Eye, Zap } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Target,
      title: "Create your 12-month goal",
      description: "Set clear financial targets that matter to you. Whether it's building an emergency fund, saving for a dream purchase, or paying off debt, Pennywise helps you break down big goals into manageable monthly milestones.",
      color: "from-orange-400 to-pink-500",
      iconBg: "bg-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Track your cash flow daily",
      description: "Stay on top of your money with real-time insights. Monitor every penny coming in and going out, categorize expenses automatically, and understand exactly where your money goes each day.",
      color: "from-blue-400 to-cyan-500",
      iconBg: "bg-blue-500"
    },
    {
      icon: Eye,
      title: "Keep an eye on your insights",
      description: "Discover patterns in your spending with intelligent analytics. See exactly where your money is going, identify your biggest expense categories, and make smarter financial decisions based on clear, visual data.",
      color: "from-purple-400 to-pink-500",
      iconBg: "bg-purple-500"
    },
    {
      icon: Zap,
      title: "Stay committed and build lasting habits",
      description: "Transform your relationship with money through consistency. Daily reminders keep you on track while you develop the discipline and routines that lead to financial freedom and lasting success.",
      color: "from-green-400 to-teal-500",
      iconBg: "bg-amber-500"
    }
  ];

  // Auto-rotate features every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section id="how-it-works" className="relative py-16 md:py-24 lg:py-32 px-6 w-full">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-pattern-grid [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium text-slate-900 mb-6 leading-[0.95] tracking-tight">
          How it <span className="font-serif italic">works</span>
        </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-8 lg:gap-10 max-w-6xl mx-auto">

        {/* Left Side - iPhone Mockup */}
        <div className="w-full lg:flex-1 flex justify-center lg:justify-end lg:-ml-[274px]">
          <div className="relative w-full max-w-[240px] md:max-w-[260px] lg:max-w-[280px]">
            {/* iPhone Frame */}
            <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-20"></div>

              {/* Screen */}
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeFeature}
                    src={`/images/screen-${activeFeature + 1}.png`}
                    alt={features[activeFeature].title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full object-fill"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Feature List */}
        <div className="w-full lg:flex-1 space-y-4 md:space-y-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const isActive = idx === activeFeature;

            return (
              <motion.div
                key={idx}
                onClick={() => setActiveFeature(idx)}
                whileHover={{ x: 8 }}
                className={`cursor-pointer transition-all duration-300 ${
                  isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                }`}
              >
                <div className="flex gap-4 md:gap-5 items-start group">
                  <div className={`w-12 h-12 md:w-14 md:h-14 ${feature.iconBg} rounded-xl md:rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg transition-transform duration-300 ${
                    isActive ? 'scale-110' : 'scale-100 group-hover:scale-105'
                  }`}>
                    <Icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg md:text-xl lg:text-2xl font-medium mb-1 md:mb-2 transition-colors ${
                      isActive ? 'text-slate-900' : 'text-slate-600'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm md:text-base text-slate-500 leading-relaxed transition-all duration-300 ${
                      isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
