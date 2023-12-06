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
              <div className="footer-info">Information</div>
              <div className="footer-btn">
                <a href="/about" target="_blank">
                  About
                </a>
              </div>
            </div>
            <div className="footer-col">
              <div className="footer-btn" onClick={goToTop}>
                <h2>To top</h2>
              </div>
              <div className="footer-btn" onClick={goToTop}>
                <Link to="/">Home</Link>
              </div>
            </div>
            <div className="footer-col">
              <div className="footer-info">Communication</div>
              <div className="footer-btn">
                <a href="mailto:">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
