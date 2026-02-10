import { useState } from "react";
import TodoInput from "./TodoInput.jsx";
import TodoList from "./TodoList.jsx";
import "./App.css";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const addTodo = (newTodo) => {
    setTodoItems([...todoItems, newTodo]);
  };

  const deleteTodo = (itemIndex) => {
    setTodoItems(todoItems.filter((_, index) => index !== itemIndex));
  };

  return (
    <>
      <h1 className="title-div">Miggy's To-do List</h1>
      <TodoInput onAddTodo={addTodo}></TodoInput>
      <TodoList todoItems={todoItems} onDeleteTodo={deleteTodo}></TodoList>
    </>
  );
}

export default App;
