import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [panel, setPanelVisibility] = useState(false);

  const handleSubmit = (e) => {
    {
      e.preventDefault();
      name === "" ? setPanelVisibility(false) : setPanelVisibility(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Check</button>
      </form>
      {panel && (name ? <p>name is {name}</p> : <p>please put an input</p>)}
    </>
  );
}

export default App;
