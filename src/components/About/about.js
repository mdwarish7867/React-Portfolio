import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./about.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container>
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>

        <Row className="align-items-center">
          <Col lg={5} className="about-photo-col">
            <div className="about-photo-container">
              <div className="photo-frame">
                <div className="profile-photo"></div>
                <div className="photo-decoration"></div>
              </div>
            </div>
          </Col>

          <Col lg={7} className="about-content">
            <h3 className="about-subtitle">Developer & Designer</h3>
            <p className="about-text">
              I'm a passionate full-stack developer with a strong focus on
              creating intuitive user experiences. With 5 years of industry
              experience, I specialize in building responsive web applications
              that solve real-world problems.
            </p>
            <p className="about-text">
              My approach combines technical expertise with creative
              problem-solving. I believe in writing clean, maintainable code and
              constantly learning new technologies to stay at the forefront of
              web development.
            </p>

            <div className="skills-container">
              <div className="skill-tag">JavaScript</div>
              <div className="skill-tag">React</div>
              <div className="skill-tag">Node.js</div>
              <div className="skill-tag">UI/UX Design</div>
              <div className="skill-tag">CSS3</div>
              <div className="skill-tag">MongoDB</div>
            </div>

            <div className="about-cta">
              <a href="#contact" className="contact-btn">
                Get in Touch
              </a>
              <a href="#projects" className="view-projects-btn">
                View Projects
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;