// src/components/TodoItem.jsx
import { memo } from "react";

function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li>
      <label style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
        />
        {todo.title}
      </label>
      <button onClick={() => onRemove(todo.id)}>Remover</button>
    </li>
  );
}

export default memo(TodoItem);
