import React from "react";

const TodoForm = ({ handleSubmit, setTodo, todo, editId }) => (
  <form className="todoForm" onSubmit={handleSubmit}>
    <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
    <button type="submit">{editId ? "Edit" : "Go"}</button>
  </form>
);

export default TodoForm;
