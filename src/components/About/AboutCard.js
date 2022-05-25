import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="primary-color">Akito Nishiyama </span>
            from <span className="primary-color"> Tokyo, Japan.</span>
            <br />
            <br />I am a M1 Student at the University of Tokyo, majoring computer vision.
            I am a member of <a className="primary-color" href="https://www.ut-vision.org/sato-lab/"> Y.Sato Lab</a>, 
            but taking a leave of absence for a year. Now I'm co-founder at 
            <a className="primary-color" href="https://www.wogo.ai/en/"> WOGO,Inc.</a>, developing WIDAR,
            which is a 3D scanning and editing app.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Weight train
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching videos on YouTube
            </li>
            <li className="about-activity">
              <ImPointRight /> Drinking
            </li>
          </ul>

          <p style={{ color: "black" }}>
            "All the code is written with your own muscles!"{" "}
          </p>
          <footer className="blockquote-footer">A. Nishiyama</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
