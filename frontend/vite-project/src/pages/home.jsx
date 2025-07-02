// Home.jsx (styled version)
import React, { useEffect, useState } from 'react';
import Todo_list from '../components/todo_list';
import {
  getTasks,
  deleteTodo,
  toggleTodo,
  addTask,
  updateTask
} from '../services/todoServices';

function Home() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTodos();
  }, []);

  const handleAddTask = async (newTask) => {
    if (!newTask.trim()) return;
    const todo = await addTask({ title: newTask });
    setTodos((todos) => [...todos, todo]);
  };

  const loadTodos = async () => {
    try {
      const data = await getTasks();
      setTodos(data);
    } catch (error) {
      console.error(`Failed to fetch todos: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = async (id) => {
    const toggled = await toggleTodo(id);
    setTodos(todos.map((todo) => (todo.id === id ? toggled : todo)));
  };

  const handleEditTask = async (id, editedTask) => {
    const updatedTodo = await updateTask(id, editedTask);
    setTodos((prev) => prev.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-950 to-blue-900 text-white px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-white via-blue-300 to-white text-transparent bg-clip-text drop-shadow-xl animate-fade-in">
            Welcome to Your Dashboard
          </h1>
          <p className="text-blue-300 mt-4 text-lg italic tracking-wide animate-fade-in">
            Manage your tasks with style and speed
          </p>
        </div>

        {loading ? (
          <p className="text-blue-200 text-center text-lg animate-pulse">Loading...</p>
        ) : (
          <div className="animate-fade-in-up">
            <Todo_list
              todos={todos}
              onToggle={handleToggleTodo}
              onDelete={handleDelete}
              onadd={handleAddTask}
              onEdit={handleEditTask}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
