import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "../components/ProjectsCard";
import myproject from "../assets/img/my-project.png";
import myproject2 from "../assets/img/my-project2.png";
import myproject3 from "../assets/img/tycoon.png";
import myproject4 from "../assets/img/project-img4.jpeg";
import myproject5 from "../assets/img/project_img5.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faRobot,
  faStore,
  faHome,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

function Projects() {
  const projects = [
    {
      title: "Real Estate",
      description:
        "Visionaries committed to building a better future through real estate",
      imgUrl: myproject,
      link: "https://vestifyhub.xyzstaging.com",
      icon: faBuilding,
    },
    {
      title: "Timi AI",
      description: "Design & Development",
      imgUrl: myproject2,
      link: "https://timi-tech.vercel.app/",
      icon: faRobot,
    },
    {
      title: "Tycoon",
      description: "Lorem Ipsum",
      imgUrl: myproject3,
      link: "https://tycoon-zeta.vercel.app/",
      icon: faStore,
    },
    {
      title: "Flex Living",
      description: "Lorem Ipsum",
      imgUrl: myproject4,
      link: "https://house-agent-web.vercel.app/",
      icon: faHome,
    },
    {
      title: "TTA",
      description:
        "Tech Talent Academy helps you learn the skills you need to build the career you want.",
      imgUrl: myproject5,
      link: "https://web.tta.ng/",
      icon: faGraduationCap,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    My journey as a front-end developer has led me to work on a
                    variety of exciting projects. Each project highlights my
                    ability to solve problems creatively and implement effective
                    solutions. Here are some of the key projects I've worked on:
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      {projects.map((project, index) => (
                        <Nav.Item key={index}>
                          <Nav.Link eventKey={`project-${index}`}>
                            <FontAwesomeIcon icon={project.icon} />{" "}
                            {project.title}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      {projects.map((project, index) => (
                        <Tab.Pane eventKey={`project-${index}`} key={index}>
                          <Row>
                            <ProjectCard {...project} />
                          </Row>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
}

export default Projects;
