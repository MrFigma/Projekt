import TodoItem from "./TodoItem";
import "./Todo.css"
import Knapp from "./Knapp";
import { useState } from "react";


function Todo() {

  
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  
  function addTodo(e) {
    e.preventDefault();
    if (text.trim() === "") {
      return;
    }
    setTodos([...todos, {id:Date.now(), text: text}])
    setText("");
  }
  
  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id ));
  }
  
  return (
    <section className="todo">
      <h2> Att göra</h2>

      <form onSubmit={addTodo}>
        <input
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