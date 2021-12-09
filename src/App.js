import './App.css';
import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";


function App() {
  return (
    <div className="todo-app">
      <h1>TODO APP</h1>
      <TodoList />
    </div>
  );
}

export default App;
