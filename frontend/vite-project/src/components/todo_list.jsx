// Todo_list.jsx (styled version)
import React, { useState } from 'react';
import Todo_item from './todo_item';
import Button from './button';

function Todo_list({ todos, onToggle, onDelete, onadd, onEdit }) {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = async () => {
    if (!newTask.trim()) return;
    await onadd(newTask);
    setNewTask('');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 bg-gradient-to-br from-blue-950 to-blue-900 rounded-3xl shadow-2xl border border-blue-700/30">
      {/* Title */}
      <h1 className="text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-white via-blue-300 to-white bg-clip-text text-transparent drop-shadow-xl animate-fade-in">
        Task Manager
      </h1>

      {/* Input + Button */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 bg-blue-950 p-4 rounded-xl shadow-lg border border-blue-800/40">
        <input
          type="text"
          placeholder="What are you planning to do?"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 px-4 py-2 rounded-md bg-blue-900 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-inner"
        />
        <Button
          onClick={handleAddTask}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md shadow-md transition hover:scale-105"
        >
          Add
        </Button>
      </div>

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
    </div>
  );
}

export default Todo_list;
