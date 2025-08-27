// src/components/Projects.js
import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronUp,
  FaRegCalendarAlt,
} from "react-icons/fa";
import "./projects.css";

// imgs
import first_project from "./cover_img/first_project.png";
import boot_port from "./cover_img/boot_port.png";
import moviesvibe from "./cover_img/moviesvibe.png";
import portfolio from "./cover_img/portfolio.png";
import nexusshop from "./cover_img/nexusshop.png";
import shecanintern from "./cover_img/shecanintern.png";
import travelease from "./cover_img/travelease.png";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [inView, setInView] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleProject = (index) => {
    setExpandedProject((prev) => (prev === index ? null : index));
  };

  const projects = [
    {
      id: 7,
      title: "✈️ TravelEase - Travel Booking Platform",
      description:
        "🌍 A Django-based travel booking platform where users can sign up, log in, and manage their travel bookings with an intuitive interface.",
      longDescription:
        "⚙️ Developed as part of the TravelEase Internship Selection Assignment, this project provides features like 👤 user authentication & dashboard, 📅 booking & cancellation system, 🏨 tracking of upcoming & past bookings, and 🎨 a responsive UI built with Bootstrap. 🗄️ Integrated with PostgreSQL/MongoDB for persistent storage, and deployed on Render for live testing. 🚀 Demonstrates full-stack web development skills using Django.",
      skills: [
        "Django",
        "Python",
        "Bootstrap",
        "HTML",
        "CSS",
        "PostgreSQL / MongoDB",
        "Authentication",
      ],
      image: travelease,
      projectLink: "https://travelease-p0ov.onrender.com/",
      date: "August 2025",
    },

    {
      id: 6,
      title: "🛒 NexusShop - E-commerce Platform",
      description:
        "🛍️ A full-featured MERN-stack E-commerce web app where users can browse products, manage carts, and place orders with a smooth, responsive experience.",
      longDescription:
        "⚙️ Built with the MERN stack (MongoDB, Express.js, React.js, Node.js), NexusShop offers dynamic product listings, 🛒 role-based access control (Admin | Seller | Customer), 🔑 secure JWT authentication, 📦 real-time inventory updates, 💳 payment gateway integration, and a responsive UI with Tailwind CSS. 🚀 Deployed on Render with MongoDB Atlas, optimized for scalability and performance.",
      skills: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Tailwind CSS",
        "JWT Authentication",
        "RBAC",
      ],
      image: nexusshop,
      projectLink: "https://nexusshop.onrender.com/",
      githubLink: "https://github.com/mdwarish7867/CodeAlpha_Shopping_Web.git",
      date: "July 2025",
    },

    {
      id: 5,
      title: "🎯 She Can Intern - Fundraising Selection Portal",
      description:
        "🌟 A full-stack MERN web application designed for a referral-based fundraising internship selection process, featuring secure authentication, user dashboards, and an admin management panel.",
      longDescription:
        "⚙️ Developed using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Tailwind CSS with AOS animations, this portal enables interns to register with unique referral codes, track earnings, and view leaderboard rankings. Admins can securely manage users, funding data, and contact messages with full CRUD functionality. Includes 🔑 environment-based admin credential seeding, 🛡️ JWT authentication, 📊 dynamic leaderboard, and 📩 contact form integration. 🚀 Deployed on Render with MongoDB Atlas.",
      skills: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Tailwind CSS",
        "JWT Authentication",
        "Admin Dashboard",
        "AOS Animations",
      ],
      image: shecanintern,
      projectLink: "https://she-can-intern-proj.onrender.com/",
      githubLink:
        "https://github.com/mdwarish7867/She_Can_Intern_SelectionProj.git",
      date: "August 2025",
    },

    {
      id: 4,
      title: "🚀 React-Portfolio",
      description:
        "🚀 React-Portfolio is a modern developer website that showcases my skills, projects, and experience — built entirely with React and React-Bootstrap...",
      longDescription:
        "🎯 This project marks my journey into component-driven development. I learned about React hooks, conditional rendering, module-based CSS...",
      skills: ["React", "Api Integration", "Responsive Design"],
      image: portfolio,
      projectLink: "https://portfolio-m9f0.onrender.com/",
      githubLink: "https://github.com/mdwarish7867/React-Portfolio",
      date: "May 2025",
    },
    {
      id: 3,
      title: "🎬 MoviesVibe",
      description:
        "🍿 MoviesVibe is a clean, interactive React web app that integrates with the OMDB API to fetch and display movie data...",
      longDescription:
        "🔥 Through this project, I deepened my understanding of React fundamentals: managing state, performing async API calls, rendering components...",
      skills: ["Django", "Responsive Design", "Python", "dbsqlite3"],
      image: moviesvibe,
      projectLink: "https://moviesvibe-lt7u.onrender.com/",
      githubLink: "https://github.com/mdwarish7867/MoviesVibe",
      date: "February 2025",
    },
    {
      id: 2,
      title: "Portfolio-Bootstrap",
      description:
        "🎨 Portfolio-Bootstrap is a sleek, mobile-responsive developer portfolio built using only HTML, CSS, and Bootstrap 5...",
      longDescription:
        "💡 This project demonstrates my ability to craft clean user interfaces and responsive layouts without using JavaScript...",
      skills: ["Html5", "Css3", "Bootstrap5", "Responsive Design"],
      image: boot_port,
      projectLink: "https://mdwarish7867.github.io/Portfolio_Bootstrap/",
      githubLink: "https://github.com/mdwarish7867/Portfolio_Bootstrap.git",
      date: "November 2024",
    },
    {
      id: 1,
      title: "Course Selling Website Interface",
      description:
        "📘 A clean and responsive multi-page course-selling website built using only HTML & CSS...",
      longDescription:
        "✨ This project was designed to provide a smooth and engaging user experience for students and course providers...",
      skills: ["Html5", "Css3", "Github"],
      image: first_project,
      projectLink: "https://mdwarish7867.github.io/FirstProject/",
      githubLink: "https://github.com/mdwarish7867/FirstProject.git",
      date: "April 2024",
    },
  ];

  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);
  const displayedProjects = showAll
    ? sortedProjects
    : sortedProjects.slice(0, 4);

  return (
    <section
      id="projects"
      className={`projects-section py-5 ${inView ? "in-view" : ""}`}
      ref={sectionRef}
    >
      <Container>
        <div className="section-header mb-5">
          <h2 className="section-title">Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle text-center text-light mt-4">
            My latest creations. Click on any project to explore details.
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {displayedProjects.map((project, index) => (
            <Col key={project.id} lg={6} className="project-col">
              <div
                className={`project-card ${
                  expandedProject === index ? "expanded" : ""
                }`}
                onClick={() => toggleProject(index)}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(30px)",
                }}
              >
                <div className="project-header">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-badge">
                      <FaRegCalendarAlt className="me-1" /> {project.date}
                    </div>
                  </div>
                  <div className="project-title-container">
                    <div>
                      <h3 className="project-title">{project.title}</h3>
                    </div>
                    <button className="expand-btn">
                      {expandedProject === index ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </button>
                  </div>
                </div>

                <div className="project-content">
                  <p className="project-description">{project.description}</p>

                  <div
                    className={`project-details ${
                      expandedProject === index ? "show" : ""
                    }`}
                  >
                    <p className="project-long-description">
                      {project.longDescription}
                    </p>

                    <div className="skills-used">
                      <h4>Technologies Used:</h4>
                      <div className="skill-tags">
                        {project.skills.map((skill, i) => (
                          <span key={i} className="skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="project-links">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link github"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub className="me-2" /> GitHub Repository
                      </a>
                      <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link live"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt className="me-2" /> Live Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Show More/Less button */}
        {sortedProjects.length > 4 && (
          <div className="text-center mt-4">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn btn-outline-primary"
            >
              {showAll ? (
                <>
                  <FaChevronUp className="me-2" />
                  Show Less
                </>
              ) : (
                <>
                  <FaChevronDown className="me-2" />
                  Show More ({sortedProjects.length - 4} more)
                </>
              )}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Projects;
