
import { GoogleGenAI } from "@google/genai";
import type { Question } from '../types';

if (!process.env.API_KEY) {
  console.warn("API_KEY environment variable not set. AI features will be disabled.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const generateAnswer = async (questionData: Question): Promise<string> => {
  if (!process.env.API_KEY) {
    return "API Key not configured. Please set the API_KEY environment variable.";
  }

  const { title, description, keyPoints } = questionData;

  const keyPointsString = keyPoints.map(p => `- ${p}`).join('\n');

  const prompt = `
    You are an expert consultant specializing in AI ethics and risk assessment for planning departments. Your task is to draft a comprehensive response for an AI evaluation form.

    **Instructions:**
    1.  Carefully review the question and the provided key points.
    2.  Write a detailed, well-structured answer that addresses the question directly.
    3.  Incorporate all the key points into your response, elaborating on each one.
    4.  The tone should be professional, clear, and objective.
    5.  Do not invent specific tool names or details; instead, use placeholders like "[AI Tool Name]", "[Specific Model]", "[Relevant Legislation]", etc., where appropriate.
    6.  Structure your answer with paragraphs and bullet points for clarity.

    **Question:** ${title}
    ${description ? `**Description:** ${description}` : ''}

    **Key Points to Address:**
    ${keyPointsString}

    **Draft your response below:**
  `;

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating answer with Gemini API:", error);
    if (error instanceof Error) {
        return `An error occurred while generating the answer: ${error.message}`;
    }
    return "An unknown error occurred while generating the answer.";
  }
};
