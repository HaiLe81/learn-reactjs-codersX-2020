import React from "react";
import "./Login.css";

export default function Login(props) {
  return (
    <div className="login">
      <h1>Sign in</h1>
      <div className="form-login">
        <div className="user">
          <label>Username</label>
          <input
            type="text"
            placeholder={`${props.email ? props.email : "Enter your username"}`}
          />
        </div>
        <div className="password">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <div className="btn">Signip to Coders-X</div>
      </div>
      <div className="footer">
        <div className="remember">
          <input type="checkbox" />
          <p>Keep me signed in</p>
        </div>
        <div className="forgot">
          <a href="#">Forgot username?</a>
          <a href="#">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}
