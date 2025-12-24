
import React, { useState, useEffect, useContext } from 'react';
import { AlertTriangle, ShieldAlert, Check, UserCheck } from 'lucide-react';
import { LanguageContext } from '../App';
import { Language } from '../types';

export const LegalNotice: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [crisisAcknowledged, setCrisisAcknowledged] = useState(false);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const acknowledged = localStorage.getItem('mindcare_legal_ack_v2');
    if (!acknowledged) {
      setIsVisible(true);
    }
  }, []);

  const handleAcknowledge = () => {
    if (ageConfirmed && crisisAcknowledged) {
      localStorage.setItem('mindcare_legal_ack_v2', 'true');
      setIsVisible(false);
    }
  };

  const t = {
    [Language.EN]: {
      title: 'Clinical Safety Notice',
      emergencyTitle: 'THIS IS NOT AN EMERGENCY SERVICE',
      emergencyBody: 'If you are experiencing a life-threatening emergency, feeling suicidal, or in danger of hurting yourself or others, please call your local emergency services (911/999/112) or go to the nearest emergency room immediately.',
      ageCheck: 'I confirm that I am at least 18 years of age.',
      crisisCheck: 'I acknowledge that I am not currently in a life-threatening crisis and understand this is for scheduled/non-emergency care only.',
      btn: 'Confirm & Enter Site'
    },
    [Language.ES]: {
      title: 'Aviso de Seguridad Clínica',
      emergencyTitle: 'ESTE NO ES UN SERVICIO DE EMERGENCIA',
      emergencyBody: 'Si está experimentando una emergencia que pone en peligro su vida, tiene pensamientos suicidas o está en peligro de hacerse daño a sí mismo o a otros, llame a sus servicios de emergencia locales (911/999/112) o acuda a la sala de emergencias más cercana de inmediato.',
      ageCheck: 'Confirmo que tengo al menos 18 años de edad.',
      crisisCheck: 'Reconozco que no estoy en una crisis que ponga en peligro mi vida y entiendo que esto es solo para atención programada/no urgente.',
      btn: 'Confirmar e Ingresar'
    }
  }[language];

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-xl">
      <div className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl animate-scale-in border-t-8 border-red-500">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-red-100 p-3 rounded-2xl text-red-600">
            <AlertTriangle size={32} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">{t.title}</h2>
        </div>
        
        <div className="bg-red-50 border border-red-100 rounded-2xl p-5 mb-6">
          <h3 className="text-red-700 font-black text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
            <ShieldAlert size={16} /> {t.emergencyTitle}
          </h3>
          <p className="text-red-800 text-sm leading-relaxed font-semibold italic">
            {t.emergencyBody}
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors">
            <input 
              type="checkbox" 
              checked={ageConfirmed}
              onChange={(e) => setAgeConfirmed(e.target.checked)}
              className="mt-1 w-5 h-5 rounded text-teal-600 border-slate-300"
            />
            <span className="text-sm text-slate-700 font-medium">{t.ageCheck}</span>
          </label>
          
          <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors">
            <input 
              type="checkbox" 
              checked={crisisAcknowledged}
              onChange={(e) => setCrisisAcknowledged(e.target.checked)}
              className="mt-1 w-5 h-5 rounded text-teal-600 border-slate-300"
            />
            <span className="text-sm text-slate-700 font-medium">{t.crisisCheck}</span>
          </label>
        </div>

        <button 
          onClick={handleAcknowledge}
          disabled={!ageConfirmed || !crisisAcknowledged}
          className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all active:scale-95 shadow-lg disabled:opacity-30 disabled:grayscale"
        >
          <UserCheck size={20} className="text-teal-400" />
          {t.btn}
        </button>
      </div>
    </div>
  );
};
