import axios from "axios";

export const geminiChat = async (prompt) => {
  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;
    const response = await axios.post(url, {
      contents: [
        {
          parts: [{ text: prompt }],
        },
      ],
    });

    return response.data.candidates[0].content.parts[0].text;
  } catch (err) {
    console.log(err.response?.data || err.message);
    return "Error: Unable to get response from AI service.";
  }
};