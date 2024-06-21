import React, { useState } from 'react';

function TodoInput(props) {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '') {
      props.addTask(name);
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Add details"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoInput;
