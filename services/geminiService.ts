import { GoogleGenAI } from "@google/genai";

export const generateHeroImage = async (): Promise<string | null> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("API Key not found, skipping image generation.");
      return null;
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Switched to gemini-2.5-flash-image as the requested Imagen model was returning 404.
    // This model is reliable for image generation tasks in this environment.
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: 'A calm, warm, modern medical consultation illustration showing a psychiatrist talking to a patient online, minimalistic design, soft blue and teal tones, professional and trustworthy, high-resolution hero banner.',
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: '16:9',
        },
      },
    });

    const parts = response.candidates?.[0]?.content?.parts;
    if (parts) {
      for (const part of parts) {
        if (part.inlineData && part.inlineData.data) {
          const base64EncodeString = part.inlineData.data;
          const mimeType = part.inlineData.mimeType || 'image/png';
          return `data:${mimeType};base64,${base64EncodeString}`;
        }
      }
    }
    
    return null;

  } catch (error) {
    console.error("Failed to generate hero image:", error);
    return null;
  }
};