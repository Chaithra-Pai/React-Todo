import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input,setInput] = useState(props.edit ?  props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  })

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');

  };

  return(
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ?
      (<>
        <input type="text" placeholder="Update your item" value={input} name="text" className="todo-input edit" onChange={handleChange} autocomplete="off" ref={inputRef}/>
      <button className="todo-button edit">UPDATE</button>
      </>) :
      (<>
        <input type="text" placeholder="Add a todo" value={input} name="text" className="todo-input" onChange={handleChange} autocomplete="off" ref={inputRef}/>
        <select name="priority" id="priority" className="todo-dropdown">
          <option className="todo-option" disabled>Select Priority</option>
          <option className="todo-option" value="1">1</option>
          <option className="todo-option" value="2">2</option>
          <option className="todo-option" value="3">3</option>
        </select>
        <button className="todo-button">ADD</button>
      </>)}
    </form>
  )
}

export default TodoForm;
