import React, { useState } from "react";
import "./Footer.css";
import Modal from "../Modal/Modal";

let Footer = props => {
  const { listTodo } = props;
  console.log("props", props);

  const [isShowModal, setIsShowModal] = useState(false);
  const close = () => isShowModal && setIsShowModal(false);
  const open = () => !isShowModal && setIsShowModal(true);
  return (
    <footer className="footer">
      <div className="plus">
        <img
          onClick={open}
          src="https://image.flaticon.com/icons/svg/660/660529.svg"
          alt="Not Found"
        />
      </div>
      <Modal listTodo={listTodo} show={isShowModal} close={close} />
    </footer>
  );
};
export default Footer;
