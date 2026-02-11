import { useState } from "react";
import { getAIResponse } from "./api/openai";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!message.trim()) return;

    setLoading(true);
    const aiReply = await getAIResponse(message);
    setReply(aiReply);
    setLoading(false);
  };

  return (
    <>
      <h1>AI Chatbot</h1>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />

      <button onClick={handleSend} disabled={loading}>
        {loading ? "Thinking..." : "Send"}
      </button>

      <p>
        <strong>AI:</strong> {reply}
      </p>
    </>
  );
}

export default App;
