import React, {useEffect, useState} from 'react'
import Todo_list from '../components/todo_list'
import {
     getTasks,
     addTask,
     updateTask,
     deleteTodo,
     toggleTodo

 } from '../services/todoServices'

function Home() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadTodos()
    }, [])

    const loadTodos = async () => {
        try{
            const data = await getTasks();
            setTodos(data)
        }catch(error){
            console.error(`Failed to fetch todos ${error}`)
        }finally{
            setLoading(false)
        }
    };

    const handleDelete = async (id) => {
        await deleteTodo(id);
        setTodos(todos.filter(todo => todo.id !== id))
    };

    const handleToggleTodo = async (id) => {
        const toggled = await toggleTodo(id);
        setTodos(todos.map(todo => (todo.id == id ? toggled : todo)))
    }

  return (
    <div className="max-w-xl mx-auto mt-10 px-4">
        <h1 className="text-2xl font-bold mb-4 text-center text-white"> My Todo List</h1>
        {loading ? (
            <p className="text-gray-300 text-center">Loading...</p>
        ) : (
            (
            <Todo_list
               todos={todos}
               onToggle={handleToggleTodo}
               onDelete={handleDelete}
            />
            )
        )}
    </div>
  )
}

export default Home
