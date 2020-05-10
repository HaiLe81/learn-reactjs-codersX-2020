import React from "react";
import "./styles.css";

export default function App() {
  const todos = ["Go to market", "Buy food", "Make dinner"];
  return (
    <div className="">
      <h2>Todo List</h2>
      <ul>
        {todos.map(x => (
          <li>{x}</li>
        ))}
      </ul>
    </div>
  );
}
