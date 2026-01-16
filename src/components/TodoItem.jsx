import React from 'react'
import { useTodos } from '../context/TodoContext'


const TodoItem = React.memo(({ todo }) => {
const { toggleTodo, removeTodo } = useTodos()


return (
<li>
<span onClick={() => toggleTodo(todo.id)} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
{todo.text}
</span>
<button onClick={() => removeTodo(todo.id)}>❌</button>
</li>
)
})


export default TodoItem