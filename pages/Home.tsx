import React from 'react';
import { Link } from 'react-router-dom';
import { HeroImage } from '../components/HeroImage';
import { PageRoutes } from '../types';
import { Globe2, Lock, Video, MessageSquare } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-12 pb-16">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-8 max-w-7xl mx-auto w-full">
        <HeroImage />
        <div className="text-center mt-10 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Global Online <span className="text-teal-600">Psychiatry</span> Consultation
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Book anytime, from anywhere. Mental wellness access for all time zones with certified specialists. 
            Secure, private, and tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to={PageRoutes.SERVICES} 
              className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              Book Appointment
            </Link>
            <Link 
              to={PageRoutes.COMPLIANCE} 
              className="px-8 py-4 bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 text-lg font-medium rounded-full transition-all"
            >
              Emergency Info
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-white py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Globe2 className="w-8 h-8 text-blue-500" />}
              title="Global Scheduling"
              description="Our system auto-detects your timezone for seamless booking anywhere in the world."
            />
            <FeatureCard 
              icon={<Lock className="w-8 h-8 text-teal-500" />}
              title="Confidential & Secure"
              description="Bank-grade encryption and HIPAA compliant protocols to protect your privacy."
            />
            <FeatureCard 
              icon={<Video className="w-8 h-8 text-indigo-500" />}
              title="Video Sessions"
              description="High-quality video calls via integrated Zoom or Google Meet links."
            />
            <FeatureCard 
              icon={<MessageSquare className="w-8 h-8 text-purple-500" />}
              title="Multi-Language"
              description="Support available in English, Spanish, and French (more coming soon)."
            />
          </div>
        </div>
      </section>

      {/* Trust Indicator */}
      <section className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">Trusted Standards</p>
        <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2">
             <div className="h-8 w-8 bg-slate-300 rounded-full"></div>
             <span className="font-bold text-slate-700">HealthGrade</span>
          </div>
          <div className="flex items-center gap-2">
             <div className="h-8 w-8 bg-slate-300 rounded-full"></div>
             <span className="font-bold text-slate-700">PsychToday</span>
          </div>
          <div className="flex items-center gap-2">
             <div className="h-8 w-8 bg-slate-300 rounded-full"></div>
             <span className="font-bold text-slate-700">GlobalMed</span>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{icon: React.ReactNode, title: string, description: string}> = ({ icon, title, description }) => (
  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
    <div className="mb-4 bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
  </div>
);
