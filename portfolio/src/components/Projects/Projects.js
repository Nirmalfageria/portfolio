import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tathva from "../../Assets/Projects/tathva.png";
import rig from "../../Assets/Projects/rig.png";
import videotube from "../../Assets/Projects/videotube.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rig}
              isBlog={false}
              title="RIG Website"
              description="Designed and developed the frontend for the RIG club website, ensuring a smooth and user-friendly experience. A platform for managing activities, communication, and resource sharing. Built with Next.js, Node.js, and MongoDB, it features event and project management, plus real-time notifications to keep members engaged. Integrated GSAP animations for interactive transitions, enhancing visual appeal and usability. 🚀"
              ghLink="https://github.com/rig-website/rig_web"
              demoLink="https://rignitc.com/"
            />
          </Col>
{/*  */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tathva}
              isBlog={false}
              title="Tathva'24"
              description="Led the frontend development for Tathva'24, ensuring a seamless and engaging user experience. Built with Next.js, Tailwind CSS, and GSAP, the website featured smooth animations, real-time event updates, dynamic scheduling, and an intuitive registration system. Leveraged GSAP with ScrollTrigger to create fluid, interactive animations, enhancing visual appeal and user engagement. 🚀"
              ghLink="https://github.com/Tathva-24/t24-frontend-main"
              demoLink="https://www.tathva.org/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={videotube}
              isBlog={false}
              title="VideoTube"
              description="A backend-heavy video-sharing platform inspired by YouTube, designed for video uploads, playback, and engagement tracking. It supports real-time likes, dislikes, and tweets, ensuring interactive experiences. Built with Node.js, MongoDB, and cloud storage, the platform focuses on scalability, optimized streaming, and secure data management. Future enhancements include recommendations, comments, and analytics to improve discovery. 🚀"
              ghLink="https://github.com/Nirmalfageria/Backend_Chai"
            
            />
          </Col>

        

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
