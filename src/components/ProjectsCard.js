import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </a>
      </div>
    </Col>
  );
};

export default ProjectCard;
