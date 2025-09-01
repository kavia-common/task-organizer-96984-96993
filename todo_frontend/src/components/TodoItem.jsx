import React from 'react';
import PropTypes from 'prop-types';

/**
 * TodoItem component renders a single task row with a custom checkbox and drag handle.
 * Uses styles from common.css and todo-2102-6.css imported at app level.
 */
// PUBLIC_INTERFACE
export default function TodoItem({ id, title, completed, onToggle }) {
  const handleToggle = () => onToggle(id);

  return (
    <article className={`task-item${completed ? ' is-completed' : ''}`} data-task-id={id}>
      <button
        className={`check ${completed ? 'check-filled' : 'check-outline'}`}
        aria-label={
          completed ? `Mark ${title} as incomplete` : `Mark ${title} as complete`
        }
        aria-pressed={completed ? 'true' : 'false'}
        onClick={handleToggle}
        type="button"
      >
        {completed ? <span className="check-tick" aria-hidden="true"></span> : null}
      </button>
      <h2 className="task-title typo-6">{title}</h2>
      <span className="drag-handle" aria-hidden="true"></span>
    </article>
  );
}

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
};

TodoItem.defaultProps = {
  completed: false,
};
