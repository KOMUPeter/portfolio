import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/pk.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function MyNavbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState("false");
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateAtiveLink = (value) => {
    setActiveLink(value);
  };

  const handleBrandClick = () => {
    // Scroll to the "home" section
    const homeSection = document.getElementById("accueil");
    if (homeSection) {
      window.scrollTo({
        top: homeSection.offsetTop,
        behavior: "smooth",
      });
    }
    // Update active link
    onUpdateAtiveLink("accueil");
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home" onClick={handleBrandClick}>
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <span className="navbar-toggler-icon"></span>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#accueil"
              className={
                activeLink === "accueil" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateAtiveLink("accueil")}
            >
              Accueil
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateAtiveLink("skills")}
            >
              Compétences
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateAtiveLink("projects")}
            >
              Projets
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={
                activeLink === "contact" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateAtiveLink("contact")}
            >
              Contacts
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
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
            <button className="vvd" onClick={() => console.log("")}>
              Let s Connect
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
