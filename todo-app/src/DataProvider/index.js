import React, { createContext, useState, useEffect } from "react";
import LocalStorageService from "./db/index";

const DataContext = createContext(null);
const DataProvider = props => {
  const [todos, setTodos] = useState(null);
  const service = new LocalStorageService();
  useEffect(() => {
    const todosFromStorage = service.get();
    setTodos(todosFromStorage);
  }, []);

  useEffect(() => {
    if (todos !== null) service.update(todos);
  }, [todos]);
  const addTodos = title => {
    const todo = { id: Date.now(), title, isCompleted: false };
    setTodos(todos => [todo, ...todos]);
  };
  const complete = item => {
    const completeIndex = todos.findIndex(todo => todo.title === item.title);
    const newTodos = [...todos];
    newTodos.splice(completeIndex, 1, {
      ...todos[completeIndex],
      isCompleted: true
    });
    setTodos(newTodos);
  };
  const remove = item => {
    const deleteIndex = todos.findIndex(todo => todo.title === item.title);
    const newTodos = [...todos];
    newTodos.splice(deleteIndex, 1);
    setTodos(newTodos);
  };
  return (
    <DataContext.Provider
      value={{ todos, actions: { addTodos, complete, remove } }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
export { DataContext, DataProvider };
