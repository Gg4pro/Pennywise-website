import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Zap, Shield, Bell, CreditCard, ArrowRight } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="relative py-32 px-6 w-full max-w-7xl mx-auto">
      {/* Background Dots Texture */}
      <div className="absolute inset-0 -z-10 bg-pattern-dots [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />

      <div className="mb-20 text-center">
        <h2 className="text-5xl md:text-7xl font-medium text-slate-900 mb-6 leading-[0.95] tracking-tight">
          Everything you need. <br/>
          <span className="font-serif italic text-slate-900">Nothing you don't.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(280px,auto)]">
        
        {/* Card 1: Smart Insights (Vibrant Gradient) */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="md:col-span-2 bg-gradient-to-br from-orange-400 to-pink-500 rounded-[2.5rem] p-10 text-white flex flex-col justify-between relative overflow-hidden group shadow-2xl shadow-orange-200"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

          <div className="relative z-10">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6">
              <PieChart className="w-7 h-7" />
            </div>
            <h3 className="text-3xl font-medium mb-2">Smart Insights</h3>
            <p className="text-white/80 max-w-sm font-medium text-lg">
              Turn your spending data into actionable insights with intelligent visual breakdowns.
            </p>
          </div>

          {/* Graphic Representation */}
          <div className="mt-8 flex gap-2 items-end h-24">
             {[30, 50, 40, 75, 55, 90, 65].map((h, i) => (
                <div key={i} className="flex-1 bg-white/30 rounded-t-md backdrop-blur-sm transition-all duration-500 group-hover:bg-white/50" style={{ height: `${h}%` }} />
             ))}
          </div>
        </motion.div>

        {/* Card 2: Goal Setting (Dark) */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="md:col-span-1 bg-slate-900 rounded-[2.5rem] p-8 flex flex-col justify-between shadow-xl text-white relative overflow-hidden"
        >
          <div className="absolute -right-4 -top-4 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl" />
          <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-white mb-4 border border-slate-700">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-medium mb-2">Goal Setting</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Build lasting financial habits with personalized 12-month goals that adapt to your lifestyle.</p>
          </div>
        </motion.div>

        {/* Card 3: Security (Blue) */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="md:col-span-1 bg-blue-600 rounded-[2.5rem] p-8 flex flex-col justify-between hover:bg-blue-500 hover:shadow-xl transition-all duration-300 text-white"
        >
          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-sm border border-blue-400">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-medium text-white mb-2">Secure</h3>
            <p className="text-blue-100 text-sm leading-relaxed">Your data protected with military-grade encryption.</p>
          </div>
        </motion.div>

        {/* Card 4: Auto Card Tracking (Big Graphic) */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="md:col-span-2 bg-[#E3F2FD] rounded-[2.5rem] p-10 relative overflow-hidden group"
        >
           <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                 <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/30">
                  <CreditCard className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-medium text-slate-900 mb-2">Auto Card Tracking</h3>
                <p className="text-slate-600 text-lg max-w-xs">
                  Link your card once and watch transactions sync automatically. No manual entry, no hassle. (Coming soon)
                </p>
              </div>

              {/* Abstract Card Graphic */}
              <div className="absolute bottom-4 -right-8 w-48 h-32 md:w-64 md:h-40 md:-bottom-12 md:-right-12 bg-blue-600 rounded-2xl shadow-2xl transform -rotate-12 group-hover:-rotate-6 transition-all duration-500 flex flex-col justify-between p-4 md:p-5 border-t border-white/20">
                 <div className="flex justify-between">
                   <div className="w-6 h-4 md:w-8 md:h-5 bg-white/20 rounded"></div>
                   <div className="text-white/50 font-mono text-[10px] md:text-xs">DEBIT</div>
                 </div>
                 <div className="text-white/80 font-mono tracking-widest text-xs md:text-sm">**** 4242</div>
              </div>
           </div>
        </motion.div>

        {/* Card 5: Smart Alerts (Purple) */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="md:col-span-1 bg-purple-600 rounded-[2.5rem] p-8 text-white shadow-xl shadow-purple-200 flex flex-col justify-between group"
        >
          <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center text-white mb-6">
            <Bell className="w-6 h-6 group-hover:animate-swing" />
          </div>
          <div>
             <h3 className="text-2xl font-medium mb-2">Smart Alerts</h3>
             <p className="text-white/90 text-sm">Stay informed with timely notifications that keep your budget on track.</p>
          </div>
        </motion.div>

        {/* Card 6: Call to Action Card (Green) */}
        <motion.div
          whileHover={{ scale: 0.98 }}
          className="md:col-span-1 bg-emerald-500 rounded-[2.5rem] p-8 shadow-xl flex flex-col justify-center items-center text-center gap-4 cursor-pointer group"
        >
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
             <ArrowRight className="w-8 h-8 text-emerald-500 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          </div>
          <h3 className="text-2xl font-medium text-white leading-tight font-serif italic">Start your journey</h3>
        </motion.div>

      </div>
    </section>
  );
};

export default Features;