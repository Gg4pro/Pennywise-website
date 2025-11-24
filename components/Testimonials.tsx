import React from 'react';

const REVIEWS = [
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces",
    name: "Sarah Jenkins",
    role: "Freelancer",
    text: "I was constantly anxious about overdrafting. Pennywise finally gave me clarity on where my money goes. Now I actually feel in control of my finances."
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
    name: "Mike Ross",
    role: "Product Designer",
    text: "Every other budgeting app felt like homework. I'd open them once and never again. Pennywise is the only one I actually want to use daily. It just works."
  },
  {
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces",
    name: "Jessica Lee",
    role: "Student",
    text: "My student budget was a mess. I'd lose track of subscriptions and impulse buys constantly. This app helped me cut my spending by 30% without feeling restricted."
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
          <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-300/70 hover:shadow-2xl hover:shadow-slate-400 transition-all duration-300 group border border-slate-100">
            <div className="flex items-center gap-4 mb-8">
              <img
                src={review.image}
                alt={review.name}
                className="w-14 h-14 rounded-full object-cover shadow-lg"
              />
              <div>
                <h4 className="font-medium text-slate-900 text-lg">{review.name}</h4>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{review.role}</p>
              </div>
            </div>
            <p className="text-slate-700 leading-relaxed font-medium text-lg">"{review.text}"</p>
            <div className="mt-8 flex text-yellow-500 gap-1">
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