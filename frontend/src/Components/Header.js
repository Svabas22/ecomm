import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Images/logo.jpg";
import search_logo from "../Images/search_logo.png";
function Header() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  const navigate = useNavigate();
  function logOut() {
    localStorage.clear();
    navigate("/register");
  }
  console.warn(user);

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
              <div className="search">
                <input className="search-input" placeholder="Search"></input>
                <div className="search-input-icon">
                  <img src={search_logo}></img>
                </div>
              </div>
              <div className="navbar-buttons">
                {localStorage.getItem("user-info") ? ( // IF
                  <>
                    <Link className="navbar-link" to="/add">
                      <button className="navbar-btn">Add to list</button>
                    </Link>
                    <Link to="/list">
                      <button className="navbar-btn">List view</button>
                    </Link>
                  </>
                ) : (
                  // ELSE
                  <>
                    <Link to="/login">
                      <button className="navbar-login-btn">Login</button>
                    </Link>
                    <Link to="/register">
                      <button className="navbar-register-btn">Register</button>
                    </Link>
                    <Link to="/buy">
                      <button className="navbar-buy-btn">Buy Temp</button>
                    </Link>
                    <Link to="/add">
                      <button className="navbar-buy-btn">Add account</button>
                    </Link>
                  </>
                )}
              </div>
            </Nav>
            {localStorage.getItem("user-info") ? (
              <Nav>
                <NavDropdown title={user && user.name}>
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
