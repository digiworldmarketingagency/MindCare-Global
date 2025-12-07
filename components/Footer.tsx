import React from 'react';
import { Link } from 'react-router-dom';
import { PageRoutes } from '../types';
import { ShieldCheck, Globe, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-lg font-bold mb-4">MindCare Global</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Providing accessible, professional mental health support across all time zones. 
              Certified specialists ready to listen, wherever you are.
            </p>
            <div className="flex gap-4 mt-6">
              <div className="flex items-center gap-2 text-xs bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                <ShieldCheck size={14} className="text-teal-400" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-xs bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                <Globe size={14} className="text-blue-400" />
                <span>Global Access</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to={PageRoutes.HOME} className="hover:text-teal-400 transition-colors">Home</Link></li>
              <li><Link to={PageRoutes.ABOUT} className="hover:text-teal-400 transition-colors">About Us</Link></li>
              <li><Link to={PageRoutes.SERVICES} className="hover:text-teal-400 transition-colors">Services</Link></li>
              <li><Link to={PageRoutes.COMPLIANCE} className="hover:text-teal-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Emergency Support</h4>
            <p className="text-sm text-slate-400 mb-2">
              If you are in immediate danger, please call your local emergency number immediately.
            </p>
            <div className="flex items-center gap-2 text-red-400 font-bold mt-2">
              <Phone size={16} />
              <span>911 / 112 / 999</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} MindCare Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
