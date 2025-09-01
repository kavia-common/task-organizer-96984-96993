import React, { useEffect, useState } from 'react';
import './App.css';
// Import converted design CSS inside src folder
import './assets/common.css';
import './assets/todo-2102-6.css';

import TodoApp from './components/TodoApp';

/**
 * Root application component that renders the TodoApp and provides a simple theme toggle
 * (kept from the template for demonstration and accessibility).
 */
// PUBLIC_INTERFACE
export default function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
      <header className="App-header" style={{ minHeight: 0, padding: 0, background: 'transparent' }}>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          type="button"
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </header>
      <TodoApp />
    </div>
  );
}
