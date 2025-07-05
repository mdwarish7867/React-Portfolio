// src/components/Social.js
import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  SiGmail,
  SiLeetcode,
  SiGeeksforgeeks,
  SiHackerrank,
} from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";
import "./social.css";

const Social = () => {
  const [inView, setInView] = useState(false);
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

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/md-warish-ansari-46b1ab258/",
      color: "#0077B5",
    },
    {
      name: "X (Twitter)",
      icon: <FaXTwitter />,
      url: "https://x.com/mdwarish888",
      color: "#000000", // X branding is black
    },

    {
      name: "Gmail",
      icon: <SiGmail />,
      url: "mailto:warishansari018@gmail.com",
      color: "#D14836",
    },

    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/mdwarish7867",
      color: "#181717",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/mohammadwarish2024/",
      color: "#E1306C",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/profile.php?id=100074841669595",
      color: "#1877F2",
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      url: "https://youtube.com/channel",
      color: "#FF0000",
    },
    {
      name: "Discord",
      icon: <FaDiscord />,
      url: "https://discord.com/mohammadwarishansari_47491",
      color: "#5865F2",
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode />,
      url: "https://leetcode.com/mdwarish7867/", // Change if different
      color: "#FFA116",
    },
    {
      name: "GeeksforGeeks",
      icon: <SiGeeksforgeeks />,
      url: "https://www.geeksforgeeks.org/user/warishann144/", // Adjust if different
      color: "#2F8D46",
    },
    {
      name: "HackerRank",
      icon: <SiHackerrank />,
      url: "https://www.hackerrank.com/profile/warishansari018", // Replace if different
      color: "#2EC866",
    },
  ];

  return (
    <section
      id="social"
      className={`social-section py-5 ${inView ? "in-view" : ""}`}
      ref={sectionRef}
    >
      <Container>
        <div className="section-header mb-5">
          <h2 className="section-title">Connect With Me</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle text-center text-light mt-4">
            Find me on these platforms and let's collaborate
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {socialLinks.map((social, index) => (
            <Col key={social.name} lg={3} md={4} sm={6} className="social-col">
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(30px)",
                }}
              >
                <div className="social-icon" style={{ color: social.color }}>
                  {social.icon}
                </div>
                <h3 className="social-name">{social.name}</h3>
                <div className="social-hover-text">Visit Profile</div>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Social;
