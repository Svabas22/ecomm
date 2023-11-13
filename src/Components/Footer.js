import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-feed">
          <a href="mailto:ugnius.kerulis@knf.stud.vu.lt">
            <h2>Kontaktai</h2>
          </a>
          <br />
          <a href="#home">
            <h3>Home</h3>
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
