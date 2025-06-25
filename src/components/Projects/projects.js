//imgs
import first_project from "./cover_img/first_project.png";
import boot_port from "./cover_img/boot_port.png";
import moviesvibe from "./cover_img/moviesvibe.png";
import portfolio from "./cover_img/portfolio.png";

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

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animations
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
    if (expandedProject === index) {
      setExpandedProject(null);
    } else {
      setExpandedProject(index);
    }
  };

  // Projects defined in descending order (newest first)
  const projects = [
    // {
    //   id: 6,
    //   title: "Recipe Finder App",
    //   description:
    //     "Discover recipes based on ingredients you have with dietary preference filters.",
    //   longDescription:
    //     "This application allows users to search recipes by ingredients, filter by dietary restrictions, and save favorite recipes. Includes meal planning features and grocery list generation. Integrated with a large recipe database API and features user accounts for saving preferences.",
    //   skills: ["React", "Recipe API", "Firebase", "Context API", "CSS Grid"],
    //   image:
    //     "https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1000",
    //   projectLink: "https://example-recipe-app.com",
    //   githubLink: "https://github.com/username/recipe-finder",
    //   date: "July 2024",
    // },
    // {
    //   id: 5,
    //   title: "Social Media Dashboard",
    //   description:
    //     "Analytics dashboard for tracking social media engagement metrics and performance.",
    //   longDescription:
    //     "This comprehensive dashboard integrates with multiple social media APIs to provide real-time analytics. Features include customizable reports, audience demographics visualization, and content performance tracking. Built with React for the frontend and Node.js with Express for the backend.",
    //   skills: ["React", "Chart.js", "Node.js", "Express", "Social Media APIs"],
    //   image:
    //     "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000",
    //   projectLink: "https://example-social-dashboard.com",
    //   githubLink: "https://github.com/username/social-dashboard",
    //   date: "June 2024",
    // },
    {
      id: 4,
      title: "🚀 React-Portfolio",
      description:
        "🚀 React-Portfolio is a modern developer website that showcases my skills, projects, and experience — built entirely with React and React-Bootstrap. It includes animated scrolling, interactive hero section, skills showcase, project cards, and contact integration, all wrapped in a sleek responsive design.",
      longDescription:
        "🎯 This project marks my journey into component-driven development. I learned about React hooks, conditional rendering, module-based CSS, and integrating smooth UI animations — then deployed the site live to share my work with the world.",
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
        "🍿 MoviesVibe is a clean, interactive React web app that integrates with the OMDB API to fetch and display movie data. Visitors can browse default movie selections, search by title, and get instant feedback when no results match.",
      longDescription:
        "🔥 Through this project, I deepened my understanding of React fundamentals: managing state, performing asynchronous API calls, and dynamically rendering components based on data responses — all while maintaining a responsive, user-friendly UI.",
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
        "🎨 Portfolio-Bootstrap is a sleek, mobile-responsive developer portfolio built using only HTML, CSS, and Bootstrap 5. It features a beautifully designed hero section, about page, project showcases, and contact form — all structured using responsive grid layouts and Bootstrap components.",
      longDescription:
        "💡 This project demonstrates my ability to craft clean user interfaces and responsive layouts without using JavaScript. 💡 Focus: UI Design, Layout Structure. I learned how to leverage Bootstrap’s classes for styling, spacing, and mobile-first design, focusing on creating a seamless user experience across devices.",
      skills: [
        "Html5",
        "Css3",
        "Bootstrap5",
        "Responsive Design",
        "Layout Structure",
      ],
      image: boot_port,
      projectLink: "https://mdwarish7867.github.io/Portfolio_Bootstrap/",
      githubLink: "https://github.com/mdwarish7867/Portfolio_Bootstrap.git",
      date: "November 2024",
    },
    {
      id: 1,
      title: "Course Selling Website Interface",
      description:
        "📘 Course Selling Interface (HTML & CSS) A clean and responsive multi-page web layout for promoting and selling courses, built entirely with HTML & CSS. Features include a homepage, course listings, offer section, testimonials, certificate verification, and contact page. 🎨 Built with: HTML, CSS 💡 Focus: UI Design, Layout Structure.",
      longDescription:
        "✨ This project was designed to provide a smooth and engaging user experience for students and course providers. It features a fully responsive layout that adapts across devices, clear visual hierarchy, and intuitive navigation. The interface highlights course benefits, user reviews, and promotional offers in a clean, visually appealing format — ideal for showcasing educational services without using JavaScript or frameworks. 📱💻",
      skills: ["Html5", "Css3", "Github"],
      image: first_project,
      projectLink: "https://mdwarish7867.github.io/FirstProject/",
      githubLink: "https://github.com/mdwarish7867/FirstProject.git",
      date: "April 2024",
    },
  ];

  // Sort projects in descending order by ID (newest first)
  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);

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
          {sortedProjects.map((project, index) => (
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
                      {/* <div className="project-id">ID: {project.id}</div> */}
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
      </Container>
    </section>
  );
};

export default Projects;
