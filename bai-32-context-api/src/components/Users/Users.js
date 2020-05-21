import React, { useContext } from "react";
import "./Users.css";
import { DataContext } from "../../context/DataProvider";

export default function Users() {
  const context = useContext(DataContext);

  const listUser = context.listUser.users;
  console.log("users", listUser);
  return <div className="App">Users</div>;
}
