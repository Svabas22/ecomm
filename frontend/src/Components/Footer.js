import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
function Footer() {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="footer">
        <div className="footer-feed">
          <a href="mailto:">
            <h2>Kontaktai</h2>
          </a>
          <br />
          <div className="footer-btn" onClick={goToTop}>
            <h3>To top</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
