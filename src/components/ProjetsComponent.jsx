import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard.jsx";
import projImg1 from "../assets/img/price.png";
import projImg2 from "../assets/img/github-image.png";
import projImg3 from "../assets/img/rocks.avif";
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
    {
      title: "Business Startup",
      description: "Design & Development",
      // imgUrl: projImg4,
      url: "",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      // imgUrl: projImg5,
      url: "",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      // imgUrl: projImg6,
      url: "",
    },
  ];

  return (
    // use bootstrap tabs
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque quam, quod neque provident velit, rem explicabo
                    excepturi id illo molestiae blanditiis, eligendi dicta
                    officiis asperiores delectus quasi inventore debitis quo.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque quam, quod neque provident velit, rem explicabo
                    excepturi id illo molestiae blanditiis, eligendi dicta
                    officiis asperiores delectus quasi inventore debitis quo.
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
