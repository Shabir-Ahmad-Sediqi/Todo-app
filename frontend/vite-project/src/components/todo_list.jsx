import React from 'react'
import Todo_item from './todo_item'
import Button from './button'
import { addTask } from '../services/todoServices'
import { useState } from 'react'

function Todo_list({todos, onToggle, onDelete}) {
    const [newTask, setNewTask] = useState('');

    const handleAddTask = async () => {
        if (!newTask.trim()) return
        await addTask({title: newTask});
        setNewTask('');
    }
  return (
    <div>
       <div>
            <input
             type="text" 
             placeholder='What are you planning to do'
             value={newTask}
             onChange={(e) => setNewTask(e.target.value)}
             className="border p-2 rounded w-full"
             />
             

            <Button
            onClick={handleAddTask}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"

            >
                Add
            </Button>
       </div>
      <ul>
        {todos.map((todo) => (
            <Todo_item
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            />
        ))}
      </ul>
    </div>
  )
}

export default Todo_list
