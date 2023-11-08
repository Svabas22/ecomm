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
      <div>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/home">E-Comm</Navbar.Brand>
            <Nav className="me-auto navbar_wrapper">
              {localStorage.getItem("user-info") ? ( // IF
                <>
                  <Link to="/add">Add</Link>
                  <Link to="/list">List</Link>
                </>
              ) : (
                // ELSE
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </>
              )}
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
      </div>
    </>
  );
}

export default Header;
