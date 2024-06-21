import React from 'react';

function TodoItem(props) {
  return (
    <div className="todoitem">
      <input
        type="checkbox"
        checked={props.completed}
        onChange={() => props.toggleTaskCompleted(props.id)}
      />
      <span className={props.completed ? 'completed' : ''}>{props.name}</span>
      <button onClick={() => props.deleteTask(props.id)}>🗑️</button>
    </div>
  );
}

export default TodoItem;
