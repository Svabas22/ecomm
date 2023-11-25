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
        <div className="footer-content">
          <div className="footer-col">
            <div className="footer-info">Informacija</div>
            <div className="footer-btn">Apie</div>
          </div>
          <div className="footer-col">
            <div className="footer-btn">
              <a href="mailto:">
                <h2>Kontaktai</h2>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <div className="footer-btn" onClick={goToTop}>
              <h2>To top</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
