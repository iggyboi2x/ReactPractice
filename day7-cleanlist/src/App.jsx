import { useState } from "react";
function App() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const handleClick = () => {
    setList([...list, item]);
    setItem("");
  };

  const handleDelete = (indexToRemove) => {
    setList(list.filter((_, index) => index !== indexToRemove));
  };

  return (
    <>
      <input
        type="text"
        placeholder="Add something to the list"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>

      <h1>List:</h1>
      {list.map((name, index) => {
        return (
          <div key={index}>
            <span>
              {name}
              <button onClick={() => handleDelete(index)}>X</button>
            </span>
          </div>
        );
      })}
    </>
  );
}

export default App;
