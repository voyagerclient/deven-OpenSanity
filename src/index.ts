import express from "express";
import bodyParser from "body-parser";
import { queryOpenAI } from "./services/openaiService";
import { queryClaude } from "./services/claudeService";
import { logger } from "./utils/logger";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("AI Server is running!");
});

app.post("/ai/query", async (req, res) => {
  try {
    const { provider, prompt } = req.body;

    if (!provider || !prompt) {
      return res.status(400).json({ error: "Provider and prompt are required." });
    }

    let response;
    if (provider === "openai") {
      response = await queryOpenAI(prompt);
    } else if (provider === "claude") {
      response = await queryClaude(prompt);
    } else {
      return res.status(400).json({ error: "Unsupported provider." });
    }

    res.json({ success: true, data: response });
  } catch (error) {
    logger.error("Error handling AI query", error);
    res.status(500).json({ success: false, error: "Internal server error." });
  }
});

app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});
