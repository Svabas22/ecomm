import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
  }, []);
  async function login() {
    console.warn(email, password);
    let item = { email, password };
    let result = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    if (result.error) {
      // Handle the error, such as displaying a message to the user
      console.error(result.error);
    } else {
      // Save user information in localStorage and navigate to the next page
      localStorage.setItem("user-info", JSON.stringify(result));
      navigate("/add");
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
                  <h1>Welcome</h1>
                </div>
                <div className="row-input">
                  <p>E-mail</p>
                  <input
                    type="text"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
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
