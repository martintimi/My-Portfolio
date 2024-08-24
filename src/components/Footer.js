import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm"; // Correct import for named export
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
          <h4 className="text-light pt-1">Matin.Timi</h4>

          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <a href="https://github.com/martintimi">
              <FontAwesomeIcon icon={faGithub} size="2x"  />
              </a>
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
