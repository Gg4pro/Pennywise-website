import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Smartphone, Share2 } from 'lucide-react';

const MobileAppShowcase: React.FC = () => {
  return (
    <section id="how-it-works" className="relative py-32 px-6 w-full max-w-7xl mx-auto">
      {/* Background Line Texture */}
      <div className="absolute inset-0 -z-10 bg-pattern-lines" />

      <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden">
        {/* Background Graphic */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600 rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/4" />
        
        <div className="flex flex-col lg:flex-row items-center gap-20 relative z-10">
           
           {/* Text Content */}
           <div className="flex-1 space-y-12">
             <h2 className="text-5xl md:text-7xl font-medium leading-[0.95] tracking-tight">
               Design that <br/>
               <span className="font-serif italic text-purple-400">delights.</span>
             </h2>
             <p className="text-xl text-slate-400 max-w-md font-light leading-relaxed">
               A finance tracker that actually looks good. We focused on making every interaction feel magical.
             </p>

             <div className="grid gap-8">
               {[
                 { icon: Layers, title: "Smart Stacks", desc: "Organize subscriptions automatically." },
                 { icon: Smartphone, title: "Haptic Touch", desc: "Feel your finances. Literally." },
                 { icon: Share2, title: "Family Sharing", desc: "Manage household budgets together." }
               ].map((item, idx) => (
                 <div key={idx} className="flex gap-6 items-center group cursor-pointer">
                   <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center text-purple-400 border border-slate-700 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 shadow-lg">
                     <item.icon className="w-7 h-7" />
                   </div>
                   <div>
                     <h4 className="text-2xl font-medium mb-1 group-hover:text-purple-400 transition-colors">{item.title}</h4>
                     <p className="text-slate-500">{item.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>

           {/* Graphic Visual */}
           <div className="flex-1 flex justify-center lg:justify-end w-full">
              <div className="relative w-full max-w-[400px] aspect-square">
                 {/* Layer 1 */}
                 <motion.div 
                   animate={{ y: [0, -20, 0], rotate: [6, 3, 6] }}
                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-0 left-0 w-64 h-80 bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl shadow-2xl z-10 flex items-center justify-center"
                 >
                    <span className="text-white font-mono text-sm opacity-50 transform -rotate-90 absolute -left-8">TRANSACTIONS</span>
                    <div className="w-full px-6 space-y-3">
                       <div className="h-3 bg-white/20 rounded w-3/4"></div>
                       <div className="h-3 bg-white/20 rounded w-1/2"></div>
                       <div className="h-3 bg-white/10 rounded w-full"></div>
                       <div className="h-3 bg-white/10 rounded w-5/6"></div>
                    </div>
                 </motion.div>

                 {/* Layer 2 */}
                 <motion.div 
                   animate={{ y: [0, 20, 0], rotate: [-6, -3, -6] }}
                   transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-10 right-0 w-64 h-80 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-3xl shadow-2xl z-20 flex flex-col p-6 justify-between"
                 >
                    <div className="flex justify-between items-center">
                       <div className="w-8 h-8 rounded-full bg-white/20"></div>
                       <div className="w-16 h-6 rounded-full bg-white/20"></div>
                    </div>
                    <div className="text-center">
                       <div className="text-4xl font-bold text-white mb-2">$842</div>
                       <div className="text-white/60 text-xs uppercase tracking-widest">Safe to spend</div>
                    </div>
                    <div className="h-10 bg-white text-indigo-600 rounded-xl flex items-center justify-center font-bold text-sm">
                       Add Funds
                    </div>
                 </motion.div>
                 
                 {/* Floating Particle */}
                 <div className="absolute -bottom-10 left-10 w-20 h-20 bg-yellow-400 rounded-full blur-xl opacity-60 animate-pulse"></div>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default MobileAppShowcase;