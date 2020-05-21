import React, { createContext, useState, useEffect } from "react";
import { getUsers } from "../services/user";

const DataContext = createContext(null);

const DataProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    isAdmin: false,
    avatarUrl: "",
    wrongLoginCount: "",
    password: "",
  });
  useEffect(() => {

    getUsers()
    .then(res => setUsers(res))
  }, []);
  return (
    <DataContext.Provider
      value={{
        account: { user, setUser },
        auth: { isAuthenticated, setIsAuthenticated },
        listUser: { users },
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
export { DataContext, DataProvider };
