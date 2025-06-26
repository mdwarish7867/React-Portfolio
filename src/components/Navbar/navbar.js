import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import "./navbar.css";

const CustomNavbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleHireMe = () => {
    const subject = encodeURIComponent("Hire from Portfolio");
    const body = encodeURIComponent(
      "Hii Warish,\n\nI want to hire you and discuss potential opportunities."
    );
    window.location.href = `https://mail.google.com/mail/?view=cm&to=warishansari018@gmail.com&su=${subject}&body=${body}`;
  };

  // Scroll-based active section tracker
  useEffect(() => {
    const sectionIds = [
      "hero",
      "about",
      "skills",
      "projects",
      "certifications",
      "experience",
      "social",
    ];

    const handleScroll = () => {
      const scrollY = window.scrollY + 150; // Adjust based on your navbar height
      let currentSection = sectionIds[0];

      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollY) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar fixed="top" expand="lg" className="bg-black py-3" variant="dark">
      <Container>
        <Navbar.Brand href="/" className="text-white">
          <i className="bi bi-laptop me-2 text-primary"></i>
          Portfolio
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              href="#hero"
              className={`mx-2 ${
                activeSection.toLowerCase() === "home"
                  ? "text-primary"
                  : "text-white"
              }`}
            >
              <i className="bi bi-house-door me-2"></i>
              Home
            </Nav.Link>

            <Nav.Link
              href="#about"
              className={`mx-2 ${
                activeSection.toLowerCase() === "about"
                  ? "text-primary"
                  : "text-white"
              }`}
            >
              <i className="bi bi-person me-2"></i>
              About
            </Nav.Link>

            <Nav.Link
              href="#skills"
              className={`mx-2 ${
                activeSection.toLowerCase() === "skills"
                  ? "text-primary"
                  : "text-white"
              }`}
            >
              <i className="bi bi-tools me-2"></i>
              Skills
            </Nav.Link>

            <Nav.Link
              href="#projects"
              className={`mx-2 ${
                activeSection.toLowerCase() === "projects"
                  ? "text-primary"
                  : "text-white"
              }`}
            >
              <i className="bi bi-rocket-takeoff me-2"></i>
              Projects
            </Nav.Link>

            <Nav.Link
              href="#certifications"
              className={`mx-2 ${
                activeSection.toLowerCase() === "certifications"
                  ? "text-primary"
                  : "text-white"
              }`}
            >
              <i className="bi bi-award me-2"></i>
              Certifications
            </Nav.Link>

            <Nav.Link
              href="#experience"
              className={`mx-2 ${
                activeSection === "experience" ? "text-primary" : "text-white"
              }`}
            >
              <i className="bi bi-briefcase me-2"></i>
              Experience
            </Nav.Link>

            <Nav.Link
              href="#social"
              className={`mx-2 ${
                activeSection.toLowerCase() === "social"
                  ? "text-primary"
                  : "text-white"
              }`}
            >
              <i className="bi bi-person-plus me-2"></i>
              Social
            </Nav.Link>
          </Nav>

          <Button variant="primary" className="hire-btn" onClick={handleHireMe}>
            <i className="bi bi-envelope-arrow-up me-2"></i>
            Hire Me
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
