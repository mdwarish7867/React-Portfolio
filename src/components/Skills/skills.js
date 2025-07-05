import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { DiDjango } from "react-icons/di";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiDocker,
  SiPostman,
  SiAxios,
  SiFirebase,
  SiOpenai,
  SiGithubactions,
  SiExpress,
} from "react-icons/si";

import "./skills.css";

const Skills = () => {
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

  const skills = [
    // --- Frontend ---
    { name: "HTML5", icon: <FaHtml5 />, level: 95, color: "#e34f26" },
    { name: "CSS3", icon: <FaCss3Alt />, level: 90, color: "#264de4" },
    { name: "JavaScript", icon: <FaJs />, level: 90, color: "#f7df1e" },
    { name: "TypeScript", icon: <SiTypescript />, level: 85, color: "#3178c6" },
    { name: "React", icon: <FaReact />, level: 85, color: "#61dafb" },
    { name: "Next.js", icon: <SiNextdotjs />, level: 80, color: "#000000" },
    { name: "Redux", icon: <SiRedux />, level: 75, color: "#764abc" },
    { name: "Bootstrap", icon: <FaBootstrap />, level: 85, color: "#7952b3" },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      level: 75,
      color: "#38b2ac",
    },

    // --- Backend & Databases ---
    { name: "Node.js", icon: <FaNodeJs />, level: 80, color: "#68a063" },
    { name: "Express.js", icon: <SiExpress />, level: 75, color: "#000000" },
    { name: "MongoDB", icon: <SiMongodb />, level: 75, color: "#47a248" },
    { name: "MySQL", icon: <SiMysql />, level: 70, color: "#00758f" },
    { name: "Django", icon: <DiDjango />, level: 65, color: "#092e20" },

    // --- Tools & APIs ---
    { name: "Git", icon: <FaGitAlt />, level: 85, color: "#f14e32" },
    { name: "GitHub", icon: <FaGithub />, level: 90, color: "#181717" },
    { name: "Postman", icon: <SiPostman />, level: 85, color: "#ff6c37" },
    { name: "Axios", icon: <SiAxios />, level: 85, color: "#5a29e4" },
    {
      name: "GitHub Actions",
      icon: <SiGithubactions />,
      level: 60,
      color: "#2088FF",
    },

    // --- AI & Firebase ---
    { name: "OpenAI API", icon: <SiOpenai />, level: 65, color: "#000000" },
    {
      name: "Firebase Auth",
      icon: <SiFirebase />,
      level: 60,
      color: "#FFA611",
    },

    // --- Programming Languages ---
    { name: "Python", icon: <FaPython />, level: 75, color: "#3776ab" },
    { name: "Java", icon: <FaJava />, level: 70, color: "#007396" },
  ];

  const displayedSkills = showAll ? skills : skills.slice(0, 12);

  return (
    <section
      id="skills"
      className={`skills-section py-5 ${inView ? "in-view" : ""}`}
      ref={sectionRef}
    >
      <Container>
        <div className="section-header mb-5">
          <h2 className="section-title">Skills</h2>
          <div className="section-divider"></div>
        </div>

        <Row className="g-4 justify-content-center">
          {displayedSkills.map((skill, index) => (
            <Col key={skill.name} lg={3} md={4} sm={6} className="skill-col">
              <div
                className="skill-card"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(30px)",
                }}
              >
                <div className="skill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-percentage">{skill.level}%</div>
                <div className="skill-progress">
                  <div
                    className="progress-bar"
                    style={{
                      width: inView ? `${skill.level}%` : "0%",
                      background: `linear-gradient(90deg, ${skill.color}, #0d6efd)`,
                      transitionDelay: `${index * 0.15 + 0.2}s`,
                    }}
                  >
                    <span className="progress-value">{skill.level}%</span>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {skills.length > 12 && (
          <div className="text-center mt-4">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn btn-show-more"
            >
              {showAll ? "Show Less" : `Show More (${skills.length - 12} more)`}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Skills;
