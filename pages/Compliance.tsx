
import React, { useContext } from 'react';
import { ShieldAlert, FileText, Lock, Globe, Pill, Scale, Database } from 'lucide-react';
import { LanguageContext } from '../App';
import { Language } from '../types';

export const Compliance: React.FC = () => {
  const { language } = useContext(LanguageContext);
  
  const t = {
    [Language.EN]: {
      title: 'Compliance & Privacy',
      sub: 'Your safety, privacy, and legal rights are our top priority.',
      emergencyDisclaimer: 'Emergency Disclaimer',
      emergencyBody: 'This service is NOT for emergencies. If you are experiencing a life-threatening emergency, call your local emergency services (911/999/112) immediately.',
      sections: [
        {
          title: 'HIPAA & GDPR Compliance',
          icon: <ShieldAlert size={24} />,
          color: 'bg-blue-100 text-blue-600',
          body: 'We strictly adhere to the Health Insurance Portability and Accountability Act (HIPAA) and GDPR. All patient data, video sessions, and medical records are encrypted both in transit and at rest.'
        },
        {
          title: 'Prescription Policy',
          icon: <Pill size={24} />,
          color: 'bg-orange-100 text-orange-600',
          body: 'Please be advised: Our practitioners DO NOT prescribe controlled substances (e.g., benzodiazepines, stimulants for ADHD, or opioids) via this telehealth platform. All medication management is subject to clinical discretion and local laws.'
        },
        {
          title: 'Jurisdiction & Licensing',
          icon: <Scale size={24} />,
          color: 'bg-slate-100 text-slate-600',
          body: 'MindCare Global operates as a facilitator for independent psychiatric providers. Providers are licensed in their respective jurisdictions. By using this service, you agree that any disputes are subject to the laws of the provider’s registered jurisdiction.'
        },
        {
          title: 'Medical Records',
          icon: <Database size={24} />,
          color: 'bg-indigo-100 text-indigo-600',
          body: 'You have a legal right to access your medical records. Records are maintained securely for a minimum of 7 years in accordance with international medical record retention standards.'
        }
      ]
    },
    [Language.ES]: {
      title: 'Cumplimiento y Privacidad',
      sub: 'Su seguridad, privacidad y derechos legales son nuestra máxima prioridad.',
      emergencyDisclaimer: 'Aviso Legal de Emergencia',
      emergencyBody: 'Este servicio NO es para emergencias. Si experimenta una emergencia que pone en peligro su vida, llame a sus servicios locales de inmediato.',
      sections: [
        {
          title: 'Cumplimiento HIPAA y GDPR',
          icon: <ShieldAlert size={24} />,
          color: 'bg-blue-100 text-blue-600',
          body: 'Cumplimos estrictamente con HIPAA y GDPR. Todos los datos, sesiones de video y registros médicos están cifrados en tránsito y en reposo.'
        },
        {
          title: 'Política de Prescripción',
          icon: <Pill size={24} />,
          color: 'bg-orange-100 text-orange-600',
          body: 'Aviso: Nuestros profesionales NO recetan sustancias controladas (ej. benzodiacepinas, estimulantes) a través de esta plataforma de telemedicina.'
        },
        {
          title: 'Jurisdicción y Licencias',
          icon: <Scale size={24} />,
          color: 'bg-slate-100 text-slate-600',
          body: 'Los proveedores están licenciados en sus respectivas jurisdicciones. Al usar este servicio, acepta que cualquier disputa está sujeta a las leyes de la jurisdicción del proveedor.'
        },
        {
          title: 'Registros Médicos',
          icon: <Database size={24} />,
          color: 'bg-indigo-100 text-indigo-600',
          body: 'Tiene derecho legal a acceder a sus registros médicos. Los registros se mantienen de forma segura durante un mínimo de 7 años.'
        }
      ]
    }
  }[language];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 animate-fade-in">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">{t.title}</h1>
        <p className="text-slate-600">{t.sub}</p>
      </div>

      <div className="grid gap-8">
        {/* Emergency Disclaimer - Priority */}
        <section className="bg-red-50 p-8 rounded-3xl border-2 border-red-100">
           <div className="flex items-start gap-4">
            <div className="bg-red-100 p-3 rounded-2xl text-red-600">
              <Globe size={24} />
            </div>
            <div>
              <h2 className="text-xl font-black text-red-700 mb-2 uppercase tracking-tight">{t.emergencyDisclaimer}</h2>
              <p className="text-red-800 leading-relaxed text-sm font-medium">
                {t.emergencyBody}
              </p>
            </div>
          </div>
        </section>

        {/* Dynamic Sections */}
        {t.sections.map((section, idx) => (
          <section key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className={`${section.color} p-3 rounded-2xl`}>
                {section.icon}
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">{section.title}</h2>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {section.body}
                </p>
              </div>
            </div>
          </section>
        ))}

        <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-teal-100 p-3 rounded-2xl text-teal-600">
              <FileText size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Telemedicine Consent</h2>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                By booking an appointment, you acknowledge and consent to the use of telehealth technology. While telemedicine offers great convenience, there are potential risks such as technical interruptions. You have the right to withhold or withdraw consent at any time.
              </p>
            </div>
          </div>
        </section>

        {/* Consent Checkbox Placeholder */}
        <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 text-center">
          <p className="text-xs text-slate-500 font-medium">
            &copy; {new Date().getFullYear()} MindCare Global Legal Department. All Rights Reserved. 
            Verification of Provider Credentials available upon request.
          </p>
        </div>
      </div>
    </div>
  );
};
