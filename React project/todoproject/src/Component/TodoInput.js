import React, { useState } from 'react';

function TodoInput(props) {
  const [inputValue, setInputValue] = useState("");

  const handleAddClick = () => {
    props.addlist(inputValue);
    setInputValue(""); // Clear the input field after adding
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder='enter here'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddClick} className="add-btn">add</button>
    </div>
  );
}

export default TodoInput;
