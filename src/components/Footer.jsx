import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "../components/MailChimpForm.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/img/pk.svg";
import {
  faInstagram,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling behavior
    });
  };

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col m={4}>
            <a href="#accueil" onClick={scrollToTop}>
              <img src={logo} alt="Logo" />
            </a>
          </Col>
          <Col
            m={4}
            className="d-flex align-items-center justify-content-center"
          >
            <p className="text-center">Copyright 2024 © pk</p>
          </Col>

          <Col m={4} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://github.com/KOMUPeter">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/peterkomudevweb">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
