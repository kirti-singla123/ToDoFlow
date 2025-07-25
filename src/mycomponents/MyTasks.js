import React, { useState, useEffect } from 'react';

export default function MyTasks() {
  // ✅ Load from localStorage during state initialization
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    try {
      return saved ? JSON.parse(saved) : [];
    } catch (err) {
      console.error("Error loading todos:", err);
      return [];
    }
  });

  const [task, setTask] = useState('');

  // ✅ Save to localStorage when todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log('Saved todos to localStorage:', todos);
  }, [todos]);

  const handleAdd = () => {
    if (task.trim() === '') return;
    setTodos([
      ...todos,
      { id: Date.now(), text: task.trim(), completed: false }
    ]);
    setTask('');
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const pageStyle = {
    backgroundImage: `url("https://slidescorner.com/wp-content/uploads/2024/02/Aesthetic-Pastel-Cute-PowerPoint-Background-Pink-Purple-Organic-Shapes-by-SlidesCorner.com_.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    padding: '100px 20px',
  };

  const overlayBox = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '30px',
    borderRadius: '12px',
    maxWidth: '700px',
    margin: '0 auto',
    boxShadow: '0 0 12px rgba(0,0,0,0.2)',
  };

  return (
    <div style={pageStyle}>
      <div style={overlayBox}>
        <h2 className="text-center mb-4">Manage Your Todos</h2>

        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="btn btn-success" onClick={handleAdd}>
            Add Todo
          </button>
        </div>

        <ul className="list-group">
          {todos.map(todo => (
            <li
              key={todo.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  color: todo.completed ? '#aaa' : '#000'
                }}
              >
                {todo.text}
              </span>

              <div className="d-flex align-items-center" style={{ gap: '10px' }}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggle(todo.id)}
                />
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
