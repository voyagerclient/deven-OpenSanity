import axios from "axios";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export const queryOpenAI = async (prompt: string): Promise<string> => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    throw new Error(`OpenAI API error: ${error.response?.data || error.message}`);
  }
};
