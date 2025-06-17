import React, { useState } from 'react'
import Todo_item from './todo_item'
import Button from './button'
import { addTask } from '../services/todoServices'

function Todo_list({ todos, onToggle, onDelete, onadd, onEdit }) {
  const [newTask, setNewTask] = useState('')

  const handleAddTask = async () => {
    if (!newTask.trim()) return
    await onadd(newTask)
    setNewTask('')
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent drop-shadow-lg">
        Task Manager
      </h1>

      {/* Input + Button */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 bg-gray-800 p-4 rounded-xl shadow-lg">
        <input
          type="text"
          placeholder="What are you planning to do?"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 px-4 py-2 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <Button
          onClick={handleAddTask}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md shadow-md transition"
        >
          Add
        </Button>
      </div>

      {/* Todo List */}
      <ul className="space-y-3">
        {todos.map((todo) => (
          <Todo_item
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </ul>
    </div>
  )
}

export default Todo_list
