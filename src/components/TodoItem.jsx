import Knapp from "./Knapp"
import "./Todo.css"

function TodoItem({text, onRemove}) {
  return (
    <li className ="todo-item">
      <span>{text}</span>
      <Knapp 
        type="button"
        onCLick={onRemove}
        aria-label="Ta bort"
      >✕</Knapp>
    </li>
  )
}

export default TodoItem