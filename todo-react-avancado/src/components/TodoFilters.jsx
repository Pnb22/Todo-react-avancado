// src/components/TodoFilters.jsx
import { memo } from "react";
import { useTodos } from "../context/TodoContext";

function TodoFilters() {
  const { filter, setFilter } = useTodos();

  return (
    <div>
      <button onClick={() => setFilter("all")} disabled={filter === "all"}>Todas</button>
      <button onClick={() => setFilter("pending")} disabled={filter === "pending"}>Pendentes</button>
      <button onClick={() => setFilter("done")} disabled={filter === "done"}>Concluídas</button>
    </div>
  );
}

export default memo(TodoFilters);
