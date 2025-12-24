
import React from 'react';
import { Award, BookOpen, Clock, BadgeCheck, ExternalLink } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        
        {/* Profile Header */}
        <div className="md:flex">
          <div className="md:w-1/3 bg-slate-100 relative min-h-[350px]">
             <img 
               src="https://picsum.photos/400/600?grayscale" 
               alt="Dr. Simra Saiyed" 
               className="w-full h-full object-cover absolute inset-0 mix-blend-multiply opacity-90"
             />
             <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900/80 to-transparent">
               <h2 className="text-2xl font-bold text-white">Dr. Simra Saiyed</h2>
               <p className="text-teal-300 font-medium">MD, Psychiatry</p>
             </div>
          </div>
          
          <div className="md:w-2/3 p-8 md:p-12">
            <h1 className="text-3xl font-bold text-slate-900 mb-6">Dedicated to Global Mental Wellness</h1>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Dr. Saiyed is a board-certified psychiatrist with over 15 years of experience in treating anxiety disorders, depression, and adult ADHD. 
              Having practiced in the UK, USA, and Singapore, she brings a unique cross-cultural perspective to mental health, 
              understanding the nuances of modern, fast-paced global lifestyles.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-teal-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900">Board Certified</h3>
                  <p className="text-sm text-slate-500">American Board of Psychiatry & Neurology</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                 <BookOpen className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900">Specializations</h3>
                  <p className="text-sm text-slate-500">Anxiety, Depression, Trauma</p>
                </div>
              </div>
            </div>

            {/* Medico-Legal Credential Section */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <BadgeCheck className="text-teal-600 w-6 h-6" />
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Medical Licensing</p>
                  <p className="text-sm font-semibold text-slate-800 italic">State Board Verified Practitioner</p>
                </div>
              </div>
              <button className="text-[10px] font-black uppercase text-teal-600 flex items-center gap-1 hover:underline">
                Verify Credentials <ExternalLink size={12} />
              </button>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-slate-50 p-8 md:p-12 border-t border-slate-100">
          <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            <Clock className="w-5 h-5 text-slate-500" /> Experience Timeline
          </h3>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-teal-500 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <div className="w-3 h-3 bg-current rounded-full"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900">Senior Consultant</div>
                  <time className="font-caveat font-medium text-teal-600">2018 - Present</time>
                </div>
                <div className="text-slate-500 text-sm">Global Telehealth Associates, Remote</div>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                 <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900">Residency Director</div>
                  <time className="font-caveat font-medium text-slate-500">2012 - 2018</time>
                </div>
                <div className="text-slate-500 text-sm">St. Mary's Hospital, London</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
