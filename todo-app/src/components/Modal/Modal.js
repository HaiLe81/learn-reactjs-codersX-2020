import React, { useContext, useState, useEffect, useRef } from "react";
import { DataContext } from "../../DataProvider";
import "./Modal.css";
import { ReactComponent as Close } from "../../images/close.svg";

export default function Modal({ show, close }) {
  const context = useContext(DataContext);
  const [shouldRender, setShouldRender] = useState(false);
  const inputEle = useRef(null);
  const [text, setText] = useState("");
  const [isValidText, setIsValidText] = useState(false);
  useEffect(() => {
    if (show) {
      setShouldRender(true);
    }
  }, [show]);
  useEffect(() => {
    if (text === "") {
      setIsValidText(false);
      return;
    }
    setIsValidText(true);
  }, [text]);
  const onChange = e => {
    const value = e.target.value;
    setText(value);
  };
  const onAnimationEnd = () => {
    if (!show) {
      setShouldRender(false);
    }
  };

  const addTodo = () => {
    if (!context) return;
    if (!isValidText) {
      inputEle.current.focus();
      return;
    }
    const {
      actions: { addTodos }
    } = context;
    addTodos(text);
    setText("");
    close();
  };

  return (
    shouldRender && (
      <div
        onAnimationEnd={onAnimationEnd}
        className="modal-z"
        style={{ animation: `${show ? "fade-in" : "fade-out"} 500ms` }}
      >
        <div className="card">
          <Close onClick={close} />
          <div className="card_title">Add ToDo</div>
          <div className="card_body">
            <input
              autoFocus
              ref={inputEle}
              value={text}
              onChange={onChange}
              placeholder="Enter new todo ..."
            />
          </div>
          <div className="card_footer">
            <button
              onClick={addTodo}
              className={`${!isValidText ? "disabled" : ""}`}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    )
  );
}
