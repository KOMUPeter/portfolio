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
    return (
    <footer className="footer">
        <Container>
        <Row className="align-items-center">
            <MailchimpForm />
            <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
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
            <p>Copyright 2024 © pk</p>
            </Col>
        </Row>
        </Container>
    </footer>
    )
}