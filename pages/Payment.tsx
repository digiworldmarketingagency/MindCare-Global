import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { PageRoutes } from '../types';
import { Shield, CreditCard, Lock, CheckCircle } from 'lucide-react';

export const Payment: React.FC = () => {
  const location = useLocation();
  const state = location.state as { serviceId: string; slotId: string; date: string; timeZone: string } | null;

  // Mock data lookup based on serviceId
  const getServiceDetails = (id: string | undefined) => {
    if (id === 'initial') return { title: 'Initial Evaluation', price: 250 };
    if (id === 'emergency') return { title: 'Emergency Crisis', price: 300 };
    return { title: 'Follow-up', price: 120 };
  };

  const details = getServiceDetails(state?.serviceId);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
        <div className="bg-slate-900 p-6 text-white text-center">
          <Lock className="w-8 h-8 mx-auto mb-2 text-teal-400" />
          <h1 className="text-xl font-bold">Secure Checkout</h1>
        </div>

        <div className="p-8">
          {/* Order Summary */}
          <div className="mb-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-4">Order Summary</h2>
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-700 font-medium">{details.title}</span>
              <span className="text-slate-900 font-bold">${details.price}.00</span>
            </div>
            {state && (
              <div className="text-sm text-slate-500 space-y-1 mt-2 pt-2 border-t border-slate-200">
                 <p>Date: {state.date}</p>
                 <p>Timezone: {state.timeZone}</p>
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
                  placeholder="0000 0000 0000 0000" 
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                  disabled
                />
                <CreditCard className="absolute left-3 top-3.5 text-slate-400 w-5 h-5" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Expiry</label>
                <input 
                  type="text" 
                  placeholder="MM / YY" 
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                  disabled
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">CVC</label>
                <input 
                  type="text" 
                  placeholder="123" 
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                  disabled
                />
              </div>
            </div>

            <div className="pt-4">
              <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform active:scale-95 flex justify-center items-center gap-2">
                Pay ${details.price}.00
              </button>
              <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-1">
                <Shield size={12} /> Encrypted by Stripe / Razorpay (Placeholder)
              </p>
            </div>
          </div>
        </div>

        {/* Cancellation Policy */}
        <div className="bg-slate-50 p-6 border-t border-slate-100 text-sm text-slate-500">
          <p className="mb-2 font-semibold text-slate-700">Cancellation Policy</p>
          <p>
            Full refund available if cancelled 24 hours before the appointment. 
            Cancellations within 24 hours are subject to a 50% fee. 
            Missed appointments are non-refundable.
          </p>
        </div>
      </div>

      <div className="text-center mt-8">
        <Link to={PageRoutes.SERVICES} className="text-teal-600 hover:underline">
          Cancel and return to booking
        </Link>
      </div>
    </div>
  );
};
