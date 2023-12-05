import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header.js";
import { Link } from "react-router-dom";
import { TabTitle } from "../Utilities/TabTitle.js";


function Login() {
  TabTitle("Login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login() {
    let item = { username, password };

    let result = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    if (result.error) {
      // Display an alert with the error message
      window.alert(result.error);
    } else if (result.message) {
      // Display an alert with message
      window.alert(result.message);
      navigate("/");
    }
      
  }
  return (
    <>
      <div className="main">
        <Header />
        <div className="body">
          <div className="wrapper-login">
            <div className="login-background"></div>
            <div className="login-content">
              <div className="col-sm-6 offset-sm-3">
                <div className="Page-title">
                  <h1>Login</h1>
                </div>
                <div className="row-input">
                  <p>Username</p>
                  <input
                    type="text"
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="row-input">
                  <p>Password</p>
                  <input
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                  />
                </div>
                <button onClick={login} className="btn btn-primary">
                  Login
                </button>
                <hr></hr>
                <p>Not signed in?</p>
                <div className="footer-btn">
                  <Link to="/register">Sign up</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
