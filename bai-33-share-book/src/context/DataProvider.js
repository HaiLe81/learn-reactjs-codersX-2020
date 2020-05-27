import React, { createContext, useState, useEffect } from "react";
import { getBooks } from "../services/book";
import { getUsers } from "../services/user";

const DataContext = createContext(null);

const DataProvider = (props) => {
  const userDefault = {
    id: "",
    name: "",
    email: "",
    password: "",
  };
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(userDefault);
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then((res) => setBooks(res));
  }, []);

  useEffect(() => {
    getUsers().then((res) => setUsers(res));
  }, []);

  const resetUser = () => {
    setUser(userDefault);
    setIsAuthenticated(false);
  };

  const getBookById = (bookId) => {
    const result = books.find((item) => item.id === bookId);
    return result.title;
  };
  return (
    <DataContext.Provider
      value={{
        account: { user, setUser },
        auth: { isAuthenticated, setIsAuthenticated, resetUser },
        listBook: { books },
        listUser: { users },
        actions: {
          getBookById,
        },
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
export { DataContext, DataProvider };
