import React, { useCallback, useMemo, useState } from 'react';
import TodoList from './TodoList';

/**
 * TodoApp is the main UI for the Todo screen converted from the static HTML template.
 * It manages the task list state, toggling completion, and adding new tasks.
 *
 * Styles are provided by importing common.css and todo-2102-6.css at the app entry.
 */
// PUBLIC_INTERFACE
export default function TodoApp() {
  const initialItems = useMemo(
    () => [
      { id: 'task_item_1', title: 'Implement Figma design', completed: false },
      { id: 'task_item_2', title: 'Fix UI bugs', completed: false },
      { id: 'task_item_3', title: 'Test features', completed: false },
      { id: 'task_item_4', title: 'Add SVG icons', completed: true },
    ],
    []
  );

  const [items, setItems] = useState(initialItems);

  // PUBLIC_INTERFACE
  const handleToggle = useCallback((id) => {
    setItems(prev =>
      prev.map(i => (i.id === id ? { ...i, completed: !i.completed } : i))
    );
  }, []);

  // PUBLIC_INTERFACE
  const handleAdd = useCallback(() => {
    const nextIndex = items.length + 1;
    const newItem = {
      id: `task_item_${Date.now()}`,
      title: `New task ${nextIndex}`,
      completed: false,
    };
    setItems(prev => [...prev, newItem]);
    // After render, the list layout will push the new item to the bottom.
  }, [items.length]);

  return (
    <main className="screen todo-2102-6" data-screen-id="2102:6" aria-label="Todo screen">
      <TodoList items={items} onToggle={handleToggle} />
      <button className="fab-add" aria-label="Add new task" onClick={handleAdd} type="button">
        <span className="fab-plus" aria-hidden="true"></span>
      </button>
    </main>
  );
}
