function Todolist({ todos, onDeleteTodo }) {
  return (
    <>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={onDeleteTodo}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
