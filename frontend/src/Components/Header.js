import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Images/logo.jpg";
import Cookies from "js-cookie";
import { decode as base64_decode } from "base-64";
import AccountList from "./AccountList";

function Header() {
  const token = Cookies.get("token");
  let user;
  if (token) {
    const array = token.split(".");
    user = JSON.parse(base64_decode(array[1]))["username"];
  } else {
    user = "";
  }

  const navigate = useNavigate();

  function logOut() {
    Cookies.remove("token");
    navigate("/login");
  }

  return (
    <>
      <div className="navbar">
        <div className="navbar_wrapper">
          <div className="navbar_wrapper">
            <div className="navbar-home-icon">
              <Link to="/">
                <img className="navbar-home-icon" src={logo}></img>
              </Link>
            </div>
            <Nav>
              <div className="navbar-buttons">
                {user !== "" ? (
                  // If user is logged in
                  <>
                    <Link to="/add">
                      <button className="navbar-buy-btn">Add account</button>
                    </Link>
                  </>
                ) : (
                  // If user is not logged in
                  <>
                    <Link to="/login">
                      <button className="navbar-login-btn">Login</button>
                    </Link>
                    <Link to="/register">
                      <button className="navbar-register-btn">Register</button>
                    </Link>
                  </>
                )}
              </div>
            </Nav>
            {user !== "" ? (
              <Nav>
                <NavDropdown title={user}>
                  <NavDropdown.Item>
                    <Link to="/list" />
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
