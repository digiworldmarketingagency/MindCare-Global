import React from 'react';
import { ShieldAlert, FileText, Lock, Globe } from 'lucide-react';

export const Compliance: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Compliance & Privacy</h1>
        <p className="text-slate-600">Your safety, privacy, and rights are our top priority.</p>
      </div>

      <div className="grid gap-8">
        {/* Compliance Cards */}
        <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
              <ShieldAlert size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">HIPAA & GDPR Compliance</h2>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                We strictly adhere to the Health Insurance Portability and Accountability Act (HIPAA) 
                and the General Data Protection Regulation (GDPR). 
                All patient data, including video sessions and medical records, are encrypted both in transit and at rest.
              </p>
              <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                <li>End-to-end encryption for video calls.</li>
                <li>Secure server storage for medical notes.</li>
                <li>Zero-knowledge access policies.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-teal-100 p-3 rounded-lg text-teal-600">
              <FileText size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Telemedicine Consent</h2>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                By booking an appointment, you acknowledge and consent to the use of telehealth technology. 
                While telemedicine offers great convenience, there are potential risks such as technical interruptions. 
                You have the right to withhold or withdraw consent at any time without affecting your right to future care.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
              <Lock size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Data Privacy & Confidentiality</h2>
              <p className="text-slate-600 leading-relaxed text-sm">
                Confidentiality is a cornerstone of psychiatric treatment. 
                Your information will not be shared with any third parties without your explicit written consent, 
                except where required by law (e.g., risk of harm to self or others).
              </p>
            </div>
          </div>
        </section>

        {/* Emergency Disclaimer */}
        <section className="bg-red-50 p-8 rounded-2xl border border-red-100">
           <div className="flex items-start gap-4">
            <div className="bg-red-100 p-3 rounded-lg text-red-600">
              <Globe size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-red-700 mb-2">Emergency Disclaimer</h2>
              <p className="text-red-800 leading-relaxed text-sm">
                This service is <strong>NOT</strong> for emergencies. If you are experiencing a life-threatening emergency, 
                feeling suicidal, or in danger of hurting yourself or others, please:
              </p>
              <ul className="list-disc list-inside text-sm text-red-800 mt-2 font-medium">
                <li>Call your local emergency services immediately (911 in US, 999 in UK, 112 in EU).</li>
                <li>Go to the nearest hospital emergency room.</li>
                <li>Contact a 24/7 Crisis Hotline in your country.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Consent Checkbox Placeholder */}
        <div className="p-4 border-t border-slate-200 mt-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500 border-gray-300" disabled checked />
            <span className="text-sm text-slate-500">I have read and understood the compliance and privacy policies (Mandatory for booking).</span>
          </label>
        </div>
      </div>
    </div>
  );
};
