import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Database, TrendingUp, Bell } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Camera,
      title: "Track Your Food With Just a Picture",
      description: "Snap a photo with Pennywise, and your phone's depth sensor calculates food volume. Our AI then analyzes and breaks down your meal to determine calories, protein, carbs, and fat.",
      color: "from-orange-400 to-pink-500",
      iconBg: "bg-orange-500"
    },
    {
      icon: Database,
      title: "Search Our Database of over 1 million foods",
      description: "Quickly find and log foods from our extensive database. Search by name, brand, or scan barcodes for instant nutritional information.",
      color: "from-blue-400 to-cyan-500",
      iconBg: "bg-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Complete Progress Tracking and AI suggestions",
      description: "Monitor your weight, measurements, and nutrition goals. Get personalized AI suggestions to stay on track and optimize your diet.",
      color: "from-purple-400 to-pink-500",
      iconBg: "bg-purple-500"
    },
    {
      icon: Bell,
      title: "Keep track of your water and daily exercise",
      description: "Log your water intake and daily exercise effortlessly. Cal AI helps you stay hydrated and active, integrating seamlessly with your fitness routine.",
      color: "from-green-400 to-teal-500",
      iconBg: "bg-green-500"
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
    <section className="relative py-32 px-6 w-full max-w-7xl mx-auto">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-pattern-grid [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />

      <div className="mb-16 text-center">
        <h2 className="text-5xl md:text-7xl font-medium text-slate-900 mb-6 leading-[0.95] tracking-tight">
          How it <span className="font-serif italic">works</span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 max-w-6xl mx-auto">

        {/* Left Side - iPhone Mockup */}
        <div className="flex-1 flex justify-center lg:justify-end lg:-ml-[274px]">
          <div className="relative w-full max-w-[280px]">
            {/* iPhone Frame */}
            <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-20"></div>

              {/* Screen */}
              <div className="relative bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 bg-gradient-to-br ${features[activeFeature].color} p-6 flex flex-col justify-between`}
                  >
                    {/* Header */}
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-white/80 font-bold">12:48 PM</div>
                      <div className="flex gap-1">
                        <div className="w-1 h-1 bg-white/80 rounded-full"></div>
                        <div className="w-1 h-1 bg-white/80 rounded-full"></div>
                        <div className="w-1 h-1 bg-white/80 rounded-full"></div>
                      </div>
                    </div>

                    {/* Content based on feature */}
                    {activeFeature === 0 && (
                      <div className="flex-1 flex flex-col items-center justify-center">
                        <div className="w-40 h-40 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center mb-4">
                          <Camera className="w-20 h-20 text-white" />
                        </div>
                        <div className="bg-white/90 backdrop-blur rounded-2xl p-4 w-full">
                          <h4 className="font-bold text-slate-900 mb-1">Salmon and Broccoli Tray Bake</h4>
                          <div className="flex justify-between text-sm text-slate-600">
                            <div><span className="font-bold text-orange-600">621</span> cal</div>
                            <div><span className="font-bold">52g</span> protein</div>
                          </div>
                          <div className="mt-3 h-2 bg-green-200 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 rounded-full" style={{ width: '70%' }}></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeFeature === 1 && (
                      <div className="flex-1 flex flex-col justify-center space-y-3 px-2">
                        <div className="bg-white/90 backdrop-blur rounded-xl p-3 flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg"></div>
                          <div className="flex-1">
                            <div className="h-2 bg-slate-200 rounded w-3/4 mb-1"></div>
                            <div className="h-2 bg-slate-100 rounded w-1/2"></div>
                          </div>
                        </div>
                        <div className="bg-white/90 backdrop-blur rounded-xl p-3 flex items-center gap-3">
                          <div className="w-10 h-10 bg-green-100 rounded-lg"></div>
                          <div className="flex-1">
                            <div className="h-2 bg-slate-200 rounded w-2/3 mb-1"></div>
                            <div className="h-2 bg-slate-100 rounded w-1/3"></div>
                          </div>
                        </div>
                        <div className="bg-white/90 backdrop-blur rounded-xl p-3 flex items-center gap-3">
                          <div className="w-10 h-10 bg-purple-100 rounded-lg"></div>
                          <div className="flex-1">
                            <div className="h-2 bg-slate-200 rounded w-3/5 mb-1"></div>
                            <div className="h-2 bg-slate-100 rounded w-2/5"></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeFeature === 2 && (
                      <div className="flex-1 flex flex-col justify-center items-center">
                        <div className="text-white text-center mb-6">
                          <div className="text-5xl font-bold mb-2">7/10</div>
                          <div className="text-white/80 text-sm font-medium">Health Score</div>
                        </div>
                        <div className="w-full space-y-3">
                          <div className="bg-white/90 backdrop-blur rounded-xl p-3">
                            <div className="flex justify-between text-xs text-slate-600 mb-1">
                              <span className="font-bold">Protein</span>
                              <span>52g / 60g</span>
                            </div>
                            <div className="h-2 bg-purple-200 rounded-full overflow-hidden">
                              <div className="h-full bg-purple-500 rounded-full" style={{ width: '87%' }}></div>
                            </div>
                          </div>
                          <div className="bg-white/90 backdrop-blur rounded-xl p-3">
                            <div className="flex justify-between text-xs text-slate-600 mb-1">
                              <span className="font-bold">Carbs</span>
                              <span>90g / 150g</span>
                            </div>
                            <div className="h-2 bg-pink-200 rounded-full overflow-hidden">
                              <div className="h-full bg-pink-500 rounded-full" style={{ width: '60%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeFeature === 3 && (
                      <div className="flex-1 flex flex-col justify-center space-y-4">
                        <div className="bg-white/90 backdrop-blur rounded-2xl p-5 text-center">
                          <div className="text-4xl font-bold text-slate-900 mb-1">2.4L</div>
                          <div className="text-sm text-slate-600">Water today</div>
                          <div className="mt-3 flex justify-center gap-1">
                            {[1, 1, 1, 1, 1, 0.5, 0, 0].map((opacity, i) => (
                              <div key={i} className="w-6 h-8 bg-blue-500 rounded-full" style={{ opacity }}></div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-white/90 backdrop-blur rounded-2xl p-5 text-center">
                          <div className="text-3xl font-bold text-slate-900 mb-1">45 min</div>
                          <div className="text-sm text-slate-600">Exercise today</div>
                        </div>
                      </div>
                    )}

                    {/* Bottom indicator */}
                    <div className="flex justify-center gap-1.5 pb-2">
                      {features.map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            idx === activeFeature ? 'bg-white w-6' : 'bg-white/40 w-1.5'
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Feature List */}
        <div className="flex-1 space-y-6">
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
                <div className="flex gap-5 items-start group">
                  <div className={`w-14 h-14 ${feature.iconBg} rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg transition-transform duration-300 ${
                    isActive ? 'scale-110' : 'scale-100 group-hover:scale-105'
                  }`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-medium mb-2 transition-colors ${
                      isActive ? 'text-slate-900' : 'text-slate-600'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-slate-500 leading-relaxed transition-all duration-300 ${
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
    </section>
  );
};

export default HowItWorks;
