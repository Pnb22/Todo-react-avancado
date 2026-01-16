import { createContext, useContext, useState, useMemo } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useLocalStorage('todos', [])
  const [filter, setFilter] = useState('all')

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }])
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const filteredTodos = useMemo(() => {
    if (filter === 'completed') return todos.filter(t => t.completed)
    if (filter === 'pending') return todos.filter(t => !t.completed)
    return todos
  }, [todos, filter])

  return (
    <TodoContext.Provider value={{
      todos: filteredTodos,
      addTodo,
      toggleTodo,
      removeTodo,
      setFilter,
      filter
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export const useTodos = () => useContext(TodoContext)

