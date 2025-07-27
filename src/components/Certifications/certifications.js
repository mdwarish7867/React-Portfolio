// src/components/Certifications.js
import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaChevronDown,
  FaChevronUp,
  FaExternalLinkAlt,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import "./certifications.css";

const Certifications = () => {
  const [expandedCert, setExpandedCert] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCert, setCurrentCert] = useState(null);
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

  const toggleCert = (index) => {
    if (expandedCert === index) {
      setExpandedCert(null);
    } else {
      setExpandedCert(index);
    }
  };

  const openModal = (cert) => {
    setCurrentCert(cert);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Certifications data - sorted in descending order (newest first)
  const certifications = [
    {
      id: 24,
      name: "Interview Toolkit (HR Rounds) — #5DinMicrosoftIn",
      authority: "Unstop",
      date: "July 2025",
      description:
        "Completed the 'Interview Toolkit' certification under Unstop’s #5DinMicrosoftIn challenge. Focused on HR interview techniques, STAR-method responses, scenario-based questions, and effective personal branding in interviews.",
      thumbnail: "https://i.postimg.cc/Y9NLZLb6/day3.jpg",
      fullImage: "https://i.postimg.cc/Y9NLZLb6/day3.jpg",
      verifyUrl: "https://unstop.com/", // You can replace with actual certificate link if available
      skills: [
        "HR Interviews",
        "Behavioral Questions",
        "STAR Method",
        "Communication Skills",
        "Interview Preparation",
      ],
    },
    {
      id: 23,
      name: "Microsoft Interview Preparation — #5DinMicrosoftIn",
      authority: "Unstop",
      date: "July 2025",
      description:
        "Completed the 'Microsoft Interview Preparation' module as part of Unstop’s #5DinMicrosoftIn challenge. Gained comprehensive insights into Microsoft’s technical interview process, coding strategies, and system design fundamentals.",
      thumbnail: "https://i.postimg.cc/sxVGrfNt/day1.jpg",
      fullImage: "https://i.postimg.cc/sxVGrfNt/day1.jpg",
      verifyUrl: "https://unstop.com/", // You can replace with actual certificate link if available
      skills: [
        "Technical Interviews",
        "System Design",
        "Coding Strategies",
        "Interview Preparation",
        "Problem Solving",
      ],
    },
    {
      id: 22,
      name: "Data Structures and Algorithms Using Java - An Interactive Way",
      authority: "Infosys Springboard",
      date: "July 2025",
      description:
        "📚 Successfully completed the 'Data Structures and Algorithms Using Java – An Interactive Way' course. Enhanced problem-solving skills with practical knowledge of arrays, linked lists, stacks, queues, trees, and algorithms.",
      thumbnail:
        "https://i.postimg.cc/Wzr89fG4/Data-Structures-and-Algorithms-Using-Java-An-Interactive-Way-page-0001.jpg",
      fullImage:
        "https://i.postimg.cc/Wzr89fG4/Data-Structures-and-Algorithms-Using-Java-An-Interactive-Way-page-0001.jpg",
      verifyUrl: "https://verify.onwingspan.com/",
      skills: [
        "Data Structures",
        "Algorithms",
        "Java Programming",
        "Problem Solving",
        "Coding Interviews",
      ],
    },
    {
      id: 21,
      name: "Learning Full Stack Development",
      authority: "Infosys Springboard",
      date: "July 2025",
      description:
        "🌐 Completed the 'Learning Full Stack Development' course. Acquired skills in frontend & backend development, API integration, and deployment workflows to build real-world full stack web applications.",
      thumbnail:
        "https://i.postimg.cc/JnSK5WBg/Learning-Full-Stack-Development-page-0001.jpg",
      fullImage:
        "https://i.postimg.cc/JnSK5WBg/Learning-Full-Stack-Development-page-0001.jpg",
      verifyUrl: "https://verify.onwingspan.com/",
      skills: [
        "Full Stack Development",
        "Frontend Development",
        "Backend Development",
        "API Integration",
        "Web Deployment",
      ],
    },
    {
      id: 20,
      name: "Effective Presentations",
      authority: "HP LIFE (HP Foundation)",
      date: "July 2025",
      description:
        "🎤 Completed the 'Effective Presentations' course by HP LIFE. Gained confidence and techniques to deliver impactful presentations in business settings.",
      thumbnail:
        "https://i.postimg.cc/hvdT6wN6/Effective-Presentations-page-0001.jpg",
      fullImage:
        "https://i.postimg.cc/hvdT6wN6/Effective-Presentations-page-0001.jpg",
      verifyUrl: "https://www.life-global.org/en",
      skills: [
        "Presentation Skills",
        "Public Speaking",
        "Communication",
        "Confidence Building",
        "Business Communication",
      ],
    },
    {
      id: 19,
      name: "Resume Writing and Job Interviewing",
      authority: "HP LIFE (HP Foundation)",
      date: "July 2025",
      description:
        "📝 Completed 'Resume Writing and Job Interviewing' from HP LIFE. Developed skills for creating impactful resumes and performing well in job interviews.",
      thumbnail:
        "https://i.postimg.cc/CMBGRBd7/Resume-Writing-and-Job-Interviewing-page-0001.jpg",
      fullImage:
        "https://i.postimg.cc/CMBGRBd7/Resume-Writing-and-Job-Interviewing-page-0001.jpg",
      verifyUrl: "https://www.life-global.org/en",
      skills: [
        "Resume Writing",
        "Interview Preparation",
        "Professional Communication",
        "Job Search Skills",
        "Career Development",
      ],
    },
    {
      id: 18,
      name: "Social Media Marketing",
      authority: "HP LIFE (HP Foundation)",
      date: "July 2025",
      description:
        "📱 Successfully completed the 'Social Media Marketing' course by HP LIFE. Learned how to promote products and services effectively through various social media channels.",
      thumbnail:
        "https://i.postimg.cc/pT7K0xcK/Social-Media-Marketing-page-0001.jpg",
      fullImage:
        "https://i.postimg.cc/pT7K0xcK/Social-Media-Marketing-page-0001.jpg",
      verifyUrl: "https://www.life-global.org/en",
      skills: [
        "Social Media Strategy",
        "Content Marketing",
        "Digital Marketing",
        "Audience Engagement",
        "Brand Awareness",
      ],
    },
    {
      id: 17,
      name: "Effective Business Websites",
      authority: "HP LIFE (HP Foundation)",
      date: "July 2025",
      description:
        "🌐 Completed the 'Effective Business Websites' course by HP LIFE. Gained practical insights into building and maintaining a professional business website that attracts and engages customers.",
      thumbnail:
        "https://i.postimg.cc/PxNmzNyt/Effective-Business-Websites-page-0001.jpg",
      fullImage:
        "https://i.postimg.cc/PxNmzNyt/Effective-Business-Websites-page-0001.jpg",
      verifyUrl: "https://www.life-global.org/en",
      skills: [
        "Website Planning",
        "Web Content Strategy",
        "Digital Presence",
        "Online Business",
        "User Engagement",
      ],
    },
    {
      id: 16,
      name: "Data Science & Analytics",
      authority: "HP LIFE (HP Foundation)",
      date: "July 2025",
      description:
        "📊 Successfully completed the 'Data Science & Analytics' course by HP LIFE. Learned the basics of collecting, organizing, and analyzing data to support informed decision-making in businesses.",
      thumbnail: "https://i.postimg.cc/t4GWWk9v/data-page-0001.jpg",
      fullImage: "https://i.postimg.cc/t4GWWk9v/data-page-0001.jpg",
      verifyUrl: "https://www.life-global.org/en",
      skills: [
        "Data Analysis",
        "Data Organization",
        "Data-Driven Decision Making",
        "Information Literacy",
        "Data Literacy",
      ],
    },

    {
      id: 16,
      name: "Data Science & Analytics",
      authority: "HP LIFE (HP Foundation)",
      date: "July 2025",
      description:
        "📊 Successfully completed the 'Data Science & Analytics' course by HP LIFE. Learned the basics of collecting, organizing, and analyzing data to support informed decision-making in businesses.",
      thumbnail: "https://i.postimg.cc/t4GWWk9v/data-page-0001.jpg",
      fullImage: "https://i.postimg.cc/t4GWWk9v/data-page-0001.jpg",
      verifyUrl: "https://www.life-global.org/en", // replace if needed
      skills: [
        "Data Analysis",
        "Data Organization",
        "Data-Driven Decision Making",
        "Information Literacy",
        "Data Literacy",
      ],
    },

    {
      id: 15,
      name: "AI for Beginners",
      authority: "HP LIFE (HP Foundation)",
      date: "July 2025",
      description:
        "🤖 Successfully completed the 'AI for Beginners' course by HP LIFE. Gained a foundational understanding of artificial intelligence, its applications in business, the role of data, and its ethical implications.",
      thumbnail: "https://i.postimg.cc/L8kfTPX9/AI-page-0001.jpg",
      fullImage: "https://i.postimg.cc/L8kfTPX9/AI-page-0001.jpg",
      verifyUrl: "https://www.life-global.org/en", // replace with actual if available
      skills: [
        "Artificial Intelligence Basics",
        "AI in Business",
        "Data and AI",
        "Ethical Implications of AI",
        "Tech Awareness",
      ],
    },

    {
      id: 14,
      name: "Python 101 for Data Science",
      authority: "Cognitive Class (Powered by IBM Developer Skills Network)",
      date: "July 2025",
      description:
        "📘 Successfully completed the 'Python 101 for Data Science' course offered by Cognitive Class and powered by IBM. Gained foundational knowledge of Python programming in the context of data science applications.",
      thumbnail:
        "https://i.postimg.cc/cHvX3J6w/IBM-PY0101-EN-Certificate-Cognitive-Class-page-0001.jpg",
      fullImage:
        "https://i.postimg.cc/cHvX3J6w/IBM-PY0101-EN-Certificate-Cognitive-Class-page-0001.jpg",
      verifyUrl:
        "https://courses.cognitiveclass.ai/certificates/ee529c26a0cd43ebbf39c812f7fd6352",
      skills: [
        "Python Programming Basics",
        "Data Structures in Python",
        "Control Flow and Loops",
        "Functions and Modules",
        "Data Science Fundamentals",
      ],
    },
    {
      id: 13,
      name: "Full Stack Web Development With MERN STACK & GenAI 2025",
      authority: "Udemy (Masynctech Coding School)",
      date: "July 2025",
      description:
        "🚀 Completed an 89.5-hour hands-on course on MERN Stack and GenAI. Developed full stack web applications and explored modern AI integrations in real-world projects.",
      thumbnail:
        "https://i.postimg.cc/qvLgqCDk/MERN-STACK-UDEMY-CERTIFICATE.jpg",
      fullImage:
        "https://i.postimg.cc/qvLgqCDk/MERN-STACK-UDEMY-CERTIFICATE.jpg",
      verifyUrl: "https://ude.my/UC-43346e61-36dd-4374-a30d-d97f8855ebe1",
      skills: [
        "MongoDB, Express.js, React.js, Node.js",
        "GenAI Integrations in Web Apps",
        "Full Stack Project Development",
        "API Handling & RESTful Services",
        "Frontend & Backend Deployment",
        "Authentication and Authorization",
      ],
    },
    {
      id: 12,
      name: "Full Stack Web Development with Python",
      authority: "SHASHI INFOTECH RANCHI",
      date: "March 2025",
      description:
        "🖥️ Completed a hands-on internship in Full Stack Web Development using Python. 🔧 Gained industry-oriented experience in web development with real-time projects and expert mentorship.",
      thumbnail:
        "https://i.postimg.cc/fWGsQ52w/INTERNSHIP-FULL-STACK-WITH-PYTHON-page-0001.jpg",
      fullImage:
        "https://i.postimg.cc/fWGsQ52w/INTERNSHIP-FULL-STACK-WITH-PYTHON-page-0001.jpg",
      verifyUrl:
        "https://i.postimg.cc/fWGsQ52w/INTERNSHIP-FULL-STACK-WITH-PYTHON-page-0001.jpg",
      skills: [
        "HTML, CSS, JavaScript",
        "Python for Web Development",
        "Frontend and Backend Integration",
        "Database Connectivity (likely MySQL)",
        "Web Project Deployment",
        "Internship-Level Team Collaboration",
      ],
    },
    {
      id: 11,
      name: "Prompt Engineering for ChatGPT",
      authority: "GREAT LEARNING",
      date: "February 2025",
      description:
        "🤖 Learned how to craft effective prompts to get the best results from ChatGPT and other language models. 🧠 Explored real-world use cases to enhance productivity and AI interaction.",
      thumbnail:
        "https://i.postimg.cc/brSJvWPg/Prompt-Engineering-for-Chat-GPT-Certificate-page-0001.jpg",
      fullImage:
        "https://i.postimg.cc/brSJvWPg/Prompt-Engineering-for-Chat-GPT-Certificate-page-0001.jpg",
      verifyUrl: "https://www.mygreatlearning.com/",
      skills: [
        "Prompt Structuring Techniques",
        "Natural Language Understanding",
        "Task-Specific Prompting",
        "Use Cases in Business and Education",
        "AI-Powered Problem Solving",
        "ChatGPT Workflow Optimization",
      ],
    },
    {
      id: 10,
      name: "Full Stack Web Development",
      authority: "CODEC TECHNOLOGIES",
      date: "May 2025",
      description:
        "🌐 Completed a comprehensive training in Full Stack Web Development, covering both frontend and backend technologies. 🧑‍💻 Built complete web applications from scratch using modern tools and frameworks.",
      thumbnail:
        "https://i.postimg.cc/d113bDSz/MD-WARISH-ANSARI-Certificate-page-0001.jpg",
      fullImage:
        "https://i.postimg.cc/d113bDSz/MD-WARISH-ANSARI-Certificate-page-0001.jpg",
      verifyUrl: "https://codectechnologies.in/",
      skills: [
        "HTML, CSS & JavaScript",
        "Frontend Frameworks (likely React or Bootstrap)",
        "Backend with Node.js or PHP",
        "Database Management (MySQL or MongoDB)",
        "RESTful APIs",
        "Project Deployment & Version Control (Git)",
      ],
    },
    {
      id: 9,
      name: "Paper Presentation - AI in Environmental Sciences",
      authority: "RKDF University Ranchi",
      date: "June 2024",
      description:
        "🧠 Presented a paper on Recent Applications of Artificial Intelligence to Environmental Sciences at the international conference SymbioSphere 2024. 🌱 Explored AI’s impact on sustainability and eco-friendly innovations.",
      thumbnail:
        "https://i.postimg.cc/ZYXPLhWT/RKDF-SYMBIOSPHERE-CERTIFICATE-page-0001.jpg",
      fullImage:
        "https://i.postimg.cc/ZYXPLhWT/RKDF-SYMBIOSPHERE-CERTIFICATE-page-0001.jpg",
      verifyUrl: "https://rkdfuniversity.org/",
      skills: [
        "AWS",
        "Cloud Computing",
        "EC2",
        "S3",
        "Lambda",
        "CloudFormation",
      ],
    },
    {
      id: 8,
      name: " 2D & 3D Modelling using AutoCAD",
      authority: "RKDF University Ranchi",
      date: "October 2023",
      description:
        "📐 Participated in a 5-day workshop covering 2D & 3D design using AutoCAD. 🛠️ Built foundational CAD skills for engineering and architectural drafting.",
      thumbnail:
        "https://i.postimg.cc/L4JBfs6C/RKDF-AUTOCAD-CERTIFICATE-page-0001.jpg",
      fullImage:
        "https://i.postimg.cc/L4JBfs6C/RKDF-AUTOCAD-CERTIFICATE-page-0001.jpg",
      verifyUrl: "https://rkdfuniversity.org/",
      skills: [
        "2D Drawing Techniques in AutoCAD",
        "3D Modelling Basics",
        "Layer and Dimension Tools",
        "CAD Interface Navigation",
        "Precision Drawing Tools",
        "Technical Drafting Skills",
      ],
    },
    {
      id: 7,
      name: "Enrolment & Update Process",
      authority: "UIDAI (Unique Identification Authority of India)",
      date: "April 2022",
      description:
        "🆔 Successfully completed training on Aadhaar Enrolment and Update Process. 🔐 Learned the official procedures and responsibilities involved in managing citizen identity data.",
      thumbnail:
        "https://i.postimg.cc/Jh7jhr2Q/UIDAI-CERTIFICATE-page-0001.jpg",
      fullImage:
        "https://i.postimg.cc/Jh7jhr2Q/UIDAI-CERTIFICATE-page-0001.jpg",
      verifyUrl: "https://uidai.gov.in/",
      skills: [
        "Aadhaar Enrolment Procedure",
        "Update Process Handling",
        "Data Verification Protocols",
        "Document Validation Techniques",
        "Biometric & Demographic Data Entry",
        "UIDAI Guidelines & Compliance",
      ],
    },
    {
      id: 6,
      name: "Web Development with PHP",
      authority: "STP COMPUTER EDUCATION",
      date: "August 2024",
      description:
        "🌐 Learned to build dynamic websites using HTML, CSS, JavaScript, and PHP for backend scripting. 🧩 Covered both frontend and backend development to create interactive web projects.",
      thumbnail:
        "https://i.postimg.cc/k4B8xj96/STP-WEB-DEVELOPMENT-COURSE-CERTIFICATE-page-0001.jpg",
      fullImage:
        "https://i.postimg.cc/k4B8xj96/STP-WEB-DEVELOPMENT-COURSE-CERTIFICATE-page-0001.jpg",
      verifyUrl:
        "https://www.stpcomputereducation.com/certificate-verification",
      skills: [
        "HTML & CSS",
        "JavaScript Basics",
        "PHP Programming",
        "Form Handling and Validation",
        "MySQL Database Integration",
        "Building Dynamic Web Pages",
      ],
    },
    {
      id: 5,
      name: "Advanced Diploma in Computer Applications (ADCA)",
      authority: "STP COMPUTER EDUCATION",
      date: "June 2025",
      description:
        "Certifie💼 Completed an in-depth program focused on advanced computer applications, office tools, and web basics. 🧠 A step ahead of DCA, this course builds technical proficiency for administrative and IT-related roles.",
      thumbnail:
        "https://i.postimg.cc/vZXLdxZz/STP-ADCA-COURSE-CERTIFICATE-page-0001.jpg",
      fullImage:
        "https://i.postimg.cc/vZXLdxZz/STP-ADCA-COURSE-CERTIFICATE-page-0001.jpg",
      verifyUrl:
        "https://www.stpcomputereducation.com/certificate-verification",
      skills: [
        "Advanced Microsoft Office (Word, Excel, PowerPoint)",
        "Tally with GST Basics",
        "Database Management (MS Access)",
        "HTML and Basic Web Design",
        "Internet and Email Handling",
        "Computer Networking Fundamentals",
      ],
    },
    {
      id: 4,
      name: "Graphic Design Course",
      authority: "STP COMPUTER EDUCATION",
      date: "November 2024",
      description:
        "🎨 Developed visual storytelling skills using industry-standard design tools. 🖼️ Mastered the art of creating logos, banners, posters, and social media graphics.",
      thumbnail:
        "https://i.postimg.cc/DzCL4VV3/STP-GRAPHIC-DESIGN-COURSE-CERTIFICATE-page-0001.jpg",
      fullImage:
        "https://i.postimg.cc/DzCL4VV3/STP-GRAPHIC-DESIGN-COURSE-CERTIFICATE-page-0001.jpg",
      verifyUrl:
        "https://www.stpcomputereducation.com/certificate-verification",
      skills: [
        "Graphic Design Principles",
        "Adobe Photoshop Basics",
        "Adobe Illustrator Basics",
        "Logo and Poster Design",
        "Color Theory and Typography",
        "Social Media Graphics Creation",
      ],
    },
    {
      id: 3,
      name: "Diploma in Computer Applications (DCA)",
      authority: "STP COMPUTER EDUCATION",
      date: "April 2024",
      description:
        "🖥️ Completed a comprehensive diploma covering core computer applications and office tools. 📊 Built a strong foundation for both technical and administrative computer usage.",
      thumbnail:
        "https://i.postimg.cc/HkgQf40R/STP-DCA-COURSE-CERTIFICATE-page-0001.jpg",
      fullImage:
        "https://i.postimg.cc/HkgQf40R/STP-DCA-COURSE-CERTIFICATE-page-0001.jpg",
      verifyUrl:
        "https://www.stpcomputereducation.com/certificate-verification",
      skills: [
        "Basic Computer Fundamentals",
        "Microsoft Office (Word, Excel, PowerPoint)",
        "Internet and Email Handling",
        "Operating System Usage",
        "File Management and Data Entry",
        "Basic HTML and Web Concepts",
      ],
    },
    {
      id: 2,
      name: "Adobe Photoshop Course",
      authority: "STP COMPUTER EDUCATION",
      date: "August 2023",
      description:
        "🎨 Explored the world of creative design using Adobe Photoshop.🖌️ Learned image editing, retouching, and graphic designing techniques used in digital media.",
      thumbnail:
        "https://i.postimg.cc/mDJ9VQ2d/STPPHOTOSHOPCOURSECERTIFICATE-page-0001.jpg",
      fullImage:
        "https://i.postimg.cc/mDJ9VQ2d/STPPHOTOSHOPCOURSECERTIFICATE-page-0001.jpg",
      verifyUrl:
        "https://www.stpcomputereducation.com/certificate-verification",
      skills: [
        "Adobe Photoshop Interface",
        "Image Editing and Retouching",
        "Layer and Masking Techniques",
        "Typography and Text Effects",
        "Graphic Design Basics",
        "Photo Manipulation and Filters",
      ],
    },
    {
      id: 1,
      name: "Basic Computer Course",
      authority: "STP COMPUTER EDUCATION",
      date: "October 2023",
      description:
        "💻 Gained foundational knowledge in computer operations, file management, and basic office tools 📂 Ideal for building strong basics in computer literacy for future technical learning.",
      thumbnail:
        "https://i.postimg.cc/tCP3Sm6F/STP-BASIC-COMPUTER-COURSE-CERTIFICATE-page-0001.jpg",
      fullImage:
        "https://i.postimg.cc/tCP3Sm6F/STP-BASIC-COMPUTER-COURSE-CERTIFICATE-page-0001.jpg",

      verifyUrl:
        "https://www.stpcomputereducation.com/certificate-verification",
      skills: [
        "Basic Computer Operations",
        "Microsoft Office (Word, Excel, PowerPoint)",
        "Windows OS Fundamentals",
        "Internet Usage",
        "Typing and File Management",
      ],
    },
  ];

  // Sort certifications in descending order by ID
  const sortedCerts = [...certifications].sort((a, b) => b.id - a.id);

  // Display only 6 certificates initially
  const displayedCerts = showAll ? sortedCerts : sortedCerts.slice(0, 6);

  return (
    <section
      id="certifications"
      className={`certifications-section py-5 ${inView ? "in-view" : ""}`}
      ref={sectionRef}
    >
      <Container>
        <div className="section-header mb-5">
          <h2 className="section-title">Certifications</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle text-center text-light mt-4">
            My professional credentials. Click to view details.
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {displayedCerts.map((cert, index) => (
            <Col key={cert.id} lg={6} className="cert-col">
              <div
                className={`cert-card ${
                  expandedCert === index ? "expanded" : ""
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(30px)",
                }}
              >
                <div className="cert-header">
                  <div
                    className="cert-thumbnail"
                    onClick={() => openModal(cert)}
                  >
                    <img
                      src={cert.thumbnail}
                      alt={cert.name}
                      className="thumbnail-img"
                    />
                    <div className="thumbnail-overlay">View Full</div>
                  </div>
                  <div className="cert-info">
                    <div className="cert-title-container">
                      <h3 className="cert-title">{cert.name}</h3>
                      <button
                        className="expand-btn"
                        onClick={() => toggleCert(index)}
                      >
                        {expandedCert === index ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </button>
                    </div>
                    <div className="cert-meta">
                      <span className="cert-authority">{cert.authority}</span>
                      <span className="cert-date">{cert.date}</span>
                    </div>
                    <p className="cert-description">{cert.description}</p>
                  </div>
                </div>

                <div
                  className={`cert-details ${
                    expandedCert === index ? "show" : ""
                  }`}
                >
                  <div className="skills-acquired">
                    <h4>Skills Acquired:</h4>
                    <div className="skill-tags">
                      {cert.skills.map((skill, i) => (
                        <span key={i} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="verify-btn"
                  >
                    <FaExternalLinkAlt className="me-2" /> Verify Credential
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Show More/Less Button */}
        {sortedCerts.length > 6 && (
          <div className="text-center mt-5">
            <Button
              variant="outline-primary"
              className="show-more-btn"
              onClick={toggleShowAll}
            >
              {showAll ? (
                <>
                  <FaMinus className="me-2" /> Show Less
                </>
              ) : (
                <>
                  <FaPlus className="me-2" /> Show More
                </>
              )}
            </Button>
          </div>
        )}
      </Container>

      {/* Full Certificate Modal */}
      {modalOpen && currentCert && (
        <div className="cert-modal" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ marginTop: "20vh" }} // Account for sticky navbar
          >
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <img
              src={currentCert.fullImage}
              alt={currentCert.name}
              className="full-cert-img"
            />
            <div className="cert-modal-info">
              <h3>{currentCert.name}</h3>
              <p>Issued by: {currentCert.authority}</p>
              <p>Date: {currentCert.date}</p>
              <a
                href={currentCert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="verify-btn"
              >
                <FaExternalLinkAlt className="me-2" /> Verify Credential
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
