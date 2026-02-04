import { useState } from "react";
import TodoInput from "./TodoInput.jsx";
import TodoList from "./TodoList.jsx";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}

export default App;
