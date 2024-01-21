import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/CompetenceComponent.module.css";
import meter1 from "../assets/img/price.png";
import meter2 from "../assets/img/price.png";
import meter3 from "../assets/img/price.png";
import meter4 from "../assets/img/price.png";
import colorSharp from "../assets/img/pk.svg";

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
                        e lorem ipsum est, en imprimerie, une suite de mots sans
                        signification utilisée à titre provisoire pour calibrer une mise
                        en page, le texte définitif venant remplacer le faux-texte dès
                        qu il est prêt ou que la mise en page est achevée. Généra
                    </p>
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        className={styles.skillSlider}
                    >
                        <div className="item">
                            <img src={meter1} alt="image" />
                            <h5>Web Development</h5>
                        </div>
                        <div className="item">
                            <img src={meter2} alt="image" />
                            <h5>site Vitrine</h5>
                        </div>
                        <div className="item">
                            <img src={meter3} alt="image" />
                            <h5>Ui designe</h5>
                        </div>
                        <div className="item">
                            <img src={meter4} alt="image" />
                            <h5>Back-end</h5>
                        </div>
                    </Carousel>
                </div>
            </Col>
            </Row>
        </Container>
        <img
            className={styles.backgroundLeft}
            src={colorSharp}
            alt="colorSharp"
        />
    </section>
);
}
