import React from "react";
import "./Icon.css";

export default function Icon(props) {
  return (
    <div className={`Icon ${props.className}`}>
      <img src={props.url} alt="not found" />
      <p>{props.name}</p>
    </div>
  );
}
