import { useState } from "react";

function TodoInput(onAddTodo) {
  const [input, setInput] = useState("");

  const handlesubmit = () => {
    onAddTodo(input);
    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      ></input>
      <button onClick={handlesubmit}>Add</button>
    </div>
  );
}

export default Todoinput;
