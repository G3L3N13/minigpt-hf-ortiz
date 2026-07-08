import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { InferenceClient } from "@huggingface/inference";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const HF_TOKEN = process.env.HF_TOKEN;
const HF_MODEL = process.env.HF_MODEL || "nvidia/NVIDIA-Nemotron-3-Nano-4B-GGUF ";
const HF_PROVIDER = process.env.HF_PROVIDER || "hf-inference";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SYSTEM_PROMPTS = {
  web: "Eres un profesor de desarrollo web. Responde claro, práctico y con ejemplos de código cuando ayude.",
  english: "Eres un tutor de inglés. Corrige con amabilidad, explica brevemente y da 2 ejemplos.",
  debug: "Eres un depurador técnico. Pide contexto solo si es indispensable y propone pasos concretos."
};

app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use(express.static(path.join(__dirname, "public")));

const hf = new InferenceClient(HF_TOKEN);

app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    message: "Backend funcionando",
    model: HF_MODEL,
    provider: HF_PROVIDER
  });
});

app.post("/api/chat", async (req, res) => {

  const { messages, model = "HF_MODEL", systemPrompt= "web" } = req.body;
  const prompt = SYSTEM_PROMPTS[systemPrompt] || SYSTEM_PROMPTS.web;
  try {
    if (!HF_TOKEN) {
      return res.status(500).json({
        error: "Falta HF_TOKEN en el archivo .env"
      });
    }

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({
        error: "Debes enviar un arreglo messages con al menos un mensaje."
      });
    }

    const safeMessages = messages
      .filter(m => m && typeof m.content === "string")
      .map(m => ({
        role: ["system", "user", "assistant"].includes(m.role) ? m.role : "user",
        content: m.content.slice(0, 3000)
      }))
      .slice(-10);

    const response = await hf.chatCompletion({
      provider: HF_PROVIDER,
      model: model,
      messages: [
        {
          role: "system",
          content: prompt
        },
        ...safeMessages
      ],
      max_tokens: 350,
      temperature: 0.7
    });

    const answer = response.choices?.[0]?.message?.content || "No se recibió respuesta del modelo.";

    res.json({ answer });
  } catch (error) {
    console.error("Error en /api/chat:", error);
    res.status(500).json({
      error: "No se pudo generar la respuesta.",
      detail: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor listo en http://localhost:${PORT}`);
});

