import React from 'react';
import { Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
               <div className="w-8 h-8 bg-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
               </div>
               <span className="font-bold text-xl tracking-tight text-slate-900">Pennywise</span>
            </div>
            <p className="text-slate-500 max-w-xs">
              Making personal finance delightful, simple, and effective for everyone, everywhere.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Product</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-purple-600 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Download</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-purple-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100 gap-4">
          <p className="text-slate-400 text-sm">© 2024 Pennywise Inc. All rights reserved.</p>
          <div className="flex space-x-6 text-slate-400">
             <Twitter className="w-5 h-5 hover:text-purple-600 cursor-pointer transition-colors" />
             <Instagram className="w-5 h-5 hover:text-purple-600 cursor-pointer transition-colors" />
             <Linkedin className="w-5 h-5 hover:text-purple-600 cursor-pointer transition-colors" />
             <Facebook className="w-5 h-5 hover:text-purple-600 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;