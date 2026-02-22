import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input) return;

    const newItem = {
      id: Date.now(),
      name: input,
    };

    setList([...list, newItem]);
    setInput("");
  };

  const handleDelete = (indexToDelete) => {
    setList(list.filter((item) => item.id !== indexToDelete));
  };
  return (
    <>
      <h1>Smart Manager</h1>

      <input
        type="text"
        placeholder="Add an item..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <h3>List:</h3>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleDelete(item.id)}>❌</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
