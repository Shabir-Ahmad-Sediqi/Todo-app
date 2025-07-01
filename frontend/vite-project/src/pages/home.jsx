import React, { useEffect, useState } from 'react'
import Todo_list from '../components/todo_list'
import {
  getTasks,
  deleteTodo,
  toggleTodo,
  addTask,
  updateTask
} from '../services/todoServices'
import { Link } from 'react-router-dom'

function Home() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadTodos()
  }, []);

  const handleAddTask = async (newTask) => {
    if (!newTask.trim()) return 
    const todo = await addTask({title: newTask})
    setTodos((todos) => [...todos, todo])
  }

  const loadTodos = async () => {
    try {
      const data = await getTasks()
      setTodos( data)
    } catch (error) {
      console.error(`Failed to fetch todos: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    await deleteTodo(id)
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleToggleTodo = async (id) => {
    const toggled = await toggleTodo(id)
    setTodos(todos.map((todo) => (todo.id === id ? toggled : todo)))
  };

  const handleEditTask = async (id, editedTask) => {
    const updatedTodo = await updateTask(id, editedTask);
    setTodos((prev) => prev.map((todo) => todo.id === id ? updatedTodo : todo));

  }

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-10">
      <div className="max-w-3xl mx-auto">
        {loading ? (
          <p className="text-gray-400 text-center text-lg">Loading...</p>
        ) : (
          <Todo_list
            todos={todos}
            onToggle={handleToggleTodo}
            onDelete={handleDelete}
            onadd={handleAddTask}
            onEdit={handleEditTask}
          />
        )}
      </div>
    </div>
  )
}

export default Home
