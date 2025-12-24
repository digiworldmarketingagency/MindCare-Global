
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PageRoutes, Language } from '../types';
import { LanguageContext } from '../App';
import { ShieldCheck, Globe, Phone, AlertTriangle } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language } = useContext(LanguageContext);

  const t = {
    [Language.EN]: {
      desc: 'Accessible, professional mental health support across all time zones. Certified specialists ready to listen.',
      emergencyWarn: 'NOT FOR EMERGENCIES: If you are in crisis, call your local emergency services immediately.',
      links: 'Quick Links',
      emergency: 'Emergency Numbers'
    },
    [Language.ES]: {
      desc: 'Apoyo de salud mental accesible y profesional en todas las zonas horarias. Especialistas certificados listos para escuchar.',
      emergencyWarn: 'NO PARA EMERGENCIAS: Si está en crisis, llame a sus servicios de emergencia locales de inmediato.',
      links: 'Enlaces Rápidos',
      emergency: 'Números de Emergencia'
    }
  }[language];

  return (
    <footer className="bg-slate-950 text-slate-300 mt-auto">
      {/* Emergency Global Banner */}
      <div className="bg-red-600 text-white py-3 px-4 text-center text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2">
        <AlertTriangle size={14} /> {t.emergencyWarn}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-xl font-black mb-6 tracking-tight">MindCare Global</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {t.desc}
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest bg-slate-900 px-4 py-2 rounded-full border border-slate-800 text-teal-400">
                <ShieldCheck size={14} />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest bg-slate-900 px-4 py-2 rounded-full border border-slate-800 text-blue-400">
                <Globe size={14} />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">{t.links}</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to={PageRoutes.HOME} className="hover:text-teal-400 transition-colors">Home</Link></li>
              <li><Link to={PageRoutes.ABOUT} className="hover:text-teal-400 transition-colors">About Us</Link></li>
              <li><Link to={PageRoutes.SERVICES} className="hover:text-teal-400 transition-colors">Services</Link></li>
              <li><Link to={PageRoutes.COMPLIANCE} className="hover:text-teal-400 transition-colors">Privacy & Legal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">{t.emergency}</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-red-500 font-black text-xl">
                <Phone size={20} />
                <span>911 / 999 / 112</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed italic">
                Local emergency services are available 24/7. This website is for scheduled outpatient care only.
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 font-medium uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} MindCare Global Telehealth. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to={PageRoutes.COMPLIANCE} className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to={PageRoutes.COMPLIANCE} className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
