/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import footImg from "../../assets/footer.webp";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      
      <h3>Future Cast&copy;</h3>
      <hr />
      <Container>
        <Row>
          <Col lg={3}>
            <Link to="/" className="FooterLink">
              Home
            </Link>
            <Link to="/Blogs" className="FooterLink">
              Blog
            </Link>
            <Link to="/About" className="FooterLink">
              About
            </Link>
            <Link to="/Contact" className="FooterLink">
              Contact
            </Link>
            <Link to="/Support" className="FooterLink">
              Support
            </Link>
            <Link to="/Careers" className="FooterLink">
              Careers
            </Link>
            <div className="media-icons">
            <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube-play"></i>
              </a>
              {/* <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
               */}
            </div>
          </Col>
          <Col
            xs={{ order: "first" }}
            lg={{ span: "6", order: "2" }}
            className="para_sec"
          >
            <p className="para">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore
            </p>
            <div className="Support_section">
              <p>Loving Future Cast? Support us.</p>&nbsp; <p>Learn More</p>
            </div>
          </Col>
          <Col lg={3} xs={{ order: "last" }}>
            <Image src={footImg} fluid className="fotimg" />
          </Col>
        </Row>
        <Row className="form">
          <ul>
            <p>Copyright 2021 - All rights reserved</p>
            <li>
              <Link to="/Privacy-Policy" className="FooterLink">
                <u>Privacy Statement</u>
              </Link>
            </li>
            <li>
              <Link to="/Responsible-Disclosure" className="FooterLink">
                <u>Responsible Disclosure</u>
              </Link>
            </li>
          </ul>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
