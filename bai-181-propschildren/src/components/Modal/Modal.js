import React, { useState } from "react";
import "./Modal.css";

export default function Modal(props) {
  const { children } = props;
  const [state, setState] = useState({ visibility: false });
  return (
    <div className="example1">
      <input
        onClick={() => setState(!state)}
        className="openModal"
        type="button"
        value="Open modal"
      />
      <div className={`${state ? "modal vis" : "modal"}`}>
        <img
          onClick={() => setState({ visibility: false })}
          className="close"
          alt="not found"
          src="https://image.flaticon.com/icons/svg/271/271203.svg"
        />
        <div className="content">
          <h3>This is a modal 1</h3>
          <p>{children}</p>
          <div className="footer">
            <input
              onClick={() => setState({ visibility: false })}
              type="button"
              value="Accept"
            />
            <input
              onClick={() => setState({ visibility: false })}
              type="button"
              value="Decline"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
