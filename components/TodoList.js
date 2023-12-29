// frontend/components/TodoList.js

import React from 'react';

const TodoList = ({ todos, onDelete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title}{' '}
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
