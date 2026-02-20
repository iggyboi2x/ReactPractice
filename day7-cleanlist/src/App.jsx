import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const handleAdd = () => {
    setList([...list, item]);
    setItem("");
  };

  const handleDelete = (indexToDelete) => {
    {
      setList(list.filter((_, index) => index !== indexToDelete));
    }
  };

  return (
    <>
      <h1>Miggy's List</h1>
      <input
        type="text"
        placeholder="Enter something to add..."
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <h3>List:</h3>
      {list.map((item, index) => (
        <li key={index}>
          <span>
            {item}{" "}
            <button className="del-btn" onClick={() => handleDelete(index)}>
              ❌
            </button>
          </span>
        </li>
      ))}
    </>
  );
}

export default App;
