import React from 'react';
import { Instagram } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollTo = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navbarHeight = 80; // 80px = h-20
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 300);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 80; // 80px = h-20
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    // Use setTimeout to ensure navigation completes before scrolling
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'auto' // Use 'auto' for instant scroll to top
      });
    }, 100);
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
              <li><a href="https://apps.apple.com/si/app/pennywise-finance-tracker/id6754343519" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors cursor-pointer">Download</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4 text-slate-500">
              <li><button onClick={() => handleNavigation('/about')} className="hover:text-slate-900 transition-colors cursor-pointer">About Us</button></li>
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
             <a href="https://www.instagram.com/pennyeducation/" target="_blank" rel="noopener noreferrer">
               <Instagram className="w-5 h-5 hover:text-slate-900 cursor-pointer transition-colors" />
             </a>
             <a href="https://www.tiktok.com/@pennyeducation" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                 <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
               </svg>
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;