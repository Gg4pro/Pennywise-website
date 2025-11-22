import React from 'react';

const REVIEWS = [
  {
    initials: "SJ",
    color: "bg-pink-500",
    name: "Sarah Jenkins",
    role: "Freelancer",
    text: "I used to be scared to look at my bank account. Pennywise makes it actually fun. The UI is just gorgeous."
  },
  {
    initials: "MR",
    color: "bg-indigo-500",
    name: "Mike Ross",
    role: "Product Designer",
    text: "As a designer, I appreciate the attention to detail. The animations are buttery smooth. Best finance app period."
  },
  {
    initials: "JL",
    color: "bg-orange-500",
    name: "Jessica Lee",
    role: "Student",
    text: "The budgeting features saved me so much money this semester. Highly recommend for anyone trying to save."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="relative py-32 px-6 w-full max-w-7xl mx-auto">
       {/* Background Grid Texture */}
      <div className="absolute inset-0 -z-10 bg-pattern-grid [mask-image:linear-gradient(to_bottom,transparent_0%,black_50%,transparent_100%)]" />

      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-medium text-slate-900 mb-6 tracking-tight">
          Loved by <span className="font-serif italic">everyone.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {REVIEWS.map((review, idx) => (
          <div key={idx} className="bg-slate-50 p-10 rounded-[2.5rem] hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-14 h-14 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                {review.initials}
              </div>
              <div>
                <h4 className="font-medium text-slate-900 text-lg">{review.name}</h4>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{review.role}</p>
              </div>
            </div>
            <p className="text-slate-700 leading-relaxed font-medium text-lg">"{review.text}"</p>
            <div className="mt-8 flex text-slate-900 gap-1">
               {[1,2,3,4,5].map(s => (
                 <span key={s} className="text-xl">★</span>
               ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;