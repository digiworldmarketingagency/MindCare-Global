
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HeroImage } from '../components/HeroImage';
import { PageRoutes, Language } from '../types';
import { LanguageContext } from '../App';
import { 
  Globe2, Lock, Video, MessageSquare, ChevronRight, 
  X, ExternalLink, CreditCard, ShieldCheck, Loader2, AlertCircle,
  FileText, Pill, CheckCircle
} from 'lucide-react';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);
  
  // Modal & Payment State
  const [showMeetModal, setShowMeetModal] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);
  const [sessionToken] = useState(() => Math.random().toString(36).substring(7).toUpperCase());
  
  const detectedTz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const content = {
    [Language.EN]: {
      heroTitle: "Global Online Psychiatry Consultation",
      heroSub: "Book anytime, from anywhere. Mental wellness access for all time zones with certified specialists. Secure, private, and tailored to your needs.",
      btnBook: "Book Appointment",
      btnEmergency: "Emergency Info",
      emergencyPrompt: "Not for crises. If in immediate danger, call your local emergency services.",
      featuresTitle: "Why MindCare Global?",
      featuresSub: "Professional care designed for the modern world.",
      feat1Title: "Global Scheduling",
      feat1Desc: `Auto-timezone detection active. Current: ${detectedTz}`,
      feat2Title: "Confidential & Secure",
      feat2Desc: "Bank-grade encryption and HIPAA compliant protocols to protect you.",
      feat3Title: "Video Sessions",
      feat3Desc: "Start an instant session or join your scheduled meeting room.",
      feat4Title: "Multi-Language",
      feat4Desc: "Active support for English and Spanish speakers natively.",
      ctaTitle: "Start Your Journey Today",
      ctaSub: "Take the first step towards better mental health with a confidential consultation.",
      ctaBtn: "Get Started Now",
      
      // Modal Content
      payTitle: "Instant Consultation Access",
      payDesc: "You are initiating a priority video session. Please complete the instant access payment to enter the secure room.",
      payBtn: "Pay $150 & Join Room",
      processing: "Verifying Transaction...",
      meetTitle: "Payment Successful",
      meetDesc: "Your secure room is ready. A specialist will join you shortly.",
      meetBtn: "Launch Google Meet",
      roomLabel: "SECURE ROOM ID",
      consentLabel: "I consent to the Telehealth Terms for this priority session.",
      noPills: "Note: No controlled substances (ADHD/Benzo) are prescribed via this platform."
    },
    [Language.ES]: {
      heroTitle: "Consulta Psiquiátrica Global en Línea",
      heroSub: "Reserva en cualquier momento, desde cualquier lugar. Acceso al bienestar mental para todas las zonas horarias con especialistas certificados.",
      btnBook: "Reservar Cita",
      btnEmergency: "Info de Emergencia",
      emergencyPrompt: "No es para crisis. Si está en peligro inmediato, llame a emergencias.",
      featuresTitle: "¿Por qué MindCare Global?",
      featuresSub: "Atención profesional diseñada para el mundo moderno.",
      feat1Title: "Agenda Global",
      feat1Desc: `Detección de zona horaria activa. Actual: ${detectedTz}`,
      feat2Title: "Confidencial y Seguro",
      feat2Desc: "Cifrado de grado bancario y protocolos HIPAA para protegerte.",
      feat3Title: "Sesiones de Video",
      feat3Desc: "Inicia una sesión instantánea o únete a tu sala de reuniones.",
      feat4Title: "Multi-idioma",
      feat4Desc: "Soporte activo para hablantes de inglés y español nativos.",
      ctaTitle: "Comienza Tu Viaje Hoy",
      ctaSub: "Da el primer paso hacia una mejor salud mental con una consulta confidencial.",
      ctaBtn: "Empezar Ahora",
      
      // Modal Content
      payTitle: "Acceso a Consulta Instantánea",
      payDesc: "Está iniciando una sesión de video prioritaria. Complete el pago de acceso instantáneo para ingresar a la sala segura.",
      payBtn: "Pagar $150 e Ingresar",
      processing: "Verificando Transacción...",
      meetTitle: "Pago Exitoso",
      meetDesc: "Su sala segura está lista. Un especialista se unirá en breve.",
      meetBtn: "Iniciar Google Meet",
      roomLabel: "ID DE SALA SEGURA",
      consentLabel: "Acepto los Términos de Telemedicina para esta sesión prioritaria.",
      noPills: "Nota: No se recetan sustancias controladas a través de esta plataforma."
    }
  };

  const t = content[language];

  const handleMeetAction = () => {
    setShowMeetModal(true);
    setIsPaid(false);
    setConsentGiven(false);
  };

  const handlePayment = () => {
    if (!consentGiven) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsPaid(true);
    }, 1800);
  };

  return (
    <div className="flex flex-col gap-12 pb-16 animate-fade-in">
      {/* Video Session Modal with Payment & Consent Step */}
      {showMeetModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md">
          <div className="bg-white rounded-3xl p-8 max-md:p-6 max-w-md w-full shadow-2xl animate-scale-in relative overflow-hidden">
            <button 
              onClick={() => setShowMeetModal(false)} 
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 p-1"
            >
              <X size={24} />
            </button>

            {!isPaid ? (
              /* Payment & Consent Step */
              <div className="animate-fade-in">
                <div className="bg-indigo-50 w-16 h-16 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                  <Video size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.payTitle}</h3>
                <p className="text-slate-500 mb-6 text-sm leading-relaxed">{t.payDesc}</p>
                
                <div className="bg-orange-50/50 p-3 rounded-xl mb-4 border border-orange-100 flex items-start gap-2">
                  <Pill size={16} className="text-orange-600 mt-0.5 shrink-0" />
                  <p className="text-[10px] text-orange-800 font-bold leading-tight uppercase tracking-tight">
                    {t.noPills}
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-slate-600 font-medium">Instant Priority Fee</span>
                    <span className="text-slate-900 font-bold text-lg">$150.00</span>
                  </div>
                </div>

                <div className="mb-6">
                   <label className="flex items-start gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      checked={consentGiven}
                      onChange={(e) => setConsentGiven(e.target.checked)}
                      className="mt-1 w-5 h-5 rounded text-teal-600 border-slate-300" 
                    />
                    <div className="flex-1">
                      <span className="text-xs text-slate-600 font-medium leading-relaxed group-hover:text-teal-700 transition-colors">
                        {t.consentLabel}
                      </span>
                    </div>
                  </label>
                </div>

                <button 
                  onClick={handlePayment}
                  disabled={isProcessing || !consentGiven}
                  className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all active:scale-95 shadow-xl disabled:opacity-30 disabled:grayscale"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      {t.processing}
                    </>
                  ) : (
                    <>
                      <ShieldCheck size={20} className="text-teal-400" />
                      {t.payBtn}
                    </>
                  )}
                </button>
              </div>
            ) : (
              /* Meeting Link Reveal Step */
              <div className="animate-fade-in">
                <div className="bg-teal-50 w-16 h-16 rounded-2xl flex items-center justify-center text-teal-600 mb-6">
                  <CheckCircle className="text-teal-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.meetTitle}</h3>
                <p className="text-slate-500 mb-6 text-sm leading-relaxed">{t.meetDesc}</p>
                
                <div className="bg-teal-50/50 p-4 rounded-xl mb-6 border border-teal-100">
                  <p className="text-[10px] text-teal-600 uppercase font-black tracking-widest mb-1">{t.roomLabel}</p>
                  <p className="font-mono text-lg font-bold text-teal-800 tracking-wider">MIND-CARE-{sessionToken}</p>
                </div>

                <button 
                  onClick={() => window.open('https://meet.google.com/new', '_blank')}
                  className="w-full bg-teal-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-teal-700 transition-all active:scale-95 shadow-lg shadow-teal-600/20"
                >
                  {t.meetBtn} <ExternalLink size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-8 max-w-7xl mx-auto w-full">
        <HeroImage />
        <div className="text-center mt-12 mb-16 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
            {t.heroTitle.split(' ').map((word, i) => i === 3 ? <span key={i} className="text-teal-600">{word} </span> : word + ' ')}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            {t.heroSub}
          </p>
          <div className="flex flex-col items-center">
            <div className="flex flex-col sm:flex-row gap-5 justify-center mb-6">
              <Link 
                to={PageRoutes.SERVICES} 
                className="px-10 py-5 bg-teal-600 hover:bg-teal-700 text-white text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
              >
                {t.btnBook}
              </Link>
              <Link 
                to={PageRoutes.COMPLIANCE} 
                className="px-10 py-5 bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 text-lg font-semibold rounded-full transition-all transform active:scale-95 flex items-center justify-center shadow-sm"
              >
                {t.btnEmergency}
              </Link>
            </div>
            <p className="text-[10px] sm:text-xs text-slate-400 flex items-center gap-2 uppercase font-black tracking-widest">
              <AlertCircle size={14} className="text-red-500" /> {t.emergencyPrompt}
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-white py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t.featuresTitle}</h2>
            <p className="text-slate-500 mt-4 text-lg">{t.featuresSub}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Globe2 className="w-8 h-8 text-blue-500" />}
              title={t.feat1Title}
              description={t.feat1Desc}
              onClick={() => navigate(PageRoutes.SERVICES)}
            />
            <FeatureCard 
              icon={<Lock className="w-8 h-8 text-teal-500" />}
              title={t.feat2Title}
              description={t.feat2Desc}
              onClick={() => navigate(PageRoutes.COMPLIANCE)}
            />
            <FeatureCard 
              icon={<Video className="w-8 h-8 text-indigo-500" />}
              title={t.feat3Title}
              description={t.feat3Desc}
              onClick={handleMeetAction}
              isActiveBadge
            />
            <FeatureCard 
              icon={<MessageSquare className="w-8 h-8 text-purple-500" />}
              title={t.feat4Title}
              description={t.feat4Desc}
              onClick={() => navigate(PageRoutes.ABOUT)}
            />
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="max-w-5xl mx-auto px-4 w-full mb-12">
        <div className="bg-teal-900 rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.ctaTitle}</h2>
            <p className="text-teal-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">{t.ctaSub}</p>
            <button 
              onClick={() => navigate(PageRoutes.SERVICES)}
              className="bg-white text-teal-900 px-12 py-5 rounded-full font-black text-xl hover:bg-teal-50 transition-all transform active:scale-95 shadow-lg"
            >
              {t.ctaBtn}
            </button>
          </div>
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-80 h-80 bg-teal-800 rounded-full opacity-20"></div>
          <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-64 h-64 bg-teal-700 rounded-full opacity-20"></div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{icon: React.ReactNode, title: string, description: string, onClick: () => void, isActiveBadge?: boolean}> = ({ icon, title, description, onClick, isActiveBadge }) => (
  <button 
    onClick={onClick}
    className="group p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-teal-300 hover:bg-white hover:shadow-2xl transition-all duration-500 text-left w-full transform active:scale-95 relative overflow-hidden"
  >
    {isActiveBadge && (
      <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-[10px] font-black uppercase tracking-widest animate-pulse">
        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
        Live Now
      </div>
    )}
    <div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-500">
      {icon}
    </div>
    <h3 className="text-xl font-extrabold text-slate-900 mb-3 flex items-center justify-between">
      {title}
      <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-teal-500 group-hover:translate-x-1 transition-all" />
    </h3>
    <p className="text-slate-600 leading-relaxed text-sm font-medium">{description}</p>
  </button>
);
