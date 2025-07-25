// src/components/Experience/Experience.js
import React, { useState, useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import "./experience.css";

const Experience = () => {
  const [expandedExperience, setExpandedExperience] = useState(null);
  const [inView, setInView] = useState(false);
  const [showAll, setShowAll] = useState(false);
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

  const toggleExperience = (index) => {
    if (expandedExperience === index) {
      setExpandedExperience(null);
    } else {
      setExpandedExperience(index);
    }
  };

  // Experience data - most recent first
  const experiences = [
    {
      id: 2,
      role: "Full Stack Web Development Intern",
      company: "CodeAlpha",
      duration: "July 2025 - August 2025",
      location: "Remote",
      description:
        "Completed a project-based internship where I developed a full-fledged E-commerce web application using Django, MySQL, and Bootstrap.",
      responsibilities: [
        "Designed and developed 'NexusShop' — a scalable E-commerce platform",
        "Implemented user authentication, product listings, and cart management",
        "Worked with PostgreSQL for database design and CRUD operations",
        "Deployed the project on Render with PostgreSQL integration",
        "Collaborated with mentors for code reviews and feature enhancements",
      ],
      skills: [
        "Django",
        "PostgreSQL",
        "Bootstrap",
        "Full Stack Development",
        "Deployment",
      ],
      link: "https://codealpha-shopping-web.onrender.com/",
    },
    {
      id: 1,
      role: "Full Stack Web Development Intern (Python)",
      company: "Shashi Infotech",
      duration: "Feb 2025 - Mar 2025",
      location: "Ranchi, Jharkhand",
      description:
        "Completed a hands-on internship in Full Stack Web Development with Python, working on both frontend and backend technologies.",
      responsibilities: [
        "Built responsive web pages using HTML, CSS, and Bootstrap",
        "Implemented server-side logic with Python and Django",
        "Learned to connect front-end with back-end services",
        "Worked under real-time project scenarios and feedback",
      ],
      skills: ["Python", "HTML", "CSS", "Bootstrap", "Django"],
      link: "https://moviesvibe-lt7u.onrender.com/",
    },
  ];

  // Filter experiences based on showAll state
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 4);

  return (
    <section
      id="experience"
      className={`experience-section py-5 ${inView ? "in-view" : ""}`}
      ref={sectionRef}
    >
      <Container>
        <div className="section-header mb-5">
          <h2 className="section-title">Experience</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle text-center text-light mt-4">
            My professional journey and growth. Click on any experience to see
            details.
          </p>
        </div>

        <div className="timeline">
          {displayedExperiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`timeline-item ${
                exp.id % 2 === 0 ? "right" : "left"
              } ${expandedExperience === index ? "expanded" : ""}`}
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
              }}
            >
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-icon">
                    <FaBriefcase />
                  </div>
                  <div className="timeline-title">
                    <h3>{exp.role}</h3>
                    <h4>{exp.company}</h4>
                  </div>
                  <button
                    className="expand-btn"
                    onClick={() => toggleExperience(index)}
                  >
                    {expandedExperience === index ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </button>
                </div>

                <div className="timeline-meta">
                  <span className="timeline-duration">
                    <FaCalendarAlt className="me-2" /> {exp.duration}
                  </span>
                  <span className="timeline-location">{exp.location}</span>
                </div>

                <p className="timeline-description">{exp.description}</p>

                <div
                  className={`timeline-details ${
                    expandedExperience === index ? "show" : ""
                  }`}
                >
                  <div className="responsibilities">
                    <h5>Key Responsibilities:</h5>
                    <ul>
                      {exp.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="skills-used">
                    <h5>Skills Applied:</h5>
                    <div className="skill-tags">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="company-link"
                    >
                      <FaExternalLinkAlt className="me-2" /> Visit Company
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less button */}
        {experiences.length > 4 && (
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
                  Show More ({experiences.length - 4} more)
                </>
              )}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Experience;
