import express from "express";
import "dotenv/config";
import OpenAI from "openai";

const router = express.Router();
const openai = new OpenAI({ apiKey: process.env.apiKey });

router.post("/translate", async (req, res) => {
  const { text, language } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: `You are a helpful assistant that translates text from ${language} to English. If ${language} is English, just give me the ${text} back.` },
        { role: "user", content: `Translate, return only the translation: ${text}` },
      ],
      max_tokens: 100,
    });

    const translation = response.choices[0].message.content.trim();
    res.json({ translation });

  } catch (error) {
    console.error("Error translating text:", error);
    res.status(500).json({ error: "Error translating text" });
  }
});

router.get("/", (req, res) => {
  res.send("reached back");
});

export default router;
