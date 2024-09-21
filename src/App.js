// src/App.js
import React from 'react';
import './App.css';
import { FaAws, FaRedhat, FaGithub, FaEnvelope, FaLinkedin, FaCode } from 'react-icons/fa';
import { FaCertificate } from 'react-icons/fa';

/*--------------------------------------Functions------------------------------------------*/

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Internships/>
      <Certifications />
      <Contact />
      <Footer/>
    </div>
  );
}
/*--------------------------------------------------Header--------------------------------------*/
function Header() {
  return (
    <header>
      <div className="header-content">
        <img src="./images/k1 (1).jpg" alt="Kota Chaitanya Sai" className="header-image" />
        <div className="header-text">
          <h1>Kota Chaitanya Sai</h1>
          <p>A Full Stack Developer</p>
          <div className="social-links">
            <a href="https://github.com/chaitanya202205" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
            <a href="mailto:2100030085cseh@gmail.com" className="social-icon">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/in/chaitanya-sai-kota-968721226/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
/*-------------------------------------------------------About-------------------------------------------*/

function About() {
  return (
    <section>
      <h2>About Me</h2>
      <p>Hello! I'm Kota Chaitanya Sai , a Computer Science student at K L  University AP. I'm captivated by coding, algorithms, and solving problems. I'm also enthusiastic about Full Stack Development , and I'm always looking for new opportunities to learn and grow.</p>
    </section>
  );
}

/*---------------------------------------------------------------Skills----------------------------------------------*/

function Skills() {
  const skills = [
   "C Programming","Java","HTML", 
     "MYSQL","Spring Boot", "Hibernate","MongoDB",
    "GitBash","GitHub",
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

/*-------------------------------------------------------Projects-------------------------------------------*/

function Projects() {
  const projects = [

    {
      name: "DreamDestination  (Tourist and Hospitality Management System)",
      desc: "DreamDestination is a web application developed for the reservation of hotel bookings and tour packages. It provides a solution that connects homestay providers with visitors who want to use them while traveling.",
      role: "Developer",
      tools : "Eclipse IDE, Java, Spring Boot MVC, MySQL, HTML, CSS",
      github: "https://github.com/chaitanya202205/DreamDest/"
    },
      {
      name: "E-Learn (Educational System)",
      desc: "E-Learn is a project designed to assist students, educators, and self-learners in finding high-quality educational resources. This platform aims to simplify the process of locating and downloading study materials across various subjects and educational levels. By providing a centralized repository of resources, E-Learn seeks to enhance the learning experience and make education more accessible to everyone.",
      role: "Developer",
      tools:"Code Ready Studio , Git , JBoss server , JDBC , Oracle DataBase",
      github: "https://github.com/chaitanya202205/E-Learn/"
    },
    
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.name}</h3>
            <p>{project.desc}</p>
            <p><strong>Role:</strong> {project.role}</p>
            <p><strong>Tools:</strong> {project.tools}</p>
            {project.github && (
              <a href={project.github} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="github-link">
                 <FaGithub /> View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}


/*---------------------------------------------Internships----------------------------------------------*/

function Internships() {
  const internships = [
    {
      company: "Swecha Ap",
      position: "Social Internship",
      duration: "June 2022 - july 2022",
      description: "Contributed by developing Interactive Web Application for Balaswecha - A Social cause",
      skills: "Visual Studio Code, HTML, CSS, JavaScript, Git ",
      certificate: "https://drive.google.com/file/d/1VI-Nf1CFkw3D5P2nhRPO1d6vdbAGzlS3/view?usp=sharing",
    },

  ];

  return (
    <section className="internships">
      <h2>My Internships</h2>
      <div className="internships-list">
        
        {internships.map((internship, index) => (
          <div key={index} className="internship-item">
            <h3>{internship.company}</h3>
            <h4>{internship.position}</h4>
            <p><strong>Duration:</strong> {internship.duration}</p>
            <p>{internship.description}</p>
            <p><strong>Skills:</strong> {internship.skills}</p>
            {internship.certificate && (
              <a href={internship.certificate}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="certificate-link">
                 <FaCertificate /> View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/*----------------------------------------Certifications--------------------------------*/

function Certifications() {
  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services Training and Certification",
      link: "https://www.credly.com/badges/7d772277-2276-42c7-a249-4d1a043e8db5/public_url",
      icon: <FaAws />
    },
    {
      name: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services Training and Certification",
      link: "https://www.credly.com/badges/a3b9b2f1-e327-4d66-89f5-52fb36e43f44/public_url",
      icon: <FaAws />
    },
    {
      name: "Red Hat Certified Enterprise Application Developer",
      issuer: "Red Hat",
      link: "https://www.credly.com/badges/273739ba-371e-430a-af22-f33b400b7dd5/public_url",
      icon: <FaRedhat />
    },
    {
      name: "Java (Basic) Certificate",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/c63dbf9055b0",
      icon: <FaCode/>
    }
  ];

  return (
    <section className="certifications">
      <h2>Certifications</h2>
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-item">
            <div className="certification-icon">{cert.icon}</div>
            <div className="certification-content">
              <h3>{cert.name}</h3>
              <p>Issued by: {cert.issuer}</p>
              <a href={cert.link} target="_blank" rel="noopener noreferrer">View Certificate</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/*----------------------------------------------Contact------------------------------------------*/

function Contact() {
  return (
    <section className="contact-section">
      <h2>Get in touch </h2>
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:2100030085cseh@gmail.com" className="contact-link">
            2100030085cseh@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <a
            href="https://github.com/chaitanya202205"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            github.com/chaitanya202205
          </a>
        </div>
      </div>
    </section>
  );
}
/*--------------------------------------------Footer-----------------------------------------*/


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="logo-text">KCS</span>
        </div>
        <div className="footer-links">
          <a href="https://github.com/chaitanya202205" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:2100030085cseh@gmail.com">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/chaitanya-sai-kota-968721226/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        
        <p>&copy; 2024 Kota Chaitanya Sai. All rights reserved.</p>
      </div>
      <div className="footer-decoration">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      
    </footer>
  );
}

export default App;