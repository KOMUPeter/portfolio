import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImg from "../assets/img/peterPhotoCv2.png";
import styles from "../styles/BannerComponent.module.css";

export default function BannerComponent() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "- mySql",
    "- PHP",
    "- Symfony",
    "- Javascript",
    "- React",
    "- Angular",
    "- CMS",
    "- Figma",
  ];
  const [text, setText] = useState("");
  const period = 1000;
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(250);
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const yOffset =
        contactSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
  };

  return (
    <section className={styles.banner} id="accueil">
      <Container>
        <Row>
          <Col
            xs={12}
            md={5}
            xl={4}
            className="order-md-2 d-flex align-items-center justify-content-center"
          >
            <img src={HeaderImg} alt="HeaderImg" className="img-fluid" />
          </Col>
          <Col xs={12} md={7} xl={8} className="order-md-1">
            <span className={styles.tagline}>
              Bienvenue sur mon portfolio...
            </span>
            <h1>
              {"Compétences "}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Je suis un développeur web et mobile, spécialisé dans la création des applications pour les entreprises
              de toutes tailles. Je génère également des QR codes pour les sites
              et les réseaux sociaux. Pour en savoir plus, contactez-moi ici.
            </p>

            <button onClick={scrollToContact}>
              Contacte-moi <ArrowRightCircle size={25} />
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
