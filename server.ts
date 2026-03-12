import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chirp 3: HD Czech voices
const CZECH_FEMALE_VOICE = "cs-CZ-Chirp3-HD-Aoede";
const CZECH_MALE_VOICE = "cs-CZ-Chirp3-HD-Charon";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", message: "CzechStep API is running" });
  });

  // TTS proxy — keeps the Google API key server-side
  app.post("/api/tts", async (req, res) => {
    const apiKey = process.env.GOOGLE_TTS_API_KEY;
    if (!apiKey) {
      res.status(500).json({ error: "GOOGLE_TTS_API_KEY not configured" });
      return;
    }

    const { text, gender } = req.body as { text?: string; gender?: string };
    if (!text) {
      res.status(400).json({ error: "Missing 'text' in request body" });
      return;
    }

    const voiceName =
      gender === "male" ? CZECH_MALE_VOICE : CZECH_FEMALE_VOICE;

    try {
      const googleRes = await fetch(
        `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            input: { text },
            voice: { languageCode: "cs-CZ", name: voiceName },
            audioConfig: { audioEncoding: "MP3", speakingRate: 0.95 },
          }),
        }
      );

      if (!googleRes.ok) {
        const errText = await googleRes.text();
        console.error("Google TTS error:", googleRes.status, errText);
        res.status(googleRes.status).json({ error: "TTS request failed" });
        return;
      }

      const data = await googleRes.json();
      res.json({ audioContent: data.audioContent });
    } catch (err) {
      console.error("TTS proxy error:", err);
      res.status(500).json({ error: "Internal TTS error" });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
