// import styles from '../styles/HomeComponent.module.css';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImg from "../assets/img/cv-image.svg";
import styles from "../styles/BannerComponent.module.css";

export default function BannerComponent() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Développeur Web", "React", "Symfony"];
  const [text, setText] = useState("");
  const period = 2000;
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

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
      setDelta(500);
    }
  };

  return (
    <section className={styles.banner} id="accueil">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={5} className="order-md-2">
            <img src={HeaderImg} alt="HeaderImg" className="img-fluid"/>
          </Col>
          <Col xs={12} md={6} xl={7} className="order-md-1">
            <span className={styles.tagline}>Bienvenue sur mon portfolio...</span>
            <h1>
              {"Hi, I am web coded "}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Le lorem ipsum est, en imprimerie, une suite de mots sans
              signification utilisée à titre provisoire pour calibrer une mise
              en page, le texte définitif venant remplacer le faux-texte dès
              qu il est prêt ou que la mise en page est achevée. Généralement,
              on utilise un texte en faux latin, le Lorem ipsum ou Lipsum
            </p>
            <button onClick={() => console.log("connect")}>
              Let s connect <ArrowRightCircle size={25} />
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
