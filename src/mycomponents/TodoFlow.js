import React from 'react';
import { Link } from 'react-router-dom';

export default function TodoFlow() {
  const homeSection = {
    backgroundImage: `url('https://wallpapercave.com/wp/wp9139915.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
    overflow: 'hidden',
  };

  const overlayBox = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '30px',
    borderRadius: '12px',
    textAlign: 'center',
    maxWidth: '700px',
    margin: '0 auto',
  };

  return (
    <div style={homeSection}>
      <div style={overlayBox}>
        <h1 className="display-5 fw-bold">
          Welcome to <span className="text-primary">TodoFlow</span>
        </h1>
        <p className="lead mt-3 mb-2">
          Organize your tasks, stay focused, and get things done efficiently.
        </p>
        <p style={{ fontSize: '0.95rem' }}>
          Create, update, and manage your todos with ease.
        </p>

        {/* ✅ Link to TodoFlow page */}
        <Link to="/MyTasks" className="btn btn-primary btn-sm mt-2">
          Get Started
        </Link>
      </div>
    </div>
  );
}
