import Knapp from "./Knapp"
import "./Todo.css"

function TodoItem({text, onRemove}) {
  return (
    <li className ="todo-item">
      <span>{text}</span>
      <Knapp 
        type="button"
        text="✕"
        onClick={onRemove}
        aria-label="Ta bort"
      >{text}</Knapp>
    </li>
  )
}

export default TodoItem