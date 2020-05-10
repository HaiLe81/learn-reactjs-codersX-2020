import React from "react";
import "./TodoItem.css";
import classnames from "classnames";

let TodoItem = props => {
  const { item, onClick } = props;
  const index = `0${item.index + 1}`.slice(-2);
  return (
    <div
      className={classnames("TodoItem", {
        "TodoItem-complete": item.isCompleted
      })}
    >
      <p
        className={classnames("", {
          complete: item.isCompleted
        })}
      >
        {`${index}.${item.title}`}
      </p>
      <img
        alt="Not Found"
        onClick={onClick}
        src={`${
          !item.isCompleted
            ? "https://image.flaticon.com/icons/svg/907/907830.svg"
            : "https://image.flaticon.com/icons/svg/1890/1890119.svg"
        }`}
      />

      {/* {!item.isComplete && (
        <img
          className="delete"
          alt="Not Found"
          onClick={onClick}
          src="https://image.flaticon.com/icons/svg/1890/1890119.svg"
        />
      )} */}
    </div>
  );
};
export default TodoItem;
