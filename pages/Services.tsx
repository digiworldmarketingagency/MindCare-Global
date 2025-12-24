
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageRoutes, Service, TimeSlot, Language } from '../types';
import { LanguageContext } from '../App';
import { Check, ChevronRight, Calendar, Clock, Globe, Video } from 'lucide-react';

const SERVICES_EN: Service[] = [
  {
    id: 'initial',
    title: 'Initial Psychiatric Evaluation',
    duration: '60 min',
    price: '$250',
    description: 'Comprehensive assessment of your mental health history and symptoms.'
  },
  {
    id: 'followup',
    title: 'Follow-up Consultation',
    duration: '30 min',
    price: '$120',
    description: 'Review of progress and medication management.'
  },
  {
    id: 'emergency',
    title: 'Urgent Crisis Consultation',
    duration: '45 min',
    price: '$300',
    description: 'Priority access for urgent mental health concerns.'
  }
];

const SERVICES_ES: Service[] = [
  {
    id: 'initial',
    title: 'Evaluación Psiquiátrica Inicial',
    duration: '60 min',
    price: '$250',
    description: 'Evaluación integral de sus antecedentes de salud mental y síntomas.'
  },
  {
    id: 'followup',
    title: 'Consulta de Seguimiento',
    duration: '30 min',
    price: '$120',
    description: 'Revisión del progreso y manejo de medicamentos.'
  },
  {
    id: 'emergency',
    title: 'Consulta de Crisis Urgente',
    duration: '45 min',
    price: '$300',
    description: 'Acceso prioritario para inquietudes urgentes de salud mental.'
  }
];

export const Services: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [userTimeZone, setUserTimeZone] = useState<string>('UTC');
  const navigate = useNavigate();

  const services = language === Language.EN ? SERVICES_EN : SERVICES_ES;
  const labels = {
    [Language.EN]: {
      title: 'Services & Scheduling',
      sub: 'Choose a service tailored to your needs. Times are automatically converted to your local zone.',
      step1: 'Select Service',
      step2: 'Select Time',
      detected: 'detected',
      proceed: 'Proceed to Payment'
    },
    [Language.ES]: {
      title: 'Servicios y Citas',
      sub: 'Elija un servicio adaptado a sus necesidades. Las horas se convierten automáticamente a su zona local.',
      step1: 'Seleccionar Servicio',
      step2: 'Seleccionar Hora',
      detected: 'detectada',
      proceed: 'Continuar al Pago'
    }
  }[language];

  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setUserTimeZone(tz);
  }, []);

  const generateSlots = (): TimeSlot[] => {
    const slots: TimeSlot[] = [];
    const times = ['09:00', '10:00', '11:30', '14:00', '15:30', '16:30'];
    times.forEach((time, index) => {
      const isAvailable = index !== 2 && index !== 4; 
      slots.push({ id: `slot-${index}`, time, available: isAvailable });
    });
    return slots;
  };

  const slots = generateSlots();

  const handleBooking = () => {
    if (selectedService && selectedSlot) {
      navigate(PageRoutes.PAYMENT, { 
        state: { 
          serviceId: selectedService, 
          slotId: selectedSlot,
          date: selectedDate,
          timeZone: userTimeZone
        } 
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">{labels.title}</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">{labels.sub}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Service Selection */}
        <div className="lg:col-span-1 space-y-4">
          <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <span className="bg-teal-100 text-teal-800 w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
            {labels.step1}
          </h2>
          {services.map((service) => (
            <div 
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className={`p-6 rounded-2xl border cursor-pointer transition-all duration-200 ${
                selectedService === service.id 
                  ? 'border-teal-500 bg-teal-50 ring-2 ring-teal-200 shadow-md translate-x-1' 
                  : 'border-slate-200 hover:border-teal-300 bg-white'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-slate-900">{service.title}</h3>
                <span className="font-semibold text-teal-600 bg-teal-100 px-2 py-1 rounded text-sm">{service.price}</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                <span className="flex items-center gap-1"><Clock size={12}/> {service.duration}</span>
                <span className="flex items-center gap-1"><Video size={12}/> Video Call</span>
              </div>
              <p className="text-sm text-slate-600 leading-snug">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Calendar & Slots */}
        <div className="lg:col-span-2">
          <div className={`bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-8 transition-all duration-300 ${!selectedService ? 'opacity-40 grayscale pointer-events-none' : 'opacity-100'}`}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-8 border-b border-slate-100 gap-4">
               <div>
                  <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <span className="bg-teal-100 text-teal-800 w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                    {labels.step2}
                  </h2>
                  <p className="text-sm text-slate-500 mt-1 pl-10 flex items-center gap-2">
                    <Globe size={14} className="text-teal-500 animate-pulse"/> {labels.detected}: {userTimeZone}
                  </p>
               </div>
               <div className="relative">
                 <input 
                  type="date" 
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none text-slate-700 bg-white"
                 />
                 <Calendar className="absolute left-3 top-2.5 text-slate-400 w-5 h-5 pointer-events-none" />
               </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {slots.map((slot) => (
                <button
                  key={slot.id}
                  disabled={!slot.available}
                  onClick={() => setSelectedSlot(slot.id)}
                  className={`py-3 px-4 rounded-xl text-sm font-medium border transition-all transform active:scale-95 ${
                    !slot.available 
                      ? 'bg-slate-100 text-slate-300 cursor-not-allowed border-slate-200'
                      : selectedSlot === slot.id
                        ? 'bg-teal-600 text-white border-teal-600 shadow-lg shadow-teal-600/30'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-teal-400 hover:bg-teal-50'
                  }`}
                >
                  {slot.time}
                </button>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
              <button
                disabled={!selectedSlot || !selectedService}
                onClick={handleBooking}
                className="flex items-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95"
              >
                {labels.proceed} <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
