import React from 'react'
import Button from './button'
import { useState } from 'react'

function Todo_item({ todo, onToggle, onDelete, onEdit }) {

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState('');
  
  const handleEditSave = () => {
    if (!editedText.trim()) return 
    onEdit(todo.id, {title: editedText})
    setIsEditing(false)
  };

  const keyDown = (e) => {
    if (e.key == 'Enter'){
      handleEditSave()
    }
    else if (e.key == 'Escape'){
      setIsEditing(false)
      setEditedText(todo.title)
    }
  }

  if (!todo) return null

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 p-4 mb-3 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl shadow-md transition-transform hover:scale-[1.01] w-full">
      <div className="flex items-start sm:items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5 mt-1 sm:mt-0 accent-purple-500 cursor-pointer"
        />
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            onKeyDown={keyDown}
            className="px-3 py-1 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
            autoFocus
            />
        ) : (
              <span
          className={`text-base sm:text-lg font-medium break-words transition-colors ${
            todo.completed ? 'line-through text-gray-500' : 'text-white'
          }`}
        >
          {todo.title}
        </span>
        )}
    
      </div>

      <div className="flex justify-end sm:justify-start space-x-2">
        <Button
            onClick={() => onDelete(todo.id)}
            className="text-white bg-red-600 hover:bg-red-700 rounded-full w-8 h-8 flex items-center justify-center text-xl shadow-md transition hover:rotate-12"
            aria-label="Delete todo"
          >
            &times;
        </Button>
        <button
          onClick={() => {setIsEditing(true), setEditedText(todo.title)}}
          className="text-white bg-blue-600 hover:bg-blue-700 rounded-full w-8 h-8 flex items-center justify-center text-lg shadow-md transition hover:scale-110"
          aria-label="Edit todo"
        >
          ✏️
        </button>
    </div>

    </div>
  )
}

export default Todo_item
