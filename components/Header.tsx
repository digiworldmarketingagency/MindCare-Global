import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, HeartPulse } from 'lucide-react';
import { PageRoutes } from '../types';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: PageRoutes.HOME },
    { name: 'About', path: PageRoutes.ABOUT },
    { name: 'Services & Booking', path: PageRoutes.SERVICES },
    { name: 'Compliance', path: PageRoutes.COMPLIANCE },
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
            <span className="font-bold text-xl text-slate-800 tracking-tight">MindCare Global</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
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

          {/* CTA Button (Desktop) */}
          <div className="hidden md:flex">
             <Link 
              to={PageRoutes.SERVICES}
              className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium rounded-full transition-colors shadow-md"
             >
               Book Consultation
             </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
               Book Appointment
             </Link>
          </div>
        </div>
      )}
    </header>
  );
};
