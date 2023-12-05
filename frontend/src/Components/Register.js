import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // NOT useHistory
import Header from "./Header.js";
import { Link } from "react-router-dom";
import { TabTitle } from "../Utilities/TabTitle.js";
import Cookies from "js-cookie";

function Register() {
  TabTitle("Register");
  useEffect(() => {
    if (Cookies.get("token")) {
      navigate("/add");
    }
  }, []);
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  async function signUp() {
    let item = { username, email, password };
    console.log(item);
    let result = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      mode: "cors",
    });
    result = await result.json();
    if (result.error) {
      // Display an alert with the error message
      window.alert(result.error);
    } else if (result.message) {
      // Display an alert with message
      window.alert(result.message);
    } else {
      navigate("/");
    }
  }

  return (
    <>
      <div className="main">
        <Header />
        <div className="body">
          <div className="wrapper-register">
            <div className="register-background"></div>
            <div className="register-content">
              <div className="col-sm-6 offset-sm-3">
                <div className="Page-title">
                  <h1>Register</h1>
                </div>
                <div className="row-input">
                  <p>Username</p>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    placeholder="name"
                  />
                </div>
                <div className="row-input">
                  <p>E-mail</p>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    placeholder="email"
                  />
                </div>
                <div className="row-input">
                  <p>Password</p>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    placeholder="password"
                  />
                </div>
                <button onClick={signUp} className="btn btn-primary">
                  Sign up
                </button>
                <hr />
                <p>Already have an account?</p>

                <div className="footer-btn">
                  <Link to="/login">Sign in</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
