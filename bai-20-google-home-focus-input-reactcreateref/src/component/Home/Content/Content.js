import React, { useEffect } from "react";
import "./Content.css";
import Gif from "../../../Images/input.gif";
import { ReactComponent as Search } from "../../../Images/search.svg";

export default function Content(props) {
  const textInput = React.createRef();
  useEffect(() => {
    textInput.current.focus();
  }, []);
  return (
    <div className="Content">
      <div>
        <img alt="not found" src={Gif} />
      </div>
      <div className="z">
        <div className="input">
          <div className="wrapper">
            <div className="searchLogo">
              <Search />
            </div>
            <div className="inputSearch">
              <input type="text" ref={textInput} />
            </div>
            <div className="subMic">
              <div className="keyBoard">
                <img
                  src="https://www.flaticon.com/premium-icon/icons/svg/2268/2268116.svg"
                  alt="Not Found"
                />
              </div>
              <div className="microPhone">
                <img
                  alt="Not Found"
                  src="https://image.flaticon.com/icons/svg/2755/2755560.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="z-body">
        <input type="button" value="Google Search" />
        <input type="button" value="I'm Rich Kid" />
      </div>
      <div className="translate-group">
        Google offered in:
        <a href="/">VietNamese</a>
        <a href="/">English</a>
        <a href="/">中文</a>
        <a href="/">（繁體）</a>
      </div>
    </div>
  );
}
