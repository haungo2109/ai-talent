import { Content, GoogleGenerativeAI } from "@google/generative-ai";
import { INITIAL_CHAT, RESPONSE_INITIAL_CHAT } from "./constants";

const API_KEY = "AIzaSyBep5HLy12k3n7wvhy_6L2aZvH8QYjEwUk";

const genAI = new GoogleGenerativeAI(API_KEY);

export const genTextAPI = async (prompt: string, historyChat?: Array<Content>) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  let history: Array<Content> = [
    {
      role: "user",
      parts: [{ text: INITIAL_CHAT }],
    },
    {
      role: "model",
      parts: [{ text: RESPONSE_INITIAL_CHAT }],
    },
  ]
  if (historyChat) history = [...history, ...historyChat];

  const chat = model.startChat({ history });

  const result = await chat.sendMessage(prompt);
  const response = result.response;
  const text = response.text();
  return text;
};