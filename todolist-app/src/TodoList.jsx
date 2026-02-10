function ToDoList({ todoItems, onDeleteTodo }) {
  return (
    <>
      <ul className="list">
        {todoItems.map((todoItem, index) => (
          <li key={index}>
            {todoItem}
            <button className="btn-del" onClick={() => onDeleteTodo(index)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ToDoList;
