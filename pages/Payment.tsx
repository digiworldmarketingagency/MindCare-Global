
import React, { useState, useContext } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { PageRoutes, Language } from '../types';
import { LanguageContext } from '../App';
import { Shield, CreditCard, Lock, CheckCircle, ExternalLink, Loader2 } from 'lucide-react';

export const Payment: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);
  const [hasAgreed, setHasAgreed] = useState(false);
  const [isPaying, setIsPaying] = useState(false);
  
  const state = location.state as { serviceId: string; slotId: string; date: string; timeZone: string } | null;

  const t = {
    [Language.EN]: {
      checkout: 'Secure Checkout',
      summary: 'Order Summary',
      consent: 'I agree to the Telehealth Consent and Privacy Policy.',
      viewConsent: 'View Legal Terms',
      payBtn: 'Pay',
      policyTitle: 'Cancellation Policy',
      policyText: 'Full refund if cancelled 24h before. 50% fee within 24h. No-shows non-refundable.',
      success: 'Processing your payment securely...'
    },
    [Language.ES]: {
      checkout: 'Pago Seguro',
      summary: 'Resumen del Pedido',
      consent: 'Acepto el Consentimiento de Telemedicina y la Política de Privacidad.',
      viewConsent: 'Ver Términos Legales',
      payBtn: 'Pagar',
      policyTitle: 'Política de Cancelación',
      policyText: 'Reembolso total si se cancela 24h antes. 50% de recargo dentro de 24h. Citas perdidas no reembolsables.',
      success: 'Procesando su pago de forma segura...'
    }
  }[language];

  // Mock data lookup based on serviceId
  const getServiceDetails = (id: string | undefined) => {
    if (id === 'initial') return { title: language === Language.EN ? 'Initial Evaluation' : 'Evaluación Inicial', price: 250 };
    if (id === 'emergency') return { title: language === Language.EN ? 'Emergency Crisis' : 'Crisis de Emergencia', price: 300 };
    return { title: language === Language.EN ? 'Follow-up' : 'Seguimiento', price: 120 };
  };

  const details = getServiceDetails(state?.serviceId);

  const handleFinalPayment = () => {
    setIsPaying(true);
    setTimeout(() => {
      alert(language === Language.EN ? "Demo Booking Confirmed!" : "¡Cita de Demo Confirmada!");
      navigate(PageRoutes.HOME);
    }, 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 animate-fade-in">
      
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
        <div className="bg-slate-900 p-6 text-white text-center">
          <Lock className="w-8 h-8 mx-auto mb-2 text-teal-400" />
          <h1 className="text-xl font-bold">{t.checkout}</h1>
        </div>

        <div className="p-8">
          {/* Order Summary */}
          <div className="mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-4">{t.summary}</h2>
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-700 font-bold text-lg">{details.title}</span>
              <span className="text-slate-900 font-black text-2xl">${details.price}.00</span>
            </div>
            {state && (
              <div className="text-xs text-slate-500 space-y-1 mt-4 pt-4 border-t border-slate-200">
                 <p className="flex justify-between"><span>Date:</span> <span className="text-slate-700 font-medium">{state.date}</span></p>
                 <p className="flex justify-between"><span>Timezone:</span> <span className="text-slate-700 font-medium">{state.timeZone}</span></p>
              </div>
            )}
          </div>

          {/* Dummy Form */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Card Information</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="4242 4242 4242 4242" 
                  className="w-full pl-10 pr-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none text-slate-400 italic"
                  disabled
                />
                <CreditCard className="absolute left-3 top-4.5 text-slate-400 w-5 h-5" />
              </div>
            </div>

            {/* MEDICO-LEGAL CONSENT CHECKBOX */}
            <div className={`p-4 rounded-xl border-2 transition-all ${hasAgreed ? 'bg-teal-50 border-teal-200' : 'bg-slate-50 border-slate-100'}`}>
              <label className="flex items-start gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={hasAgreed}
                  onChange={(e) => setHasAgreed(e.target.checked)}
                  className="mt-1 w-5 h-5 text-teal-600 rounded focus:ring-teal-500 border-gray-300 cursor-pointer" 
                />
                <div className="flex-1">
                  <span className={`text-sm font-medium ${hasAgreed ? 'text-teal-900' : 'text-slate-600'}`}>
                    {t.consent}
                  </span>
                  <Link to={PageRoutes.COMPLIANCE} className="block text-xs text-teal-600 hover:underline mt-1 font-bold flex items-center gap-1">
                    {t.viewConsent} <ExternalLink size={10} />
                  </Link>
                </div>
              </label>
            </div>

            <div className="pt-4">
              <button 
                onClick={handleFinalPayment}
                disabled={!hasAgreed || isPaying}
                className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold py-5 rounded-2xl shadow-lg transition-all transform active:scale-95 flex justify-center items-center gap-2"
              >
                {isPaying ? <Loader2 className="animate-spin" /> : <Shield size={20} className="text-teal-200" />}
                {isPaying ? t.success : `${t.payBtn} $${details.price}.00`}
              </button>
              <p className="text-center text-[10px] text-slate-400 mt-6 flex items-center justify-center gap-1 uppercase tracking-widest font-bold">
                <Lock size={12} /> SECURE 256-BIT ENCRYPTION
              </p>
            </div>
          </div>
        </div>

        {/* Cancellation Policy */}
        <div className="bg-slate-50 p-6 border-t border-slate-100 text-sm text-slate-500">
          <p className="mb-2 font-bold text-slate-700">{t.policyTitle}</p>
          <p className="leading-relaxed">
            {t.policyText}
          </p>
        </div>
      </div>

      <div className="text-center mt-8">
        <Link to={PageRoutes.SERVICES} className="text-slate-500 hover:text-teal-600 text-sm font-medium">
          &larr; Cancel and return to booking
        </Link>
      </div>
    </div>
  );
};
