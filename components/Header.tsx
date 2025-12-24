
import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, HeartPulse, Languages } from 'lucide-react';
import { PageRoutes, Language } from '../types';
import { LanguageContext } from '../App';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);
  const location = useLocation();

  const translations = {
    [Language.EN]: {
      home: 'Home',
      about: 'About',
      services: 'Services & Booking',
      compliance: 'Compliance',
      book: 'Book Consultation'
    },
    [Language.ES]: {
      home: 'Inicio',
      about: 'Nosotros',
      services: 'Servicios y Citas',
      compliance: 'Cumplimiento',
      book: 'Reservar Cita'
    }
  };

  const t = translations[language];

  const navLinks = [
    { name: t.home, path: PageRoutes.HOME },
    { name: t.about, path: PageRoutes.ABOUT },
    { name: t.services, path: PageRoutes.SERVICES },
    { name: t.compliance, path: PageRoutes.COMPLIANCE },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to={PageRoutes.HOME} className="flex items-center gap-2">
            <div className="bg-teal-500 p-2 rounded-lg text-white">
              <HeartPulse size={24} />
            </div>
            <span className="font-bold text-xl text-slate-800 tracking-tight">MindCare</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-teal-600'
                    : 'text-slate-600 hover:text-teal-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-100 rounded-full p-1 border border-slate-200">
              <button 
                onClick={() => setLanguage(Language.EN)}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${language === Language.EN ? 'bg-white shadow-sm text-teal-600' : 'text-slate-500'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage(Language.ES)}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${language === Language.ES ? 'bg-white shadow-sm text-teal-600' : 'text-slate-500'}`}
              >
                ES
              </button>
            </div>

            <Link 
              to={PageRoutes.SERVICES}
              className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium rounded-full transition-all shadow-md active:scale-95"
            >
              {t.book}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
             <button 
                onClick={() => setLanguage(language === Language.EN ? Language.ES : Language.EN)}
                className="p-2 text-slate-500 hover:text-teal-600"
              >
                <Languages size={20} />
              </button>
            <button
              className="p-2 text-slate-600 hover:text-slate-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 animate-fade-in-down">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-teal-50 text-teal-700'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
             <Link 
              to={PageRoutes.SERVICES}
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center mt-4 px-4 py-3 bg-teal-600 text-white font-medium rounded-lg shadow-sm"
             >
               {t.book}
             </Link>
          </div>
        </div>
      )}
    </header>
  );
};
