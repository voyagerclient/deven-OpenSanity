import axios from "axios";

const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY;

export const queryClaude = async (prompt: string): Promise<string> => {
  try {
    const response = await axios.post(
      "https://api.anthropic.com/v1/complete",
      {
        model: "claude-2",
        prompt,
        max_tokens: 1000,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${CLAUDE_API_KEY}`,
        },
      }
    );

    return response.data.completion;
  } catch (error) {
    throw new Error(`Claude API error: ${error.response?.data || error.message}`);
  }
};
