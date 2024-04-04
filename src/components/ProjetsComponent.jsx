import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard.jsx";
import projImg1 from "../assets/img/price.png";
import projImg2 from "../assets/img/github-image.png";
import projImg3 from "../assets/img/contactImg.png";
import colorSharp2 from "../assets/img/price.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';
export default function ProjetsComponent() {
  const projects = [
    {
      title: "Projet Wordpress",
      description: "Price deal Finder",
      imgUrl: projImg1,
      url: "https://pricedealfinder.com/",
    },
    {
      title: "Mon GitHub",
      description: "Mes projets en groupe et personnels",
      imgUrl: projImg2,
      url: "https://github.com/KOMUPeter",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      url: "",
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   // imgUrl: projImg4,
    //   url: "",
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   // imgUrl: projImg5,
    //   url: "",
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   // imgUrl: projImg6,
    //   url: "",
    // },
  ];

  return (
    // use bootstrap tabs
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Mes projets et motivations</h2>
            <p style={{ textAlign: 'left' }}>
              Dans ce portfolio, je mettrai en avant une sélection de mes
              projets professionnels et personnels, accompagnée de mon profil GitHub, et mes motivations disposé dans
              le tableau ci-dessous
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first" className="small-font">Mes projets</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" className="small-font">Mon Github</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" className="small-font">Motivations</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p style={{ textAlign: 'left' }}>
                    Sur mon portfolio GitHub, vous découvrirez une variété de
                    projets que j&apos;ai développés aussi bien en solo
                    qu&apos;en collaboration avec d&apos;autres, organisés
                    méthodiquement à travers des tickets. Travailler en équipe
                    m&apos;aide à maintenir ma motivation et facilite la
                    réalisation des tâches, tout en me permettant
                    d&apos;acquérir de nouvelles compétences et de
                    m&apos;adapter à un environnement en perpétuelle évolution.
                    D&apos;un autre côté, travailler en solitaire me donne
                    l&apos;occasion de réfléchir plus profondément, en
                    rationalisant le code et en approfondissant mes compétences
                    en programmation.
                  </p>
                  <p style={{ textAlign: 'left' }}>
                    Ci-joint, vous trouverez le lien vers mes projets <br />{" "}
                    <a href="https://github.com/KOMUPeter" target="blank">
                      Sur GitHub
                    </a>
                    .
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p style={{ textAlign: 'left' }}>
                    En tant que développeur web, je suis passionné par la création d&apos;expériences numériques inoubliables. Ma fascination pour la technologie et son évolution constante se reflète dans chaque projet que j&apos;entreprends. Je suis animé par le désir de repousser les limites de l&apos;innovation et de concevoir des solutions novatrices, tout en mettant en valeur ma créativité et mon expertise technique. Mon objectif premier est de générer un impact positif à travers mon travail, que ce soit en améliorant l&apos;expérience utilisateur ou en optimisant les performances des applications web. Je tire une grande inspiration de la collaboration interdisciplinaire, qui me permet d&apos;apprendre et de croître, tout en favorisant l&apos;innovation. Mon engagement envers une éthique de travail exemplaire et mon souci constant d&apos;excellence me guident dans ma quête de contribuer à un environnement numérique dynamique et inclusif.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background image"
      ></img>
    </section>
  );
}
