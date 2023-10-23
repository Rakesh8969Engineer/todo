import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ name: '', description: '' });
  const [editingTodo, setEditingTodo] = useState(null);

  const addTodo = () => {
    if (newTodo.name.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo({ name: '', description: '' });
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    setEditingTodo(index);
  };

  const saveEdit = (index) => {
    setEditingTodo(null);
  };

  return (



    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Task Name"
        value={newTodo.name}
        onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })}
      />





      <input
        type="text"
        placeholder="Task Description"
        value={newTodo.description}
        onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
      />






      <button onClick={addTodo}>Add Task</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{index === editingTodo ? <input type="text" value={todo.description} /> : todo.name}</td>
              <td>{index === editingTodo ? <input type="text" value={todo.description} /> : todo.description}</td>
              <td>
                {index === editingTodo ? (
                  <button onClick={() => saveEdit(index)}>Save</button>
                ) : (
                  <button onClick={() => editTodo(index)}>Edit</button>
                )}
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
