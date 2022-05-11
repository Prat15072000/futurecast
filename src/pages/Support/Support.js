import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Ad_Box from "../../components/Ad_Box/Ad_Box";
import mic from "../../assets/ads.webp";
import { Helmet } from "react-helmet";

import "./Support.scss";
import Jumbotron from "../../components/jumbotron/jumbotron";

const Support = () => {
  return (
    <div className="Support">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="head_overlay">
        <h3>Support Us</h3>
        <p>Loving the Company Name? Help us by clicking on a few ads.</p>
      </div>
      <Jumbotron img_center={mic} />
      <Ad_Box />
      <Container>
        <Row>
          <Col lg={8} className="red " />
          <Col lg={1} />
          <Col lg={3} className="green" />
        </Row>
        <Row>
          <Col lg={6} className="blue" />
          <Col lg={6} className="orange" />
        </Row>
      </Container>
      <Ad_Box />
    </div>
  );
};

export default Support;
