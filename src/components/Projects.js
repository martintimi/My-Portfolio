import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "../components/ProjectsCard";
import myproject from "../assets/img/my-project.png";
import myproject2 from "../assets/img/my-project2.png";
import myproject3 from "../assets/img/tycoon.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

function Projects() {
  const projects = [
    {
      title: "Real Estate",
      description: "Design & Development",
      imgUrl: myproject,
      link: "https://vestifyhub.xyzstaging.com",
    },
    {
      title: "Timi AI",
      description: "Design & Development",
      imgUrl: myproject2,
      link: "https://timi-tech.vercel.app/",
    },
    {
      title: "Tycoon",
      description: "Lorem Ipsum",
      imgUrl: myproject3,
      link: "https://tycoon-zeta.vercel.app/",
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
                          <Nav.Link href={project.link} target="_blank">
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
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
}

export default Projects;
