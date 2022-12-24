import React from "react";

const TodoList = ({ todos, handleEdit, handleRemove }) => {
  return (
    <ul className="allTodos">
      {todos.map((t) => (
        <li className="singleTodo">
          <span className="todoText" key={t.id}>
            {t.todo}
          </span>
          <button onClick={() => handleEdit(t.id)}>Edit</button>
          <button onClick={() => handleRemove(t.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
