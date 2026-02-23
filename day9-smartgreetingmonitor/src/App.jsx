import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("Name changed", name);
  }, [name]);

  return (
    <>
      <input
        type="text"
        placeholder="Enter name..."
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      {name ? <h1>Hello, {name}</h1> : <h1>Waiting for name...</h1>}
    </>
  );
}
export default App;
