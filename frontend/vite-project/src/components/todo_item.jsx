import React from 'react'
import Button from './button'

function Todo_item({todo, onToggle, onDelete}) {
  if (!todo) return null 
  return (
    <div className="flex items-center space-x-4 p-2 border-b">
        <input
         type="checkbox"
         checked={todo.completed}
         onChange={() => {onToggle(todo.id)}}
         className="w-5 h-5"
         />
        <span className={todo.completed ? 'line-through text-gray-500' : ''}>
        {todo.title}
        </span>
       <Button
        onClick={() => onDelete(todo.id)}
        className="bg-red-500 hover:bg-red-700"
        aria-label="Delete todo"
      >
        &times;
      </Button>

    </div>
  )
}

export default Todo_item
