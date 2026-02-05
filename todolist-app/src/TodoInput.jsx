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
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
    </>
  );
}

export default TodoInput;
