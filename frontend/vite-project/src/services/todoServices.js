import api from './api'; // your configured axios instance

export const getTasks = async () => {
  const response = await api.get('/tasks'); // append /tasks to baseURL
  return response.data.data;
};

export const addTask = async (todo) => {
  const response = await api.post('/tasks', todo);
  return response.data.data;
};

export const updateTask = async (id, updatedTodo) => {
  const response = await api.patch(`/tasks/${id}`, updatedTodo);
  return response.data.data;
};

export const deleteTodo = async (id) => {
  const response = await api.delete(`/tasks/${id}`);
  return response.data;
};

export const toggleTodo = async (id) => {
  const response = await api.patch(`/tasks/${id}/toggle`);
  return response.data.data;
};
