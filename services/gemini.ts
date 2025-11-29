import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const translateText = async (text: string, targetLanguage: string): Promise<string> => {
  if (!apiKey) {
    // Simulated delay for demo purposes if no key is present (dev mode fallback)
    await new Promise(resolve => setTimeout(resolve, 1000));
    return "API Key missing. Please provide a valid Gemini API Key to use the live translation feature. (This is a mock response).";
  }

  try {
    const prompt = `Act as a professional senior interpreter. Translate the following text into ${targetLanguage}. Maintain the tone, nuance, and cultural context. 
    
    Text: "${text}"`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Translation could not be generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while processing your request. Please try again.";
  }
};
