import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Smartphone, Calendar } from 'lucide-react';

const MobileAppShowcase: React.FC = () => {
  return (
    <section className="relative py-32 px-6 w-full max-w-7xl mx-auto">
      {/* Background Line Texture */}
      <div className="absolute inset-0 -z-10 bg-pattern-lines" />

      <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden">
        {/* Background Graphic */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500 rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/4" />
        
        <div className="flex flex-col lg:flex-row items-center gap-20 relative z-10">
           
           {/* Text Content */}
           <div className="flex-1 space-y-12">
             <h2 className="text-5xl md:text-7xl font-medium leading-[0.95] tracking-tight">
               Design that <br/>
               <span className="font-serif italic text-emerald-400">delights.</span>
             </h2>
             <p className="text-xl text-slate-400 max-w-md font-light leading-relaxed">
               A finance tracker that actually looks good. We focused on making every interaction feel magical.
             </p>

             <div className="grid gap-8">
               {[
                 { icon: Layers, title: "Premium Charts", desc: "Beautiful graphs that tell your financial story." },
                 { icon: Smartphone, title: "Haptic Touch", desc: "Feel your finances. Literally." },
                 { icon: Calendar, title: "Calendar View", desc: "Track daily spending in an intuitive timeline." }
               ].map((item, idx) => (
                 <div key={idx} className="flex gap-6 items-center group cursor-pointer">
                   <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center text-emerald-400 border border-slate-700 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-lg">
                     <item.icon className="w-7 h-7" />
                   </div>
                   <div>
                     <h4 className="text-2xl font-medium mb-1 group-hover:text-emerald-400 transition-colors">{item.title}</h4>
                     <p className="text-slate-500">{item.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>

           {/* Graphic Visual */}
           <div className="flex-1 flex justify-center lg:justify-end w-full">
              <div className="relative w-full max-w-[400px] aspect-square">
                 {/* Layer 1 - Transactions Card */}
                 <motion.div
                   animate={{ y: [0, -15, 0], rotate: [-3, 0, -3] }}
                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-8 left-0 w-72 h-[420px] bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 rounded-[2.5rem] shadow-2xl z-10 p-8 flex flex-col"
                 >
                    <div className="flex items-center justify-between mb-8">
                       <div className="text-white/90 text-sm font-medium uppercase tracking-wider">Recent Activity</div>
                       <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                    </div>

                    <div className="space-y-4 flex-1">
                       {[
                         { name: "Coffee & Co", amount: "-$4.50", time: "2m ago" },
                         { name: "Grocery Store", amount: "-$67.20", time: "1h ago" },
                         { name: "Monthly Salary", amount: "+$3,200", time: "2d ago" }
                       ].map((tx, i) => (
                         <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                           <div className="flex justify-between items-center mb-1">
                             <span className="text-white font-medium text-sm">{tx.name}</span>
                             <span className={`font-bold text-sm ${tx.amount.startsWith('+') ? 'text-white' : 'text-white/90'}`}>{tx.amount}</span>
                           </div>
                           <div className="text-white/50 text-xs">{tx.time}</div>
                         </div>
                       ))}
                    </div>
                 </motion.div>

                 {/* Layer 2 - Balance Card */}
                 <motion.div
                   animate={{ y: [0, 15, 0], rotate: [3, 0, 3] }}
                   transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-0 right-0 w-72 h-[420px] bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-[2.5rem] shadow-2xl z-20 p-8 flex flex-col justify-between border border-slate-700/50"
                 >
                    <div className="flex justify-between items-center">
                       <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                         <div className="w-5 h-5 rounded-lg bg-emerald-400"></div>
                       </div>
                       <div className="text-slate-500 text-xs font-medium uppercase tracking-wider">Balance</div>
                    </div>

                    <div className="text-center space-y-6">
                       <div>
                         <div className="text-6xl font-bold text-white mb-3">$842</div>
                         <div className="text-emerald-400 text-sm font-medium uppercase tracking-widest">Safe to spend</div>
                       </div>

                       <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                         <div className="h-full w-3/4 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></div>
                       </div>
                    </div>

                    <button className="h-14 bg-white hover:bg-gray-100 text-black rounded-full font-semibold text-base transition-all duration-300 shadow-lg">
                       Track Money
                    </button>
                 </motion.div>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default MobileAppShowcase;