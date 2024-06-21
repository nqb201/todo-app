import React, { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import './App.css';

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name) => {
    const newTask = { id: 'id-' + Date.now(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompleted = (id) => {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  const taskList = tasks.filter(FILTER_MAP[filter]).map(task => (
    <TodoItem
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));

  const filterList = FILTER_NAMES.map(name => (
    <button
      type="button"
      className={`filter-btn ${filter === name ? 'active' : ''}`}
      key={name}
      onClick={() => setFilter(name)}
    >
      {name}
    </button>
  ));

  return (
    <div className="todoapp">
      <h1>#todo</h1>
      <div className="filters">{filterList}</div>
      <TodoInput addTask={addTask} />
      <TodoList tasks={taskList} />
      <button className="delete-all-btn" onClick={deleteAllTasks}>
        Delete All
      </button>
    </div>
  );
}

export default App;
