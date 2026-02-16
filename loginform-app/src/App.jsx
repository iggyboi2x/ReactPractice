import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [passwd, setPasswd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${username}`);
    alert(`Password: ${passwd}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={passwd}
          onChange={(e) => setPasswd(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default App;
