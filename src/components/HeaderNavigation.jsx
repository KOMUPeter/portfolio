import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/HeaderNavigation.module.css";
import logo from "../assets/img/pk.svg";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HeaderNavigation() {
  const [activeLink, setActiveLink] = useState("accueil");
  const [scrolled, setScrolled] = useState(false);
  const [hiddenMenu, setHiddenMenu] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Function to update the active link in the navigation
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <div
      className={`${scrolled ? styles.scrolled : ""} ${styles.navContainer}`}
    >
      <header>
        <div className={styles.toggleb}>
          {/* Link to home page */}
          <Link to="/">
            <img src={logo} className={styles.logoImg} alt="logo" />
          </Link>
          {/* Button to toggle the mobile menu */}
          <button
            onClick={() => setHiddenMenu(!hiddenMenu)}
            className={styles.toggleButton}
            aria-label="Toggle Menu"
          >
            <span className={styles.toggleButtonLines}></span>
            <span className={styles.toggleButtonLines}></span>
            <span className={styles.toggleButtonLines}></span>
          </button>
        </div>
        <nav
          className={`${styles.menu} ${hiddenMenu ? styles.hidden : ""} ${
            hiddenMenu ? "" : ""
          }`}
        >
          {" "}
          <ul>
            <li>
              <Link
                to="/"
                className={activeLink === "accueil" ? styles.active : ""}
                onClick={() => onUpdateActiveLink("accueil")}
              >
                Accueil
              </Link>
            </li>

            <li>
              <Link
                to="/skills"
                className={activeLink === "competences" ? styles.active : ""}
                onClick={() => onUpdateActiveLink("competences")}
              >
                Compétences
              </Link>
            </li>
            <li>
              <Link
                to="/projets"
                className={activeLink === "projets" ? styles.active : ""}
                onClick={() => onUpdateActiveLink("projets")}
              >
                Projets
              </Link>
            </li>
          </ul>
          <div className={styles.icons}>
            <div className={styles["social-icon"]}>
              <Link to="https://www.linkedin.com/in/peterkomudevweb">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Link>
              <Link to="https://github.com/KOMUPeter">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
              <Link to="">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </div>
            <button onClick={() => console.log("connect")}>
              Connectez-vous
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}
