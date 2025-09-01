import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

/**
 * TodoList displays the Tasks header and a list of TodoItem entries.
 * It also shows the "X of Y completed" subtitle.
 */
// PUBLIC_INTERFACE
export default function TodoList({ items, onToggle }) {
  const { completed, total } = useMemo(() => {
    const totalCount = items.length;
    const completedCount = items.filter(i => i.completed).length;
    return { completed: completedCount, total: totalCount };
  }, [items]);

  return (
    <>
      <header className="todo-header" role="banner" aria-label="Tasks header">
        <div className="header-inner">
          <h1 className="header-title typo-4">Tasks</h1>
          <p className="header-subtitle typo-5">{completed} of {total} completed</p>
        </div>
      </header>

      <section className="task-list" aria-label="Task list">
        {items.map(item => (
          <TodoItem
            key={item.id}
            id={item.id}
            title={item.title}
            completed={item.completed}
            onToggle={onToggle}
          />
        ))}
      </section>
    </>
  );
}

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  })).isRequired,
  onToggle: PropTypes.func.isRequired,
};
