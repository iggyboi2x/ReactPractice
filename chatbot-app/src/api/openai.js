const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
console.log("API KEY:", API_KEY);

export const getAIResponse = async (userMessage) => {
  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
        "HTTP-Referer": "http://localhost:5173",
        "X-Title": "React AI Chatbot",
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: userMessage }],
      }),
    }
  );

  const data = await response.json();

  // 🔒 SAFETY CHECK
  if (!data.choices) {
    console.error("OpenRouter error:", data);
    return "AI is unavailable right now.";
  }

  return data.choices[0].message.content;
};
