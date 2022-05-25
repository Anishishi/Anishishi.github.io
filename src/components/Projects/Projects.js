import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import sisr360 from "../../Assets/Projects/sisr360.jpeg";
import widar_proj from "../../Assets/Projects/widar_proj.png";
import babylon_icon from "../../Assets/Projects/babylon_icon.svg";
import { GameScene } from "../Make3DWorld/Create3DWorld";

function Projects() {
  return (
    <Col>
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="primary-color">Works </strong>
          </h1>
          <p style={{ color: "grey" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={widar_proj}
                isBlog={false}
                title="WIDAR app - 3D Scanning and editting app -"
                description="We are creating WIDAR app on iOS and Android.
              The app enables you to scan the world to create 3D models, edit them easily and share them on Social Media or our timeline in the app."
                link="https://widar.io/en/top/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={sisr360}
                isBlog={false}
                title="360° Single Image Super Resolution"
                description="We tackled the single image super resolution for 360° images. We addressed the distortion of 360° images cause the quality of the SISR. Finally, we published
               the paper on ICIP2021."
                link="https://github.com/Anishishi/360SISR"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={babylon_icon}
                isBlog={false}
                title="Sample playground for Babylon JS"
                description="Currently studying about BabylonJS, which is one of the most famous 3D web packages.
                I embedded the 3D viewer into this site because I love 3D creation and public displays are often motivational. Also, this looks great!"
                link="#babylon-root"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <GameScene />
    </Col>
  );
}

export default Projects;
