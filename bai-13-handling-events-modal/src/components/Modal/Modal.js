import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
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
