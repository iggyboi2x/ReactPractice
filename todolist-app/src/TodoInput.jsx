import { useState } from "react";

function TodoInput({ onAddTodo }) {
  const [text, setText] = useState("");
  const handleAddTodo = () => {
    onAddTodo(text);
    setText("");
  };
  return (
    <>
      <input
        className="input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn" onClick={handleAddTodo}>
        ➕
      </button>
    </>
  );
}

export default TodoInput;
