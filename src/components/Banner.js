import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

function Banner() {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "Mobile developer"];
  const period = 2000;

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
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
            {({ isVisible}) =>
              <div
                className={
                  isVisible ? "animated__animated animate__fadeIn" : ""
                }
              >
                <span className="tagline">Welcome to my Portfolio</span>
                <h2>
                  {`Hi I'm Matin  `} <span className="wrap">{text}</span>
                </h2>
                <p>
                I'm a passionate and experienced front-end web developer dedicated to creating visually stunning and highly functional websites. With a strong foundation in HTML, CSS, JavaScript, 
                and modern frameworks, I bring designs to life and
                 ensure they are user-friendly, responsive, and performant.
                </p>
                <p>My passion for development goes beyond the workplace. I enjoy working on personal projects, exploring new technologies, and continually improving my skills to stay ahead in the ever-evolving tech landscape.</p>
                <button onClick={() => console.log("connect")}>
                  <a href="mailto:matintimi2443@gmail.com">
                  Let's connect <ArrowRightCircle size={24} />
                  </a>
                </button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
