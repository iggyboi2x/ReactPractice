function ToDoList({ todoItems, onDeleteTodo }) {
  return (
    <>
      <ul>
        {todoItems.map((todoItem, index) => (
          <li key={index}>
            {todoItem}
            {""}
            <button onClick={() => onDeleteTodo(index)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ToDoList;
