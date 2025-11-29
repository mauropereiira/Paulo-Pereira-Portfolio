import React from 'react';
import { PROFILE } from '../constants';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Contact: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 py-16 border-t border-slate-900 text-center relative">
       <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold text-white mb-8">Get In Touch</h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
             <div className="flex items-center gap-3 text-slate-300 hover:text-gold-500 transition-colors cursor-pointer group">
                <div className="p-3 bg-slate-900 rounded-full group-hover:bg-slate-800 transition-colors">
                  <Phone size={24} />
                </div>
                <span>{PROFILE.contact.phone}</span>
             </div>
             <div className="flex items-center gap-3 text-slate-300 hover:text-gold-500 transition-colors cursor-pointer group">
                <div className="p-3 bg-slate-900 rounded-full group-hover:bg-slate-800 transition-colors">
                  <Mail size={24} />
                </div>
                <a href={`mailto:${PROFILE.contact.email}`}>{PROFILE.contact.email}</a>
             </div>
             <div className="flex items-center gap-3 text-slate-300">
                <div className="p-3 bg-slate-900 rounded-full">
                  <MapPin size={24} />
                </div>
                <span>{PROFILE.contact.location}</span>
             </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-8" />

          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Paulo Pereira. All Rights Reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="absolute right-8 bottom-8 p-3 bg-slate-800 hover:bg-gold-500 hover:text-slate-900 text-white rounded-full transition-all shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
       </div>
    </footer>
  );
};

export default Contact;