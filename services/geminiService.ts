
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function getDailyFruitChallenge() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Generate a fun 'Fruit of the Day' challenge. Return a short JSON object with: { fruitName: string, funFact: string, mission: string }. Make it friendly and for kids.",
      config: {
        responseMimeType: "application/json",
      }
    });
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini challenge error:", error);
    return {
      fruitName: "Starfruit",
      funFact: "When you slice it, it looks exactly like a star!",
      mission: "Try to find a fruit with a unique shape today!"
    };
  }
}

export async function getEnrichedFruitData(fruitName: string, family: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Provide an encyclopedia entry for the fruit '${fruitName}' (family ${family}). Return JSON with:
      {
        "description": "string (short)",
        "climate": "Tropical | Temperate | Subtropical | Arid",
        "continents": ["string"],
        "color": "string",
        "benefits": [{"title": "string", "description": "string", "icon": "emoji"}],
        "trivia": "string (3 bullet points)",
        "emoji": "string (single fruit emoji)"
      }`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            description: { type: Type.STRING },
            climate: { type: Type.STRING },
            continents: { type: Type.ARRAY, items: { type: Type.STRING } },
            color: { type: Type.STRING },
            benefits: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  description: { type: Type.STRING },
                  icon: { type: Type.STRING }
                }
              }
            },
            trivia: { type: Type.STRING },
            emoji: { type: Type.STRING }
          },
          required: ["description", "climate", "continents", "color", "benefits", "trivia", "emoji"]
        }
      }
    });
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini enrichment error:", error);
    return null;
  }
}
