// frontend/pages/index.js

import React, { useState, useEffect } from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch todos from your API
    // Example: fetch('http://localhost:3001/todos').then(response => response.json()).then(data => setTodos(data));
  }, []);

  const handleAddTodo = (newTodo) => {
    // Add newTodo to the todos state
    setTodos([...todos, newTodo]);
    // You should also make a POST request to your API to save the new todo
  };

  const handleDeleteTodo = (id) => {
    // Remove todo with the specified id from the todos state
    setTodos(todos.filter((todo) => todo.id !== id));
    // You should also make a DELETE request to your API to delete the todo
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm onAdd={handleAddTodo} />
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default Home;
