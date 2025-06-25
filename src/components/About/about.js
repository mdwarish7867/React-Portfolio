import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import dp from "./img/dp.jpeg"; 
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
          <Col lg={4} className="about-photo-col">
            <div className="about-photo-container">
              <div className="photo-frame">
                <img src={dp} alt="Profile" className="photo-img" />
                <div className="photo-decoration"></div>
              </div>
            </div>
          </Col>

          <Col lg={8} className="about-content">
            
            <p className="about-text">
              I'm a passionate full-stack developer and Computer Science &
              Engineering student with a deep focus on creating intuitive,
              high-performance web experiences. My journey began with curiosity
              about how things work behind the screen — and that curiosity soon
              turned into a commitment to building user-friendly, accessible,
              and responsive applications.
            </p>

            <p className="about-text">
              Over time, I've explored diverse domains including front-end
              development with React and Bootstrap, back-end logic with Node.js,
              and database integration using SQL and MongoDB. I thrive on
              transforming creative ideas into real-world digital solutions that
              make a difference. I believe that a clean interface and clean code
              go hand in hand, and I always aim for both.
            </p>

            <p className="about-text">
              My approach combines technical precision with a creative mindset.
              I continuously challenge myself by learning modern tools and
              frameworks, whether it's enhancing UI/UX, exploring cybersecurity,
              or experimenting with AI/ML concepts. 
            </p>

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