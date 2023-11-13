import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

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
      <Navbar className="navbar">
        <Container className="navbar_wrapper">
          <Navbar.Brand href="/home">
            <img src="./favicon.ico"></img>
          </Navbar.Brand>
          <Nav className="test">
            <div className="search">
              <input className="search-input" placeholder="Search"></input>
              <img src="54481.png"></img>
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
                    <button className="navbar-btn">Login</button>
                  </Link>
                  <Link to="/register">
                    <button className="navbar-btn">Register</button>
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
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
