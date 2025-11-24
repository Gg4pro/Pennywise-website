import React from 'react';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="w-full bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center overflow-hidden">
                 <img src="/images/pennywise-icon.png" alt="Pennywise Icon" className="h-9 w-9" />
               </div>
               <img src="/images/pennywise-logo.png" alt="Pennywise" className="h-8" />
            </div>
            <p className="text-slate-500 max-w-xs">
              The road to financial freedom starts with a single penny.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Product</h4>
            <ul className="space-y-4 text-slate-500">
              <li><button onClick={() => handleScrollTo('features')} className="hover:text-slate-900 transition-colors cursor-pointer">Features</button></li>
              <li><button onClick={() => handleScrollTo('how-it-works')} className="hover:text-slate-900 transition-colors cursor-pointer">How it works</button></li>
              <li><button onClick={() => handleScrollTo('testimonials')} className="hover:text-slate-900 transition-colors cursor-pointer">Reviews</button></li>
              <li><span className="text-slate-400 cursor-not-allowed">Download</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-slate-900 transition-colors">About Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100 gap-4">
          <p className="text-slate-400 text-sm">© 2025 Pennywise. All rights reserved.</p>
          <div className="flex space-x-6 text-slate-400">
             <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                 <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
               </svg>
             </a>
             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
               <Instagram className="w-5 h-5 hover:text-slate-900 cursor-pointer transition-colors" />
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;