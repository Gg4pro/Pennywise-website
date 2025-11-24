
import React from 'react';

const WORDS = [
  "Save", "Track", "Budget", "Manage", "Grow", "Plan", "Organize", "Achieve"
];

const Ticker: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 border-b border-slate-100 overflow-hidden">
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex space-x-20 opacity-40 hover:opacity-100 transition-all duration-500">
          {WORDS.concat(WORDS).map((word, index) => (
            <span key={index} className="text-3xl font-serif italic font-bold cursor-default">
              {word}
            </span>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex space-x-20 ml-20 opacity-40 hover:opacity-100 transition-all duration-500">
          {WORDS.concat(WORDS).map((word, index) => (
            <span key={`dup-${index}`} className="text-3xl font-serif italic font-bold cursor-default">
              {word}
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
