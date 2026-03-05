import Input from "./components/Input.jsx";
import { useState } from "react";

function App() {
  const [welcomeMessage, setWelcomeMessage] = useState("Please login...");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please input valid fields");
      return;
    }

    alert(`Welcome, ${username}`);
    setWelcomeMessage(`Hello, ${username}`);
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={username}
          placeholder="Enter Username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Input
          type="password"
          value={password}
          placeholder="Enter Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Log in</button>
      </form>
      <h1>{welcomeMessage}</h1>
    </>
  );
}

export default App;
