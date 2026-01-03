
import { GoogleGenAI, Type } from "@google/genai";
import { IntelligenceReport } from "../types";

export async function generateEnvironmentalIntelligence(
  industry: string,
  pollutants: string[]
): Promise<IntelligenceReport> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    Role: You are an expert Environmental Intelligence Advisor for EcoSphere AI.
    Industry Context: ${industry}
    Likely Pollutants: ${pollutants.join(', ')}

    Task:
    1. Provide a non-technical summary of why these chemicals are a risk.
    2. Explain the impact pathway (Industrial Activity -> Chemical Release -> Environmental Pathway -> Impact).
    3. Describe the human health and ecosystem impacts.
    4. Provide 3-4 specific, low-cost mitigation recommendations for a small-to-mid scale facility.

    Tone: Supportive, professional, non-judgmental, clear.
    Avoid: Legal or medical advice.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            pathway: { type: Type.STRING },
            impacts: {
              type: Type.OBJECT,
              properties: {
                human: { type: Type.STRING },
                ecosystem: { type: Type.STRING }
              },
              required: ["human", "ecosystem"]
            },
            recommendations: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["summary", "pathway", "impacts", "recommendations"]
        }
      }
    });

    const data = JSON.parse(response.text || '{}');
    return data as IntelligenceReport;
  } catch (error) {
    console.error("Gemini Error:", error);
    // Fallback for demo purposes if API fails
    return {
      summary: "Predicted risk increase detected in soil acidity and groundwater quality due to long-term industrial persistence.",
      pathway: "Chemical seepage from floor runoff enters unlined drainage, eventually reaching localized water tables.",
      impacts: {
        human: "Potential long-term respiratory and endocrine risks if groundwater is ingested.",
        ecosystem: "Significant threat to local pollinators and aquatic biodiversity in nearby runoff streams."
      },
      recommendations: ["Upgrade secondary containment", "Conduct quarterly soil testing", "Install low-flow sensors"]
    };
  }
}
