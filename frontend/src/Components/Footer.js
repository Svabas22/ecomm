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
      <div className="footer-wrapper">
        <div className="footer">
          <div className="footer-row">
            <div className="footer-col">
              <div className="footer-info">Informacija</div>
              <div className="footer-btn">
                <a href="http://localhost:3000/about" target="_blank">
                  Apie
                </a>
              </div>
            </div>
            <div className="footer-col">
              <div className="footer-btn" onClick={goToTop}>
                <h2>To top</h2>
              </div>
            </div>
            <div className="footer-col">
              <div className="footer-info">Susisiekti</div>
              <div className="footer-btn">
                <a href="mailto:">Kontaktai</a>
              </div>
            </div>
          </div>
          <div className="footer-row">
            <div className="footer-col">
              <div className="footer-btn" onClick={goToTop}>
                <Link to="/">Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
