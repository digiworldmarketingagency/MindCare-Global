
import React, { useEffect, useState } from 'react';
import { generateHeroImage } from '../services/geminiService';
import { ImageIcon, Loader2 } from 'lucide-react';

export const HeroImage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true);
      const generatedUrl = await generateHeroImage();
      if (generatedUrl) {
        setImageUrl(generatedUrl);
      }
      setLoading(false);
    };

    fetchImage();
  }, []);

  if (loading) {
    return (
      <div className="w-full aspect-video md:max-h-[70vh] bg-slate-200 animate-pulse rounded-3xl flex items-center justify-center">
        <div className="flex flex-col items-center text-slate-400">
          <Loader2 className="w-10 h-10 animate-spin mb-2" />
          <p className="text-sm font-medium">Generating Your Private Hero Space...</p>
        </div>
      </div>
    );
  }

  if (!imageUrl) {
    // Fallback if API key is missing or error
    return (
      <div className="relative w-full aspect-video md:max-h-[70vh] rounded-3xl overflow-hidden bg-slate-800 shadow-2xl">
        <img 
          src="https://picsum.photos/1200/600?grayscale&blur=2" 
          alt="Consultation Fallback" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-center text-white px-6">
                <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <h3 className="text-2xl md:text-3xl font-light tracking-wide">Secure Online Consultation</h3>
                <p className="text-slate-300 text-sm mt-2">Connect with a specialist today</p>
             </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full aspect-video md:max-h-[80vh] rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 ease-in-out group">
      <img 
        src={imageUrl} 
        alt="AI Generated Psychiatry Consultation" 
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2000ms]"
      />
    </div>
  );
};
