
import axios from "axios";

const BASE_URL = 'http://localhost:5000/api/tasks';

export const getTasks = async () => {
    const response = await axios.get(BASE_URL)
    return response.data.data
};

export const addTask = async (todo) => {
    const response = await axios.post(BASE_URL, todo)
    return response.data.data
};

export const updateTask = async (id, updatedTodo) => {
    const response = await axios.patch(`${BASE_URL}/${id}`, updatedTodo)
    return response.data.data
};

export const deleteTodo = async (id) => {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data
};

export const toggleTodo = async (id) => {
    const response = await axios.patch(`${BASE_URL}/${id}/toggle`);
    return response.data.data
};
