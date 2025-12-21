import { geminiChat } from "../src/geminiService.js";

export const sendPrompt = async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: "Prompt is required" });

  const reply = await geminiChat(prompt);
  return res.json({ reply });
};