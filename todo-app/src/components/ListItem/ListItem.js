import React, { useContext } from "react";
import "./ListItem.css";
import { DataContext } from "../../DataProvider/index";
import { ReactComponent as Empty } from "../../images/empty-1.svg";
import NotComPlete from "./NotComlete/NotComplete";
import ComPlete from "./Complete/Complete";

let ListItem = () => {
  const context = useContext(DataContext);
  const todos = context.todos || [];

  return todos.length === 0 ? (
    <div className="App" style={{ height: "80vh" }}>
      <Empty style={{ width: "80%", height: "80%" }} />
    </div>
  ) : (
    <div className="App">
      <div className="listItem">
        <div>
          <NotComPlete />
          <ComPlete />
        </div>
      </div>
    </div>
  );
};
export default ListItem;
