// src/App.jsx
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoFilters from "./components/TodoFilters";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <TodoProvider>
      <TodoForm />
      <TodoFilters />
      <TodoList />
    </TodoProvider>
  );
}
