import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
  return (
    <div className="todolist">
      {props.tasks.length ? props.tasks : <p>No tasks available</p>}
    </div>
  );
}

export default TodoList;
