import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/CompetenceComponent.module.css";
import meter1 from "../assets/img/react.png";
import meter2 from "../assets/img/symfony.png";
import meter3 from "../assets/img/figma.png";
import meter4 from "../assets/img/wordpress.png";
import meter5 from "../assets/img/mysql.png";

export default function CompetenceComponent() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className={styles.skill} id="skills">
      <Container>
        <Row>
          <Col>
            <div className={styles.skillbx}>
              <h2>Compétences</h2>
              <p>
                Explorez mes compétences à travers ce carrousel, mettant en
                avant les compétences essentielles pour la création de solutions
                digitales. De la conception Front-end  au
                développement back-end, je propose une gamme complète
                d&apos;expertise en développement web.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className={styles.skillSlider}
              >
                <div className="item">
                  <div className={styles.itemPercent}><img src={meter1} alt="image" /></div>
                  <h5>Front-end</h5>
                </div>
                <div className="item">
                <div className={styles.itemPercent}><img src={meter2} alt="image" /></div>
                  <h5>Back-end</h5>
                </div>
                <div className="item">
                <div className={styles.itemPercent}><img src={meter3} alt="image" /></div>
                  <h5>Design UI</h5>
                </div>
                <div className="item">
                <div className={styles.itemPercent}><img src={meter4} alt="image" /></div>
                  <h5>Site Vitrine</h5>
                </div>
                <div className="item">
                <div className={styles.itemPercent}><img src={meter5} alt="image" /></div>
                  <h5>Base de données</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
