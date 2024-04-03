import { GoogleGenerativeAI } from "@google/generative-ai";
import { INITIAL_CHAT, RESPONSE_INITIAL_CHAT } from "./constants";

const API_KEY = "AIzaSyBep5HLy12k3n7wvhy_6L2aZvH8QYjEwUk";

const genAI = new GoogleGenerativeAI(API_KEY);

export const genTextAPI = async (prompt: string) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: INITIAL_CHAT }],
      },
      {
        role: "model",
        parts: [{ text: RESPONSE_INITIAL_CHAT }],
      },
    ],
  });

  const result = await chat.sendMessage(prompt);
  const response = result.response;
  const text = response.text();
  return text;
};