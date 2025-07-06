import React, { useState } from 'react';
import Todo_item from './todo_item';
import Button from './button';
import { motion } from 'framer-motion';

function Todo_list({ todos, onToggle, onDelete, onadd, onEdit }) {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = async () => {
    if (!newTask.trim()) return;
    await onadd(newTask);
    setNewTask('');
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto px-6 py-8 bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl border border-blue-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: 'spring' }}
    >
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-blue-900 drop-shadow-md"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        Task Manager
      </motion.h1>

      {/* Input + Button */}
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-4 mb-8 bg-blue-100 p-4 rounded-xl shadow-inner border border-blue-200"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <input
          type="text"
          placeholder="What are you planning to do?"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 px-4 py-2 rounded-md bg-white border border-blue-300 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
        />
        <Button
          onClick={handleAddTask}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow-md transition-transform hover:scale-105"
        >
          Add
        </Button>
      </motion.div>

      {/* Todo List */}
      <ul className="space-y-4">
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
    </motion.div>
  );
}

export default Todo_list;
