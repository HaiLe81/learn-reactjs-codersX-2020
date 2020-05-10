import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../../DataProvider";
import TodoItem from "../../TodoItem/TodoItem";

let ComPlete = props => {
  const context = useContext(DataContext);
  const [displayTodos, setDisplayTodos] = useState([]);
  useEffect(() => {
    let todos = context.todos || [];
    todos = todos.map((todo, index) => ({ ...todo, index }));
    const unFinishTodos = todos.filter(todo => todo.isCompleted === true);
    setDisplayTodos(unFinishTodos);
  }, [context.todos]);
  const removeTodo = item => {
    if (!context) return;
    context.actions.remove(item);
  };
  return (
    <div className="finished">
      <p className="titleFinished">FINISHED</p>
      <div className="contentFinished">
        {displayTodos.length > 0 &&
          displayTodos.map((item, index) => (
            <TodoItem
              key={index}
              item={item}
              onClick={() => removeTodo(item)}
            />
          ))}
      </div>
    </div>
  );
};
export default ComPlete;
