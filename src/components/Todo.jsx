import TodoItem from "./TodoItem";
import "./Todo.css"
import Knapp from "./Knapp";
import { useState } from "react";

function loadTodos() {
  try {
  const sparat = localStorage.getItem("todos");
  return sparat ? JSON.parse(sparat) : [] 
} catch {
    return [];
 }
}

function Todo() {

  
  const [todos, setTodos] = useState(loadTodos());
  const [text, setText] = useState("");
  
  function saveTodos(newTodos) {
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  function addTodo(e) {
    e.preventDefault();
    if (text.trim() === "") {
      return;
    }
    saveTodos([...todos, {id:Date.now(), text: text}])
    setText("");
  }
  
  function removeTodo(id) {
    saveTodos(todos.filter((todo) => todo.id !== id ));
  }
  
  return (
    <section className="todo">
      <h2> Att göra</h2>

      <form onSubmit={addTodo}>
        <input
          className="todo-info"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Vad ska du göra?"
          />
        <Knapp type="submit" text="Lägg till">{text}</Knapp>
      </form>

      {todos.length === 0 && <p>Inget att göra än.</p>}

      <ul className="todo-lista">
        {todos.map((todo) => (
          <TodoItem 
          key={todo.id}
          text={todo.text}
          onRemove={() => removeTodo(todo.id)}
          />
        ))}
      </ul>
    </section>
  );
}

export default Todo