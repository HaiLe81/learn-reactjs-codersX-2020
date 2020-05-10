import React from "react";
import "./styles.css";
import Notification from "./components/Notification/Notification";

export default function App() {
  return (
    <div className="App">
      <Notification hasUnread="hasUnread" />
    </div>
  );
}
