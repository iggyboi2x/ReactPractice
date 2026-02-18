import { useState } from "react";

function App() {
  const [list, setList] = useState(["Apple", "Banana", "Coconut", "Dewberry"]);
  const [item, setItem] = useState("");

  const handleChange = (e) => {
    setItem(e.target.value);
  };
  const handleSubmit = () => {
    if (!item) return;
    setList([...list, item]);
    setItem("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter something to add"
        value={item}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Add</button>
      {list.map((name, index) => (
        <h4 key={index}>{name}</h4>
      ))}
    </>
  );
}

export default App;
