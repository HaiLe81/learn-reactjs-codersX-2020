import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Logo } from "../../../public/images/logo_256.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="go-back">
        <FontAwesomeIcon icon={faArrowLeft} />
        Go Back
      </div>
      <div className="logo">
        <Logo />
      </div>
      <div>
        <button className="sign-up">Sign up</button>
      </div>
    </div>
  );
}
