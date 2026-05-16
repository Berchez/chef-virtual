import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(
  process.env.NEXT_PUBLIC_GEMINI_API_KEY || '',
);

export const sendIngredientsGemini = async (prompt: string) => {
  const model = genAI.getGenerativeModel({ model: 'gemini-3.1-flash-lite' });

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
};
