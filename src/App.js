import "./App.css";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((td) => td.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }

    if (todo !== " ") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  };
  const handleRemove = (id) => {
    const deleteTodo = todos.filter((td) => td.id !== id);
    setTodos([...deleteTodo]);
  };
  const handleEdit = (editId) => {
    const editTodo = todos.find((td) => td.id === editId);
    setTodo(editTodo.todo);
    setEditId(editId);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>What To-Do List</h1>
        <TodoForm
          todo={todo}
          handleSubmit={handleSubmit}
          setTodo={setTodo}
          editId={editId}
        />
        <TodoList
          todos={todos}
          handleRemove={handleRemove}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default App;
