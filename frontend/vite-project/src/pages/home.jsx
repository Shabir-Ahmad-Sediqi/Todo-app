import React, { useEffect, useState } from 'react';
import Todo_list from '../components/todo_list';
import {
  getTasks,
  deleteTodo,
  toggleTodo,
  addTask,
  updateTask
} from '../services/todoServices';
import { motion } from 'framer-motion';

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

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: 'spring' }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 via-white to-blue-200 text-blue-900 px-4 py-10">
      <motion.div
        className="max-w-4xl mx-auto bg-white/60 backdrop-blur-lg border border-blue-300 shadow-xl rounded-2xl p-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 text-transparent bg-clip-text drop-shadow-lg">
            Welcome to Your Dashboard
          </h1>
          <p className="text-blue-600 mt-4 text-lg italic tracking-wide">
            Manage your tasks with style and speed
          </p>
        </motion.div>

        {/* Body */}
        {loading ? (
          <motion.p
            className="text-blue-700 text-center text-lg animate-pulse"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Loading...
          </motion.p>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Todo_list
              todos={todos}
              onToggle={handleToggleTodo}
              onDelete={handleDelete}
              onadd={handleAddTask}
              onEdit={handleEditTask}
            />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default Home;
