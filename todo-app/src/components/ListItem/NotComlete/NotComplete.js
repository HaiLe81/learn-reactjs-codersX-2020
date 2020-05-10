import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../../../DataProvider";
import TodoItem from "../../TodoItem/TodoItem";

let NotComPlete = props => {
  const context = useContext(DataContext);
  const [displayTodos, setDisplayTodos] = useState([]);
  useEffect(() => {
    let todos = context.todos || [];
    todos = todos.map((todo, index) => ({ ...todo, index }));
    const unFinishTodos = todos.filter(todo => todo.isCompleted === false);
    setDisplayTodos(unFinishTodos);
  }, [context.todos]);
  const completeTodo = item => {
    if (!context) return;
    context.actions.complete(item);
  };
  return (
    <div className="upComming">
      <p className="title">UP COMMING</p>
      <div className="contentUpComming">
        {displayTodos.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            onClick={() => completeTodo(item)}
          />
        ))}
      </div>
    </div>
  );
};
export default NotComPlete;
