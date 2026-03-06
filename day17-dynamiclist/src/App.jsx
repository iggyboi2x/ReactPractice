import Input from "./components/Input.jsx";
import { useState } from "react";
import "./App.css";
function App() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!item.trim()) {
      alert("Please add an item");
      return;
    }
    setList([...list, item.trim()]);
    setItem("");
  };

  const handleDelete = (indexToDelete) => {
    setList(list.filter((_, index) => index !== indexToDelete));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={item}
          placeholder="Enter an item to add..."
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>
      <ol>
        {list.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button onClick={() => handleDelete(index)}>❌</button>
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;
