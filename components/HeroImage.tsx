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
      <div className="w-full h-64 md:h-96 bg-slate-200 animate-pulse rounded-xl flex items-center justify-center">
        <div className="flex flex-col items-center text-slate-400">
          <Loader2 className="w-10 h-10 animate-spin mb-2" />
          <p>Generating AI Hero Image...</p>
        </div>
      </div>
    );
  }

  if (!imageUrl) {
    // Fallback if API key is missing or error
    return (
      <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden bg-slate-800">
        <img 
          src="https://picsum.photos/1200/600?grayscale&blur=2" 
          alt="Consultation Fallback" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-center text-white px-4">
                <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-80" />
                <p className="text-lg font-light">Secure Online Consultation</p>
             </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out">
      <img 
        src={imageUrl} 
        alt="AI Generated Psychiatry Consultation" 
        className="w-full h-full object-cover"
      />
    </div>
  );
};
