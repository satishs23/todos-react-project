import React from 'react';

export const TodoItem = ({ todo ,onDelete }) => {
  // Check if todo exists and has title and desc properties
  if (!todo || !todo.title || !todo.desc) {
    return null; // Or display an error message or default content
  }

  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>onDelete(todo)}>Delete</button>
    </div>
  );
};
