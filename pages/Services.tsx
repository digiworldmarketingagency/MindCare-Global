import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageRoutes, Service, TimeSlot } from '../types';
import { Check, ChevronRight, Calendar, Clock, Globe, Video } from 'lucide-react';

const SERVICES: Service[] = [
  {
    id: 'initial',
    title: 'Initial Psychiatric Evaluation',
    duration: '60 min',
    price: '$250',
    description: 'Comprehensive assessment of your mental health history, symptoms, and lifestyle to formulate a diagnosis and treatment plan.'
  },
  {
    id: 'followup',
    title: 'Follow-up Consultation',
    duration: '30 min',
    price: '$120',
    description: 'Review of progress, medication management, and supportive therapy adjustments.'
  },
  {
    id: 'emergency',
    title: 'Urgent Crisis Consultation',
    duration: '45 min',
    price: '$300',
    description: 'Priority access for urgent mental health concerns requiring immediate professional guidance.'
  }
];

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [userTimeZone, setUserTimeZone] = useState<string>('UTC');
  const navigate = useNavigate();

  useEffect(() => {
    // Detect user timezone
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setUserTimeZone(tz);
  }, []);

  // Generate fake slots based on selected date
  const generateSlots = (): TimeSlot[] => {
    const slots: TimeSlot[] = [];
    const times = ['09:00', '10:00', '11:30', '14:00', '15:30', '16:30'];
    
    times.forEach((time, index) => {
      // Simulate some booked slots
      const isAvailable = index !== 2 && index !== 4; 
      slots.push({
        id: `slot-${index}`,
        time,
        available: isAvailable
      });
    });
    return slots;
  };

  const slots = generateSlots();

  const handleBooking = () => {
    if (selectedService && selectedSlot) {
      // Navigate to payment with state
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Services & Scheduling</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Choose a service tailored to your needs and book a time that works for you. 
          Times are automatically converted to your local zone.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Service Selection */}
        <div className="lg:col-span-1 space-y-4">
          <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <span className="bg-teal-100 text-teal-800 w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
            Select Service
          </h2>
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className={`p-6 rounded-2xl border cursor-pointer transition-all duration-200 ${
                selectedService === service.id 
                  ? 'border-teal-500 bg-teal-50 ring-2 ring-teal-200' 
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
              <p className="text-sm text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Calendar & Slots */}
        <div className="lg:col-span-2">
          <div className={`bg-white rounded-3xl shadow-lg border border-slate-100 p-6 md:p-8 transition-opacity duration-300 ${!selectedService ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-8 border-b border-slate-100 gap-4">
               <div>
                  <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <span className="bg-teal-100 text-teal-800 w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                    Select Time
                  </h2>
                  <p className="text-sm text-slate-500 mt-1 pl-10 flex items-center gap-2">
                    <Globe size={14}/> detected: {userTimeZone}
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
                  className={`py-3 px-4 rounded-xl text-sm font-medium border transition-all ${
                    !slot.available 
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed border-transparent'
                      : selectedSlot === slot.id
                        ? 'bg-teal-600 text-white border-teal-600 shadow-md'
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
                className="flex items-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Proceed to Payment <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};