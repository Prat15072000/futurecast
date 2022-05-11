import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

import mic from "../../assets/about.webp";
import im1 from "../../assets/entre.png";
import im2 from "../../assets/security.webp";
import im3 from "../../assets/development.webp";
import Jumbotron from "../../components/jumbotron/jumbotron";
import Project_card_animation from "../../components/Project_card_animation/Project_card_animation";

import "./About.scss";
import ProjectCard from "../../components/Project-Card/Project-Card";

const About = props => {
  return (
    <div className="About">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="head_overlay">
        <h3>About</h3>
      </div>
      <Jumbotron img_center={mic} />

      <h4 className="AboutHead">Growth, Personal Finance, Future</h4>

      <p className="AboutRead">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>

      <div className="about_section">
        <Container>
          <Row className="about_section_block">
            <Col lg={8}>
              <h3>Growth Enthusiast</h3>
              <h6>Exploring the unexplored</h6>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et
            </Col>
            <Col lg={4} className="imgcont">
              <Image src={im1} fluid />
            </Col>
          </Row>
          <Row className="about_section_block">
            <Col lg={8}>
              <h3>Security Researcher</h3>
              <h6>More into Web-Application</h6>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et
            </Col>
            <Col lg={4} className="imgcont">
              <Image src={im2} fluid />
            </Col>
            <h3 className="text-center">Hall Of Fame</h3>
            <hr />
            <div className="blue_strip"></div>
            <Container>
              <Row>
                <Col></Col>
                <Col lg={2} xs={12}>
                  <div className="achievebox">
                    <h5>70+ Bugs Reported </h5>
                  </div>
                </Col>
                <Col></Col>
                <Col lg={3} xs={12}>
                  <div className="achievebox">
                    <h5>40+ Bugs Acknowledged</h5>
                  </div>
                </Col>
                <Col></Col>
                <Col lg={3} xs={12}>
                  <div className="achievebox">
                    <h5>Secured sites like Ebay, DBA and many more</h5>
                  </div>
                </Col>
                <Col></Col>
              </Row>
            </Container>
          </Row>
          <Row className="about_section_block">
            <Col lg={8}>
              <h3>Developer</h3>
              <h6>Web Development, Android Development</h6>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et
            </Col>
            <Col lg={4} className="imgcont">
              <Image src={im3} fluid />
            </Col>
            <div className="project_head">Past Projects</div>
            <Container>
              <Row>
                <Project_card_animation />
              </Row>
            </Container>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className="Contact_Ques">
          <Col lg={3}></Col>
          <Col lg={4} xs={12}>
            <p>Want to hire my services?</p>
          </Col>
          <Col lg={2} xs={12} className="contactButton">
            <p>Connect</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
