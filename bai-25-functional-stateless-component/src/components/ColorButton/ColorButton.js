import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";
import "../Book/Book.css";

const ColorButton = props => {
  return (
    <div className="container pt-3">
      <Button color="primary">Primary (#007bff)</Button>
    </div>
  );
};
export default ColorButton;
