import React from "react";
import "./styles.css";
import Header from "../src/components/Header/Header";
import Login from "../src/components/Login/Login";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Login email="lekhachai9999@gmail.com" />
    </div>
  );
}
