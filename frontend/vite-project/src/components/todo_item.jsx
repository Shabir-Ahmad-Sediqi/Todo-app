import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Trash2, Pencil } from 'lucide-react';

function Todo_item({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.title);

  const handleEditSave = () => {
    if (!editedText.trim()) return;
    onEdit(todo.id, { title: editedText });
    setIsEditing(false);
  };

  const keyDown = (e) => {
    if (e.key === 'Enter') {
      handleEditSave();
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setEditedText(todo.title);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-white border border-blue-200 rounded-xl shadow-sm hover:shadow-md px-5 py-4 transition-all"
    >
      <div className="flex items-start sm:items-center gap-3 flex-1">
        <button
          onClick={() => onToggle(todo.id)}
          className="mt-1 sm:mt-0"
          title="Toggle Complete"
        >
          <CheckCircle
            size={22}
            className={`transition-colors ${
              todo.completed ? 'text-blue-600' : 'text-gray-300'
            }`}
          />
        </button>

        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            onKeyDown={keyDown}
            onBlur={handleEditSave}
            className="flex-1 bg-white border border-blue-300 text-blue-900 px-3 py-1 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400"
            autoFocus
          />
        ) : (
          <span
            className={`text-base sm:text-lg font-medium break-words flex-1 ${
              todo.completed ? 'line-through text-blue-400' : 'text-blue-900'
            }`}
          >
            {todo.title}
          </span>
        )}
      </div>

      <div className="flex gap-2 sm:gap-2 mt-2 sm:mt-0">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="p-2 rounded-full bg-red-100 hover:bg-red-200 text-red-600 transition"
          onClick={() => onDelete(todo.id)}
          aria-label="Delete"
        >
          <Trash2 size={16} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 transition"
          onClick={() => {
            setIsEditing(true);
            setEditedText(todo.title);
          }}
          aria-label="Edit"
        >
          <Pencil size={16} />
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Todo_item;
