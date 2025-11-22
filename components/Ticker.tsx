
import React from 'react';

const LOGOS = [
  "FinanceWeekly", "TechCrunch", "Forbes", "TheVerge", "Wired", "Bloomberg", 
  "CNBC", "WallStreetJ", "Investopedia", "Morningstar"
];

const Ticker: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 border-b border-slate-100 overflow-hidden">
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex space-x-20 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {LOGOS.concat(LOGOS).map((logo, index) => (
            <span key={index} className="text-3xl font-serif italic font-bold cursor-default">
              {logo}
            </span>
          ))}
        </div>
        
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex space-x-20 ml-20 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {LOGOS.concat(LOGOS).map((logo, index) => (
            <span key={`dup-${index}`} className="text-3xl font-serif italic font-bold cursor-default">
              {logo}
            </span>
          ))}
        </div>
      </div>
      
      <style>{`
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
};

export default Ticker;
